import * as vscode from 'vscode';
import * as https from 'https';
import { VulnerabilityItem } from '../types';
import { EXTENSION_NAME } from '../constants';
import { lookupKB, KBEntry } from '../services/knowledgeBase';

export class DetailPanel {
    public static currentPanel: DetailPanel | undefined;
    private readonly panel: vscode.WebviewPanel;
    private disposables: vscode.Disposable[] = [];
    // In-memory cache for online KB fetches (session-scoped)
    private static onlineCache = new Map<string, Partial<KBEntry>>();

    private constructor(panel: vscode.WebviewPanel) {
        this.panel = panel;
        this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
        // Listen for messages from the webview (e.g. link clicks)
        this.panel.webview.onDidReceiveMessage(
            (msg) => {
                if (msg.type === 'openExternal' && msg.url) {
                    vscode.env.openExternal(vscode.Uri.parse(msg.url));
                }
            },
            null,
            this.disposables
        );
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

        // Look up offline KB immediately
        const kbEntry = lookupKB(vuln.type) || lookupKB(vuln.title);

        // Render immediately with whatever we have (server data + offline KB)
        this.panel.webview.html = this.getHtml(item, tab, kbEntry, false);

        // If offline KB didn't fully cover this vuln, try online fetch asynchronously
        const needsOnlineFetch = !kbEntry || (!kbEntry.description && !kbEntry.howToFix);
        if (needsOnlineFetch) {
            const cacheKey = (vuln.type || vuln.title || '').toLowerCase();
            if (DetailPanel.onlineCache.has(cacheKey)) {
                const cached = DetailPanel.onlineCache.get(cacheKey)!;
                this.panel.webview.postMessage({ type: 'kbUpdate', payload: cached });
            } else {
                this.fetchOnlineKB(vuln.type || vuln.title, cacheKey);
            }
        }
    }

    private async fetchOnlineKB(vulnType: string, cacheKey: string): Promise<void> {
        const normalizedType = vulnType.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        const url = `https://knowledge-base.offensive360.com/api/vulnerabilities/${normalizedType}`;

        try {
            const result = await new Promise<any>((resolve, reject) => {
                const req = https.get(url, { timeout: 5000, rejectUnauthorized: false }, (res) => {
                    if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
                    let data = '';
                    res.on('data', (chunk) => { data += chunk; });
                    res.on('end', () => {
                        try { resolve(JSON.parse(data)); }
                        catch { reject(new Error('Invalid JSON')); }
                    });
                });
                req.on('error', reject);
                req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
            });

            if (result && typeof result === 'object') {
                const partial: Partial<KBEntry> = {
                    description: result.description || result.info || result.summary || '',
                    impact: result.impact || result.effect || '',
                    howToFix: result.remediation || result.recommendation || result.howToFix || '',
                    references: result.references || '',
                };
                DetailPanel.onlineCache.set(cacheKey, partial);
                // Push update to webview
                if (DetailPanel.currentPanel) {
                    DetailPanel.currentPanel.panel.webview.postMessage({ type: 'kbUpdate', payload: partial });
                }
            }
        } catch {
            // Online fetch failed silently — offline content is already shown
        }
    }

