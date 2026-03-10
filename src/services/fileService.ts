import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { EXCLUDED_EXTENSIONS, EXCLUDED_DIRS } from '../constants';

const zipdir = require('zip-dir');

export class FileService {

    /**
     * Zip a directory, filtering out binary/build files.
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
     */
    private shouldInclude(filePath: string): boolean {
        const ext = path.extname(filePath).toLowerCase();
        const basename = path.basename(filePath);

        if (EXCLUDED_EXTENSIONS.has(ext) || EXCLUDED_EXTENSIONS.has(basename)) {
            return false;
        }

        const parts = filePath.replace(/\\/g, '/').split('/');
        for (const part of parts) {
            if (EXCLUDED_DIRS.has(part)) {
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
