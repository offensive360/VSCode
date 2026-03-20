import * as vscode from 'vscode';
import { SastApi, AuthValidationResult } from './api';
import { ProjectTreeProvider } from './treeProvider';
import { Scanner } from './scanner';
import { DiagnosticsManager } from './diagnostics';
import { O360CodeActionProvider, showFixGuidancePanel } from './codeActionProvider';

let api: SastApi;
let projectTree: ProjectTreeProvider;
let scanner: Scanner;
let diagnostics: DiagnosticsManager;
let statusBarItem: vscode.StatusBarItem;

/**
 * Checks auth status and shows appropriate error message.
 * Returns true if authenticated, false otherwise.
 */
async function checkAuthAndNotify(): Promise<boolean> {
  const status = api.getTokenStatus();
  if (status.ok) { return true; }

  let actionLabel = 'Configure Now';
  if (status.errorType === 'expired') {
    actionLabel = 'Update Token';
  }

  const action = await vscode.window.showWarningMessage(
    `Offensive360: ${status.message}`,
    actionLabel
  );
  if (action) {
    vscode.commands.executeCommand('offensive360.configure');
  }
  return false;
}

function updateStatusBar(): void {
  if (!statusBarItem) { return; }

  const status = api.getTokenStatus();

  if (status.errorType === 'not_configured') {
    statusBarItem.text = '$(shield) O360: Not Configured';
    statusBarItem.tooltip = 'Click to configure Offensive360 SAST';
    statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
  } else if (status.errorType === 'expired') {
    statusBarItem.text = '$(shield) O360: Token Expired';
    statusBarItem.tooltip = 'Your API token has expired. Click to update.';
    statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
  } else if (status.ok) {
    const daysText = status.remainingDays !== undefined && status.remainingDays !== Infinity && status.remainingDays <= 7
      ? ` (expires in ${status.remainingDays}d)`
      : '';
    statusBarItem.text = `$(shield) O360: Connected${daysText}`;
    statusBarItem.tooltip = status.expiresAt
      ? `Connected to O360 server. Token expires: ${status.expiresAt.toLocaleDateString()}`
      : 'Connected to O360 server';
    statusBarItem.backgroundColor = undefined;
  } else {
    statusBarItem.text = '$(shield) O360: Error';
    statusBarItem.tooltip = status.message;
    statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.errorBackground');
  }

  statusBarItem.show();
}

