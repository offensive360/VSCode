# Changelog

All notable changes to the Offensive360 SAST VS Code extension will be documented in this file.

## [0.3.0] - 2025-03-19

### Added
- Sidebar tree view for browsing scan results by category (language, dependency, malware, license)
- Git repository scanning via URL
- Single file and folder scanning from the Explorer context menu
- Inline diagnostics with severity-based colors and hover details
- Built-in vulnerability knowledge base with fix guidance and secure code patterns
- Quick Fix code actions (lightbulb menu) for viewing remediation advice
- Fix Guidance webview panel with detailed vulnerability descriptions
- JWT token expiry monitoring with status bar warnings
- Support for all scan statuses: Queued, Running, Succeeded, Failed, Partial Failed, Skipped
- Support for all risk levels: Safe, Low, Medium, High, Critical
- Reference link filtering for vulnerability details
- Click-to-navigate from results tree to vulnerable code lines

### Changed
- Complete rewrite of the extension architecture
- Improved error handling with detailed server response messages
- Workspace zip packaging now excludes binary files, build artifacts, and large files (>50MB)

## [0.2.0] - 2025-01-15

### Added
- Initial release with basic workspace scanning
- Server configuration via command palette
- Simple results display
