import * as vscode from "vscode";
import { createReadStream } from 'fs';
import * as FormData from 'form-data';
import * as https from 'https';

const axios = require('axios');
const zipdir = require('zip-dir');
const fs = require('fs');

const externalScanEndpoint = "/app/api/ExternalScan";
const queuePosEndpoint = `${externalScanEndpoint}/scanQueuePosition`;

export class SastClient {

   public async scanFolder(folderPath: string, offensive360Diagnostic: any, statusBar: vscode.StatusBarItem, folderPrefix: string) {
      let offensiveConfig = vscode.workspace.getConfiguration('offensive');
      let endpoint = offensiveConfig.get('endpoint') as string;
      endpoint = this.removeTrailingSlash(endpoint);
      let accessToken = offensiveConfig.get('accessToken') as string;

      let isValidated = await this.validateSettings(endpoint, accessToken);

      if (isValidated) {
         this.startProgress(statusBar, `${folderPrefix} scanning is queued`);

         const directoryArray = this.removeTrailingSlash(folderPath)?.split("/");
         let projectName = directoryArray[directoryArray.length - 1].length > 13 ? directoryArray[directoryArray.length - 1].substring(0, 13) : directoryArray[directoryArray.length - 1];
         projectName = `${projectName}_${this.newGuid()}`;
 
         var buffer = await zipdir(folderPath, { filter: this.filter});

         const form = new FormData();
         form.append('name', projectName);
         form.append('keepInvisibleAndDeletePostScan', "True");
         form.append('externalScanSourceType', "VsCodeExtension");
         form.append('fileSource', buffer, { filename: `${projectName}.zip` });

         var scanRequest = this.postSastApi(`${endpoint}${externalScanEndpoint}`, form, offensive360Diagnostic, accessToken, null, folderPath, statusBar);
         
         await this.waitAndShowQueuePositionAsync(projectName, folderPrefix, statusBar);

         this.startProgress(statusBar, `${folderPrefix} scanning is in-progress`);

         await scanRequest;
      }
   }

   public filter(path) {
      return (
         !/.+(\.DS_Store|.ipr|.iws|.bak|.tmp|.aac|.aif|.iff|.m3u|.mid|.mp3|.mpa|.ra|.wav|.wma|.3g2|.3gp|.asf|.asx|.avi|.flv|.mov|.mp4|.mpg|.rm|.swf|.vob|.wmv|.bmp|.gif|.jpg|.png|.psd|.tif|.swf|.jar|.zip|.rar|.exe|.dll|.pdb|.7z|.gz|.tar.gz|.tar|.gz|.ahtm|.ahtml|.fhtml|.hdm|.hdml|.hsql|.ht|.hta|.htc|.htd|.war|.ear|.htmls|.ihtml|.mht|.mhtm|.mhtml|.ssi|.stm|.stml|.ttml|.txn|.xhtm|.xhtml|.class|.iml)$/g.test(path) 
         && 
         !/(\/|\\)(cvs|.svn|.hg|.git|.bzr|bin|obj|backup|.idea|.vscode|node_modules)(\/|\\)(.*)$/gm.test(path)
      );
   };

   private async postSastApi(url: string, formData: any, offensive360Diagnostic: any, accessToken: string, filePath: any, folderPath: any, statusBar: vscode.StatusBarItem) {
      let thisKey = this;
      await axios({
         url: url,
         method: "POST",
         httpsAgent: new https.Agent({ rejectUnauthorized: false }),
         headers: {
            'authorization': `Bearer ${accessToken}`,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'content-type': 'multipart/form-data'
         },
         maxContentLength: Infinity,
         maxBodyLength: Infinity,
         data: formData
      }).then(async function (response: any) {
         let warnings = response?.data?.vulnerabilities;

         if (warnings?.length > 0) {
            await thisKey.showVulnerabilities(warnings, offensive360Diagnostic, filePath, folderPath);
         }
         else {
            vscode.window.showInformationMessage("No Warning Found.");
         }
         thisKey.stopProgress(statusBar);
      }).catch(function (error: any) {
         vscode.window.showErrorMessage(error.message);
         thisKey.stopProgress(statusBar);
      });
   }

