import * as vscode from 'vscode';

export class Offensive360Info implements vscode.CodeActionProvider {

    public static readonly providedCodeActionKinds = [
        vscode.CodeActionKind.QuickFix
    ];

    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === '')
            .map(diagnostic =>
            (
                this.createContextMenu(diagnostic, document.fileName)
            ))
            .reduce((actions, acc) => [...acc, ...actions], []);
    }

    private createContextMenu(diagnostic: vscode.Diagnostic, currentFileName :string) 
    {
        let menuList: Array<vscode.CodeAction> = [];

        if (diagnostic.code === '' && diagnostic.source !== '') 
        {
            menuList.push(this.createGetHelpCommandAction(diagnostic));
            menuList.push(this.createSuppressCommandAction(diagnostic, currentFileName));
        }
        menuList.push(this.createClearAllErrorCommandAction(diagnostic));
        return menuList;
    }

    private createGetHelpCommandAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const commandTitle = 'Offensive360 : Get Help';
        const action = this.populateCommandAction(commandTitle, diagnostic);
        action.command = { command: 'code-actions-get-help.command', title: commandTitle };
        action.command.arguments = [diagnostic.source];
        return action;
    }

    private createClearAllErrorCommandAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const commandTitle = 'Offensive360 : Clear All Errors';
        const action = this.populateCommandAction(commandTitle, diagnostic);
        action.command = { command: 'code-actions-clear-error.command', title: commandTitle };
        return action;
    }

    private createSuppressCommandAction(diagnostic: vscode.Diagnostic, currentFileName :string): vscode.CodeAction {
        const commandTitle = 'Offensive360 : Suppress';
        const action = this.populateCommandAction(commandTitle, diagnostic);
        action.command = { command: 'code-actions-suppress.command', title: commandTitle };
        action.command.arguments = [currentFileName, diagnostic.range.start.line, diagnostic.range.start.character, diagnostic.message];
        return action;
    }

    private populateCommandAction(commandTitle: string, diagnostic: vscode.Diagnostic): vscode.CodeAction {
        const action = new vscode.CodeAction(commandTitle, vscode.CodeActionKind.QuickFix);
        action.diagnostics = [diagnostic];
        action.isPreferred = true;
        return action;
    }
}