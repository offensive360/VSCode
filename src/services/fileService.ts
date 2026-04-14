import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as crypto from 'crypto';
import { EXCLUDED_EXTENSIONS, EXCLUDED_DIRS, isExcludedFolder } from '../constants';

const zipdir = require('zip-dir');

const MAX_FILE_COUNT = 50_000;
const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB per file
const LARGE_PROJECT_WARNING = 5_000;

export class FileService {

    /**
     * Count source files using the same exclusion rules as zipDirectoryToFile,
     * without zipping. Used for content-fingerprint matching against the dashboard's
     * totalScannedCodeFiles field.
     */
    async countScannableFiles(dirPath: string): Promise<number> {
        if (!dirPath) return 0;
        try { if (!fs.existsSync(dirPath)) return 0; } catch { return 0; }
        let count = 0;
        const walk = (dir: string) => {
            let entries: fs.Dirent[];
            try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    if (!isExcludedFolder(entry.name)) walk(fullPath);
                } else if (this.shouldInclude(fullPath)) {
                    count++;
                }
            }
        };
        walk(dirPath);
        return count;
    }

    /**
     * Zip a directory to a temp file on disk (streaming).
     * For large codebases (500MB+) this avoids Node.js OOM by writing to disk.
     * Returns the path to the temp zip file — caller must delete after use.
     */
    async zipDirectoryToFile(dirPath: string): Promise<{ zipPath: string; fileCount: number; sizeMb: number }> {
        // Count and validate files first
        let fileCount = 0;
        const countFiles = (dir: string) => {
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    // Pattern-based exclusion (handles Backup, Backup1..N, BackupN, etc.)
                    if (!isExcludedFolder(entry.name)) {
                        countFiles(fullPath);
                    }
                } else if (this.shouldInclude(fullPath)) {
                    fileCount++;
                }
            }
        };
        countFiles(dirPath);

        if (fileCount > MAX_FILE_COUNT) {
            throw new Error(
                `Too many files to scan (${fileCount.toLocaleString()}). Maximum is ${MAX_FILE_COUNT.toLocaleString()}. ` +
                `Consider scanning individual folders instead.`
            );
        }

        if (fileCount > LARGE_PROJECT_WARNING) {
            vscode.window.showWarningMessage(
                `Large project detected (${fileCount.toLocaleString()} files). Scan may take longer than usual.`
            );
        }

        // Create zip using zip-dir (returns Buffer), then write to temp file
        const buffer: Buffer = await zipdir(dirPath, {
            filter: (filePath: string) => this.shouldInclude(filePath)
        });

        const zipPath = path.join(os.tmpdir(), `o360_${crypto.randomUUID()}.zip`);
        fs.writeFileSync(zipPath, buffer);

        const sizeMb = Math.round(buffer.length / (1024 * 1024) * 10) / 10;

        return { zipPath, fileCount, sizeMb };
    }

    /**
     * Zip a directory, filtering out binary/build files.
     * Returns in-memory Buffer — use zipDirectoryToFile for large projects.
     */
    async zipDirectory(dirPath: string): Promise<Buffer> {
        return zipdir(dirPath, { filter: (filePath: string) => this.shouldInclude(filePath) });
    }

    /**
     * Zip a single file into a buffer.
     */
    async zipSingleFile(filePath: string): Promise<{ buffer: Buffer; relativeName: string }> {
        const dir = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const buffer = await zipdir(dir, {
            filter: (p: string) => {
                const base = path.basename(p);
                return base === fileName || fs.statSync(p).isDirectory();
            }
        });
        return { buffer, relativeName: fileName };
    }

    /**
     * Check if a file should be included in the scan zip.
     * Case-insensitive on BOTH extension and directory parts so we match
     * VS plugin behaviour (e.g. Backup1/ == backup1/).
     */
    private shouldInclude(filePath: string): boolean {
        const ext = path.extname(filePath).toLowerCase();
        if (EXCLUDED_EXTENSIONS.has(ext)) {
            return false;
        }

        // Skip oversized files (50MB cap, matches VS/AS plugins).
        try {
            const stat = fs.statSync(filePath);
            if (stat.isFile() && stat.size > MAX_FILE_SIZE_BYTES) {
                return false;
            }
        } catch { /* best-effort size check */ }

        const parts = filePath.replace(/\\/g, '/').split('/');
        for (const part of parts) {
            if (isExcludedFolder(part)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get workspace root path.
     */
    getWorkspaceRoot(): string {
        if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
            return vscode.workspace.workspaceFolders[0].uri.fsPath;
        }
        return '';
    }

    /**
     * Get relative path from workspace root.
     */
    getRelativePath(absolutePath: string): string {
        const root = this.getWorkspaceRoot();
        if (root && absolutePath.startsWith(root)) {
            return absolutePath.substring(root.length);
        }
        return absolutePath;
    }

    /**
     * Get the .SASTO360/sastIgnore file path.
     */
    getIgnoreFilePath(): string {
        const root = this.getWorkspaceRoot();
        const dir = path.join(root, '.SASTO360');

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        return path.join(dir, 'sastIgnore');
    }

    /**
     * Read the ignore file entries.
     */
    readIgnoreEntries(): Set<string> {
        const ignorePath = this.getIgnoreFilePath();
        const entries = new Set<string>();

        if (fs.existsSync(ignorePath)) {
            const content = fs.readFileSync(ignorePath, 'utf8');
            for (const line of content.split('\n')) {
                const trimmed = line.trim();
                if (trimmed) {
                    entries.add(trimmed);
                }
            }
        }

        return entries;
    }

    /**
     * Add an entry to the ignore file.
     */
    addIgnoreEntry(entry: string): void {
        const ignorePath = this.getIgnoreFilePath();
        const entries = this.readIgnoreEntries();
        entries.add(entry);
        fs.writeFileSync(ignorePath, Array.from(entries).join('\n') + '\n', 'utf8');
    }

    /**
     * Build ignore key for a vulnerability.
     */
    buildIgnoreKey(relativePath: string, line: number, column: number, title: string): string {
        return `${relativePath}__${line}:${column}__${title}`;
    }

    /**
     * Generate a short unique project name.
     */
    generateProjectName(dirPath: string): string {
        const dirName = path.basename(dirPath);
        const short = dirName.length > 13 ? dirName.substring(0, 13) : dirName;
        const guid = 'xxxx-xxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));
        return `${short}_${guid}`;
    }
}
