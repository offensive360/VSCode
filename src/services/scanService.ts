import * as vscode from 'vscode';
import * as https from 'https';
import * as fs from 'fs';
const FormData = require('form-data');
import { API, SCAN_SOURCE_TYPE, MAX_QUEUE_WAIT_MINUTES, QUEUE_POLL_INTERVAL_SEC, EXTENSION_NAME } from '../constants';
import { ScanResponse, ExtensionConfig, Vulnerability } from '../types';
import { FileService } from './fileService';

const axios = require('axios');

/**
 * Detects transient network drops where the upload TCP connection died
 * mid-flight (proxy / load-balancer idle timeout, server stream close).
 * The scan often continues server-side even after this happens.
 */
function isNetworkDrop(err: any): boolean {
    if (!err) return false;
    const code = err.code || err?.cause?.code;
    if (code === 'ECONNRESET' || code === 'ECONNABORTED' || code === 'ETIMEDOUT' ||
        code === 'EPIPE' || code === 'ENETUNREACH' || code === 'ENETDOWN' ||
        code === 'ERR_BAD_RESPONSE' || code === 'ERR_NETWORK') {
        return true;
    }
    const msg = String(err.message || '').toLowerCase();
    return msg.includes('socket hang up') ||
           msg.includes('client network socket disconnected') ||
           msg.includes('network error');
}

/** httpsAgent with TCP keepalive — keeps the connection warm so proxies don't kill it. */
function makeAgent(allowSelfSigned: boolean): https.Agent {
    return new https.Agent({
        rejectUnauthorized: !allowSelfSigned,
        keepAlive: true,
        keepAliveMsecs: 30000,
    });
}

export class ScanService {
    private outputChannel: vscode.OutputChannel;
    private fileService: FileService;
    private scanInProgress = false;
    private lastScanResults: Map<string, ScanResponse> = new Map();

    // Event emitter for scan completion
    private _onScanComplete = new vscode.EventEmitter<ScanResponse>();
    readonly onScanComplete = this._onScanComplete.event;

    private _onScanStart = new vscode.EventEmitter<void>();
    readonly onScanStart = this._onScanStart.event;

    constructor(outputChannel: vscode.OutputChannel, fileService: FileService) {
        this.outputChannel = outputChannel;
        this.fileService = fileService;
    }

    get isScanInProgress(): boolean {
        return this.scanInProgress;
    }

    getLastResults(): Map<string, ScanResponse> {
        return this.lastScanResults;
    }

    /**
     * Get extension configuration.
     */
    getConfig(): ExtensionConfig {
        const config = vscode.workspace.getConfiguration('o360');
        const allowSelfSigned = config.get<boolean>('allowSelfSignedCerts', false);
        // Set global TLS flag for self-signed certs (httpsAgent alone doesn't always work)
        if (allowSelfSigned) {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        } else {
            delete process.env.NODE_TLS_REJECT_UNAUTHORIZED;
        }
        return {
            endpoint: this.trimTrailingSlash(config.get<string>('endpoint', '')),
            accessToken: config.get<string>('accessToken', ''),
            allowSelfSignedCerts: allowSelfSigned,
            autoScanOnSave: config.get<boolean>('autoScanOnSave', false),
            scanDependencies: config.get<boolean>('scanDependencies', true),
            scanLicenses: config.get<boolean>('scanLicenses', false),
            scanMalware: config.get<boolean>('scanMalware', false),
            showInlineDetails: config.get<boolean>('showInlineDetails', true),
        };
    }

    /**
     * Validate configuration before scanning.
     */
    async validateConfig(): Promise<boolean> {
        const config = this.getConfig();

        if (!config.endpoint || config.endpoint.includes('<Replace')) {
            vscode.window.showErrorMessage(
                `${EXTENSION_NAME}: Please configure the server endpoint in settings.`,
                'Open Settings'
            ).then(action => {
                if (action === 'Open Settings') {
                    vscode.commands.executeCommand('workbench.action.openSettings', 'o360.endpoint');
                }
            });
            return false;
        }

        if (!config.accessToken || config.accessToken.includes('<Replace')) {
            vscode.window.showErrorMessage(
                `${EXTENSION_NAME}: Please configure the access token in settings.`,
                'Open Settings'
            ).then(action => {
                if (action === 'Open Settings') {
                    vscode.commands.executeCommand('workbench.action.openSettings', 'o360.accessToken');
                }
            });
            return false;
        }

        // Skip pre-scan connectivity check — the actual scan upload will fail fast
        // if the server is unreachable, and handles SSL/auth errors properly.
        // Previous validation was causing false negatives with self-signed certs and 403 tokens.
        this.log('Skipping pre-scan validation (will validate during upload)');

        return true;
    }

