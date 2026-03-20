import * as vscode from 'vscode';
import * as path from 'path';
import { SastApi, RISK_LEVEL, RISK_LEVEL_FROM_STRING, LangScanResult } from './api';
import { getFixHint, filterReferences } from './vulnKnowledgeBase';

export class DiagnosticsManager {
  private diagnosticCollection: vscode.DiagnosticCollection;

  constructor() {
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('offensive360');
  }

  clear() {
    this.diagnosticCollection.clear();
  }

  /**
   * Load diagnostics from pre-fetched results (no API call needed).
   * Used when results were already fetched immediately after scan completion.
   */
  loadFromResults(langResults: LangScanResult[]) {
    this.clear();
    this.populateDiagnostics(langResults);
  }

  async loadDiagnostics(api: SastApi, projectId: string) {
    this.clear();
    const langResults = await api.getLanguageResults(projectId);
    this.populateDiagnostics(langResults);
  }

  private populateDiagnostics(langResults: LangScanResult[]) {
    if (!langResults || langResults.length === 0) {
      return;
    }

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) { return; }

    const workspacePath = workspaceFolders[0].uri.fsPath;
    const diagnosticsMap = new Map<string, vscode.Diagnostic[]>();

    for (const vuln of langResults) {
      const filePath = vuln.filePath || vuln.fileName;
      if (!filePath) { continue; }

      const fullPath = path.isAbsolute(filePath) ? filePath : path.join(workspacePath, filePath);
      const uri = vscode.Uri.file(fullPath);

      const line = Math.max(0, (vuln.lineNo || 1) - 1);
      const col = Math.max(0, vuln.columnNo || 0);

      // Improved range: try to use code snippet length or line length, fallback to 50
      let endCol = col + 50;
      if (vuln.codeSnippet) {
        endCol = col + Math.max(vuln.codeSnippet.trim().length, 10);
      }
      const range = new vscode.Range(line, col, line, endCol);

      const riskLevel = typeof vuln.riskLevel === 'number' ? vuln.riskLevel : RISK_LEVEL_FROM_STRING[String(vuln.riskLevel).toUpperCase()] || 2;

      let severity: vscode.DiagnosticSeverity;
      if (riskLevel >= 3) {
        severity = vscode.DiagnosticSeverity.Error;        // Critical & High → red
      } else if (riskLevel >= 2) {
        severity = vscode.DiagnosticSeverity.Warning;      // Medium → amber
      } else {
        severity = vscode.DiagnosticSeverity.Information;  // Low & Safe → blue
      }

      // Enhanced message with fix hint from knowledge base
      const fixHint = getFixHint(vuln.type);
      const message = fixHint
        ? `[${vuln.type}] ${vuln.vulnerability}\n\u{1F6E1} Fix: ${fixHint}`
        : `[${vuln.type}] ${vuln.vulnerability}`;

      const diagnostic = new vscode.Diagnostic(range, message, severity);
      diagnostic.source = 'Offensive360 SAST';
      diagnostic.code = vuln.id;

      // Add filtered references as related information
      if (vuln.references) {
        const safeRefs = filterReferences(vuln.references);
        if (safeRefs.length > 0) {
          diagnostic.relatedInformation = safeRefs.map(url =>
            new vscode.DiagnosticRelatedInformation(
              new vscode.Location(vscode.Uri.parse(url), new vscode.Position(0, 0)),
              `Reference: ${url}`
            )
          );
        }
      }

      const key = uri.toString();
      if (!diagnosticsMap.has(key)) {
        diagnosticsMap.set(key, []);
      }
      diagnosticsMap.get(key)!.push(diagnostic);
    }

    for (const [uriStr, diagnostics] of diagnosticsMap) {
      this.diagnosticCollection.set(vscode.Uri.parse(uriStr), diagnostics);
    }
  }

  dispose() {
    this.diagnosticCollection.dispose();
  }
}