    private getHtml(item: VulnerabilityItem, activeTab: 'fix' | 'explain', kbEntry: KBEntry | null, _loading: boolean): string {
        const vuln = item.vulnerability;
        const line = item.diagnostic.range.start.line + 1;
        const severityClass = vuln.riskLevel.toLowerCase();

        // Merge server data with offline KB (server data takes priority if non-empty)
        const description = this.firstNonEmpty(vuln.vulnerability, kbEntry?.description);
        const impact = this.firstNonEmpty(vuln.effect, kbEntry?.impact);
        const howToFix = this.firstNonEmpty(vuln.recommendation, kbEntry?.howToFix);

        // Build references list — always include KB/OWASP/CWE links
        const serverRefs = (vuln.references || '')
            .split('|')
            .map((r: string) => r.trim())
            .filter((r: string) => r && r.startsWith('http'));

        const kbRefs = (kbEntry?.references || '')
            .split('\n')
            .map((r: string) => r.trim())
            .filter((r: string) => r && r.startsWith('http'));

        // Always add O360 KB link for this vuln type
        const vulnSlug = (vuln.type || vuln.title || '').replace(/\s+/g, '');
        const alwaysRefs = [
            `https://knowledge-base.offensive360.com/${vulnSlug}/`,
        ];

        const allRefs = [...new Set([...serverRefs, ...kbRefs, ...alwaysRefs])];

        const refItems = allRefs.map(ref => {
            try {
                const domain = new URL(ref).hostname.replace('www.', '');
                const label = ref.includes('knowledge-base.offensive360.com') ? 'O360 Knowledge Base'
                    : ref.includes('owasp.org') ? 'OWASP'
                    : ref.includes('cwe.mitre.org') ? 'MITRE CWE'
                    : domain;
                return `<li><span class="ref-icon">🔗</span><a href="#" data-url="${this.escAttr(ref)}" onclick="openExternal(this)">${this.escHtml(label)}</a></li>`;
            } catch {
                return '';
            }
        }).filter(Boolean);

        // Code snippet rendering (no <br> conversion — use pre tag)
        const rawSnippet = vuln.codeSnippet ? this.decodeIfBase64(vuln.codeSnippet) : '';
        const codeSnippet = rawSnippet ? this.escHtml(rawSnippet) : '';

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
            --badge-medium: #e6b800;
            --badge-low: #17a2b8;
            --badge-info: #6c757d;
            --accent: var(--vscode-textLink-foreground);
            --code-bg: var(--vscode-textCodeBlock-background);
            --fix-bg: color-mix(in srgb, var(--accent) 8%, var(--bg));
        }
        * { box-sizing: border-box; }
        body {
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
            color: var(--fg);
            background: var(--bg);
            padding: 20px;
            line-height: 1.65;
            max-width: 860px;
            margin: 0 auto;
        }
        h1 {
            font-size: 1.35em;
            margin: 0 0 12px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        h2 {
            font-size: 1em;
            margin: 20px 0 8px 0;
            color: var(--accent);
            border-bottom: 1px solid var(--border);
            padding-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .badge {
            display: inline-block;
            padding: 3px 12px;
            border-radius: 12px;
            font-size: 0.75em;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            flex-shrink: 0;
        }
        .badge.critical { background: var(--badge-critical); }
        .badge.high { background: var(--badge-high); color: #fff; }
        .badge.medium { background: var(--badge-medium); color: #333; }
        .badge.low { background: var(--badge-low); }
        .badge.info { background: var(--badge-info); }
        .meta {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 3px 16px;
            margin-bottom: 16px;
            font-size: 0.9em;
            opacity: 0.85;
        }
        .meta dt { font-weight: 600; }
        .meta dd { margin: 0; word-break: break-all; }
        pre.code-block {
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 4px;
            padding: 12px;
            font-family: var(--vscode-editor-font-family);
            font-size: 0.9em;
            overflow-x: auto;
            white-space: pre;
            margin: 8px 0;
        }
        .section { margin-bottom: 20px; }
        .section p { margin: 4px 0; white-space: pre-line; }
        .fix-box {
            background: var(--fix-bg);
            border-left: 4px solid var(--accent);
            padding: 12px 16px;
            border-radius: 0 4px 4px 0;
            margin: 8px 0;
            white-space: pre-line;
        }
        .ref-list { list-style: none; padding: 0; margin: 0; }
        .ref-list li {
            padding: 6px 0;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .ref-list li:last-child { border-bottom: none; }
        .ref-icon { font-size: 0.9em; opacity: 0.7; }
        .ref-list a {
            color: var(--accent);
            text-decoration: none;
            cursor: pointer;
        }
        .ref-list a:hover { text-decoration: underline; }
        .tabs {
            display: flex;
            gap: 0;
            border-bottom: 2px solid var(--border);
            margin-bottom: 20px;
            margin-top: 16px;
        }
        .tab {
            padding: 8px 22px;
            cursor: pointer;
            border: none;
            background: none;
            color: var(--fg);
            opacity: 0.55;
            font-size: 0.95em;
            border-bottom: 2px solid transparent;
            margin-bottom: -2px;
            transition: opacity 0.1s;
        }
        .tab:hover { opacity: 0.85; }
        .tab.active { opacity: 1; border-bottom-color: var(--accent); font-weight: 600; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .empty-notice {
            color: var(--fg);
            opacity: 0.5;
            font-style: italic;
            padding: 12px 0;
        }
        .kb-footer {
            margin-top: 32px;
            padding-top: 12px;
            border-top: 1px solid var(--border);
            font-size: 0.8em;
            opacity: 0.5;
            text-align: center;
        }
        .kb-footer a { color: var(--accent); text-decoration: none; cursor: pointer; }
    </style>
</head>
<body>
    <h1>
        <span class="badge ${severityClass}">${this.escHtml(vuln.riskLevel)}</span>
        ${this.escHtml(vuln.title)}
    </h1>

    <dl class="meta">
        <dt>Type</dt><dd>${this.escHtml(vuln.type)}</dd>
        <dt>File</dt><dd>${this.escHtml(vuln.filePath)}:${line}</dd>
        <dt>Severity</dt><dd>${this.escHtml(vuln.riskLevel)}</dd>
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
            ${description
                ? `<p id="desc-text">${this.escHtml(description)}</p>`
                : `<p id="desc-text" class="empty-notice">Loading description...</p>`}
        </div>

        <div class="section" id="impact-section" ${!impact ? 'style="display:none"' : ''}>
            <h2>Impact</h2>
            <p id="impact-text">${this.escHtml(impact)}</p>
        </div>

        ${codeSnippet ? `
        <div class="section">
            <h2>Affected Code</h2>
            <pre class="code-block">${codeSnippet}</pre>
        </div>` : ''}
    </div>

    <!-- Fix Tab -->
    <div class="tab-content ${activeTab === 'fix' ? 'active' : ''}" id="content-fix">
        ${howToFix
            ? `<div class="section">
                <h2>Recommended Fix</h2>
                <div class="fix-box" id="fix-text">${this.escHtml(howToFix)}</div>
               </div>`
            : `<div class="section">
                <p id="fix-text" class="empty-notice">Loading fix recommendations...</p>
               </div>`}

        ${codeSnippet ? `
        <div class="section">
            <h2>Vulnerable Code</h2>
            <pre class="code-block">${codeSnippet}</pre>
        </div>` : ''}
    </div>

    <!-- References Tab -->
    <div class="tab-content" id="content-refs">
        <div class="section">
            <h2>References &amp; Resources</h2>
            ${refItems.length > 0
                ? `<ul class="ref-list" id="ref-list">${refItems.join('\n')}</ul>`
                : `<ul class="ref-list" id="ref-list"><li><span class="empty-notice">Loading references...</span></li></ul>`}
        </div>
    </div>

    <div class="kb-footer">
        Powered by <a href="#" onclick="openExternal({dataset:{url:'https://offensive360.com/academy/'}})">O360 Academy</a>
        &nbsp;·&nbsp;
        <a href="#" onclick="openExternal({dataset:{url:'https://knowledge-base.offensive360.com/'}})">Knowledge Base</a>
    </div>

    <script>
        (function() {
            // Tab switching
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

            // Open external links via VS Code
            window.openExternal = function(el) {
                const url = el.dataset ? el.dataset.url : (el && el.href ? el.href : '');
                if (url) {
                    acquireVsCodeApi().postMessage({ type: 'openExternal', url: url });
                }
                return false;
            };

            // VS Code API
            let vscodeApi;
            function acquireVsCodeApi() {
                if (!vscodeApi) { vscodeApi = acquireVsCodeApi_(); }
                return vscodeApi;
            }
            function acquireVsCodeApi_() {
                try { return acquireVsCodeApi(); } catch(e) { return { postMessage: function(){} }; }
            }

            const vscode = (function() {
                try { return acquireVsCodeApi(); } catch(e) { return { postMessage: function(){} }; }
            })();

            window.openExternal = function(el) {
                const url = el && el.dataset ? el.dataset.url : '';
                if (url) { vscode.postMessage({ type: 'openExternal', url: url }); }
                return false;
            };

            // Handle KB update messages from extension host (async online fallback)
            window.addEventListener('message', event => {
                const msg = event.data;
                if (msg.type !== 'kbUpdate' || !msg.payload) { return; }
                const p = msg.payload;

                if (p.description) {
                    const el = document.getElementById('desc-text');
                    if (el && (el.classList.contains('empty-notice') || !el.textContent.trim())) {
                        el.classList.remove('empty-notice');
                        el.textContent = p.description;
                    }
                }
                if (p.impact) {
                    const sec = document.getElementById('impact-section');
                    const el = document.getElementById('impact-text');
                    if (sec) { sec.style.display = ''; }
                    if (el) { el.textContent = p.impact; }
                }
                if (p.howToFix) {
                    const el = document.getElementById('fix-text');
                    if (el && (el.classList.contains('empty-notice') || !el.textContent.trim())) {
                        el.classList.remove('empty-notice');
                        el.style.cssText = '';
                        el.className = 'fix-box';
                        el.textContent = p.howToFix;
                    }
                }
                if (p.references) {
                    const list = document.getElementById('ref-list');
                    if (list) {
                        const refs = (p.references || '').split('\\n').map(r => r.trim()).filter(r => r && r.startsWith('http'));
                        refs.forEach(url => {
                            try {
                                const domain = new URL(url).hostname.replace('www.', '');
                                const label = url.includes('knowledge-base.offensive360.com') ? 'O360 Knowledge Base'
                                    : url.includes('owasp.org') ? 'OWASP'
                                    : url.includes('cwe.mitre.org') ? 'MITRE CWE'
                                    : domain;
                                const li = document.createElement('li');
                                li.innerHTML = '<span class="ref-icon">🔗</span><a href="#" data-url="' + url + '" onclick="return window.openExternal(this)">' + label + '</a>';
                                if (list.querySelector('.empty-notice')) { list.innerHTML = ''; }
                                list.appendChild(li);
                            } catch(e) {}
                        });
                    }
                }
            });
        })();
    </script>
</body>
</html>`;
    }

    /** Return first non-empty string from candidates */
    private firstNonEmpty(...candidates: (string | undefined | null)[]): string {
        for (const c of candidates) {
            if (c && c.trim()) { return c.trim(); }
        }
        return '';
    }

    /** Escape text for safe HTML display (no newline conversion — use white-space:pre-line in CSS) */
    private escHtml(text: string): string {
        if (!text) { return ''; }
        // Clean up backend text artifacts
        let cleaned = text
            .replace(/\\r\\n/g, '\n')
            .replace(/\\r/g, '')
            .replace(/\\n/g, '\n')
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
        // Escape for HTML
        return cleaned
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /** Decode base64 if the server returned encoded code snippets (AI engine) */
    private decodeIfBase64(value: string): string {
        if (!value) { return ''; }
        // Plain code has spaces, parens, quotes — not base64
        if (value.includes(' ') || value.includes('(') || (value.includes('"') && value.includes('='))) {
            return value;
        }
        try {
            const decoded = Buffer.from(value, 'base64').toString('utf-8');
            // Verify it's printable text
            if (decoded && /^[\x09-\x7e\s]+$/.test(decoded)) { return decoded; }
        } catch {}
        return value;
    }

    /** Escape for HTML attribute values */
    private escAttr(text: string): string {
        return (text || '').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
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