    /**
     * Scan a folder or workspace.
     */
    async scanFolder(folderPath: string, label: string): Promise<ScanResponse | null> {
        if (this.scanInProgress) {
            vscode.window.showWarningMessage(`${EXTENSION_NAME}: A scan is already in progress. Please wait for it to complete.`);
            return null;
        }

        if (!(await this.validateConfig())) {
            return null;
        }

        this.scanInProgress = true;
        this._onScanStart.fire();
        const config = this.getConfig();
        const projectName = this.fileService.generateProjectName(folderPath);

        this.log(`Starting ${label} scan: ${folderPath}`);
        this.log(`Project name: ${projectName}`);

        try {
            return await vscode.window.withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: `${EXTENSION_NAME}`,
                    cancellable: true,
                },
                async (progress, token) => {
                    // === DASHBOARD-FIRST LOOKUP (v1.1.8) ===
                    // Before uploading anything, try to find an existing dashboard
                    // project whose name matches the current workspace. If found,
                    // fetch its canonical findings from /LangaugeScanResult — the
                    // same endpoint the dashboard UI reads from. Plugin display =
                    // dashboard display, byte-identical, no scan, no upload, no
                    // server trace.
                    progress.report({ message: `Looking up dashboard project "${projectName}"…` });
                    try {
                        const dashFindings = await this.tryFetchDashboardFindings(config, projectName, folderPath);
                        if (dashFindings) {
                            this.log(`Dashboard-first: matched project with ${dashFindings.vulnerabilities?.length ?? 0} canonical findings`);
                            this.lastScanResults.set(folderPath, dashFindings);
                            this._onScanComplete.fire(dashFindings);
                            return dashFindings;
                        }
                        this.log('Dashboard-first: no matching project, will run temporary scan');
                    } catch (e: any) {
                        if (e?.message?.includes?.('LICENSE_REQUIRED')) {
                            throw new Error(
                                'The Offensive 360 server is locked due to a license issue and is rejecting all requests. ' +
                                'Please contact your Offensive 360 administrator to reactivate the license.'
                            );
                        }
                        this.log(`Dashboard-first lookup failed (${e?.message ?? 'unknown'}) — will run temporary scan`);
                    }

                    // Step 1: Zip to temp file (avoids OOM for large codebases)
                    progress.report({ message: 'Preparing files...' });
                    this.log('Zipping directory to temp file...');
                    const { zipPath, fileCount, sizeMb } = await this.fileService.zipDirectoryToFile(folderPath);
                    this.log(`Zip created: ${sizeMb} MB (${fileCount.toLocaleString()} files) → ${zipPath}`);

                    if (sizeMb > 200) {
                        progress.report({ message: `Large upload (${sizeMb}MB) — this may take several minutes...` });
                    }

                    if (token.isCancellationRequested) {
                        this.log('Scan cancelled by user.');
                        try { fs.unlinkSync(zipPath); } catch {}
                        return null;
                    }

                    // Step 2: Upload using file stream (not in-memory buffer)
                    progress.report({ message: `Uploading ${sizeMb}MB to server...` });
                    this.log(`Uploading ${sizeMb}MB to server...`);

                    const form = new FormData();
                    form.append('name', projectName);
                    // Temporary scan: server auto-deletes the project immediately
                    // after the scan. Plugin-triggered scans must not persist on
                    // the dashboard. This is the fallback path when no existing
                    // dashboard project matches the workspace name.
                    form.append('keepInvisibleAndDeletePostScan', 'True');
                    form.append('externalScanSourceType', SCAN_SOURCE_TYPE);
                    form.append('allowDependencyScan', String(config.scanDependencies));
                    form.append('allowLicenseScan', String(config.scanLicenses));
                    form.append('allowMalwareScan', String(config.scanMalware));
                    form.append('fileSource', fs.createReadStream(zipPath), { filename: `${projectName}.zip` });

                    // Start the scan request (don't await yet)
                    const scanPromise = this.postScan(config, form).finally(() => {
                        // Clean up temp zip after upload completes (success or failure)
                        try { fs.unlinkSync(zipPath); } catch {}
                    });

                    // Step 3: Show queue position while waiting
                    progress.report({ message: 'Scan queued, waiting...' });

                    await this.pollQueuePosition(config, projectName, progress, token);

                    if (token.isCancellationRequested) {
                        this.log('Scan cancelled by user.');
                        return null;
                    }

                    progress.report({ message: 'Scanning in progress...' });
                    this.log('Scan in progress on server...');

                    let response: ScanResponse | null;
                    try {
                        response = await scanPromise;
                    } catch (err: any) {
                        if (err?.code === 'UPLOAD_DROPPED') {
                            // Upload connection dropped after the server already started
                            // processing. Poll the dashboard for the project to finish
                            // instead of failing the scan.
                            progress.report({ message: 'Network blip — waiting for the server to finish (scan continues server-side)…' });
                            response = await this.waitForServerToFinish(config, projectName, folderPath, progress, token);
                            if (!response) {
                                throw new Error('Upload connection dropped and dashboard polling is not available for this token (External tokens cannot list projects). Please retry the scan, reduce project size, or use a token with dashboard read access.');
                            }
                        } else {
                            throw err;
                        }
                    }

                    if (response) {
                        const vulnCount = response.vulnerabilities?.length || 0;
                        const serverTotal = (response as any).totalVulnerabilities;
                        const depCount = response.dependencyVulnerabilities?.length || 0;
                        if (serverTotal !== undefined && serverTotal !== vulnCount) {
                            this.log(`WARN: server reported totalVulnerabilities=${serverTotal} but array has ${vulnCount} items`);
                        }
                        this.log(`Scan complete: ${vulnCount} code vulnerabilities (server total: ${serverTotal ?? 'n/a'}), ${depCount} dependency vulnerabilities`);
                        this.lastScanResults.set(folderPath, response);
                        this._onScanComplete.fire(response);
                    }

                    return response;
                }
            );
        } catch (error: any) {
            this.log(`Scan failed: ${error.message}`);
            vscode.window.showErrorMessage(`${EXTENSION_NAME}: Scan failed - ${error.message}`);
            return null;
        } finally {
            this.scanInProgress = false;
        }
    }

    /**
     * Scan a single file.
     */
    async scanFile(filePath: string): Promise<ScanResponse | null> {
        if (this.scanInProgress) {
            vscode.window.showWarningMessage(`${EXTENSION_NAME}: A scan is already in progress.`);
            return null;
        }

        if (!(await this.validateConfig())) {
            return null;
        }

        this.scanInProgress = true;
        this._onScanStart.fire();
        const config = this.getConfig();
        const projectName = this.fileService.generateProjectName(filePath);

        this.log(`Starting file scan: ${filePath}`);

        try {
            return await vscode.window.withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: `${EXTENSION_NAME}`,
                    cancellable: true,
                },
                async (progress, token) => {
                    progress.report({ message: `Scanning ${require('path').basename(filePath)}...` });

                    const { buffer } = await this.fileService.zipSingleFile(filePath);

                    if (token.isCancellationRequested) { return null; }

                    const form = new FormData();
                    form.append('name', projectName);
                    form.append('keepInvisibleAndDeletePostScan', 'True');
                    form.append('externalScanSourceType', SCAN_SOURCE_TYPE);
                    form.append('allowDependencyScan', String(config.scanDependencies));
                    form.append('allowLicenseScan', String(config.scanLicenses));
                    form.append('allowMalwareScan', String(config.scanMalware));
                    form.append('fileSource', buffer, { filename: `${projectName}.zip` });

                    progress.report({ message: 'Scanning...' });

                    let response: ScanResponse | null;
                    try {
                        response = await this.postScan(config, form);
                    } catch (err: any) {
                        if (err?.code === 'UPLOAD_DROPPED') {
                            progress.report({ message: 'Network blip — waiting for the server to finish (scan continues server-side)…' });
                            response = await this.waitForServerToFinish(config, projectName, require('path').dirname(filePath), progress, token);
                            if (!response) {
                                throw new Error('Upload connection dropped and dashboard polling is not available for this token (External tokens cannot list projects). Please retry the scan, reduce project size, or use a token with dashboard read access.');
                            }
                        } else {
                            throw err;
                        }
                    }

                    if (response) {
                        this.lastScanResults.set(filePath, response);
                        this._onScanComplete.fire(response);
                    }

                    return response;
                }
            );
        } catch (error: any) {
            this.log(`File scan failed: ${error.message}`);
            vscode.window.showErrorMessage(`${EXTENSION_NAME}: Scan failed - ${error.message}`);
            return null;
        } finally {
            this.scanInProgress = false;
        }
    }

    /**
     * Poll the dashboard for a freshly-uploaded project to finish scanning.
     * Used when the upload connection drops mid-flight but the server is
     * still processing. Returns the canonical findings once the project
     * appears on the dashboard, or null on timeout / cancellation.
     */
    private async waitForServerToFinish(
        config: ExtensionConfig,
        projectName: string,
        folderPath: string,
        progress: vscode.Progress<{ message?: string }>,
        token: vscode.CancellationToken
    ): Promise<ScanResponse | null> {
        const maxWaitMs = 60 * 60 * 1000; // 1 hour cap
        const pollIntervalMs = 15 * 1000;
        const startedAt = Date.now();
        let lastLoggedMin = -1;

        // Pre-check: if the token can't read /Project (401/403 — typical for
        // External tokens), there's no point polling for an hour. Abort fast.
        const canReadDashboard = await this.canListProjects(config);
        if (!canReadDashboard) {
            this.log('Server-completion poll: token has no dashboard read access (External token); skipping 1h poll.');
            return null;
        }

        while (Date.now() - startedAt < maxWaitMs) {
            if (token.isCancellationRequested) {
                this.log('Server-completion poll cancelled by user.');
                return null;
            }

            try {
                const found = await this.tryFetchDashboardFindings(config, projectName, folderPath);
                if (found) {
                    this.log(`Server-completion poll: results fetched after upload-drop (${found.vulnerabilities?.length ?? 0} findings).`);
                    return found;
                }
            } catch (e: any) {
                if (e?.message?.includes?.('LICENSE_REQUIRED')) throw e;
                // Otherwise transient — keep polling.
            }

            const elapsedMin = Math.floor((Date.now() - startedAt) / 60000);
            if (elapsedMin !== lastLoggedMin) {
                progress.report({ message: `Waiting for server to finish… (${elapsedMin}m)` });
                lastLoggedMin = elapsedMin;
            }

            await this.sleep(pollIntervalMs / 1000);
        }

        this.log('Server-completion poll: timed out after 1h, no results visible on dashboard.');
        return null;
    }

    /**
     * Returns true if the configured token is allowed to GET /app/api/Project
     * (i.e. has dashboard read access). External tokens get 401/403 here, so
     * there is no point polling the dashboard for them after an upload drop.
     */
    private async canListProjects(config: ExtensionConfig): Promise<boolean> {
        try {
            await axios({
                url: `${config.endpoint}/app/api/Project?pageSize=1&pageNumber=1`,
                method: 'GET',
                httpsAgent: makeAgent(config.allowSelfSignedCerts),
                headers: { 'Authorization': `Bearer ${config.accessToken}` },
                timeout: 15000,
            });
            return true;
        } catch (err: any) {
            const status = err?.response?.status;
            if (status === 401 || status === 403) return false;
            // Other errors (network, 5xx) — assume reachable, let main poll retry.
            return true;
        }
    }

    /**
     * Look up an existing dashboard project whose name matches the given
     * workspace name and return its canonical findings, or null if no match.
     *
     * Matching strategy:
     *   1. Exact case-insensitive name match
     *   2. Normalized match (strip dots/spaces/underscores/hyphens)
     *   3. Normalized substring match
     *
     * Throws an Error with message "LICENSE_REQUIRED ..." if the server is in
     * license lock — caller must handle it.
     */
    private async tryFetchDashboardFindings(config: ExtensionConfig, projectName: string, folderPath: string): Promise<ScanResponse | null> {
        // Large pageSize so we don't miss projects on page 2+ and fall into a bad substring match.
        const listUrl = `${config.endpoint}/app/api/Project?pageSize=500&pageNumber=1`;
        let listResp: any;
        try {
            listResp = await axios({
                url: listUrl,
                method: 'GET',
                httpsAgent: makeAgent(config.allowSelfSignedCerts),
                headers: { 'Authorization': `Bearer ${config.accessToken}` },
                timeout: 15000,
            });
        } catch (err: any) {
            const body = typeof err?.response?.data === 'string'
                ? err.response.data
                : JSON.stringify(err?.response?.data ?? '');
            if (body && body.toUpperCase().includes('LICENSE_REQUIRED')) {
                throw new Error(`LICENSE_REQUIRED: ${body}`);
            }
            // 401/403/etc — server hasn't granted External tokens read access.
            // Caller falls back to temporary scan.
            return null;
        }

        const items: any[] = Array.isArray(listResp.data)
            ? listResp.data
            : (listResp.data?.pageItems ?? []);
        if (!items.length) return null;

        const norm = (s: string): string => (s || '')
            .toLowerCase()
            .replace(/[._\-\s/\\]/g, '');
        const target = norm(projectName);

        let match = items.find(p => (p.name || '').toLowerCase() === projectName.toLowerCase());
        if (!match) match = items.find(p => norm(p.name || '') === target);
        // Substring fallback REMOVED in v1.1.9 — caused wrong-project picks
        // (e.g. "WebGoatNET" substring-matched "WebGoat.NET-admin-test").
        // Content-fingerprint fallback is in tryFingerprintMatch() instead.
        if (!match) {
            const localFileCount = await this.fileService.countScannableFiles(folderPath);
            if (localFileCount > 0) {
                this.log(`Dashboard-first: name lookup failed, trying fingerprint match localFiles=${localFileCount}`);
                let bestDelta = Infinity;
                let bestDate = 0;
                for (const p of items) {
                    const sf = Number(p.totalScannedCodeFiles ?? 0);
                    if (sf <= 0) continue;
                    const delta = Math.abs(sf - localFileCount);
                    if (delta > 2) continue;
                    const dt = Date.parse(p.lastModifiedDate ?? '') || 0;
                    if (delta < bestDelta || (delta === bestDelta && dt > bestDate)) {
                        bestDelta = delta;
                        bestDate = dt;
                        match = p;
                    }
                }
                if (match) this.log(`Fingerprint match: localFiles=${localFileCount} → projectId=${match.id} name="${match.name}" (Δ=${bestDelta} files)`);
            }
        }
        if (!match) return null;

        const projectId = match.id;
        this.log(`Dashboard-first: matched projectId=${projectId} name="${match.name}"`);

        // Fetch canonical findings from /LangaugeScanResult — the same endpoint
        // the dashboard UI uses. Output is byte-identical to what the dashboard shows.
        const findingsUrl = `${config.endpoint}/app/api/Project/${projectId}/LangaugeScanResult`;
        const findingsResp = await axios({
            url: findingsUrl,
            method: 'GET',
            httpsAgent: makeAgent(config.allowSelfSignedCerts),
            headers: { 'Authorization': `Bearer ${config.accessToken}` },
            timeout: 120000,
        });

        const rawItems: any[] = Array.isArray(findingsResp.data)
            ? findingsResp.data
            : (findingsResp.data?.pageItems ?? []);

        // Map the dashboard field shape to the extension's Vulnerability type.
        const vulnerabilities = rawItems.map(it => ({
            id: it.id,
            title: it.title || it.type || '',
            type: it.type || '',
            riskLevel: it.riskLevel,
            fileName: it.fileName || '',
            filePath: it.filePath || '',
            lineNumber: `${it.lineNo ?? 0},${it.columnNo ?? 0}`,
            vulnerability: it.vulnerability || '',
            codeSnippet: it.codeSnippet || '',
            effect: it.effect || '',
            recommendation: it.recommendation || '',
            references: it.references || '',
        }));

        return {
            projectId,
            totalVulnerabilities: vulnerabilities.length,
            vulnerabilities,
        } as any as ScanResponse;
    }

    /**
     * POST scan request to server with retry on 5xx and on network drops
     * (socket hang up / ECONNRESET / ETIMEDOUT). After a network drop the
     * server may already be processing the upload, so retrying the upload
     * is wasteful — we surface a tagged error so the caller can fall back
     * to polling the dashboard for completion.
     */
    private async postScan(config: ExtensionConfig, formData: any): Promise<ScanResponse | null> {
        const url = `${config.endpoint}${API.EXTERNAL_SCAN}`;
        const maxRetries = 3;
        let lastError: any;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await axios({
                    url,
                    method: 'POST',
                    httpsAgent: makeAgent(config.allowSelfSignedCerts),
                    headers: {
                        'Authorization': `Bearer ${config.accessToken}`,
                        'Connection': 'keep-alive',
                        ...formData.getHeaders(),
                    },
                    maxContentLength: Infinity,
                    maxBodyLength: Infinity,
                    data: formData,
                    timeout: 4 * 60 * 60 * 1000, // 4 hours — large projects (2GB) at 1MB/s need ~35 min
                });
                return response.data as ScanResponse;
            } catch (err: any) {
                lastError = err;
                const status = err?.response?.status;
                // Network drop: the server likely still processing — surface a tagged
                // error so the caller can poll the dashboard for completion instead
                // of re-uploading. Don't retry the upload.
                if (isNetworkDrop(err)) {
                    this.log(`Upload connection dropped (${err?.code || err?.message}). Server may still be processing — switching to dashboard polling.`);
                    const dropErr: any = new Error('UPLOAD_DROPPED');
                    dropErr.code = 'UPLOAD_DROPPED';
                    dropErr.cause = err;
                    throw dropErr;
                }
                // Retry on 5xx (intermittent server errors like MongoDB 500)
                if (status && status >= 500 && attempt < maxRetries) {
                    this.log(`Scan returned HTTP ${status}, retrying (attempt ${attempt}/${maxRetries})...`);
                    await new Promise(r => setTimeout(r, 5000 * attempt));
                    continue;
                }
                throw err;
            }
        }
        throw lastError;
    }

    /**
     * Get queue position for a project.
     */
    private async getQueuePosition(config: ExtensionConfig, projectName: string): Promise<number> {
        const url = `${config.endpoint}${API.QUEUE_POSITION}?projectName=${encodeURIComponent(projectName)}`;

        const response = await axios({
            url,
            method: 'GET',
            httpsAgent: makeAgent(config.allowSelfSignedCerts),
            headers: {
                'Authorization': `Bearer ${config.accessToken}`,
            },
            timeout: 15000,
        });

        return response.data;
    }

    /**
     * Poll queue position and report progress.
     */
    private async pollQueuePosition(
        config: ExtensionConfig,
        projectName: string,
        progress: vscode.Progress<{ message?: string }>,
        token: vscode.CancellationToken
    ): Promise<void> {
        const maxWait = MAX_QUEUE_WAIT_MINUTES * 60;
        let elapsed = 0;

        while (elapsed < maxWait && !token.isCancellationRequested) {
            await this.sleep(QUEUE_POLL_INTERVAL_SEC);
            elapsed += QUEUE_POLL_INTERVAL_SEC;

            try {
                const position = await this.getQueuePosition(config, projectName);
                if (position <= 0) {
                    return; // Scan started
                }
                progress.report({ message: `Queue position: ${position}` });
                this.log(`Queue position: ${position}`);
            } catch {
                return; // Scan likely started or completed
            }
        }
    }

    private trimTrailingSlash(str: string): string {
        return str.replace(/\/+$/, '');
    }

    private sleep(seconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    private log(message: string): void {
        const timestamp = new Date().toISOString().substring(11, 19);
        this.outputChannel.appendLine(`[${timestamp}] ${message}`);
    }

    dispose(): void {
        this._onScanComplete.dispose();
        this._onScanStart.dispose();
    }
}
