import * as vscode from 'vscode';
import { COMMANDS, DIAGNOSTIC_SOURCE, EXTENSION_NAME } from '../constants';
import { DiagnosticManager } from './diagnosticManager';
import { VulnerabilityItem } from '../types';

export class O360CodeActionProvider implements vscode.CodeActionProvider {
    static readonly providedCodeActionKinds = [
        vscode.CodeActionKind.QuickFix,
    ];

    private diagnosticManager: DiagnosticManager;

    constructor(diagnosticManager: DiagnosticManager) {
        this.diagnosticManager = diagnosticManager;
    }

    provideCodeActions(
        document: vscode.TextDocument,
        range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext,
        _token: vscode.CancellationToken
    ): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];

        const o360Diagnostics = context.diagnostics.filter(d => d.source === DIAGNOSTIC_SOURCE);
        if (o360Diagnostics.length === 0) { return []; }

        for (const diagnostic of o360Diagnostics) {
            const vulnItem = this.diagnosticManager.getVulnerabilityByDiagnostic(diagnostic);
            if (!vulnItem) { continue; }

            actions.push(...this.createActions(diagnostic, vulnItem, document));
        }

        return actions;
    }

    private createActions(
        diagnostic: vscode.Diagnostic,
        item: VulnerabilityItem,
        document: vscode.TextDocument
    ): vscode.CodeAction[] {
        const actions: vscode.CodeAction[] = [];
        const vuln = item.vulnerability;

        // 1. View Fix Recommendation (primary action)
        if (vuln.recommendation) {
            const fixAction = new vscode.CodeAction(
                `$(lightbulb) Fix: ${this.truncate(vuln.recommendation, 60)}`,
                vscode.CodeActionKind.QuickFix
            );
            fixAction.diagnostics = [diagnostic];
            fixAction.isPreferred = true;
            fixAction.command = {
                command: COMMANDS.SHOW_DETAILS,
                title: 'Show Fix Details',
                arguments: [item, 'fix'],
            };
            actions.push(fixAction);
        }

        // 2. Explain Vulnerability
        if (vuln.effect || vuln.vulnerability) {
            const explainAction = new vscode.CodeAction(
                `$(book) Explain: ${vuln.title}`,
                vscode.CodeActionKind.QuickFix
            );
            explainAction.diagnostics = [diagnostic];
            explainAction.command = {
                command: COMMANDS.SHOW_DETAILS,
                title: 'Show Vulnerability Details',
                arguments: [item, 'explain'],
            };
            actions.push(explainAction);
        }

        // 3. View References (OWASP, CWE links)
        if (vuln.references) {
            const refs = vuln.references.split('|').map(r => r.trim()).filter(r => r);
            if (refs.length > 0) {
                const refAction = new vscode.CodeAction(
                    `$(link-external) View References`,
                    vscode.CodeActionKind.QuickFix
                );
                refAction.diagnostics = [diagnostic];
                refAction.command = {
                    command: COMMANDS.VIEW_REFERENCES,
                    title: 'View References',
                    arguments: [refs],
                };
                actions.push(refAction);
            }
        }

        // 4. Suppress for this line
        const suppressAction = new vscode.CodeAction(
            `$(eye-closed) Suppress this finding`,
            vscode.CodeActionKind.QuickFix
        );
        suppressAction.diagnostics = [diagnostic];
        suppressAction.command = {
            command: COMMANDS.SUPPRESS_LINE,
            title: 'Suppress',
            arguments: [item],
        };
        actions.push(suppressAction);

        // 5. Mark as false positive
        const fpAction = new vscode.CodeAction(
            `$(x) Mark as false positive`,
            vscode.CodeActionKind.QuickFix
        );
        fpAction.diagnostics = [diagnostic];
        fpAction.command = {
            command: COMMANDS.MARK_FALSE_POSITIVE,
            title: 'Mark as False Positive',
            arguments: [item],
        };
        actions.push(fpAction);

        // 6. Clear all findings
        const clearAction = new vscode.CodeAction(
            `$(trash) Clear all findings`,
            vscode.CodeActionKind.QuickFix
        );
        clearAction.diagnostics = [diagnostic];
        clearAction.command = {
            command: COMMANDS.CLEAR_ALL,
            title: 'Clear All',
        };
        actions.push(clearAction);

        return actions;
    }

    private truncate(str: string, maxLen: number): string {
        if (str.length <= maxLen) { return str; }
        return str.substring(0, maxLen - 3) + '...';
    }
}
