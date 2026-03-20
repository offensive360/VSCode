import * as vscode from 'vscode';
import { SastApi, Project, SCAN_STATUS, RISK_LEVEL, LangScanResult, DepScanResult, MalwareScanResult, LicenseScanResult } from './api';
import { lookupVuln, getFixHint } from './vulnKnowledgeBase';

export class ProjectTreeProvider implements vscode.TreeDataProvider<ProjectItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<ProjectItem | undefined | null>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;
  private lastScanProjectId: string | null = null;

  constructor(private api: SastApi) {}

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  setLastScanProjectId(projectId: string): void {
    this.lastScanProjectId = projectId;
    this.refresh();
  }

  async getChildren(element?: ProjectItem): Promise<ProjectItem[]> {
    if (!this.api.isAuthenticated()) {
      return [new ProjectItem('Configure token and endpoint in settings', '', vscode.TreeItemCollapsibleState.None, 'info')];
    }

    if (!element) {
      // Root level: show last scan result only
      if (!this.lastScanProjectId) {
        return [new ProjectItem('Scan a workspace to see results', '', vscode.TreeItemCollapsibleState.None, 'info')];
      }

      try {
        const project = await this.api.getProject(this.lastScanProjectId);
        const status = SCAN_STATUS[project.status] || 'Unknown';
        const risk = RISK_LEVEL[project.riskLevel] || 'Unknown';
        const totalVulns = (project.vulnerabilitiesCount || 0) + (project.dependencyVulnerabilitiesCount || 0) + (project.malwaresCount || 0);

        const item = new ProjectItem(
          `Last Scan - ${project.name}`,
          project.id,
          vscode.TreeItemCollapsibleState.Collapsed,
          'scan'
        );
        item.description = `${status} | Risk: ${risk} | Vulns: ${totalVulns}`;
        item.tooltip = `Status: ${status}\nRisk: ${risk}\nLang Vulns: ${project.vulnerabilitiesCount || 0}\nDep Vulns: ${project.dependencyVulnerabilitiesCount || 0}\nMalware: ${project.malwaresCount || 0}\nLicenses: ${project.licencesCount || 0}`;

        if (project.status === 2) {
          item.iconPath = new vscode.ThemeIcon('pass', new vscode.ThemeColor('testing.iconPassed'));
        } else if (project.status === 1 || project.status === 0) {
          item.iconPath = new vscode.ThemeIcon('sync~spin');
        } else if (project.status === 3) {
          item.iconPath = new vscode.ThemeIcon('error', new vscode.ThemeColor('testing.iconFailed'));
        }

        return [item];
      } catch (error: any) {
        return [new ProjectItem(`Error: ${error.message}`, '', vscode.TreeItemCollapsibleState.None, 'error')];
      }
    }

    if (element.contextValue === 'scan') {
      return [
        new ProjectItem('Language Vulnerabilities', element.projectId, vscode.TreeItemCollapsibleState.Collapsed, 'langResults'),
        new ProjectItem('Dependency Issues', element.projectId, vscode.TreeItemCollapsibleState.Collapsed, 'depResults'),
        new ProjectItem('Malware Results', element.projectId, vscode.TreeItemCollapsibleState.Collapsed, 'malwareResults'),
        new ProjectItem('License Issues', element.projectId, vscode.TreeItemCollapsibleState.Collapsed, 'licenseResults'),
      ];
    }

    if (element.contextValue === 'langResults') {
      try {
        const results = await this.api.getLanguageResults(element.projectId);
        if (!results || results.length === 0) {
          return [new ProjectItem('No language vulnerabilities found', '', vscode.TreeItemCollapsibleState.None, 'info')];
        }
        return results.map(r => {
          const item = new ProjectItem(
            r.type || r.fileName,
            element.projectId,
            vscode.TreeItemCollapsibleState.None,
            'vulnerability'
          );
          item.description = `${r.fileName} : Line ${r.lineNo}`;

          // Rich tooltip with knowledge base fix guidance
          const kb = lookupVuln(r.type);
          const md = new vscode.MarkdownString();
          md.isTrusted = true;
          md.appendMarkdown(`**${r.type}** — ${RISK_LEVEL[r.riskLevel] || 'Unknown'} Risk\n\n`);
          md.appendMarkdown(`${r.vulnerability}\n\n`);
          md.appendMarkdown(`**File:** ${r.filePath} (Line ${r.lineNo}, Col ${r.columnNo})\n\n`);
          if (r.codeSnippet) {
            md.appendMarkdown(`**Code:** \`${r.codeSnippet.trim()}\`\n\n`);
          }
          if (kb) {
            md.appendMarkdown(`---\n\n`);
            md.appendMarkdown(`**How to Fix:** ${kb.howToFix}\n\n`);
            md.appendMarkdown(`**Secure Pattern:** \`${kb.codePatternGood}\`\n\n`);
            md.appendMarkdown(`*${kb.cwes.join(', ')}*`);
          }
          item.tooltip = md;
          item.command = {
            command: 'offensive360.openVulnFile',
            title: 'Open File',
            arguments: [r.filePath, String(r.lineNo)]
          };

          const rl = typeof r.riskLevel === 'number' ? r.riskLevel : parseInt(String(r.riskLevel));
          if (rl >= 4) {
            item.iconPath = new vscode.ThemeIcon('flame', new vscode.ThemeColor('charts.red'));
          } else if (rl >= 3) {
            item.iconPath = new vscode.ThemeIcon('warning', new vscode.ThemeColor('charts.orange'));
          } else if (rl >= 2) {
            item.iconPath = new vscode.ThemeIcon('info', new vscode.ThemeColor('charts.blue'));
          } else {
            item.iconPath = new vscode.ThemeIcon('pass', new vscode.ThemeColor('charts.green'));
          }

          return item;
        });
      } catch (e: any) {
        return [new ProjectItem(`Error loading results: ${e.message}`, '', vscode.TreeItemCollapsibleState.None, 'error')];
      }
    }

    if (element.contextValue === 'depResults') {
      try {
        const results = await this.api.getDependencyResults(element.projectId);
        if (!results || results.length === 0) {
          return [new ProjectItem('No dependency issues found', '', vscode.TreeItemCollapsibleState.None, 'info')];
        }
        return results.map(r => {
          const item = new ProjectItem(
            r.cveId || r.fileName,
            element.projectId,
            vscode.TreeItemCollapsibleState.None,
            'depVuln'
          );
          item.description = `${r.severity} - ${r.fileName}`;
          item.tooltip = `${r.cveId}\n${r.description}\nFile: ${r.fileName}\nSeverity: ${r.severity}`;
          item.iconPath = new vscode.ThemeIcon('package', new vscode.ThemeColor('charts.orange'));
          return item;
        });
      } catch {
        return [new ProjectItem('No dependency issues found', '', vscode.TreeItemCollapsibleState.None, 'info')];
      }
    }

    if (element.contextValue === 'malwareResults') {
      try {
        const results = await this.api.getMalwareResults(element.projectId);
        if (!results || results.length === 0) {
          return [new ProjectItem('No malware detected', '', vscode.TreeItemCollapsibleState.None, 'info')];
        }
        return results.map(r => {
          const item = new ProjectItem(
            r.ruleName,
            element.projectId,
            vscode.TreeItemCollapsibleState.None,
            'malwareVuln'
          );
          item.description = r.fileName;
          item.tooltip = `${r.ruleName}\n${r.description}\nFile: ${r.fileName}`;
          item.iconPath = new vscode.ThemeIcon('bug', new vscode.ThemeColor('charts.red'));
          return item;
        });
      } catch {
        return [new ProjectItem('No malware detected', '', vscode.TreeItemCollapsibleState.None, 'info')];
      }
    }

    if (element.contextValue === 'licenseResults') {
      try {
        const results = await this.api.getLicenseResults(element.projectId);
        if (!results || results.length === 0) {
          return [new ProjectItem('No license issues found', '', vscode.TreeItemCollapsibleState.None, 'info')];
        }
        return results.map(r => {
          const item = new ProjectItem(
            r.licenseName,
            element.projectId,
            vscode.TreeItemCollapsibleState.None,
            'licenseVuln'
          );
          item.description = `${r.licenseType} - ${r.fileName}`;
          item.tooltip = `${r.licenseName}\nType: ${r.licenseType}\nFile: ${r.fileName}\nRisk: ${r.riskLevel}`;
          item.iconPath = new vscode.ThemeIcon('law', new vscode.ThemeColor('charts.yellow'));
          return item;
        });
      } catch {
        return [new ProjectItem('No license issues found', '', vscode.TreeItemCollapsibleState.None, 'info')];
      }
    }

    return [];
  }

  getTreeItem(element: ProjectItem): vscode.TreeItem {
    return element;
  }
}

export class ProjectItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly projectId: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly contextValue: string
  ) {
    super(label, collapsibleState);
  }
}
