# Change Log

All notable changes to the O360 SAST extension will be documented in this file.

## [1.0.0] - 2026-03-10

### Added
- Dedicated sidebar panel with vulnerability tree view (grouped by severity, file, and finding)
- Six code actions: Fix Recommendation, Explain Vulnerability, View References, Suppress, Mark as False Positive, Clear All
- Rich WebView detail panel with tabbed UI (Vulnerability Details, How to Fix, References)
- Hover provider showing inline vulnerability summary with action links
- File-level scanning via right-click context menu
- Auto-scan on save (configurable in settings)
- Dependency scanning (SCA) toggle
- License compliance scanning toggle
- Malware detection scanning toggle
- Native VS Code progress notifications with cancellation support
- Status bar indicator showing scan status and finding count
- Output channel for scan logging and debugging
- False positive tracking with reason tags in `.SASTO360/sastIgnore`

### Changed
- Rebranded from "Offensive 360" to "O360 SAST"
- Updated settings namespace from `offensive.*` to `o360.*`
- Upgraded to TypeScript 5, axios 1.6, VS Code engine 1.75+
- Improved progress UX using VS Code native progress API
- Better error messages with quick-link to settings

### Fixed
- Numeric enum mapping from API (riskLevel and status returned as numbers)
- HTML entity decoding in vulnerability descriptions
- Escape sequence handling (`\r\n`) in API response text fields
- Deprecated `new Buffer()` constructor usage

## [0.2.0] - 2023-12-18

- Initial marketplace release
- Basic folder and workspace scanning
- Simple diagnostic display
- Get Help, Suppress, Clear All Errors code actions