export function activate(context: vscode.ExtensionContext) {
  api = new SastApi();
  projectTree = new ProjectTreeProvider(api);
  scanner = new Scanner(api);
  diagnostics = new DiagnosticsManager();

  // Status bar item
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  statusBarItem.command = 'offensive360.configure';
  updateStatusBar();
  context.subscriptions.push(statusBarItem);

  // Register scan results tree view
  const treeView = vscode.window.createTreeView('offensive360.results', {
    treeDataProvider: projectTree,
    showCollapseAll: true
  });

  // Register Code Action Provider for Quick Fix guidance
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider('*', new O360CodeActionProvider(), {
      providedCodeActionKinds: O360CodeActionProvider.providedCodeActionKinds
    })
  );

  // Show Fix Guidance command (opens webview panel)
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.showFixGuidance', (vulnType: string) => {
      showFixGuidancePanel(vulnType);
    })
  );

  // Open References command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.openReferences', (urls: string[]) => {
      for (const url of urls) {
        vscode.env.openExternal(vscode.Uri.parse(url));
      }
    })
  );

  // Configure settings command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.configure', async () => {
      const currentConfig = vscode.workspace.getConfiguration('o360');
      const endpoint = await vscode.window.showInputBox({
        prompt: 'Enter O360 Server URL',
        value: currentConfig.get('endpoint') || 'https://sast.offensive360.com',
        placeHolder: 'https://sast.offensive360.com:1800'
      });

      if (!endpoint) { return; }

      await vscode.workspace.getConfiguration('o360').update('endpoint', endpoint, vscode.ConfigurationTarget.Global);

      const token = await vscode.window.showInputBox({
        prompt: 'Enter API Access Token (from O360 Dashboard > Settings > Tokens)',
        password: true,
        placeHolder: 'Paste your API token here'
      });

      if (!token) { return; }

      if (!token.startsWith('ey')) {
        vscode.window.showErrorMessage('Offensive360: Invalid token format. The token should be a JWT starting with "ey". Please check with your administrator.');
        return;
      }

      await vscode.workspace.getConfiguration('o360').update('accessToken', token, vscode.ConfigurationTarget.Global);
      api.loadConfig();
      updateStatusBar();

      vscode.window.showInformationMessage('Offensive360: Configuration saved successfully!');
      projectTree.refresh();
    })
  );

  // Scan workspace command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.scan', async () => {
      if (!(await checkAuthAndNotify())) { return; }

      await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: 'Offensive360 SAST Scan',
        cancellable: false
      }, async (progress) => {
        try {
          const scanOutput = await scanner.scanWorkspace(progress);
          if (scanOutput) {
            projectTree.setLastScanProjectId(scanOutput.projectId);
            // Use pre-fetched results (already grabbed before server deletes ephemeral project)
            diagnostics.loadFromResults(scanOutput.results.lang);
          }
        } catch (error: any) {
          vscode.window.showErrorMessage(`Offensive360: Scan failed — ${error.message}`);
        }
      });
    })
  );

  // Scan folder command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.scanFolder', async (folderUri: vscode.Uri) => {
      if (!(await checkAuthAndNotify())) { return; }

      const folderPath = folderUri?.fsPath;
      if (!folderPath) {
        vscode.window.showErrorMessage('Offensive360: No folder selected. Right-click a folder in the Explorer to scan it.');
        return;
      }

      const folderName = require('path').basename(folderPath);

      await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `Offensive360 SAST Scan: ${folderName}`,
        cancellable: false
      }, async (progress) => {
        try {
          const scanOutput = await scanner.scanFolder(folderPath, folderName, progress);
          if (scanOutput) {
            projectTree.setLastScanProjectId(scanOutput.projectId);
            diagnostics.loadFromResults(scanOutput.results.lang);
            vscode.window.showInformationMessage(`Offensive360: Scan completed for "${folderName}".`);
          }
        } catch (error: any) {
          vscode.window.showErrorMessage(`Offensive360: Scan failed for "${folderName}" — ${error.message}`);
        }
      });
    })
  );

  // Scan file command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.scanFile', async (fileUri: vscode.Uri) => {
      if (!(await checkAuthAndNotify())) { return; }

      const filePath = fileUri?.fsPath;
      if (!filePath) {
        vscode.window.showErrorMessage('Offensive360: No file selected. Right-click a file in the Explorer to scan it.');
        return;
      }

      const fileName = require('path').basename(filePath);
      const folderPath = require('path').dirname(filePath);

      await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `Offensive360 SAST Scan: ${fileName}`,
        cancellable: false
      }, async (progress) => {
        try {
          const scanOutput = await scanner.scanFolder(folderPath, fileName, progress);
          if (scanOutput) {
            projectTree.setLastScanProjectId(scanOutput.projectId);
            diagnostics.loadFromResults(scanOutput.results.lang);
            vscode.window.showInformationMessage(`Offensive360: Scan completed for "${fileName}".`);
          }
        } catch (error: any) {
          vscode.window.showErrorMessage(`Offensive360: Scan failed for "${fileName}" — ${error.message}`);
        }
      });
    })
  );

  // Scan Git repo command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.scanGitRepo', async () => {
      if (!(await checkAuthAndNotify())) { return; }

      const repoUrl = await vscode.window.showInputBox({
        prompt: 'Enter Git Repository URL',
        placeHolder: 'https://github.com/user/repo'
      });
      if (!repoUrl) { return; }

      const projectName = await vscode.window.showInputBox({
        prompt: 'Enter Project Name',
        value: repoUrl.split('/').pop()?.replace('.git', '') || 'project'
      });
      if (!projectName) { return; }

      const branch = await vscode.window.showInputBox({
        prompt: 'Enter Branch (leave empty for default)',
        placeHolder: 'main'
      });

      await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: 'Offensive360 SAST Git Scan',
        cancellable: false
      }, async (progress) => {
        try {
          const scanOutput = await scanner.scanGitRepo(repoUrl, projectName, branch || undefined, progress);
          if (scanOutput) {
            projectTree.setLastScanProjectId(scanOutput.projectId);
            diagnostics.loadFromResults(scanOutput.results.lang);
          }
        } catch (error: any) {
          vscode.window.showErrorMessage(`Offensive360: Git scan failed — ${error.message}`);
        }
      });
    })
  );

  // View results command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.viewResults', async () => {
      if (!(await checkAuthAndNotify())) { return; }
      projectTree.refresh();
      vscode.commands.executeCommand('offensive360.results.focus');
    })
  );

  // Open vulnerability file command
  context.subscriptions.push(
    vscode.commands.registerCommand('offensive360.openVulnFile', async (filePath: string, lineNumber: string) => {
      if (!filePath) { return; }

      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) { return; }

      const fullPath = require('path').isAbsolute(filePath)
        ? filePath
        : require('path').join(workspaceFolders[0].uri.fsPath, filePath);

      try {
        const uri = vscode.Uri.file(fullPath);
        const doc = await vscode.workspace.openTextDocument(uri);
        let line = 0;
        if (lineNumber) {
          const parts = lineNumber.split(',');
          line = Math.max(0, parseInt(parts[0] || '0') - 1);
        }
        const editor = await vscode.window.showTextDocument(doc);
        const pos = new vscode.Position(line, 0);
        editor.selection = new vscode.Selection(pos, pos);
        editor.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.InCenter);
      } catch {
        vscode.window.showWarningMessage(`Offensive360: Cannot open file "${fullPath}". It may have been moved or deleted.`);
      }
    })
  );

  // Listen for config changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('o360')) {
        api.loadConfig();
        updateStatusBar();
        projectTree.refresh();
      }
    })
  );

  // Auto-refresh if already authenticated
  if (api.isAuthenticated()) {
    projectTree.refresh();
  }

  context.subscriptions.push(treeView);
  context.subscriptions.push(diagnostics);
}

export function deactivate() {
  if (diagnostics) {
    diagnostics.dispose();
  }
}
