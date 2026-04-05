import * as vscode from 'vscode';
import { VulnerabilityItem } from '../types';
import { EXTENSION_NAME } from '../constants';

export class DetailPanel {
    public static currentPanel: DetailPanel | undefined;
    private readonly panel: vscode.WebviewPanel;
    private disposables: vscode.Disposable[] = [];

    private constructor(panel: vscode.WebviewPanel) {
        this.panel = panel;
        this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    }

    public static show(item: VulnerabilityItem, tab: 'fix' | 'explain' = 'explain'): void {
        const column = vscode.ViewColumn.Beside;

        if (DetailPanel.currentPanel) {
            DetailPanel.currentPanel.panel.reveal(column);
            DetailPanel.currentPanel.update(item, tab);
            return;
        }

        const panel = vscode.window.createWebviewPanel(
            'o360VulnerabilityDetail',
            `${EXTENSION_NAME}: Vulnerability Details`,
            column,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
            }
        );

        DetailPanel.currentPanel = new DetailPanel(panel);
        DetailPanel.currentPanel.update(item, tab);
    }

    private update(item: VulnerabilityItem, tab: 'fix' | 'explain'): void {
        const vuln = item.vulnerability;
        this.panel.title = `${vuln.title} - ${EXTENSION_NAME}`;
        this.panel.webview.html = this.getHtml(item, tab);
    }

    private getHtml(item: VulnerabilityItem, activeTab: 'fix' | 'explain'): string {
        const vuln = item.vulnerability;
        const line = item.diagnostic.range.start.line + 1;
        const severityClass = vuln.riskLevel.toLowerCase();

        // Parse references into links
        const references = (vuln.references || '')
            .split('|')
            .map(r => r.trim())
            .filter(r => r)
            .map(ref => {
                if (ref.startsWith('http')) {
                    const domain = new URL(ref).hostname.replace('www.', '');
                    return `<a href="${this.escapeHtml(ref)}">${this.escapeHtml(domain)}</a>`;
                }
                return this.escapeHtml(ref);
            });

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root {
            --bg: var(--vscode-editor-background);
            --fg: var(--vscode-editor-foreground);
            --border: var(--vscode-panel-border);
            --badge-critical: #dc3545;
            --badge-high: #fd7e14;
            --badge-medium: #ffc107;
            --badge-low: #17a2b8;
            --badge-info: #6c757d;
            --accent: var(--vscode-textLink-foreground);
            --code-bg: var(--vscode-textCodeBlock-background);
        }
        body {
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
            color: var(--fg);
            background: var(--bg);
            padding: 20px;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
        }
        h1 { font-size: 1.4em; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px; }
        h2 { font-size: 1.1em; margin: 24px 0 8px 0; color: var(--accent); border-bottom: 1px solid var(--border); padding-bottom: 4px; }
        .badge {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 12px;
            font-size: 0.8em;
            font-weight: 600;
            color: #fff;
            text-transform: uppercase;
        }
        .badge.critical { background: var(--badge-critical); }
        .badge.high { background: var(--badge-high); }
        .badge.medium { background: var(--badge-medium); color: #333; }
        .badge.low { background: var(--badge-low); }
        .badge.info { background: var(--badge-info); }
        .meta { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; margin-bottom: 16px; }
        .meta dt { font-weight: 600; opacity: 0.8; }
        .meta dd { margin: 0; }
        .code-block {
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 4px;
            padding: 12px;
            font-family: var(--vscode-editor-font-family);
            font-size: var(--vscode-editor-font-size);
            overflow-x: auto;
            white-space: pre-wrap;
            word-break: break-all;
        }
        .section { margin-bottom: 20px; }
        .section p { margin: 4px 0; }
        .fix-box {
            background: color-mix(in srgb, var(--accent) 10%, var(--bg));
            border-left: 4px solid var(--accent);
            padding: 12px 16px;
            border-radius: 0 4px 4px 0;
            margin: 8px 0;
        }
        .ref-list { list-style: none; padding: 0; }
        .ref-list li { padding: 4px 0; }
        .ref-list a { color: var(--accent); text-decoration: none; }
        .ref-list a:hover { text-decoration: underline; }
        .tabs { display: flex; gap: 0; border-bottom: 2px solid var(--border); margin-bottom: 20px; }
        .tab {
            padding: 8px 20px;
            cursor: pointer;
            border: none;
            background: none;
            color: var(--fg);
            opacity: 0.6;
            font-size: 1em;
            border-bottom: 2px solid transparent;
            margin-bottom: -2px;
        }
        .tab.active { opacity: 1; border-bottom-color: var(--accent); font-weight: 600; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
    </style>
</head>
<body>
    <h1>
        <span class="badge ${severityClass}">${this.escapeHtml(vuln.riskLevel)}</span>
        ${this.escapeHtml(vuln.title)}
    </h1>

    <dl class="meta">
        <dt>Type</dt><dd>${this.escapeHtml(vuln.type)}</dd>
        <dt>File</dt><dd>${this.escapeHtml(vuln.filePath)}:${line}</dd>
        <dt>Severity</dt><dd>${this.escapeHtml(vuln.riskLevel)}</dd>
    </dl>

    <div class="tabs">
        <div class="tab ${activeTab === 'explain' ? 'active' : ''}" id="tab-explain">Vulnerability Details</div>
        <div class="tab ${activeTab === 'fix' ? 'active' : ''}" id="tab-fix">How to Fix</div>
        <div class="tab" id="tab-refs">References</div>
    </div>

    <!-- Explain Tab -->
    <div class="tab-content ${activeTab === 'explain' ? 'active' : ''}" id="content-explain">
        <div class="section">
            <h2>Description</h2>
            <p>${this.escapeHtml(vuln.vulnerability)}</p>
        </div>

        ${vuln.effect ? `
        <div class="section">
            <h2>Impact</h2>
            <p>${this.escapeHtml(vuln.effect)}</p>
        </div>
        ` : ''}

        ${vuln.codeSnippet ? `
        <div class="section">
            <h2>Affected Code</h2>
            <div class="code-block">${this.escapeHtml(vuln.codeSnippet)}</div>
        </div>
        ` : ''}
    </div>

    <!-- Fix Tab -->
    <div class="tab-content ${activeTab === 'fix' ? 'active' : ''}" id="content-fix">
        ${vuln.recommendation ? `
        <div class="section">
            <h2>Recommended Fix</h2>
            <div class="fix-box">
                ${this.escapeHtml(vuln.recommendation)}
            </div>
        </div>
        ` : `
        <div class="section">
            <p>No specific fix recommendation available for this finding. Please refer to the references section for guidance.</p>
        </div>
        `}

        ${vuln.codeSnippet ? `
        <div class="section">
            <h2>Vulnerable Code</h2>
            <div class="code-block">${this.escapeHtml(vuln.codeSnippet)}</div>
        </div>
        ` : ''}
    </div>

    <!-- References Tab -->
    <div class="tab-content" id="content-refs">
        <div class="section">
            <h2>References</h2>
            ${references.length > 0 ? `
            <ul class="ref-list">
                ${references.map(ref => `<li>${ref}</li>`).join('')}
            </ul>
            ` : '<p>No references available.</p>'}
        </div>
    </div>

    <script>
        (function() {
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.tab-content');
            tabs.forEach((tab, i) => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.remove('active'));
                    tab.classList.add('active');
                    contents[i].classList.add('active');
                });
            });
        })();
    </script>
</body>
</html>`;
    }

    private escapeHtml(text: string): string {
        if (!text) { return ''; }
        // Clean up backend text artifacts first
        let cleaned = text
            .replace(/\\r\\n/g, '\n')
            .replace(/\\r/g, '')
            .replace(/\\n/g, '\n')
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');

        // Then escape for HTML display
        return cleaned
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/\n/g, '<br>');
    }

    private dispose(): void {
        DetailPanel.currentPanel = undefined;
        this.panel.dispose();
        while (this.disposables.length) {
            const d = this.disposables.pop();
            if (d) { d.dispose(); }
        }
    }
}
