export const EXTENSION_ID = 'offensive360';
export const EXTENSION_NAME = 'O360 SAST';
export const DIAGNOSTIC_SOURCE = 'O360 SAST';

export const API = {
    EXTERNAL_SCAN: '/app/api/ExternalScan',
    QUEUE_POSITION: '/app/api/ExternalScan/scanQueuePosition',
} as const;

export const COMMANDS = {
    SCAN_FILE: 'o360.scanFile',
    SCAN_FOLDER: 'o360.scanFolder',
    SCAN_WORKSPACE: 'o360.scanWorkspace',
    SHOW_DETAILS: 'o360.showDetails',
    APPLY_FIX: 'o360.applyFix',
    VIEW_REFERENCES: 'o360.viewReferences',
    SUPPRESS_LINE: 'o360.suppressLine',
    MARK_FALSE_POSITIVE: 'o360.markFalsePositive',
    CLEAR_ALL: 'o360.clearAll',
    REFRESH_TREE: 'o360.refreshTree',
    FOCUS_VULNERABILITY: 'o360.focusVulnerability',
} as const;

export const VIEWS = {
    TREE: 'o360VulnerabilityTree',
} as const;

export const SCAN_SOURCE_TYPE = 'VsCodeExtension';

export const SEVERITY_ORDER: Record<string, number> = {
    'Critical': 0,
    'High': 1,
    'Medium': 2,
    'Low': 3,
    'Info': 4,
};

export const SEVERITY_ICONS: Record<string, string> = {
    'Critical': '$(error)',
    'High': '$(error)',
    'Medium': '$(warning)',
    'Low': '$(info)',
    'Info': '$(info)',
};

// KEEP IN LOCKSTEP with VS plugin's ScanCache.ExcludeExts and AS plugin's
// FileCollector.EXCLUDE_EXTS. Any change here MUST be mirrored in the other
// two plugins — otherwise the three IDEs will start producing different
// finding counts for the same project (VS v1.12.11 / AS v1.1.9 / VSCode v1.1.6
// incident: 106 / 74 / ?? on the same WebGoat.NET).
//
// All entries must be LOWERCASE because the check is now case-insensitive.
export const EXCLUDED_EXTENSIONS = new Set([
    '.zip', '.dll', '.pdf', '.exe', '.ds_store', '.bak', '.tmp',
    '.mp3', '.mp4', '.wav', '.avi', '.mov', '.wmv', '.flv',
    '.bmp', '.gif', '.jpg', '.jpeg', '.png', '.psd', '.tif', '.tiff', '.ico', '.svg',
    '.jar', '.rar', '.7z', '.gz', '.tar', '.war', '.ear',
    '.pdb', '.class', '.iml', '.nupkg', '.vsix', '.aar',
    '.woff', '.woff2', '.ttf', '.otf', '.eot',
    '.db', '.sqlite', '.mdb', '.lock',
    '.sln', '.csproj', '.vbproj', '.vcxproj', '.fsproj', '.proj',
    '.suo', '.user', '.cache', '.snk', '.pfx', '.p12',
]);

// KEEP IN LOCKSTEP with VS plugin's ScanCache.ExcludeFolders and AS plugin's
// FileCollector.SKIP_DIRS. Case-insensitive check — all entries lowercase.
// NOTE: backup<N> folders are matched by isExcludedFolder() pattern in
// fileService.ts, not by this literal set, so don't add backup4/5/etc here.
export const EXCLUDED_DIRS = new Set([
    '.vs', 'cvs', '.svn', '.hg', '.git', '.bzr', 'bin', 'obj',
    '.idea', '.vscode', 'node_modules', 'packages',
    'dist', 'build', 'out', 'target', '.gradle', '__pycache__',
    '.sasto360', 'testresults', 'test-results', '.nuget',
    '.node_modules', '.pytest_cache', '.next', 'coverage',
]);

/**
 * True if the given single-segment folder name should be skipped.
 * Combines literal-set lookup with a pattern match for backup folders so
 * VS migration's auto-created Backup4/Backup5 (and any future variant)
 * is automatically excluded without updating the literal list. Matches
 * "backup", "backups", or "backup<digits>".
 */
export function isExcludedFolder(name: string): boolean {
    if (!name) return false;
    const lower = name.toLowerCase();
    if (EXCLUDED_DIRS.has(lower)) return true;
    if (lower === 'backup' || lower === 'backups') return true;
    if (lower.startsWith('backup') && lower.length > 6) {
        const tail = lower.substring(6);
        return /^\d+$/.test(tail);
    }
    return false;
}

export const MAX_QUEUE_WAIT_MINUTES = 60;
export const QUEUE_POLL_INTERVAL_SEC = 10;
