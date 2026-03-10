import * as vscode from 'vscode';
import * as path from 'path';
import { Vulnerability, VulnerabilityItem, RiskLevel, normalizeRiskLevel } from '../types';
import { DIAGNOSTIC_SOURCE } from '../constants';
import { FileService } from '../services/fileService';

export class DiagnosticManager {
    private diagnosticCollection: vscode.DiagnosticCollection;
    private vulnerabilityMap: Map<string, VulnerabilityItem[]> = new Map();
    private fileService: FileService;

    private _onDidUpdate = new vscode.EventEmitter<void>();
    readonly onDidUpdate = this._onDidUpdate.event;

    constructor(diagnosticCollection: vscode.DiagnosticCollection, fileService: FileService) {
        this.diagnosticCollection = diagnosticCollection;
        this.fileService = fileService;
    }

    /**
     * Get all vulnerability items.
     */
    getAllVulnerabilities(): VulnerabilityItem[] {
        const all: VulnerabilityItem[] = [];
        for (const items of this.vulnerabilityMap.values()) {
            all.push(...items);
        }
        return all;
    }

    /**
     * Get vulnerabilities for a specific file and position.
     */
    getVulnerabilitiesAt(uri: vscode.Uri, range: vscode.Range): VulnerabilityItem[] {
        const key = uri.fsPath;
        const items = this.vulnerabilityMap.get(key) || [];
        return items.filter(item =>
            item.diagnostic.range.contains(range.start) ||
            item.diagnostic.range.intersection(range)
        );
    }

    /**
     * Get vulnerability by diagnostic.
     */
    getVulnerabilityByDiagnostic(diagnostic: vscode.Diagnostic): VulnerabilityItem | undefined {
        for (const items of this.vulnerabilityMap.values()) {
            const found = items.find(item =>
                item.diagnostic.range.isEqual(diagnostic.range) &&
                item.diagnostic.message === diagnostic.message
            );
            if (found) { return found; }
        }
        return undefined;
    }

    /**
     * Process scan results and populate diagnostics.
     */
    processVulnerabilities(vulnerabilities: Vulnerability[], basePath: string): void {
        this.clear();

        if (!vulnerabilities || vulnerabilities.length === 0) {
            this._onDidUpdate.fire();
            return;
        }

        // Normalize numeric enums from API to string labels
        for (const vuln of vulnerabilities) {
            vuln.riskLevel = normalizeRiskLevel(vuln.riskLevel as any);
        }

        const ignoreEntries = this.fileService.readIgnoreEntries();
        const fileDiagnostics = new Map<string, { diagnostics: vscode.Diagnostic[]; items: VulnerabilityItem[] }>();

        // Sort vulnerabilities by file path for consistent grouping
        const sorted = [...vulnerabilities].sort((a, b) => a.filePath.localeCompare(b.filePath));

        for (const vuln of sorted) {
            const absolutePath = path.join(basePath, vuln.filePath);
            const { line, column } = this.parseLineNumber(vuln.lineNumber);

            // Check ignore list
            const relativePath = this.fileService.getRelativePath(absolutePath);
            const ignoreKey = this.fileService.buildIgnoreKey(relativePath, line, column, vuln.title);
            if (ignoreEntries.has(ignoreKey)) {
                continue;
            }

            // Handle duplicate positions
            const dupOffset = this.getDuplicateOffset(sorted, vuln);

            const range = new vscode.Range(line, column + dupOffset, line, column + dupOffset);
            const severity = this.mapSeverity(vuln.riskLevel);
            const message = `[${vuln.title}] ${vuln.vulnerability}`;

            const diagnostic = new vscode.Diagnostic(range, message, severity);
            diagnostic.source = DIAGNOSTIC_SOURCE;
            diagnostic.code = vuln.id || vuln.type;

            if (!fileDiagnostics.has(absolutePath)) {
                fileDiagnostics.set(absolutePath, { diagnostics: [], items: [] });
            }

            const entry = fileDiagnostics.get(absolutePath)!;
            entry.diagnostics.push(diagnostic);
            entry.items.push({ vulnerability: vuln, diagnostic, absolutePath });
        }

        // Apply diagnostics
        for (const [filePath, entry] of fileDiagnostics) {
            const uri = vscode.Uri.file(filePath);
            this.diagnosticCollection.set(uri, entry.diagnostics);
            this.vulnerabilityMap.set(filePath, entry.items);
        }

        this._onDidUpdate.fire();
    }

    /**
     * Suppress a vulnerability (add to ignore file).
     */
    suppressVulnerability(item: VulnerabilityItem): void {
        const relativePath = this.fileService.getRelativePath(item.absolutePath);
        const line = item.diagnostic.range.start.line;
        const column = item.diagnostic.range.start.character;
        const ignoreKey = this.fileService.buildIgnoreKey(relativePath, line, column, item.vulnerability.title);

        this.fileService.addIgnoreEntry(ignoreKey);
        this.removeDiagnostic(item);
    }

    /**
     * Remove a single diagnostic.
     */
    removeDiagnostic(item: VulnerabilityItem): void {
        const uri = vscode.Uri.file(item.absolutePath);
        const items = this.vulnerabilityMap.get(item.absolutePath);
        if (!items) { return; }

        const filtered = items.filter(i => i !== item);
        if (filtered.length === 0) {
            this.vulnerabilityMap.delete(item.absolutePath);
            this.diagnosticCollection.delete(uri);
        } else {
            this.vulnerabilityMap.set(item.absolutePath, filtered);
            this.diagnosticCollection.set(uri, filtered.map(i => i.diagnostic));
        }

        this._onDidUpdate.fire();
    }

    /**
     * Clear all diagnostics.
     */
    clear(): void {
        this.diagnosticCollection.clear();
        this.vulnerabilityMap.clear();
        this._onDidUpdate.fire();
    }

    /**
     * Get total vulnerability count.
     */
    get totalCount(): number {
        let count = 0;
        for (const items of this.vulnerabilityMap.values()) {
            count += items.length;
        }
        return count;
    }

    /**
     * Get count by severity.
     */
    getCountBySeverity(): Map<string, number> {
        const counts = new Map<string, number>();
        for (const items of this.vulnerabilityMap.values()) {
            for (const item of items) {
                const level = item.vulnerability.riskLevel;
                counts.set(level, (counts.get(level) || 0) + 1);
            }
        }
        return counts;
    }

    private parseLineNumber(lineStr: string): { line: number; column: number } {
        const parts = lineStr.split(',');
        const line = Math.max(0, parseInt(parts[0], 10) - 1);
        const column = parts.length > 1 ? Math.max(0, parseInt(parts[1], 10) - 1) : 0;
        return { line, column };
    }

    private getDuplicateOffset(vulnerabilities: Vulnerability[], current: Vulnerability): number {
        const duplicates = vulnerabilities.filter(v =>
            v.lineNumber === current.lineNumber &&
            v.filePath === current.filePath
        );
        if (duplicates.length <= 1) { return 0; }
        return duplicates.findIndex(v => v.vulnerability === current.vulnerability);
    }

    private mapSeverity(riskLevel: RiskLevel): vscode.DiagnosticSeverity {
        switch (riskLevel) {
            case 'Critical':
            case 'High':
                return vscode.DiagnosticSeverity.Error;
            case 'Medium':
                return vscode.DiagnosticSeverity.Warning;
            case 'Low':
            case 'Info':
                return vscode.DiagnosticSeverity.Information;
            default:
                return vscode.DiagnosticSeverity.Error;
        }
    }

    dispose(): void {
        this._onDidUpdate.dispose();
        this.diagnosticCollection.dispose();
    }
}
