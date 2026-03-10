import * as vscode from 'vscode';
import { DiagnosticManager } from './diagnosticManager';
import { DIAGNOSTIC_SOURCE } from '../constants';
import { VulnerabilityItem } from '../types';

export class O360HoverProvider implements vscode.HoverProvider {
    private diagnosticManager: DiagnosticManager;

    constructor(diagnosticManager: DiagnosticManager) {
        this.diagnosticManager = diagnosticManager;
    }

    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        _token: vscode.CancellationToken
    ): vscode.Hover | null {
        const range = new vscode.Range(position, position);
        const items = this.diagnosticManager.getVulnerabilitiesAt(document.uri, range);

        if (items.length === 0) { return null; }

        const contents: vscode.MarkdownString[] = [];

        for (const item of items) {
            contents.push(this.buildHoverContent(item));
        }

        return new vscode.Hover(contents);
    }

    private cleanText(text: string): string {
        if (!text) { return ''; }
        return text
            .replace(/\\r\\n/g, ' ')
            .replace(/\\r/g, '')
            .replace(/\\n/g, ' ')
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
    }

    private buildHoverContent(item: VulnerabilityItem): vscode.MarkdownString {
        const vuln = item.vulnerability;
        const md = new vscode.MarkdownString();
        md.isTrusted = true;
        md.supportHtml = true;

        // Severity badge
        md.appendMarkdown(`### $(shield) ${vuln.title}\n\n`);
        md.appendMarkdown(`**Severity:** \`${vuln.riskLevel}\` &nbsp; **Type:** \`${vuln.type}\`\n\n`);

        // Description
        if (vuln.vulnerability) {
            md.appendMarkdown(`${this.cleanText(vuln.vulnerability)}\n\n`);
        }

        // Effect summary
        if (vuln.effect) {
            const cleaned = this.cleanText(vuln.effect);
            const shortEffect = cleaned.length > 200
                ? cleaned.substring(0, 200) + '...'
                : cleaned;
            md.appendMarkdown(`**Impact:** ${shortEffect}\n\n`);
        }

        // Quick recommendation
        if (vuln.recommendation) {
            const cleaned = this.cleanText(vuln.recommendation);
            const shortRec = cleaned.length > 150
                ? cleaned.substring(0, 150) + '...'
                : cleaned;
            md.appendMarkdown(`**Recommendation:** ${shortRec}\n\n`);
        }

        // Action links
        md.appendMarkdown(`---\n`);
        md.appendMarkdown(
            `[View Details](command:o360.showDetails?${encodeURIComponent(JSON.stringify([item, 'explain']))}) ` +
            `| [How to Fix](command:o360.showDetails?${encodeURIComponent(JSON.stringify([item, 'fix']))}) ` +
            `| [Suppress](command:o360.suppressLine?${encodeURIComponent(JSON.stringify([item]))})`
        );

        return md;
    }

    private getSeverityColor(riskLevel: string): string {
        switch (riskLevel) {
            case 'Critical': return '#dc3545';
            case 'High': return '#fd7e14';
            case 'Medium': return '#ffc107';
            case 'Low': return '#17a2b8';
            default: return '#6c757d';
        }
    }
}
