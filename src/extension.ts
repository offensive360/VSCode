import * as vscode from 'vscode';
import { SastClient } from './services/sastClient';
import { Offensive360Info } from './services/actionProvider';
const fs = require('fs');
var oneOfTheScanIsInProgress = false;

export function activate(context: vscode.ExtensionContext) {
  let statusBar: vscode.StatusBarItem;
  let sastClient = new SastClient();

  const offensive360Diagnostic = vscode.languages.createDiagnosticCollection("Offensive360");
  context.subscriptions.push(offensive360Diagnostic);
  
  statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  context.subscriptions.push(statusBar);

  context.subscriptions.push(vscode.commands.registerCommand("Explorer.scanFolder", async (uri: vscode.Uri) => {
    if(oneOfTheScanIsInProgress === false)
    {
      oneOfTheScanIsInProgress = true;
      offensive360Diagnostic.clear();
      await sastClient.scanFolder(uri.path, offensive360Diagnostic, statusBar, "Folder");
      oneOfTheScanIsInProgress = false;
    }
    else{
      vscode.window.showWarningMessage("One of the scan is already in progress, Please wait for that to finish first.");
    }
  }));

  context.subscriptions.push(vscode.commands.registerCommand("Explorer.scanWorkspace", async (uri: vscode.Uri) => {
    if(oneOfTheScanIsInProgress === false)
    {
      oneOfTheScanIsInProgress = true;
      let scanWorkspacePath = sastClient.getWorkspaceRootPath();
      offensive360Diagnostic.clear();
      await sastClient.scanFolder(scanWorkspacePath, offensive360Diagnostic, statusBar, "Workspace");
      oneOfTheScanIsInProgress = false;
    }
    else{
      vscode.window.showWarningMessage("One of the scan is already in progress, Please wait for that to finish first.");
    }
  }));

  context.subscriptions.push(vscode.languages.registerCodeActionsProvider({ scheme: 'file' }, new Offensive360Info(), {
      providedCodeActionKinds: [vscode.CodeActionKind.Empty]
    })
  );

  context.subscriptions.push(vscode.commands.registerCommand("code-actions-get-help.command", async (uri: string) => {
    vscode.env.openExternal(vscode.Uri.parse(uri));
  }));

  context.subscriptions.push(vscode.commands.registerCommand("code-actions-clear-error.command", async () => {
    offensive360Diagnostic.clear();
  }));

  context.subscriptions.push(vscode.commands.registerCommand("code-actions-suppress.command", async (filePath: string, lineNo: number, columnNo: number, vulnerability: string) => 
  {
    filePath = filePath.replace(/\\/g, "\/");
    let vulnerabilityTitle = vulnerability.substring(vulnerability.indexOf("[") + 1, vulnerability.indexOf("]"));
    let contentToWrite = `${sastClient.getFileRelativePath(filePath)}__${lineNo}:${columnNo}__${vulnerabilityTitle}\n`;

     if (fs.existsSync(await sastClient.getSastIgnoreFilePath())) {
        fs.readFile(await sastClient.getSastIgnoreFilePath(), async (err, data) => {
          contentToWrite += new Buffer(data).toString('ascii');
          writeToSastIgnoreFile(fs, await sastClient.getSastIgnoreFilePath(), contentToWrite);
       });
     }
     else{
      writeToSastIgnoreFile(fs, await sastClient.getSastIgnoreFilePath(), contentToWrite);
     }
     
     if(offensive360Diagnostic.has(vscode.Uri.file(filePath)))
     {
      let warnings = offensive360Diagnostic.get(vscode.Uri.file(filePath));
      warnings = warnings?.filter(x => 
        x.range.start.line !== lineNo ||
        x.range.start.character !== columnNo ||
        x.message !== vulnerability );
      offensive360Diagnostic.delete(vscode.Uri.file(filePath));
      offensive360Diagnostic.set(vscode.Uri.file(filePath), warnings);
     }
  }));

  function writeToSastIgnoreFile(fs:any, path:string, contentToWrite:string) {
    fs.writeFile(path, contentToWrite,  function(err) {
      if (err) {
          return console.error(err);
      }
      console.log("File created!");
    });
}
}