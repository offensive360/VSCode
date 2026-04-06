import * as vscode from 'vscode';
import * as https from 'https';
import * as fs from 'fs';
const FormData = require('form-data');
import { API, SCAN_SOURCE_TYPE, MAX_QUEUE_WAIT_MINUTES, QUEUE_POLL_INTERVAL_SEC, EXTENSION_NAME } from '../constants';
import { ScanResponse, ExtensionConfig, Vulnerability } from '../types';
import { FileService } from './fileService';

const axios = require('axios');

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
        return {
            endpoint: this.trimTrailingSlash(config.get<string>('endpoint', '')),
            accessToken: config.get<string>('accessToken', ''),
            allowSelfSignedCerts: config.get<boolean>('allowSelfSignedCerts', false),
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

                    const response = await scanPromise;

                    if (response) {
                        const vulnCount = response.vulnerabilities?.length || 0;
                        const depCount = response.dependencyVulnerabilities?.length || 0;
                        this.log(`Scan complete: ${vulnCount} code vulnerabilities, ${depCount} dependency vulnerabilities`);
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

                    const response = await this.postScan(config, form);

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
     * POST scan request to server with retry on 5xx errors.
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
                    httpsAgent: new https.Agent({ rejectUnauthorized: !config.allowSelfSignedCerts }),
                    headers: {
                        'Authorization': `Bearer ${config.accessToken}`,
                        ...formData.getHeaders(),
                    },
                    maxContentLength: Infinity,
                    maxBodyLength: Infinity,
                    data: formData,
                    timeout: 15 * 60 * 1000,
                });
                return response.data as ScanResponse;
            } catch (err: any) {
                lastError = err;
                const status = err?.response?.status;
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
            httpsAgent: new https.Agent({ rejectUnauthorized: !config.allowSelfSignedCerts }),
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
