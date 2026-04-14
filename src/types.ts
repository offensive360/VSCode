import * as vscode from 'vscode';

export interface Vulnerability {
    id: string;
    fileName: string;
    filePath: string;
    lineNumber: string;
    codeSnippet: string;
    type: string;
    riskLevel: RiskLevel;
    vulnerability: string;
    title: string;
    effect: string;
    references: string;
    recommendation: string;
}

export interface DependencyVulnerability {
    id: string;
    packageName: string;
    version: string;
    severity: string;
    description: string;
    fixVersion: string;
    cveId: string;
}

export interface LicenseIssue {
    id: string;
    packageName: string;
    licenseName: string;
    licenseType: string;
    riskLevel: string;
}

export interface MalwareResult {
    id: string;
    fileName: string;
    filePath: string;
    ruleName: string;
    description: string;
    severity: string;
}

export interface ScanResponse {
    projectId: string;
    status: ScanStatus;
    vulnerabilities: Vulnerability[];
    malwares: MalwareResult[];
    licenses: LicenseIssue[];
    dependencyVulnerabilities: DependencyVulnerability[];
}

export interface ScanRequest {
    name: string;
    fileSource: Buffer;
    fileName: string;
    externalScanSourceType: string;
    keepInvisibleAndDeletePostScan: boolean;
    dontWaitForScanToComplete: boolean;
    allowDependencyScan: boolean;
    allowLicenseScan: boolean;
    allowMalwareScan: boolean;
}

export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low' | 'Info';

export type ScanStatus = 'Queued' | 'Scanning' | 'Completed' | 'Failed';

// Backend returns numeric enums — map them to strings
const RISK_LEVEL_MAP: Record<number, RiskLevel> = {
    0: 'Info',      // Safe
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Critical',
};

const SCAN_STATUS_MAP: Record<number, string> = {
    0: 'Queued',
    1: 'Running',
    2: 'Succeeded',
    3: 'Failed',
    4: 'PartialFailed',
    5: 'Skipped',
};

export function normalizeRiskLevel(value: string | number): RiskLevel {
    if (typeof value === 'number') {
        return RISK_LEVEL_MAP[value] || 'Medium';
    }
    return value as RiskLevel;
}

export function normalizeScanStatus(value: string | number): string {
    if (typeof value === 'number') {
        return SCAN_STATUS_MAP[value] || 'Unknown';
    }
    return value;
}

export interface VulnerabilityItem {
    vulnerability: Vulnerability;
    diagnostic: vscode.Diagnostic;
    absolutePath: string;
}

export interface ExtensionConfig {
    endpoint: string;
    accessToken: string;
    allowSelfSignedCerts: boolean;
    autoScanOnSave: boolean;
    scanDependencies: boolean;
    scanLicenses: boolean;
    scanMalware: boolean;
    showInlineDetails: boolean;
}
