import * as vscode from 'vscode';
import * as path from 'path';
import { COMMANDS, VIEWS, EXTENSION_NAME, DIAGNOSTIC_SOURCE } from './constants';
import { VulnerabilityItem } from './types';
import { ScanService } from './services/scanService';
import { FileService } from './services/fileService';
import { DiagnosticManager } from './providers/diagnosticManager';
import { O360CodeActionProvider } from './providers/codeActionProvider';
import { O360HoverProvider } from './providers/hoverProvider';
import { VulnerabilityTreeProvider } from './providers/treeProvider';
import { DetailPanel } from './views/detailPanel';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    const outputChannel = vscode.window.createOutputChannel(EXTENSION_NAME);
    const fileService = new FileService();
    const scanService = new ScanService(outputChannel, fileService);
    const diagnosticCollection = vscode.languages.createDiagnosticCollection(DIAGNOSTIC_SOURCE);
    const diagnosticManager = new DiagnosticManager(diagnosticCollection, fileService);

    // Status bar
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.command = COMMANDS.SCAN_WORKSPACE;
    updateStatusBar(0, false);
    statusBarItem.show();

    // Tree view (sidebar)
    const treeProvider = new VulnerabilityTreeProvider(diagnosticManager);
    const treeView = vscode.window.createTreeView(VIEWS.TREE, {
        treeDataProvider: treeProvider,
        showCollapseAll: true,
    });

    // Code action provider
    const codeActionProvider = vscode.languages.registerCodeActionsProvider(
        { scheme: 'file' },
        new O360CodeActionProvider(diagnosticManager),
        { providedCodeActionKinds: O360CodeActionProvider.providedCodeActionKinds }
    );

    // Hover provider
    const hoverProvider = vscode.languages.registerHoverProvider(
        { scheme: 'file' },
        new O360HoverProvider(diagnosticManager)
    );

    // Update status bar on diagnostic changes
    diagnosticManager.onDidUpdate(() => {
        updateStatusBar(diagnosticManager.totalCount, scanService.isScanInProgress);
    });

    scanService.onScanStart(() => {
        updateStatusBar(diagnosticManager.totalCount, true);
    });

    // Helper: process scan results
    function handleScanResults(response: any, basePath: string) {
        if (!response) { return; }

        const vulns = response.vulnerabilities || [];
        if (vulns.length === 0) {
            vscode.window.showInformationMessage(`${EXTENSION_NAME}: No security findings detected.`);
            diagnosticManager.clear();
        } else {
            diagnosticManager.processVulnerabilities(vulns, basePath);
            const counts = diagnosticManager.getCountBySeverity();
            const summary = Array.from(counts.entries())
                .map(([level, count]) => `${count} ${level}`)
                .join(', ');
            vscode.window.showWarningMessage(`${EXTENSION_NAME}: Found ${vulns.length} findings (${summary})`);
        }

        updateStatusBar(diagnosticManager.totalCount, false);
    }

    // ── Commands ──────────────────────────────────────────────

    // Scan File
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.SCAN_FILE, async (uri?: vscode.Uri) => {
        const filePath = uri?.fsPath || vscode.window.activeTextEditor?.document.uri.fsPath;
        if (!filePath) {
            vscode.window.showErrorMessage(`${EXTENSION_NAME}: No file selected.`);
            return;
        }
        const result = await scanService.scanFile(filePath);
        handleScanResults(result, path.dirname(filePath));
    }));

    // Scan Folder
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.SCAN_FOLDER, async (uri?: vscode.Uri) => {
        if (!uri) {
            vscode.window.showErrorMessage(`${EXTENSION_NAME}: No folder selected.`);
            return;
        }
        const result = await scanService.scanFolder(uri.fsPath, 'Folder');
        handleScanResults(result, uri.fsPath);
    }));

    // Scan Workspace
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.SCAN_WORKSPACE, async () => {
        const root = fileService.getWorkspaceRoot();
        if (!root) {
            vscode.window.showErrorMessage(`${EXTENSION_NAME}: No workspace folder open.`);
            return;
        }
        const result = await scanService.scanFolder(root, 'Workspace');
        handleScanResults(result, root);
    }));

    // Show Vulnerability Details
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.SHOW_DETAILS, (item: VulnerabilityItem, tab?: string) => {
        DetailPanel.show(item, (tab as 'fix' | 'explain') || 'explain');
    }));

    // View References
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.VIEW_REFERENCES, async (refs: string[]) => {
        if (!refs || refs.length === 0) { return; }
        if (refs.length === 1) {
            vscode.env.openExternal(vscode.Uri.parse(refs[0]));
        } else {
            const selected = await vscode.window.showQuickPick(refs, {
                placeHolder: 'Select a reference to open',
                canPickMany: false,
            });
            if (selected) {
                vscode.env.openExternal(vscode.Uri.parse(selected));
            }
        }
    }));

    // Suppress Line
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.SUPPRESS_LINE, (item: VulnerabilityItem) => {
        diagnosticManager.suppressVulnerability(item);
        vscode.window.showInformationMessage(`${EXTENSION_NAME}: Finding suppressed. Entry added to .SASTO360/sastIgnore`);
    }));

    // Mark as False Positive
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.MARK_FALSE_POSITIVE, async (item: VulnerabilityItem) => {
        const reason = await vscode.window.showInputBox({
            prompt: 'Reason for marking as false positive (optional)',
            placeHolder: 'e.g., sanitized input, not user-reachable',
        });

        const relativePath = fileService.getRelativePath(item.absolutePath);
        const line = item.diagnostic.range.start.line;
        const column = item.diagnostic.range.start.character;
        const entry = `${relativePath}__${line}:${column}__${item.vulnerability.title}__FP${reason ? ':' + reason : ''}`;

        fileService.addIgnoreEntry(entry);
        diagnosticManager.removeDiagnostic(item);
        vscode.window.showInformationMessage(`${EXTENSION_NAME}: Marked as false positive.`);
    }));

    // Clear All
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.CLEAR_ALL, () => {
        diagnosticManager.clear();
        updateStatusBar(0, false);
    }));

    // Refresh Tree
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.REFRESH_TREE, () => {
        treeProvider.refresh();
    }));

    // Focus Vulnerability (navigate to location)
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.FOCUS_VULNERABILITY, async (item: VulnerabilityItem) => {
        const uri = vscode.Uri.file(item.absolutePath);
        const doc = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(doc, { preserveFocus: false });
        const range = item.diagnostic.range;
        editor.selection = new vscode.Selection(range.start, range.end);
        editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
    }));

    // Check for Updates
    context.subscriptions.push(vscode.commands.registerCommand(COMMANDS.CHECK_UPDATE, async () => {
        const currentVersion = context.extension.packageJSON.version || '1.1.8';
        const apiUrl = 'https://api.github.com/repos/offensive360/VSCode/releases/latest';
        try {
            const https = await import('https');
            const body: string = await new Promise((resolve, reject) => {
                const req = https.get(apiUrl, {
                    headers: { 'User-Agent': `Offensive360-VSCode/${currentVersion}`, 'Accept': 'application/vnd.github+json' },
                    timeout: 15000
                }, (res) => {
                    if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
                    let data = '';
                    res.on('data', (chunk: string) => data += chunk);
                    res.on('end', () => resolve(data));
                });
                req.on('error', reject);
                req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
            });
            const release = JSON.parse(body);
            const latestVersion = (release.tag_name || '').replace(/^v/i, '');
            if (!latestVersion) {
                vscode.window.showInformationMessage('Could not determine the latest version.');
                return;
            }
            const isNewer = latestVersion.localeCompare(currentVersion, undefined, { numeric: true }) > 0;
            if (!isNewer) {
                vscode.window.showInformationMessage(`Offensive 360: You're up to date (v${currentVersion}).`);
                return;
            }
            const notes = (release.body || '').substring(0, 500);
            const action = await vscode.window.showInformationMessage(
                `Offensive 360: v${latestVersion} is available (you have v${currentVersion}).\n\n${notes}`,
                'Download', 'Later'
            );
            if (action === 'Download') {
                const url = release.html_url || `https://github.com/offensive360/VSCode/releases/tag/v${latestVersion}`;
                vscode.env.openExternal(vscode.Uri.parse(url));
            }
        } catch (err: any) {
            vscode.window.showWarningMessage(`Could not check for updates: ${err.message || 'Unknown error'}`);
        }
    }));

    // ── Auto-scan on save ────────────────────────────────────

    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument(async (document) => {
        const config = scanService.getConfig();
        if (!config.autoScanOnSave) { return; }
        if (document.uri.scheme !== 'file') { return; }

        // Don't auto-scan if a scan is already running
        if (scanService.isScanInProgress) { return; }

        const result = await scanService.scanFile(document.uri.fsPath);
        handleScanResults(result, path.dirname(document.uri.fsPath));
    }));

    // ── Disposables ──────────────────────────────────────────

    context.subscriptions.push(
        outputChannel,
        diagnosticCollection,
        diagnosticManager,
        statusBarItem,
        treeView,
        codeActionProvider,
        hoverProvider,
    );
}

function updateStatusBar(count: number, scanning: boolean) {
    if (scanning) {
        statusBarItem.text = `$(sync~spin) ${EXTENSION_NAME}: Scanning...`;
        statusBarItem.backgroundColor = undefined;
    } else if (count > 0) {
        statusBarItem.text = `$(shield) ${EXTENSION_NAME}: ${count} finding${count !== 1 ? 's' : ''}`;
        statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    } else {
        statusBarItem.text = `$(shield) ${EXTENSION_NAME}: No findings`;
        statusBarItem.backgroundColor = undefined;
    }
    statusBarItem.tooltip = `Click to scan workspace`;
}

export function deactivate() {}
