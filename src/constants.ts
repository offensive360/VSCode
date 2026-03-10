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

export const EXCLUDED_EXTENSIONS = new Set([
    '.DS_Store', '.ipr', '.iws', '.bak', '.tmp',
    '.aac', '.aif', '.iff', '.m3u', '.mid', '.mp3', '.mpa', '.ra', '.wav', '.wma',
    '.3g2', '.3gp', '.asf', '.asx', '.avi', '.flv', '.mov', '.mp4', '.mpg', '.rm', '.swf', '.vob', '.wmv',
    '.bmp', '.gif', '.jpg', '.jpeg', '.png', '.psd', '.tif', '.tiff', '.ico', '.svg', '.webp',
    '.jar', '.zip', '.rar', '.exe', '.dll', '.pdb', '.7z', '.gz', '.tar', '.war', '.ear',
    '.class', '.iml', '.o', '.so', '.dylib', '.pyc', '.pyo',
    '.woff', '.woff2', '.ttf', '.eot', '.otf',
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    '.sqlite', '.db', '.lock',
]);

export const EXCLUDED_DIRS = new Set([
    'node_modules', '.git', '.svn', '.hg', '.bzr',
    'bin', 'obj', 'out', 'dist', 'build', 'target',
    '.idea', '.vscode', '.vs',
    'backup', '__pycache__', '.cache',
    'vendor', 'packages', 'bower_components',
    'coverage', '.nyc_output',
]);

export const MAX_QUEUE_WAIT_MINUTES = 60;
export const QUEUE_POLL_INTERVAL_SEC = 10;