   private async getQueuePositionSastApi(queueUrl: string, accessToken: string): Promise<number> {
      var queuePosition = -1;
      await axios({
         url: queueUrl,
         method: "GET",
         httpsAgent: new https.Agent({ rejectUnauthorized: false }),
         headers: {
            'authorization': `Bearer ${accessToken}`
         },
      }).then(function (response: any) {
         queuePosition = response?.data;
      }).catch(function () {
         queuePosition = -2;
      });
      return queuePosition;
   }

   private async waitAndShowQueuePositionAsync(projectName: string, scanMessagePrefix: string, statusBar: vscode.StatusBarItem) {

      let offensiveConfig = vscode.workspace.getConfiguration('offensive');
      let endpoint = offensiveConfig.get('endpoint') as string;
      endpoint = this.removeTrailingSlash(endpoint);
      let accessToken = offensiveConfig.get('accessToken') as string;
      let maxWaitTime = 60 * 60; //60 mins
      let secCountdown = 0;

      var mainThis = this;
      
      do
      {
         await mainThis.sleep(10);

         var queuePosition = await mainThis.getQueuePositionSastApi(`${endpoint}${queuePosEndpoint}?projectName=${projectName}`, accessToken);
         if (queuePosition <= 0) {
            return;
         }
         mainThis.startProgress(statusBar, `${scanMessagePrefix} scanning is yet to start and your queue position is ${queuePosition}`);
      }
      while(secCountdown < maxWaitTime);
   }

   private async validateSettings(endpoint: string, accessToken: string) {
      if (!endpoint || endpoint === "<Replace with SAST API base url>") {
         vscode.window.showErrorMessage("Please setup base url under Offensive 360 settings");
         return false;
      }
      else if (!accessToken || accessToken === "<Replace with SAST API access token starting with ey..>") {
         vscode.window.showErrorMessage("Please setup access token under Offensive 360 settings");
         return false;
      }
      else {
         var queuePosition = await this.getQueuePositionSastApi(`${endpoint}${queuePosEndpoint}`, accessToken);
         if (queuePosition === -2) {
            vscode.window.showErrorMessage("Unable to authorize SAST API with provided access token");
            return false;
         }
      }
      return true;
   }

   public async getSastIgnoreFilePath(): Promise<string>
   {
      let folderPath = `${this.getWorkspaceRootPath()}/.SASTO360`;

      if(!await fs.existsSync(folderPath))
      {
         await fs.mkdirSync(folderPath);
      }

      return `${folderPath}/sastIgnore`;
   }

   public getWorkspaceRootPath()
   {
      if(vscode.workspace.workspaceFolders !== undefined) {
         return vscode.workspace.workspaceFolders[0].uri?.fsPath?.replace(/\\/g, "\/");
      }

      return "";
   }

   public getFileRelativePath(filePath:string)
   {
      return filePath.replace(this.getWorkspaceRootPath(), "").replace(this.removeTrailingSlash(this.getWorkspaceRootPath()), "");
   }

   private async showVulnerabilities(warnings: any, offensive360Diagnostic: any, filePath: string, folderPath: string): Promise<void> {
      warnings = this.toSortWarnings(warnings);
      if (fs.existsSync(await this.getSastIgnoreFilePath())) {
         fs.readFile(await this.getSastIgnoreFilePath(), (err, data) => {
            let existingContent = new Buffer(data).toString('ascii');
            this.populateVulnerabilities(warnings, offensive360Diagnostic, filePath, folderPath, existingContent);
         });
      }
      else{
         this.populateVulnerabilities(warnings, offensive360Diagnostic, filePath, folderPath);
      }
   }

