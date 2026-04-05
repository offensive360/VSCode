import * as vscode from 'vscode';
import * as path from 'path';
import { DiagnosticManager } from './diagnosticManager';
import { VulnerabilityItem, RiskLevel } from '../types';
import { SEVERITY_ORDER, COMMANDS } from '../constants';

type TreeElement = SeverityGroup | FileGroup | VulnTreeItem;

export class VulnerabilityTreeProvider implements vscode.TreeDataProvider<TreeElement> {
    private _onDidChangeTreeData = new vscode.EventEmitter<TreeElement | undefined | null | void>();
    readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

    private diagnosticManager: DiagnosticManager;

    constructor(diagnosticManager: DiagnosticManager) {
        this.diagnosticManager = diagnosticManager;

        // Auto-refresh when diagnostics change
        this.diagnosticManager.onDidUpdate(() => {
            this._onDidChangeTreeData.fire();
        });
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: TreeElement): vscode.TreeItem {
        return element;
    }

    getChildren(element?: TreeElement): TreeElement[] {
        if (!element) {
            return this.getSeverityGroups();
        }

        if (element instanceof SeverityGroup) {
            return this.getFileGroups(element.severity);
        }

        if (element instanceof FileGroup) {
            return this.getVulnItems(element.severity, element.filePath);
        }

        return [];
    }

    private getSeverityGroups(): SeverityGroup[] {
        const all = this.diagnosticManager.getAllVulnerabilities();
        if (all.length === 0) { return []; }

        const severities = new Map<string, number>();
        for (const item of all) {
            const level = item.vulnerability.riskLevel;
            severities.set(level, (severities.get(level) || 0) + 1);
        }

        return Array.from(severities.entries())
            .sort(([a], [b]) => (SEVERITY_ORDER[a] || 99) - (SEVERITY_ORDER[b] || 99))
            .map(([severity, count]) => new SeverityGroup(severity as RiskLevel, count));
    }

    private getFileGroups(severity: RiskLevel): FileGroup[] {
        const all = this.diagnosticManager.getAllVulnerabilities();
        const files = new Map<string, number>();

        for (const item of all) {
            if (item.vulnerability.riskLevel === severity) {
                files.set(item.absolutePath, (files.get(item.absolutePath) || 0) + 1);
            }
        }

        return Array.from(files.entries())
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([filePath, count]) => new FileGroup(severity, filePath, count));
    }

    private getVulnItems(severity: RiskLevel, filePath: string): VulnTreeItem[] {
        const all = this.diagnosticManager.getAllVulnerabilities();
        return all
            .filter(item =>
                item.vulnerability.riskLevel === severity &&
                item.absolutePath === filePath
            )
            .sort((a, b) => a.diagnostic.range.start.line - b.diagnostic.range.start.line)
            .map(item => new VulnTreeItem(item));
    }

    dispose(): void {
        this._onDidChangeTreeData.dispose();
    }
}

class SeverityGroup extends vscode.TreeItem {
    severity: RiskLevel;

    constructor(severity: RiskLevel, count: number) {
        super(`${severity} (${count})`, vscode.TreeItemCollapsibleState.Expanded);
        this.severity = severity;
        this.iconPath = this.getIcon(severity);
        this.contextValue = 'severityGroup';
    }

    private getIcon(severity: RiskLevel): vscode.ThemeIcon {
        switch (severity) {
            case 'Critical':
            case 'High':
                return new vscode.ThemeIcon('error', new vscode.ThemeColor('errorForeground'));
            case 'Medium':
                return new vscode.ThemeIcon('warning', new vscode.ThemeColor('editorWarning.foreground'));
            case 'Low':
            case 'Info':
                return new vscode.ThemeIcon('info', new vscode.ThemeColor('editorInfo.foreground'));
            default:
                return new vscode.ThemeIcon('circle-filled');
        }
    }
}

class FileGroup extends vscode.TreeItem {
    severity: RiskLevel;
    filePath: string;

    constructor(severity: RiskLevel, filePath: string, count: number) {
        const fileName = path.basename(filePath);
        super(`${fileName} (${count})`, vscode.TreeItemCollapsibleState.Collapsed);
        this.severity = severity;
        this.filePath = filePath;
        this.description = path.dirname(filePath).split(path.sep).slice(-2).join(path.sep);
        this.iconPath = vscode.ThemeIcon.File;
        this.resourceUri = vscode.Uri.file(filePath);
        this.contextValue = 'fileGroup';
    }
}

class VulnTreeItem extends vscode.TreeItem {
    item: VulnerabilityItem;

    constructor(item: VulnerabilityItem) {
        const vuln = item.vulnerability;
        const line = item.diagnostic.range.start.line + 1;
        super(`${vuln.title}`, vscode.TreeItemCollapsibleState.None);

        this.item = item;
        this.description = `Line ${line}`;
        this.tooltip = new vscode.MarkdownString(
            `**${vuln.title}** (${vuln.riskLevel})\n\n${vuln.vulnerability}\n\n` +
            `File: ${vuln.filePath}:${line}`
        );

        this.iconPath = this.getIcon(vuln.riskLevel);
        this.contextValue = 'vulnerability';

        // Click to navigate to vulnerability location
        this.command = {
            command: COMMANDS.FOCUS_VULNERABILITY,
            title: 'Go to Vulnerability',
            arguments: [item],
        };
    }

    private getIcon(riskLevel: string): vscode.ThemeIcon {
        switch (riskLevel) {
            case 'Critical':
                return new vscode.ThemeIcon('flame', new vscode.ThemeColor('errorForeground'));
            case 'High':
                return new vscode.ThemeIcon('error', new vscode.ThemeColor('errorForeground'));
            case 'Medium':
                return new vscode.ThemeIcon('warning', new vscode.ThemeColor('editorWarning.foreground'));
            case 'Low':
                return new vscode.ThemeIcon('info', new vscode.ThemeColor('editorInfo.foreground'));
            default:
                return new vscode.ThemeIcon('circle-outline');
        }
    }
}
