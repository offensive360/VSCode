# Offensive360 SAST - VS Code Extension

Scan your source code for security vulnerabilities directly from Visual Studio Code. The Offensive360 SAST extension integrates with your O360 server to provide real-time static analysis, dependency checking, malware detection, and license compliance scanning — all without leaving your editor.

![Offensive360 SAST](resources/logo.png)

## Features

- **Workspace & Folder Scanning** — Scan your entire workspace or individual folders and files with a single command.
- **Git Repository Scanning** — Submit a remote Git repository URL for server-side analysis.
- **Inline Diagnostics** — Vulnerabilities appear as squiggly underlines in the editor with severity-based colors (Critical/High = red, Medium = amber, Low = blue).
- **Sidebar Results Tree** — Browse scan results organized by category: language vulnerabilities, dependency issues, malware detections, and license findings.
- **Click-to-Navigate** — Jump directly to the vulnerable line of code from the results tree.
- **Fix Guidance** — Built-in knowledge base with remediation advice, secure code patterns, and CWE references for common vulnerability types.
- **Quick Fix Actions** — Lightbulb menu integration for viewing fix guidance and opening reference links.
- **Token Expiry Monitoring** — Status bar indicator shows connection state and warns when your API token is about to expire.
- **2FA Support** — Works with O360 servers that have two-factor authentication enabled.

## Supported Languages

For a full list of supported languages, visit [offensive360.com](https://offensive360.com).

## Screenshots

| Sidebar Results | Inline Diagnostics | Fix Guidance Panel |
|---|---|---|
| ![Results Tree](docs/screenshots/sidebar.png) | ![Diagnostics](docs/screenshots/diagnostics.png) | ![Fix Guidance](docs/screenshots/fix-guidance.png) |

## Requirements

- Visual Studio Code 1.74.0 or later
- An active Offensive360 SAST server instance
- A valid API access token (generated from your O360 Dashboard under **Settings > Tokens**)

## Installation

### From the VS Code Marketplace

1. Open VS Code.
2. Go to the Extensions view (`Ctrl+Shift+X`).
3. Search for **Offensive360 SAST**.
4. Click **Install**.

### From a VSIX File

1. Download the latest `.vsix` release from the [Releases](https://github.com/offensive360/VSCode/releases) page.
2. In VS Code, open the Command Palette (`Ctrl+Shift+P`).
3. Run **Extensions: Install from VSIX...** and select the downloaded file.

## Configuration

After installation, configure the extension to connect to your O360 server:

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Run **Offensive360: Configure Settings**.
3. Enter your O360 server URL (e.g., `https://sast.offensive360.com` or `https://your-server.com:1800`).
4. Paste your API access token.

Alternatively, you can set these values in VS Code settings (`settings.json`):

```json
{
  "o360.endpoint": "https://sast.offensive360.com",
  "o360.accessToken": "your-jwt-token-here"
}
```

## Usage

### Scan a Workspace

1. Open a project folder in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P`).
3. Run **Offensive360: Scan Current Workspace**.
4. Wait for the scan to complete — results appear in the Offensive360 sidebar panel and as inline diagnostics.

### Scan a Specific Folder or File

- Right-click a folder or file in the Explorer sidebar.
- Select **Offensive360: Scan Folder...** or **Offensive360: Scan File**.

### Scan a Git Repository

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Run **Offensive360: Scan Git Repository**.
3. Enter the repository URL, project name, and branch.

### View Results

- Click the **Offensive360** shield icon in the Activity Bar to open the results panel.
- Expand categories to browse vulnerabilities by type.
- Click any finding to jump to the affected line in your code.
- Hover over underlined code to see vulnerability details and fix suggestions.

## Extension Commands

| Command | Description |
|---|---|
| `Offensive360: Configure Settings` | Set server URL and API token |
| `Offensive360: Scan Current Workspace` | Scan the open workspace |
| `Offensive360: Scan Folder...` | Scan a specific folder |
| `Offensive360: Scan File` | Scan a single file |
| `Offensive360: Scan Git Repository` | Scan a remote Git repo |
| `Offensive360: View Scan Results` | Open the results panel |

## Troubleshooting

- **"Not Configured" in status bar** — Run `Offensive360: Configure Settings` and enter your server URL and token.
- **"Token Expired" warning** — Ask your O360 administrator to generate a new token from Dashboard > Settings > Tokens.
- **Scan times out** — Large projects may take longer. The extension polls for up to 60 minutes. Check your server logs if scans consistently fail.
- **No results after scan** — Verify the project was uploaded successfully in your O360 dashboard. Check the Output panel (`View > Output > Offensive360 SAST`) for error details.

## License

MIT

## Links

- [Offensive360 Website](https://offensive360.com)
- [Report Issues](https://github.com/offensive360/VSCode/issues)