   populateVulnerabilities(warnings: any, offensive360Diagnostic: any, filePath: string, folderPath:string, ignoreSettings?:string) {
      var diagnostics: vscode.Diagnostic[] = [];
      let count = 0;
      warnings.forEach((element: any) => {
         if (count > 0 && warnings[count].filePath !== warnings[count - 1].filePath) {
            diagnostics = [];
         }
         let indexOf = this.getDuplicateIndex(warnings, element);
         
         if (folderPath) {
            filePath = `${this.removeTrailingSlash(folderPath)}/${element.filePath}`;
         }

         if(ignoreSettings !== undefined && ignoreSettings?.length > 0)
         {
            let sastIgnores = ignoreSettings?.split('\n');
            let lineNo = parseInt(element.lineNumber.split(',')[0]) - 1;
            let columnNo = parseInt(element.lineNumber.split(',')[1]) - 1 + indexOf;
            let sastIgnore = sastIgnores?.filter(x => x === `${this.getFileRelativePath(this.removeTrailingSlash(filePath))}__${lineNo}:${columnNo}__${element.title}`);
            if(sastIgnore === undefined || sastIgnore?.length <= 0)
            {
               diagnostics.push(this.populateDiagnostic(element, indexOf));
               offensive360Diagnostic.set(vscode.Uri.file(filePath), diagnostics);
            }
         }
         else{
            diagnostics.push(this.populateDiagnostic(element, indexOf));
            offensive360Diagnostic.set(vscode.Uri.file(filePath), diagnostics);
         }
         count++;
      });

      if(diagnostics.length <= 0)
      {
         vscode.window.showWarningMessage("All the warning(s) got skipped due to an entry in .sastignore file.");
      }
   }

   toSortWarnings(warnings) {
      return warnings.sort((n1, n2) => {
         if (n1.filePath > n2.filePath) {
            return 1;
         }
         if (n1.filePath < n2.filePath) {
            return -1;
         }
         return 0;
      });
   }

   private removeTrailingSlash(str) {
      return str.replace(/^\/|\/$/g, '');
   }

   private populateDiagnostic(vulnerability: any, indexOf: number): any {
      let line = parseInt(vulnerability.lineNumber.split(',')[0]) - 1;
      let column = parseInt(vulnerability.lineNumber.split(',')[1]) - 1 + indexOf;
      const range = new vscode.Range(line, column, line, column);
      let diag = new vscode.Diagnostic(range, (`[${vulnerability.title}] ${vulnerability.vulnerability}`), this.getDiagnosticSeverity(vulnerability.riskLevel));
      diag.code = "";
      diag.source = vulnerability.references?.split('|')[0]?.trim();
      return diag;
   }

   private getDiagnosticSeverity(riskLevel: string): vscode.DiagnosticSeverity {
      switch(riskLevel)
      {
         case "Critical" :
         case "High" :
            return vscode.DiagnosticSeverity.Error;
         case "Medium" :
            return vscode.DiagnosticSeverity.Warning;
         case "Low" :
            return vscode.DiagnosticSeverity.Information;
         default :
            return vscode.DiagnosticSeverity.Error;
      }
   }

   private getDuplicateIndex(warnings: any, element: any): number {
      var duplicateData = warnings.filter(x =>
         x.lineNumber === element.lineNumber &&
         x.filePath === element.filePath);

      if (duplicateData.length > 1) {
         return duplicateData.findIndex(x => x.vulnerability === element.vulnerability);
      }
      return 0;
   }

   private startProgress(myStatusBarItem: vscode.StatusBarItem, message: string) {
      myStatusBarItem.text = message;
      myStatusBarItem.show();
   }

   private stopProgress(myStatusBarItem: vscode.StatusBarItem) {
      myStatusBarItem.hide();
   }

   private sleep(seconds: number) {
      return new Promise(resolve => setTimeout(resolve, seconds * 1000));
   }

   private newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
         var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
         return v.toString(16);
      });
   }
}
//NOTE: httpsAgent: new https.Agent({ rejectUnauthorized: false })
//this will disable client verification as per https://stackoverflow.com/questions/51363855/how-to-configure-axios-to-use-ssl-certificate
//If the service has a public SSL cert, the https.Agent usually does not need to be configured further because your operating system provides a common set of publicly trusted CA certs. 