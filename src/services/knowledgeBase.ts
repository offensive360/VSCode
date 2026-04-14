// AUTO-GENERATED from VulnerabilityInfo.json
// 687 vulnerability entries from O360 SAST offline knowledge base

export interface KBEntry {
    id: string;
    title: string;
    description: string;
    impact: string;
    howToFix: string;
    references: string;
    group: string;
}

const KB_DATA: KBEntry[] = [
    {
        id: `Csrf`,
        title: `Cross Site Request Forgery (CSRF)`,
        description: `Cross-Site Request Forgery (CSRF) is an attack that compels an authorized end-user to do undesirable activities on a web application. An attacker can deceive users of a web application into performing activities of the attacker's choosing with the use of social engineering (such as delivering a link through email or chat). If the target is a regular user, a successful CSRF attack can force the user to conduct state-changing actions such as transferring payments or changing their email address. CSRF can compromise the entire web application if the victim is an administrative account.`,
        impact: `In a successful CSRF attack, the attacker induces the target user to do an accidental action. This might be to update their email address, reset their password, or initiate a money transfer, for example. The attacker may be able to obtain complete control of the user's account depending on the nature of the activity. If the compromised user has a privileged position inside the program, the attacker may be able to gain complete control of all data and functionality.`,
        howToFix: `The most effective technique to prevent CSRF attacks is to include a CSRF token in relevant queries. The token should be as follows:\\r\\n1) Unpredictable with large entropy, which is the case with session tokens in general.\\r\\n2) Connected to the user's session.\\r\\n3) Every case is rigorously evaluated before the required action is carried out.`,
        references: `https://knowledge-base.offensive360.com/CrossSiteRequestForgery%28CSRF%29/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `EmptyCatch`,
        title: `Empty Catch Block`,
        description: `Catch blocks in a Try and Catch statement should contain code to handle the thrown error. The Exception will not be addressed if they are empty or simply include comments. Empty catch blocks indicate that a programmer is unsure what to do with an exception. They are preventing an exception from rising up from the try block.`,
        impact: `Empty catch blocks are considered a business risk since they might cause downtime on the application in case a run-time exception is not handled as the application may crash`,
        howToFix: `Catch blocks should include code to handle any exceptions that are thrown.`,
        references: `https://knowledge-base.offensive360.com/EmptryCatchBlock/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `EmptyTry`,
        title: `Empty Try Block`,
        description: `Empty try blocks either indicate dead code or the existence of debug code.`,
        impact: `A try block that is empty serves no use. In reality, when built to byte code, the empty try block is optimized away and is never included in the final program. An empty try block might indicate that code has been deleted or commented out. Unpredictable behavior results from poor code quality. From the standpoint of the user, this frequently displays as poor usability. It gives a chance for an attacker to stress the system in unanticipated ways.`,
        howToFix: `Empty try block should not be empty or deleted because it offers no functional use.`,
        references: `https://knowledge-base.offensive360.com/EmptyTryBlock/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `HardcodedPassword`,
        title: `Hardcoded Password`,
        description: `Hardcoded Passwords are plain text passwords or other secrets that have been hardcoded into source code. Hardcoding a password is never a smart idea. Not only does hardcoding a password allow all project developers to see the password, but it also makes troubleshooting incredibly tough. The password cannot be changed once the code is in production without updating the program. If the password-protected account is compromised, the system's owners will be forced to choose between security and availability.`,
        impact: `Hardcoded passwords are especially risky since they are obvious targets for password guessing attacks, allowing hackers and malware to hijack firmware. If hard-coded passwords are used, attackers will almost certainly get access to the accounts.`,
        howToFix: `1) Hardcoded passwords should never be stored in source code.\\r\\n2) Make use of password encryption techniques.`,
        references: `https://knowledge-base.offensive360.com/HardcodePassword/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `MissingHttpOnlyCookie`,
        title: `Missing HttpOnly flag on cookies`,
        description: `When a cookie does not contain a HttpOnly flag, it may be accessible through JavaScript, which implies that an XSS could result in cookie theft. These cookies include, but are not limited to, CSRF tokens and client sessions, which can facilitate account/session takeover.`,
        impact: `If an attacker discovers an XSS on a website, they can exploit the flaw to acquire access to user cookies that aren't protected by the HttpOnly setting. This, in turn, may result in account/session takeover.`,
        howToFix: `When the HttpOnly flag is set on a cookie, JavaScript will simply return an empty string when attempting to read it, making it impossible to steal cookies through an XSS.\\r\\nThe flag should be applied to any cookie that you do not need to access in JavaScript.`,
        references: `https://knowledge-base.offensive360.com/InsecureCookieFlag/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `MissingSecureCookie`,
        title: `Missing Secure Cookie flag`,
        description: `A secure flag is an option that the application server can provide when providing a new cookie to the user as part of an HTTP Response. The secure flag's aim is to prevent cookies from being seen by unauthorized parties owing to the cookie's transfer in cleartext. To achieve this, browsers that support the secure flag will only transmit cookies with the secure flag when the request is for an HTTPS page. To put it another way, a cookie with the secure flag set will not be sent via an unencrypted HTTP request. Setting the secure flag prevents the browser from sending a cookie over an unencrypted connection.`,
        impact: `If your browser transfers cookies via unencrypted connections, hackers may be able to intercept your connection and read (or even modify) the contents of your cookies.`,
        howToFix: `The HTTPOnly option prohibits scripts from accessing cookie data. The cookie will only be used in HTTP(S) queries, as the name HTTPOnly indicates.\\r\\nWhen cookies contain sensitive information, you should always set the Secure setting.`,
        references: `https://knowledge-base.offensive360.com/InsecureCookieFlag/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `SMTP_SSL`,
        title: `Insecure JavaMail SSL Configuration`,
        description: `nsecure JavaMail SSL Configuration refers to a situation where the JavaMail API, a popular Java library for sending and receiving emails, is configured with inadequate security settings for its SSL/TLS connections. This could include the use of weak or outdated cryptographic algorithms, protocols, or cipher suites, as well as insecure trust management practices. A poorly configured JavaMail SSL connection can lead to a range of security vulnerabilities, making it easier for attackers to intercept, modify, or spoof email communications.`,
        impact: `Man-in-the-Middle (MITM) attacks: Attackers can intercept and potentially modify email communications between the sender and the recipient, leading to data theft or unauthorized access to sensitive information. \\r\\nEavesdropping: Attackers can passively monitor email traffic to collect sensitive information, such as login credentials, financial information, or personal data.\\r\\nDowngrade attacks: Attackers can force the use of weak cryptographic algorithms or outdated protocols, making it easier to decrypt email content and gain unauthorized access to sensitive information.`,
        howToFix: `Validate SSL certificate when sensitive information is sent in email communications.`,
        references: `https://knowledge-base.offensive360.com/MisconfiguredSMTPSSL/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `UnsafeRunInThisContext`,
        title: `Unsafe runInNewContext`,
        description: `The vm module enables compiling and running code within V8 Virtual Machine contexts. The vm module is not a security mechanism. Do not use it to run untrusted code.`,
        impact: `The first danger is a Denial of Service attack on your application. Because nodejs is single-threaded and relies on the Event loop, it is simple to take the program offline by blocking the event loop with heavy or infinite operations. The VM module isolates the context of newly called code from the context of the original application code. Providing a sandbox to run the code in a semi-isolated setting. However, it can readily avoided.`,
        howToFix: `The recommendition here is never use the “VM” nodejs module to run untrusted data.`,
        references: `https://knowledge-base.offensive360.com/UnsaferunInContext/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `UnsafeBufferAllocation`,
        title: `Unsafe buffer allocation`,
        description: `an attacker can cause an application to receive a number where a string is expected, the application may call new Buffer(100) instead of new Buffer("100"), it will allocate a 100 byte buffer instead of allocating a 3 byte buffer with content "100". This is commonly possible using JSON API calls. Since JSON distinguishes between numeric and string types, it allows injection of numbers where a naive application might expect to always receive a string. Before Node.js 8.0.0, the 100 byte buffer might contain arbitrary pre-existing in-memory data, so may be used to expose in-memory secrets to a remote attacker`,
        impact: `The first danger is a Denial of Service attack on your application. Because nodejs is single-threaded and relies on the Event loop, it is simple to take the program offline by blocking the event loop with heavy or infinite operations. The VM module isolates the context of newly called code from the context of the original application code. Providing a sandbox to run the code in a semi-isolated setting. However, it can readily avoided.`,
        howToFix: `Don't use allocUnsafe use alloc instead.`,
        references: `https://knowledge-base.offensive360.com/UnsafeBufferAllocation/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ArchiveFiles`,
        title: `Unsafe archive method`,
        description: `Zip files can be malicious files that exploit a characteristic of the zip compressor to crash a system that processes it.`,
        impact: `A successful attack of misconfigured archiving may lead to remote code execution or denial of service`,
        howToFix: `Define and control the threshold for maximum total size and number of the uncompressed data.`,
        references: `https://portswigger.net/daily-swig/node-js-archives-serious-tar-handling-vulnerabilities-with-software-update \\n https://www.bamsoftware.com/hacks/zipbomb/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `InsecureRandom`,
        title: `Insecure Randomness`,
        description: `When a function that can provide predictable values is utilized as a source of randomness in a security-sensitive situation, insecure randomness mistakes arise. Standard pseudo-random number generators are vulnerable to cryptographic attacks.`,
        impact: `Using a cryptographically weak pseudo-random number generator to create a security-sensitive value, such as a password, allows an attacker to anticipate the result more easily.`,
        howToFix: `Use a well-vetted method that experts in the area currently regard to be strong and select well-tested implementations with suitable length seeds.`,
        references: `https://knowledge-base.offensive360.com/InsecureRandomness/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `LdapInjection`,
        title: `LDAP Injection`,
        description: `LDAP Injection is a type of attack that targets web-based applications that generate LDAP statements depending on user input. When an application fails to correctly sanitize user input, LDAP statements can be modified via a local proxy.`,
        impact: `This might lead to the execution of arbitrary actions, such as giving rights to illegal searches and modifying items inside the LDAP tree. The same complex exploitation techniques that are accessible in SQL Injection may also be used in LDAP Injection.`,
        howToFix: `Using the appropriate LDAP encoding function, escape all variables.\\r\\nEvery user input that may be utilized in LDAP queries should be sanitized according to application standards and encoded to guarantee that any leftover LDAP special characters, including at least ()! | & *, are properly escaped.\\r\\nFor optimal security and ease, a suitable framework or library for escaping special characters and constructing LDAP filters should be utilized.`,
        references: `https://knowledge-base.offensive360.com/LDAPInjection/`,
        group: `Injection`,
    },
    {
        id: `OpenRedirect`,
        title: `Open Redirect`,
        description: `When an application combines user-controllable data into the target of a redirection in an unsafe manner, an open redirection vulnerability occurs. Within the program, an attacker can create a URL that redirects to an arbitrary external website. This behavior can be used to aid phishing attacks against application users.`,
        impact: `The consequences can be wide-ranging, ranging from data theft and credential theft to redirection to malicious websites with attacker-controlled content, which can result in XSS attacks in some circumstances. So, while an open redirection may appear to be harmless at first, if it is exploitable, the consequences can be serious.`,
        howToFix: `By inspecting the URL supplied to the redirect method, you may avoid redirects to other domains.\\r\\nEnsure that all redirect URLs are relative routes, meaning that they begin with a single / character.`,
        references: `https://knowledge-base.offensive360.com/OpenRedirect/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `SqlInjection`,
        title: `SQL Injection`,
        description: `SQL injection is when malicious code is injected into SQL statements via web page input. It is one of the most often used web hacking methods. When you ask a user for information, such as their username/userid, and instead of a name/id, the user provides you with a SQL statement that you inadvertently run on your database, SQL injection happens.`,
        impact: `A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), perform database administration operations (such as shutting down the DBMS), recover the content of a given file on the DBMS file system, and, in some cases, issue commands to the operating system. SQL injection attacks are injection attacks in which SQL commands are inserted into  input to cause predetermined SQL instructions to be executed.`,
        howToFix: `One classic technique to combating SQL injection attacks is to treat them like an input validation problem, accepting only characters from an allowed list of safe values or identifying and escaping potentially dangerous data from a deny list.\\r\\nAn allow list may be a powerful tool for implementing tight input validation requirements, but parameterized SQL statements are easier to maintain and provide additional security assurances, the most common way to prevent SQL injection attacks is to use prepared statements.`,
        references: `https://knowledge-base.offensive360.com/SQLInjection/`,
        group: `Injection`,
    },
    {
        id: `WeakHashingConfig`,
        title: `Weak Hashing Configuration`,
        description: `Weak cryptographic hashes cannot ensure data integrity and should not be utilized in security-critical situations. MD2, MD4, MD5, RIPEMD-160, and SHA-1 are common cryptographic hash algorithms that are frequently used to validate communications and other data. However, due to recent cryptanalysis research revealing fundamental flaws in these algorithms, they should no longer be utilized in security-critical scenarios.`,
        impact: `Incorrect encryption algorithm use can expose sensitive data, lead to key leakage, broken authentication, insecure sessions, and spoofing attacks.`,
        howToFix: `Weak hash/encryption algorithms such as MD5, RC4, DES, Blowfish, and SHA1 should not be utilized.\\r\\nThe IV (Initialization Vector) must be random and unexpected when using AES128 or AES256.\\r\\nSSH and CBC mode should not be utilized.\\r\\nWhen using a symmetric encryption technique, the ECB (Electronic Code Book) mode should be avoided.`,
        references: `https://knowledge-base.offensive360.com/WeakHashingConfiguration/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `WeakPasswordConfig`,
        title: `Weak Password Configuration`,
        description: `A weak password is one that is short, common, a system default, or anything that can be quickly guessed by performing a brute force attack on a subset of all possible passwords, such as dictionary terms, proper names, words based on the user name, or popular variants on these themes.`,
        impact: `Weak passwords are always a big factor in any breach. Weak passwords can be guessable, or an attacker can bruteforce them if the password length is very short. Weak passwords are readily broken because hackers may employ a dictionary attack, which just uploads your username and password with terms from the common dictionary.`,
        howToFix: `There are two techniques to reduce the risk of readily passwords allowing unwanted access:\\r\\n1) Implement extra authentication measures (for example, two-factor authentication) or a strong password policy.\\r\\n2) The most basic and least expensive of these is the implementation of a strong password policy that assures password length, complexity, reuse, and aging; although, ideally, both should be done.`,
        references: `https://knowledge-base.offensive360.com/WeakPasswordConfiguration/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `Xpath`,
        title: `Xpath Injection`,
        description: `XPath Injection attacks, like SQL Injection, occur when a website leverages user-supplied information to generate an XPath query for XML data. XPath injection is a sort of attack in which a malicious input can grant unauthorised access to or expose sensitive information such as the structure and content of an XML document. It happens when the query string is built using the user's input.`,
        impact: `An attacker can learn how the XML data is formatted or gain access to data that they would not ordinarily have by delivering purposely incorrect information into the application. If the XML data is utilized for authentication, they may even be able to elevate their privileges on the application (such as an XML based user file).`,
        howToFix: `You must utilize a parameterized XPath interface if one is available, or escape the user input to make it safe to use in a dynamically created query, just as you would for SQL injection.\\r\\nIf you use quotes to terminate untrusted input in a dynamically built XPath query, you must escape that quote in the untrusted input to prevent the untrusted data from attempting to escape the quoted context.`,
        references: `https://knowledge-base.offensive360.com/XPathInjection/`,
        group: `Injection`,
    },
    {
        id: `py_exec_used`,
        title: `Use of exec method`,
        description: `The Python exec() function allows for the dynamic execution of Python programs supplied as either a string or a code object. As a built-in method, exec() facilitates the operation of programs written on-the-fly, accepting input in the form of a string or code object.`,
        impact: `In case of exploitation of the exec method, it may lead to command injection and remote code execution on the operating system.`,
        howToFix: `Check if you really need to use this method within your codebase as it's risky even if the arguments are not supplied from the user input.`,
        references: `https://knowledge-base.offensive360.com/CommandInjection`,
        group: `Injection`,
    },
    {
        id: `py_jinja2_autoescape_false`,
        title: `Jinja2 disabled autoescape`,
        description: `In Jinja2, a popular Python templating library, autoescaping is a feature that automatically escapes HTML characters to prevent Cross-Site Scripting (XSS) attacks. When autoescaping is disabled, Jinja2 renders templates without escaping potentially harmful characters.`,
        impact: `Disabling autoescaping in Jinja2 can introduce security vulnerabilities, such as XSS attacks. Attackers can exploit these vulnerabilities by injecting malicious scripts into web pages, potentially compromising user data and the application.`,
        howToFix: `To mitigate security risks associated with disabling autoescaping in Jinja2, always enable autoescaping by setting the autoescape parameter to True when creating an environment.`,
        references: `https://jinja.palletsprojects.com/en/latest/templates/#html-escaping`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `py_django_mark_safe_xxs`,
        title: `XSS in mark safe function`,
        description: `In Django, a popular Python web framework, the mark_safe() function is used to mark a string as safe for rendering as HTML. This bypasses the automatic HTML escaping, which helps prevent Cross-Site Scripting (XSS) attacks.`,
        impact: `Using mark_safe() improperly can lead to XSS vulnerabilities, as it allows potentially harmful HTML characters to be rendered without escaping. Attackers can exploit these vulnerabilities by injecting malicious scripts into web pages, compromising user data and the application.`,
        howToFix: `To mitigate security risks associated with the misuse of mark_safe(), use it judiciously and only on trusted input. Always validate and sanitize user input before marking it as safe. Consider using Django's built-in template tags and filters, such as escape and safe, to control HTML escaping explicitly.`,
        references: `https://docs.djangoproject.com/en/stable/topics/security/#cross-site-scripting-xss-protection`,
        group: `Injection`,
    },
    {
        id: `py_eval_used`,
        title: `Use of eval method`,
        description: `The eval() method in Python evaluates and executes a string as a Python expression, often used for dynamic code execution.`,
        impact: `Using eval() can lead to security vulnerabilities, as it may execute arbitrary code when provided with a malicious input, potentially compromising the application or system.`,
        howToFix: `Check if you really need to use this method within your codebase as it's risky even if the arguments are not supplied from the user input.`,
        references: `https://knowledge-base.offensive360.com/CommandInjection`,
        group: `Injection`,
    },
    {
        id: `py_flask_debugging_enabled`,
        title: `Flask debugging enabled`,
        description: `Executing Flask applications in debug mode activates the Werkzeug debugger, which incorporates a functionality that permits arbitrary code execution. Both Flask and Werkzeug  documentation emphatically advise against enabling debug mode on production systems.`,
        impact: `The primary security concern of enabling debug mode in Flask applications is that it exposes sensitive information and permits unauthorized code execution. Attackers can exploit this vulnerability to compromise the application and potentially gain access to the underlying system.`,
        howToFix: `To secure Flask applications, it is crucial to disable debug mode in production environments. Ensure that the debug parameter is set to False when running the application.`,
        references: `https://werkzeug.palletsprojects.com/en/1.0.x/debug/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `py_request_without_timeout`,
        title: `Misconfigured request without timeout`,
        description: `In Python, a request without a timeout refers to a network request made without specifying a time limit for the response. This could cause the request to hang indefinitely, awaiting a server response. Such requests can lead to resource consumption and potential application unresponsiveness.`,
        impact: `A request without a timeout can lead to Denial of Service (DoS) attacks, as it leaves the application vulnerable to slow or unresponsive servers. An attacker can exploit this vulnerability by intentionally delaying the server response or sending requests to a server that will never respond, causing the application to hang and consume resources.`,
        howToFix: `To mitigate the security risks associated with request without timeout, it is essential to implement a reasonable timeout value when making requests. This ensures that the application does not hang indefinitely and can free up resources after a specified duration. You can set a timeout value in Python's requests library by using the timeout parameter.`,
        references: `https://requests.readthedocs.io/en/latest/user/advanced/#timeouts`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `XXE`,
        title: `XML External Entity (XXE) Processing`,
        description: `An XML External Entity attack is a sort of attack against an application that parses XML input. This attack happens when an XML parser with a poorly set configuration processes XML input containing a reference to an external object. Some apps utilize the XML format to send data between the browser and the server. Applications that accomplish this almost always utilize a standard library or platform API to parse the XML data on the server. XXE vulnerabilities emerge because the XML specification provides a number of potentially harmful features, and standard parsers support these features even if they are not commonly utilized by the application.`,
        impact: `This attack may result in the leaking of private data, denial of service, server-side request forgery, port scanning from the perspective of the machine where the parser is situated, and other system consequences. Using file: schemes or relative paths in the system identifier, attackers can reveal local files that may contain sensitive data such as passwords or secret user data. Because the attack happens relative to the application processing the XML document, an attacker may utilize this trusted application to pivot to other internal systems, potentially releasing further internal content via http(s) requests or initiating a CSRF attack against any vulnerable internal services.`,
        howToFix: `Almost all XXE vulnerabilities originate as a result of the application's XML parsing library supporting potentially harmful XML features that the program does not require or intends to utilize. Disabling such functionalities is the simplest and most efficient technique to avoid XXE attacks.\\r\\nIn general, disabling external entity resolution and XInclude support is sufficient. This is normally accomplished using configuration settings or by altering default behavior programmatically. For further information on how to deactivate superfluous features, consult the documentation for your XML parsing library or API.`,
        references: `https://knowledge-base.offensive360.com/XXEInjection/`,
        group: `Injection`,
    },
    {
        id: `PyXXE`,
        title: `XML External Entity (XXE) using bad elements`,
        description: `In Python, SAX, MiniDOM, Pulldom, and ElementTree (etree) are XML parsing libraries. These libraries can potentially be exposed to XML security vulnerabilities when handling malicious XML content, such as XML External Entity (XXE) attacks or XML bomb attacks.`,
        impact: `Exploiting these vulnerabilities can lead to information disclosure, denial of service (DoS) attacks, or unauthorized access to the underlying system.`,
        howToFix: `To mitigate the security risks associated with XML parsing use defusedxml lib instead.`,
        references: `https://docs.python.org/3/library/xml.html#xml-vulnerabilities`,
        group: `Injection`,
    },
    {
        id: `AUTO_ESCAPE`,
        title: `Disabled AUTO ESCAPE`,
        description: `Auto escape allows the developers to escape malicious content when the user/attacker tries to execute or submit embedded commands to the application from the user input area`,
        impact: `Disabling auto escaping, allows attackers to inject malicious source into your application, such as XSS or it can be commands on the system if there is uncontrolled user input area`,
        howToFix: `Enable auto-escaping by default`,
        references: `https://knowledge-base.offensive360.com/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `AWS_LONG_TERM_ACCESS_KEY`,
        title: `AWS LONG TERM ACCESS KEY`,
        description: `AWS Long-Term Access Keys are static access keys associated with an AWS Identity and Access Management (IAM) user or the AWS account root user. These access keys consist of an Access Key ID and a Secret Access Key, which are used to programmatically access AWS services via APIs, SDKs, or CLI. The long-term access keys are not rotated automatically and can potentially provide access to resources indefinitely if not properly managed, posing a significant security risk.`,
        impact: `The improper management of AWS Long-Term Access Keys can lead to several security risks, including:\\r\\nUnauthorized access: Attackers gaining access to long-term access keys can potentially gain unauthorized access to AWS resources, leading to data theft, service disruption, or financial loss.\\r\\nIncreased attack surface: Long-term access keys that are not rotated regularly can be more easily compromised over time, increasing the risk of a security breach.\\r\\nCredential leakage: Long-term access keys embedded in source code, configuration files, or environment variables can be inadvertently exposed, making it easier for attackers to obtain them.`,
        howToFix: `To minimize the security risks associated with AWS Long-Term Access Keys, consider the following recommendations:\\r\\nUse IAM roles: Instead of using long-term access keys, use IAM roles with temporary security credentials for applications running on Amazon EC2 instances, AWS Lambda functions, or other AWS services. This allows for automatic rotation of credentials and reduces the risk of key exposure.\\r\\nRotate access keys regularly: Implement a process to regularly rotate long-term access keys to minimize the risk of compromise. AWS recommends rotating access keys every 90 days\\r\\nEnable AWS Security Token Service (STS): Use AWS STS to generate temporary security credentials with limited permissions and shorter life spans, reducing the risk associated with long-term access keys\\r\\nLimit access permissions: Apply the principle of least privilege by granting only the necessary permissions to IAM users and roles. Regularly review and update access permissions to maintain a secure environment.\\r\\nUse AWS Secrets Manager: Store and manage access keys using AWS Secrets Manager to automate key rotation and reduce the risk of key exposure\\r\\nMonitor and audit: Regularly review and monitor the usage of AWS access keys, leveraging AWS CloudTrail and Amazon GuardDuty for detecting suspicious activity. Implement alerts and notifications to stay informed about potential security issues.`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#rotate-credentials`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `WEB_VIEW_JS_ENABLED`,
        title: `WEB VIEW JS ENABLED`,
        description: `WebView is a component in Android and iOS that allows applications to display web content within the app itself. When WebView has JavaScript enabled, it allows the execution of JavaScript code within the WebView component. While this provides greater flexibility and functionality, it can also introduce security vulnerabilities if not properly managed or controlled.`,
        impact: `Enabling JavaScript execution in WebView can lead to several security risks, including:\\r\\nCross-Site Scripting (XSS) attacks: Attackers can inject malicious JavaScript code into WebView, potentially stealing sensitive information, manipulating the web content, or performing actions on behalf of the user.\\r\\nJavaScript Interface Vulnerabilities: Exposing native app functionality to JavaScript can lead to insecure communication between WebView and the native app, allowing attackers to exploit the exposed interfaces and compromise the app or device.\\r\\nPrivacy breaches: Enabling JavaScript can potentially allow third-party tracking or analytics scripts to collect user data without consent, leading to privacy concerns.\\r\\nInjection of malicious content: Attackers can load malicious web content into WebView, leading to phishing attacks or the execution of malicious code.`,
        howToFix: `To mitigate the security risks associated with WebView and JavaScript execution, consider the following recommendations:\\r\\nEvaluate the necessity of JavaScript: Only enable JavaScript in WebView if it is absolutely necessary for your app's functionality. If possible, use alternative methods or limit the use of JavaScript.\\r\\nUse Content Security Policy (CSP): Implement CSP to control the sources of content that can be loaded into WebView, reducing the risk of XSS attacks and malicious content injection.\\r\\nLimit JavaScript interfaces: If you need to expose native app functionality to JavaScript, limit the exposed interfaces to the minimum required functionality, and ensure proper input validation and output encoding.\\r\\nUse secure communication: For Android, use the @JavascriptInterface annotation to ensure secure communication between WebView and the native app. For iOS, use the WKScriptMessageHandler protocol with WKWebView to establish secure communication.\\r\\nValidate and sanitize input: Ensure all user input and data passed between WebView and the native app are properly validated and sanitized to prevent injection attacks.\\r\\nKeep WebView up-to-date: Regularly update WebView to the latest version to benefit from security patches and improvements.`,
        references: `https://developer.android.com/reference/android/webkit/WebView#security`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `USER_ENUMERATION`,
        title: `USER ENUMERATION`,
        description: `User enumeration is a security vulnerability that allows an attacker to gather a list of valid usernames or user IDs associated with a system, application, or website. This is typically achieved by exploiting insecure error messages, brute-force attacks, or other techniques that reveal information about user accounts. The gathered information can then be used by the attacker to perform targeted attacks, such as credential stuffing, spear-phishing, or social engineering.`,
        impact: `User enumeration can lead to several security risks, including:\\r\\nTargeted attacks: With a list of valid usernames, attackers can perform targeted attacks on specific users, increasing the likelihood of a successful breach.\\r\\nCredential stuffing: User enumeration can enable attackers to conduct credential stuffing attacks by using known usernames along with commonly used or previously leaked passwords.\\r\\nSocial engineering: Armed with valid usernames, attackers can craft convincing phishing emails, messages, or calls to manipulate users into revealing sensitive information or performing malicious actions.\\r\\nBrute-force attacks: Knowing valid usernames allows attackers to focus their brute-force attacks more effectively, potentially gaining unauthorized access to user accounts.`,
        howToFix: `To mitigate the security risks associated with user enumeration, consider the following recommendations:\\r\\nGeneric error messages: Use consistent, generic error messages for authentication failures, password resets, or any other user-related actions to prevent revealing information about the existence of user accounts.\\r\\nRate limiting: Implement rate limiting for login attempts, password reset requests, and any user-related actions to slow down automated attacks and reduce the risk of user enumeration.\\r\\nCAPTCHA: Employ CAPTCHA or other user interaction challenges to differentiate between human users and automated bots, making it more difficult for attackers to perform user enumeration.\\r\\nAccount lockouts: Implement account lockouts after a defined number of failed login attempts to discourage brute-force attacks. However, be cautious about the lockout duration and thresholds to avoid denial-of-service (DoS) situations for legitimate users.`,
        references: `https://www.baeldung.com/spring-security-basic-authentication`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `MachineKeyClearText`,
        title: `Machine Key Cleartext`,
        description: `The application saves sensitive data in cleartext within a resource that could be accessed by another control sphere.`,
        impact: `Because the data is stored in cleartext, attackers may be able to read it. Even if the information is encoded in a non-human-readable format, certain approaches may be able to establish which encoding is being used and then decode the information. This has been the most prevalent and damaging attack in recent years. The most common problem is that sensitive data is not encrypted.`,
        howToFix: `The user's username and password should not be stored in plaintext in a cookie on the user's workstation.\\r\\nBefore writing to a buffer, the software should encrypt the data.\\r\\nUsername and password information should not be placed in plaintext in a configuration or properties file, as this will give anyone who can read the file access to the resource.`,
        references: `https://knowledge-base.offensive360.com/CleartextMachineKey/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `WeakSymmetricAlgorithm`,
        title: `Weak Symmetric Algorithm`,
        description: `Using a defective or unsafe cryptographic algorithm is an unnecessary risk that might expose sensitive information. The adoption of a non-standard algorithm is risky because a determined attacker may be able to break the algorithm and jeopardize the data being secured. There may be well-known strategies for breaking the algorithm.`,
        impact: `The deployment of a faulty or hazardous cryptographic algorithm may jeopardize the secrecy and integrity of sensitive data. Any accountability to communication content protected by cryptography could be compromised.`,
        howToFix: `Use a cryptographic algorithm, such as AES 256, that is currently regarded as strong by specialists in the area.`,
        references: `https://knowledge-base.offensive360.com/WeakSymmetricAlgorithm/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `WEAK_SSL`,
        title: `Weak SSL configuration`,
        description: `Cipher deprecation and/or obsolescence is of perennial concern as it opens the door to malicious actors with the available tools and know-how.`,
        impact: `Successful brute-forcing of weak ciphers can result in a malicious actor decrypting data containing sensitive information, potentially leading to a complete compromise of confidentiality and integrity. The extent of damage is really only limited to the value of compromised data and the imagination of the attacker.`,
        howToFix: `Preventing attacks on weak ciphers can be greatly diminished primarily by not using weak ciphers! There is, of course, a bit more to it than that in terms of implementation and correct configuration, but ensuring adherence to up-to-date standards is the best way to mitigate exploitation.`,
        references: `https://knowledge-base.secureflag.com/vulnerabilities/broken_cryptography/weak_cipher_vulnerability.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `WeakCipherModePadding`,
        title: `Weak Cipher Mode`,
        description: `A weak cipher is an encryption/decryption technique that employs an insufficiently long key. Using a key of an inadequate length in an encryption/decryption technique increases the potential (or likelihood) that the encryption system will be broken (i.e. cracked). The stronger the encryption, the greater the key size. Weak ciphers are encryption/decryption methods that employ key sizes that are fewer than 128 bits (i.e., 16 bytes... 8 bits in a byte).`,
        impact: `A weak cipher is an encryption mechanism that a malicious attacker may break. This is sometimes due to the tiny size of the keys, allowing a fast computer to just attempt every conceivable key until it finds the correct one. Cipher suites such as DES are examples of this. In today's context, a key is considered unsafe if it is less than 112 bits long.`,
        howToFix: `A strong encryption/decryption algorithm with a longer key, such as AES, must be utilized.`,
        references: `https://knowledge-base.offensive360.com/WeakCipherMode/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `InsecureDeserialization`,
        title: `Insecure Deserialization`,
        description: `When an application deserializes user-controllable data, this is known as insecure deserialization. This might allow an attacker to modify serialized objects to inject malicious data into the application's code. It is even feasible to replace a serialized object with one of a completely different class. Surprisingly, regardless of whatever class was expected, objects of any class that is exposed to the application will be deserialized and created. As a result, unsafe deserialization is frequently referred to as an \\&quot;object injection\\&quot; vulnerability.`,
        impact: `An exception may be thrown if an object of an unexpected class is used. However, the harm may have already been done by this point. Many deserialization-based attacks are accomplished before the deserialization process is complete. This implies that even if the application's own functionality does not directly interact with the malicious item, the deserialization process might start an attack. As a result, applications whose logic is based on highly typed languages may be vulnerable to these tactics as well. Because it gives an access point to a vastly enlarged attack surface, unsecured deserialization can have a devastating impact. It enables an attacker to repurpose existing application code in malicious ways, resulting in a slew of additional flaws, including remote code execution. Even in the absence of remote code execution, unsafe deserialization can result in privilege escalation, unauthorized file access, and denial-of-service attacks.`,
        howToFix: `The only safe architectural approach is to avoid accepting serialized objects from unknown sources or using serialization classes that only support basic data types. If it isn't an option, consider one or more of the following:\\r\\nIntegrity checks, such as digital signatures, should be used on all serialized objects to avoid hostile object creation or data manipulation.\\r\\nAs the code normally expects a specified set of classes, strong type restrictions are enforced during deserialization before object creation. Because bypasses to this strategy have been established, relying completely on it is not recommended.\\r\\nWhen feasible, isolate and execute code that deserializes in low privilege settings.\\r\\nDeserialization exceptions and failures, such as when the incoming type is not the intended type or the deserialization produces exceptions, should be logged.\\r\\nRestricting or monitoring incoming and outgoing network connectivity from deserializing containers or servers.\\r\\nDeserialization is being monitored, and an alert is being issued if a user deserializes on a regular basis.`,
        references: `https://knowledge-base.offensive360.com/InsecureDeserialization/`,
        group: `Injection`,
    },
    {
        id: `CommandInjection`,
        title: `Command Injection`,
        description: `The purpose of a command injection attack is to execute arbitrary instructions on the host operating system via a susceptible application. When an application sends dangerous user-supplied data (forms, cookies, HTTP headers, etc.) to a system shell, command injection attacks are conceivable. In this attack, the attacker-supplied operating system instructions are often performed with the susceptible application's privileges. Inadequate input validation makes command injection attacks viable.`,
        impact: `This flaw allows an attacker to execute arbitrary operating system (OS) instructions on a server that is executing an application, often compromising the program and all of its data. An attacker can frequently use an operating system command injection vulnerability to compromise other portions of the hosting infrastructure, leveraging trust connections to pivot the assault to other systems inside the company.`,
        howToFix: `The most effective technique to avoid OS command injection vulnerabilities is to never use application-layer code to call out to OS commands. In almost every scenario, there are safer platform APIs that can be used to achieve the desired functionality. If it is determined that calling out to OS commands with user-supplied input is inevitable, then robust input validation must be applied. Here are some instances of successful validation: Validation against a whitelist of acceptable values. Ensures that the input is a number. Ensures that the input only contains alphanumeric characters and no other syntax or whitespace. Attempting to sanitize input by escaping shell metacharacters is never a good idea. In fact, this is far too error-prone and easily circumvented by a smart attacker.`,
        references: `https://knowledge-base.offensive360.com/CommandInjection/`,
        group: `Injection`,
    },
    {
        id: `NoEval`,
        title: `Code Injection using Eval method`,
        description: `This method evaluates a string of characters as code`,
        impact: `This attack is comprised of a script that fails to check user inputs in the page parameter. A remote user can give a carefully designed URL that allows arbitrary code to be sent to an eval() instruction, resulting in code execution.`,
        howToFix: `Make use of structured procedures. These systems can ensure the separation of data and command automatically.\\r\\nValidate the values of commands and their associated parameters.`,
        references: `https://knowledge-base.offensive360.com/CodeInjectionUsingEvalMethod/`,
        group: `Injection`,
    },
    {
        id: `NoDocumentDomain`,
        title: `Use of document.domain method`,
        description: `When data is copied from a request and echoed into the application's immediate response within a section of the DOM, it is subsequently handled in an unsafe manner by a client-side script. An attacker can utilize reflection to manipulate a portion of the response (for example, a JavaScript string) that can then be used to exploit the DOM-based vulnerability.`,
        impact: `Document domain manipulation occurs when a script sets the document.domain attribute using controlled data. An attacker might use the flaw to create a URL that, when visited by another application user, causes the response page to set an arbitrary document.domain value.`,
        howToFix: `The best strategy to avoid DOM-based document domain manipulation vulnerabilities is to avoid dynamically setting the document.domain attribute with data from any untrusted source. If the document.domain attribute must be set programmatically from client-side code, the application should use a specified list of allowed values and assign only from that list.`,
        references: `https://knowledge-base.offensive360.com/UseOfDocument.domain/`,
        group: `Injection`,
    },
    {
        id: `NoDocumentWrite`,
        title: `Use of document.write`,
        description: `Calls to document.write or document.writeln manipulate DOM directly without any sanitization and should be avoided.`,
        impact: `Untrusted data into the output without encoding it correctly opens the door for reflected XSS attacks. Use document.write to insert plain HTML into the DOM opens the door for DOM XSS attacks.`,
        howToFix: `Calls to document.write or document.writeln manipulates DOM directly without any sanitization and should be avoided. Use document.createElement() or similar methods instead.`,
        references: `https://knowledge-base.offensive360.com/UseOfDocument.write/`,
        group: `Injection`,
    },
    {
        id: `NoHtmlMethod`,
        title: `Use of Html method`,
        description: `Direct calls to method \`html()\` often (e.g. in jQuery framework) manipulate DOM without any sanitization and should be avoided. Use document.createElement() or similar methods instead.`,
        impact: `It gives an attacker the ability to change the page and steal someone else's identity. When the attacker identifies an injection vulnerability, he or she decides to launch an HTML injection attack. Attacker creates malicious links with his inserted HTML content and distributes them to a victim through email. Visitor views the website because it is placed within a trusted domain. The injected HTML from the attacker is rendered and given to the user, who is then prompted for a login and password. The user provides a username and password, both of which are forwarded to the attacker's server.`,
        howToFix: `Do not write to DOM directly using jQuery html() method.`,
        references: `https://knowledge-base.offensive360.com/HTMLInjection/`,
        group: `Injection`,
    },
    {
        id: `NoMsappExecUnsafe`,
        title: `Use of MSApp.execUnsafeLocalFunction()`,
        description: `Calls to MSApp.execUnsafeLocalFunction() bypass script injection validation and should be avoided.`,
        impact: `Calling this function can lead to serious security concerns such as HTML and script injection issues.`,
        howToFix: `Use document.createElement() or similar methods instead.`,
        references: `https://knowledge-base.offensive360.com/HTMLInjection/`,
        group: `Injection`,
    },
    {
        id: `NoPostmessageStarOrigin`,
        title: `Insecure Use of Wildcard (*) in postMessage Origin`,
        description: `Always provide specific target origin, not * when sending data to other windows using postMessage to avoid data leakage outside of trust boundary.`,
        impact: `Calling this function can lead to serious security concerns such as HTML and script injection issues.`,
        howToFix: `Do not use * as target origin when sending data to other windows (postmessage-star-origin)`,
        references: `https://knowledge-base.offensive360.com/HTMLInjection/`,
        group: `Injection`,
    },
    {
        id: `NoWinJSHtmlUnsafe`,
        title: `Use of unsafe Html`,
        description: `Incorrect usage of innerHTML can expose you to a cross-site scripting (XSS) attack. Sanitizing user input for display is famously error-prone, and failure to properly sanitize is one of the major sources of internet web vulnerabilities.`,
        impact: `If the function is not described as harmful or dangerous, a client may mistakenly utilize inputs that include unsafe HTML fragments, making the client vulnerable to cross-site scripting attacks.`,
        howToFix: `All library functions that might lead to cross-site scripting attacks should be documented, and dangerous inputs should be avoided when dynamic HTML generation is not needed.`,
        references: `https://knowledge-base.offensive360.com/UseOfUnsafeHTML/`,
        group: `Injection`,
    },
    {
        id: `DangerouslySetInnerHTML`,
        title: `Use of Unsafe InnerHTML`,
        description: `Using DangerouslySetInnerHTML allows the injection of certain HTML tags and execute malicious javascript code.`,
        impact: `The usage of innerHTML poses a security risk to your website. Malicious users can upload malicious client-side scripts that steal confidential user information contained in session cookies via cross-site scripting (XSS).`,
        howToFix: `innerText is one such attribute that is deemed to be secure. Some publications or recommendations recommend it as an alternative to innerHTML for mitigating XSS in innerHTML. Code, on the other hand, can be run based on the tag to which innerText is attached.`,
        references: `https://knowledge-base.offensive360.com/UseOfUnsafeInnerHTML/`,
        group: `Injection`,
    },
    {
        id: `ReactIframeMissingSandbox`,
        title: `Iframe Missing Sandbox`,
        description: `Iframe element is missing a sandbox attribute or defines a sandbox attribute with invalid value or defines a sandbox attribute with both allow-scripts and allow-same-origin which is invalid`,
        impact: `You should avoid using both allow-scripts and allow-same-origin, as that lets the embedded document remove the sandbox attribute — making it no more secure than not using the sandbox attribute at all.`,
        howToFix: `The sandbox attribute enables an extra set of restrictions for the content in the iframe and should always be specified.`,
        references: `https://web.dev/sandboxed-iframes/`,
        group: `Injection`,
    },
    {
        id: `NoFindDomNode`,
        title: `Use of findDOMNode`,
        description: `findDOMNode and createRef returns native DOM elements, with their full API. The issue with such a workaround is that it returns native DOM components with their full API. As a result, the application has the ability to control the element directly without going via React. If not used appropriately, these direct interactions might result in XSS.`,
        impact: `An attacker can utilize the vulnerability in your application to inject malicious script into your user's browser, resulting in an XSS attack.`,
        howToFix: `There is no HTML output, only text.\\r\\nTo build HTML nodes, use the appropriate DOM APIs.\\r\\nBefore inserting data into the page, run it via DOMPurify.`,
        references: `https://knowledge-base.offensive360.com/UseOfFindDOMNodeAndRefs/`,
        group: `Injection`,
    },
    {
        id: `ReactNoRefs`,
        title: `Use of React Refs`,
        description: `Disallow using string references.`,
        impact: `An attacker can utilize the vulnerability in your application to inject malicious script into your user's browser, resulting in an XSS attack.`,
        howToFix: `Using this.refs and string literals in ref attributes is deprecated.`,
        references: `https://knowledge-base.offensive360.com/UseOfFindDOMNodeAndRefs/`,
        group: `Injection`,
    },
    {
        id: `PublicS3Bucket`,
        title: `Public S3 Bucket`,
        description: `Using Public S3 Buckets is a risky practice where AWS S3 storage buckets are configured with open access permissions. This can lead to unintended data exposure, unauthorized access, or data tampering. To mitigate such risks, follow the principle of least privilege, utilize bucket policies, and implement proper access control mechanisms, such as IAM roles and encryption.`,
        impact: `With a public S3 bucket, an attacker can potentially read, modify, or delete sensitive data, perform unauthorized uploads, or even use the bucket for hosting malicious content, leading to data breaches, financial loss, and reputational damage.`,
        howToFix: `To secure S3 buckets, apply the principle of least privilege, use IAM roles, set up bucket policies, enable server-side encryption, and configure versioning to prevent unauthorized access and data breaches.`,
        references: `https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html#security-best-practices-prevent`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `AngularBypassSce`,
        title: `Angular Bypass SCE`,
        description: `Calls to $sceProvider.enabled(false), $sceDelegate.trustAs(), $sce.trustAs() and relevant shorthand methods (e.g. trustAsHtml or trustAsJs) bypass Strict Contextual Escaping (SCE) in AngularJS and need to be reviewed.`,
        impact: `Specific input avoids pattern matching and results in a legitimate JavaScript statement, resulting in an XSS.`,
        howToFix: `Do not bypass Strict Contextual Escaping (SCE) in AngularJS.`,
        references: `https://knowledge-base.offensive360.com/UseOfSCEBypass/`,
        group: `Injection`,
    },
    {
        id: `AngularSanitizationWhitelist`,
        title: `Deprecated Angular sanitization whitelist`,
        description: `Calls to '$compileProvider.aHrefSanitizationWhitelist' or '$compileProvider.imgSrcSanitizationWhitelist' configure whitelists in AngularJS sanitizer and need to be reviewed to prevent XSS attacks via html links.`,
        impact: `By enabling this setting without taking other precautions, you might expose your application to XSS attacks. In these attacks`,
        howToFix: `It's recommended to use imgSrcSanitizationTrustedUrlList or aHrefSanitizationTrustedUrlList instead.`,
        references: `https://docs.angularjs.org/api/ng/provider/$compileProvider#aHrefSanitizationWhitelis`,
        group: `Injection`,
    },
    {
        id: `FilePathInjection`,
        title: `File Path Injection`,
        description: `A path traversal attack (also known as a directory traversal attack) attempts to get access to files and directories located outside the web root folder. It may be possible to access arbitrary files and directories stored on the file system, including application source code or configuration and crucial system files, by manipulating variables that reference files with \\&quot;dot-dot-slash (../)\\&quot; sequences and variants, or by employing absolute file paths. This attack is also referred to as \\&quot;dot-dot-slash\\&quot;, \\&quot;directory traversal\\&quot;, \\&quot;directory climbing,\\&quot; and \\&quot;backtracking.\\&quot;`,
        impact: `An attacker may be able to write to arbitrary files on the server, allowing them to change application data or behavior and eventually gain complete control of the server.`,
        howToFix: `The most effective technique to avoid file path traversal vulnerabilities is to never transmit user-supplied information to filesystem APIs. Many application routines that perform this function can be redesigned to do the same job in a more secure manner. If passing user-supplied input to filesystem APIs is deemed inevitable, then two levels of security should be employed in tandem to prevent attacks: Before processing user input, the program should validate it. The validation should ideally check against a whitelist of acceptable values. If that isn't possible for the needed functionality, the validation should ensure that the input only contains approved material, such as entirely alphanumeric characters. After verifying the given input, the program should add the input to the base directory and canonicalize the path using a platform filesystem API. It should ensure that the canonicalized path begins with the anticipated base directory.`,
        references: `https://knowledge-base.offensive360.com/FilePathInjection/`,
        group: `Injection`,
    },
    {
        id: `CertificateValidation`,
        title: `Certificate Validation Disabled`,
        description: `A certificate is not validated or is validated improperly by the software. A certificate can links an identity (principal) to a cryptographic key. Certificates can be used to determine whether or not a public key belongs to the presumed owner.`,
        impact: `When a certificate is incorrect or fraudulent, an attacker may be able to impersonate a trusted entity by interfering with the communication flow between the host and client. The program may connect to a malicious host while believing it is connecting to a trustworthy host, or the software may be duped into accepting faked data that looks to originate from a trusted host.`,
        howToFix: `Certificates should be properly handled and reviewed to ensure that data is encrypted with the public key of the intended owner. If certificate pinning is utilized, verify that all essential characteristics of the certificate, including the hostname, are completely validated before the certificate is pinned.`,
        references: `https://knowledge-base.offensive360.com/CertificateValidationDisabled/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `JWTValidation`,
        title: `JWT Signature Validation Disabled`,
        description: `JSON web tokens are a sort of access token commonly used in commercial applications. They use the JSON format and include a token signature to confirm the token's integrity. JSON web tokens provide a safe means to identify the user since the data in the payload section cannot be tampered with. and the user cannot sign the token herself because she does not have access to the secret key. However, if configured poorly, an attacker can circumvent the security system and generate arbitrary tokens.`,
        impact: `An attacker might get access to the victim&apos;s account by using a falsified token.`,
        howToFix: `Validation of received JWTs is always required. When doing so, never allow the JWT or any of its header parameters drive the verification process on their own. Always have a clear contract in place that is suited to your application and specifies the allowed JWT algorithm as well as other header / payload / claim elements. Do not attempt to cryptographically process a JWT until this initial screening has been completed. If you get a JWT with an unusual algorithm, type header, or other information, disregard it and stop right there.`,
        references: `https://knowledge-base.offensive360.com/JWTSignatureValidationDisabled/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `HTTPHeaderChecking`,
        title: `HTTP Header Checking Disabled`,
        description: `When user-supplied data is copied into a response header in an unsafe manner, HTTP response header injection vulnerabilities occur. If an attacker can inject newline characters into the header, they can inject new HTTP headers as well as break out of the headers into the message body and send arbitrary text into the application's response by injecting an empty line.`,
        impact: `An attacker may carry out the following sorts of attacks, depending on the application:\\r\\nA cross-site scripting attack that can result in session hijacking.\\r\\nAttack on session fixation by creating a new cookie, which can also result in session hijacking.`,
        howToFix: `Applications should avoid transferring user-controllable data into HTTP response headers if at all feasible. If this is inevitable, the data should be rigorously vetted to avoid response header injection attacks. In most cases, only short alphanumeric sequences should be allowed to be copied into headers, and any additional input should be denied. At the very least, any characters with ASCII codes less than 0x20 should be disallowed.`,
        references: `https://knowledge-base.offensive360.com/HTTPHeaderCheckingDisabled/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `EventValidation`,
        title: `Event Validation Disabled`,
        description: `Request validation is an ASP.NET feature that checks HTTP requests to see whether they include potentially malicious content. This check protects against malicious mark-up or code in the URL query string, cookies, or posted form data. This type of exploit is known as a cross-site scripting (XSS) attack. Request validation helps to avoid this type of attack by giving a "possibly harmful value was identified" message and stopping page execution if it discovers potentially malicious input in the request, such as mark-up or code.`,
        impact: `Cross-site scripting (XSS) attacks can occur if request validation is deactivated or incorrectly configured.`,
        howToFix: `In general, request validation is beneficial and should be remained enabled for defense in depth. To fully safeguard your application from fraudulent input, each field of user-supplied data must be validated. In some circumstances, such as when receiving HTML mark-up from the end user, you may need to allow input that fails ASP.NET Request Validation. In these cases, you should deactivate request validation to keep the surface as minimal as possible.`,
        references: `https://knowledge-base.offensive360.com/EventValidationDisabled/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ViewStateMac`,
        title: `View State Mac Disabled`,
        description: `The ViewState is a method integrated into the ASP.NET framework for saving user interface elements and other data between requests. The server serializes the data to be saved and sends it via a hidden form field. The ViewState parameter is deserialized and the data is obtained when it is submitted back to the server. The serialized value is signed by the server by default to prevent user manipulation; however, this behavior may be deactivated by setting the Page. Set the setting EnableViewStateMac to false.`,
        impact: `If this is done, an attacker can alter the ViewState&apos;s contents, causing arbitrary data to be deserialized and handled by the server. If the ViewState contains any items that are crucial to the server&apos;s processing of the request, this might lead to a security vulnerability.`,
        howToFix: `There is no compelling reason to stop the normal ASP.NET practice of signing the ViewState to prevent tampering. You should configure the Page to guarantee that this happens. On any pages where the ViewState is not presently signed, set the EnableViewStateMac attribute to true.`,
        references: `https://knowledge-base.offensive360.com/ViewStateMacDisabled/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `PasswordLockout`,
        title: `Password Lockout Disabled`,
        description: `Account lockout is a security feature that is commonly seen in applications as a defense against brute force attacks on the system's password-based authentication process. The user's account may be blocked for a length of time or until it is unlocked by an administrator after a specified number of failed login attempts. Account lockout may also be triggered by other security situations. An attacker, on the other hand, may take use of this security feature to restrict service to legitimate system users. As a result, it's critical to make sure the account lockout security technique isn't unduly restrictive.`,
        impact: `A password-guessing attacks known as a brute force attack is a typical issue that web developers confront. A brute-force attack is a method of attempting to crack a password by trying every conceivable combination of letters, numbers, and symbols until you find the one that works.`,
        howToFix: `Implement smarter password throttling systems, such as ones that consider the IP address as well as the login name. Implement a lockout timeout that increases with the amount of failed login attempts, finally leading to a total lockout. Consider alternatives to account lockout that are nonetheless effective against password brute force assaults, such as displaying a puzzle to solve on the user's workstation.`,
        references: `https://knowledge-base.offensive360.com/PasswordLockoutDisabled/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `Authorize`,
        title: `Improper Authorization`,
        description: `When an actor seeks to access a resource or execute an action, the program fails to conduct or erroneously performs an authorization check.\\r\\nAssuming a user with a specified identification, authorization is the process of deciding whether the user may access a specific resource based on the user's rights and any permissions or other access-control requirements that apply to the resource.\\r\\nUsers are able to access data or conduct activities that they should not be able to undertake when access control checks are not implemented consistently - or at all. This can result in a variety of issues, including information leaks, denial of service, and arbitrary code execution.`,
        impact: `An attacker might read sensitive data by either reading it directly from an improperly limited data storage or by exploiting poorly secured, privileged functionality.\\r\\nAn attacker might edit sensitive data by either writing the data directly to an unrestricted data storage or using poorly secured, privileged functionality to write the data.\\r\\nAn attacker might get access to privileged functionality by directly changing or reading important data, or by accessing improperly secured privileged functionality.`,
        howToFix: `Divide the program into four sections: anonymous, normal, privileged, and administrative. By properly aligning responsibilities with data and functionality, you may reduce the attack surface. To enforce the roles at the right boundaries, use role-based access control (RBAC).\\r\\nUse your operating system's and server environment&apos;s access control features to define your access control lists. When establishing these ACLs, use a \\&quot;default deny\\&quot; policy.`,
        references: `https://cwe.mitre.org/data/definitions/285.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `CorsAllowAnyOrigin`,
        title: `Cors Allow Origin Wildcard`,
        description: `CORS is a mechanism that allows web browsers to execute cross-domain requests using the XMLHttpRequest API in a controlled manner. These cross-origin queries include an Origin header that specifies the domain from which the request was made. It specifies the protocol that should be used between a web browser and a server to determine whether a cross-origin request is approved. Using the HTTP response header Access-Control-Allow-Origin, the web application informs the web client of the approved domains. One of the most common CORS misconfigurations is the incorrect use of wildcards such as (*) to permit domains to access resources. This is generally set to default, implying that resources on this site can be accessed by any domain.`,
        impact: `The issue here is that a web client might inject any value into the Origin request HTTP header in order to force the web application to furnish it with the target resource content. The header value is handled by the browser in the case of a Browser web client, but another \\&quot;web client\\&quot; (such as the Curl/Wget/Burp suite) may be used to change/override the \\&quot;Origin\\&quot; header value.`,
        howToFix: `Using the Origin header to validate requests as coming from your site is not advised. Enable authentication on the resources accessed and require user/application credentials to be passed with CORS queries. Because any metadata in an HTTP request can be falsified, it is impossible to be 100 percent positive that any request comes from an intended client application.`,
        references: `https://knowledge-base.offensive360.com/CORSAllowOriginWildcard/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `WeakCryptoKeyLength`,
        title: `Weak cryptographic keys`,
        description: `A cryptographic algorithm&apos;s key length defines the greatest level of security it can provide. Cryptographic keys must be accurately created using a cryptographically strong random number generator. Common mistakes include keeping hard-coded keys in the code from development or creating a random UUID as a key and immediately utilizing the string as the key value.`,
        impact: `Using a key of an inadequate length in an encryption/decryption technique increases the potential (or likelihood) that the encryption system will be broken (i.e. cracked). The stronger the encryption, the greater the key size. Weak ciphers are encryption/decryption methods that employ key sizes that are fewer than 128 bits (i.e., 16 bytes... 8 bits in a byte). SSL traffic between your server and your visitors may be decrypted by attackers.`,
        howToFix: `To ensure safe communication with your visitors, you should only enable powerful ciphers on your web server. The key length of X.509 certificates must be long (e.g. if RSA or DSA is used the key must be at least 1024 bits)`,
        references: `https://knowledge-base.offensive360.com/WeakCryptoKeyLength/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `py_Unsafe_yaml_load`,
        title: `unsafe yaml.load`,
        description: `The yaml.load() function is used to parse and deserialize YAML data. The default loader, Loader, can create and execute arbitrary Python objects, potentially leading to security vulnerabilities.`,
        impact: `The use of yaml.load() with the default Loader may result in arbitrary code execution if provided with malicious YAML input. This can lead to application or system compromise.`,
        howToFix: `To mitigate the security risks associated with the yaml.load() function, use the SafeLoader for parsing YAML data, which restricts object creation and code execution.`,
        references: `https://pyyaml.org/wiki/PyYAMLDocumentation#loading-yaml`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SerializationType`,
        title: `Types that can be deserialized should be limited.`,
        description: `The state of an object will be recreated from the serialized data stream during the deserialization process, which may involve harmful operations.`,
        impact: `A well-known attack vector involves serializing an object of type TempFileCollection with arbitrary files (specified by the attacker) that will be destroyed when the application deserializes this object (when the TempFileCollection object's finalize() function is invoked). These are referred to as \\&quot;gadgets\\&quot;.`,
        howToFix: `In most circumstances, safer alternatives such as XmlSerializer or DataContractSerializer should be used instead of BinaryFormatter and related serializers. If this is not practicable, attempt to lessen the risk by limiting the kinds that can be deserialized:\\r\\nby establishing a \\&quot;allow-list\\&quot; of types, but keep in mind that new harmful types are constantly being found, and this protection may become insufficient over time.\\r\\nor/and employing tamper-resistant measures, such as message authentication codes (MAC). Only objects serialized with the right MAC hash will be deserialized in this manner.`,
        references: `https://docs.microsoft.com/en-us/dotnet/standard/serialization/binaryformatter-security-guide`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `LdapSecureConnection`,
        title: `Secure Ldap Authentication is required`,
        description: `Many systems are integrated using the Lightweight Directory Access Protocol (LDAP) because it allows systems to use a centralized directory of user and computer information, allowing systems to be consistent and user-aware, and allowing users to access multiple services with the same set of credentials. An LDAP client authenticates to an LDAP server using a \\&quot;bind request\\&quot;, which includes a basic authentication mechanism among other things.`,
        impact: `Anonymous and unauthenticated binds provide access to information in the LDAP directory without requiring a password; their usage is hence highly prohibited.`,
        howToFix: `In LDAP, simple authentication may be utilized using three alternative mechanisms:\\r\\nAnonymous Authentication Mechanism is achieved by sending a bind request with a username and password length of zero.\\r\\nUnauthenticated Authentication Mechanism by performing a bind request with a password value of zero length.\\r\\nName/Password Authentication Mechanism by performing a bind request with a password value of non-zero length.`,
        references: `https://knowledge-base.offensive360.com/LdapSecureConnection/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `EmptyFinallyBlock`,
        title: `Empty Finally Block`,
        description: `Finally blocks must be used to run the code that is required after the try and/or catch blocks have been completed. It is often used to code the release of resources utilised in the try block. When an exception handling block, such as Finally, is used but the block is empty, the software may not execute successfully. If an attacker can access the necessary code, this dependability issue may provide a vulnerability.`,
        impact: `An empty finally block is most likely an indication of possible "resource leaks" that will compromise the application's stability.`,
        howToFix: `Add code to the finally block, especially the release of resources used in the try block, if any.`,
        references: `https://knowledge-base.offensive360.com/EmptyFinallyBlock/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `RegexInjection`,
        title: `Regular Expression Injection`,
        description: `Regex injection attacks should be avoided while working with untrusted data. Regex injection can be used to maliciously modify a regular expression, cause it to match unintended results, or cause it to consume too much CPU, resulting in a Denial of Service attack.`,
        impact: `When processing an input, most regular expression engines employ backtracking to examine all potential execution pathways of the regular expression. This can produce performance concerns, which are known as catastrophic backtracking scenarios. In the worst-case scenario, the regular expression's complexity grows exponentially with the amount of the input, which implies even a modest carefully-crafted input (such as 20 characters) might cause catastrophic backtracking and application denial of service.`,
        howToFix: `When utilizing regular expressions, always employ a match timeout.\\r\\nRegular expressions based on user input should be avoided at all costs.\\r\\nCall (System.Text.RegularExpressions.Regex.Escape) or similar method to escape special characters from user input.\\r\\nAllow only non-special characters to be entered by the user.`,
        references: `https://knowledge-base.offensive360.com/RegexInjection/`,
        group: `Injection`,
    },
    {
        id: `SerializationConstructor`,
        title: `Serialization Constructor`,
        description: `Because serialization constructors allocate and initialize objects, the same security tests that apply to normal constructors must also apply to serialization constructors. When a type implements the System.Runtime.Serialization.ISerializable interface, is not a delegate or interface, is defined in an assembly that supports partly trusted callers, and has a constructor that accepts a System.Runtime.Serialization.Serializable object and a System. Runtime.Serialization.Streaming Context object that is not protected by a security check but is secured by one or more of the type's usual constructors.`,
        impact: `Failure to do so would allow callers who could not ordinarily create an instance to do so by using the serialization constructor.`,
        howToFix: `Security checks that are present on standard constructors must also be included on a serialization constructor.`,
        references: `https://knowledge-base.offensive360.com/SerializationConstructor/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `HardcodedIpAddress`,
        title: `Hardcoded IP Address`,
        description: `Hardcoding IP addresses is risky in terms of security and it's worse if 0.0.0.0 is hardcoded as it will expose to all network interfaces. Because of its scalability and redundancy requirements, today's services have an ever-changing architecture. It is a common misconception that a service will always have the same IP address. When it does change, the hardcoded IP address must be updated as well. This will affect product development, delivery, and deployment.`,
        impact: `Instead of having an operation team edit a configuration file, the developers will have to execute a quick repair every time this happens. It requires the same address to be used in all environments (dev, sys, QA, prod). Finally, it has an impact on application security. Attackers may be able to decompile the code and uncover a potentially sensitive address as a result. They can use this address to launch a Denial of Service attack or to spoof the IP address. Such an attack is always conceivable, but with a hardcoded IP address, the patch will be significantly slower, increasing the risk's impact.`,
        howToFix: `Make the IP address changeable rather than hard-coded in the source code.`,
        references: `https://knowledge-base.offensive360.com/HardcodedIpAddress/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `ExportInterface`,
        title: `Export Interface`,
        description: `The ExportAttribute in the Attributed Programming Model states that a component exports, or offers to the composition container, an object that meets a specific contract. Parts with imports that have matching contracts will have their dependencies supplied by the exported object during composition.`,
        impact: `If the type does not implement the interface it is exporting, there will be a problem at runtime (either a cast error or a container that is not filled with the exported type), resulting in unexpected behavior/crashes. When a class does not implement or inherit the type stated in the ExportAttribute, the rule throws an exception.`,
        howToFix: `The interface that the type class is exporting should be implemented by the type class.`,
        references: `https://knowledge-base.offensive360.com/ExportInterface/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `ThreadSuspendResume`,
        title: `Thread Suspend Resume`,
        description: `Thread.Suspend and Thread.Resume might provide unexpected consequences, therefore both are deprecated.`,
        impact: `If Thread.Suspend is not used with caution, a thread can be suspended while still holding a lock, resulting in a deadlock.`,
        howToFix: `Other, more secure synchronization techniques, such as Monitor, Mutex, and Semaphore, should be utilized.`,
        references: `https://knowledge-base.offensive360.com/ThreadSuspendResume/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SafeHandle`,
        title: `Safe Handle`,
        description: `This method may be used to get the real handle value from a SafeHandle derived class instance. Because many properties in the.NET Framework return IntPtr handle types, this function is required for backwards compatibility. Platform-specific IntPtr handle types are used to represent a pointer or a handle. The SafeHandle.DangerousGetHandle method is, unsurprisingly, hazardous. This is due to the possibility that it will not return a valid handle.`,
        impact: `Its use might result in data breaches and risks. While it is possible to apply the approach effectively, doing it correctly is incredibly difficult, hence the method should be avoided entirely. The DangerousGetHandle method can be dangerous since it still returns the original, potentially stale handle value even if the handle has been designated as invalid using SetHandleAsInvalid. At any time, the returned handle can be recycled. At the very least, this indicates that the handle may abruptly stop operating. In the worst-case scenario, exposing the handle or the resource it represents to untrusted code might result in a recycling security attack on the reused or returned handle. An untrusted caller, for example, might query data on the handle that was just returned and retrieve information about a completely different resource.`,
        howToFix: `The method SafeHandle.DangerousGetHandle should not be used in the code.`,
        references: `https://knowledge-base.offensive360.com/SafeHandle/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `RecursiveTypeInheritance`,
        title: `Recursive Type Inheritance`,
        description: `In techniques when you can break out of it, recursion is permissible. When you use class types, though, you&apos;ll get code that compiles but doesn&apos;t run when you try to instantiate the class.`,
        impact: `If you try to instantiate the class, you&apos;ll get code that compiles but doesn&apos;t run.`,
        howToFix: `When it comes to type inheritance, recursion should be avoided.`,
        references: `https://knowledge-base.offensive360.com/RecursiveTypeInheritance/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SqlKeywordDelimit`,
        title: `SQL Keyword Delimit`,
        description: `SQL that is incorrectly constructed is likely to result in problems during runtime. When the space surrounding SQL keywords appears to be lacking, this rule highlights an issue.`,
        impact: `Errors are likely to occur throughout the execution process.`,
        howToFix: `Whitespace should be used to separate SQL keywords.`,
        references: `https://knowledge-base.offensive360.com/SqlKeywordDelimit/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `DestructorThrow`,
        title: `Destructor Throw`,
        description: `When an exception is thrown, the call stack is unwound until the exception is handled. All automated objects declared between the point where the exception is thrown and when it is to be handled will have their destructors called.`,
        impact: `If one of these destructors throws an exception, the program will quit in an implementation-defined manner, which may result in unanticipated effects.`,
        howToFix: `A destructor may throw an exception that is handled within the destructor, such as within a try-catch block.`,
        references: `https://knowledge-base.offensive360.com/DestructorThrow/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `NonAsyncTaskNull`,
        title: `Non Async Task Null`,
        description: `\\&quot;Task/Task\\&quot; methods that are not async should not return null. A NullReferenceException will be thrown at runtime if a non-async Task/Task function returns null.`,
        impact: `At execution, it will throw a NullReferenceException.`,
        howToFix: `Returning Task will solve this problem. Instead, use FromResult(null).`,
        references: `https://knowledge-base.offensive360.com/NonAsyncTaskNull/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `BeginEndInvoke`,
        title: `Begin End Invoke`,
        description: `When a delegate&apos;s BeginInvoke method is invoked, certain resources are allocated that are only released when EndInvoke is performed. This is why, to finish your asynchronous call, you should always couple BeginInvoke with an EndInvoke.`,
        impact: `This rule becomes problematic when:\\r\\nBeginInvoke is called without a callback and is not followed by a call to EndInvoke in the same block.\\r\\nA callback with a single argument of type IAsyncResult does not include an EndInvoke call.`,
        howToFix: `To finish your asynchronous call, always pair BeginInvoke with EndInvoke.`,
        references: `https://knowledge-base.offensive360.com/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SharedInstance`,
        title: `Shared Instance`,
        description: `When a class is marked with Managed Extensibility Framework (MEF) PartCreationPolicy(CreationPolicy.Shared), a single, shared instance of the exported object is generated. As a result, utilizing the constructor to generate new instances makes no sense and will almost always result in unanticipated behavior.`,
        impact: `This rule causes a problem when a constructor of a class designated shared with a PartCreationPolicyAttribute is called.`,
        howToFix: `You should make use of ServiceProvider.GetService(Type) returns the service object of the given type.`,
        references: `https://knowledge-base.offensive360.com/SharedInstance/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `PropertyAccessor`,
        title: `Property Accessor`,
        description: `A property is a member that allows you to read, write, or compute the value of a private field with ease. Properties are special procedures known as accessors that may be utilized as if they were public data members. This allows data to be quickly accessed while also promoting method safety and flexibility.`,
        impact: `The implicit value parameter in property and indexer set methods, as well as event add and delete methods, contains the value the accessor was called with. If the value isn&apos;t used, the accessor will ignore the caller's purpose, which might result in unexpected runtime outcomes.`,
        howToFix: `Using a private backing field to set and get the property value is a common approach for constructing a property. The set accessor may do some data validation before assigning a value to the private field, while the get accessor retrieves the value of the private field.`,
        references: `https://knowledge-base.offensive360.com/PropertyAccessor/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `RightShiftNotNumber`,
        title: `Right Shift Not Number`,
        description: `The << and >> operators can shift numbers, but the right operand of the operation must be an int or a type having an implicit conversion to int. The compiler's type checking is disabled with dynamic, thus you can supply anything to a shift operator and have it build.`,
        impact: `A RuntimeBinderException will be thrown if the argument cannot be converted to an int at runtime.`,
        howToFix: `The operation&apos;s right operand must be an int or a type with an implicit conversion to int.`,
        references: `https://knowledge-base.offensive360.com/RightShiftNotNumber/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SharedObjectLock`,
        title: `Shared Object Lock`,
        description: `Locking should not be done with shared resources since it raises the likelihood of deadlocks. Any other thread might obtain (or seek to obtain) the same lock for an unrelated reason. To avoid deadlocks or lock contention, each shared resource should have its own object instance.`,
        impact: `If shared resources are used for locking, deadlock might develop.`,
        howToFix: `The following items are regarded as shared resources:\\r\\na Type object.\\r\\na string literal.\\r\\na string instance.`,
        references: `https://knowledge-base.offensive360.com/SharedObjectLock/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `PartCreationPolicyNonExport`,
        title: `Part Creation Policy Not Export`,
        description: `The Managed Extensibility Framework (MEF) PartCreationPolicyAttribute property is used to describe how the exported object will be constructed. As a result, utilizing the ExportAttribute property to export this class with this attribute makes no sense.`,
        impact: `When a class is declared as shared with a PartCreationPolicyAttribute but not an ExportAttribute, this rule causes a problem.`,
        howToFix: `ExportAttribute should be combined with PartCreationPolicyAttribute.`,
        references: `https://knowledge-base.offensive360.com/PartCreationPolicyNonExport/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `ConstructorArgumentValue`,
        title: `Constructor Argument Value`,
        description: `When developing a custom Markup Extension in WPF that accepts parameters, the ConstructorArgument markup must be utilized to indicate the discrete attributes that correspond to these arguments. However, because this is done through a string, the compiler will not catch any mistakes.`,
        impact: `This rule throws an exception if the string supplied to ConstructorArgumentAttribute does not match any constructor parameter.`,
        howToFix: `The constructor parameter string must be written accurately because the compiler will not notice a typo.`,
        references: `https://knowledge-base.offensive360.com/ConstructorArgumentValue/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `OverwriteCollectionElement`,
        title: `Overwrite Collection Element`,
        description: `The replacement of collection pieces should not be done unconditionally. When a value is stored for a key or index and then unconditionally rewritten, it is very suspicious.`,
        impact: `Such substitutions are almost certainly errors.`,
        howToFix: `It is not advisable to change all collection items at the same time.`,
        references: `https://knowledge-base.offensive360.com/OverwriteCollectionElement/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `CollectionSizeOrArrayLength`,
        title: `Collection Size Or Array Length`,
        description: `A collection&apos;s size and an array&apos;s length are always higher than or equal to zero. As a result, you should use the right condition to check the size of a Collection or the length of an Array.`,
        impact: `As a result, evaluating if a size or length is bigger than or equal to zero makes no sense because the answer is always true. Similarly, if it is less than zero, it will always return false.`,
        howToFix: `Compliant Solution :\\r\\n###\\r\\nif (!myList.isEmpty()) { ... }\\r\\nif (myArray.length &gt;= 42) { ... }\\r\\n###`,
        references: `https://knowledge-base.offensive360.com/CollectionSizeOrArrayLength/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SerializationEventImplement`,
        title: `Serialization Event Implement`,
        description: `Serialization event handlers must be properly implemented. Serialization event handlers that do not have the right signature will be ignored, thereby circumventing any attempts to supplement the automatic de-serialization.`,
        impact: `When a method tagged with one of the following qualities is public, static, does not return void, contains type arguments, or does not have a single parameter of type, this rule raises an issue System.Runtime.Serialization.StreamingContext:\\r\\nSystem.Runtime.Serialization.OnSerializingAttribute.\\r\\nSystem.Runtime.Serialization.OnSerializedAttribute.\\r\\nSystem.Runtime.Serialization.OnDeserializingAttribute.\\r\\nSystem.Runtime.Serialization.OnDeserializedAttribute.`,
        howToFix: `To fix a violation of this rule, correct the signature, return type, or visibility of the serialization event handler.`,
        references: `https://knowledge-base.offensive360.com/SerializationEventImplement/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `MissingCookieProtectionFormsAuthentication`,
        title: `Forms Authentication - Weak Cookie Protection`,
        description: `The application uses a security mechanism that is dependent on the existence or values of a cookie, but it does not adequately guarantee that the cookie is valid for the associated user. Web cookies are frequently used as a significant attack vector by malicious users, and the application should constantly take precautions to secure cookies.`,
        impact: `Cookies can be readily modified by attackers, either within the browser or by implementing client-side code outside of the browser. By changing the cookie to contain an anticipated value, attackers can circumvent protective methods such as authorisation and authentication.`,
        howToFix: `Avoid utilizing cookie data to make a security choice.\\r\\nIf you&apos;re going to use cookie data for a security decision, make sure it&apos;s been thoroughly validated (i.e. server side validation).\\r\\nCall (System.Text.RegularExpressions.Regex.Escape) or similar method to escape special characters from user input.\\r\\nAllow only non-special characters to be entered by the user.\\r\\nIntegrity tests should be included to identify tampering.\\r\\nProtect crucial cookies from replay attacks, because cross-site scripting or other methods might allow attackers to steal a heavily encrypted cookie that also passes integrity tests.`,
        references: `https://knowledge-base.offensive360.com/FormsAuthenticationWeakCookieProtection/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `MissingCookielessFormsAuthentication`,
        title: `Missing Cookieless Forms Authentication`,
        description: `When a web application is set to use cookieless authentication, the authentication token is stored in the page URLs rather than in a cookie. As a result, the application becomes more vulnerable to session hijacking attempts.`,
        impact: `Session hijacking is a type of identity theft in which a hacker steals a legal user's session token and impersonates him. The authentication token is safe when it is transmitted in a cookie and the request is done over a secure channel (e.g., SSL).`,
        howToFix: `To prevent cookieless authentication, set the element's cookieless attribute to UseCookies.`,
        references: `https://www.informit.com/articles/article.aspx?p=351414&seqNum=4`,
        group: `BrokenAccessControl`,
    },
    {
        id: `MissingRequireSSLFormsAuthentication`,
        title: `Missing Require SSL Forms Authentication`,
        description: `ASP.NET has failed to require SSL for the authentication cookies.`,
        impact: `When an ASP.NET application fails to require SSL for authentication cookies, the cookie can be taken by an attacker who successfully intercepts the traffic after a successful man-in-the-middle attack.`,
        howToFix: `By setting the requireSSL property of the forms element to true, you may force the forms authentication cookie from your Web-based apps to use SSL.`,
        references: `https://stackoverflow.com/questions/14531853/forms-authentication-with-requiressl-true-not-returning-cookie-with-secure-attri`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ReflectedXSS`,
        title: `Reflected XSS`,
        description: `Reflected XSS attacks, also known as non-persistent attacks, occur when a malicious script is reflected back to the victim's browser from an online application.\\r\\nThe script is launched by clicking on a link, which sends a request to a website that has a vulnerability that allows malicious scripts to be executed.`,
        impact: `The vulnerability is often caused by insufficient sanitization of incoming requests, which allows for the manipulation of a web application&apos;s functions and the activation of malicious scripts.\\r\\nTo disseminate the malicious link, the culprit usually embeds it in an email or on a third-party website (e.g., in a comment section or in social media). The link is contained within anchor text, which prompts the user to click on it, triggering an XSS request to an infected website and reflecting the attack back to the user.`,
        howToFix: `First and foremost, from the user's perspective, alertness is the most effective technique to avoid XSS scripting. This includes not clicking on questionable URLs that may contain harmful code.Suspicious connections can be detected in:\\r\\nUnknown senders' emails.\\r\\nThe comments area of a website.\\r\\nUnknown users social media feed.`,
        references: `https://knowledge-base.offensive360.com/CrossSiteScriptingXSS/`,
        group: `Injection`,
    },
    {
        id: `XSS`,
        title: `XSS`,
        description: `Cross-site Scripting (XSS) is a type of code injection attack that occurs on the client side. The attacker intends to run harmful scripts in the victim's web browser by embedding malicious code in a genuine web page or online application. The real attack takes place when the victim hits the malicious code-infected web page or online application. The web page or web application serves as a vehicle for the malicious script to be sent to the user's browser. Forums, message boards, and online pages that enable comments are vulnerable vehicles that are frequently utilized for Cross-site Scripting attacks.`,
        impact: `An attacker can use XSS to transmit a malicious script to a user who is not expecting it. The browser of the end-user has no means of knowing that the script should not be trusted and will run it anyhow. Because it believes the script came from a reliable source, the malicious script has access to any cookies, session tokens, or other sensitive information stored by the browser and utilized with that site. These types of vulnerabilities can even rewrite the HTML page's content.`,
        howToFix: `In general, properly avoiding XSS vulnerabilities would almost certainly need a mix of the following measures:\\r\\nFilter the user's input: When receiving user input, filter it as precisely as possible depending on what is anticipated or legitimate input.\\r\\nEncode data on output: Encode user-controllable data in HTTP responses at the point when it's returned by the webserver/application to prevent it from being perceived as active content. Depending on the output context, this might need the use of a mix of HTML, URL, JavaScript, and CSS encoding.\\r\\nUse suitable response headers: To avoid XSS in HTTP responses that aren't supposed to contain any HTML or JavaScript, use the Content-Type and X-Content-Type-Options headers to guarantee that browsers read the responses correctly.\\r\\nContent Security Policy (CSP): As a last line of defense, you may utilize Content Security Policy (CSP) to mitigate the severity of any remaining XSS vulnerabilities.`,
        references: `https://knowledge-base.offensive360.com/CrossSiteScriptingXSS/`,
        group: `Injection`,
    },
    {
        id: `StoredXSS`,
        title: `Stored XSS`,
        description: `The most dangerous of the two is stored XSS, also known as persistent XSS. It takes place when a malicious script is directly injected into a susceptible web application.`,
        impact: `Websites that allow users to post material, such as blogs, social networks, video sharing platforms, and message boards, are frequently targeted. The malicious script is transferred to the victim's browser each time the infected website is accessed.`,
        howToFix: `A web application firewall (WAF) is the most often used solution for XSS and web application attack security.\\r\\nWAFs use a variety of approaches to counteract attack vectors. Most will rely on signature-based filtering to identify and stop malicious requests in the case of XSS but it's highly recommended to filter the user's input areas to block the XSS payloads on the application level.`,
        references: `https://knowledge-base.offensive360.com/CrossSiteScriptingXSS/`,
        group: `Injection`,
    },
    {
        id: `EnableDebugMode`,
        title: `Enable Debug Mode`,
        description: `If enabled, ASP.NET supports remote debugging of web applications. Debugging is restricted by default and needs platform-level authorization.`,
        impact: `If an attacker is successful in starting a remote debugging session, sensitive information about the web application and underlying infrastructure may be revealed, which might be useful in developing targeted attacks against the system.`,
        howToFix: `To deactivate debugging, enter the application&apos;s Web.config file and look for the <compilation> element inside the <system.web> section. Change the debug property to \\&quot;false.\\&quot; It&apos;s also worth noting that you may enable debugging for all programs in the Machine.config file. You should check the Machine.config file to ensure that the debug property in the <compilation> element is not set to \\&quot;true.\\&quot;`,
        references: `https://docs.microsoft.com/en-us/troubleshoot/aspnet/disable-debugging-application`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `HeaderInjection`,
        title: `Header Injection`,
        description: `When user-supplied data is copied into a response header in an unsafe manner, HTTP response header injection vulnerabilities occur. If an attacker can inject newline characters into the header, they can inject new HTTP headers as well as break out of the headers into the message body and send arbitrary text into the application's response by injecting an empty line.`,
        impact: `An attacker may carry out the following sorts of attacks, depending on the application:\\r\\nSystem.Runtime.Serialization.OnSerializingAttribute.\\r\\nA cross-site scripting attack that can result in session hijacking.\\r\\nAttack on session fixation by creating a new cookie, which can also result in session hijacking.`,
        howToFix: `Applications should avoid transferring user-controllable data into HTTP response headers if at all feasible. If this is inevitable, the data should be rigorously vetted to avoid response header injection attacks. In most cases, only short alphanumeric sequences should be allowed to be copied into headers, and any additional input should be denied. At the very least, any characters with ASCII codes less than 0x20 should be disallowed.`,
        references: `https://knowledge-base.offensive360.com/HTTPHeaderCheckingDisabled/`,
        group: `Injection`,
    },
    {
        id: `IncorrectPermission`,
        title: `Incorrect Permission Assignment`,
        description: `Setting loose POSIX file permissions can be a security risk, as it allows unauthorized users to access sensitive files on a server. This occurs when file permissions are set to be too permissive, such as 777 or 666, which grants read, write, and execute permissions to everyone. As a result, any user on the server can modify or delete files, potentially causing serious damage to the system.`,
        impact: `an attacker could use the vulnerability to inject malware into the server, which can then be used to spread the infection to other systems or steal sensitive data. They could also modify important configuration files to disable security measures, gain privileged access, or cause the system to crash. In addition, an attacker could steal sensitive information such as login credentials, personal data, or financial information, which can be used for identity theft, fraud, or other malicious purposes.`,
        howToFix: `To mitigate this risk, it is recommended to set more restrictive file permissions, such as 755 or 644, depending on the use case. Only the necessary users or groups should have access to the files, and permissions should be reviewed regularly to ensure that they are appropriate.`,
        references: `https://www.dokuwiki.org/install:permissions`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `LoggerConfigure`,
        title: `Logger Configure`,
        description: `The configuration of loggers is security-sensitive. Logs can help you before, during, and after a security issue. Because logs may include sensitive information, they are also a target for attackers. The type of information reported and how it is logged are both affected by how loggers are configured.`,
        impact: `Unauthorized users may have access to logs, either because they are kept in an unsecured area or because the program grants them access.\\r\\nOn a production system, the logs contain sensitive information. When the logger is in debug mode, this can happen.\\r\\nThe log can grow indefinitely. This can occur when extra information is entered into logs every time a user does an action, and the user has the ability to execute the activity as many times as he or she desires.`,
        howToFix: `Check that your production deployment&apos;s loggers are not in \\&quot;debug\\&quot; mode, since this might result in sensitive information being sent to logs.\\r\\nProduction logs should be kept in a secure area that only system administrators have access to.\\r\\nSet the loggers to display all warnings, information, and error messages. Include pertinent information such as the exact time of incidents and the hostname.`,
        references: `https://cwe.mitre.org/data/definitions/532.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `ControllingPermission`,
        title: `Controlling Permission`,
        description: `An application&apos;s access control must be appropriately implemented in order to restrict access to resources to authorized entities; otherwise, vulnerabilities may arise`,
        impact: `If you replied yes to any of those questions, you are at danger.\\r\\nPermission granted to an entity (user, application) allows access to information or features that this entity does not require.\\r\\nPrivileges are easily obtained (for example, based on the user's location, the type of device used, determined by third parties, does not require permission... ).\\r\\nAn inherited permission, default permission, or a user with no rights (for example, anonymous user) is permitted to access a protected resource.`,
        howToFix: `An access control system should, as a bare minimum, provide the following features:\\r\\nMake use of a well-defined access control paradigm, such as RBAC or ACL.\\r\\nRights for entities should be evaluated on a regular basis to delete permissions that are no longer required.\\r\\nMaintain the principle of least privilege(\\&quot;An entity can only access information and resources that are required for its lawful purpose\\&quot;).`,
        references: `https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control`,
        group: `BrokenAccessControl`,
    },
    {
        id: `EncryptingData`,
        title: `Encrypting Data`,
        description: `Proper encryption necessitates the use of a strong encryption algorithm as well as a strong key. Obviously, the private key must be kept secret and refreshed on a regular basis. However, these are not the only ways to circumvent or degrade encryption.`,
        impact: `If you replied yes to any of these questions, you are at danger.\\r\\nThe private key may not be random or strong enough, or it may be reused over an extended period of time.\\r\\nThe secret key might be jeopardized. It can happen if it is kept in a hazardous location or transported in an unsafe manner.\\r\\nThe key exchange occurs without the recipient being properly authenticated.`,
        howToFix: `Using safe random techniques, generate encryption keys.\\r\\nIt is critical to pick a key length that offers enough entropy against brute-force attacks when producing cryptographic keys (or key pairs). The key for the Blowfish algorithm must be at least 128 bits long, whereas the key for the RSA algorithm must be at least 2048 bits long.\\r\\nRegularly regenerate the keys.`,
        references: `https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ExpandingArchive`,
        title: `Expanding Archive`,
        description: `It is dangerous to expand archive files without managing resource use.When a program expands untrusted archive files without regulating the amount of the expanded contents, a successful Zip Bomb attack occurs, which can result in a denial of service.`,
        impact: `A Zip bomb is often a malicious archive file containing a few kilobytes of compressed data that has been converted into terabytes of uncompressed data. Attackers will compress irrelevant data in order to attain this excessive compression ratio (eg: a long string of repeated bytes).`,
        howToFix: `Define and regulate the compressed-to-uncompressed data ratio; in general, the data compression ratio for most legitimate archives is 1 to 3.\\r\\nDefine and manage the maximum overall size of the uncompressed data.\\r\\nCount the number of file entries taken from the archive and stop the extraction if it exceeds a specified threshold; it is not suggested to recursively expand archives (an entry of an archive could be also an archive).`,
        references: `https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SocketsCreation`,
        title: `Sockets Creation`,
        description: `Using sockets is risky for security. There is a risk if sockets are generated indefinitely each time a user takes an activity. It is also dangerous to utilize input from sockets that have not been cleaned. Security is at risk when sensitive data is transferred over connections without encryption.`,
        impact: `Sockets are vulnerable in a variety of ways:\\r\\nThey allow software to communicate with the outside world. Because the world is filled with attackers, it is critical to ensure that they do not acquire important information or inject dangerous data.\\r\\nThe number of available sockets is limited and may be depleted. As a result, users who require more sockets will find the program unavailable.`,
        howToFix: `In many circumstances, it is unnecessary to open a socket oneself. Instead, make use of libraries and pre-existing protocols.\\r\\nIf the data is sensitive, encrypt it before sending it. Even if the data is not important, it is usually best to encrypt it because it may alter later.\\r\\nSanitize any socket input that is read.`,
        references: `https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `NonstandardCryptography`,
        title: `Non Standard Cryptography`,
        description: `Cipher algorithms must be reliable.Strong cipher algorithms are cryptographic systems that are resistant to cryptanalysis and are not subject to well-known techniques such as brute force attacks.`,
        impact: `The deployment of a faulty or hazardous cryptographic algorithm may threaten the secrecy of sensitive data. If the cryptographic method is used to confirm the identification of the source of the data (such as digital signatures), then a flawed algorithm will undermine this scheme and the source of the data will be impossible to prove.`,
        howToFix: `It is advised to use AesCryptoServiceProvider for the System.Security.Cryptography library.\\r\\nIt is advised to utilize AESEngine with the Bouncycastle library:`,
        references: `https://cwe.mitre.org/data/definitions/327.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `FormAuthenticationBypass`,
        title: `Form Authentication Bypass`,
        description: `The vulnerability allows an attacker to impersonate another user within the program without knowing the victim&apos;s password. This is a significant flaw since it might allow people to execute commands to which they do not have access.`,
        impact: `The attacker uses his fraudulent user name and password to log into the program. The whole username, together with the password, is successfully validated against the database. The ASP.Net engine sends the user name to an unmanaged DLL (remember the null byte?) that generates the Forms Authentication Token. The user name is used to generate the authentication token that forms authentication uses.`,
        howToFix: `The vulnerability in.NET 4.0 may be avoided by changing the ticketCompatibilityMode in the application or global web.config file`,
        references: `https://www.jardinesoftware.net/2012/01/05/asp-net-forms-authentication-bypass/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `DatabaseWithoutPassword`,
        title: `Database Without Password`,
        description: `When connecting to a database, use a safe password. When using password authentication for a database connection, a safe password should be used. When an empty password is used, this rule causes a problem.`,
        impact: `Databases without passwords are especially dangerous since they are easy targets for password guessing attacks, which allow hackers and viruses to hijack db.`,
        howToFix: `Create a strong password, add it to the username database, and save it in an environment variable.\\r\\nEmploy password encryption mechanisms.`,
        references: `https://cwe.mitre.org/data/definitions/521.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `HardcodedKey`,
        title: `Hardcoded Key`,
        description: `Keys should not be hard-coded since they are easily extracted from an application&apos;s source code or binaries. This is especially true for distributed or open-source software applications.`,
        impact: `Consider a service in which an attacker might send an SMS using your hard-coded key and subscribe to a spam service that would profit them at your cost. It might result in substantial sums of money being lost in a short period of time from your account linked to the SMS gateway key.`,
        howToFix: `Keep the keys in a configuration file that isn&apos;t added to the code repository.\\r\\nIf a key has been revealed in the source code, update it.`,
        references: `https://knowledge-base.offensive360.com/HardcodePassword`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `InformationLeak`,
        title: `Information Leak`,
        description: `information leak could expose sensitive data about your application in which attackers may leverage this information to conduct further attacks`,
        impact: `Attackers can utilize information disclosure concerns in online applications to get important knowledge about a web application's potential flaws, allowing them to construct a more successful attack.`,
        howToFix: `it's recommended to remove debugging statements including print or logging statements/files from the production environment`,
        references: `https://knowledge-base.offensive360.com/InformationLeak`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `SessionFixation`,
        title: `Session Fixation`,
        description: `Authenticating a user or creating a new user session without invalidating any current session identifiers allows an attacker to steal authenticated sessions.`,
        impact: `Attackers can change the session identifier to a known value by directly constructing cookies from tainted data, allowing the attacker to share the session with the victim. If the session identification is not renewed after the victim authenticates, successful attacks may result in unauthorized access to sensitive information.`,
        howToFix: `Before approving a new user session, invalidate any existing session IDs.`,
        references: `https://knowledge-base.offensive360.com/SessionFixation/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `HtmlInjection`,
        title: `HTML injection`,
        description: `HTML injection attack allows the injection of certain HTML tags and executes malicious javascript code.`,
        impact: `It gives an attacker the ability to change the page and steal someone else's identity. When the attacker identifies an injection vulnerability, he or she decides to launch an HTML injection attack. Attacker creates malicious links with his inserted HTML content and distributes them to a victim through email. Visitor views the website because it is placed within a trusted domain. The injected HTML from the attacker is rendered and given to the user, who is then prompted for a login and password. The user provides a username and password, both of which are forwarded to the attacker's server.`,
        howToFix: `Don't trust user input: always sanitize it!, also avoid using dangerous JS functions like innerHTML,outerHTML,document.write.`,
        references: `https://knowledge-base.offensive360.com/HTMLInjection/`,
        group: `Injection`,
    },
    {
        id: `NoSqlInjection`,
        title: `NoSql injection`,
        description: `Like a SQL Injection vulnerability, relies on weaknesses exposed by insufficient input validation, allowing an attacker to view or change backend data that they do not have the authorization to access.`,
        impact: `When a query, most usually supplied by an end-user, is not sanitized, the attacker is able to incorporate malicious input that runs an undesirable command on the database. This enables attackers to takeover servers and exploit vulnerabilities that extend beyond the traditional scope of SQL injection attacks, making NoSQL injections more serious than SQL injection in some circumstances.`,
        howToFix: `Never use where, mapReduce, or group operators with user input because these operators allow the attacker to inject JavaScript, second you can use mongo-sanitize library to sanitize MongoDB queries against query selector injections`,
        references: `https://knowledge-base.offensive360.com/NoSQLInjection/`,
        group: `Injection`,
    },
    {
        id: `AutoEscape`,
        title: `Auto Escape`,
        description: `Disabling auto-escaping in template engines is risky.Auto-escaping is not a magical feature that will eliminate all cross-site scripting attacks; it depends on the strategy used and the context. For example, a \\&quot;html auto-escaping\\&quot; strategy (which only transforms html characters into html entities) will not be relevant when variables are used in an html attribute because the &apos;:&apos; character is not escaped, allowing an attack to occur.`,
        impact: `Templates are used to display web content, and dynamic variables in templates are either from untrusted sources or are user-controlled inputs is a security risk. There is a risk if no local mechanism in place to verify or sanitize the inputs.`,
        howToFix: `Enable auto-escaping by default and continue to monitor the usage of inputs to ensure that the auto-escaping approach chosen is the correct one.`,
        references: `https://owasp.org/Top10/A03_2021-Injection/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `DYNAMIC_CODE_EXECUTION`,
        title: `Dynamic Code Execution`,
        description: `At run-time, attackers can execute malicious code by interpreting user-controlled instructions.`,
        impact: `Any externally given values used to create the code should be neutralized by applications that execute code dynamically. If this is not done, an attacker may be able to run arbitrary code. This might allow for a variety of dangerous attacks, such as accessing/modifying critical information or gaining complete system access.`,
        howToFix: `Whitelisting of permissible values or casting to safe types should be used as a mitigating approach.`,
        references: `https://knowledge-base.offensive360.com/DynamicCodeExecution`,
        group: `Injection`,
    },
    {
        id: `SSRF`,
        title: `Server Side Request Forgery`,
        description: `SSRF is a type of attack that employs an application to communicate with the internal/external network or the system itself. Forging attacks on server-side requests should be avoided.`,
        impact: `User-supplied data, such as URL parameters, POST data payloads, or cookies, should always be regarded as untrustworthy and contaminated. Requests from user-controlled data might allow attackers to conduct arbitrary internal network requests or modify their original meaning, allowing them to retrieve or delete sensitive information.`,
        howToFix: `The issue might be alleviated in one of the following ways:\\r\\nValidate the user-supplied data needed to generate the request, such as the URL and headers.\\r\\nRedesign the program such that it does not send requests depending on user-supplied data.`,
        references: `https://knowledge-base.offensive360.com/ServerSideRequestForgery%28SSRF%29/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `InsecureArchivePHP`,
        title: `Insecure Archive`,
        description: `Unsecure archive vulnerability refers to a security issue that arises when archives are not securely handled. Archives, such as ZIP or TAR files, can contain potentially harmful files, such as executables, scripts, or configuration files, that can be used to compromise the security of a system. If these archives are not handled securely, attackers can exploit this vulnerability to gain unauthorized access, execute malicious code, or perform other malicious actions.`,
        impact: `If an attacker is able to exploit the unsecure archive vulnerability, they can potentially execute malicious code, steal sensitive data, or compromise the security of the system. For example, an attacker could use a specially crafted archive file to inject malicious code into the system, which can then be used to steal login credentials, access sensitive files, or launch further attacks.`,
        howToFix: `To mitigate this risk, it is recommended to use secure archive handling practices. This includes validating the contents of the archive, limiting the file types that can be extracted, and ensuring that any extracted files are stored securely. Additionally, archives should only be handled by authorized users or scripts, and should be deleted once they are no longer needed.`,
        references: `https://rules.sonarsource.com/php/RSPEC-5042`,
        group: `BrokenAccessControl`,
    },
    {
        id: `UNSAFE_HTTP_METHOD`,
        title: `Unsafe Http Method`,
        description: `When performing a read-only action, such as obtaining information, an HTTP method is safe. An unsafe HTTP method, on the other hand, is used to modify the state of an application, such as updating a user's profile on a web application. POST, PUT, and DELETE are examples of common unsafe HTTP methods.`,
        impact: `Allowing dangerous HTTP methods to conduct a specific activity on a web application may have an influence on its security; for example, CSRF safeguards frequently only cover activities done by unsafe HTTP methods.`,
        howToFix: `The allowed HTTP methods for all routes/controllers in an application should be explicitly stated, and safe HTTP methods should only be used to execute read-only actions.`,
        references: `https://knowledge-base.offensive360.com/UnsafeHTTPMethod`,
        group: `BrokenAccessControl`,
    },
    {
        id: `UPLOAD_FILE_SIZE`,
        title: `Upload File Size`,
        description: `When a web server enables users to upload files to its filesystem without adequately checking things like their name, type, contents, or size, this is referred to as a file upload vulnerability. Failure to effectively enforce these limits may result in the use of even a basic picture upload facility to upload arbitrary and possibly harmful files instead. This might include server-side script files that allow for remote code execution.`,
        impact: `Failure to ensure that the file size falls below expected criteria may potentially enable a type of denial-of-service (DoS) attack, in which the attacker consumes all available disk space.`,
        howToFix: `In order to safeguard the file storage capacity, the application should define appropriate size restrictions for the upload service. If the system is going to extract or process the files, the file size restriction should be taken into account after file decompression and by utilizing safe ways to compute zip file size.`,
        references: `https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ClearTextProtocol`,
        title: `Clear Text Protocol`,
        description: `Clear-text protocols, such as ftp, telnet, or non-secure http, lack data encryption and the capacity to establish an authorized connection. It means that an attacker who can sniff network traffic can read, change, or distort the data being transmitted.`,
        impact: `Prior security levels might be effectively compromised by attackers if they:\\r\\nGetting around isolation mechanisms.\\r\\nPutting a network component at risk.\\r\\nObtaining the login information for an internal IAM account (either through a service account or a real person).`,
        howToFix: `Transmit application data via a secure, authenticated, and encrypted protocol such as TLS or SSH.\\r\\nWhen feasible, enable encryption of cloud component communications.\\r\\nWhen rendering web pages, configure your application to prevent mixed content.\\r\\nEnforce OS-level deactivation of all clear-text communications if it is available.`,
        references: `https://knowledge-base.offensive360.com/CleartextProtocols/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `DisabledSsl`,
        title: `Disabled SSL verification`,
        description: `NODE_TLS_REJECT_UNAUTHORIZED is an environment variable in Node.js that controls the strictness of server certificate validation. When set to '0', it disables TLS/SSL certificate validation, leaving applications vulnerable to man-in-the-middle attacks. Developers should avoid using this insecure setting in production environments and ensure proper certificate validation by using trusted CA certificates.`,
        impact: `Disabling TLS or SSL certificate validation can result man-in-the-middle attacks or forging certificates.`,
        howToFix: `Do not set the environment variable NODE_TLS_REJECT_UNAUTHORIZED=0`,
        references: `https://docs.boostsecurity.io/rules/code-node-disable-ssl.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `DBConfig`,
        title: `Misconfigured database`,
        description: `When relying on the password authentication mode for the database connection, a secure password should be chosen.`,
        impact: `The DB Config vulnerability is serious because it is an easy target for db attacks, allowing threat actors to access the databse when a weak password is used.`,
        howToFix: `Choose a strong password for the database and prevent hardcoding passwords in the source code.`,
        references: `https://knowledge-base.offensive360.com/MisconfiguredDatabase/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `DOS`,
        title: `Denial of Service`,
        description: `The goal of a Denial of Service (DoS) attack is to make a resource (site, program, or server) inaccessible for the purpose for which it was created. There are several techniques to render a service inaccessible to authorized customers, including tampering with network packets, programming, logical, or resource handling flaws, among others.`,
        impact: `If users may input a number that specifies how many of an object to construct on the application server, and if the server does not impose a hard upper limit on that value, the environment may run out of available memory.`,
        howToFix: `An organization should avoid taking actions that might make them a target of a DoS attack unless the benefits exceed the risks or mitigation procedures are in place.`,
        references: `https://owasp.org/www-community/attacks/Denial_of_Service`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `SmtpSSL`,
        title: `Misconfigured Smtp SSL`,
        description: `When SMTP commands are sent from an untrusted source, the SMTP server may execute malicious orders on the attacker's behalf.`,
        impact: `The program receives data from an untrusted source.\\r\\nThe data is utilized separately or as part of a string expressing a command that the program executes.`,
        howToFix: `It is critical to ensure that the server offers the correct certificate when establishing an SSL/TLS connection that is not subject to man-in-the-middle attacks.`,
        references: `https://cwe.mitre.org/data/definitions/295.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `UselessException`,
        title: `Useless Exception`,
        description: `Creating a new Exception without actually throwing it is pointless and is most likely the result of an error.`,
        impact: `The fail-open security check is a frequent security issue triggered by a useless exception.`,
        howToFix: `Check the exception and always throw it.`,
        references: `https://owasp.org/www-community/Improper_Error_Handling`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `MissingCrossAppRedirectsFormsAuthentication`,
        title: `Missing Cross App Redirects Forms Authentication`,
        description: `Enabling cross-application redirection during the login process opens the door to unvalidated redirect attacks through the returnUrl option. Set the enableCrossAppRedirects property to false to disable cross-application redirects.`,
        impact: `When cross-application redirection are enabled, your site is vulnerable to an attack that sends users to a malicious Web site while using your site's login page.`,
        howToFix: `If authorized users may be redirected to URLs in other Web applications, the property value is true; otherwise, it is false. The default value is false.`,
        references: `https://docs.microsoft.com/en-us/dotnet/api/system.web.security.formsauthentication.enablecrossappredirects?view=netframework-4.8`,
        group: `BrokenAccessControl`,
    },
    {
        id: `CKV_AWS_1`,
        title: `Hardcoded Artifactory Credentials`,
        description: `Artifactory is a Repository Manager that functions as a single access point organizing all of your binary resources including proprietary libraries, remote artifacts, and other 3rd party resources. Every organization needs to implement security policies so that people can only access internal resources that they are authorized to use`,
        impact: `This vulnerability will leak credentials which is stored environment variables. After that hacker or attacker can able to access to your repository by using those credentials.`,
        howToFix: `It recommended to prevent hard coding credentials, you can reference these credentials to use a value of an environment variable`,
        references: `https://medium.com/splunk-engineering/secure-credential-management-for-artifactory-with-vault-89316c7bf6ca

https://jfrog.com/whitepaper/java-12-reasons-to-use-a-binary-repository-manager-when-developing-with-java/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_2`,
        title: `Hardcoded AWS Access Keys`,
        description: `AWS Access Keys are long-term credentials for an IAM user or the AWS account root user. You can use access keys to sign programmatic requests to the AWS CLI or AWS API (directly or using the AWS SDK).

Access keys consist of two parts: an access key ID (for example, AKIAIOSFODNN7EXAMPLE) and a secret access key (for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY).`,
        impact: `This vulnerability will leak aws access keys which is hardcoded. After that hacker or attacker can able to access the aws resources by using those credentials.`,
        howToFix: `To store credentials for the AWS SDK for .NET and the AWS Tools for Windows PowerShell, we recommend that you use the SDK Store.

We recommend that in addition to using a password or biometric lock on your device, you create an IAM user to manage AWS resources.`,
        references: `https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_3`,
        title: `Hardcoded Azure Storage Account Access Keys`,
        description: `When you create a storage account, Azure generates two 512-bit storage account access keys. These keys can be used to authorize access to data in your storage account via Shared Key authorization. Leaking this key can thus compromise the concerned data. Your storage account access keys are similar to a root password for your storage account. You can use either of the two keys to access Azure Storage, but in general, it's a good practice to use the first key and reserve the use of the second key for when you are rotating keys.`,
        impact: `As a result, disclosing this key may compromise the data at stake. Your storage account access keys are the same as your storage account's root password. If the hacker obtains these access keys, he will be able to obtain all of the data.`,
        howToFix: `Microsoft recommends that you use Azure Key Vault to manage your access keys and that you regularly rotate and regenerate your keys. 

Using Azure Key Vault makes it easy to rotate your keys without interruption to your applications.

Avoid distributing access keys to other users, hard-coding them, or saving them anywhere in plain text that is accessible to others. 

Rotate your keys if you believe they may have been compromised.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_4`,
        title: `EBS snapshot is unencrypted`,
        description: `EBS snapshots must be encrypted, as they often include sensitive information, customer PII or CPNI. Amazon EBS encryption uses AWS Key Management Service (AWS KMS) customer master keys (CMK) when creating encrypted volumes and snapshots. With EBS encryption enabled, you no longer have to build, maintain, and secure your key management infrastructure.`,
        impact: `An attacker can access the sensitive information like customer PII or CPNI if the EBS snapshot is not encrypted. When generating encrypted volumes and snapshots, EBS encryption use AWS Key Management Service (AWS KMS) customer master keys (CMK).`,
        howToFix: `It is advised that you choose the unencrypted "EBS Snapshot" that needs to be encrypted and then click on the "Actions" button at the top panel and then select the "Copy" option from aws EBS Snapshots. Then, in the "Copy Snapshot" dialog box, check the box labeled "Encrypt this snapshot." Following the copy, choose the new EBS snapshot and click the "Create Volume" option. Then, choose the unencrypted volume and click the "Detach Volume" option. Then, choose the newly encrypted EBS volume and click the "Attach Volume" option.`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_5`,
        title: `Cloudant Credentials`,
        description: `Cloudant is a document-oriented and distributed database running on IBM Cloud. The service can be accessed via API calls. An optional authentication method requires a username and password. An alternate authentication method consists of a username and the corresponding API key.`,
        impact: `It saves the server password in its global configuration file unencrypted. Any one with access can see this password and able to access the cloudant dashboard.`,
        howToFix: `The IBM Cloudant team recommends that you use IAM access controls over IBM Cloudant legacy authentication whenever possible.`,
        references: `https://cloud.ibm.com/docs/Cloudant?topic=Cloudant-navigate-the-dashboard`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_7`,
        title: `Hardcoded  IBM Cloud IAM Key`,
        description: `The IBM Cloud Identity and Access Management (IAM) service manage keys that can give access to infrastructure API and to resources. You can generate an IAM token by using either your IBM Cloud API key or a service ID's API key. The API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account. This process is also used if you are developing an application that needs to work with other IBM Cloud services.`,
        impact: `This vulnerability will leak IBM Cloud Identity and Access Management (IAM) service manage keys which is hardcoded. After that hacker or attacker can able to access the IBM infrastructure by using those credentials.`,
        howToFix: `It is recommended to use a service ID API key to get an access token to be passed to each of the IBM Cloud services.`,
        references: `https://www.ibm.com/cloud/blog/introducing-ibm-cloud-iam-service-ids-api-keys


https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey&interface=api`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_8`,
        title: `Hardcoded IBM COS HMAC Credentials`,
        description: `IBM Cloud object storage (COS) is a format for storing unstructured data in the cloud. HMAC credentials consist of an Access Key and Secret Key paired for use with S3-compatible tools and libraries that require authentication. The IBM Cloud Object Storage API is a REST-based API for reading and writing objects. It uses IBM Cloud Identity and Access Management for authentication and authorization and supports a subset of the S3 API for easy migration of applications to IBM Cloud.`,
        impact: `This vulnerability will give access to the attacker to get almost certainly get access to the accounts. Thus attacker can able to do any harmful things with that account.`,
        howToFix: `It is suggested that the leaked secret be revoked. After that, clear the git history. Check the IBM Cloud Object Storage Accesser server logs to confirm that the key was not used during the compromised time.`,
        references: `https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-uhc-hmac-credentials-main`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_9`,
        title: `Hardcoded JSON Web Token`,
        description: `JSON Web Tokens are an open, industry-standard RFC 7519 method for representing claims securely between two parties. Once issued, access tokens and ID tokens cannot be revoked in the same way as cookies with session IDs for server-side sessions. As a result, tokens should be issued for relatively short periods, and then refreshed periodically if the user remains active.`,
        impact: `Using a forged token, an attacker may get access to the victim's account.`,
        howToFix: `It is recommended to use a secure connection during token transfer. prevent transferring user’s sensitive data in tokens, as, the attacker can capture a token and able to reuse this token and access the application on behalf of the user whose JWT has been captured, therefore, it's recommended to use secure connection during token transfer To limit the JWT lifetime and use refresh tokens.`,
        references: `https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_10`,
        title: `Hardcoded Secret Keyword`,
        description: `This check attempts to identify non-standard secrets by using standard keyword conventions used to annotate secrets in custom application code. The check utilizes the following keywords: 'api_?key', 'auth_?key', 'service_?key', 'account_?key', 'db_?key', 'database_?key', 'priv_?key', 'private_?key', 'client_?key', 'db_?pass', 'database_?pass', 'key_?pass', 'password', 'passwd', 'pwd', 'secret', 'contraseña', 'contrasena',`,
        impact: `If hard-coded passwords are used, it is nearly assured that malicious users will get access to the account in the issue.`,
        howToFix: `It is recommended not to share a secret key with anyone else. Avoid distributing access keys to other users, hard-coding them, or saving them anywhere in plain text that is accessible to others.`,
        references: `https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_11`,
        title: `Hardcoded Mailchimp Access Key`,
        description: `This check detects a Mailchimp access key referenced in your source code. The key enables an authenticated user to perform operational and management activities exposed by Mailchimp's developer API service.`,
        impact: `Take cautious not to reveal the key to the general public (such as in screenshots, videos, or help documentation). Malicious people will get access to the account otherwise.`,
        howToFix: `It is advised that the private api key be revoked. Then, on the Mailchimp dashboard, examine the API call logs to ensure the key was not used during the compromised time.`,
        references: `https://mailchimp.com/help/about-api-keys/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_AWS_12`,
        title: `Hardcoded NPM Token`,
        description: `The NPM access token can be used to authenticate to npm when using the API or the npm command-line interface (CLI). 

An access token is a hexadecimal string that you can use to authenticate, and which gives you the right to install and/or publish your modules.`,
        impact: `An attacker might get access to npm using the API or the npm command-line interface by using access key.`,
        howToFix: `It is advised that you discover and copy the ID of the token you wish to remove from the tokens table. Run command on the command line, substituting token with the ID of the token you wish to destroy.`,
        references: `https://docs.npmjs.com/creating-and-viewing-access-tokens

https://docs.npmjs.com/about-access-tokens`,
        group: ``,
    },
    {
        id: `CKV_AWS_13`,
        title: `Hardcoded Private Key`,
        description: `A private key, also known as a secret key, is a variable in cryptography that is used with an algorithm to encrypt and decrypt data

This check detects private keys by determining whether commonly specified key attributes are present in the analyzed string.`,
        impact: `An attacker might get access to the victim's account by using a hardcoded private key.`,
        howToFix: `It is recommended to use algorithms to generate a new private key that is as random as possible Encryption software are typically used to generate private key`,
        references: `https://searchsecurity.techtarget.com/definition/private-key`,
        group: ``,
    },
    {
        id: `CKV_AWS_14`,
        title: `Hardcoded Slack Token`,
        description: `Access tokens are the keys to the Slack platform. Tokens tie together all the scopes and permissions your app has obtained, allowing it to read, write, and interact. Slack API tokens can be created for both members and users.`,
        impact: `An attacker might get access to the victim's slack account by using a hardcoded slack token. As a result, attakcer has the ability to conduct evil actions.`,
        howToFix: `For added security, it is recommended to rotate these tokens periodically. Slack will automatically revoke old tokens if they remain unused for long periods.`,
        references: `https://api.slack.com/authentication/token-types#:~:text=Access%20tokens%20are%20the%20keys,types%20of%20access%20token%20available.`,
        group: ``,
    },
    {
        id: `CKV_AWS_15`,
        title: `Hardcoded SoftLayer Credentials`,
        description: `SoftLayer Technologies, Inc. (now IBM Cloud) was a dedicated server, managed hosting, and cloud computing provider, founded in 2005 and acquired by IBM in 2013. SoftLayer initially specialized in hosting workloads for gaming companies and startups but shifted focus to enterprise workloads after its acquisition.`,
        impact: `An attacker might get access to the victim's softlayer account by using a hardcoded credentials. As a result, attacker can access to IBM Cloud logs during the compromised period.`,
        howToFix: `It is suggested that the leaked secret be revoked. Then, examine IBM Cloud logs to check that the key was not used during the compromised time.`,
        references: `https://www.ibm.com/docs/en/spim/2.1.0?topic=integration-softlayer`,
        group: ``,
    },
    {
        id: `CKV_AWS_16`,
        title: `Square OAuth Secret`,
        description: `You can use Square APIs to manage resources on behalf of sellers. The OAuth API lets you request specific permissions from Square sellers to manage their resources and get OAuth tokens to call the Square APIs on their behalf. Using the access token and refresh token you receive using OAuth, you can build applications that integrate with Square.`,
        impact: `An attacker might get access to the victim's square account by using oauth secrets. As a result, attackers may be able to ask Square sellers for particular permissions to control their resources.`,
        howToFix: `It is suggested that the leaked secret be revoked. Then, on the OAuth page in the developer dashboard, change APPLICATION SECRET with the application secret.`,
        references: `https://developer.squareup.com/docs/oauth-api/overview`,
        group: ``,
    },
    {
        id: `CKV_AWS_17`,
        title: `Hardcoded Stripe Access Key`,
        description: `The secret key is used in your backend code to send any other request to Stripe's API Stripe authenticates your API requests using your account’s API keys. If you do not include your key when making an API request or use one that is incorrect or outdated, Stripe returns an error. Secret API keys should be kept confidential and only stored on your servers. Your account’s secret API key can perform any API request to Stripe without restriction.`,
        impact: `An attacker might get access to the victim's stripe account by using hardcoded stripe access keys. As a result, attackers may be able to make any API request on your behalf, such as charging or refunding your account.`,
        howToFix: `Users with Administrator privileges may access the API keys for a Stripe account by going to the Developers area of the Stripe dashboard and clicking on API Keys. You can revoke a limited key at any moment if you no longer require it (or if you fear it has been compromised). You may also adjust the key's degree of access by editing it.`,
        references: `https://stripe.com/docs/keys`,
        group: ``,
    },
    {
        id: `CKV_AWS_18`,
        title: `Hardcoded Twilio API Key`,
        description: `Twilio Access Tokens are short-lived tokens that you can use to authenticate Twilio Client SDKs like Voice, Conversations, Sync, and Video.

You create them on your server to verify a client’s identity and grant access to client API features. All tokens have a limited lifetime, configurable up to 24 hours. However, a best practice is to generate Access Tokens for the shortest amount of time feasible for your application.`,
        impact: `The attacker can utilize the secret key to initiate video or audio calls and charges, as well as acquire information about the specific account, such as its balance.`,
        howToFix: `It is recommended to not to use hardcoded api in web app or mobile apps. Users with Administrator privileges may access the API keys. You can revoke a limited key at any moment if you no longer require it (or if you fear it has been compromised). You may also adjust the key's degree of access by editing it.`,
        references: `https://www.twilio.com/docs/iam/keys/api-key`,
        group: ``,
    },
    {
        id: `CKV_AWS_19`,
        title: `Hex High Entropy String`,
        description: `Checkov calculates entropy levels using a Shannon Entropy calculator. 

The entropy levels of keys are important, as the more or less information required to determine unknown key variables can alter how difficult it is to crack. 

If a high-entropy string is detected, the string is printed to the screen.

This check scans the branch and evaluate the Shannon entropy for both the hexadecimal character set for every blob of text.`,
        impact: ``,
        howToFix: ``,
        references: ``,
        group: ``,
    },
    {
        id: `CKV_AWS_20`,
        title: `Bucket ACL public READ permission`,
        description: `Unprotected S3 buckets are one of the major causes of data theft and intrusions. An S3 bucket that allows READ access to everyone can provide attackers the ability to read object data within the bucket, which can lead to the exposure of sensitive data. The only S3 buckets that should be globally accessible for unauthenticated users or Any AWS Authenticated Users are those used for hosting static websites. Bucket ACL helps manage access to S3 bucket data.`,
        impact: `Because of this vulnerability, S3 buckets would be unsecured, which is one of the leading sources of data theft and invasions. An S3 bucket that gives everyone READ access can provide attackers the ability to read object data.`,
        howToFix: `We recommend not making AWS S3 buckets publicly accessible for READ actions to protect S3 data from unauthorized users and expose sensitive data to public access.`,
        references: `https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_22`,
        title: `SageMaker is unencrypted at rest`,
        description: `Amazon SageMaker enables you to pass a KMS key to SageMaker notebooks, securing the following resources:

- Storage volume
- Processing jobs
- Training jobs
- Hyperparameter tuning jobs
- Batch transform jobs
- Endpoints


By applying encryption at-rest you ensure that the data stored on your AWS SageMaker notebook instances meet regulatory requirements and protect your SageMaker data at rest.`,
        impact: `Unencrypted at rest in Sagemaker will leak the data that stored in AWS SageMaker notebook instances. Attacker can able to access those data.`,
        howToFix: `It is advised that you log in to the AWS administration console. Launch the Amazon Sagemake console. Then, choose Notebook instances, and last, click Create Notebook Instance. Then, on the Create Notebook Instance page, provide the necessary information. The Encryption key enables you to use an AWS Key Management Service (AWS KMS) key to encrypt data on the ML storage volume associated to the notebook instance. If you want to keep important data on the ML storage volume, consider encrypting it.`,
        references: `https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_23`,
        title: `Security group rule Info`,
        description: `Infos can be up to 255 characters long and can be set and viewed from the AWS Management Console, AWS Command Line Interface (CLI), and the AWS APIs.`,
        impact: `Security group rule Info should be descriptive. Otherwise, it leads to a rise in development faults.`,
        howToFix: `We recommend you add descriptive text to each of your Security Group Rules clarifying each rule's goals, this helps prevent developer errors.`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_24`,
        title: `AWS Security Group allows traffic on SSH port 22`,
        description: `Security groups are stateful and provide filtering of ingress/egress network traffic to AWS resources.`,
        impact: `Unrestricted ingress access to port 22 does allow to connectivity to remote console services.`,
        howToFix: `We recommend that security groups do not allow unrestricted ingress access to port 22. 

Removing unfettered connectivity to remote console services, such as SSH, reduces a server's exposure to risk.`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_25`,
        title: `Security Groups allow ingress from 0.0.0.0/0 to port 3389`,
        description: `Security groups are stateful and provide filtering of ingress/egress network traffic to AWS resources.`,
        impact: `Unrestricted ingress access to port 3389 does allow to connectivity to remote console services.`,
        howToFix: `We recommend that security groups do not allow unrestricted ingress access to port 3389. 

Removing unfettered connectivity to remote console services, such as SSH, reduces a server's exposure to risk.`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/authorizing-access-to-an-instance.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_27`,
        title: `AWS SQS server side encryption disabled`,
        description: `Amazon Simple Queue Service (SQS) provides the ability to encrypt queues so sensitive data is passed securely. It uses server-side-encryption (SSE) and supports AWS-managed Customer Master Key (CMK), as well as self-created/self-managed keys. SSE encrypts only the body of the message, with queue metadata and message metadata out of scope, and backlogged messages not encrypted. If you operate in a regulated market, such as HIPAA for healthcare, PCI DSS for finance, or FedRAMP for government, you need to ensure sensitive data messages passed in this service are encrypted at rest.`,
        impact: `Message data in a queue would not be safeguarded. Sensitive data transmissions are transmitted in an unencrypted format.`,
        howToFix: `We recommend you encrypt Data Queued using SQS.`,
        references: `https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_29`,
        title: `AWS ElastiCache Redis cluster with encryption for data at rest disabled`,
        description: `ElastiCache for Redis offers default encryption at rest as a service, as well as the ability to use your own symmetric customer-managed customer master keys in AWS Key Management Service (KMS). ElastiCache for Redis at-rest encryption encrypts the following aspects: - Disk during sync, backup and swap operations - Backups stored in Amazon S3`,
        impact: `If you disable AWS ElastiCache Redis cluster encryption for data at rest, your data is not safe.`,
        howToFix: `it's recommended to enable encryption in Elasticache for data at rest`,
        references: `https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/at-rest-encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_30`,
        title: `In-transit encryption AWS ElastiCache Redis cluster disabled`,
        description: `ElastiCache for Redis offers optional encryption in transit. In-transit encryption provides an additional layer of data protection when transferring data over standard HTTPS protocol. In-transit encryption can only be enabled on Redis replication groups at the time of their creation. ElastiCache for Redis in-transit encryption enables the following features: - Encrypted connections: server and client connections are Secure Socket Layer (SSL) encrypted. - Encrypted replication: data transfer between primary replicas is encrypted. - Server authentication. - Client authentication.`,
        impact: `Your data is not safe in transit if AWS ElastiCache Redis cluster encryption is deactivated. Amazon ElastiCache and Amazon EC2 do not provide methods to protect your data on the server from unwanted access.`,
        howToFix: `It is advised to fix it in the ElastiCache console during runtime. Using the ElastiCache console, establish a replication group. Redis should be the engine. Engine version 3.2.6, 4.0.10, or later is required. Yes should be selected from the Encryption at Rest list.`,
        references: `https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/in-transit-encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_31`,
        title: `ElastiCache Replication Group is unencrypted in-transit`,
        description: `In Amazon ElastiCache, the Redis authentication command asks users to enter a password before being granted permission to execute Redis commands on a password-protected server. Authentication can only be enabled when you are creating clusters with the in-transit encryption option enabled. When Redis authentication is enabled, users are required to pass through an additional layer of authentication before gaining access to the server and gaining permission to perform actions.`,
        impact: `With an authentication token, data stored in the ElastiCache Replication Group is not secure in transit.`,
        howToFix: `We recommend that all data stored in the ElastiCache Replication Group is securely encrypted in transit with an authentication token.`,
        references: `https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/in-transit-encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_32`,
        title: `AWS ECR repository publicly exposed`,
        description: `AWS ECR is a managed Docker registry service that simplifies Docker container image management. The ECR repository is a collection of Docker images available on AWS. Access control to ECR repositories is governed using resource-based policies. A public ECR repository can expose internal Docker images that contain confidential business logic.`,
        impact: `Internal Docker images containing secret business logic can be exposed through a public ECR repository.`,
        howToFix: `We recommend you do not allow unrestricted public access to ECR repositories to help avoid data leakage.`,
        references: `https://docs.aws.amazon.com/AmazonECR/latest/public/ecr-public-ug.pdf`,
        group: ``,
    },
    {
        id: `CKV_AWS_34`,
        title: `AWS CloudFront distribution using SSL protocols for HTTPS communication`,
        description: `DynamoDB point-in-time recovery (PITR) is an automatic backup service for DynamoDB table data that helps protect your DynamoDB tables from accidental write or delete operations. 

It must use HTTPS. Once enabled, PITR provides continuous backups that can be controlled using various programmatic parameters. 

PITR can also be used to restore table data from any point in time during the last 35 days, as well as any incremental backups of DynamoDB tables.`,
        impact: `If the Cloudfront distribution ViewerProtocolPolicy is not set to HTTPS, the security of the DynamoDB point-in-time recovery (PITR) service is at risk.`,
        howToFix: `We recommend you ensure Cloudfront distribution ViewerProtocolPolicy is set to HTTPS.`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-connection-fails/`,
        group: ``,
    },
    {
        id: `CKV_AWS_35`,
        title: `AWS CloudTrail logs are unencrypted CMKs`,
        description: `AWS CloudTrail is a web service that records AWS API calls for an account and makes those logs available to users and resources in accordance with IAM policies. AWS Key Management Service (KMS) is a managed service that helps create and control the encryption keys used to encrypt account data. It uses Hardware Security Modules (HSMs) to protect the security of encryption keys. CloudTrail logs can be configured to leverage server-side encryption (SSE) and KMS customer-created master keys (CMK) to further protect CloudTrail logs.`,
        impact: `Log data security is at risk if CloudTrail logs are not configured or encrypted to use SSE-KMS. This log data is accessible to any attacker.`,
        howToFix: `We recommend that CloudTrail logs are configured to use SSE-KMS, providing additional confidentiality controls on log data. 

A given user must have S3 read permission on the corresponding log bucket and must be granted decrypt permission by the CMK policy.`,
        references: `https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_36`,
        title: `AWS CloudTrail log validation disabled in all regions`,
        description: `CloudTrail log file validation creates a digitally signed digest file containing a hash of each log that CloudTrail writes to S3. These digest files can be used to determine whether a log file was changed, deleted, or unchanged after CloudTrail delivered the log. It is recommended that file validation be enabled on all CloudTrails.`,
        impact: `Disabling log file validation does not provide additional integrity checks for CloudTrail logs.`,
        howToFix: `We recommend enabling log file validation to provide additional integrity checking of CloudTrail logs.`,
        references: `https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-enabling.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_37`,
        title: `AWS EKS control plane logging is disabled`,
        description: `Amazon EKS control plane logging provides valuable diagnostic logs for all control plane related actions. Logging streams include cover for the following modules:

Kubernetes API server component logs (api)‚ see kube-apiserver in the Kubernetes documentation.

Audit (audit). Kubernetes audit logs provide a record of the individual users, administrators, or system components that have affected your cluster. For more information, see Auditing in the Kubernetes documentation.

Authenticator (authenticator). For more information, see authorization in the Kubernetes documentation.

Controller manager (controllerManager). For more information, see kube-controller-manager in the Kubernetes documentation.
Scheduler (scheduler). For more information, see kube-scheduler in the Kubernetes documentation.

Amazon EKS control plane logging is used to detect anomalous configuration activity by your customer. It is used to track configuration changes conducted manually and programmatically, and trace back unapproved changes.`,
        impact: `You cannot detect suspicious configuration activity by your customer if Amazon EKS control plane logging is not enabled.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon EKS console. Then, to view your cluster details, click the name of the cluster. Then, go to Logging and press the Update button. Select whether the log type should be Enabled for each individual log stream, then click Update.`,
        references: `https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_38`,
        title: `AWS EKS cluster security group overly permissive to all traffic`,
        description: `Amazon EKS creates an endpoint for any managed Kubernetes API server to communicate with the cluster. By default, this API server endpoint is public to the internet. 

Access to it should be regulated using AWS IAM and native Kubernetes RBAC.`,
        impact: `All communication between worker nodes and APIs that takes place within your VPC will be made public in your Kubernetes API server. The possibility of an internet-based attack on your service will increase.`,
        howToFix: `We recommend that your Kubernetes API server remains private so that all communication between worker nodes and APIs stays within your VPC. 

If public access is needed, at a minimum, restrict the IP addresses that can access your API server from the internet to reduce the potential attack surface. 

Ensure your Amazon EKS public endpoint is not accessible to 0.0.0.0/0.`,
        references: `https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_39`,
        title: `AWS EKS cluster endpoint access enabled publicly`,
        description: `Amazon EKS creates an endpoint for any managed Kubernetes API server to communicate with the cluster. 

This API server endpoint is public to the internet by default. Access to it should be regulated using AWS IAM and native Kubernetes RBAC.`,
        impact: `All communication between worker nodes and APIs stays within your VPC will be public in your Kubernetes API server. The potential attack from the internet to your service will be increased.`,
        howToFix: `We recommended that your Kubernetes API server remains private so that all communication between worker nodes and APIs stays within your VPC. 

If public access is needed, restrict the IP addresses that can access your API server from the internet to reduce the potential attack surface.`,
        references: `https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_40`,
        title: `IAM policies are only attached to Groups and Roles`,
        description: `By default, IAM users, groups, and roles have no access to AWS resources. IAM policies are how privileges are granted to users, groups, or roles. Assigning privileges at the group or role level reduces the complexity of access management as the number of users increases. Reducing access management complexity may in turn reduce the opportunity for a principal to inadvertently receive or retain excessive privileges.`,
        impact: `When IAM policies are applied directly to users, the security of access management improves.`,
        howToFix: `We recommend that IAM policies are applied directly to groups and roles, but not to users.`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_policies.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_41`,
        title: `Hardcoded AWS access keys and secrets in infrastructure`,
        description: `When accessing AWS programmatically users can select to use an access key to verify their identity and the identity of their applications. An access key consists of an access key ID and a secret access key. Anyone with an access key has the same level of access to AWS resources.`,
        impact: `If access keys and secrets in infrastructure are hardcoded, an attacker can access AWS programmatically and obtain access to AWS resources.`,
        howToFix: `We recommend you protect access keys and keep them private. Specifically, do not store hard-coded keys and secrets in infrastructures such as code, or other version-controlled configuration settings.`,
        references: `https://aws.amazon.com/blogs/security/how-to-eliminate-the-need-for-hardcoded-aws-credentials-in-devices-by-using-the-aws-iot-credentials-provider/`,
        group: ``,
    },
    {
        id: `CKV_AWS_42`,
        title: `AWS EFS with encryption for data at rest is disabled`,
        description: `Amazon Elastic File System (Amazon EFS) is a simple, scalable file storage solution for AWS services and on-premises resources. Amazon EFS is built to elastically scale on-demand. It grows and shrinks automatically as files are added and removed. It is essential to encrypt your Amazon EFS to protect data and metadata against unauthorized access. Encrypting your Amazon EFS also fulfills compliance requirements for data-at-rest encryption when file systems are used in production systems.`,
        impact: `If at-rest encryption is removed, data and metadata will be exposed in Amazon Elastic File System (Amazon EFS).`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon Elastic File System console. Then, click Create file system to launch the file system creation wizard. Then, choose Enable encryption. To activate encryption with your own KMS CMK key, pick the name of your AWS Key from the KMS master key list.`,
        references: `https://docs.aws.amazon.com/efs/latest/ug/encryption-at-rest.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_43`,
        title: `Unencrypted AWS Kinesis streams using SSE`,
        description: `Amazon Kinesis Data Firehose is a streaming data pipeline service that can route messages to destinations such as S3, Redshift Elasticsearch, and others. It can also be used to transform data properties before streaming to a defined destination. Kinesis enables server-side data encryption if the data stream contains sensitive information. When sending data from a producer to a data stream Kinesis encrypts the data using an AWS KMS key before storing the data at rest.`,
        impact: `Unencrypted AWS Kinesis streams employing server-side encryption (SSE) risk the security of the data stream, which contains sensitive information.`,
        howToFix: `We recommend you ensure Kinesis streams are encrypted using server-side encryption (SSE).`,
        references: `https://docs.aws.amazon.com/streams/latest/dev/what-is-sse.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_44`,
        title: `Unencrypted Neptune storage`,
        description: `Amazon Neptune is a fully-managed graph database service for building and running applications that work with connected datasets. Neptune supports graph query languages such as Apache TinkerPop Gremlin and W3C’s SPARQL. Neptune also supports recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security. Encryption of Neptune storage protects data and metadata against unauthorized access. It also fulfills compliance requirements for data-at-rest encryption of production file systems. Encryption for an existing database cannot be added or changed after it is created.`,
        impact: `Neptune storage does not secure data and information from unwanted unencryption access. It does not meet the standards for data-at-rest compliance.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon Neptune console. Then, click Launch DB Instance to launch the Launch DB Instance wizard. After that, go to the Specify DB specifics page to adjust the parameters for your Neptune DB cluster. To activate encryption for a new Neptune DB instance, go to the Neptune console's Enable encryption section and select Yes.`,
        references: `https://docs.aws.amazon.com/neptune/latest/userguide/encrypt.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_45`,
        title: `Lambda function environment variables secret exposed`,
        description: `A function's metadata includes environment variable fields that contain small configurations that help the function execute. 

These variables can be accessed by any entity with the most basic read-metadata-only permissions, and cannot be encrypted. 

Lambda runtime makes environment variables available without passing secrets in code or environment variables.`,
        impact: `Secret keys are freely accessible, increasing the danger of data exposure to other parties.`,
        howToFix: `We recommend you remove secrets from unencrypted places, especially if they can be easily accessed, to reduce the risk of exposing data to third parties.`,
        references: `https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_46`,
        title: `EC2 user data exposed secrets`,
        description: `User Data is a metadata field of an EC2 instance that allows custom code to run after the instance is launched. 

It contains code exposed to any entity which has the most basic access to EC2, even read-only configurations. This code is not encrypted.`,
        impact: `Secret keys are easily accessible and increase the danger of passwords, private keys, and other sensitive information being revealed to other parties.`,
        howToFix: `Removing secrets from easily-accessed unencrypted places reduces the risk of passwords, private keys, and more from being exposed to third parties.`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_47`,
        title: `Unencrypted DAX at rest`,
        description: `Amazon DynamoDB Accelerator (DAX) encryption at rest provides an additional layer of data protection, helping secure your data from unauthorized access to the underlying storage. With encryption at rest, the data persisted by DAX on disk is encrypted using 256-bit Advanced Encryption Standard (AES-256). DAX writes data to disk as part of propagating changes from the primary node to read replicas. DAX encryption at rest automatically integrates with AWS KMS for managing the single service default key used to encrypt clusters.`,
        impact: `Unencryption at rest using Amazon DynamoDB Accelerator (DAX) does not offer an extra layer of data security. It also does not contribute to the security of your data by preventing unwanted access to underlying storage.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon DynamoDB console. Then, in the navigation pane on the left side of the console, choose and build Clusters under DAX. Then, in the Cluster name field, add a brief name for your cluster. Make sure Enable encryption is chosen in Encryption. Select Launch cluster after selecting the IAM role, subnet group, security groups, and cluster settings.`,
        references: `https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAXEncryptionAtRest.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_49`,
        title: `IAM policy documents allow * (asterisk) as a statement's action`,
        description: `The Action element describes the specific action or actions that will be allowed or denied. Statements must include either an Action or Not Action element. Each AWS service has its own set of actions that describe tasks that can be performed with that service. Specify a value using a namespace that identifies a service, for example, iam, ec2 sqs, sns, s3, followed by the name of the action to be allowed or denied. The name must match an action that is supported by the service.`,
        impact: `Given the policy document setting, this degree of access might possibly offer unwanted and unregulated access to anybody.`,
        howToFix: `We recommend you do not allow "*" (all resource) statements as part of action elements. This level of access could potentially grant unwanted and unregulated access to anyone given this policy document setting. We recommend you write a refined policy describing the specific action allowed or required by the specific policyholder.`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_50`,
        title: `AWS Lambda functions with tracing disabled`,
        description: `X-Ray tracing in lambda functions allows you to visualize and troubleshoot errors and performance bottlenecks, and investigate requests that resulted in an error.`,
        impact: `Disabling X-Ray tracing in Lamda functions prevents the visualization and troubleshooting of faults and performance bottlenecks, as well as the investigation of requests that resulted in an error.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon Lambda console. Then, open the function to be modified and navigate to the Configuration tab. Then, on the left, access the Monitoring and operations tools and click modify. Enable Active tracing for AWS X-ray and save your changes.`,
        references: `https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_51`,
        title: `Mutable ECR image tags`,
        description: `Amazon ECR supports immutable tags, preventing image tags from being overwritten. In the past, ECR tags could have been overwritten, this could be overcome by requiring users to uniquely identify an image using a naming convention.

Tag Immutability enables users can rely on the descriptive tags of an image as a mechanism to track and uniquely identify images. By setting an image tag as immutable, developers can use the tag to correlate the deployed image version with the build that produced the image.`,
        impact: `For non-immutable ECR image tags, users cannot rely on descriptive tags as a means to monitor and uniquely identify photos.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon ECR console. Then, using the radio option, choose a repository and modify it. Then, turn on the Tag immutability toggle.`,
        references: `https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_54`,
        title: `S3 bucket block public policy Disabled`,
        description: `S3 Block Public Access provides controls across an entire AWS Account or at the individual S3 bucket level to ensure that objects never have public access, now and in the future. Public access is granted to buckets and objects through access control lists (ACLs), bucket policies, or both. To ensure that public access to all your S3 buckets and objects is blocked, turn on the block all public access at the account level. These settings apply account-wide for all current and future buckets.`,
        impact: `It can not protect against future attempts to use ACLs to make buckets or objects public.  When an application tries to upload an object with a public ACL this setting will be blocked for public access.`,
        howToFix: `AWS recommends that you turn on Block all public access, but before applying any of these settings, ensure that your applications will work correctly without public access. 

If you require some level of public access to your buckets or objects, you can customize the individual settings below to suit your specific storage use cases.`,
        references: `https://aws.amazon.com/s3/features/block-public-access/#:~:text=In%20order%20to%20ensure%20that,all%20current%20and%20future%20buckets.`,
        group: ``,
    },
    {
        id: `CKV_AWS_55`,
        title: `S3 bucket IgnorePublicAcls set to False`,
        description: `The IgnorePublicAcls setting causes S3 to ignore all public ACLs on a bucket and any objects that it contains. 

Enabling this setting does not affect the persistence of any existing ACLs and does not prevent new public ACLs from being set.

This setting will block public access granted by ACLs while still allowing PUT Object calls that include a public ACL.`,
        impact: `If IgnorePublicAcls is set to False, it will not restrict public access given by ACLs while still permitting PUT Object requests that include a public ACL.`,
        howToFix: `We recommend you to set  S3 bucket IgnorePublicAcls to True,`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_56`,
        title: `S3 bucket RestrictPublicBucket set to False`,
        description: `The S3 Block Public Access configuration enables specifying whether S3 should restrict public bucket policies for buckets in this account. Setting RestrictPublicBucket to TRUE restricts access to buckets with public policies to only AWS services and authorized users within this account. Enabling this setting does not affect previously-stored bucket policies. Public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.`,
        impact: `If this element is set to TRUE, Amazon S3 will deny PUT Bucket policy requests if the provided bucket policy enables public access.`,
        howToFix: `We recommend you to set S3 bucket RestrictPublicBucket to True,`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_57`,
        title: `S3 bucket WRITE permissions publicly allowed`,
        description: `By default, all Amazon S3 buckets and objects are private. Only the resource owner which is the AWS account that created the bucket can access that bucket. The resource owner can, however, choose to grant access permissions to other resources and users. One way to do this is to write an access policy. If AWS Config creates an Amazon S3 bucket for you automatically (for example, if you use AWS Config console to set up your delivery channel), these permissions are automatically added to the Amazon S3 bucket. However, if you specify an existing Amazon S3 bucket, you must ensure that the S3 bucket has the correct permissions. An object does not inherit the permissions from its bucket. For example, if you create a bucket and grant write access to a user, you can't access that user’s objects unless the user explicitly grants you access.`,
        impact: `S3 container Data is at risk when WRITE permissions are made public. Anyone has the ability to modify the data stored in an S3 bucket.`,
        howToFix: `We recommend you to assign the WRITE permission to the user as per need`,
        references: `https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_58`,
        title: `AWS EKS cluster secrets unencrypted`,
        description: `Secrets in Kubernetes enable managing sensitive information such as passwords and API keys using Kubernetes-native APIs. When creating a secret resource the Kubernetes API server stores it in etcd in a base64 encoded form. For example, using kubectl to create a secret, EKS can encrypt etcd volumes at disk-level using AWS-managed encryption keys. AWS encourages using envelope encryption to encrypt a key with another key. The motivation is security best practice. Applications store sensitive data as part of a defense in depth security strategy. A master key is stored in AWS KMS that is then utilized for data key generation in the Kubernetes API server. It is also used to encrypt/decrypt sensitive data stored in Kubernetes secrets.`,
        impact: `Secrets in Kubernetes, such as passwords and API keys used with Kubernetes-native APIs, are vulnerable to encryption failure. As a result, sensitive information will be made public.`,
        howToFix: `We recommend to enable encryption for AWS EKS cluster secrets`,
        references: `https://aws.amazon.com/blogs/containers/using-eks-encryption-provider-support-for-defense-in-depth/`,
        group: ``,
    },
    {
        id: `CKV_AWS_59`,
        title: `API gateway methods publicly accessible`,
        description: `AWS API gateway methods are by default publicly accessible. All of the methods configured as part of the API should be protected by an Authorizer or an API key. Unprotected APIs can lead to data leaks and security breaches. API Gateway private endpoints are made possible via AWS PrivateLink interface VPC endpoints. Interface endpoints work by creating elastic network interfaces in subnets that you define inside your VPC. Those network interfaces then provide access to services running in other VPCs, or to AWS services such as API Gateway. When configuring your interface endpoints, you specify which service traffic should go through them. API Gateway as a fully managed service runs its infrastructure in its VPCs. When you interface with API Gateway publicly accessible endpoints, it is done through public networks. When they are configured as private, the public networks are not made available to route your API. Instead, your API can only be accessed using the interface endpoints that you have configured.`,
        impact: `Unprotected API gateway can lead to data leaks and security breaches.`,
        howToFix: `We recommend you configure a custom authorizer or an API key for every method in the API Gateway.`,
        references: `https://aws.amazon.com/blogs/compute/introducing-amazon-api-gateway-private-endpoints/

https://gsl.dome9.com/D9.AWS.NET.52.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_60`,
        title: `IAM role allows only specific services or principles to be assumed`,
        description: `The IAM role is an identity with specific permissions. An IAM role is similar to an IAM user: it has an AWS identity with permission policies that determine what the identity can and cannot do in AWS. When a user assumes a role, it is provided with temporary security credentials for a bounded session. The list of principals who can assume a role should be limited as much as possible, and should not include "*", meaning that any authenticated identity across all of AWS can assume the role.`,
        impact: `Unauthenticated identities from across AWS can access the role. Any user with a "*" in its role has full access to all services and permissions.`,
        howToFix: `We recommend that you define fine-grained roles for specific services or principles. 

For example, when setting up an AWS service role it is recommended to include only the permissions required for the service to access the AWS resources required. 
Alternatively, you can use a principal as an entity that can perform actions and access resources. 

The main benefit of the principal entity is to limit the use of wildcards in the policy document.`,
        references: `https://aws.amazon.com/blogs/security/how-to-use-trust-policies-with-iam-roles/`,
        group: ``,
    },
    {
        id: `CKV_AWS_61`,
        title: `AWS IAM policy role permission across all services`,
        description: `The IAM role is an identity with specific permissions. An IAM role is similar to an IAM user, It is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. When a user assumes a role, it provides temporary security credentials for a bounded session.`,
        impact: `Unauthenticated identities from across AWS can access the role. All services and permissions are available to all users.`,
        howToFix: `We recommend that you define fine-grained roles for specific services or principles. 

For example, when settings up an AWS service role it is recommended to include only the permissions required for the service to access the AWS resources required. Alternatively, you can use a Principal as an entity in AWS that can perform actions and access resources. 

The main benefit of the Principal entity is to limit the use of wildcards in the policy document.`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_62`,
        title: `AWS IAM policy administrative privileges`,
        description: `IAM policies should grant a minimum set of permissions, adding more as required, rather than granting full administrative privileges. Providing full administrative privileges when not required exposes resources to potentially unwanted actions.`,
        impact: `When full administrator privileges are granted when they are not necessary, resources are exposed to potentially harmful acts.`,
        howToFix: `IAM policies are how privileges are granted to users, groups, or roles. Determine what users need to do and then craft policies for them that let the users perform only those tasks, instead of granting full administrative privileges.`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_policies.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_63`,
        title: `Excessive Privileges in AWS IAM Policies`,
        description: `IAM policies should grant a minimum set of permissions, adding more as required, rather than granting full administrative privileges. Providing full administrative privileges when not required exposes resources to potentially unwanted actions. Do not set the Principal to an asterisk (*) in any key policy statement that allows permissions unless you use conditions to limit the key policy. An asterisk gives every identity in every AWS account permission to use the KMS key unless another policy statement explicitly denies it. Users in other AWS accounts just need corresponding IAM permissions in their accounts to use the KMS key.`,
        impact: `When full administrator privileges are granted when they are not needed, resources are exposed to potentially harmful actions.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. In the navigation pane, choose Policies, and then search for the policy name identified in the audit step. Then, choose the policy that needs to be removed. Then, under the policy action menu, choose Detach first. Then, select all Users, Groups, and Roles to whom this policy is related, and then click Detach Policy. Then, from the policy action menu, pick Detach.`,
        references: `https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_64`,
        title: `AWS Redshift cluster unencrypted using CMK`,
        description: `In Amazon Redshift, you can enable database encryption for your clusters to help protect data at rest. When you enable encryption for a cluster, the data blocks and system metadata are encrypted for the cluster and its snapshots. You can enable encryption when you launch your cluster, or you can modify an unencrypted cluster to use AWS Key Management Service (AWS KMS) encryption. To do so, you can use either an AWS-managed key or a customer-managed key. When you modify your cluster to enable AWS KMS encryption, Amazon Redshift automatically migrates your data to a new encrypted cluster. Snapshots created from the encrypted cluster are also encrypted. You can also migrate an encrypted cluster to an unencrypted cluster by modifying the cluster and changing the Encrypt database option`,
        impact: `Data saved in the Redshift cluster is not safe for unencrypted at rest. As a result, the security risk will grow.`,
        howToFix: `We recommend all data stored in the Redshift cluster is securely encrypted at rest.`,
        references: `https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_65`,
        title: `ECS cluster container insights disabled`,
        description: `Container Insights can be used to collect, aggregate, and summarize metrics and logs from containerized applications and microservices. They can also be extended to collect metrics at the cluster, task, and service levels. 

Using Container Insights allows you to monitor, troubleshoot, and set alarms for all your Amazon ECS resources. It provides a simple to use native and fully managed service for managing ECS issues.`,
        impact: `Container insights of a cluster that has been disabled cannot be used to gather, aggregate, and summarize metrics and logs from containerized apps and microservices.`,
        howToFix: `We recommend that for existing clusters you use the AWS CLI and for new clusters, you use either the Amazon ECS console or the AWS CLI.`,
        references: `https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_66`,
        title: `CloudWatch log groups specify retention days`,
        description: `Enabling CloudWatch retention establishes how long log events are kept in AWS CloudWatch Logs. Retention settings are assigned to CloudWatch log groups and the retention period assigned to a log group is applied to their log streams.

Any data older than the current retention setting is deleted automatically. You can change the log retention for each log group at any time.

Log data is stored in CloudWatch Logs indefinitely by default, l. This may incur high unexpected costs, especially when combined with other forms of logging.`,
        impact: `Disabling CloudWatch retention has no effect on how long log events are stored in AWS CloudWatch Logs.`,
        howToFix: `We recommend you configure how long to store log data for in a log group to balance cost with compliance retention requirements.`,
        references: `https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_67`,
        title: `AWS CloudTrail is enabled in all regions`,
        description: `AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service. CloudTrail provides a history of AWS API calls for an account, including API calls made via the Management Console, SDKs, command-line tools, and higher-level AWS services such as CloudFormation. The AWS API call history produced by CloudTrail enables security analysis, resource change tracking, and compliance auditing. AWS CloudTrail provides additional multi-region security: - Ensuring that a multi-region trail exists will detect unexpected activity occurring in otherwise unused regions. - Ensuring that a multi-region trail exists will enable Global Service Logging for a trail by default, capturing records of events generated on AWS global services. - For a multi-region trail, ensuring that management events are configured for all types of reading/writing operations, results in the recording of management actions performed on all resources in an AWS account.`,
        impact: `The presence of a multi-areas trail will not identify unexpected activity in previously unused regions.`,
        howToFix: `We recommend you to enable AWS CloudTrail in all regions`,
        references: `https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/Welcome.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_68`,
        title: `CloudFront distribution has WAF disabled`,
        description: `AWS WAF gives you control over how traffic reaches your applications by enabling you to create security rules. 

We recommend you create rules that block common attack patterns, such as SQL injection, cross-site scripting, and rules that filter out specific traffic patterns that you have defined.

With AWS Cloudfront – WAF integration enabled you will be able to block any malicious requests made to your Cloudfront Content Delivery Network based on the criteria defined in the WAF Web Access Control List (ACL) associated with the CDN distribution.`,
        impact: `Any malicious requests made to your Cloudfront Content Delivery Network based on the criteria provided in the WAF Web Access Control List (ACL) linked with the CDN distribution will not be blocked.`,
        howToFix: `We recommend you enable WAF for CloudFront distribution`,
        references: `https://aws.amazon.com/waf/#:~:text=AWS%20WAF%20gives%20you%20control,filter%20out%20specific%20traffic%20patterns.`,
        group: ``,
    },
    {
        id: `CKV_AWS_69`,
        title: `AWS MQ publicly accessible`,
        description: `Brokers created without public accessibility cannot be accessed from outside of your VPC. This greatly reduces your broker's susceptibility to DDoS attacks from the internet. 

Public Amazon MQ brokers can be accessed directly, outside of a VPC, allowing every EC2 on the Internet to reach your brokers through their public endpoints. This can increase the opportunity for malicious activity such as cross-site scripting and clickjacking attacks.`,
        impact: `This increases the likelihood of malicious activities such as cross-site scripting and clickjacking attacks..`,
        howToFix: `We recommend you to set private access for AWS MQ`,
        references: `https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/using-amazon-mq-securely.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_70`,
        title: `S3 bucket action with principal`,
        description: `The Principal element specifies the user, account, service, or other entity that is allowed or denied access to a resource. In Amazon S3, a Principal is an account or user who is allowed access to the actions and resources in the statement. When added to a bucket policy, the principal is the user, account, service, or other entity that is the recipient of this permission. When you set the wildcard ("*") as the Principal value you essentially grant permission to everyone. This is referred to as anonymous access. The following statements are all considered Anonymous Permissions.`,
        impact: `When you use the wildcard ("*") as the Principal value, you are effectively granting access to everyone. This is known as anonymous access.`,
        howToFix: `We recommend you configure the S3 bucket to not allow action with any principal`,
        references: `https://docs.fugue.co/FG_R00211.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_71`,
        title: `AWS Redshift database audit logging disabled`,
        description: `Amazon Redshift logs information about connections and user activities in your database. These logs help you to monitor the database for security and troubleshooting purposes, a process often referred to as database auditing. The logs are stored in Amazon S3 buckets. These provide convenient access with data security features for users who are responsible for monitoring activities in the database. Enabling S3 bucket logging on Redshift databases allows you to capture all events which may affect the database, this is useful in security and incident response workflows.`,
        impact: `Disabling S3 bucket logging on Redshift databases prevents you from recording all events that may influence the database, which is beneficial in security and incident response operations.`,
        howToFix: `We recommend you enable audit logging for AWS Redshift database`,
        references: `https://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_72`,
        title: `SQS policy documents * (asterisk) as statement's action`,
        description: `The Action element describes the specific action or actions that will be allowed or denied. Statements must include either an Action or Not Action element. Each AWS service has its own set of actions that describe tasks that can be performed with that service. Specify a value using a namespace that identifies a service, for example, iam, ec2 sqs, sns, s3, followed by the name of the action to be allowed or denied. The name must match an action that is supported by the service.`,
        impact: `When you use the wildcard ("*") as the Principal value, you are effectively granting access to everyone. This is known as anonymous access. Given this policy document setting, this degree of access might possibly offer undesired and uncontrolled access to anybody.`,
        howToFix: `We recommend you do not allow "*" (all resource) statements as part of action elements. This level of access could potentially grant unwanted and unregulated access to anyone given this policy document setting. We recommend you write a refined policy describing the specific action allowed or required by the specific policyholder.`,
        references: `https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_74`,
        title: `DocumentDB unencrypted`,
        description: `The encryption feature available for Amazon DocumentDB clusters provides an additional layer of data protection by helping secure your data against unauthorized access to the underlying storage.

Amazon DocumentDB allows you to encrypt your clusters using keys managed through the AWS Key Management Service (KMS). 

On a cluster running with Amazon DocumentDB encryption, data stored at rest in the underlying storage is encrypted, as are its automated backups, snapshots, and replicas in the same cluster.`,
        impact: `Unencrypted Amazon DocumentDB clusters do not offer an extra layer of data security by preventing unwanted access to the underlying storage.`,
        howToFix: `We recommend you that enable encryption for your AWS DocumentDB clusters for additional data security and to meet compliance requirements for data-at-rest encryption.`,
        references: `https://docs.aws.amazon.com/documentdb/latest/developerguide/encryption-at-rest.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_75`,
        title: `Global Accelerator Flow logs`,
        description: `Global Accelerator is a networking service that sends traffic through AWS's global network enabling global access to your web apps. 

Flow logs allow capturing information about the IP address traffic going to and from network interfaces in the AWS Global Accelerator. Flow log data is published to Amazon S3, where it can be retrieved and viewed.

Flow logs enable troubleshooting if specific traffic is not reaching an endpoint, helping you to diagnose overly restrictive security group rules. It can also be used to monitor the traffic that is reaching endpoints in a VPC and establish if they should be receiving that traffic.`,
        impact: `Disabling flow logs does not offer to troubleshoot if specified traffic is not reaching an endpoint. It also does not help you in diagnosing too stringent security group restrictions.`,
        howToFix: `We recommend you to enable Global Accelerator flow logs`,
        references: `https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_76`,
        title: `API Gateway logging access`,
        description: `Enabling the custom access logging option in API Gateway allows delivery of custom logs to CloudWatch Logs, which can be analyzed using CloudWatch Logs Insights. Using custom domain names in Amazon API Gateway allows insights into requests sent to each custom domain name. If there is more than one custom domain name mapped to a single API, understanding the quantity and type of requests by domain name may help understand request patterns.`,
        impact: `Disabling the custom access logging option in API Gateway prevents custom logs from being delivered to CloudWatch Logs and examined using CloudWatch Logs Insights.`,
        howToFix: `We recommend you enable access logging for API Gateway`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cloudwatch-logs/`,
        group: ``,
    },
    {
        id: `CKV_AWS_77`,
        title: `Unencrypted Athena Database`,
        description: `Athena is a query service managed by AWS that uses standard SQL to analyze data directly in Amazon S3. Encryption of data while in transit between Amazon Athena and S3 is provided by default using SSL/TLS, but encryption of query results at rest is not enabled by default. The encryption at rest feature available for AWS Athena query results provides an additional layer of data protection by helping secure your data against unauthorized access to the underlying Amazon S3 storage.`,
        impact: `Unencrypted Athena Database at rest does not offer an extra layer of data security by assisting in the protection of your data against unwanted access to the underlying Amazon S3 storage.`,
        howToFix: `It is advised to make the necessary changes in the AWS console during the runtime. Navigate to the Amazon Athena console. Then, in the Athena console, go to Settings and choose Encrypt query results. Then, for Encryption, choose either CSE-KMS, SSE-KMS, or SSE-S3. Then, if your account has access to an existing AWS KMS customer managed key (CMK), choose its alias or select Enter a KMS key ARN, enter an ARN, and click Save.`,
        references: `https://docs.aws.amazon.com/whitepapers/latest/architecting-hipaa-security-and-compliance-on-aws/amazon-athena.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_78`,
        title: `CodeBuild project encryption disabled (Artifacts)`,
        description: `AWS CodeBuild is a fully managed build service in the cloud. 

CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. Build artifacts, such as a cache, logs, exported raw test report data files, and build results, are encrypted by default using CMKs for Amazon S3 that are managed by the AWS Key Management Service. 

If you do not want to use these CMKs, you must create and configure a customer-managed CMK.`,
        impact: `Unencrypted AWS CodeBuild project does not provide an additional layer of data protection by helping secure your data.`,
        howToFix: `It is advised to fix it at the CloudFormation buildtime. "AWS::CodeBuild::Project" is the resource. "Properties.Artifacts" are the arguments (Optional) If this option is set to true, output artifacts will not be encrypted. If the type is set to NO_ ARTIFACTS, this value is ignored. The default value is false.`,
        references: `https://aws.amazon.com/codebuild/`,
        group: ``,
    },
    {
        id: `CKV_AWS_79`,
        title: `Metadata Instance Service version 1 is disabled`,
        description: `The Instance Metadata Service (IMDS) is an on-instance component used by code on the instance to securely access instance metadata. You can access instance metadata from a running instance using one of the following methods:

- Instance Metadata Service Version 1 (IMDSv1) – a request/response method
- Instance Metadata Service Version 2 (IMDSv2) – a session-oriented method

As a request/response method IMDSv1 is prone to local misconfigurations:

- Open proxies, open NATs and routers, server-side reflection vulnerabilities.
- One way or another, local software might access local-only data.`,
        impact: `For disabled Instance Metadata Service Version 1, code cannot access instance metadata from a running instance (IMDSv1)`,
        howToFix: `It is advised to fix it at the CloudFormation buildtime. "AWS::EC2::LaunchTemplate" is the resource. "Properties.MetadataOptions.HttpEndpoint" / "Properties.MetadataOptions.HttpTokens" are the arguments.`,
        references: `https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-ec2-imds.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_80`,
        title: `Amazon MSK cluster logging disabled`,
        description: `Amazon MSK enables you to build and run applications that use Apache Kafka to process streaming data. It also provides a control plane for advanced operations, for example, creating, updating, and deleting clusters. Consistent cluster logging helps you determine if a request was made with root or AWS Identity and Access Management (IAM) user credentials and whether the request was made with temporary security credentials for a role or federated user.`,
        impact: `Disabling cluster logging does not help you establish whether a request was performed with root or AWS Identity and Access Management (IAM) user credentials, or with temporary security credentials for a role or federated user.`,
        howToFix: `It is advised to make the necessary changes in the AWS Console during the runtime. Log in to the AWS manage console and access the Amazon msk console to create a new cluster. Then, under the Monitoring area, navigate to Broker Log Delivery. Indicate where you want Amazon MSK to send your broker logs.`,
        references: `https://docs.aws.amazon.com/msk/latest/developerguide/troubleshooting.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_81`,
        title: `MSK cluster encryption at rest and in transit disabled`,
        description: `Amazon MSK integrates with AWS Key Management Service (KMS) for server-side encryption. When you create an MSK cluster, you can specify the AWS KMS CMK for Amazon MSK to use to encrypt your data at rest. If you don't specify a CMK, Amazon MSK creates an AWS-managed CMK for you and uses it on your behalf.`,
        impact: `MSK clusters that are not encrypted at rest and in transport do not safeguard your managed Kafka queue.`,
        howToFix: `We recommend using encryption in transit and at rest to secure your managed Kafka queue.`,
        references: `https://docs.aws.amazon.com/msk/latest/developerguide/msk-encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_82`,
        title: `Disabled Athena workgroup encryption`,
        description: `You can configure settings at the workgroup level, enforce control over the workgroup. This only affects you if you run queries in the workgroup; if you do, workgroup settings are used. If a query runs in workgroups and the workgroup overrides client-side settings, Athena uses the workgroup's settings for encryption. It also overrides any other settings specified for the query in the console, by using API operations, or with drivers.`,
        impact: `Disabled Athena workgroup encryption does not provide an additional layer of data protection by helping secure your data.`,
        howToFix: `It is advised to correct it in the cli command runtime. Use the encryption-info option to point to the file where you saved your configuration JSON when running the create-cluster command.`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_83`,
        title: `AWS Elasticsearch domain Enforces HTTPS`,
        description: `Amazon Elasticsearch Service (Amazon ES) allows you to build applications without setting up and maintaining your search cluster on Amazon EC2. Amazon ES allows you to configure your domains to require that all traffic be submitted over HTTPS. This ensures communications between your clients and your domain are encrypted.`,
        impact: `AWS Elasticsearch domains with EnforceHTTPS off do not give further security control to guarantee your clients are not misconfigured.`,
        howToFix: `We recommend you configure the minimum required TLS version to accept. This option is a useful additional security control to ensure your clients are not misconfigured.`,
        references: `https://aws.amazon.com/blogs/security/how-to-control-access-to-your-amazon-elasticsearch-service-domain/`,
        group: ``,
    },
    {
        id: `CKV_AWS_84`,
        title: `AWS Elasticsearch domain logging disabled`,
        description: `Amazon ES exposes logs through CloudWatch. ES logs supported include error logs, search slow logs, index slow logs, and audit logs. All the logs are disabled by default. ES logs enable troubleshooting performance and stability issues. Audit logs track user activity for compliance purposes. If enabled, standard CloudWatch pricing applies.`,
        impact: `Disabled AWS Elasticsearch domain logging can not troubleshoot performance and stability issues. It also cannot trace user behavior in audit logs for compliance purposes.`,
        howToFix: `We recommend you enable elastic search domain logging.`,
        references: `https://aws.amazon.com/about-aws/whats-new/2018/07/troubleshoot_your_amazon_elasticsearch_service_domains_easily_using_error_logs/`,
        group: ``,
    },
    {
        id: `CKV_AWS_85`,
        title: `AWS DocumentDB logging disabled`,
        description: `The events recorded by the AWS DocumentDB audit logs include: successful and failed authentication attempts, creating indexes, or dropping a collection in a database within the DocumentDB cluster. AWS CloudWatch logs are a service that monitors, stores, and accesses your log files from a variety of sources within your AWS account. When logging is enabled information such as Data Definition Language, authentication, authorization, and user management events are sent to AWS CloudWatch logs. This information can be used to analyze, monitor, and archive your Amazon DocumentDB auditing events for security and compliance requirements.`,
        impact: `Disabled AWS DocumentDB logging does not help you establish whether a request was performed with root or AWS Identity and Access Management (IAM) user credentials, or with temporary security credentials for a role or federated user.`,
        howToFix: `We recommend you enable Amazon MSK cluster logging.`,
        references: `https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_86`,
        title: `AWS CloudFront distribution access logging disabled`,
        description: `Cloudfront access logs contain detailed information (requested object name, date and time of the access, client IP, access point, error code, etc) about each request made for your web content. This information can be extremely useful during security audits, or as input data for various analytics/reporting tools. Pairing with Lambda and WAF logs could help expedite a response process and possibly enable blocking requests coming from IP addresses that generate multiple errors. These spikes in errors could indicate they were made by attackers trying to find vulnerabilities within your web application.`,
        impact: `For disabled cloudfront access logs, you cannot obtain detailed information about each request made for your web content.`,
        howToFix: `We recommend you enable access logging for AWS CloudFront distribution.`,
        references: `https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_88`,
        title: `Disabled Internet access for AWS EC2 instances with public IP and security groups`,
        description: `A public IP address is an IPv4 address that is reachable from the Internet.

You can use public addresses for communication between your instances and the Internet. 

Each instance that receives a public IP address is also given an external DNS hostname.`,
        impact: `You cannot connect to the internet if you have disabled internet access for AWS EC2 instances with public IP addresses and security groups.`,
        howToFix: `We recommend you control whether your instance receives a public IP address as required.`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_89`,
        title: `DMS replication instance publicly accessible`,
        description: `AWS Database Migration Service (AWS DMS) is a service for migrating relational databases, data warehouses, NoSQL databases, and other data stores. DMS can be used to migrate data into the AWS Cloud, between on-premises instances, or between combinations of cloud and on-premises environments. An AWS DMS replication instance can have one public IP address and one private IP address, just like an Amazon Elastic Compute Cloud (Amazon EC2) instance that has a public IP address. If you uncheck (disable) the box for Publicly accessible, then the replication instance has only a private IP address.`,
        impact: `Publicly accessible DMS replication instance is risk for data security. Attacker can able to get acces the db.`,
        howToFix: `We recommend you ensure DMS replication instance should not be publicly accessible`,
        references: `https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_90`,
        title: `Ensure DocDB TLS is not disabled`,
        description: `TLS can be used to encrypt the connection between an application and a DocDB cluster. By default, encryption in transit is enabled for newly created clusters. 

It can optionally be disabled when the cluster is created, or at a later time. When enabled, secure connections using TLS are required to connect to the cluster.`,
        impact: `When DocDB TLS is disabled, the connection between an application and a DocDB cluster is not encrypted.`,
        howToFix: `It is advised to repair the runtime aws console. Then, login in to the Amazon Web Services management portal and navigate to the Amazon DocumentDB console at https://console.aws.amazon.com/docdb. Then, in the left navigation pane, select Clusters. Select the name of your cluster from the list of clusters. The resultant page displays information about the cluster you selected. Scroll down to the Cluster Details section. At the bottom of that section, locate the parameter group's name below Cluster parameter group.`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbclusterparametergroup.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_91`,
        title: `AWS SageMaker notebook internet access`,
        description: `When your notebook allows direct internet access, SageMaker provides a network interface it allows the notebook to communicate with the internet through a VPC managed by SageMaker`,
        impact: `You can not access the AWS Sagemaker notebook instance for disabled direct internet access.`,
        howToFix: `We recommend you ensure to enable direct Internet Access for Amazon SageMaker Notebook Instances.`,
        references: `https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-notebook-and-internet-access.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_92`,
        title: `ELB access log`,
        description: `Access logs can be used to analyze traffic patterns and troubleshoot security and operational issues. Access logging is an optional feature of ELB disabled by default.`,
        impact: `If you disable this feature, your ELB will be unable to capture and preserve information about each TCP and HTTP request made to your backend instances.`,
        howToFix: `We recommend you ensure ELB has access logs enabled`,
        references: `https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_93`,
        title: `S3 bucket MFA`,
        description: `If a bucket's versioning configuration is MFA Delete: enabled, the bucket owner must include the x-amz-mfa request header to delete an object. Requests that include x-amz-mfa must use HTTPS.

Configuring a bucket to enable MFA (multi-factor authentication) Delete requires additional authentication for either of the following operations:

(1) Change the versioning state of your bucket
(2) Permanently delete an object version.`,
        impact: `Disabled MFA-protected S3 buckets will not provide an additional layer of protection to guarantee that S3 objects (files) are not unintentionally or purposefully destroyed by AWS users who have access to the buckets.`,
        howToFix: `We recommend you configure the S3 bucket with MFA Delete enabled.`,
        references: `https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMFADelete.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_94`,
        title: `S3 bucket modifications`,
        description: `CloudTrail logs S3 bucket-level API calls made in the last 90 days. This check tracks policy modification on the bucket level, including:

- PutBucketAcl
- PutBucketPolicy
- PutBucketCors
- PutBucketLifecycle
- PutBucketReplication
- DeleteBucketPolicy
- DeleteBucketCors
- DeleteBucketLifecycle
- DeleteBucketReplication

Bucket policies and bucket or object ACLs allow users to configure access to other users and services. 

AWS console offers prompts and warnings that emphasize this point and try to prevent lapses in security. This does not always prevent data leaks. 

Monitoring automated and manual changes to S3 buckets provides an additional layer of protection against errors.`,
        impact: `The changes to the S3 bucket cannot be noticed. As a result, you can't keep track of the S3 bucket's resources and activities.`,
        howToFix: `It is advised to modify the S3 bucket in the aws console, login in to the AWS Management Console and go to https://console.aws.amazon.com/s3/ to access the Amazon S3 console. Then, in the Buckets list, choose the name of the bucket for which you want to establish a bucket policy or whose bucket policy you want to modify. Select Permissions. Select Edit from the Bucket policy drop-down menu. This takes you to the Edit bucket policy page.`,
        references: `https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging-s3-info.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_96`,
        title: `Unencrypted Data stored in Aurora`,
        description: `This policy examines the resource aws_rds_cluster to check that encryption is set up. The property storage_encrypted is examined.`,
        impact: `Unencrypted at rest data does not include the underlying storage for DB clusters, as well as automatic backups, read replicas, and snapshots.`,
        howToFix: `We recommend you ensure all data stored in Aurora is securely encrypted at rest.`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_97`,
        title: `Unencrypted EFS volumes in ECS`,
        description: `This check examines ECS tasks, and checks the definitions for EFS and if attached that the transit is encrypted.`,
        impact: `Unencrypted EFS file systems cannot protect your data and metadata from illegal access while still meeting your organization's compliance requirements for data-at-rest encryption.`,
        howToFix: `We recommend you ensure EFS volumes in ECS task definitions have encryption in transit enabled`,
        references: `https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tutorial-efs-volumes.html

https://docs.aws.amazon.com/AmazonECS/latest/userguide/efs-volumes.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_98`,
        title: `AWS SageMaker data encryption at rest`,
        description: `Straight-forward check to ensure data encryption in Sagemaker.`,
        impact: `Unencrypted AWS SageMaker cannot protect your data at rest and metadata from illegal access.`,
        howToFix: `We recommend you ensure AWS SageMaker notebook instance is configured with data encryption at rest using KMS key`,
        references: `https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_99`,
        title: `Unencrypted AWS Glue security`,
        description: `A security configuration in AWS Glue contains the properties that are needed when you write encrypted data. You create security configurations on the AWS Glue console to provide the encryption properties that are used by crawlers, jobs, and development endpoints.`,
        impact: `Unencrypted Amazon Glue cannot protect data from unapproved access and fulfill any compliance requirements defined within your organization for data-at-rest encryption.`,
        howToFix: `We recommend you ensure AWS Glue security configuration encryption is enabled`,
        references: `https://docs.aws.amazon.com/glue/latest/dg/console-security-configurations.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_100`,
        title: `AWS EKS Nodegroup SSH Access`,
        description: `An object representing the remote access configuration for the managed node group.`,
        impact: `When you establish a managed node group and specify an Amazon EC2 SSH key but no source security group, port 22 on the nodes is available to the internet (0.0.0.0/0).`,
        howToFix: `We recommend you ensure the AWS EKS node group has implicit SSH access from 0.0.0.0/0`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_101`,
        title: `Neptune log`,
        description: `You may setup a Neptune DB cluster to publish audit log data to an Amazon CloudWatch Logs log group. CloudWatch Logs allows you to analyze log data in real time and utilize CloudWatch to set alerts and examine metrics. CloudWatch Logs may be used to store log records in extremely long-term storage.`,
        impact: `If neptune logging is not enabled, you cannot analyze traffic patterns or address security and operational issues.`,
        howToFix: `We recommend that your ELB has Neptune logging enabled.`,
        references: `https://docs.neptune.ai/you-should-know/logging-metadata`,
        group: ``,
    },
    {
        id: `CKV_AWS_102`,
        title: `Neptune cluster instance access`,
        description: `This is a check to make sure that your database resource is not Public. This is the resources' default behavior.`,
        impact: `Your database service security is at risk if neptune cluster instance is publicly available.`,
        howToFix: `We recommend you ensure the Neptune cluster instance is not publicly available.`,
        references: `https://neptune-deep-dive.workshop.aws/en/workshop1/cluster-access.html#:~:text=Access%20your%20cluster%20via%20Neptune%20notebook&text=Select%20the%20notebook%20and%20click%20Open%20notebook.&text=You%20can%20use%20these%20same,or%20RDF%20SPARQL%20graph%20models.`,
        group: ``,
    },
    {
        id: `CKV_AWS_103`,
        title: `AWS Load Balancer with TLS 1.2`,
        description: `A listener in an AWS Load Balancer is a process that checks for connection requests. Users can define a listener when creating a load balancer, and add listeners to the load balancer at any time. The HTTPS listener enables traffic encryption between your load balancer and the clients that initiate SSL or TLS sessions.`,
        impact: `If AWS Load Balancer is not utilizing TLS 1.2, traffic encryption between your load balancer and clients initiating SSL or TLS connections does not operate.`,
        howToFix: `It is advised to repair  this in the aws console, navigate to the Amazon EC2 console, which can be found at https://console.aws.amazon.com/ec2/. Then, in the navigation pane, select Load Balancers under LOAD BALANCING. Then, pick the TLS listener check box and click Edit. Select a security policy for Security policy.`,
        references: `https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_105`,
        title: `Redshift SSL`,
        description: `Amazon Redshift supports Secure Sockets Layer (SSL) connections to encrypt data and server certificates to validate the server certificate that the client connects to.`,
        impact: `Without SSL connections the security of the data in transit is not secured.`,
        howToFix: `We recommend you ensure that Redshift uses SSL.`,
        references: `https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-ssl-support.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_106`,
        title: `EBS Encrypted`,
        description: `New Amazon EBS volumes aren't encrypted by default. However, there is a setting in the Amazon Elastic Compute Cloud (Amazon EC2) console that turns on encryption by default for all new Amazon EBS volumes and snapshot copies created within a specified Region.

Keep the following points in mind before enabling encryption:

- Encryption by default is a Region-specific setting. If encryption is enabled for a Region, it can't be disabled for individual volumes or snapshots in that Region.

- After enabling encryption by default, you can launch an instance only if the instance type supports Amazon EBS encryption.

- Don't turn on encryption by default when migrating servers using AWS Server Migration Service. If encryption by default is already on and you are experiencing delta replication failures, turn off encryption by default. Instead, enable AMI encryption when you create the replication job.`,
        impact: `If EBS encryption is not enabled, production data that is critical to your organization is at risk. When EBS encryption is off, data cannot be protected from attackers or unauthorized personnel.`,
        howToFix: `We recommend you ensure that EBS default encryption is enabled`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/ebs-automatic-encryption/#:~:text=On%20the%20EC2%20Dashboard%2C%20under,Select%20Save%20Settings.`,
        group: ``,
    },
    {
        id: `CKV_AWS_107`,
        title: `ECR IAM policies credentials exposure`,
        description: `AWS IAM users access AWS resources using different types of credentials, such as passwords or access keys. 

Credentials Exposure actions return credentials as part of the API response, such as ecr:GetAuthorizationToken, iam:UpdateAccessKey, and others.`,
        impact: `Credentials Exposure operations, such as ecr:GetAuthorizationToken, iam:UpdateAccessKey, and others, return credentials as part of the API response.`,
        howToFix: `We recommend you ensure IAM policies do not allow credentials exposure for ECR`,
        references: `https://docs.aws.amazon.com/AmazonECR/latest/public/security-iam.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_108`,
        title: `IAM policies data exfiltration`,
        description: `Data Exfiltration actions allow certain read-only IAM actions without resource constraints, such as s3:GetObject, ssm:GetParameter*, or secretsmanager:GetSecretValue.

1 - Unrestricted s3:GetObject permissions has a long history of customer data leaks
2 - ssm:GetParameter* and secretsmanager:GetSecretValue are both used to access secrets.
3 - rds:CopyDBSnapshot and rds:CreateDBSnapshot can be used to exfiltrate RDS database contents.`,
        impact: `Certain read-only IAM actions, such as s3:GetObject, ssm:GetParameter*, or secretsmanager:GetSecretValue, are enabled by Data Exfiltration activities.`,
        howToFix: `We recommend you ensure IAM policies do not allow data exfiltration`,
        references: `https://aws.amazon.com/blogs/database/best-practices-for-securing-sensitive-data-in-aws-data-stores/`,
        group: ``,
    },
    {
        id: `CKV_AWS_109`,
        title: `IAM policies permissions management/resource exposure`,
        description: `This policy allows actions that permit modification of resource-based policies or can otherwise can expose AWS resources to the public via similar actions that can lead to resource exposure.

For example:

1 - s3:PutBucketPolicy, s3:PutBucketAcl, and s3:PutObjectAcl grant permissions to modify the properties of S3 buckets or objects for new or existing objects in an S3 bucket, which could expose objects to rogue actors or to the internet.

2 - ecr:SetRepositoryPolicy could allow an attacker to exfiltrate container images (which sometimes unintentionally contain secrets and non-public information), tamper with container images, or otherwise modify.

3 - iam:UpdateAssumeRolePolicy could allow an attacker to create a backdoor by assuming a privileged role in the victim account from an external account.

The ability to modify AWS Resource Access Manager, which could allow a malicious actor to share a VPC hosting sensitive or internal services to rogue AWS accounts

Attackers can easily exploit Resource Exposure permissions to expose resources to rogue users or the internet, as shown by endgame, an AWS pen-testing tool that was also released by Salesforce.`,
        impact: `This policy authorizes activities that allow for the change of resource-based rules or that can otherwise expose AWS resources to the public through comparable actions that can lead to resource exposure.`,
        howToFix: `We recommend you ensure IAM policies do not allow permissions management/resource exposure without constraint`,
        references: `https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-fsbp-controls.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_110`,
        title: `IAM policies privilege escalation`,
        description: `IAM Permissions on Other Users

CreateAccessKey

Creating a new user access key for a different user: An attacker with the iam:CreateAccessKey permission on other users can create an access key ID and secret access key belonging to another user in the AWS environment if they don’t already have two sets associated with them (which best practice says they shouldn’t).

CreateLoginProfile

Creating a new login profile for an IAM user: An attacker with the iam:CreateLoginProfile permission on other users can create a password to use to login to the AWS console on any user that does not already have a log in profile setup.

UpdateLoginProfile

Updating an existing login profile for an IAM user: An attacker with the iam:UpdateLoginProfile permission on other users can change the password used to login to the AWS console on any user that already has a login profile setup.

AddUserToGroup

Adding a user to an Admin group: An attacker with the iam:AddUserToGroup permission can use it to add themselves to an existing IAM Group in the AWS account.

Permissions on Policies

CreateNewPolicyVersion

Creating a new policy version to define custom permissions: An attacker with the iam:CreatePolicyVersion permission can create a new version of an IAM policy that they have access to. This allows them to define their own custom permissions.

SetExistingDefaultPolicyVersion

Setting the default policy version to an existing version: An attacker with the iam:SetDefaultPolicyVersion permission may be able to escalate privileges through existing policy versions that are not currently in use.

AttachUserPolicy

Attaching a higher-privileged policy to a user that they have access to An attacker with the iam:AttachUserPolicy permission can escalate privileges by attaching a policy to a user that they have access to, adding the permissions of that policy to the attacker.

AttachGroupPolicy

Attaching a higher-privileged policy to a group that they have access to An attacker with the iam:AttachGroupPolicy permission can escalate privileges by attaching a policy to a group that they are a part of, adding the permissions of that policy to the attacker.

AttachRolePolicy

Attaching a higher-privileged policy to a role that they have access to An attacker with the iam:AttachRolePolicy permission can escalate privileges by attaching a policy to a role that they have access to, adding the permissions of that policy to the attacker.

PutUserPolicy

Creating/updating an inline policy for a user: An attacker with the iam:PutUserPolicy permission can escalate privileges by creating or updating an inline policy for a user that they have access to, adding the permissions of that policy to the attacker.

PutGroupPolicy

Creating/updating an inline policy for a group: An attacker with the iam:PutGroupPolicy permission can escalate privileges by creating or updating an inline policy for a group that they are a part of, adding the permissions of that policy to the attacker.

PutRolePolicy

Creating/updating an inline policy for a role: An attacker with the iam:PutRolePolicy permission can escalate privileges by creating or updating an inline policy for a role that they have access to, adding the permissions of that policy to the attacker.

Updating an AssumeRole Policy
UpdatingAssumeRolePolicy

Updating the AssumeRolePolicyDocument of a role: An attacker with the iam:UpdateAssumeRolePolicy and sts:AssumeRole permissions would be able to change the assume role policy document of any existing role to allow them to assume that role.

iam:PassRole
CreateEC2WithExistingIP

Creating an EC2 instance with an existing instance profile: An attacker with the iam:PassRole and ec2:RunInstances permissions can create a new EC2 instance that they will have operating system access to and pass an existing EC2 instance profile/service role to it.

PassExistingRoleToNewLambdaThenInvoke

Passing a new role to a Lambda function, then invoking it: A user with the iam:PassRole, lambda:CreateFunction, and lambda:InvokeFunction permissions can escalate privileges bypassing an existing IAM role to a new Lambda function that includes code to import the relevant AWS library to their programming language of choice, then using it perform actions of their choice.

PassExistingRoleToNewLambdaThenTriggerWithNewDynamo

Passing a role to a new Lambda function, then triggering it with DynamoDB: A user with the iam:PassRole, lambda:CreateFunction, and lambda:CreateEventSourceMapping (and possibly dynamodb:PutItem and dynamodb:CreateTable) permissions, but without the lambda:InvokeFunction permission, can escalate privileges bypassing an existing IAM role to a new Lambda function that includes code to import the relevant AWS library to their programming language of choice, then using it perform actions of their choice.

PassExistingRoleToNewLambdaThenTriggerWithExistingDynamo

Passing a role to a new Lambda function, then triggering it with DynamoDB: A user with the iam:PassRole, lambda:CreateFunction, and lambda:CreateEventSourceMapping (and possibly dynamodb:PutItem and dynamodb:CreateTable) permissions, but without the lambda:InvokeFunction permission, can escalate privileges bypassing an existing IAM role to a new Lambda function that includes code to import the relevant AWS library to their programming language of choice, then using it perform actions of their choice.

EditExistingLambdaFunctionWithRole

Updating the code of an existing privileged Lambda function: An attacker with the lambda:UpdateFunctionCode permission could update the code in an existing Lambda function with an IAM role attached so that it would import the relevant AWS library in that programming language and use it to perform actions on behalf of that role.

PassExistingRoleToNewGlueDevEndpoint

Passing a role to a Glue Development Endpoint: An attacker with the iam:PassRole and glue:CreateDevEndpoint permissions could create a new AWS Glue development endpoint and pass an existing service role to it.

PassExistingRoleToCloudFormation
Passing a role to CloudFormation: An attacker with the iam:PassRole and cloudformation:CreateStack permissions would be able to escalate privileges by creating a CloudFormation template that will perform actions and create resources using the permissions of the role that was passed when creating a CloudFormation stack.

PassExistingRoleToNewDataPipeline
Passing a role to Data Pipeline: An attacker with the iam:PassRole, datapipeline:CreatePipeline, and datapipeline:PutPipelineDefinition permissions would be able to escalate privileges by creating a pipeline and updating it to run an arbitrary AWS CLI command or create other resources, either once or on an interval with the permissions of the role that was passed in.

Privilege Escalation using AWS Services
UpdateExistingGlueDevEndpoint
Updating an existing Glue Dev Endpoint: An attacker with the glue:UpdateDevEndpoint permission would be able to update the associated SSH public key of an existing Glue development endpoint, to then SSH into it and have access to the permissions the attached role has access to.`,
        impact: `It will raise the risk of illegal access to your AWS cloud services and resources while also assisting you in more efficiently managing identity-based access.`,
        howToFix: `We recommend you ensure IAM policies does not allow privilege escalation`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/iam-permission-boundaries/`,
        group: ``,
    },
    {
        id: `CKV_AWS_111`,
        title: `IAM policies write access`,
        description: `This policy allows actions that permit modification of resource-based policies or can otherwise can expose AWS resources to the public via similar actions that can lead to resource exposure.

For example:

1 - s3:PutBucketPolicy, s3:PutBucketAcl, and s3:PutObjectAcl grant permissions to modify the properties of S3 buckets or objects for new or existing objects in an S3 bucket, which could expose objects to rogue actors or to the internet.

2 - ecr:SetRepositoryPolicy could allow an attacker to exfiltrate container images (which sometimes unintentionally contain secrets and non-public information), tamper with container images, or otherwise modify.

3 - iam:UpdateAssumeRolePolicy could allow an attacker to create a backdoor by assuming a privileged role in the victim account from an external account.

The ability to modify AWS Resource Access Manager, which could allow a malicious actor to share a VPC hosting sensitive or internal services to rogue AWS accounts

Attackers can easily exploit Resource Exposure permissions to expose resources to rogue users or the internet, as shown by endgame, an AWS pen-testing tool that was also released by Salesforce.`,
        impact: `This policy authorizes activities that allow for the change of resource-based rules or that can otherwise expose AWS resources to the public through comparable actions that can lead to resource exposure.`,
        howToFix: `We recommend you ensure IAM policies does not allow write-access without constraint`,
        references: `https://cloudsplaining.readthedocs.io/en/latest/glossary/resource-exposure/`,
        group: ``,
    },
    {
        id: `CKV_AWS_112`,
        title: `Encrypted Session Manager Data`,
        description: `By default, Session Manager uses TLS 1.2 to encrypt session data transmitted between the local machines of users in your account and your EC2 instances. You can also choose to further encrypt the data in transit using an AWS KMS key that has been created in AWS KMS.`,
        impact: `If session manager data is not encrypted, it is not secured from illegal access.`,
        howToFix: `We recommend that you use an encryption protocol such as Transport Layer Security (TLS) to encrypt sensitive data in transit between clients and your instances.`,
        references: `https://docs.aws.amazon.com/systems-manager/latest/userguide/data-protection.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_113`,
        title: `Disabled and Unencrypted Session Manager logs`,
        description: `A continuous stream of session data logs may be sent to Amazon CloudWatch Logs. When streaming session data, essential details such as the commands a user has executed in a session, the ID of the user who ran the commands, and timestamps for when the session data is streamed to CloudWatch Logs are provided. When streaming session data, the logs are JSON-formatted to facilitate integration with current logging solutions. For interactive commands, streaming session data is not supported.`,
        impact: `When the session manager is disabled and unencrypted, you have no choices for tracking session activity in your AWS account.`,
        howToFix: `We recommend you ensure Session Manager logs are enabled and encrypted`,
        references: `https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-logging.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_114`,
        title: `AWS EMR clusters with Kerberos`,
        description: `These checks ensure that for the EMR cluster using Kerberos, the Kerberos attributes are used and that the realm is set.`,
        impact: `If a cluster does not employ this security, no Kerberos settings are supplied.`,
        howToFix: `We recommend you to ensure that AWS EMR clusters have Kerberos enabled`,
        references: `https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos-configure.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_115`,
        title: `Unconfigured AWS Lambda function`,
        description: `Checks whether the AWS Lambda function is configured with function-level concurrent execution limit. The rule is NON_COMPLIANT if the Lambda function is not configured with a function-level concurrent execution limit.`,
        impact: `You cannot change the function's resources, such as memory and concurrency, without AWS lambda function configuration.`,
        howToFix: `We recommend you ensure the AWS Lambda function is configured for function-level concurrent execution limit`,
        references: `https://docs.aws.amazon.com/config/latest/developerguide/lambda-concurrency-check.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_119`,
        title: `Unencrypted DynamoDB tables`,
        description: `Although DynamoDB tables are encrypted at rest by default with AWS-owned CMKs, using AWS-managed CMKs or customer-managed CMKs provides additional functionality via AWS KMS, such as viewing key policies, auditing usage, and rotating cryptographic material.`,
        impact: `The security of unencrypted DynamoDB tables is at risk. It does not fulfill stringent compliance and regulatory standards.`,
        howToFix: `We recommend you ensure DynamoDB tables are encrypted`,
        references: `https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html

https://docs.fugue.co/FG_R00069.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_120`,
        title: `Disabled API gateway caching`,
        description: `You can enable API caching in Amazon API Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API.

When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. API Gateway then responds to the request by looking up the endpoint response from the cache instead of making a request to your endpoint. The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.`,
        impact: `API gateway caching is disabled, which does not minimize the number of calls made to your endpoint and does not improve the latency of queries to your API.`,
        howToFix: `We recommend you enable API caching to enhance responsiveness`,
        references: `https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_122`,
        title: `AWS SageMaker Notebook Direct Internet Access`,
        description: `Amazon SageMaker notebook instances can be started with or without a connection to your Virtual Private Cloud (VPC). The laptop may be configured with or without direct internet connection when booted with your VPC connected.`,
        impact: `Any machine outside the VPC can connect to AWS SageMaker instances, broadening the attack surface and raising the possibility of malicious behavior.`,
        howToFix: `We recommend that Direct Internet Access is enabled for Amazon SageMaker Notebook Instances.`,
        references: `https://aws.amazon.com/blogs/machine-learning/understanding-amazon-sagemaker-notebook-instance-networking-configurations-and-advanced-routing-options/`,
        group: ``,
    },
    {
        id: `CKV_AWS_123`,
        title: `VPC endpoint service`,
        description: `After you create an endpoint service, service consumers for which you've added permission can create an interface endpoint or Gateway Load Balancer endpoint to connect to your service.

If you specified that acceptance is required for connection requests, you must manually accept or reject endpoint connection requests to your endpoint service. After an endpoint is accepted, it becomes available. Be aware that it can take time for a validation status change to be completed and the state to be available.

You can reject an endpoint connection after it's in the available state.`,
        impact: `There will be no manual accept or reject endpoint connection requests to your endpoint service if you have not stated that acceptance is necessary for connection requests.`,
        howToFix: `We recommend that VPC endpoint service be configured for manual acceptance`,
        references: `https://docs.aws.amazon.com/vpc/latest/privatelink/accept-reject-endpoint-requests.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_124`,
        title: `AWS CloudFormation stacks event notifications`,
        description: `Ensure all your AWS CloudFormation stacks are using Simple Notification Service (AWS SNS) to receive notifications when an event occurs. Monitoring stack events such as create - which triggers the provisioning process based on a defined CloudFormation template, update – which updates the stack configuration or delete – which terminates the stack by removing its collection of AWS resources, will enable you to respond fast to any unauthorized action that could alter your AWS environment.`,
        impact: `Without SNS connectivity, the visibility of your AWS CloudFormation stack activities would be reduced, which is inefficient for security and administration.`,
        howToFix: `Ensure AWS CloudFormation stacks are sending event notifications to an SNS topic`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-rollback-email/`,
        group: ``,
    },
    {
        id: `CKV_AWS_126`,
        title: `Ensure detailed monitoring for EC2 instances is enabled`,
        description: `By default, your instance is enabled for basic monitoring. You can optionally enable detailed monitoring. After you enable detailed monitoring, the Amazon EC2 console displays monitoring graphs with 1 minute for the instance.`,
        impact: `You would be unable to effectively manage your EC2 resources if detailed monitoring was not enabled.`,
        howToFix: `We recommend you ensure detailed monitoring for EC2 instances is enabled`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_127`,
        title: `Elastic Load Balancers with SSL certificates`,
        description: `The load balancer requires X.509 certificates (SSL/TLS server certificates). Certificates are a digital form of identification issued by a certificate authority (CA). A certificate contains identification information, a validity period, a public key, a serial number, and the digital signature of the issuer.

When you create a certificate for use with your load balancer, you must specify a domain name.`,
        impact: `Without SSL certificates there will be no encrypted connections between your load balancer and the clients.`,
        howToFix: `We recommend that you create certificates for your load balancer using AWS Certificate Manager`,
        references: `https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_128`,
        title: `AWS IAM authentication for Amazon RDS`,
        description: `By default, IAM database authentication is disabled on DB instances. You can enable or disable IAM database authentication using the AWS Management Console, AWS CLI, or the API.

You can enable IAM database authentication when you perform one of the following actions:

To create a new DB instance with IAM database authentication enabled, see Creating an Amazon RDS DB instance.

To modify a DB instance to enable IAM database authentication, see Modifying an Amazon RDS DB instance.

To restore a DB instance from a snapshot with IAM database authentication enabled, see Restoring from a DB snapshot.

To restore a DB instance to a point in time with IAM database authentication enabled, see Restoring a DB instance to a specified time.

IAM authentication for PostgreSQL DB instances requires that the SSL value be 1. You can't enable IAM authentication for a PostgreSQL DB instance if the SSL value is 0. You can't change the SSL value to 0 if IAM authentication is enabled for a PostgreSQL DB instance.`,
        impact: `The data and metadata security would be in risk if Amazon RDS clusters and instances did not have AWS IAM authentication enabled.`,
        howToFix: `We recommend you make sure Amazon RDS clusters and instances have AWS IAM authentication enabled`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_129`,
        title: `Amazon RDS Respetive logs`,
        description: `Use CloudWatch logging types for Amazon Relational Database Service (Amazon RDS) instances`,
        impact: `Disabled Amazon RDS logs you cannot analyze traffic patterns or address security and operational issues.`,
        howToFix: `We recommend you ensure respective logs of Amazon RDS are enabled`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-logs/`,
        group: ``,
    },
    {
        id: `CKV_AWS_130`,
        title: `VPC subnets public IP`,
        description: `This policy identifies VPC subnets that allow automatic public IP assignment. VPC subnet is a part of the VPC having its own traffic rules. Assigning the Public IP to the subnet automatically (on launch) can accidentally expose the instances within this subnet to the internet and should be edited to 'No' post creation of the Subnet.`,
        impact: `Assigning the Public IP to the subnet automatically (on launch) may expose the instances within this subnet to the internet and should be changed to 'No' once the Subnet is created.`,
        howToFix: `It is recommended your VPC subnets should not be allowed automatic public IP assignment. Please make sure that if "MapPublicIpOnLaunch" exists, its value is set to "false".`,
        references: `https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-policy-reference/configuration-policies/configuration-policies-build-phase/amazon-web-services-configuration-policies/policy_11743cd3-35e4-4639-91e1-bc87b52d4cf5.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_131`,
        title: `ALB drops HTTP headers`,
        description: `Ensure that Drop Invalid Header Fields feature is enabled for your Amazon Application Load Balancers (ALBs) to follow security best practices and meet compliance requirements. If the Drop Invalid Header Fields security feature is enabled, HTTP headers with header fields that are not valid are removed by the Application Load Balancer instead of being routed to the associated targets.`,
        impact: `When the Drop Invalid Header Fields security feature is off, HTTP headers with invalid header fields are not eliminated by the Application Load Balancer and are instead sent to the related destinations.`,
        howToFix: `Checks to see if the rule assesses AWS Application Load Balancers (ALB) to see if they are set to remove http headers. If the value of routing is NON COMPLIANT, the rule is NON COMPLIANT. The value of http.drop_invalid_header_fields.enabled is false.`,
        references: `https://docs.aws.amazon.com/config/latest/developerguide/alb-http-drop-invalid-header-enabled.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_133`,
        title: `RDS instances backup policy`,
        description: `Amazon RDS creates and saves automated backups of your DB instance during the backup window of your DB instance. RDS creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just individual databases. RDS saves the automated backups of your DB instance according to the backup retention period that you specify. If necessary, you can recover your database to any point in time during the backup retention period.`,
        impact: `If backup retention period is set to 0, the backup for AWS RDS instances is disabled.`,
        howToFix: `We recommend you ensure RDS instances have backup policy`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_134`,
        title: `Amazon ElastiCache Redis clusters have automatic backup turned off`,
        description: `For any Redis cluster, you can enable automatic backups. When automatic backups are enabled, ElastiCache creates a backup of the cluster daily. There is no impact on the cluster and the change is immediate. Automatic backups can help guard against data loss. In the event of a failure, you can create a new cluster, restoring your data from the most recent backup. The result is a warm-started cluster, preloaded with your data and ready for use.`,
        impact: `You cannot recover a cluster or seed a new cluster if you do not use automatic backup in Amazon ElsatiCache. It also does not make a daily backup of the cluster.`,
        howToFix: `We recommend you ensure Amazon ElastiCache Redis clusters have automatic backup turned on, Automatic backups can help guard against data loss`,
        references: `https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-automatic.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_135`,
        title: `EBS optimized EC2`,
        description: `For an additional low, hourly fee, customers can launch certain Amazon EC2 instance types as EBS-optimized instances. EBS-optimized instances enable EC2 instances to fully use the IOPS provisioned on an EBS volume.

EBS-optimized instances deliver dedicated throughput between Amazon EC2 and Amazon EBS, with options between 500 and 60,000 Megabits per second (Mbps) depending on the instance type used. 

The dedicated throughput minimizes contention between Amazon EBS I/O and other traffic from your EC2 instance, providing the best performance for your EBS volumes.

EBS-optimized instances are designed for use with all Amazon EBS volume types.`,
        impact: `Without EBS-optimized instances, EC2 instances cannot fully use the IOPS supplied on an EBS volume.`,
        howToFix: `We recommend you ensure that EC2 is EBS optimized`,
        references: `https://aws.amazon.com/ebs/features/#Amazon_EBS-Optimized_instances`,
        group: ``,
    },
    {
        id: `CKV_AWS_136`,
        title: `Unencrypted ECR repositories`,
        description: `Amazon ECR stores images in Amazon S3 buckets that Amazon ECR manages. By default, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part and is offered at no additional charge. 

For more control over the encryption for your Amazon ECR repositories, you can use server-side encryption with KMS keys stored in AWS Key Management Service (AWS KMS). When you use AWS KMS to encrypt your data, you can either use the default AWS managed key, which is managed by Amazon ECR, or specifies your own KMS key.

Each Amazon ECR repository has an encryption configuration, which is set when the repository is created. You can use different encryption configurations on each repository.`,
        impact: `Unencrypted ECR repositories can lead to data leakage and/or data loss.`,
        howToFix: `We recommend you ensure ECR repositories are encrypted`,
        references: `https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_137`,
        title: `Elasticsearch configured inside VPC`,
        description: `VPC support for Amazon ES is easy to configure, reliable, and offers an extra layer of security. With VPC support, traffic between other services and Amazon ES stays entirely within the AWS network, isolated from the public Internet. You can manage network access using existing VPC security groups, and you can use AWS Identity and Access Management (IAM) policies for additional protection. VPC support for Amazon ES domains is available at no additional charge.`,
        impact: `When compared to ES domains that use public endpoints, AWS ElasticSearch clusters that are not in a VPC cannot provide an additional layer of protection.`,
        howToFix: `Ensure that Elasticsearch is configured inside a VPC`,
        references: `https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-policy-reference/configuration-policies/configuration-policies-build-phase/amazon-web-services-configuration-policies/policy_fc2c5836-3206-4ea8-8bc9-3ba34a00aac8`,
        group: ``,
    },
    {
        id: `CKV_AWS_138`,
        title: `Disabled cross-zone-load-balancing for ELB`,
        description: `With cross-zone load balancing, each load balancer node for your Classic Load Balancer distributes requests evenly across the registered instances in all enabled Availability Zones. If cross-zone load balancing is disabled, each load balancer node distributes requests evenly across the registered instances in its Availability Zone only. 

Cross-zone load balancing reduces the need to maintain equivalent numbers of instances in each enabled Availability Zone and improves your application's ability to handle the loss of one or more instances. However, we still recommend you that maintain approximately equivalent numbers of instances in each enabled Availability Zone for higher fault tolerance.`,
        impact: `You cannot minimize the requirement to maintain an equal number of instances in each activated Availability Zone without cross-zone load balancing, and it enhances your application's capacity to tolerate the loss of one or more instances.`,
        howToFix: `We recommend you to ensure that ELB is cross-zone-load-balancing enabled`,
        references: `https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_139`,
        title: `RDS clusters and instances deletion protection`,
        description: `Deletion protection prevents any existing or new Aurora database cluster, regardless of its type - provisioned or serverless, from being terminated by a root or IAM user using the AWS Management Console, AWS CLI or AWS API calls, unless the feature is explicitly disabled. With the Deletion Protection safety feature enabled, you have the certainty that your Amazon Aurora cluster cannot be accidentally deleted and make sure that your data remains safe.

Ensure that all your Amazon Aurora databases are protected from accidental deletion by having the Deletion Protection feature enabled at the Aurora database cluster level.

Enabling deletion protection for instances ensures that any user or anonymous user can’t accidentally or intentionally delete your database.`,
        impact: `Disabling deletion protection for instances does not prevent any user, anonymous or otherwise, from inadvertently or purposefully deleting your database.`,
        howToFix: `We recommend you that ensure RDS clusters and instances have deletion protection enabled`,
        references: `https://www.amazonaws.cn/en/new/2018/amazon-rds-now-provides-database-deletion-protection/`,
        group: ``,
    },
    {
        id: `CKV_AWS_140`,
        title: `Unencrypted RDS global clusters`,
        description: `AWS RDS is a managed DB service enabling quick deployment and management of MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server DB engines. 

Native RDS encryption helps protect your cloud applications and fulfills compliance requirements for data-at-rest encryption.`,
        impact: `Unencrypted AWS RDS DB cluster does not contribute to the security of your cloud applications and does not meet compliance standards for data-at-rest.`,
        howToFix: `Ensure RDS global clusters are encrypted`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_142`,
        title: `Unencrypted Redshift cluster`,
        description: `Ensure that your Redshift clusters are using KMS CMK customer-managed keys instead of AWS managed keys (default keys used by the Redshift service when there are no customer keys defined) in order to have more granular control over your data-at-rest encryption/decryption process.`,
        impact: `Unencrypted Redshift cluster can lead to data leakage and/or data loss. Also you can not gain full control over who can use these keys to access the clusters data.`,
        howToFix: `We recommend you ensure that the Redshift cluster is encrypted by KMS`,
        references: `https://aws.amazon.com/about-aws/whats-new/2018/10/encrypt-amazon-redshift-1-click/`,
        group: ``,
    },
    {
        id: `CKV_AWS_143`,
        title: `S3 bucket lock configuration`,
        description: `Ensure that your Amazon S3 buckets have the Object Lock feature enabled to prevent the objects they store from being deleted. Object Lock is an Amazon S3 feature that blocks object version deletion during a user-defined retention period, to enforce retention policies as an additional layer of data protection and/or for strict regulatory compliance. The feature provides two ways to manage object retention: retention periods and legal holds. A retention period specifies a fixed time frame during which an S3 object remains locked, meaning that it can't be overwritten or deleted. You can configure the retention period for the available retention modes in the rule settings, on your Cloud Conformity account dashboard. A legal hold implements the same protection as a retention period, but without an expiration date. Instead, a legal hold remains active until you explicitly remove it.`,
        impact: `If Amazon S3 buckets do not have the Object Lock feature enabled, the items stored in them cannot be erased. It also cannot fulfill your organization's regulatory standards for data protection.`,
        howToFix: `We recommend you ensure S3 bucket has lock configuration enabled by default`,
        references: `https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_144`,
        title: `S3 bucket cross-region replication`,
        description: `Cross-region replication enables automatic, asynchronous copying of objects across S3 buckets. 

By default, replication supports copying new S3 objects after it is enabled. 

It is also possible to use replication to copy existing objects and clone them to a different bucket but to do so, you must contact AWS Support.`,
        impact: `There will be no automated, asynchronous copying of items between S3 buckets unless cross-origin replication is enabled.`,
        howToFix: `We recommend you ensure S3 bucket has cross-region replication enabled`,
        references: `https://www.stratoscale.com/blog/storage/replicate-s3-buckets-across-regions/#:~:text=In%20order%20to%20set%20up,buckets%20must%20have%20versioning%20enabled.&text=Then%2C%20in%20the%20Management%20tab,rule%20by%20selecting%20Add%20rule.`,
        group: ``,
    },
    {
        id: `CKV_AWS_145`,
        title: `Unencrypted S3 buckets`,
        description: `Ensure that default encryption is enabled at the bucket level to automatically encrypt all objects when stored in Amazon S3. The S3 objects are encrypted during the upload process using Server-Side Encryption with either AWS S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS).`,
        impact: `Unencrypted S3 will prevent Amazon from encrypting your S3 data at the bucket level rather than the object level to protect it from attacks or unauthorized persons.`,
        howToFix: `We recommend you ensure S3 buckets are encrypted with KMS by default`,
        references: `https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/`,
        group: ``,
    },
    {
        id: `CKV_AWS_146`,
        title: `Unencrypted RDS database cluster snapshot`,
        description: `Ensure that your Amazon Relational Database Service (RDS) snapshots are encrypted to achieve compliance for data-at-rest encryption within your organization. The RDS snapshot encryption and decryption process is handled transparently and does not require any additional action from you or your application. The keys used for AWS RDS database snapshot encryption can be entirely managed and protected by the Amazon Web Services key management infrastructure or fully managed by the AWS customer through Customer Master Keys (CMKs).`,
        impact: `Unencrypted RDS database cluster snapshots cannot secure your data in production from attackers or unauthorized individuals.`,
        howToFix: `We recommend you ensure that the RDS database cluster snapshot is encrypted`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/encrypt-rds-snapshots/`,
        group: ``,
    },
    {
        id: `CKV_AWS_147`,
        title: `Unencrypted CodeBuild projects`,
        description: `AWS CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. Build artifacts, such as a cache, logs, exported raw test report data files, and build results, are encrypted by default using CMKs for Amazon S3 that are managed by the AWS Key Management Service. If you do not want to use these CMKs, you must create and configure a customer-managed CMK.`,
        impact: `Unencrypted CodeBuild projects cannot secure your data in production from attackers or unauthorized individuals.`,
        howToFix: `We recommend you ensure that CodeBuild projects are encrypted`,
        references: `https://aws.amazon.com/codebuild/

https://docs.aws.amazon.com/codebuild/latest/userguide/security-encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_148`,
        title: `No default VPC planned to be provisioned`,
        description: `A default VPC is appropriate for rapidly getting started and establishing public instances such as a blog or basic website. You can change the default VPC's components as needed. See the sample scenarios if you choose to establish a nondefault VPC that meets your individual needs, such as utilizing your own CIDR block range and subnet sizes.`,
        impact: `No default VPC can inadvertently expose instances and leak data.`,
        howToFix: `It is advised to repair the runtime aws console. Then, launch the AWS CloudFormation dashboard and choose Create Stack. Then, click the Choose a template option, then CloudFormer, and finally Next. Then, under the Parameters area, enter your Password and Username information. Choose CreateNewVPC for VPCSelection, and then Next. Then, on the Options page, pick Next, and on the Review page, check the box next to I understand that AWS CloudFormation may generate IAM resources. checkbox, and then choose Create.`,
        references: `https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_149`,
        title: `Unencrypted Secrets Manager secret`,
        description: `By default, secrets manager secrets are encrypted using the AWS-managed key AWS/secrets manager. It is best practice to explicitly provide a customer-managed key to use instead.`,
        impact: `You cannot have greater granular control over the secret data encryption and decryption procedure while also meeting the compliance standards for unencrypted secrets management.`,
        howToFix: `We recommend you to ensure that Secrets Manager secret is encrypted using KMS CMK`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_151`,
        title: `Kubernetes secrets are encrypted using CMKs managed in AWS KMS`,
        description: `Kubernetes can store secrets that pods can access via a mounted volume. Currently, Kubernetes secrets are stored with Base64 encoding, but encrypting is the recommended approach. 

Amazon EKS clusters version 1.13 and higher support the capability of encrypting your Kubernetes secrets using AWS Key Management Service (KMS) Customer Managed Keys (CMK). The only requirement is to enable the encryption provider support during EKS cluster creation.

Use AWS Key Management Service (KMS) keys to provide envelope encryption of Kubernetes secrets stored in Amazon EKS. Implementing envelope encryption is considered a security best practice for applications that store sensitive data and is part of a defense in depth security strategy.

Application-layer Secrets Encryption provides an additional layer of security for sensitive data, such as user-defined Secrets and Secrets required for the operation of the cluster, such as service account keys, which are all stored in etcd.

Using this functionality, you can use a key, that you manage in AWS KMS, to encrypt data at the application layer. This protects against attackers if they manage to gain access to etcd.`,
        impact: `Unencrypted Kubernetes secrets are not a best practice for applications that hold sensitive data and are not part of a defense-in-depth security plan.`,
        howToFix: `We recommend that you encrypt Kubernetes secrets, stored in etcd, using the secrets encryption feature during Amazon EKS cluster creation.`,
        references: `https://www.eksworkshop.com/beginner/191_secrets/`,
        group: ``,
    },
    {
        id: `CKV_AWS_152`,
        title: `Disabled Load Balancer (Network/Gateway) for cross-zone load balancing`,
        description: `The nodes for your load balancer distribute requests from clients to registered targets. When cross-zone load balancing is enabled, each load balancer node distributes traffic across the registered targets in all enabled Availability Zones. When cross-zone load balancing is disabled, each load balancer node distributes traffic only across the registered targets in its Availability Zone.`,
        impact: `You cannot minimize the requirement to maintain an equal number of instances in each activated Availability Zone without cross-zone load balancing, and it enhances your application's capacity to tolerate the loss of one or more instances.`,
        howToFix: `We recommend you to ensure that Load Balancer (Network/Gateway) has cross-zone load balancing enabled`,
        references: `https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_153`,
        title: `Autoscaling groups should supply tags to launch configurations`,
        description: `A tag is a custom attribute label that you apply to an AWS resource or that AWS applies to it. Each tag is made up of two parts:

A key to a tag (for example, costcenter, environment, or project)

A tag value is an optional field (for example, 111122223333 or production)`,
        impact: `You cannot manage access to Auto Scaling groups if no tags are provided by the Auto Scaling groups. You also can't identify or arrange your AWS resources.`,
        howToFix: `It is advised to repair the runtime aws console. Then, go to https://console.aws.amazon.com/ec2autoscaling/ to access the Amazon EC2 Auto Scaling console. Select the Auto Scaling group by checking the box next to it. Then, under the Details page, select Tags, Modify, and edit Key and Value. To create a new tag, choose Add tag and then update the Key and Value fields. Keep Tag new instances selected to automatically apply the tag to instances launched in the Auto Scaling group, and uncheck it otherwise. When you're done adding tags, click Update.`,
        references: `https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_154`,
        title: `Redshift deployed outside of a VPC`,
        description: `Amazon Redshift supports both the EC2-VPC and EC2-Classic platforms for launching a cluster on an Amazon VPC-based virtual private cloud (VPC). See Use EC2-VPC when creating your cluster for additional details.`,
        impact: `If Redshift is implemented outside of a VPC, you will not have access to newer and more powerful node types (DS2), nor will you have control over access security.`,
        howToFix: `We recommend you ensure Redshift is not deployed outside the VPC`,
        references: `https://docs.aws.amazon.com/redshift/latest/mgmt/managing-clusters-vpc.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_155`,
        title: `Unencrypted Workspace user volumes`,
        description: `Ensure that your Amazon WorkSpaces storage volumes are encrypted to meet security and compliance requirements. Your data is transparently encrypted while being written and transparently decrypted while being read from your storage volumes, therefore the encryption process does not require any additional action from you, your WorkSpaces instance, or your application. Encryption keys are managed by AWS KMS service, eliminating the need to build and maintain a secure key management infrastructure.`,
        impact: `Unencrypted Workspace user volumes can not protect data from unauthorized access and fulfill compliance requirements for data-at-rest.`,
        howToFix: `We recommend you to ensure workspace user volumes are encrypted`,
        references: `https://docs.aws.amazon.com/workspaces/latest/adminguide/encrypt-workspaces.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_156`,
        title: `Unencrypted Workspace root volumes`,
        description: `WorkSpaces is integrated with the AWS Key Management Service (AWS KMS). This enables you to encrypt storage volumes of WorkSpaces using customer master keys (CMKs). When you launch a WorkSpace, you can encrypt the root volume (for Microsoft Windows, the C drive; for Linux, /) and the user volume (for Windows, the D drive; for Linux, /home). Doing so ensures that the data stored at rest, disk I/O to the volume, and snapshots created from the volumes are all encrypted.`,
        impact: `Unencrypted Workspace root volumes can not protect data from unauthorized access and fulfill compliance requirements for data-at-rest.`,
        howToFix: `We recommend you ensure workspace root volumes are encrypted`,
        references: `https://docs.aws.amazon.com/workspaces/latest/adminguide/encrypt-workspaces.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_157`,
        title: `Disabled Multi-AZ RDS instances`,
        description: `Amazon RDS Multi-AZ deployments provide enhanced availability for databases within a single region. In the event of a planned or unplanned outage of your DB instance, Amazon RDS automatically switches to a standby replica in another Availability Zone if you have enabled Multi-AZ.

RDS Multi-AZ deployments offer the following benefits:

- Enhanced durability.
- Increased availability.
- Protection of your database performance.
- Automatic failover.`,
        impact: `Disabled Multi-AZ deployments in Amazon RDS cannot offer improved availability for databases in a single region.`,
        howToFix: `We recommend you ensure RDS instances have Multi-AZ enabled`,
        references: `https://aws.amazon.com/rds/features/multi-az/`,
        group: ``,
    },
    {
        id: `CKV_AWS_158`,
        title: `Unencrypted CloudWatch Log Group`,
        description: `Log group data is always encrypted in CloudWatch Logs. You can optionally use AWS Key Management Service for this encryption. If you do, the encryption is done using an AWS KMS customer-managed key. Encryption using AWS KMS is enabled at the log group level, by associating a key with a log group, either when you create the log group or after it exists.`,
        impact: `Cloudwatch log groups that are not encrypted cannot give further confidentiality restrictions on log data.`,
        howToFix: `We recommend ensuring that CloudWatch Log Group is encrypted by KMS`,
        references: `https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_159`,
        title: `Unencrypted Athena Workgroup`,
        description: `You can run queries in Amazon Athena on encrypted data in Amazon S3 in the same region and across a limited number of Regions. You can also encrypt the query results in Amazon S3 and the data in the AWS Glue Data Catalog.`,
        impact: `Unencrypted Athena workgroup log groups cannot provide an extra layer of data protection by assisting in the protection of your data from unwanted access to the underlying storage.`,
        howToFix: `We recommend you Ensure that Athena Workgroup is encrypted`,
        references: `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_160`,
        title: `Unencrypted Timestream database`,
        description: `Timestream encrypts all user data in tables at rest using encryption keys maintained in AWS Key Management Service (AWS KMS). This adds an extra degree of data security by preventing unwanted access to the underlying storage.

Timestream encrypts all of your tables using a single service default key (AWS-owned CMK). If this key does not already exist, it is generated for you. It is not possible to disable service default keys. See Timestream Encryption at Rest for further details.`,
        impact: `For an unencrypted Timestream database, you cannot have more control over the rights and lifetime of your keys, including the possibility to have them automatically cycled on a yearly basis.`,
        howToFix: `We recommend you Ensure that the Timestream database is encrypted with KMS CMK`,
        references: `https://docs.aws.amazon.com/timestream/latest/developerguide/best-practices-security-preventative.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_161`,
        title: `Disabled IAM authentication in RDS`,
        description: `Identity and access management (IAM) ensures that the right people and job roles in your organization (identities) can access the tools they need to do their jobs. 

Identity management and access systems enable your organization to manage employee apps without logging into each app as an administrator.

You can enable IAM database authentication when you perform one of the following actions

To create a new DB instance with IAM database authentication enabled
To modify a DB instance to enable IAM database authentication
To restore a DB instance from a snapshot with IAM database authentication enabled
To restore a DB instance to a point in time with IAM database authentication enabled

IAM authentication for PostgreSQL DB instances requires that the SSL value be 1. You can't enable IAM authentication for a PostgreSQL DB instance if the SSL value is 0. You can't change the SSL value to 0 if IAM authentication is enabled for a PostgreSQL DB instance.`,
        impact: `Disabling the IAM Authentication feature makes it impossible to manage access to your database resources, as opposed to managing access separately for each database instance and enhancing security.`,
        howToFix: `We recommend you ensure RDS database has IAM authentication enabled`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_162`,
        title: `Disabled IAM authentication for RDS cluster`,
        description: `Ensure the IAM Database Authentication feature is enabled to use AWS Identity and Access Management (IAM) service to manage database access to your Amazon RDS MySQL and PostgreSQL instances. With this feature enabled, you don't have to use a password when you connect to your MySQL/PostgreSQL database instances, instead, you use an authentication token. An authentication token is a unique string of characters with a lifetime of 15 minutes that AWS RDS generates on your request. IAM Database Authentication removes the need of storing user credentials within the database configuration because authentication is managed externally using AWS IAM.`,
        impact: `Disabling the IAM Authentication feature makes it impossible to manage access to your database resources, as opposed to managing access separately for each database instance and enhancing security.`,
        howToFix: `We recommend you ensure RDS cluster has IAM authentication enabled`,
        references: `https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/RDS/iam-database-authentication.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_163`,
        title: `Disabled ECR image scanning on push`,
        description: `Amazon ECR is a fully managed container registry used to store, manage and deploy container images. ECR Image Scanning assesses and identifies operating system vulnerabilities. Using automated image scans you can ensure container image vulnerabilities are found before getting pushed to production. ECR APIs notify if vulnerabilities were found when a scan completes.`,
        impact: `When ECR image scanning is disabled, it is unable to analyze and identify operating system vulnerabilities. When a scan is finished, it does not tell the user whether any vulnerabilities were discovered.`,
        howToFix: `We recommend you ensure ECR image scanning on push is enabled`,
        references: `https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning-troubleshooting.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_164`,
        title: `Publicly exposed Transfer Server`,
        description: `Customers of AWS from a wide range of sectors must often share data with other firms over the standard SSH File Transfer Protocol (SFTP). Financial records, media files, or sensitive information such as health records or personal finance data are examples of such data. For transmitting these files, SFTP provides a mature and secure transport mechanism that use the same public and private key encryption algorithms as the SSH protocol. AWS Transfer for SFTP (AWS SFTP) meets this need by offering a fully managed solution that enables SFTP transfers while the data is stored in Amazon Simple Storage Service (Amazon S3).`,
        impact: `Publicly exposed transfer server can lead to data leakage and/or data loss.`,
        howToFix: `Use IP whitelisting to secure your AWS Transfer for SFTP servers`,
        references: `https://aws.amazon.com/blogs/storage/use-ip-whitelisting-to-secure-your-aws-transfer-for-sftp-servers/`,
        group: ``,
    },
    {
        id: `CKV_AWS_165`,
        title: `Disabled dynamodb point in time recovery for global tables`,
        description: `Amazon DynamoDB point-in-time recovery (PITR) ensures that your DynamoDB table data is automatically backed up. This section offers an overview of the DynamoDB process.

Point-in-time recovery may be enabled via the AWS Management Console, the AWS Command Line Interface (AWS CLI), or the DynamoDB API. When activated, point-in-time recovery provides continuous backups until you turn it off expressly. See Restoring a DynamoDB Table to a Specific Time for further details.`,
        impact: `When DynamoBD Point-In-Time Recovery (PITR) is off, your DynamoDB tables are not protected from inadvertent write or delete operations.`,
        howToFix: `When you use point-in-time recovery, DynamoDB restores your table data to a new table at the given date and time (day:hour:minute:second).`,
        references: `https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery_Howitworks.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_166`,
        title: `Unencrypted Backup Vault rest`,
        description: `Ensure that your Amazon Backup vaults are using AWS KMS Customer Master Keys instead of AWS managed keys (i.e. default encryption keys) for encrypting your backup data to have fine-grained control over the data-at-rest encryption/decryption process and meet compliance requirements. Amazon Backup is a fully managed service that creates, restores, and deletes backups on your behalf. A backup vault is a container used to organize AWS backups. You can use backup vaults to set the AWS KMS encryption key that is used to encrypt your backups and to control access to your backups. The KMS encryption key that is configured for a backup vault applies only to the backups created for certain resource types such as Amazon EFS file systems. This adds another layer of protection for your backups. The backups taken for all other resource types are configured using the key that is used to encrypt the source resource.`,
        impact: `Unencrypted backup vaults are unable to encrypt backup data and also lack control over the data-at-rest encryption/decryption process, making it unable to fulfill compliance standards.`,
        howToFix: `We recommend you to ensure Backup Vault is encrypted at rest using KMS CMK`,
        references: `https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_167`,
        title: `Glacier Vault public policy access`,
        description: `The fundamental resource in S3 Glacier is an Amazon S3 Glacier (S3 Glacier) vault. Permissions can be added to the policy associated with an S3 Glacier vault. Resource-based policies relate to permissions policies associated to S3 Glacier vaults (or vault policies in S3 Glacier). Each S3 Glacier vault may be coupled with resource-based authorization settings. See Managing Access to Resources for more information on possible permissions policy choices.`,
        impact: `If the Glacier Vault access policy is not confined to specified services or principals, it might result in data leakage and/or loss.`,
        howToFix: `It is recommended to grant cross-account permissions for specific Amazon S3 Glacier actions`,
        references: `https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-resource-based.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_168`,
        title: `SQS queue public policy access`,
        description: `An AWS account owns every AWS resource, and rights to create or use a resource are regulated by permissions policies. Permissions policies may be attached to IAM identities (users, groups, and roles) by an account administrator, and certain services (such as Amazon SQS) also enable attaching permissions policies to resources.`,
        impact: `If the SQS queue policy is made public and access is not restricted to certain services or principals, data leakage and/or data loss might occur.`,
        howToFix: `To get access to an Amazon SQS queue, you must modify the SQS access policy, the IAM policy, or both. The particular permissions needed vary based on whether the SQS queue and IAM role are associated with the same account.`,
        references: `https://aws.amazon.com/premiumsupport/knowledge-center/sqs-queue-access-permissions/`,
        group: ``,
    },
    {
        id: `CKV_AWS_169`,
        title: `SNS queue public policy access`,
        description: `Assume you have a topic in Amazon's SNS system. In the most basic situation, you wish to grant access to a certain subject action to one or more AWS accounts (for example, Publish).

You may accomplish this by use the Amazon SNS API call AddPermission. It accepts a topic, a list of AWS account IDs, a list of actions, and a label and generates a new statement in the access control policy for the subject. In this scenario, you don't need to construct a policy since Amazon SNS produces a new policy statement for you. Later, you may delete the policy statement by executing RemovePermission with its label.

For example, if you called AddPermission with the AWS account ID 1111-2222-3333, the Publish action, and the label grant-1234-publish on the topic arn:aws:sns:us-east-2:444455556666:MyTopic, Amazon SNS would construct and insert the following access control policy statement:`,
        impact: `If the SNS queue policy is made public and access is not restricted to certain services or principals, data leakage and/or data loss might occur.`,
        howToFix: `It is advised to repair the runtime aws console. Then, go to https://console.aws.amazon.com/ to access the AWS Management Console. Navigate to the Amazon SQS console. Then, choose a SQS queue, go to the Permissions tab, and select the queue policy, then click Edit. Go to the Principal section. Then, deselect the Everyone (*) option and input the AWS account ID of the individual who is allowed or refused access (based on your access requirements). Then, to edit the policy, click Save Changes.`,
        references: `https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_170`,
        title: `QLDB ledger permissions mode is set to STANDARD`,
        description: `To create, edit, and remove ledgers in Amazon QLDB, utilize the QLDB API or the AWS Command Line Interface (AWS CLI). You may also view a list of all the ledgers in your account or obtain information about a single ledger.

The articles that follow give brief code examples that demonstrate common procedures for ledger operations using the AWS SDK for Java and the AWS CLI.`,
        impact: `Access control with greater granularity for ledgers, tables, and PartiQL commands is not possible without standard permissions mode.`,
        howToFix: `It is recommended to fix buildtime in CloudFormation. Resource is aws_qldb_ledger. Argument is permissions_mode.`,
        references: `https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedgerPermissionsMode.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_171`,
        title: `Unencryption EMR Cluster security configuration`,
        description: `Construct an EMR cluster security setup that includes data encryption at rest and in transit, as well as Kerberos authentication. When building a new cluster, security configurations are provided, and they may be reused for an unlimited number of clusters.`,
        impact: `Unencrypted EMR Cluster security setup cannot prevent data from unwanted access while also meeting your organization's compliance needs for data-at-rest and in-transit encryption.`,
        howToFix: `It is advised that you adjust the runtime in the AWS console. Go to https://console.aws.amazon.com/elasticmapreduce/ to access the Amazon EMR console. Select Security Configurations, Create security configuration from the navigation pane. Give the security configuration a name. Finally, choose Encryption and Authentication choices as stated in the sections below, and then click Create.`,
        references: `https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-create-security-configuration.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_172`,
        title: `QLDB ledger deletion`,
        description: `In Amazon QLDB, use the Destroy command to delete an active document in a table by producing a new, but final, version of the document. This last revision signifies that the document is no longer in use. This operation terminates a document's lifespan, which implies that no additional document revisions with the same document ID may be generated.

This procedure is irreversible. Using the History function, you may still query the revision history of a deleted document.`,
        impact: `The QLDB ledger deletion method is irrevocable. You may still query a deleted document's revision history using the History function.`,
        howToFix: `It is recommended to fix buildtime in aws cli.`,
        references: `https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.delete.html`,
        group: ``,
    },
    {
        id: `CKV_AWS_CUSTOM_1`,
        title: `AWS resources support tags`,
        description: `Many different types of AWS resources support tags. Tags allow you to add metadata to a resource to help identify ownership, perform cost/billing analysis, and enrich a resource with other valuable information, such as Infos and environment names. While there are many ways that tags can be used, we recommend you follow a tagging practice.

View AWS's recommended tagging best practices on mentioned URL.`,
        impact: `Without tags, it is impossible to add metadata to a resource in order to aid identify ownership, do cost/billing analysis, and enrich a resource with other relevant information such as Infos and environment names.`,
        howToFix: `It is advised that you adjust the runtime in the AWS console. The technique differs depending on the type of resource. By browsing to the appropriate resource in the AWS interface, tags may be applied. In most cases, there is a "tags" tab in the resource view that may be used to see and alter tags.`,
        references: `https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf`,
        group: ``,
    },
    {
        id: `CKV_AWS_CUSTOM_2`,
        title: `Unencrypted CloudWatch logs at rest`,
        description: `AWS CloudWatch Logs is a web service that stores logs from various AWS services, including Lambda function runs and ECS tasks. 

AWS Key Management Service (KMS) is a managed service that helps create and control the encryption keys used to encrypt account data. 

It uses Hardware Security Modules (HSMs) to protect the security of encryption keys. CloudWatch Logs can be configured to leverage server-side encryption (SSE) and KMS customer-created master keys (CMK) to further protect log data.`,
        impact: `Unencrypted CloudWatch log groups cannot offer further log data confidentiality measures.`,
        howToFix: `We recommend you configure CloudWatch log groups to use SSE-KMS to provide additional confidentiality controls on log data. 

A given user must have S3 read permission on the corresponding log bucket and must be granted decrypt permission by the CMK policy.`,
        references: `https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_1`,
        title: `Subnets NACL`,
        description: `A network access control list (NaCl) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. 

You might set up NACL with rules similar to your security groups to add a layer of security to your VPC.

Your VPC automatically comes with a modifiable default NACL. By default, it allows all inbound and outbound IPv4 traffic and, if applicable, IPv6 traffic.

You can create a custom NACL and associate it with a subnet. By default, each custom NACL denies all inbound and outbound traffic until you add rules.

Each subnet in your VPC must be associated with an NACL. If you don't explicitly associate a subnet with a NACL, the subnet is automatically associated with the default NACL.

You can associate a NACL with multiple subnets. However, a subnet can be associated with only one network ACL at a time. When you associate a network ACL with a subnet, the previous association is removed.`,
        impact: `Without a network access control list (ACL), your VPC cannot provide a layer of protection by acting as a firewall to govern traffic in and out of one or more subnets.`,
        howToFix: `We recommend you ensure all NACL is attached to subnets`,
        references: `https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_2`,
        title: `Unencrypted EBS volumes attached to EC2 instances`,
        description: `Use EBS encryption as a straightforward encryption solution for your EBS resources associated with your EC2 instances. 

With EBS encryption, you aren't required to build, maintain, and secure your key management infrastructure. Amazon EBS encryption uses AWS KMS keys when creating encrypted volumes and snapshots.

Encryption operations occur on the servers that host EC2 instances, ensuring the security of both data-at-rest and data-in-transit between an instance and its attached EBS storage.

You can attach both encrypted and unencrypted volumes to an instance simultaneously.`,
        impact: `Unencrypted EBS volumes do not exist on the servers that host EC2 instances, assuring the security of data at rest as well as data in transit between an instance and its associated EBS storage.`,
        howToFix: `We recommend you ensure only encrypted EBS volumes are attached to EC2 instances`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_3`,
        title: `Disabled GuardDuty`,
        description: `When you use GuardDuty with an AWS Organizations organization, you can designate any account within the organization to be the GuardDuty delegated administrator. Only the organization management account can designate GuardDuty delegated administrators.

An account that is designated as a delegated administrator becomes a GuardDuty administrator account, has GuardDuty automatically enabled in the designated Region and is granted permission to enable and manage GuardDuty for all accounts in the organization within that Region. The other accounts in the organization can be viewed and added as GuardDuty member accounts associated with the delegated administrator account.`,
        impact: `Disabled Amazon GuardDuty cannot defend your AWS environment and infrastructure against security threats (AWS accounts and resources, IAM credentials, guest operating systems, apps, and so on).`,
        howToFix: `We recommend you to enable GuardDuty to a specific org/region.`,
        references: `https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_4`,
        title: `Define appropriate API Gateway stage logging level`,
        description: `In CloudWatch, there are two forms of API logging: execution logging and access logging. The CloudWatch Logs are managed by API Gateway during execution logging. The procedure entails generating log groups and log streams, as well as reporting any caller requests and answers to the log streams.`,
        impact: `If the API Gateway stage's logging level is not set correctly, you cannot track and evaluate execution activity at the API stage level.`,
        howToFix: `We recommend you ensure the appropriate logging level is defined for the API Gateway stage.`,
        references: `https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_5`,
        title: `Unattached Security Groups to EC2 instances or ENIs`,
        description: `A check to ensure that orphaned Security groups aren't created. Elastic Network Interfaces (ENIs). This checks that Security Groups are attached to provisioning resources.`,
        impact: `If Security Groups are not tied to EC2 instances or ENIs, this cannot verify that Security Groups are associated to provisioning resources.`,
        howToFix: `We recommend you ensure Security Groups are attached to EC2 instances or ENIs`,
        references: `https://docs.aws.amazon.com/config/latest/developerguide/ec2-security-group-attached-to-eni.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_6`,
        title: `S3 Bucket public access blocks`,
        description: `When you create an S3 bucket, it is good practice to set the additional resource aws_s3_bucket_public_access_block to ensure the bucket is never accidentally public.`,
        impact: `Because S3 Bucket does not have public access restrictions, some services or principals, data leakage, and/or data loss may occur.`,
        howToFix: `We recommend you ensure the S3 bucket has public access blocks. If the public access block is not attached, attach defaults to False.`,
        references: `https://aws.amazon.com/s3/features/block-public-access/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_7`,
        title: `Amazon EMR clusters' security groups public access`,
        description: `Least privilege, it's is best practice to limit any database accessible only to those groups or instances that require it.`,
        impact: `Certain services or principals, data leakage, and/or data loss may occur if the security groups for Amazon EMR clusters are available to the public.`,
        howToFix: `We recommend you ensure Amazon EMR clusters' security groups are not open to the world`,
        references: `https://aws.amazon.com/emr/faqs/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_8`,
        title: `RDS clusters backup plan`,
        description: `AWS Backup enables you to centralize and automate data protection across AWS services. AWS Backup offers a cost-effective, fully managed, policy-based service that simplifies data protection at scale. AWS Backup helps you support your regulatory compliance obligations and meet your business continuity goals.

With just a few clicks in the AWS Backup console, you can create backup policies that automate backup schedules and retention management. With AWS Backup, you can create backup policies called backup plans. You can use these plans to define your backup requirements, such as how frequently to back up your data and how long to retain those backups. AWS Backup lets you apply backup plans to your AWS resources by simply tagging them. AWS Backup then automatically backs up your AWS resources according to the backup plan that you defined`,
        impact: `If your RDS clusters lack a backup strategy, you will be unable to manage RDS database instance snapshots and increase the dependability of your backup strategy.`,
        howToFix: `We recommend you ensure that RDS clusters have a backup plan of AWS Backup`,
        references: `https://aws.amazon.com/getting-started/hands-on/amazon-rds-backup-restore-using-aws-backup/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_9`,
        title: `EBS backup plan`,
        description: `AWS Backup enables you to centralize and automate data protection across AWS services. 

AWS Backup offers a cost-effective, fully managed, policy-based service that simplifies data protection at scale. 

AWS Backup helps you support your regulatory compliance obligations and meet your business continuity goals.`,
        impact: `You cannot centralize and automate data protection in Amazon EBS without AWS Backup. It also does not assist your regulatory compliance requirements or achieves your business continuity objectives.`,
        howToFix: `We recommend you ensure EBS have an AWS Backup backup plan`,
        references: `https://aws.amazon.com/getting-started/hands-on/amazon-ebs-backup-and-restore-using-aws-backup/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_10`,
        title: `CloudTrail trail integration with CloudWatch Log`,
        description: `AWS CloudTrail is a web service that records AWS API calls made in a given AWS account. 

The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service. 

CloudTrail uses Amazon S3 for log file storage and delivery, so log files are stored durably. In addition to capturing CloudTrail logs within a specified S3 bucket for long-term analysis, real-time analysis can be performed by configuring CloudTrail to send logs to CloudWatch logs. 

For a trail that is enabled in all regions in an account, CloudTrail sends log files from all those regions to a CloudWatch logs log group.`,
        impact: `You cannot monitor events for management and security purposes without integrating CloudWatch Logs. You also can't respond promptly to crucial operational events recognized by CloudTrail events.`,
        howToFix: `It is recommended that CloudTrail logs are sent to CloudWatch logs.`,
        references: `https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_11`,
        title: `Disabled AWS VPC Flow logs`,
        description: `VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. 

After you have created a flow log, you can view and retrieve its data in Amazon CloudWatch Logs. VPC Flow Logs provide visibility into network traffic that traverses the VPC.

Enabling VPC Flow Logs will help you detect security and access issues like overly permissive security groups and network ACLs and alert abnormal activities triggered within your Virtual Private Cloud networks such as rejected connection requests or unusual levels of data transfer.`,
        impact: `When VPC Flow Logs are off, no information regarding IP traffic to and from network interfaces in your VPC may be captured.`,
        howToFix: `We recommend that VPC Flow Logs are enabled for packet Rejects for VPCs to help detect anomalous traffic and insight during security workflows.`,
        references: `https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_12`,
        title: `AWS Default Security Group restricts all traffic`,
        description: `A VPC comes with a default security group that has an initial setting denying all inbound traffic, allowing all outbound traffic, and allowing all traffic between instances assigned to the security group. 

If you do not specify a security group when you launch an instance, the instance is automatically assigned to this default security group. Security groups are stateful and provide filtering of ingress/egress network traffic to AWS resources.`,
        impact: `If the AWS Default Security Group does not limit all traffic, it will stimulate the formation of least privilege security groups and the careful placement of AWS services into security groups.`,
        howToFix: `We recommend that your default security group restricts all inbound and outbound traffic. 

The default VPC in every region should have its default security group updated to comply with this recommendation. Any newly created VPCs will automatically contain a default security group that will need remediation to comply with this recommendation.

Configuring all VPC default security groups to restrict all traffic will encourage least privilege security group development and mindful placement of AWS resources into security groups. This in turn reduces the exposure of those resources.`,
        references: `https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_15`,
        title: `Auto-scaling groups associated with a load balancer use elastic load balancing health checks`,
        description: `To ensure that your Auto Scaling group can determine instance health based on additional load balancer tests, configure the Auto Scaling group to use Elastic Load Balancing (ELB) health checks. 

The load balancer periodically sends pings, attempts connections, or sends requests to test the EC2 instances and determines if an instance is unhealthy. 

If you configure the Auto Scaling group to use Elastic Load Balancing health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the Elastic Load Balancing health checks. 

If you attach multiple load balancer target groups or Classic Load Balancers to the group, all of them must report that an instance is healthy for it to consider the instance healthy. 

If any one of them reports an instance as unhealthy, the Auto Scaling group replaces the instance, even if others report it as healthy.`,
        impact: `If Auto Scaling groups connected with a load balancer do not employ elastic load balancing health checks, the compute resources will not be available in the case of a failure, and the application load will not be equally distributed.`,
        howToFix: `It is advised that you adjust the runtime in the AWS console. Then, go to https://console.aws.amazon.com/ec2autoscaling/ to access the Amazon EC2 Auto Scaling console. Then, next to an existing group, choose the check box. Then, under the Details tab, select Edit Health Checks. Select Enable ELB health checks for the Health check type. Enter the length of time, in seconds, that Amazon EC2 Auto Scaling must wait before verifying an instance's health condition in Health check grace period. Select Update, and then see the health status of instances on the Instance management page, under Instances.`,
        references: `https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_18`,
        title: `Amazon EFS added in backup plans`,
        description: `AWS Backup is a simple and cost-effective way to protect your data by backing up your Amazon EFS file systems. AWS Backup is a unified backup service designed to simplify the creation, migration, restoration, and deletion of backups while providing improved reporting and auditing. AWS Backup makes it easier to develop a centralized backup strategy for legal, regulatory, and professional compliance. AWS Backup also makes protecting your AWS storage volumes, databases, and file systems simpler by providing a central place.`,
        impact: `You cannot centralize and automate data protection in Amazon EFS without AWS Backup. It also does not assist your regulatory compliance requirements or achieve your business continuity objectives.`,
        howToFix: `We recommend you ensure Elastic File System (Amazon EFS) are added in the backup plans of AWS Backup`,
        references: `https://docs.aws.amazon.com/config/latest/developerguide/efs-in-backup-plan.html

https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_19`,
        title: `EIP addresses allocated to a VPC are attached to EC2 instances`,
        description: `Ensure that a managed Config rule for AWS Elastic IPs (EIPs) attached to EC2 instances launched inside a VPC is created. 

Config service tracks changes within your AWS resources configuration and saves the recorded data for security and compliance audits. 

A managed Config rule is a predefined and customizable rule, provided by AWS, that Config utilizes to evaluate whether the specified resources comply with common security best practices.

If you associate an Elastic IP (EIP) address with an EC2 instance, the public IP address attached to the instance is released. 

AWS Config can evaluate the configuration of your EC2 instances to ensure there are no publicly addressable IPs currently attached as this would breach the defense in depth model and affect various layers of security.`,
        impact: `If not all EIP addresses assigned to a VPC are associated to EC2 instances, the config service is unable to track changes in your AWS resource configuration and preserves the recorded data for security and compliance audits.`,
        howToFix: `We recommend you ensure all EIP addresses allocated to a VPC are attached to EC2 instances`,
        references: `https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_20`,
        title: `ALB redirects HTTP requests`,
        description: `Ensure that your Amazon Application Load Balancers (ALBs) are configured to redirect HTTP traffic (port 80) to HTTPS (port 443) in order to follow security best practices and meet compliance requirements.

Redirecting HTTP traffic to HTTPS within your Application Load Balancer (ALB) listeners' configuration simplifies deployments while benefiting from the scale, availability,`,
        impact: `Amazon Application Load Balancers (ALBs) cannot follow security best practices and fulfill compliance requirements if they are not configured to convert HTTP traffic (port 80) to HTTPS (port 443).`,
        howToFix: `We recommend you ensure ALB redirects HTTP requests into HTTPS ones`,
        references: `https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/ELBv2/http-to-https-redirect.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_21`,
        title: `IAM users are members of the IAM group`,
        description: `Ensure that your Amazon Identity and Access Management (IAM) users are members of at least one IAM group to adhere to IAM security best practices.`,
        impact: `If Amazon Identity and Access Management (IAM) users are not members of at least one IAM group, IAM security best practices cannot be followed.`,
        howToFix: `As a cloud security best practice, it is strongly recommended to avoid assigning identity-based policies to individual IAM users or defining inline policies when creating an IAM user. 

Instead, you can assign policies to a group of IAM users or write inline policies when creating an IAM group.`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_22`,
        title: `IAM User console access`,
        description: `IAM policies control access regardless of the interface. 

For example, you could provide a user with a password to access the AWS Management Console. The policies for that user (or any groups the user belongs to) would control what the user can do in the AWS Management Console. Or, you could provide the user with AWS access keys for making API calls to AWS. 

The policies would control which actions the user could call through a library or client that uses those access keys for authentication.`,
        impact: `Enabling any inactive IAM users who are not intended for API access will not safeguard your AWS resources from unwanted access.`,
        howToFix: `When you create a user by default it haves no permission.

To permit the user you have to attach policies to them.

We recommend you to attached policies as needed`,
        references: `https://docs.aws.amazon.com/IAM/latest/UserGuide/console_controlling-access.html`,
        group: ``,
    },
    {
        id: `CKV2_AWS_23`,
        title: `Route53 record has attached resource`,
        description: `This check ensures that Route53 A records point to resources part of your Account rather than just random IP addresses. On the platform, this check additionally compares IPs against provisioned EIP.`,
        impact: `If a Route53 A Record does not have an Attached Resource, the graph will not be able to correlate the A Record against known AWS resources from EIP to Global Accelerator.`,
        howToFix: `If you see issues while performing AWS CLI commands, ensure sure you're running the most recent AWS CLI version.`,
        references: `https://www.amazonaws.cn/en/route53/faqs/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_27`,
        title: `Disabled Postgres RDS Query Logging`,
        description: `To enable query logging for your PostgreSQL DB instance, set two parameters in the DB parameter group associated with your DB instance: log_statement and log_min_duration_statement.

The log_statement parameter controls which SQL statements are logged. The default value is none. We recommend that when you debug issues in your DB instance, set this parameter to all to log all statements. To log all data definition language (DDL) statements (CREATE, ALTER, DROP, and so on), set this value to ddl. To log all DDL and data modification language (DML) statements (INSERT, UPDATE, DELETE, and so on), set the value to mod.`,
        impact: `Setting querying logging can lead to the disclosure of secrets (including passwords) from your queries.`,
        howToFix: `We recommend you enable query logging for Postgres RDS`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.Concepts.PostgreSQL.Query_Logging

https://aws.amazon.com/premiumsupport/knowledge-center/rds-postgresql-query-logging/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_28`,
        title: `Unprotected public facing ALB`,
        description: `AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources. 

AWS WAF gives you control over how traffic reaches your applications by enabling you to create security rules that control bot traffic and block common attack patterns, such as SQL injection or cross-site scripting.`,
        impact: `You cannot defend your online apps or APIs from typical web exploits and bots that may disrupt availability, compromise security, or use excessive resources unless you use AWS WAF.`,
        howToFix: `We recommend you ensure public-facing ALB are protected by AWS Web Application Firewall v2 (AWS WAFv2)`,
        references: `https://www.arhs-group.com/protecting-aws-alb-behind-aws-cloudfront-distribution/`,
        group: ``,
    },
    {
        id: `CKV2_AWS_29`,
        title: `Public API gateway is protected by AWS Web Application Firewall v2 (AWS WAFv2)`,
        description: `AWS WAF is a web application firewall that aids in the protection of web applications and APIs from assaults. It allows you to establish a collection of rules (known as a web access control list (web ACL)) that accept, prohibit, or count web requests depending on customisable web security rules and conditions. See How AWS WAF Works for additional details.`,
        impact: `Without AWS WAF you can not protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources.`,
        howToFix: `Ensure public API gateway are protected by AWS Web Application Firewall v2 (AWS WAFv2)`,
        references: `https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_1`,
        title: `Authenticates Azure instance using SSH keys`,
        description: `SSH is an encrypted connection protocol that allows secure sign-ins over unsecured connections. 

SSH is the default connection protocol for Linux VMs hosted in Azure. Using a secure shell (SSH) key pair, it is possible to spin up a Linux virtual machine on Azure that defaults to using SSH keys for authentication, eliminating the need for passwords to sign in.`,
        impact: `You cannot allow secure sign-ins over unprotected networks without an encrypted SSH connection. Without SSH, VMs are also subject to brute-force attacks or password guessing.`,
        howToFix: `We recommend connecting to a VM using SSH keys, Using basic authentication with SSH connections leaves VMs vulnerable to brute-force attacks or guessing of passwords.`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/linux/create-ssh-keys-detailed`,
        group: ``,
    },
    {
        id: `CKV_AZURE_2`,
        title: `Unencrypted Azure VM data disk`,
        description: `Azure-managed disks will automatically encrypt data by default when persisting it to the cloud. Encryption does not impact the performance of managed disks and there is no additional cost for the encryption.

Server-side encryption (SSE) protects your data and helps you meet your organizational security and compliance commitments.`,
        impact: `When Azure VM data disk is encrypted with the default encryption key rather than ADE/CMK, you cannot improve on platform-managed keys by providing you authority over the encryption keys to fulfill your compliance requirements.`,
        howToFix: `We recommend you ensure Azure VM data disk is encrypted with ADE/CMK`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/disk-encryption`,
        group: ``,
    },
    {
        id: `CKV_AZURE_3`,
        title: `Disabled secure transfer required`,
        description: `You can configure your storage account to accept requests from secure connections only by setting the Secure transfer required property for the storage account. 

When you require a secure transfer, any requests originating from an insecure connection are rejected.

Microsoft recommends that you always require secure transfer for all of your storage accounts. 

When the secure transfer has required a call to an Azure Storage REST API operation must be made over HTTPS. A request made over HTTP is rejected.`,
        impact: `Any requests originating from an insecure connection are not refused if secure transmission is not required.`,
        howToFix: `We recommend you configure Azure Blob storage to accept requests from secure connections only. 

This is achieved by setting the Secure Transfer Required property. When you require a secure transfer, any requests originating from an insecure connection are rejected.`,
        references: `https://azure.microsoft.com/en-in/blog/secure-transfer-required-is-available-in-azure-storage-account/#:~:text=The%20%22Secure%20transfer%20required%22%20feature,feature%20is%20disabled%20by%20default.`,
        group: ``,
    },
    {
        id: `CKV_AZURE_4`,
        title: `Disabled azure AKS cluster monitoring`,
        description: `The Azure Monitoring service collects and stores valuable telemetry reported by AKS. 

This includes memory and processor metrics for controllers, nodes and containers logs, and logs from the individual containers. This data is accessible through Azure Log Analytics for the AKS cluster and Azure Monitor instance.`,
        impact: `You cannot gather and retain useful telemetry reported by AKS unless the Azure Monitoring service is activated.`,
        howToFix: `We recommend storing memory and processor metrics from containers, nodes, and controllers. 

This enables strong real-time and post-mortem analysis of unknown behaviors in AKS clusters.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-monitor/containers/container-insights-optout-hybrid`,
        group: ``,
    },
    {
        id: `CKV_AZURE_5`,
        title: `Enforced Azure AKS enable RBAC`,
        description: `Azure Kubernetes Service (AKS) can be configured to use Azure Active Directory (AD) and Kubernetes Role-based Access Control (RBAC). 

RBAC is designed to work on resources within your AKS clusters. With RBAC, you can create a role definition that outlines the permissions to be applied. 

A user or group is then assigned this role definition for a particular scope, which could be an individual resource, a resource group, or across the subscription.`,
        impact: `If Azure AKS enable RBAC is not enforced, it is not possible to establish Azure Active Directory (AD) with Kubernetes Role-based Access Control (RBAC).`,
        howToFix: `We recommend you sign in to an AKS cluster using an Azure AD authentication token and configure Kubernetes RBAC. 

This will limit access to cluster resources based on a user's identity or group membership.`,
        references: `https://docs.microsoft.com/en-us/azure/aks/troubleshooting`,
        group: ``,
    },
    {
        id: `CKV_AZURE_6`,
        title: `AKS API server defines authorized IP ranges`,
        description: `The AKS API server receives requests to perform actions in the cluster, for example, to create resources, and scale the number of nodes. The API server provides a secure way to manage a cluster.

To enhance cluster security and minimize attacks, the API server should only be accessible from a limited set of IP address ranges. 

These IP ranges allow defined IP address ranges to communicate with the API server. A request made to the API server from an IP address that is not part of these authorized IP ranges is blocked.`,
        impact: `You cannot improve cluster security and decrease threats without permitted IP ranges; the API server should only be available from a limited set of IP address ranges.`,
        howToFix: `It is advised that you fix the runtime in the cli command. Begin with the first IP address in the range when specifying a CIDR range.`,
        references: `https://docs.microsoft.com/en-us/azure/aks/api-server-authorized-ip-ranges`,
        group: ``,
    },
    {
        id: `CKV_AZURE_7`,
        title: `Enforced AKS cluster network policies`,
        description: `Network policy options in AKS include two ways to implement a network policy. 

You can choose between Azure Network Policies or Calico Network Policies. In both cases, the underlying controlling layer is based on Linux IPTables to enforce the specified policies. 

Policies are translated into sets of allowed and disallowed IP pairs. These pairs are then programmed as IPTable rules.

The principle of least privilege should be applied to how traffic can flow between pods in an AKS cluster.`,
        impact: `You cannot pick a preferred network policy framework and impose granular usage-based controls on the architecture and business logic of your applications if AKS cluster network policies are not implemented.`,
        howToFix: `We recommend you select a preferred network policy framework and enforce granular usage-based policies on the architecture and business logic of your applications.`,
        references: `https://docs.microsoft.com/en-us/azure/aks/use-network-policies`,
        group: ``,
    },
    {
        id: `CKV_AZURE_8`,
        title: `Enable Kubernetes dashboard`,
        description: `The Terraform provider for Azure provides the capability to disable the Kubernetes dashboard on an AKS cluster. 

This is achieved by providing the Kubernetes dashboard as an AKS add-on like the Azure Monitor for containers integration, AKS virtual nodes, or HTTP application routing. 

The dashboard add-on is disabled by default for all new clusters created on Kubernetes 1.18 or greater.

In mid-2019 Tesla was hacked and their Kubernetes dashboard was open to the internet. Hackers browsed around and found credentials, eventually managing to deploy pods running bitcoin mining software.`,
        impact: `If the Kubernetes dashboard is not removed, you cannot avoid the requirement to control its unique access interface, therefore removing it as an attack vector.`,
        howToFix: `We recommend you disable the Kubernetes dashboard to prevent the need to manage its individual access interface, eliminating it as an attack vector.`,
        references: `https://www.danielstechblog.io/disable-the-kubernetes-dashboard-on-azure-kubernetes-service/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_9`,
        title: `Unrestricted RDP Internet access`,
        description: `A potential security problem using RDP over the Internet is that attackers can use various brute force techniques to gain access to Azure Virtual Machines. 

Once the attackers gain access, they can use a virtual machine as a launch point for compromising other machines on the Azure Virtual Network. 

The attackers could also access and attack networked devices outside of Azure.`,
        impact: `Various brute force tactics may be used by attackers to obtain access to Azure Virtual Machines for unrestricted RDP internet access.`,
        howToFix: `We recommend you disable RDP access over the internet to Network Security Groups.`,
        references: `https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/troubleshoot-remote-desktop-disconnected-errors`,
        group: ``,
    },
    {
        id: `CKV_AZURE_10`,
        title: `Unrestricted SSH Internet access`,
        description: `A potential security problem using SSH over the Internet is that attackers can use various brute force techniques to gain access to Azure Virtual Machines. 

Once the attackers gain access, they can use a virtual machine as a launch point for compromising other machines on the Azure Virtual Network. The attackers could also access and attack networked devices outside of Azure.`,
        impact: `Attackers can use a variety of brute force approaches to obtain access to Azure Virtual Machines for unrestricted SSH Internet access.`,
        howToFix: `We recommend you disable SSH access over the internet to Network Security Groups.`,
        references: `https://docs.microsoft.com/en-us/azure/security/fundamentals/network-best-practices`,
        group: ``,
    },
    {
        id: `CKV_AZURE_11`,
        title: `SQL databases do not allow ingress from 0.0.0.0/0`,
        description: `SQL Server includes a firewall to block access to unauthorized connections. More granular IP addresses can be defined by referencing the range of addresses available from specific data centers.

The SQL server default Firewall exists with StartIp of 0.0.0.0 and EndIP of 0.0.0.0, allowing access to all Azure services. 

A custom rule can be set with StartIp of 0.0.0.0 and EndIP of 255.255.255.255, allowing access from any IP over the Internet. 

To reduce the potential attack surface for a SQL server, firewall rules should be defined with more granular IP addresses. This is achieved by referencing the range of addresses available from specific data centers.`,
        impact: `It is impossible to restrict the potential attack surface of a SQL server without allowing ingress from 0.0.0.0/0; thus, firewall rules should be set with more granular IP addresses.`,
        howToFix: `We recommend SQL Databases do not allow ingress from 0.0.0.0/0, that is, any IP.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/firewall-configure`,
        group: ``,
    },
    {
        id: `CKV_AZURE_12`,
        title: `Azure Network Watcher NSG flow logs retention`,
        description: `Flow logs enable capturing information about IP traffic flowing in and out of network security groups. 

Logs can be used to check for anomalies and give insight into suspected breaches.`,
        impact: `If the retention period for Azure Network Watcher NSG flow logs is specified, you will be unable to record information about IP traffic moving into and out of network security groups.`,
        howToFix: `We recommend your Network Security Group (NSG) Flow Log Retention Period is set to greater than or equal to 90 days.`,
        references: `https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-nsg-flow-logging-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_13`,
        title: `Azure App Service Web app authentication`,
        description: `Azure App Service Authentication is a feature that prevents anonymous HTTP requests from reaching the API app. Users with tokens are authenticated before they reach the API app. 

If an anonymous request is received from a browser, App Service redirects to a login page. To handle the login process select from a set of identity providers, or implement a custom authentication mechanism.

Enabling App Service Authentication allows every incoming HTTP request to pass through it before being handled by the application code. 

Authentication of users with specified providers is handled, for example, Azure Active Directory, Facebook, Google, Microsoft Account, and Twitter. It also handles authentication of validation, storing and refreshing of tokens, managing the authenticated sessions, and injecting identity information into request headers.`,
        impact: `If the Azure App Service Web app authentication is turned off, no incoming HTTP requests can travel through it before being processed by the application code. It also cannot manage validation authentication, token storage and renewal, maintaining authorized sessions, or inserting identity information into request headers.`,
        howToFix: `We recommend you ensure Azure App Service Web app authentication is On`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization`,
        group: ``,
    },
    {
        id: `CKV_AZURE_14`,
        title: `Azure App Service Web app redirects HTTP requests`,
        description: `Azure Web Apps by default allow sites to run under both HTTP and HTTPS and can be accessed by anyone using non-secure HTTP links. 

Non-secure HTTP requests can be restricted and all HTTP requests redirected to the secure HTTPS port.`,
        impact: `Without a redirect to HTTPS, you will not be able to use the SSL/TLS protocol to establish a secure connection that is both encrypted and authenticated.`,
        howToFix: `We recommend you enforce HTTPS-only traffic to increase security. This will redirect all non-secure HTTP requests to HTTPS ports. 

HTTPS uses the SSL/TLS protocol to provide a secure connection, which is both encrypted and authenticated.`,
        references: `https://docs.microsoft.com/en-us/azure/application-gateway/troubleshoot-app-service-redirection-app-service-url`,
        group: ``,
    },
    {
        id: `CKV_AZURE_15`,
        title: `Web App use the latest version of TLS`,
        description: `The Transport Layer Security (TLS) protocol secures the transmission of data over the internet using standard encryption technology. 

Encryption should be set with the latest version of TLS. App service allows TLS 1.2 by default, which is the recommended TLS level by industry standards, for example, PCI DSS.

App service currently allows the web app to set TLS versions 1.0, 1.1, and 1.2.`,
        impact: `You cannot protect data transfer over the internet using ordinary encryption technology unless you use the most recent version of TLS encryption.`,
        howToFix: `For secure web app connections, it is highly recommended to only use the latest TLS encryption 1.2 version.`,
        references: `https://docs.microsoft.com/en-us/security/engineering/solving-tls1-problem`,
        group: ``,
    },
    {
        id: `CKV_AZURE_16`,
        title: `RegisteredApp Service with an Azure Active Directory`,
        description: `Managed service identity in App Service increases security by eliminating secrets from the app, for example, credentials in the connection strings. App Service provides a highly-scalable, self-patching web hosting service in Azure. 

It also provides a managed identity for apps, which is a turn-key solution for securing access to an Azure SQL Database and other Azure services.`,
        impact: `Without activating double encryption, you will be unable to protect and safeguard your data in order to satisfy your organization's security and compliance responsibilities.`,
        howToFix: `We recommend you register the App Service with your Azure Active Directory account ensuring the app will connect securely to other Azure services without the need for usernames and passwords.`,
        references: `https://docs.microsoft.com/en-us/azure/data-explorer/double-encryption`,
        group: ``,
    },
    {
        id: `CKV_AZURE_17`,
        title: `Disabled Web App incoming client certificates`,
        description: `Client certificates allow the Web App to require a certificate for incoming requests. Only clients that have a valid certificate will be able to reach the app.

The TLS mutual authentication technique in enterprise environments ensures the authenticity of clients to the server. If incoming client certificates are enabled only an authenticated client with valid certificates can access the app.`,
        impact: `When client certificates are disabled, the Web App cannot need a certificate for incoming requests. Without a valid certificate, any client will be able to access the app.`,
        howToFix: `We recommend you esure Web App has incoming client certificates enabled`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/app-service-web-configure-tls-mutual-auth#:~:text=operation%20is%20complete.-,Enable%20client%20certificates,the%20top%20of%20the%20page.`,
        group: ``,
    },
    {
        id: `CKV_AZURE_18`,
        title: `Web App uses version of HTTP`,
        description: `Periodically, new versions of HTTP are released to address security flaws and include additional functionality. 

HTTP 2.0 has additional performance improvements on the head-of-line blocking problem of the older HTTP version, header compression, and prioritization of requests. 

HTTP 2.0 no longer supports HTTP 1.1's chunked transfer encoding mechanism, as it provides its own more efficient mechanisms for data streaming.`,
        impact: `Because you are not using the most recent HTTP version, you will be unable to benefit from any security patches or new functionality.`,
        howToFix: `We recommend using the latest HTTP version for web apps and taking advantage of any security fixes and new functionalities featured. 

With each software installation, you can determine if a given update meets your organization's requirements. 

Organizations should verify the compatibility and support provided for any additional software, assessing the current version against the update revision being considered.`,
        references: `https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications`,
        group: ``,
    },
    {
        id: `CKV_AZURE_19`,
        title: `Standard pricing tier`,
        description: `The standard pricing tier enables threat detection for networks and virtual machines and allows greater defense-in-depth. 

It provides threat intelligence, anomaly detection, and behavior analytics in the Azure Security Center. Threat detection is provided by the Microsoft Security Response Center (MSRC).`,
        impact: `If you do not pick the Standard price tier, you will be unable to identify threats on networks and virtual machines and will be unable to provide stronger defense-in-depth.`,
        howToFix: `We recommend you ensure a standard pricing tier is selected`,
        references: `https://azure.microsoft.com/en-in/pricing/details/app-service/windows/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_20`,
        title: `Security contact phone number`,
        description: `Microsoft reaches out to the designated security contact in case its security team finds that the organization's resources are compromised. 

This ensures that the correct people are aware of any potential compromise and can mitigate the risk in a timely fashion.`,
        impact: `Microsoft cannot contact the designated security contact if its security team discovers that the organization's resources have been hacked since no security contact phone number is provided.`,
        howToFix: `We recommend you provide a security contact phone number, but before taking any action make sure that the information provided is valid because the communication is not digitally signed.`,
        references: `https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/troubleshoot-sign-in-issue`,
        group: ``,
    },
    {
        id: `CKV_AZURE_21`,
        title: `Disabled Email Notifications for High Severity Alerts in Azure`,
        description: `Enabling email security alerts to be automatically sent to your organization's security staff ensures that the correct people are aware of any potential security issues, and can mitigate the risk.

Setting the security alert Send email notification for high severity alerts to On ensures that emails are sent from Microsoft if their security team determines a potential security breach has taken place.`,
        impact: `You cannot obtain alerts to be automatically delivered to your organization's for high severity security risk because you have disabled email notification.`,
        howToFix: `We recommend you ensure Send email notification for high severity alerts is enabled`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/configure-email-notifications`,
        group: ``,
    },
    {
        id: `CKV_AZURE_22`,
        title: `Disabled Security Alert Emails for Azure Subscription Owners`,
        description: `Enabling security alert emails to subscription owners ensures that they receive security alert emails from Microsoft. 

This ensures that they are aware of any potential security issues and can mitigate the risk identified in a timely fashion.`,
        impact: `Disabling security alert emails for subscription owners does not assure that they get Microsoft security alert emails.`,
        howToFix: `We recommend setting security alert emails to be sent to subscription owners.`,
        references: `https://docs.microsoft.com/en-us/microsoft-365/compliance/alert-policies`,
        group: ``,
    },
    {
        id: `CKV_AZURE_23`,
        title: `Azure SQL server auditing`,
        description: `The Azure platform allows a SQL server to be created as a service. Auditing tracks database events and writes them to an audit log in the Azure storage account. 

It also helps to maintain regulatory compliance, understand database activity, and gain insight into discrepancies and anomalies that could indicate business concerns or suspected security violations.`,
        impact: `If Azure SQL server auditing is off, you cannot audit the tracks of database events and write them to an audit log in the Azure storage account.`,
        howToFix: `We recommend you enable auditing at the server level, ensuring all existing and newly created databases on the SQL server instance are audited`,
        references: `https://docs.microsoft.com/answers/questions/214665/unable-to-enable-azure-sql-server-auditing-to-send.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_24`,
        title: `Azure SQL server audit log retention`,
        description: `Audit Logs can be used to check for anomalies and give insight into suspected breaches or misuse of information and access.`,
        impact: `Without Audit Logs, it is impossible to detect irregularities and provide insight into potential breaches or misuse of information and access.`,
        howToFix: `We recommend you configure SQL server audit retention to be greater than 90 days.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/auditing-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_25`,
        title: `Disabled Azure SQL Server threat detection alerts`,
        description: `Enabling all Threat Detection Types protects against SQL injection, database vulnerabilities, and any other anomalous activities.`,
        impact: `Disabling all Threat Detection Types will not protect you from SQL injection, database vulnerabilities, or any other suspicious activity.`,
        howToFix: `We recommend you enable all types of threat detection on SQL servers.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/threat-detection-configure`,
        group: ``,
    },
    {
        id: `CKV_AZURE_26`,
        title: `Azure SQL server sends alerts to the field value`,
        description: `Provide the email address where alerts will be sent when anomalous activities are detected on SQL servers. 

Providing the email address to receive alerts ensures that any detection of anomalous activities is reported as soon as possible, enabling early mitigation of any potential risk detected.`,
        impact: `Without supplying an email address to receive warnings, there is no guarantee that any discovery of unusual behaviors will be communicated as soon as feasible, allowing for early mitigation of any potential danger observed.`,
        howToFix: `We recommend you add an email address to the Send Alerts to field value for MSSQL servers.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/alerts-insights-configure-portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_27`,
        title: `Disabled MSSQL servers have email service and co-administrators`,
        description: `Enable Service and Co-administrators to receive security alerts from the SQL server. 

Providing the email address to receive alerts ensures that any detection of anomalous activities is reported as soon as possible, enabling early mitigation of any potential risk detected.`,
        impact: `For deactivated email service and co-administrators on MSSQL servers, you will not get security alerts from the SQL server. It cannot ensure that any identification of suspicious activity is communicated as quickly as feasible, allowing for early reduction of any potential danger found.`,
        howToFix: `We recommend you ensure MSSQL servers have email service and co-administrators enabled`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/alerts-insights-configure-portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_28`,
        title: `MySQL server databases Enforce SSL connection`,
        description: `SSL connectivity provides a new layer of security by connecting a database server to client applications using Secure Sockets Layer (SSL). 

Enforcing SSL connections between a database server and client applications helps protect against man-in-the-middle attacks. 

This is achieved by encrypting the data stream between the server and the application.`,
        impact: `Without SSL connectivity in Azure MySQL database server, a new layer of security cannot be provided by connecting a database server to client applications via Secure Sockets Layer (SSL). Disabling SSL connections between a database server and client apps will not assist guard against man-in-the-middle attacks.`,
        howToFix: `We recommend setting Enforce SSL connection to Enable on MYSQL Server databases.`,
        references: `https://docs.microsoft.com/en-us/azure/mysql/concepts-ssl-connection-security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_29`,
        title: `Azure PostgreSQL database server with SSL connection`,
        description: `SSL connectivity provides a new layer of security by connecting a database server to client applications using a Secure Sockets Layer (SSL). 

Enforcing SSL connections between a database server and client applications helps protect against man-in-the-middle attacks. 

This is achieved by encrypting the data stream between the server and the application.`,
        impact: `Without SSL connectivity in Azure PostgreSQL database server, a new layer of security cannot be provided by connecting a database server to client apps via Secure Sockets Layer (SSL). Disabling SSL connections between a database server and client apps will not assist guard against man-in-the-middle attacks.`,
        howToFix: `We recommend you to set Enforce SSL connection to Enable on PostgreSQL Server databases.`,
        references: `https://docs.microsoft.com/answers/questions/114381/failed-to-connect-to-azure-postgresql-with-ssl-ena.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_30`,
        title: `Azure PostgreSQL database server with log checkpoints parameter`,
        description: `Enabling log_checkpoints helps the PostgreSQL Database to log each checkpoint and generate query and error logs. 

Access to transaction logs is not supported. Query and error logs can be used to identify, troubleshoot, repair configuration errors, and address sub-optimal performance issues.`,
        impact: `Disabling log_checkpoints on the Azure PostgreSQL database server will prevent the PostgreSQL Database from logging each checkpoint and generating query and error reports.`,
        howToFix: `We recommend you set log_checkpoints to On for PostgreSQL Server Databases.`,
        references: `https://docs.microsoft.com/en-us/azure/postgresql/concepts-server-logs`,
        group: ``,
    },
    {
        id: `CKV_AZURE_31`,
        title: `Azure PostgreSQL database server with log connections`,
        description: `Enabling log_connections allows a PostgreSQL Database to log attempted connections to the

server in addition to logging the successful completion of client authentication.

Log data can be used to identify, troubleshoot, repair configuration errors, and identify sub-optimal performance issues.`,
        impact: `When log_connections is off in Azure PostgreSQL database server, a PostgreSQL database cannot log attempted connections to the server in addition to logging the successful completion of client authentication.`,
        howToFix: `We recommend you set log_connections to On for PostgreSQL Server Databases.`,
        references: `https://docs.microsoft.com/en-us/azure/postgresql/concepts-server-logs`,
        group: ``,
    },
    {
        id: `CKV_AZURE_32`,
        title: `Azure PostgreSQL database server with connection throttling`,
        description: `Enabling connection_throttling allows the PostgreSQL Database to set the verbosity of logged messages. 

It generates query and error logs concerning concurrent connections that could lead to a successful Denial of Service (DoS) attack by exhausting connection resources. 

A system can also fail or be degraded by an overload of legitimate users. Query and error logs can be used to identify, troubleshoot, repair configuration errors, and address sub-optimal performance issues.`,
        impact: `Because connection throttling is disabled in the Azure PostgreSQL database server, the PostgreSQL Database cannot adjust the verbosity of recorded messages. It cannot also create query and error logs for concurrent connections, which might lead to a successful Denial of Service (DoS) attack by draining connection resources.`,
        howToFix: `We recommend you set connection_throttling to On for PostgreSQL Server Databases.`,
        references: `https://docs.securestate.vmware.com/rule-docs/azure-postgresql-server-parameter-connection-throttling-on`,
        group: ``,
    },
    {
        id: `CKV_AZURE_33`,
        title: `Storage logging for queue service read, write and delete requests`,
        description: `The Azure Queue Storage service stores messages that may be read by any client with access to the storage account.

A queue may contain an unlimited number of messages, each of which can be up to 64KB in size when using version 2011-08-18 or newer.

Storage Logging takes place server-side recording details in the storage account for both successful and failed requests. These logs allow users to see the details of reading, writing, and deleting operations against the queues. 

Storage Logging log entries contain the following information about individual requests: timing information, for example, start time, end-to-end latency, server latency, authentication details, concurrency information, and the size of request and response messages.

Storage Analytics logs contain detailed information about successful and failed requests to a storage service. This information can be used to monitor individual requests and to diagnose issues with a storage service. 

Requests are logged on a best-effort basis. Storage Analytics logging is not enabled by default for your storage account.`,
        impact: `It cannot log server-side recording details in the storage account for both successful and unsuccessful requests unless Storage Logging is enabled for queue service. Because of the lack of storage logging for queue service, you cannot observe the specifics of read, write, and delete actions against the queues.`,
        howToFix: `We recommend you ensure Storage logging for queue service has read, write and delete requests`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/manage-storage-analytics-logs`,
        group: ``,
    },
    {
        id: `CKV_AZURE_34`,
        title: `Blob Containers public access level`,
        description: `Anonymous, public read access to a container and its blobs can be enabled in Azure Blob storage. 

It grants read-only access to these resources without sharing the account key or requiring a shared access signature.`,
        impact: `It provides read-only access to these resources without requiring a shared access signature or sharing the account key.`,
        howToFix: `We recommend you do not provide anonymous access to blob containers until, and unless, it is strongly desired. 

A shared access signature token should be used for providing controlled and timed access to blob containers.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure?tabs=portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_35`,
        title: `Azure Storage Account default network access key`,
        description: `Restricting default network access helps to provide an additional layer of security. 

By default, storage accounts accept connections from clients on any network. 

To limit access to selected networks, the default action must be changed.`,
        impact: `In Azure Storage Account, you cannot add an extra layer of protection for default network access. It cannot restrict access to certain networks.`,
        howToFix: `We recommend you configure storage accounts to deny access to traffic from all networks, including internet traffic. 

At an appropriate time, access can be granted to traffic from specific Azure Virtual networks, allowing a secure network boundary for specific applications to be built.

Access can also be granted to public internet IP address ranges enabling connections from specific internet or on-premises clients. 

When network rules are configured only applications from allowed networks can access a storage account. 

When calling from allowed network applications continue to require authorization, such as a valid access key or SAS token, to access the storage account.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_36`,
        title: `Disabled Azure Storage Account Trusted Microsoft Services access`,
        description: `Some Microsoft services that interact with storage accounts operate from networks that cannot be granted access through network rules. To help this type of service work as intended, you can allow the set of trusted Microsoft services to bypass the network rules. These services will use strong authentication to access the storage account. Allowing trusted Microsoft services grants access to the storage account for the following services: Azure Backup, Azure Site Recovery, Azure DevTest Labs, Azure Event Grid, Azure Event Hubs, Azure Networking, Azure Monitor, and Azure SQL Data Warehouse (when registered in the subscription).`,
        impact: `Some Microsoft services that interact with storage accounts run from networks that cannot be permitted access via network rules because the list of trusted Microsoft services is not allowed.`,
        howToFix: `Turning on firewall rules for a storage account will block access to incoming requests for data, including from other Azure services, such as using the portal and writing logs. Functionality can be re-enabled. 

The customer can get access to services like Monitor, Networking, Hubs, and Event Grid by enabling Trusted Microsoft Services through exceptions. 

Backup and Restore of Virtual Machines using unmanaged disks in storage accounts with network rules applied is supported by creating an exception.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_37`,
        title: `Log retention activity`,
        description: `A log profile controls how the activity log is exported and retained. 

Since the average time to detect a breach is 210 days, the activity log should be retained for 365 days or more, providing time to respond to any incidents.`,
        impact: `Without an activity log that is kept for 365 days or longer, there is no way to respond to any events.`,
        howToFix: `We recommend you set activity log retention for 365 days or greater.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log`,
        group: ``,
    },
    {
        id: `CKV_AZURE_38`,
        title: `Configure log profile to capture all activities`,
        description: `A log profile controls how the activity log is exported. 

Configuring the log profile to collect logs for the categories Write, Delete and Action ensures that all control/management plane activities performed on the subscription are exported.`,
        impact: `If the log profile is not configured to gather logs for the categories Write, Delete, and Action, all control/management plane events done on the subscription are not exported.`,
        howToFix: `We recommend you configure the log profile to export all activities from the control/management plane.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log`,
        group: ``,
    },
    {
        id: `CKV_AZURE_39`,
        title: `Azure subscriptions with custom roles permissions`,
        description: `Subscription ownership should not include permission to create custom owner roles. 

The principle of least privilege should be followed and only necessary privileges are assigned instead of allowing full administrative access. 

Classic subscription admin roles offer basic access management and include Account Administrator, Service Administrator, and Co-Administrators.`,
        impact: `Azure subscriptions with custom roles are extremely permissive and can force users to execute any activity that compromises data security.`,
        howToFix: `We recommend the minimum permissions necessary be given to subscription owner accounts initially.

Permissions can be added as needed by the account holder. 

This ensures the account holder cannot perform actions that were not intended.`,
        references: `https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles`,
        group: ``,
    },
    {
        id: `CKV_AZURE_40`,
        title: `Keys expiration date`,
        description: `The Azure Key Vault enables users to store and use cryptographic keys within the Microsoft Azure environment. 

The exp (expiration time) attribute identifies the expiration time on or after which the key must not be used for a cryptographic operation. Keys are not set to expire by default.`,
        impact: `All keys in the Azure Key Vault can be used beyond their allotted lives unless an explicit expiry period is defined.`,
        howToFix: `We recommend you rotate keys in the key vault and set an explicit expiration time for all keys in the Azure Key Vault. 

This ensures that the keys cannot be used beyond their assigned lifetimes.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-azure-1.3.0-8.1/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_41`,
        title: `AKV secrets have an expiration date set`,
        description: `The Azure Key Vault (AKV) enables users to store and keep secrets within the Microsoft Azure environment. 

Secrets in the AKV are octet sequences with a maximum size of 25k bytes each.

The exp (expiration time) attribute identifies the expiration time on or after which the secret must not be used. By default, secrets do not expire.`,
        impact: `All secrets in the Azure Key Vault can be used beyond their allotted lives unless an explicit expiration period is defined.`,
        howToFix: `We recommend you rotate secrets in the key vault and set an explicit expiration time for all secrets.  

This ensures that the secrets cannot be used beyond their assigned lifetimes.`,
        references: `https://docs.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual?tabs=azure-cli`,
        group: ``,
    },
    {
        id: `CKV_AZURE_42`,
        title: `Recoverable Azure key vault`,
        description: `The key vault contains object keys, secrets, and certificates. Accidental unavailability of a key vault can cause immediate data loss or loss of security functions supported by the key vault objects, such as authentication, validation, verification, and non-repudiation. 

Deleting or purging a key vault leads to immediate data loss as keys encrypt data, including storage accounts, SQL databases, and/or dependent services provided by key vault objects, such as keys, secrets, and certificates.`,
        impact: `Because the Do Not Purge and Soft Delete functionalities in the key vault are not enabled, it is impossible to avoid inadvertent deletion by a user performing the delete/purge command on the key vault, or intentional deletion by an attacker/malicious user.`,
        howToFix: `We recommended you make the key vault recoverable by enabling the Do Not Purge and Soft Delete functions. 

This will prevent accidental deletion by a user running the delete/purge command on the key vault, or an attacker/malicious user does deliberately causes disruption.`,
        references: `https://docs.microsoft.com/en-us/azure/key-vault/general/key-vault-recovery`,
        group: ``,
    },
    {
        id: `CKV_AZURE_43`,
        title: `Storage Account naming rules`,
        description: `A storage account provides a unique namespace in Azure for your data. Every object that you store in Azure Storage has an address that includes your unique account name. The combination of the account name and the Azure Storage service endpoint forms the endpoints for your storage account.

When naming your storage account, keep these rules in mind:

Storage account names must be between 3 and 24 characters in length and may contain numbers and lowercase letters only.
Your storage account name must be unique within Azure. No two storage accounts can have the same name.`,
        impact: `Unconsistent naming standards do not make resources simpler to find and do not aid in understanding a resource's function in a solution.`,
        howToFix: `By concatenating your naming convention with the output of the uniqueString function, you may get a unique name.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_44`,
        title: `Storage account uses the latest version of TLS`,
        description: `Communication between a client application and an Azure Storage account is encrypted using Transport Layer Security (TLS). 

TLS is a standard cryptographic protocol that ensures privacy and data integrity between clients and services over the Internet.

Azure Storage currently supports three versions of the TLS protocol: 1.0, 1.1, and 1.2. Azure Storage uses TLS 1.2 on public HTTPS endpoints, but TLS 1.0 and TLS 1.1 are still supported for backward compatibility.`,
        impact: `If the storage account does not use the most recent version of TLS encryption, communication between a client application and an Azure Storage account is not encrypted. You cannot secure privacy and data integrity between clients and services over the Internet unless you use the most recent version of TLS.`,
        howToFix: `To follow security best practices and the latest PCI compliance standards, Microsoft recommends enabling the latest version of TLS protocol (TLS 1.2) for all your Microsoft Azure App Service web applications. 

PCI DSS information security standard requires that all websites accepting credit card payments use TLS 1.2 after June 30, 2018.`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/overview-security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_45`,
        title: `Exposed secrets in Azure VM customData`,
        description: `The Azure VM metadata field customData allows custom code to run right after the VM is launched. 

It contains code exposed to any entity which has the most basic access to the VM, including read-only configurations. The code is not encrypted.`,
        impact: `Secrets are revealed in Azure VM customData passwords, private keys, and being disclosed to third parties can be easily accessible.`,
        howToFix: `We recommend you use Azure Key Vault to access secrets from the VM. Removing secrets from unencrypted places which can be easily accessed reduces the risk of passwords, private keys, and more from being exposed to third parties.`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/custom-data`,
        group: ``,
    },
    {
        id: `CKV_AZURE_46`,
        title: `Unspecified retention period`,
        description: `This check examines the MSSQL database's extended auditing policy and requires that the retention period is 90 days or more.`,
        impact: `A log data that does not have a retention term of 90 days or more will not allow you to collect the appropriate quantity of audit data to check for abnormalities and potential security breaches, as well as abuse of information and access to your SQL database.`,
        howToFix: `We recommend you ensure a retention period of less than 90 days is specified`,
        references: `https://answers.microsoft.com/en-us/msoffice/forum/all/unable-to-set-audit-log-retention-period-more-than/ad5dbd5e-1cd3-4a8b-a9cd-a3a85e7f3c15`,
        group: ``,
    },
    {
        id: `CKV_AZURE_47`,
        title: `Disabled SSL connection for MariaDB servers`,
        description: `Azure Database for MariaDB supports connecting your database server to client applications using Secure Sockets Layer (SSL). 

Enforcing SSL connections between your database server and your client applications helps protect against "man in the middle" attacks by encrypting the data stream between the server and your application.`,
        impact: `Without requiring SSL connections between your database server and your client apps, you are vulnerable to'man in the middle' attacks since the data stream between the server and your application is not encrypted.`,
        howToFix: `Ensure that connections to this DB use SSL.`,
        references: `https://docs.microsoft.com/en-us/azure/mariadb/concepts-ssl-connection-security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_48`,
        title: `Set ‘False’ to ‘public network access enabled’  for MariaDB servers`,
        description: `Firewalls prohibit all computers from accessing your database server unless you designate which computers have authorization. The firewall permits access to the server depending on the request's originating IP address.

Create firewall rules that describe permitted IP address ranges to configure a firewall. Firewall rules can be set up at the server level.`,
        impact: `MariaDB servers that do not have public network access enabled set to False expose this DB to the internet, which might result in data leaks.`,
        howToFix: `We recommend you ensure ‘public network access enabled’ is set to ‘False’ for MariaDB servers`,
        references: `https://docs.microsoft.com/en-us/azure/mariadb/concepts-firewall-rules`,
        group: ``,
    },
    {
        id: `CKV_AZURE_49`,
        title: `Azure Linux scale set uses an SSH key`,
        description: `The default option for a Linux scale set uses basic authentication as an access credential for the secure shell network protocol.`,
        impact: `Common credentials are not the best solution to protect your Linux scale sets from malicious actions like brute-force attacks by giving a degree of permission that can only be satisfied by privileged users who control the private key linked with the public key generated on these sets.`,
        howToFix: `SSH key-based access for a Linux scale set.`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys`,
        group: ``,
    },
    {
        id: `CKV_AZURE_50`,
        title: `Virtual Machine extensions`,
        description: `Azure virtual machine extensions run with administrative privileges and as such can access anything on a virtual machine.`,
        impact: `Any extensions placed on Microsoft Azure virtual machines (VMs) cannot meet your organization's security and compliance standards. These extensions run with administrative rights and have the ability to access any configuration file or data on a virtual machine.`,
        howToFix: `We recommend you that not install virtual machine extensions to avoid unwanted access`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/troubleshoot`,
        group: ``,
    },
    {
        id: `CKV_AZURE_52`,
        title: `MSSQL TLS encryption`,
        description: `SQL Server can use Transport Layer Security (TLS) to encrypt data that is transmitted across a network between an instance of SQL Server and a client application. 

The TLS encryption is performed within the protocol layer and is available to all supported SQL Server clients.`,
        impact: `Without the most recent version of TLS in MSSQL, conventional encryption technology cannot be used to safeguard data transfer between servers and web browsers over the Internet.`,
        howToFix: `We recommend you ensure MSSQL is using the latest version of TLS encryption`,
        references: `https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-ver15`,
        group: ``,
    },
    {
        id: `CKV_AZURE_53`,
        title: `'public network access enabled' for mySQL servers`,
        description: `Ensure public network access enabled is set to False for MySQL servers.`,
        impact: `If the 'public network access enabled' setting for MySQL servers is not set to False, it might lead to security risks and data leaks across the internet.`,
        howToFix: `We recommend you ensure 'public network access enabled' is set to False for MySQL servers`,
        references: `https://docs.microsoft.com/en-us/azure/mysql/concepts-firewall-rules`,
        group: ``,
    },
    {
        id: `CKV_AZURE_54`,
        title: `MySQL TLS encryption`,
        description: `MySQL supports encrypted connections between clients and the server using the TLS (Transport Layer Security) protocol. TLS sometimes referred to as SSL (Secure Sockets Layer), but MySQL does not use the SSL protocol for encrypted connections because its encryption is weak.

TLS uses encryption algorithms to ensure that data received over a public network can be trusted. It has mechanisms to detect data change, loss, or replay. TLS also incorporates algorithms that provide identity verification using the X.509 standard.`,
        impact: `Conventional encryption technology cannot be used to secure data flow between servers and web browsers over the Internet without the most recent version of TLS in MySql.`,
        howToFix: `We recommend you ensure MySQL is using the latest version of TLS encryption`,
        references: `https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.Concepts.PostgreSQL.Query_Logging`,
        group: ``,
    },
    {
        id: `CKV_AZURE_55`,
        title: `Azure Security Center Defender is set to On for servers`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. 

It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for servers adds threat detection and advanced defenses for Windows and Linux machines.`,
        impact: `If the Azure Security Center Defender for servers is set to Off, it will be unable to offer threat detection and sophisticated protections for Windows and Linux computers.`,
        howToFix: `It is recommended to fix buildtime in terraform. Resource is azurerm_security_center_subscription_pricing. Arguments are resource_type - (Required) The resource type this setting affects. Ensure that SqlServers is declared to pass this check.`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/troubleshooting-guide`,
        group: ``,
    },
    {
        id: `CKV_AZURE_56`,
        title: `Azure function app authentication`,
        description: `While function keys can provide some mitigation for unwanted access, the only way to truly secure your function endpoints is by implementing positive authentication of clients accessing your functions. You can then make authorization decisions based on identity.`,
        impact: `Azure App Service Authentication is ineffective because it cannot prevent anonymous HTTP requests from reaching the Function app or authenticate those with tokens before they reach the Function app.`,
        howToFix: `We recommend you ensure Azure function app authentication is on`,
        references: `https://docs.microsoft.com/en-us/azure/azure-functions/security-concepts`,
        group: ``,
    },
    {
        id: `CKV_AZURE_57`,
        title: `CORS disallows resources to access app services`,
        description: `Cross-origin resource sharing (CORS) is a browser mechanism that enables controlled access to resources located outside of a given domain`,
        impact: `App services enable all domains to use your function app for CORS, while resources may access function apps.`,
        howToFix: `It is recommended to enable CORS.`,
        references: `https://docs.microsoft.com/en-us/rest/api/storageservices/cross-origin-resource-sharing--cors--support-for-the-azure-storage-services`,
        group: ``,
    },
    {
        id: `CKV_AZURE_58`,
        title: `Azure Synapse Workspaces enable managed virtual networks`,
        description: `Synapse Workspace does not have managed virtual networks enabled by default.

When you create your Azure Synapse workspace, you can choose to associate it with a Microsoft Azure Virtual Network. 

The Virtual Network associated with your workspace is managed by Azure Synapse. This Virtual Network is called a Managed workspace Virtual Network. Managed private endpoints are private endpoints created in a Managed Virtual Network associated with your Azure Synapse workspace.

 Managed private endpoints to establish a private link to Azure resources. You can only use private links in a workspace that has a Managed workspace Virtual Network.`,
        impact: `If you do not enable Azure Synapse Workspaces to manage virtual networks, your workspace will not have a Virtual Network connected with it.`,
        howToFix: `It is recommended to create an Azure Synapse workspace with a Managed workspace Virtual Network`,
        references: `https://docs.microsoft.com/en-us/azure/synapse-analytics/security/synapse-workspace-managed-vnet`,
        group: ``,
    },
    {
        id: `CKV_AZURE_59`,
        title: `Azure storage account blob containers with public access`,
        description: `Azure Storage supports optional anonymous public read access for containers and blobs. By default, anonymous access to your data is never permitted.

Unless you explicitly enable anonymous access, all requests to a container and its blobs must be authorized. 

When you configure a container's public access level setting to permit anonymous access, clients can read data in that container without authorizing the request.`,
        impact: `Allowing blob containers with public access in an Azure storage account might lead to security risks and data leaks.`,
        howToFix: `When a container is configured for public access, any client can read data in that container. 

Public access presents a potential security risk, so if your scenario does not require it, We recommend that you disallow it for the storage account.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure?tabs=portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_60`,
        title: `Disabled storage accounts secure transfer`,
        description: `The secure transfer option enhances the security of a storage account by only allowing requests to the storage account by a secure connection. 

For example, when calling REST APIs to access storage accounts, the connection must use HTTPS. 
Any requests using HTTP will be rejected when 'secure transfer required' is enabled. 

When using the Azure files service, connection without encryption will fail, including scenarios using SMB 2.1, SMB 3.0 without encryption, and some flavors of the Linux SMB client. 

Because Azure storage doesn’t support HTTPS for custom domain names, this option is not applied when using a custom domain name.`,
        impact: `Without the possibility of secure transfer You cannot improve the security of a storage account by only allowing secure connections to the storage account.`,
        howToFix: `We recommend using the secure transfer (HTTPS) to the storage account`,
        references: `https://docs.microsoft.com/en-us/azure/storage/blobs/security-recommendations`,
        group: ``,
    },
    {
        id: `CKV_AZURE_61`,
        title: `Azure Security Center Defender`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. 

It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for App Service detects attacks targeting applications running over App Service.`,
        impact: `Without Azure Defender for App Service, it is impossible to detect attacks on applications running on App Service.`,
        howToFix: `We recommend you ensure Azure Security Center Defender is set to On for app service`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/defender-for-app-service-introduction`,
        group: ``,
    },
    {
        id: `CKV_AZURE_62`,
        title: `CORS allows resources to access function apps`,
        description: `CORS (Cross-Origin Resource Sharing) is an HTTP feature that allows a web application operating in one domain to access resources in another. The Azure portal or an Azure Resource Manager template may be used to setup the Cross-origin resource sharing (CORS) configuration.`,
        impact: `App services enable all domains to use your function app for CORS, while resources may access function apps.`,
        howToFix: `We recommend you ensure CORS does not allow resources to access function apps`,
        references: `https://docs.microsoft.com/answers/questions/22038/sudden-cors-issue-for-like-no-reason.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_63`,
        title: `Disabled App service HTTP logging`,
        description: `Debugging an App Service app is made easier by Azure's built-in diagnostics. This post will teach you how to enable diagnostic logging, add instrumentation to your application, and retrieve the information captured by Azure.

To deal with diagnostic logs, this post use the Azure portal and the Azure CLI. See Troubleshooting Azure in Visual Studio for more information on working with diagnostic logs in Visual Studio.`,
        impact: `Disabling HTTP logging in App Service might result in logs being stored on your application's file system and being inaccessible through an FTP client.`,
        howToFix: `Navigate to your app and choose App Service logs to enable application logging for Windows apps in the Azure portal.

Choose whether to enable Application Logging (Filesystem) or Application Logging (Blob), or both.`,
        references: `https://www.finalanalytics.com/blog/http-logging-azure-web-app-service`,
        group: ``,
    },
    {
        id: `CKV_AZURE_64`,
        title: `Azure file sync public network access`,
        description: `When access to the public endpoint is disabled, the storage account can still be accessed through its private endpoints. Otherwise valid requests to the storage account's public endpoint will be rejected.`,
        impact: `For allowing public network access in Azure file sync, public endpoints with a public IP address that may be accessed from anywhere in the globe are used.`,
        howToFix: `We recommend you disable the public access network`,
        references: `https://docs.microsoft.com/en-us/azure/storage/file-sync/file-sync-networking-endpoints?tabs=azure-portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_65`,
        title: `Disabled App service detailed error messages`,
        description: `Should Detailed error messages be enabled on this App Service,
Its defaults value is false.`,
        impact: `When detailed error messages are disabled in app service, they cannot provide information that might assist determine why the server gives the error code.`,
        howToFix: `It is recommended to fix in buildtime in Terraform. Resource is azurerm_app_service. Argument is detailed_error_messages_enabled.`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs`,
        group: ``,
    },
    {
        id: `CKV_AZURE_66`,
        title: `Disabled App service failed request tracing`,
        description: `Azure has diagnostics to help with troubleshooting an App Service app. In this post, you will learn how to enable diagnostic logging and add instrumentation to your application, as well as how to retrieve the information captured by Azure.

To deal with diagnostic logs, this post use the Azure portal and Azure CLI. See Troubleshooting Azure in Visual Studio for details on working with diagnostic logs in Visual Studio.`,
        impact: `Failed request was disabled. Tracing in app service will not help you understand why all of your requests failed.`,
        howToFix: `It recommended to enable logging in windows`,
        references: `https://www.c-sharpcorner.com/article/azure-app-service-configure-failed-request-tracing/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_67`,
        title: `Function app HTTP Version`,
        description: `HTTP/2 is a redesign of how HTTP semantics flow across TCP connections, and it is supported by Windows 10 and Windows Server 2016. After nearly two decades of HTTP/1.1 use, HTTP/2 is a significant update that minimizes the impact of latency and connection strain on web servers.

The use of persistent connections to service numerous requests in a sequence was a key innovation in HTTP/1.1. A persistent connection in HTTP/2 can be utilized to handle numerous concurrent requests. In the process, HTTP/2 adds a number of new capabilities that increase the performance of HTTP across the network.`,
        impact: `Without HTTP 2.0, Azure function apps cannot incorporate additional speed enhancements on the old HTTP version's head-of-line blocking issue, header compression, and request prioritization.`,
        howToFix: `We recommend you ensure the function app is using the latest version of HTTPS`,
        references: `https://azure.microsoft.com/en-us/blog/announcing-http-2-support-in-azure-app-service/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_68`,
        title: `PostgreSQL server public network access`,
        description: `Disable the public network access property to improve security and ensure your Azure Database for PostgreSQL can only be accessed from a private endpoint. 

This configuration disables access from any public address space outside of the Azure IP range and denies all logins that match IP or virtual network-based firewall rules.`,
        impact: `Enabling the public network access option does not increase security by allowing public access to your Azure Database for PostgreSQL flexible servers.`,
        howToFix: `We recommend you disable public network access for the Postgres server`,
        references: `https://docs.microsoft.com/en-us/azure/postgresql/policy-reference`,
        group: ``,
    },
    {
        id: `CKV_AZURE_69`,
        title: `Azure Security Center Defender for Azure SQL database servers`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. 

It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for SQL servers on machines extends the protections for your Azure-native SQL Servers to fully support hybrid environments and protect SQL servers (all supported versions) hosted in Azure`,
        impact: `If Azure Defender for SQL Servers is turned off on a computer, it will not be able to defend your Azure-native SQL Servers in order to fully support hybrid environments, nor will it be able to protect SQL servers (all supported versions) hosted in Azure.`,
        howToFix: `We recommend you ensure that Azure Defender is set to On for Azure SQL database servers`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/azure-defender-for-sql`,
        group: ``,
    },
    {
        id: `CKV_AZURE_70`,
        title: `Function apps accessible over HTTPS`,
        description: `The use of HTTPS ensures server/service authentication and protects data in transit from network layer eavesdropping attacks.`,
        impact: `Without HTTPS, it is impossible to secure server/service authentication and to protect data in transit from network layer eavesdropping threats.`,
        howToFix: `We recommend you ensure function apps are accessible over HTTPS only`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/policy-reference`,
        group: ``,
    },
    {
        id: `CKV_AZURE_71`,
        title: `Disabled managed identity provider for app services`,
        description: `A managed identity from Azure Active Directory (Azure AD) allows your app to easily access other Azure AD-protected resources such as Azure Key Vault. The identity is managed by the Azure platform and does not require you to provision or rotate any secrets.`,
        impact: `Without Managed service identity in App Service, it is impossible to make the app more secure by removing secrets from it, such as credentials in connection strings.`,
        howToFix: `We recommend you ensure Managed identity provider is enabled for app services`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/overview-managed-identity?tabs=dotnet`,
        group: ``,
    },
    {
        id: `CKV_AZURE_72`,
        title: `Enabled remote debugging app services`,
        description: `Azure Application Services Developers may use Remote Debugging to link Visual Studio to their Azure App Service and obtain complete control. They have the ability to trigger breakpoints, directly control memory, step through code, and even change the code flow.`,
        impact: `The use of remote debugging in Azure App Services does not improve security or prevent apps from unwanted access.`,
        howToFix: `Ensure that remote debugging disabled for app services`,
        references: `https://blog.devgenius.io/remote-debugging-azure-app-service-c9a89e2f8771`,
        group: ``,
    },
    {
        id: `CKV_AZURE_73`,
        title: `Unencrypted Automation account variables`,
        description: `Secure assets in Azure Automation include credentials, certificates, connections, and encrypted variables. 

These assets are protected in Azure Automation using multiple levels of encryption. Based on the top-level key used for the encryption, there are two models for encryption:

- Using Microsoft-managed keys

Each secure asset is encrypted and stored in Azure Automation using a unique key (Data Encryption key) that is generated for each automation account. 

These keys themselves are encrypted and stored in Azure Automation using yet another unique key that is generated for each account called an Account Encryption Key (AEK). 

These account encryption keys are encrypted and stored in Azure Automation using Microsoft-managed Keys.


- Using keys that you manage

You can manage the encryption of secure assets for your Automation account with your keys. 

When you specify a customer-managed key at the level of the Automation account, that key is used to protect and control access to the account encryption key for the Automation account. 

This in turn is used to encrypt and decrypt all the secure assets. 

Customer-managed keys offer greater flexibility to create, rotate, disable, and revoke access controls. You can also audit the encryption keys used to protect your secure assets.`,
        impact: `Automation Account Variables that are not encrypted cannot be used to secure and safeguard programs from unwanted access.`,
        howToFix: `Ensure Automation account variables are encrypted`,
        references: `https://docs.microsoft.com/en-us/azure/automation/automation-secure-asset-encryption`,
        group: ``,
    },
    {
        id: `CKV_AZURE_74`,
        title: `Azure Data Explorer disk encryption`,
        description: `Azure Disk Encryption helps protect and safeguard your data to meet your organizational security and compliance commitments. 

It provides volume encryption for the OS and data disks of your cluster's virtual machines. 

Azure Disk Encryption also integrates with Azure Key Vault, which allows us to control and manage the disk encryption keys and secrets, and ensures all data on the VM disks is encrypted.`,
        impact: `Disabling encryption at rest with a customer-managed key on your Azure Data Explorer cluster will not provide you any more control over the key used at rest.`,
        howToFix: `We recommend you ensure Azure Data Explorer uses disk encryption`,
        references: `https://docs.microsoft.com/en-us/azure/data-explorer/security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_75`,
        title: `Azure Data Explorer double encryption`,
        description: `When you create a cluster, its storage is automatically encrypted at the service level. 

If you require a higher level of assurance that your data is secure, you can also enable Azure Storage infrastructure level encryption, also known as double encryption. 

When infrastructure encryption is enabled, data in the storage account is encrypted twice, once at the service level and once at the infrastructure level, using two different encryption algorithms and two different keys. 

Double encryption of Azure Storage data protects against a scenario where one of the encryption algorithms or keys may be compromised. 

In this scenario, the additional layer of encryption continues to protect your data.

Enabling double encryption is only possible during cluster creation.`,
        impact: `Without activating double encryption, you will be unable to help protect and safeguard your data in order to satisfy your corporate security and compliance requirements.`,
        howToFix: `We recommend you ensure Azure Data Explorer uses double encryption`,
        references: `https://docs.microsoft.com/en-us/azure/data-explorer/double-encryption?tabs=portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_76`,
        title: `Azure Batch account data encryption`,
        description: `By default Azure Batch uses platform-managed keys to encrypt all the customer data stored in the Azure Batch Service, like certificates, job/task metadata. Optionally, you can use your keys, i.e., customer-managed keys, to encrypt data stored in Azure Batch.`,
        impact: `Data cannot be encrypted with an Azure Key Vault key produced and held by you unless customer-managed keys are enabled. It is impossible to have complete control and accountability for the key lifespan, including rotation and management.`,
        howToFix: `We recommend you ensure the Azure Batch account uses a key vault to encrypt data`,
        references: `https://docs.microsoft.com/en-us/azure/batch/batch-customer-managed-key`,
        group: ``,
    },
    {
        id: `CKV_AZURE_77`,
        title: `Unrestricted UDP Services from the internet`,
        description: `Disable Internet exposed UDP ports on network security groups. 

The potential security problem with broadly exposing UDP services over the Internet is that attackers can use DDoS amplification techniques to reflect spoofed UDP traffic from Azure Virtual Machines. 

The most common types of these attacks use exposed DNS, NTP, SSDP, SNMP, CLDAP, and other UDP-based services as amplification sources for disrupting services of other machines on the Azure Virtual Network or even attack networked devices outside of Azure.`,
        impact: `The risk of publicly exposing UDP services over the Internet is that attackers can employ DDoS amplification techniques to reflect faked UDP traffic from Azure Virtual Machines.`,
        howToFix: `Disable direct UDP access to your Azure Virtual Machines from the internet. 

After direct UDP access from the internet is disabled, you can use other options to access UDP-based services running on these virtual machines.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-azure-1.3.0-6.6/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_78`,
        title: `Disabled FTP Deployments`,
        description: `FTPS (Secure FTP) is used to enhance security for Azure web application using App Service as it adds an extra layer of security to the FTP protocol, and help you to comply with the industry standards and regulations. 

For enhanced security, it is highly advised to use FTP over TLS/SSL only. You can also disable both FTP and FTPS if you don't use FTP deployment.`,
        impact: `When FTP Deployments are enabled, it is not possible to improve the security of an Azure web application using App Service since it adds an extra layer of protection.`,
        howToFix: `We recommend you ensure FTP Deployments are disabled`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/deploy-ftp`,
        group: ``,
    },
    {
        id: `CKV_AZURE_79`,
        title: `Azure Defender for SQL servers on machines`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for SQL servers on machines extends the protections for your Azure-native SQL Servers to fully support hybrid environments and protect SQL servers (all supported versions) hosted in Azure.`,
        impact: `If Azure Defender for SQL servers on machines is set to Off, it will not protect your Azure-native SQL Servers and will not defend SQL servers (all supported versions) hosted in Azure.`,
        howToFix: `We recommend you ensure Azure Defender is set to On for SQL servers on machines`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/defender-for-sql-usage`,
        group: ``,
    },
    {
        id: `CKV_AZURE_80`,
        title: `Azure App Service Web app .Net Core version`,
        description: `Azure App Service web applications developed with the .NET software stack should use the latest available version of .NET to ensure the latest security fixes are in use.`,
        impact: `If you do not utilize the latest, the newest security updates are not available in the Azure App Service Web app. Version of Net Core`,
        howToFix: `We recommend you ensure the Azure App Service Web app uses the latest .Net Core version`,
        references: `https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/azure-apps/?view=aspnetcore-6.0&tabs=visual-studio`,
        group: ``,
    },
    {
        id: `CKV_AZURE_81`,
        title: `Azure App Service Web app PHP version`,
        description: `Azure App Service web applications developed with PHP should use the latest available version of PHP to ensure the latest security fixes are in use.`,
        impact: `If you do not utilize the most recent version of PHP in all Microsoft Azure App Service web apps, you will be unable to take advantage of the most recent security updates, speed enhancements, and new functions and features.`,
        howToFix: `We recommend you ensure the Azure App Service Web app uses the latest PHP version`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/configure-language-php`,
        group: ``,
    },
    {
        id: `CKV_AZURE_82`,
        title: `Web app Python version`,
        description: `Azure App Service is a platform-as-a-service solution for web apps, such as browser-based webpages, REST APIs used by your own clients, or event-triggered processing. Python is completely supported for app development in App Service.

Python support for Azure App Service is supplied via a collection of App Service site extensions, each of which contains a different version of the Python runtime. As detailed in this post, you may then install any necessary packages straight into that environment. You don't need to manage packages in your web app projects or submit them with the app code if you customize the environment in the App Service itself.`,
        impact: `You cannot verify that the most recent security updates are in use until you utilize the most recent Python version in the Azure App Service Web app.`,
        howToFix: `We recommend you ensure web app using the latest version of python`,
        references: `https://docs.microsoft.com/en-us/visualstudio/python/managing-python-on-azure-app-service?view=vs-2022`,
        group: ``,
    },
    {
        id: `CKV_AZURE_83`,
        title: `Azure App Service Web app uses the latest Java version`,
        description: `Azure App Service web applications developed with the Java software stack should use the latest available version of Java to ensure the latest security fixes are in use.`,
        impact: `You cannot verify that the most recent security updates are in use unless you utilize the most recent Java version in the Azure App Service Web app.`,
        howToFix: `It is advised that you use the Azure console to resolve issue. Navigate to the Azure administration console. Go to the App Services tab. Select Configuration from the navigation menu's Settings section to access the configuration settings for the selected program. Then, on the Configuration panel, navigate to the General settings page to see the application's general settings. Check the Stack setting value in the Stack settings section to ascertain the type of software stack utilized by the specified web application. Check the stack software version available in the Java version dropdown selection if Stack is set to Java. If the Java version does not show the most recent version (for example, Java 11), the selected Microsoft Azure App Service web application is not set up to use the most recent version of Java software.`,
        references: `https://docs.microsoft.com/en-us/azure/app-service/configure-language-java`,
        group: ``,
    },
    {
        id: `CKV_AZURE_84`,
        title: `Azure Security Center Defender for storage`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for Storage detects unusual and potentially harmful attempts to access or exploit storage accounts.`,
        impact: `Without Azure Defender for Storage, no unexpected or possibly hazardous attempts to access or exploit storage accounts may be detected.`,
        howToFix: `We recommend you to ensure Azure Security Center Defender is set to On for storage`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/alerts-reference`,
        group: ``,
    },
    {
        id: `CKV_AZURE_85`,
        title: `Set Azure Security Center Defender for Kubernetes`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. 

It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for Kubernetes provides cluster-level threat protection by monitoring your AKS-managed services through the logs retrieved by Azure Kubernetes Service (AKS).`,
        impact: `Without Azure Defender for Kubernetes, you won't be able to provide cluster-level threat prevention by monitoring your AKS-managed services via logs obtained by Azure Kubernetes Service (AKS).`,
        howToFix: `We recommend you to ensure Azure Security Center Defender is set to On for Kubernetes`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/defender-for-kubernetes-introduction`,
        group: ``,
    },
    {
        id: `CKV_AZURE_86`,
        title: `Set Azure Defender for container registries`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. 

It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender for container registries includes a vulnerability scanner to scan the images in Azure Resource Manager-based Azure Container Registry registries and provide deeper visibility image vulnerabilities.`,
        impact: `Without Azure Defender for container registries, it is not possible to integrate a vulnerability scanner to scan images in Azure Resource Manager-based Azure Container Registry registries and give deeper visibility into image vulnerabilities.`,
        howToFix: `We recommend you ensure Azure Defender is set to On for container registries`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/defender-for-container-registries-introduction`,
        group: ``,
    },
    {
        id: `CKV_AZURE_87`,
        title: `Set Azure Security Center Defender for Key Vault`,
        description: `Azure Defender is a cloud workload protection service that utilizes an agent-based deployment to analyze signals from Azure network fabric and the service control plane, to detect threats across all Azure resources. 

It can also analyze non-Azure resources, utilizing Azure Arc, including those on-premises and in both AWS and GCP (once they've been onboarded).

Azure Defender detects unusual and potentially harmful attempts to access or exploit Key Vault accounts.`,
        impact: `You cannot identify unexpected and potentially hazardous attempts to access or exploit Key Vault accounts without Azure Defender.`,
        howToFix: `We recommend you ensure Azure Security Center Defender is set to ON for Key Vault`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/defender-for-key-vault-introduction`,
        group: ``,
    },
    {
        id: `CKV_AZURE_88`,
        title: `App services use Azure files`,
        description: `Azure Files provides a cloud-based file share for storing and sharing files to apps. Whether it's an app hosted in Azure App Service, an Azure VM, or an on-premises app, Azure Files can store and share file access between one or more applications and systems in a secure and failure-resilient manner.`,
        impact: `App services cannot provide a cloud-based file share for storing and transferring files if Azure files are not used.`,
        howToFix: `We recommend you ensure app services use Azure files`,
        references: `https://docs.microsoft.com/en-us/learn/modules/store-and-share-with-azure-files/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_89`,
        title: `Azure Cache for Redis has public network access`,
        description: `Disabling public network access improves security by ensuring that the Azure Cache for Redis isn't exposed on the public internet. You can limit the exposure of your Azure Cache for Redis by creating private endpoints instead.`,
        impact: `The fact that the Azure cache for Redis has public network access enabled might result in data leakage and security risks.`,
        howToFix: `We recommend you ensure Azure cache for Redis has public network access disabled`,
        references: `https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-private-link`,
        group: ``,
    },
    {
        id: `CKV_AZURE_90`,
        title: `My SQL server public network access`,
        description: `Disable the public network access property to improve security and ensure your Azure Database for MySQL can only be accessed from a private endpoint. 

This configuration strictly disables access from any public address space outside of the Azure IP range and denies all logins that match IP or virtual network-based firewall rules.`,
        impact: `If my SQL server allows public network access, it will put data at risk and cause data leakage over the internet.`,
        howToFix: `We recommend you ensure My SQL server disables public network access`,
        references: `https://docs.microsoft.com/en-us/azure/mysql/howto-deny-public-network-access`,
        group: ``,
    },
    {
        id: `CKV_AZURE_91`,
        title: `SSL connection for Azure Redis Cache`,
        description: `Ensure that the SSL connection to your Azure Redis Cache servers is enabled to meet cloud security and compliance requirements. 

Enforcing an SSL connection helps prevent unauthorized users from reading sensitive data that is intercepted as it travels through the network, between clients/applications and cache servers, known as data in transit.

The use of secure connections ensures authentication between the cache server and the service or application and protects data in transit against network layer attacks such as man-in-the-middle (MITM), eavesdropping, and session hijacking.`,
        impact: `A new layer of security cannot be supplied by connecting a database server to client apps through Secure Sockets Layer without SSL connection in Azure Redis Cache (SSL).`,
        howToFix: `When working with production data, it is highly recommended to implement encryption to protect it from unauthorized access and fulfill compliance requirements for data encryption within your organization. 

For example, a compliance requirement is to protect sensitive data that could potentially identify a specific individual such as Personally Identifiable Information (PII) data, usually used in Financial Services, Healthcare, and Telecommunications sectors.`,
        references: `https://docs.microsoft.com/answers/questions/63879/microsoftextensionscachingredis-220-and-not-ssl-fa.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_92`,
        title: `Virtual Machines managed disks`,
        description: `Azure managed disks are block-level storage volumes managed by Azure that are utilized in conjunction with Azure Virtual Machines. Managed disks are virtualized versions of real drives found in on-premises servers. All you have to do with managed disks is define the disk size, disk type, and provide the disk. Azure handles the rest after you provide the disk.

Ultra disks, premium solid-state drives (SSDs), basic SSDs, and standard hard disk drives are all available (HDD). See Select a disk type for IaaS VMs for more information on each specific disk type.`,
        impact: `Without utilizing Azure Managed disk, you will not be able to take advantage of advantages such as managed disks being encrypted by default, saving money on storage accounts, and being more robust since Microsoft will manage the disk storage and shift it around if the underlying hardware fails.`,
        howToFix: `We recommend you ensure Virtual Machines are utilizing managed disks`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_93`,
        title: `Managed disks use a specific set of disk encryption  sets for customer-managed key encryption`,
        description: `Azure Disk Storage allows you to manage your keys when using server-side encryption (SSE) for managed disks if you choose for conceptual information on SSE with customer-managed keys, as well as other managed disk encryption types

For now, customer-managed keys have the following restrictions:

If this feature is enabled for your disk, you cannot disable it. If you need to work around this, you must copy all the data to an entirely different managed disk that isn't using customer-managed keys:

For Linux: Copy a managed disk

For Windows: Copy a managed disk

Only software and HSM RSA keys of sizes 2,048-bit, 3,072-bit, and 4,096-bit are supported, no other keys or sizes. 

HSM keys require the premium tier of Azure Key vaults.

Disks created from custom images that are encrypted using server-side encryption and customer-managed keys must be encrypted using the same customer-managed keys and must be in the same subscription.

Snapshots created from disks that are encrypted with server-side encryption and customer-managed keys must be encrypted with the same customer-managed keys.

All resources related to your customer-managed keys (Azure Key Vaults, disk encryption sets, VMs, disks, and snapshots) must be in the same subscription and region.

Disks, snapshots, and images encrypted with customer-managed keys cannot move to another resource group and subscription.

Managed disks currently or previously encrypted using Azure Disk Encryption cannot be encrypted using customer-managed keys.

Can only create up to 1000 disk encryption sets per region per subscription.`,
        impact: `Managed disks that do not employ a specified set of disk encryption settings for customer-facing applications. You will not have control over the keys used at rest if you employ managed key encryption.`,
        howToFix: `We recommend you ensure managed disks use a specific set of disk encryption sets for customer-managed key encryption`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-customer-managed-keys-portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_94`,
        title: `My SQL server geo-redundant backups`,
        description: `Azure Database for MySQL provides the flexibility to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This geo-redundancy provides better protection and the ability to restore your server in a different region in the event of a diSaster. The Basic tier only offers locally redundant backup storage.`,
        impact: `You cannot restore your My SQL servers to a different Azure region in the case of a regional outage or diSaster unless geo-redundant backups are set.`,
        howToFix: `We recommend you ensure My SQL server enables geo-redundant backups`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/automated-backups-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_95`,
        title: `Disabled Automatic OS image patching for VM Scale Sets`,
        description: `Enabling automatic OS image upgrades on your scale set helps ease update management by safely and automatically upgrading the OS disk for all instances in the scale set.

* How does automatic OS image upgrade work?

An upgrade works by replacing the OS disk of a VM with a new disk created using the latest image version. Any configured extensions and custom data scripts are run on the OS disk, while data disks are retained. To minimize the application downtime, upgrades take place in batches, with no more than 20% of the scale set upgrading at any time.

You can integrate an Azure Load Balancer application health probe or Application Health extension to track the health of the application after an upgrade. We recommended incorporating an application heartbeat to validate upgrade success.`,
        impact: `Disabling Automatic OS image patching for Virtual Machine scale sets prevents VMs from being securely patched with the newest security updates every month.`,
        howToFix: `We recommend you ensure that automatic OS image patching is enabled for Virtual Machine Scale Sets`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-automatic-upgrade`,
        group: ``,
    },
    {
        id: `CKV_AZURE_96`,
        title: `Unencrypted MySQL server infrastructure`,
        description: `Azure SQL Database provides an in-built high-availability and fault-tolerance solution to handle business continuity and diSaster recovery scenarios.

In addition, several configurable parameters can achieve high availability/diSaster recovery across multiple regions.

High-availability and diSaster-recovery planning are vital to business-continuity-plans`,
        impact: `There is no better level of guarantee that the data is safe than disbale infrastructure encryption for Azure Database for MySQL servers.`,
        howToFix: `We recommend you ensure the MySQL server enables infrastructure encryption`,
        references: `https://www.sqlshack.com/quick-start-guide-to-geo-restore-in-azure-sql-database/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_97`,
        title: `Unencrypted Virtual machine scale sets`,
        description: `When you enable encryption at the host, that encryption starts on the VM host itself, the Azure server that your VM is allocated to. The data for your temporary disk and OS/data disk caches are stored on that VM host. After enabling encryption at the host, all this data is encrypted at rest and flows encrypted to the Storage service, where it is persisted. Essentially, encryption at the host encrypts your data from end to end. Encryption at the host does not use your VM's CPU and doesn't impact your VM's performance.

Temporary disks and ephemeral OS disks are encrypted at rest with platform-managed keys when you enable end-to-end encryption. The OS and data disk caches are encrypted at rest with either customer-managed or platform-managed keys, depending on what you select as the disk encryption type. For example, if a disk is encrypted with customer-managed keys, then the cache for the disk is encrypted with customer-managed keys, and if a disk is encrypted with platform-managed keys then the cache for the disk is encrypted with platform-managed keys.`,
        impact: `You cannot activate encryption at rest for your temporary drive and OS/data disk caches if the host is not encrypted.`,
        howToFix: `We recommend you ensure that Virtual machine scale sets have encryption at host enabled`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/disks-enable-host-based-encryption-portal`,
        group: ``,
    },
    {
        id: `CKV_AZURE_98`,
        title: `Deploy Azure Container group into a virtual network`,
        description: `Azure Virtual Network provides secure, private networking for your Azure and on-premises resources. By deploying container groups into an Azure virtual network, your containers can communicate securely with other resources in the virtual network.`,
        impact: `You cannot provide secure, private networking for your Azure and on-premises resources until you deploy Azure containers in Azure Virtual Network.`,
        howToFix: `We recommend you ensure that the Azure Container group is deployed into a virtual network`,
        references: `https://docs.microsoft.com/en-us/azure/container-instances/container-instances-vnet`,
        group: ``,
    },
    {
        id: `CKV_AZURE_99`,
        title: `Unrestricted access of Cosmos DB accounts`,
        description: `Ensure that your Microsoft Azure Cosmos DB accounts are configured to deny access to traffic from all networks, including the public Internet. 

By restricting the public access to your Azure Cosmos accounts, you add an additional layer of security to the account resources, as the default action is to accept requests from any source. 

To limit access to trusted networks and/or IP addresses only, you must update the firewall and the virtual network configuration for your Cosmos DB accounts.`,
        impact: `You cannot add an extra layer of protection to the account resources if you do not restrict public access to your Azure Cosmos accounts, as the default action is to allow requests from any source.`,
        howToFix: `We recommend you ensure Cosmos DB accounts have restricted access`,
        references: `https://docs.microsoft.com/en-us/azure/cosmos-db/sql/troubleshoot-forbidden`,
        group: ``,
    },
    {
        id: `CKV_AZURE_100`,
        title: `Cosmos DB accounts have customer-managed keys to encrypt data`,
        description: `Data stored in the Azure Cosmos account is automatically encrypted with keys managed by Microsoft (service-managed keys). Customer-managed keys (CMKs) give users total control over the keys used by Azure Cosmos DB to encrypt their data at rest. 

Built as an additional encryption layer on top of the Azure Cosmos DB default encryption at rest with service-managed keys, it uses Azure Key Vault to store encryption keys and provides a way to implement double encryption.

The access to your Azure Cosmos DB accounts should be granted to specific Azure Virtual Networks (VNets) – which allow a secure network boundary for specific applications, or to public IP addresses/IP address ranges – which can enable connections from trusted Internet services and on-premises networks. 

Once the firewall rules are properly configured, only clients and applications from allowed networks and/or IPs can access your Cosmos DB account resources.

Note: Making changes to the network firewall rules can impact your applications' ability to connect to the Cosmos DB account. Make sure to grant access to any trusted service or network using network rules or IP addresses/ranges before you configure the firewall default rule to deny access.`,
        impact: `Without encryption at rest in Cosmos DB accounts, service controlled keys cannot guarantee security at rest.`,
        howToFix: `We recommend you ensure Cosmos DB accounts have customer-managed keys to encrypt data at rest`,
        references: `https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-setup-cmk`,
        group: ``,
    },
    {
        id: `CKV_AZURE_101`,
        title: `Public network access of Azure Cosmos DB`,
        description: `Disabling public network access improves security by ensuring that your CosmosDB account isn't exposed on the public internet. Creating private endpoints can limit the exposure of your CosmosDB account.`,
        impact: `Allowing Azure Cosmos DB public network access may result in data leakage and security risks over the internet.`,
        howToFix: `We recommend that you ensure your Azure Cosmos DB Disables Public Network Access.`,
        references: `https://docs.microsoft.com/en-us/azure/cosmos-db/policy-reference#:~:text=This%20policy%20enables%20you%20to%20ensure%20all%20Azure%20Cosmos%20DB,key%20based%20metadata%20write%20access.&text=Disabling%20public%20network%20access%20improves,exposure%20of%20your%20CosmosDB%20account.`,
        group: ``,
    },
    {
        id: `CKV_AZURE_102`,
        title: `Disabled PostgreSQL server geo-redundant backups`,
        description: `Azure Database for PostgreSQL provides the flexibility to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. 

When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and the ability to restore your server in a different region in the event of a diSaster. The Basic tier only offers locally redundant backup storage.`,
        impact: `In the case of a diSaster, disabled geo-redundant backup storage in Azure PostgreSQL cannot give improved protection and the possibility to recover your server in a different area.`,
        howToFix: `We recommend you ensure the PostgreSQL server enables geo-redundant backups
to save data from diSaster`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/automated-backups-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_103`,
        title: `Azure Data Factory Source control`,
        description: `Azure Data Factory is an ETL service for serverless data integration and data transformation. 

Azure Data Factory allows you to configure a Git repository with either Azure Repos or GitHub. Git is a version control system that allows for easier change tracking and collaboration.`,
        impact: `You cannot monitor changes or collaborate in Azure Data Factory without utilizing a Git repository for source control.`,
        howToFix: `We recommend you ensure Azure Data Factory uses Git repository for source control`,
        references: `https://docs.microsoft.com/en-us/azure/data-factory/source-control`,
        group: ``,
    },
    {
        id: `CKV_AZURE_104`,
        title: `Public network access for Azure Data factory`,
        description: `By using Azure Private Link, you can connect to various platforms as a service (PaaS) deployments in Azure via a private endpoint. A private endpoint is a private IP address within a specific virtual network and subnet.`,
        impact: `Allowing Azure Data Factory public network access may result in data leakage and security risks over the internet.`,
        howToFix: `We recommend that you ensure your Azure Data Factory Public Network Access is disabled.`,
        references: `https://docs.microsoft.com/en-us/azure/data-factory/data-factory-private-link`,
        group: ``,
    },
    {
        id: `CKV_AZURE_105`,
        title: `Data Lake Store accounts enable encryption`,
        description: `‎Azure Data Lake Storage Gen2 is a set of capabilities dedicated to big data analytics, built on Azure Blob storage. Data Lake Storage Gen2 converges the capabilities of Azure Data Lake Storage Gen1 with Azure Blob storage. 

Data Lake Storage Gen1 supports encryption of data both at rest and in transit. For data at rest, Data Lake Storage Gen1 supports "on by default," transparent encryption.`,
        impact: `Unencrypted Data Lake Storage is not a collection of big data analytics capabilities based on Azure Blob storage.`,
        howToFix: `We recommend you ensure Data Lake Store accounts enable encryption`,
        references: `https://docs.microsoft.com/answers/questions/85646/purpose-of-allow-public-network-access-on-azure-da.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_106`,
        title: `Azure Event Grid domain public network access`,
        description: `Disabling public network access improves security by ensuring that the resource isn't exposed on the public internet. You can limit the exposure of your resources by creating private endpoints instead.`,
        impact: `Allowing Azure Event Grid domain public network access may result in data leakage and security risks over the internet.`,
        howToFix: `We recommend you ensure Azure Event Grid domain public network access is disabled`,
        references: `https://docs.microsoft.com/en-us/azure/event-grid/troubleshoot-network-connectivity`,
        group: ``,
    },
    {
        id: `CKV_AZURE_107`,
        title: `API management services use virtual networks`,
        description: `You can configure the API Management service in a virtual network in internal mode, making it accessible only within the virtual network. 

Azure Application Gateway is a PaaS service, acting as a Layer-7 load balancer. It acts as a reverse-proxy service and provides among its offerings a Web Application Firewall (WAF).

By combining API Management provisioned in an internal virtual network with the Application Gateway front end, you can:

Use the same API Management resource for consumption by both internal consumers and external consumers.

Use a single API Management resource and have a subset of APIs defined in API Management available for external consumers.

Provide a turnkey way to switch access to API Management from the public internet on and off.`,
        impact: `You cannot access backend services within the network unless virtual networks are used in API management services.`,
        howToFix: `We recommend you ensure API management services use virtual networks`,
        references: `https://docs.microsoft.cm/en-us/azure/api-management/api-management-howto-integrate-internal-vnet-appgateway`,
        group: ``,
    },
    {
        id: `CKV_AZURE_108`,
        title: `Public network access for Azure IoT Hub`,
        description: `To restrict access to only a private endpoint for an IoT hub in your VNet, disable public network access. To do so, use the Azure portal or the public network access API. You can also allow public access by using the portal or the public network access API.

After public network access is disabled, the IoT Hub is only accessible through its VNet private endpoint using Azure private link. This restriction includes accessing through the Azure portal because API calls to the IoT Hub service are made directly using your browser with your credentials.`,
        impact: `Allowing Azure IoT Hub public network access may result in data leakage and security risks over the internet.`,
        howToFix: `Ensure Azure IoT Hub disables public network access`,
        references: `https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/iot-hub/iot-hub-public-network-access.md`,
        group: ``,
    },
    {
        id: `CKV_AZURE_109`,
        title: `Key vault firewall rules settings`,
        description: `Key vault's firewall prevents unauthorized traffic from reaching your key vault and provides an additional layer of protection for your secrets. 

Enable the firewall to make sure that only traffic from allowed networks can access your key vault. By defining "bypass=AzureServices" and "default_action= "deny" - only matched ip_rules and/or virtual_network_subnet_ids will be passed`,
        impact: `You cannot prevent illegal traffic from reaching your key vault without the firewall, which adds an extra degree of security to your secrets.`,
        howToFix: `We recommend you ensure key vault allows firewall rules settings`,
        references: `https://docs.microsoft.com/en-us/azure/key-vault/general/network-security`,
        group: ``,
    },
    {
        id: `CKV_AZURE_110`,
        title: `Key vault purge protection`,
        description: `Purge protection is an optional Key Vault behavior and is not enabled by default. Purge protection can only be enabled once soft-delete is enabled. 

It can be turned on via CLI or PowerShell. When purge protection is on, a vault or an object in the deleted state cannot be purged until the retention period has passed. 

Soft-deleted vaults and objects can still be recovered, ensuring that the retention policy will be followed. 

The default retention period is 90 days, but it is possible to set the retention policy interval to a value from 7 to 90 days through the Azure portal. Once the retention policy interval is set and saved it cannot be changed for that vault.`,
        impact: `When purge protection is disabled, a vault or object in the deleted state can be purged until the retention period expires.`,
        howToFix: `It is recommended to fix this in buildtime in Terraform. Resource is azurerm_key_vault. Argument is purge_protection_enabled - (Optional) Is Purge Protection enabled for this Key Vault? Defaults to false.`,
        references: `https://docs.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_111`,
        title: `Disabled Key vault soft-delete`,
        description: `Key Vault's soft-delete feature allows recovery of the deleted vaults and deleted key vault objects (for example, keys, secrets, certificates), known as soft-delete.`,
        impact: `You cannot recover an unintentionally deleted key vault without activating Soft delete for a defined retention time.`,
        howToFix: `We recommend you ensure the key vault enables soft-delete`,
        references: `https://docs.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_112`,
        title: `Backed Key vault key`,
        description: `For added assurance, when you use Azure Key Vault, you can import or generate keys in hardware security modules (HSMs) that never leave the HSM boundary. 

This scenario is often referred to as bring your own key, or BYOK. Azure Key Vault uses the nCipher nShield family of HSMs (FIPS 140-2 Level 2 validated) to protect your keys.`,
        impact: `You cannot import or produce keys that never exit the HSM border when the key vault is not supported by HSM.`,
        howToFix: `We recommend you ensure key vault key is backed by HSM`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/connectivity-settings`,
        group: ``,
    },
    {
        id: `CKV_AZURE_113`,
        title: `SQL server public network access`,
        description: `Disabling the public network access property improves security by ensuring your Azure SQL Database can only be accessed from a private endpoint. This configuration denies all logins that match IP or virtual network-based firewall rules.


Solution: 
To disable Public Network Access:
1. Open Azure SQL Database and browse to the server blade
2. Navigate to Security --> Firewalls and virtual networks blade via the navigation menu on the left.
3. Select Deny Public Network Access control and change the value to Yes.`,
        impact: `Allowing SQL server public network access may result in data leakage and security risks over the internet.`,
        howToFix: `We recommend you ensure the SQL server disables public network access`,
        references: `https://confluence.columbia.edu/confluence/display/CSVM/Public+Network+Access+on+Azure+SQL+Database+Should+Be+Disabled`,
        group: ``,
    },
    {
        id: `CKV_AZURE_114`,
        title: `Key vault secrets have should content_type`,
        description: `Azure Key Vault is a service for Secrets management to securely store and control access to tokens, passwords, certificates, API keys, and other secrets. 

Users may specify the content type of a secret to assist in interpreting the secret data when it's retrieved.`,
        impact: `Without setting content_type in key vault secrets, you can't tell if a secret is a password, connection string, or something else.`,
        howToFix: `We recommend you ensure key vault secrets have content_type set`,
        references: `https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets`,
        group: ``,
    },
    {
        id: `CKV_AZURE_115`,
        title: `Disabled AKS private clusters`,
        description: `Private AKS clusters have all their control plane components, including the cluster’s Kubernetes API service, in a private RFC1918 network space. 

This limits access and keeps all traffic within Azure’s networks. You can lock down access to the API to specific VNets. Without this feature, the cluster’s API has a public IP address and all traffic to it, including from the cluster’s node pools, goes over a public network.

Private clusters do have some limitations

The private cluster option can only be selected at AKS cluster creation time.`,
        impact: `When you disable the private cluster functionality in Azure Kubernetes Service, you cannot verify that network communication between your API server and node pools stays on the private network.`,
        howToFix: `We recommend you ensure AKS enables private clusters`,
        references: `https://atouati.com/posts/2020/03/aks-private-cluster/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_116`,
        title: `AKS should use Azure policies add-on`,
        description: `The Azure Policy Add-on for Kubernetes service (AKS) extends Gatekeeper v3, an admission controller webhook for Open Policy Agent (OPA), to deploy at-scale enforcements and safeguards on your clusters in a controlled, consistent fashion.`,
        impact: `Without the Azure policies Add-on for AKS, Gatekeeper v3, an admission controller webhook for Open Policy Agent, cannot be extended (OPA).`,
        howToFix: `We recommend you ensure AKS uses Azure policies add-on`,
        references: `https://docs.microsoft.com/en-us/azure/aks/use-azure-policy`,
        group: ``,
    },
    {
        id: `CKV_AZURE_117`,
        title: `AKS disk encryption set`,
        description: `Temporary disks and ephemeral OS disks are encrypted at rest with platform-managed keys when you enable end-to-end encryption. The OS and data disk caches are encrypted at rest with either customer-managed or platform-managed keys, depending on what you select as the disk encryption type. For example, if a disk is encrypted with customer-managed keys, then the cache for the disk is encrypted with customer-managed keys, and if a disk is encrypted with platform-managed keys then the cache for the disk is encrypted with platform-managed keys.`,
        impact: `Data saved on the VM host of your AKS agent nodes' VMs is not encrypted at rest without host-based encryption, and flows to the Storage service are not encrypted.`,
        howToFix: `We recommend you ensure AKS uses a disk encryption set`,
        references: `https://docs.microsoft.com/en-us/azure/aks/enable-host-encryption`,
        group: ``,
    },
    {
        id: `CKV_AZURE_118`,
        title: `Azure virtual machine NIC with IP forwarding`,
        description: `Ensure that all the Microsoft Azure network interfaces (NICs) with IP forwarding enabled are regularly reviewed for security and compliance reasons. The IP Forwarding feature enables the virtual machine (VM) associated with the network interface attached, to receive network traffic that is not intended for one of the IP addresses defined within the IP configurations attached to the network interface, and send network traffic with a different source IP address than the one assigned to one of a network interface's IP configurations. Therefore, IP forwarding is used only by Azure virtual machines that need to forward traffic (also known as network virtual appliances).

The IP Forwarding feature enabled on a virtual machine's network interface (NIC) allows the VM to act as a router and receive traffic addressed to other destinations. Because IP forwarding is rarely required (except when the virtual machine is used as a network virtual appliance), each associated network interface should be reviewed by your network security team to decide whether or not IP forwarding is needed.`,
        impact: `When the IP Forwarding capability on a virtual machine's network interface (NIC) is deactivated, the VM is unable to operate as a router and receive traffic directed to other destinations.`,
        howToFix: `We recommend you ensure Azure virtual machine NIC has IP forwarding disabled`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-network/diagnose-network-routing-problem`,
        group: ``,
    },
    {
        id: `CKV_AZURE_119`,
        title: `Network interfaces with public IPs`,
        description: `This policy denies the network interfaces which are configured with any public IP. Public IP addresses allow internet resources to communicate inbound to Azure resources, and Azure resources to communicate outbound to the internet. This should be reviewed by the network security team.`,
        impact: `If network interfaces employ public IP addresses, there is a danger of data loss and leakage across the internet.`,
        howToFix: `We recommend you ensure network interfaces do not use public IPs`,
        references: `https://github.com/Azure/azure-policy/blob/master/built-in-policies/policyDefinitions/Network/NetworkPublicIPNic_Deny.json`,
        group: ``,
    },
    {
        id: `CKV_AZURE_120`,
        title: `Azure application gateway WAF`,
        description: `Azure Web Application Firewall is a cloud-native service that protects web apps from common web-hacking techniques such as SQL injection and security vulnerabilities such as cross-site scripting. Deploy the service in minutes to get complete visibility into your environment and block malicious attacks.`,
        impact: `You cannot identify if your virtual machines (Windows and Linux) are connected with application firewalls for regulating traffic in and out of VMs until WAF is configured in Azure application gateway.`,
        howToFix: `We recommend you ensure Azure application gateway has WAF enabled`,
        references: `https://azure.microsoft.com/en-in/services/web-application-firewall/`,
        group: ``,
    },
    {
        id: `CKV_AZURE_121`,
        title: `Azure front door WAF`,
        description: `Azure Web Application Firewall (WAF) on Azure Front Door provides centralized protection for your web applications. WAF defends your web services against common exploits and vulnerabilities. 

It keeps your service highly available for your users and helps you meet compliance requirements.

WAF on Front Door is a global and centralized solution. 

It's deployed on Azure network edge locations around the globe. WAF-enabled web applications inspect every incoming request delivered by Front Door at the network edge.`,
        impact: `Azure Front Door cannot provide centralized protection for your web apps unless WAF is enabled. WAF protects your online services from commonly exploited attacks and vulnerabilities.`,
        howToFix: `We recommend you ensure Azure front door has WAF enabled`,
        references: `https://docs.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_122`,
        title: `Application Gateway WAF in Detection or Prevention modes`,
        description: `Azure Web Application Firewall (WAF) on Azure Application Gateway provides centralized protection of your web applications from common exploits and vulnerabilities. Web applications are increasingly targeted by malicious attacks that exploit commonly known vulnerabilities. SQL injection and cross-site scripting are among the most common attacks.

The Application Gateway WAF can be configured to run in the following two modes:

* Detection mode
Monitors and logs all threat alerts. You turn on logging diagnostics for Application Gateway in the Diagnostics section. You must also make sure that the WAF log is selected and turned on. Web application firewall doesn't block incoming requests when it's operating in Detection mode.

* Prevention mode
Blocks intrusions and attacks that the rules detect. The attacker receives a "403 unauthorized access" exception, and the connection is closed. Prevention mode records such attacks in the WAF logs.`,
        impact: `You cannot minimize the occurrence of unexpected blocked traffic if the Application Gateway does not employ WAF in Detection or Prevention modes.`,
        howToFix: `We recommend you ensure the application gateway uses WAF in Detection or Prevention modes`,
        references: `https://docs.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_123`,
        title: `Azure front door WAF in Detection or Prevention modes`,
        description: `Azure Web Application Firewall (WAF) on Azure Front Door provides centralized protection for your web applications. WAF defends your web services against common exploits and vulnerabilities. 

It keeps your service highly available for your users and helps you meet compliance requirements.

WAF policy can be configured to run in two modes:

* Detection mode 
When run in detection mode, WAF doesn't take any other actions other than a monitor and log the request, and its matched WAF rule to WAF logs. You can turn on logging diagnostics for Front Door. When you use the portal, go to the Diagnostics section.

* Prevention mode 
In prevention mode, WAF takes the specified action if a request matches a rule. If a match is found, no further rules with lower priority are evaluated. Any matched requests are also logged in the WAF logs.`,
        impact: `You cannot lessen the occurrence of unexpected stopped traffic if Azure front door does not employ WAF in Detection or Prevention modes.`,
        howToFix: `We recommend you ensure Azure front door uses WAF in Detection or Prevention modes`,
        references: `https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview`,
        group: ``,
    },
    {
        id: `CKV_AZURE_124`,
        title: `Azure cognitive search public network access`,
        description: `Disabling public network access improves security by ensuring that your Azure Cognitive Search service is not exposed on the public internet. Creating private endpoints can limit exposure of your Search service.`,
        impact: `Enabling public network access does not increase security by preventing your Azure Cognitive Search service from being exposed to the public internet.`,
        howToFix: `We recommend you ensure Azure cognitive search disables public network access`,
        references: `https://docs.microsoft.com/en-us/azure/search/policy-reference`,
        group: ``,
    },
    {
        id: `CKV_AZURE_127`,
        title: `My SQL server Threat Detection policy`,
        description: `Enabling all Threat Detection Types protects against SQL injection, database vulnerabilities, and any other anomalous activities.`,
        impact: `Disabling Threat Detection Types will not protect you from SQL injection, database vulnerabilities, or any other unusual activity.`,
        howToFix: `We recommend you enable all types of threat detection on SQL servers.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/threat-detection-overview

https://www.iamashishsharma.com/2020/12/security-recommendations-for-azure-sql.html`,
        group: ``,
    },
    {
        id: `CKV_AZURE_128`,
        title: `PostgreSQL server Threat Detection policy`,
        description: `Azure Database for PostgreSQL security alert policy configures threat protection for Azure PostgreSQL that detects anomalous activities indicating unusual and potentially harmful attempts to access or exploit databases.`,
        impact: `Disable Advanced Threat Detection on your non-Basic tier Azure database for PostgreSQL servers to identify odd and potentially hazardous attempts to access or exploit databases.`,
        howToFix: `Ensure Advanced Threat Protection is enabled for Azure PostgreSQL server.`,
        references: `https://docs.openrewrite.org/reference/recipes/terraform/azure/ensurepostgresqlserverenablesthreatdetectionpolicy

https://docs.securestate.vmware.com/rule-docs/azure-postgresql-security-alert-policy-disabled`,
        group: ``,
    },
    {
        id: `CKV_AZURE_130`,
        title: `Disabled PostgreSQL server infrastructure encryption`,
        description: `Ensure that Microsoft Azure PostgreSQL server data is encrypted in transit to meet security and compliance requirements. 

In-transit encryption helps prevent unauthorized users from getting access to critical data available in your Azure PostgreSQL databases.

When working with production data, it is strongly recommended to encrypt all sensitive information in transit by enforcing Secure Sockets Layer (SSL) connections between PostgreSQL database servers and client applications. 

Once enabled, this additional layer of security will protect your data against Man-In-the-Middle (MITM) attacks and fulfill compliance requirements for in-transit encryption within your company.`,
        impact: `Disabling infrastructure encryption for Azure Database for PostgreSQL servers provides no further assurance that the data is safe.`,
        howToFix: `We recommend you ensure the PostgreSQL server enables infrastructure encryption`,
        references: `https://docs.microsoft.com/en-us/azure/postgresql/concepts-infrastructure-double-encryption`,
        group: ``,
    },
    {
        id: `CKV_AZURE_131`,
        title: `Set Security contact emails`,
        description: `Azure Security Center recommends adding one valid security contact email address for each Microsoft Azure subscription. Security Center emails designated administrators using the defined security contact in case the Microsoft security team finds Azure cloud resources are compromised.`,
        impact: `Without security contact emails established, the Security Center emails cannot use the defined security contact in the event that the Microsoft security team discovers that Azure cloud resources have been hacked.`,
        howToFix: `We recommend you ensure security contact emails are set`,
        references: `https://docs.microsoft.com/en-us/azure/defender-for-cloud/configure-email-notifications`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_1`,
        title: `Unencrypted Storage with critical data`,
        description: `Enable sensitive data encryption at rest using Customer Managed Keys (CMKs) rather than Microsoft Managed keys. By default, data in the storage account is encrypted using Microsoft Managed Keys at rest. 

All Azure Storage resources are encrypted, including blobs, disks, files, queues, and tables. All object metadata is also encrypted. 

However, if you want to control and manage this encryption key yourself, you can specify a customer-managed key, that key is used to protect and control access to the key that encrypts your data. 

You can also choose to automatically update the key version used for Azure Storage encryption whenever a new version is available in the associated Key Vault.`,
        impact: `You can't safeguard and restrict access to the key that encrypts data unless you have encrypted important data with Customer Managed Key.`,
        howToFix: `We recommend encrypting the storage for any data that is stored in the cloud to avoid policy violation fines`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/storage-service-encryption`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_2`,
        title: `Azure SQL server ADS Vulnerability Assessment is enabled`,
        description: `Enable Vulnerability Assessment (VA) service scans for critical SQL servers and corresponding SQL databases.

Enabling Azure Defender for SQL server does not enable Vulnerability Assessment capability for individual SQL databases unless a storage account is set to store the scanning data and reports.

The Vulnerability Assessment service scans databases for known security vulnerabilities and highlights deviations from best practices, such as misconfigurations, excessive permissions, and unprotected sensitive data. Results of the scan include actionable steps to resolve each issue and provide customized remediation scripts where applicable. 

Additionally, an assessment report can be customized by setting an acceptable baseline for permission configurations, feature configurations, and database settings.`,
        impact: `Because ADS Vulnerability Assessment has been disabled in Azure SQL Server, it is unable to scan databases for known security vulnerabilities and flag departures from best practices, such as misconfigurations, excessive permissions, and exposed sensitive data.`,
        howToFix: `We recommend you ensure Vulnerability Assessment is enabled on a SQL server by setting a Storage Account.`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-vulnerability-assessment?tabs=azure-powershell`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_3`,
        title: `Disabled Azure SQL server ADS Vulnerability Assessment Periodic recurring scans`,
        description: `Enable Vulnerability Assessment (VA) Periodic recurring scans for critical SQL servers and corresponding SQL databases.

VA setting 'Periodic recurring scans' schedules periodic (weekly) vulnerability scanning for the SQL server and corresponding Databases. Periodic and regular vulnerability scanning provides risk visibility based on updated known vulnerability signatures and best practices.`,
        impact: `Vulnerability Assessment for the Disabled (VA) Periodic recurring scans are unable to scan crucial SQL servers and associated SQL databases.`,
        howToFix: `We recommend you Azure SQL server ADS Vulnerability Assessment is enabled
for periodic recurring scans`,
        references: `https://www.sqlshack.com/vulnerability-assessment-and-advanced-threat-protection-in-azure-sql-database/`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_4`,
        title: `Azure SQL server ADS VA scan reports`,
        description: `Configure 'Send scan reports to' with email ids of concerned data owners/stakeholders for critical SQL servers.

Vulnerability Assessment (VA) scan reports and alerts will be sent to email ids configured at Send scan reports. This may help in reducing the time required for identifying risks and taking corrective measures.`,
        impact: `Vulnerability Assessment (VA) scan reports and alarms will not be delivered to email if the Azure SQL server ADS VA SEND is not set. It will also shorten the time necessary to detect hazards and implement remedial measures.`,
        howToFix: `We recommend you ensure Azure SQL server ADS VA Send scan reports is configured`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-vulnerability-assessment?tabs=azure-powershell`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_5`,
        title: `Disabled Azure SQL server ADS VA email notifications to admins and subscription owners`,
        description: `Enable Vulnerability Assessment (VA) setting 'Also send email notifications to admins and subscription owners'.

VA scan reports and alerts will be sent to admins and subscription owners by enabling the setting 'Also send email notifications to admins and subscription owners'. This may help in reducing the time required for identifying risks and taking corrective measures.`,
        impact: `When the Azure SQL server ADS VA Also send email notifications to admins and subscription owners option is deactivated, VA scan reports and alerts are not provided to admins and subscription owners.`,
        howToFix: `We recommend you to ensure Azure SQL server ADS VA Also send email notifications to admins and subscription owners is enabled`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/sql-vulnerability-assessment?tabs=azure-powershell`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_7`,
        title: `Unconfigured SQL servers Azure Active Directory admin`,
        description: `Use Azure Active Directory Authentication for authentication with SQL Database.

Azure Active Directory authentication is a mechanism to connect to Microsoft Azure SQL Database and SQL Data Warehouse by using identities in Azure Active Directory (Azure AD). With Azure AD authentication, identities of database users and other Microsoft services can be managed in one central location. Central ID management provides a single place to manage database users and simplifies permission management.

It provides an alternative to SQL Server authentication.
Helps stop the proliferation of user identities across database servers.
Allows password rotation in a single place.

Customers can manage database permissions using external (AAD) groups.
It can eliminate storing passwords by enabling integrated Windows authentication and other forms of authentication supported by Azure Active Directory.

Azure AD authentication uses contained database users to authenticate identities at the database level.
Azure AD supports token-based authentication for applications connecting to SQL Database.
Azure AD authentication supports ADFS (domain federation) or native user/password authentication for a local Azure Active Directory without domain synchronization.
Azure AD supports connections from SQL Server Management Studio that use Active Directory Universal Authentication, which includes Multi-Factor Authentication (MFA). MFA includes strong authentication with a range of easy verification options — phone call, text message, smart cards with a pin, or mobile app notification.`,
        impact: `Without Azure AD authentication, database users cannot be identified, and other Microsoft services cannot be handled in a centralized place.`,
        howToFix: `It is recommended to fix this in buildtime in Terraform. Resources are azurerm_resource_group, azurerm_sql_server, azurerm_sql_active_directory_administrator. Arguments is server_name (of azurerm_sql_active_directory_administrator)`,
        references: `https://docs.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure?tabs=azure-powershell`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_8`,
        title: `Storage container storing activity logs are publicly accessible`,
        description: `The storage account container containing the activity log export should not be publicly accessible.
Allowing public access to activity log content may aid an adversary in identifying weaknesses in the affected account's use or configuration.

Configuring container Access policy to private will remove access from the container for everyone except owners of the storage account. Access policy needs to be set explicitly to allow access to other desired users.`,
        impact: `Allowing public access to activity log entries might help an adversary find flaws in the affected account's use or setup.`,
        howToFix: `We recommend you ensure the storage container storing activity logs are not publicly accessible`,
        references: `https://docs.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-prevent`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_9`,
        title: `Unutilized Azure Virtual Machine managed disks`,
        description: `Azure-managed disks are block-level storage volumes that are managed by Azure and used with Azure Virtual Machines. Managed disks are like a physical disk in an on-premises server but, virtualized. With managed disks, all you have to do is specify the disk size, the disk type, and provision the disk. Once you provision the disk, Azure handles the rest.

Migrate BLOB-based VHD's to Managed Disks on Virtual Machines to exploit the default features of this configuration. The features include

- Default Disk Encryption
- Resilience as Microsoft will manage the disk storage and move around if underlying hardware goes faulty
- Reduction of costs over storage accounts

Managed disks are by default encrypted on the underlying hardware so no additional encryption is required for basic protection, it is available if additional encryption is required. Managed disks are by design more resilient than storage accounts.

For ARM deployed Virtual Machines, Azure Adviser will at some point recommend moving VHD's to managed disks both from a security and cost management perspective.`,
        impact: `There will be no disk encryption if managed disks are not used in Azure Virtual Machines, Microsoft will not manage the storage and transfer it around if the underlying hardware fails, and Microsoft will not lower expenses across storage accounts.`,
        howToFix: `We recommend you ensure Azure Virtual Machines are utilizing managed disks`,
        references: `https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview#:~:text=Azure%20managed%20disks%20are%20block,type%2C%20and%20provision%20the%20disk.`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_10`,
        title: `Microsoft Antimalware is not configured to automatic updates for Virtual Machines`,
        description: `Microsoft Antimalware for Azure is free real-time protection that helps identify and remove viruses, spyware, and other malicious software. 

It generates alerts when known malicious or unwanted software tries to install itself or run on your Azure systems.`,
        impact: `Microsoft Antimalware is not set to update automatically. Any Windows virtual machine cannot secure its signature or be audited.`,
        howToFix: `We recommend you ensure that Microsoft Antimalware is configured to automatic updates for Virtual Machines`,
        references: ``,
        group: ``,
    },
    {
        id: `CKV2_AZURE_11`,
        title: `Azure Data Explorer encryption at rest uses a customer-managed key`,
        description: `Azure Data Explorer encrypts all data in a storage account at rest. By default, data is encrypted with Microsoft-managed keys. For additional control over encryption keys, you can supply customer-managed keys to use for data encryption.

Customer-managed keys must be stored in an Azure Key Vault. You can create your keys and store them in a key vault, or you can use an Azure Key Vault API to generate keys.`,
        impact: `Disabling encryption at rest using a customer-managed key on your Azure Data Explorer cluster does not provide you any more control over the key used by encryption at rest.`,
        howToFix: `We recommend you ensure Azure Data Explorer encryption at rest uses a customer-managed key`,
        references: `https://docs.microsoft.com/en-us/azure/data-explorer/customer-managed-keys-portal`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_13`,
        title: `SQL servers enable data security policy`,
        description: `The Advanced Data Security (ADS) suite of security services represents an advanced layer of database security, which enables you to recognize and respond to potential threats as they occur by providing security alerts on abnormal activity within your SQL servers. 

One ADS is enabled and configured, you can receive notification alerts upon suspicious database activities, potential vulnerabilities, SQL injection attacks, and anomalous database access patterns. 

These threat detection alerts provide details of suspicious activity and generate recommendations on how to investigate and mitigate the threats found. 

Additionally, Azure SQL Advanced Data Security includes functionality for discovering and classifying sensitive and protected data.`,
        impact: `Disabling Azure Defender for SQL does not add a new layer of protection, allowing users to notice and respond to potential threats as they occur by delivering security warnings on unusual activity.`,
        howToFix: `We recommend you enable this feature at least on business-critical Azure SQL servers.`,
        references: `https://docs.microsoft.com/en-us/sql/relational-databases/security/row-level-security`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_14`,
        title: `Unencrypted attached disks`,
        description: `Ensure that your detached Microsoft Azure virtual machine (VM) disk volumes are encrypted to meet security and compliance requirements. 

The unattached disk volumes encryption and decryption are handled transparently and do not require any additional action from you, your Azure virtual machine, or your application.

By encrypting disk volumes detached from your Microsoft Azure virtual machines, you have the assurance that your data is unrecoverable without an encryption key and thus provides protection from unwarranted reads. 

Even if the disk volumes are not attached to any of the VMs provisioned within your Azure cloud account, there is always a risk where a compromised user account with administrative privileges can mount/attach these unencrypted disks, and this action can lead to sensitive information disclosure and/or data leakage.`,
        impact: `Unencrypted detached Microsoft Azure virtual machine disk volumes cannot fulfill security and compliance standards.`,
        howToFix: `It is recommended to ensure unattached disks are encrypted`,
        references: `https://docs.microsoft.com/en-us/troubleshoot/azure/virtual-machines/unlock-encrypted-disk-offline`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_15`,
        title: `Unencrypted azure data factories with CMK`,
        description: `Azure Data Factory encrypts data at rest, including entity definitions and any data cached while runs are in progress. By default, data is encrypted with a randomly generated Microsoft-managed key that is uniquely assigned to your data factory. 

For extra security guarantees, you can now enable Bring Your Own Key (BYOK) with customer-managed keys feature in Azure Data Factory. When you specify a customer-managed key, Data Factory uses both the factory system key and the CMK to encrypt customer data. Missing either would result in Deny of Access to data and factory.`,
        impact: `Unencrypted Azure data factory with a customer-managed key cannot fulfill regulatory compliance criteria.`,
        howToFix: `We recommend you ensure that azure data factories are encrypted with a customer-managed key`,
        references: `https://docs.microsoft.com/en-us/azure/data-factory/enable-customer-managed-key#:~:text=Update%20Key%20Version,-When%20you%20create&text=Locate%20the%20URI%20for%20the,with%20the%20new%20key%20version`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_16`,
        title: `MySQL server enable CMK for encryption`,
        description: `Data encryption with customer-managed keys for Azure Database for MySQL enables you to bring your key (BYOK) for data protection at rest. 

It also allows organizations to implement separation of duties in the management of keys and data. With customer-managed encryption, you're responsible for, and in full control of, a key's lifecycle, key usage permissions, and auditing of operations on keys.

Data encryption with customer-managed keys for Azure Database for MySQL is set at the server level. For a given server, a customer-managed key, called the key-encryption key (KEK), is used to encrypt the data encryption key (DEK) used by the service.`,
        impact: `Regulatory compliance rules cannot be met in the case of deactivated CMK encryption in the MySQL server.`,
        howToFix: `When you're using data encryption by using a customer-managed key, here are recommendations for configuring Key Vault:

Set a resource lock on Key Vault to control who can delete this critical resource and prevent accidental or unauthorized deletion.

Enable auditing and reporting on all encryption keys. Key Vault provides logs that are easy to inject into other security information and event management tools. Azure Monitor Log Analytics is one example of a service that's already integrated.

Ensure that Key Vault and Azure Database for MySQL reside in the same region, to ensure faster access for DEK wrap, and unwrap operations.

Lock down the Azure KeyVault to the only private endpoint and selected networks and allow only trusted Microsoft services to secure the resources.`,
        references: `https://docs.microsoft.com/en-us/azure/mysql/concepts-data-encryption-mysql`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_17`,
        title: `PostgreSQL server enables CMK for encryption`,
        description: `Azure PostgreSQL leverages Azure Storage encryption to encrypt data-at-rest by default using Microsoft-managed keys. 

For Azure PostgreSQL users, it is very similar to Transparent Data Encryption (TDE) in other databases such as SQL Server. Many organizations require full control on access to the data using a customer-managed key. 

Data encryption with customer-managed keys for Azure Database for PostgreSQL Single server enables you to bring your key (BYOK) for data protection at rest. 

It also allows organizations to implement separation of duties in the management of keys and data. With customer-managed encryption, you are responsible for, and in full control of, a key's lifecycle, key usage permissions, and auditing of operations on keys.`,
        impact: `Regulatory compliance rules cannot be met in the case of deactivated CMK encryption in the PostgreSQL server.`,
        howToFix: `Here are recommendations for configuring a customer-managed key:

Keep a copy of the customer-managed key in a secure place, or escrow it to the escrow service.

If Key Vault generates the key, create a key backup before using the key for the first time. You can only restore the backup to Key Vault. For more information about the backup command, see Backup-AzKeyVaultKey.`,
        references: `https://docs.microsoft.com/en-us/azure/postgresql/concepts-data-encryption-postgresql`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_18`,
        title: `Unencrypted Azure storage account`,
        description: `You can use your own encryption key to protect the data in your storage account. When you specify a customer-managed key, that key is used to protect and control access to the key that encrypts your data. Customer-managed keys offer greater flexibility to manage access controls.

You must use one of the following Azure key stores to store your customer-managed keys:

Azure Key Vault
Azure Key Vault Managed Hardware Security Module (HSM)`,
        impact: `You cannot obtain better control over Storage account data unless Customer Managed Keys encryption is enabled.`,
        howToFix: `We recommend you ensure Azure storage account encryption customer manage keys are enabled`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_20`,
        title: `Disabled Azure storage account logging for tables`,
        description: `The Storage Table storage is a service that stores structured NoSQL data in the cloud, providing a key/attribute store with a schema-less design. 

Storage Logging happens server-side and allows details for both successful and failed requests to be recorded in the storage account. These logs allow users to see the details of read, write, and delete operations against the tables. 

Storage Logging log entries contain the following information about individual requests: Timing information such as start time, end-to-end latency, and server latency, authentication details, concurrency information, and the sizes of the request and response messages.


Storage Analytics logs contain detailed information about successful and failed requests to a storage service. This information can be used to monitor individual requests and to diagnose issues with a storage service. Requests are logged on a best-effort basis.`,
        impact: `Without storage logging, both successful and unsuccessful requests are not logged in the storage account, and users cannot view the details of read, write, and delete activities against the tables.`,
        howToFix: `We recommend you ensure Azure storage account logging for tables is enabled`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/manage-storage-analytics-logs`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_12`,
        title: `Virtual Machines are not backed up using Azure backup`,
        description: `Azure Backup provides independent and isolated backups to guard against unintended destruction of the data on your VMs. 

Backups are stored in a Recovery Services vault with built-in management of recovery points. Configuration and scaling are simple, backups are optimized, and you can easily restore as needed.`,
        impact: `You cannot generate server backups for your Microsoft Azure virtual machines (VMs) without configuring the Azure Backup service in the virtual machine in order to adhere to data security best practices and compliance standards.`,
        howToFix: `We recommend you ensure Virtual Machines are backed up using Azure backup`,
        references: `https://docs.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction`,
        group: ``,
    },
    {
        id: `CKV2_AZURE_21`,
        title: `Disabled Azure storage account logging for blobs`,
        description: `The Storage Blob service provides scalable, cost-efficient objective storage in the cloud. 

Storage Logging happens server-side and allows details for both successful and failed requests to be recorded in the storage account. 

These logs allow users to see the details of reading, writing, and deleting operations against the blobs. Storage Logging log entries contain the following information about individual requests: Timing information such as start time, end-to-end latency, and server latency, authentication details, concurrency information, and the sizes of the request and response messages.

Storage Analytics logs contain detailed information about successful and failed requests to a storage service. This information can be used to monitor individual requests and to diagnose issues with a storage service. 

Requests are logged on a best-effort basis.`,
        impact: `Without storage logging, both successful and unsuccessful requests are not logged in the storage account, and users cannot see the details of read, write, and delete actions on blobs.`,
        howToFix: `We recommend that you ensure Storage Logging is enabled for Blob Service for reading Requests`,
        references: `https://docs.microsoft.com/answers/questions/25850/how-to-get-the-access-log-for-the-storage-account.html`,
        group: ``,
    },
    {
        id: `CKV_BCW_1`,
        title: `Hardcoded API token`,
        description: `Hard-coded, sensitive data in application binary can always leak and could be used to harm your business.

API keys may provide access to third-party services like AWS storage, SMS gateway, payments API, or analytics. While analytics keys don't lead to many risks, leaking any of the other mentioned keys may lead to serious consequences.`,
        impact: `Hard-coded, sensitive info in application binaries can always leak and be exploited against your apps.`,
        howToFix: `We recommend you use to ensure API provider providing dynamically generated tokens`,
        references: `https://www.netguru.com/blog/hardcoded-keys-storage-mobile-app`,
        group: ``,
    },
    {
        id: `CKV_DOCKER_1`,
        title: `Exposed port 22`,
        description: `Keeping your data secure is critically important. 

We strongly recommend you take additional steps in setting up and configuring your SSH server so that it is protected against common attacks. Most automated robots will try to log into your SSH server on Port 22 as Administrator, with various brute force and dictionary combinations to gain access to your data. Furthermore, automated robots can put enormous loads on your server as they perform thousands of retries to break into your system. This topic addresses steps to take in securing your SSH server against potential threats, including changing the default port for SSH connections from TCP/22 to TCP/33001.`,
        impact: `By leaving port 22 open, a bad actor may be able to brute force their way into the system and potentially get access to the whole network.`,
        howToFix: `We recommend you do not expose port 22,`,
        references: `https://download.asperasoft.com/download/docs/p2p/3.5.4/p2p_admin_win/webhelp/dita/ssh_server.html`,
        group: ``,
    },
    {
        id: `CKV_DOCKER_2`,
        title: `HEALTHCHECK instructions are not added in container images`,
        description: `Important security control is that of availability. Adding the HEALTHCHECK instruction to your container image ensures that the Docker engine periodically checks the running container instances against that instruction to ensure that containers are still operational.

Based on the results of the health check, the Docker engine could terminate containers that are not responding correctly, and instantiate new ones.`,
        impact: `You cannot assure that health checks are done against running containers unless you include the HEALTHCHECK directive to your Docker container images.`,
        howToFix: `We recommend that you add the HEALTHCHECK instruction to your Docker container images to ensure that health checks are executed against running containers.`,
        references: `https://dockerlabs.collabnix.com/beginners/dockerfile/healthcheck.html`,
        group: ``,
    },
    {
        id: `CKV_DOCKER_3`,
        title: `Create a user for container`,
        description: `Containers should run as non-root users. It is good practice to run the container as a non-root user, where possible. This can be done either via the USER directive in the Dockerfile or through gosu or similar where used as part of the CMD or ENTRYPOINT directives.`,
        impact: `Contrainer operating as a root user may provide a data security risk and may fail to fulfill standard compliance requirements.`,
        howToFix: `We recommend you ensure user for the container has been created`,
        references: `https://docs.docker.com/engine/install/linux-postinstall/`,
        group: ``,
    },
    {
        id: `CKV_DOCKER_4`,
        title: `Dockerfiles instructions user(Copy and Add-in)`,
        description: `The Copy instruction simply copies files from the local host machine to the container file system. The Add instruction could potentially retrieve files from remote URLs and perform operations such as unpacking them. The Add instruction, therefore, introduces security risks. 

For example, malicious files may be directly accessed from URLs without scanning, or there may be vulnerabilities associated with decompressing them`,
        impact: `Malicious files might be retrieved directly from URLs without being scanned, or there could be vulnerabilities associated with decompressing them.`,
        howToFix: `We recommend you to use the Copy instruction instead of the Add instruction in the Dockerfile.`,
        references: `https://docs.docker.com/develop/develop-images/dockerfile_best-practices/`,
        group: ``,
    },
    {
        id: `CKV_DOCKER_5`,
        title: `Update instructions in Dockerfile`,
        description: `You should not use OS package manager update instructions such as apt-get update or yum update either alone or in a single line in the Dockerfile.

Adding update instructions in a single line on the Dockerfile will cause the update layer to be cached. 

When you then build any image later using the same instruction, this will cause the previously cached update layer to be used, potentially preventing any fresh updates from being applied to later builds.`,
        impact: `The update layer will be cached if update instructions are added in a single line to the Dockerfile.`,
        howToFix: `We recommend you ensure update instructions are not used alone in a Dockerfile`,
        references: `https://anchore.com/blog/docker-security-best-practices-part-3-securing-container-images/#:~:text=Do%20Not%20Use%20Update%20Instructions%20Alone%20in%20the%20Dockerfile&text=This%20will%20help%20avoid%20duplication,and%20overall%20Dockerfile%20best%20practices.`,
        group: ``,
    },
    {
        id: `CKV_GCP_1`,
        title: `Disabled Stackdriver logging on Kubernetes engine clusters`,
        description: `Stackdriver is the default logging solution for clusters deployed on GKE. Stackdriver logging is deployed to a new cluster by default, explicitly set to opt-out. 

Stackdriver logging collects only the container’s standard output and standard error streams. To ingest logs, a Stackdriver logging agent must be deployed to each node in the cluster. 

Stackdriver provides a single-pane-of-glass view of metrics, logs, and traces through Kubernetes Engine clusters and workloads.`,
        impact: `You cannot gather solely the container's standard output and standard error streams without Stackdriver logging.`,
        howToFix: `We recommend you use Stackdriver logging as a unified data logging solution for GKE workloads unless additional observability tooling is already in place.`,
        references: `https://cloud.google.com/stackdriver/docs/solutions/gke/legacy-stackdriver/logging`,
        group: ``,
    },
    {
        id: `CKV_GCP_2`,
        title: `Google compute firewall ingress unrestricted ssh access`,
        description: `Firewall rules set up fine-grained allow/deny traffic policies to and from a VM. Enabled rules are always enforced, and help protect instances from unwanted traffic. 

Firewall rules are defined at the network level and only apply to the network where they are created.

Every VPC functions as a distributed firewall. While firewall rules are defined at the network level, connections are allowed or denied on a per-instance basis. 

A default network is pre-populated with firewall rules that allow incoming traffic to instances. The default-allow-ssh rule permits ingress connections on TCP port 22 from any source to any instance in the network.`,
        impact: `The default-allow-ssh rule permits ingress connections on TCP port 22 from any source to any instance in the network.`,
        howToFix: `We recommend you restrict or remove the default-allow-ssh rule when you no longer need it.`,
        references: `https://cloud.google.com/vpc/docs/using-firewalls`,
        group: ``,
    },
    {
        id: `CKV_GCP_3`,
        title: `GCP Firewall rule allow all traffic on RDP port 3389`,
        description: `Firewall rules setup fine-grained allow/deny traffic policies to and from a virtual machine (VM). Enabled rules are always enforced, and help protecting instances from unwanted traffic. 

Firewall rules are defined at the network level and only apply to the network where they are created.

Every VPC functions as a distributed firewall. While firewall rules are defined at the network level, connections are allowed or denied on a per-instance basis. 

A default network is pre-populated with firewall rules that allow incoming traffic to instances. The default-allow-rdp rule permits ingress connections on TCP port 3389 from any source to any instance in the network.`,
        impact: `The default-allow-rdp rule allows ingress connections from any source to any instance in the network on TCP port 3389.`,
        howToFix: `We recommend you restrict or remove the default-allow-rdp rule when you no longer need it.`,
        references: `https://cloud.google.com/vpc/docs/firewalls`,
        group: ``,
    },
    {
        id: `CKV_GCP_4`,
        title: `Unconfigured GCP HTTPS load balancer with SSL policy having TLS version 1.1 or lower`,
        description: `Secure Sockets Layer (SSL) policies determine what port Transport Layer Security (TLS) features clients are permitted to use when connecting to load balancers. SSL policies control the features of SSL in Google Cloud SSL proxy load balancer and external HTTP(S) load balancers. By default, HTTP(S) Load Balancing and SSL Proxy Load Balancing use a set of SSL features that provides good security and wide compatibility.

To prevent usage of insecure features, SSL policies should use one of the following three options:

At least TLS 1.2 with the MODERN profile; or\\nThe RESTRICTED profile, because it effectively requires clients to use TLS 1.2 regardless of the chosen minimum TLS version; or\\nA CUSTOM profile that does not support any of the following features:
- TLS_RSA_WITH_AES_128_GCM_SHA256
- TLS_RSA_WITH_AES_256_GCM_SHA384
- TLS_RSA_WITH_AES_128_CBC_SHA
- TLS_RSA_WITH_AES_256_CBC_SHA
- TLS_RSA_WITH_3DES_EDE_CBC_SHA

Load balancers are used to efficiently distribute traffic across multiple servers. Both SSL proxy and HTTPS load balancers are external load balancers: they distribute traffic from the Internet to a GCP network. GCP customers can configure load balancer SSL policies with a minimum TLS version (1.0, 1.1, or 1.2) that clients can use to establish a connection, along with a profile (Compatible, Modern, Restricted, or Custom) that specifies permissible and insecure cipher suites. It is easy for customers to configure a load balancer without knowing they are permitting outdated cipher suites.

It is possible to define SSL policies to control the features of SSL that your load balancer negotiates with clients. An SSL policy can be configured to determine the minimum TLS version and SSL features that are enabled in the load balancer. We recommend you select TLS 1.2 as the minimum TLS version supported.`,
        impact: `You cannot decide which port Transport Layer Security (TLS) features clients are authorized to use when connecting to load balancers without Secure Sockets Layer (SSL) regulations.`,
        howToFix: `We recommend you ensure GCP HTTPS load balancer is not configured with SSL policy having TLS version 1.1 or lower`,
        references: `https://cloud.google.com/load-balancing/docs/ssl-policies-concepts`,
        group: ``,
    },
    {
        id: `CKV_GCP_5`,
        title: `Unencrypted Google storage buckets`,
        description: `Google Storage Buckets is a Google service to store unstructured data that can be accessed by a key. 

By default, Google will encrypt and decrypt the data to and from the disk using a managed encryption key.

Google cloud storage services encrypt data on the server-side before it is written to disk, at no additional charge.`,
        impact: `Data leakage and danger in Google Cloud Platform might occur if a Google storage bucket is not secured.`,
        howToFix: `We recommend you use opt-in server-side encryption wherever available.`,
        references: `https://binx.io/blog/2018/11/15/encryption-at-rest-with-google-storage-buckets/`,
        group: ``,
    },
    {
        id: `CKV_GCP_6`,
        title: `Secure Incoming connections to Cloud SQL database instances`,
        description: `Cloud SQL is a fully-managed relational database service for MySQL, PostgreSQL, and SQL Server. 

It offers data encryption at rest and in transit, Private connectivity with VPC, and user-controlled network access with firewall protection. 

Cloud SQL creates a server certificate automatically when a new instance is created.`,
        impact: `If incoming connections to Cloud SQL database instances do not use SSL, there will be security risks and data leaks.`,
        howToFix: `We recommend you enforce all connections to use SSL/TLS.`,
        references: `https://cloud.google.com/sql/docs/mysql/configure-ssl-instance`,
        group: ``,
    },
    {
        id: `CKV_GCP_7`,
        title: `Disabled ABAC authorization on Kubernetes engine clusters`,
        description: `Kubernetes RBAC (Role-Based Access Control) can be used to grant permissions to resources at the cluster and namespace levels. It allows defining roles with rules containing a set of permissions. 

RBAC has significant security advantages and is now stable in Kubernetes, superseding the benefits of legacy authorization with ABAC (Attribute-Based Access Control).`,
        impact: `You cannot have meaningful security advantages in Kubernetes without RBAC, which outweighs the benefits of traditional authorisation with ABAC (Attribute-Based Access Control).`,
        howToFix: `We recommend you disable ABAC authorization and use RBAC in GKE instead.`,
        references: `https://medium.com/swlh/gke-authentication-and-authorization-between-cloud-iam-and-rbac-b368794433eb`,
        group: ``,
    },
    {
        id: `CKV_GCP_8`,
        title: `GCP Kubernetes engine clusters have stack driver logging disabled`,
        description: `Stackdriver is the default logging solution for clusters deployed on GKE. Stackdriver logging is deployed to a new cluster by default, explicitly set to opt-out. 

Stackdriver logging collects only the container’s standard output and standard error streams. To ingest logs, a Stackdriver logging agent must be deployed to each node in the cluster. 

Stackdriver provides a single-pane-of-glass view of metrics, logs, and traces through Kubernetes Engine clusters and workloads.`,
        impact: `You cannot gather the container's standard output and standard error streams without stack driver logging enabled.`,
        howToFix: `We recommend you use Stackdriver logging as a unified data logging solution for GKE workloads unless additional observability tooling is already in place`,
        references: `https://cloud.google.com/blog/products/management-tools/using-logging-your-apps-running-kubernetes-engine`,
        group: ``,
    },
    {
        id: `CKV_GCP_9`,
        title: `Disabled GCP Kubernetes cluster node auto-repair configuration`,
        description: `Auto-repairing mode in GKE is an automated service that identifies and repairs a failing node to maintain a healthy running state. GKE makes periodic checks on the health state of each node in the cluster. 

If a node fails consecutive health checks over an extended time period, GKE initiates a repair process for that node.`,
        impact: `Without enabling automatic node repair on Kubernetes clusters, you will be unable to provide continued operation of mission critical nodes and ensure that applications are operating in accordance with their pre-defined specifications, minimize downstream failures, and provide redundant alerting and triage.`,
        howToFix: `We recommend automatic node repair is enabled on Kubernetes clusters to provide continued operation of mission-critical nodes and ensuring applications are operating based on their pre-defined specs, minimized downstream failures, and redundant alerting and triage.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair`,
        group: ``,
    },
    {
        id: `CKV_GCP_10`,
        title: `Disabled GCP Kubernetes cluster node auto-upgrade configuration`,
        description: `Node auto-upgrade keeps nodes up-to-date with the latest cluster master version when your master is updated on your behalf. 

When a new cluster or node pool is created, node auto-upgrade is enabled as default.`,
        impact: `Without activating Automatic node upgrade, you can't be confident that when new binaries are published, you'll get a patch with the most recent security problems fixed right away.`,
        howToFix: `We recommend you ensure auto-upgrade is enabled. 

Automatic node upgrade ensures that when new binaries are released you instantly get a fix with the latest security issues resolved. 

GKE will automatically ensure that security updates are applied and kept up to date.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-upgrades`,
        group: ``,
    },
    {
        id: `CKV_GCP_11`,
        title: `Cloud SQL database instances publicly accessible`,
        description: `Cloud SQL is a fully-managed relational database service for MySQL, PostgreSQL, and SQL Server. 

It offers data encryption at rest and in transit, Private connectivity with VPC, and user-controlled network access with firewall protection.

It is possible to configure Cloud SQL to have a public IPv4 address. This means your cluster can accept connections from specific IP addresses, or a range of addresses, by adding authorized addresses to your instance. We do not recommend this option.`,
        impact: `SQL Database in the Cloud Because instances are publicly available, they cannot be protected against attackers searching the internet for public databases.`,
        howToFix: `We recommend you ensure Cloud SQL Database Instances are not publicly accessible, to help secure against attackers scanning the internet in search of public databases.`,
        references: `https://cloud.google.com/sql/docs/mysql/backup-recovery/backups#retention`,
        group: ``,
    },
    {
        id: `CKV_GCP_12`,
        title: `Disabled GCP Kubernetes engine clusters network policy`,
        description: `Defining a network policy helps ensure that a compromised front-end service in your application cannot communicate directly with an external interface, for example, a billing or an accounting service several levels down. 

Network policy rules can ensure that Pods and Services in a given namespace cannot access other Pods or Services in a different namespace.`,
        impact: `If you do not enable Network Policy on your Kubernetes engine clusters, you will not be able to select which Pods and Services can communicate with one another inside your cluster.`,
        howToFix: `We recommend you enable Network Policy on Kubernetes engine clusters to determine which Pods and Services can access one another inside your cluster. 

This ensures only the required services are communicating and no explicitly indicated traffic can reach private clusters.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy`,
        group: ``,
    },
    {
        id: `CKV_GCP_13`,
        title: `Disabled GCP Kubernetes engine clusters client certificate`,
        description: `Kubernetes uses client certificates, bearer tokens, an authenticating proxy, or HTTP basic auth to authenticate API requests through authentication plugins. 

As HTTP requests are made to the API server, plugins attempt to associate the following attributes with the request.

If a client certificate is presented and verified, the common name of the subject is used as the user name for the request. It can also indicate a user’s group memberships using the certificate’s organization fields.`,
        impact: `If a client certificate is not supplied and confirmed in GCP Kubernetes engine clusters, the subject's common name is not utilized as the request's user name.`,
        howToFix: `We recommend you ensure Kubernetes engine clusters are authenticated using client certificates.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication`,
        group: ``,
    },
    {
        id: `CKV_GCP_14`,
        title: `Disabled Cloud SQL database instances backup configuration`,
        description: `Cloud SQL is a fully-managed relational database service for MySQL, PostgreSQL, and SQL Server. 

offers data encryption at rest and in transit, Private connectivity with VPC, and user-controlled network access with firewall protection. 

Backups provide a way to restore a Cloud SQL instance to recover lost data or recover from a problem with your instance.`,
        impact: `If you do not activate backup settings on your Cloud SQL database instances, you will not be able to restore a Cloud SQL instance to recover lost data or recover from an issue with your instance.`,
        howToFix: `We recommend you enable automated backups for instances that contain data of high importance.`,
        references: `https://cloud.google.com/sql/docs/mysql/backup-recovery/backups#retention`,
        group: ``,
    },
    {
        id: `CKV_GCP_15`,
        title: `GCP BigQuery dataset publicly accessible`,
        description: `Dataset-level permissions help determine which users, groups, and service accounts are allowed to access tables, views, and table data in a specific BigQuery dataset.

You can configure BigQuery permissions at a higher level in the Cloud IAM resource hierarchy. Your configurations are inherited and based on the IAM structure you select to apply.`,
        impact: `If the GCP BigQuery dataset is publicly available, all Google account holders have access to it and can make it public.`,
        howToFix: `We recommend you ensure private datasets remain private by avoiding the All Authenticated Users option which gives all Google account holders access to the dataset and makes the dataset public.`,
        references: `https://cloud.google.com/bigquery/docs/dataset-access-controls`,
        group: ``,
    },
    {
        id: `CKV_GCP_16`,
        title: `Disabled DNSSEC for GCP Cloud DNS`,
        description: `DNSSEC is a feature of the Domain Name System that authenticates responses to domain name lookups. 

DNSSEC prevents attackers from manipulating or poisoning the responses to DNS requests.`,
        impact: `DNSSEC disabled cannot authenticate answers to domain name lookups and cannot prevent attackers from altering or poisoning DNS responses.`,
        howToFix: `We recommend you ensure DNSSEC is enabled in any public DNS zone, the top-level domain registry, and in the local DNS resolvers.`,
        references: `https://cloud.google.com/dns/docs/dnssec-config`,
        group: ``,
    },
    {
        id: `CKV_GCP_17`,
        title: `RSASHA1 is not used for Zone-Signing and Key-Signing Keys in Cloud DNS DNSSEC`,
        description: `DNSSEC is a feature of the Domain Name System (DNS) that authenticates responses to domain name lookups. 

There are several advanced DNSSEC configuration options you can use if DNSSEC is enabled for your managed zones. 

These include unique signing algorithms, denial of existence, and the ability to use record types that require or recommend DNSSEC for their use.

When enabling DNSSEC for a managed zone, or creating a managed zone with DNSSEC, you can select the DNSSEC signing algorithms and the denial-of-existence type.`,
        impact: `Using RSASHA1 with longer key lengths provides no security benefit.`,
        howToFix: `We do not recommend you use RSASHA1 unless you need it for compatibility reasons, there is no security advantage to using it with larger key lengths.`,
        references: `https://cloud.google.com/dns/docs/dnssec-advanced`,
        group: ``,
    },
    {
        id: `CKV_GCP_18`,
        title: `GKE control plane is public`,
        description: `The GKE cluster control plane and nodes have internet routable addresses that can be accessed from any IP address by default. 

Direct internet access to nodes can be disabled by specifying the google cloud tool option enable-private-nodes at cluster creation.`,
        impact: `If the GKE control plane is open to the public, sensitive controllers are vulnerable to unauthorized access.`,
        howToFix: `We recommend you disable direct internet access to nodes at cluster creation and ensure clusters use master authorized networks and private nodes to reach the control plane by whitelisted CIDRs, nodes within the cluster VPC, and Google management jobs.

We also recommend you limit the exposure of the cluster control plane and nodes to the internet. These settings can only be set at cluster creation time and help ensure sensitive controllers are not exposed to external access.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters`,
        group: ``,
    },
    {
        id: `CKV_GCP_19`,
        title: `GCP Kubernetes engine clusters basic authentication disabled`,
        description: `GKE supports multiple secure authentication methods, including service account bearer tokens, OAuth tokens, x509 client certificates. 

Basic authentication and client certificate issuance are disabled by default for clusters created with GKE 1.12 and later.`,
        impact: `If basic authentication is enabled in GCP Kubernetes engine clusters, attackers can simply attack and leak data.`,
        howToFix: `We recommend you use Cloud IAM, or an alternative secure authentication mechanism, as the identity provider for GKE clusters.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication`,
        group: ``,
    },
    {
        id: `CKV_GCP_20`,
        title: `Master authorized networks are enabled in GKE clusters`,
        description: `Authorized networks allow whitelisting of specific CIDR ranges and permit IP addresses in those ranges to access the cluster master endpoint using HTTPS. 

GKE uses both TLS and authentication to secure access to the cluster master endpoint from the public Internet. This approach enables the flexibility to administer the cluster from anywhere.`,
        impact: `You will not be able to further limit access to defined groups of IP addresses until you enable master approved networks in GKE clusters.`,
        howToFix: `We recommend you enable master authorized networks in GKE clusters. 

Using authorized networks you will be able to further restrict access to specified sets of IP addresses.`,
        references: `https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-policy-reference/configuration-policies/configuration-policies-build-phase/google-cloud-platform-configuration-policies/policy_e1b70bb4-bb77-4326-93d5-5dd9c5170d3f.html`,
        group: ``,
    },
    {
        id: `CKV_GCP_21`,
        title: `GCP Kubernetes engine clusters label information`,
        description: `Labels are key, value pairs that are attached to objects intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system.

Labels can be used to organize and select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object. 

Labels enable users to map their organizational structures onto system objects in a loosely coupled fashion, without requiring clients to store these mappings.`,
        impact: `Without label information, you cannot connect any key-value pairs to objects in GCP Kubernetes engine clusters that are meant to be used to indicate identifying qualities of objects that are meaningful and useful to users but do not immediately imply semantics to the core system.`,
        howToFix: `We recommend you configure Kubernetes clusters with labels.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/creating-managing-labels`,
        group: ``,
    },
    {
        id: `CKV_GCP_22`,
        title: `GCP Kubernetes engine clusters are using Container-Optimized OS for node image`,
        description: `GKE enables users to select the operating system image that runs on each node. 

You can also upgrade an existing cluster to use a different node image type. GKE supports several OS images using the main container runtime directly integrated with Kubernetes, including cos_containerd and ubuntu_containerd.`,
        impact: `Node security cannot be improved without the use of cos containerd and ubuntu containerd. Without Containerd, you won't be able to receive frequent updates on security fixes and patches, giving you superior support, security, and stability than other images.`,
        howToFix: `We recommend you use cos_containerd and ubuntu_containerd to enhance node security. 

The container is an industry-standard container runtime component that regularly updates security fixes and patches, providing better support, security, and stability than other images.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/concepts/node-images`,
        group: ``,
    },
    {
        id: `CKV_GCP_23`,
        title: `Kubernetes clusters are created with alias IP ranges`,
        description: `In GKE, clusters can be set apart based on how they route traffic from one pod to another. 

A cluster that uses alias IP ranges is called a VPC-native cluster. A cluster that uses Google Cloud Routes is called a routes-based cluster.`,
        impact: `Without alias IP ranges set, Pods cannot directly access hosted services without the need of a NAT gateway.`,
        howToFix: `We recommend you create Kubernetes clusters with alias IP ranges enabled. 

Alias IP ranges allow Pods to directly access hosted services without using a NAT gateway.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips`,
        group: ``,
    },
    {
        id: `CKV_GCP_24`,
        title: `Disabled PodSecurityPolicy controller on Kubernetes engine clusters`,
        description: `PodSecurityPolicy is an admission controller resource created to validate requests to create and update Pods on your cluster. The PodSecurityPolicy defines a set of conditions that Pods must meet to be accepted by the cluster. 

When a request to create or update a Pod does not meet the conditions in the PodSecurityPolicy, that request is rejected and an error is returned.`,
        impact: `Without the PodSecurityPolicy controller enabled, you cannot verify requests to create and edit Pods on your cluster.`,
        howToFix: `We recommend you enable PodSecurityPolicy Controller on Kubernetes engine clusters.`,
        references: `https://kubernetes.io/docs/concepts/policy/pod-security-policy/

https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies`,
        group: ``,
    },
    {
        id: `CKV_GCP_25`,
        title: `Disabled private cluster while creating Kubernetes clusters`,
        description: `Private clusters enable the isolation of nodes from any inbound and outbound connectivity to the public internet. This is achieved as the nodes have internal RFC 1918 IP addresses only. 

In private clusters, the cluster master has private and public endpoints. You can configure which endpoint should be enabled or disabled to control access to the public internet.`,
        impact: `Without activating private cluster when constructing Kubernetes clusters, nodes would lack a reserved set of IP addresses and will be unable to ensure their workloads are separated from the public internet.`,
        howToFix: `We recommend you enable private clusters while creating Kubernetes clusters. 

By creating a private cluster, the nodes will have a reserved set of IP addresses, ensuring their workloads are isolated from the public internet.`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters`,
        group: ``,
    },
    {
        id: `CKV_GCP_26`,
        title: `GCP VPC flow logs for the subnet is set to On`,
        description: `Flow Logs capture information about the IP traffic going to and from network interfaces. This information can be used to detect anomalous traffic and insight into security workflows. You can view and retrieve flow log data in Stackdriver Logging.

VPC networks and subnetworks provide logically isolated and secure network partitions to launch Google Cloud Platform (GCP) resources. When Flow Logs are enabled for a subnet, VMs within that subnet report on all Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) flows. 

Each VM samples the inbound and outbound TCP and UDP flows it sees, whether the flow is to or from another VM, a host in the on-premises datacenter, a Google service, or a host on the Internet. If two GCP VMs are communicating and both are in subnets that have VPC Flow Logs enabled, both VMs report the flows.`,
        impact: `Network monitoring, analyzing network utilization and minimizing network traffic expenditures, network forensics, and real-time security analysis are not possible with Flow Logs turned off in GCP VPC.`,
        howToFix: `We recommended you set Flow Logs to On to capture this data. Because the volume of logs may be high, you may wish to enable flow logs only for business-critical VPC Network Subnets.

Flow Logs supports the following use cases:

Network monitoring
Understanding network usage and optimizing network traffic expenses
Network forensics
Real-time security analysis`,
        references: `https://cloud.google.com/vpc/docs/using-flow-logs`,
        group: ``,
    },
    {
        id: `CKV_GCP_27`,
        title: `Default network exist in the project`,
        description: `The default network has a pre-configured network configuration and automatically generates the following insecure firewall rules:

default-allow-internal: Allows ingress connections for all protocols and ports among instances in the network.

default-allow-ssh: Allows ingress connections on TCP port 22(SSH) from any source to any instance in the network.

default-allow-rdp: Allows ingress connections on TCP port 3389(RDP) from any source to any instance in the network.

default-allow-icmp: Allows ingress ICMP traffic from any source to any instance in
the network.

These automatically created firewall rules do not get audit logged and cannot be configured to enable firewall rule logging. In addition, the default network is an auto mode network, which means that its subnets use the same predefined range of IP addresses. As a result, it is not possible to use Cloud VPN or VPC Network Peering with the default network.`,
        impact: `These automatically generated default firewall rules are not audited, and they cannot be modified to enable firewall rule logging.`,
        howToFix: `We recommend that a project should not have a default network to prevent the use of a default network. 

Based on organization security and networking requirements, the organization should create a new network and delete the default network.`,
        references: `https://cloud.google.com/vpc/docs/vpc`,
        group: ``,
    },
    {
        id: `CKV_GCP_28`,
        title: `GCP storage buckets publicly accessible to all authenticated users`,
        description: `Allowing anonymous or public access to a Cloud Storage bucket grants permissions to anyone to access the bucket's content. 

If you are storing sensitive data in the bucket anonymous and public access may not be desired.`,
        impact: `Allowing anonymous or public access to a Cloud Storage bucket gives anybody access to the bucket's contents.`,
        howToFix: `We recommend you ensure anonymous and public access to a bucket is not allowed.`,
        references: `https://cloud.google.com/storage/docs/access-control/lists`,
        group: ``,
    },
    {
        id: `CKV_GCP_29`,
        title: `Disabled GCP cloud storage buckets with uniform bucket-level access`,
        description: `For a user to access a Cloud Storage resource only one of the systems needs to grant the user permission. Cloud IAM is used throughout Google Cloud and allows you to grant a variety of permissions at bucket and project levels. 

ACLs have limited permission options, are used only by Cloud Storage, and allow you to grant permissions on a per-object basis.

Cloud Storage has uniform bucket-level access that supports a uniform permissioning system. Using this feature disables ACLs for all Cloud Storage resources. 

Access to Cloud Storage resources is granted exclusively through Cloud IAM. Enabling uniform bucket-level access guarantees that if a Storage bucket is not publicly accessible, no object in the bucket is publicly accessible.`,
        impact: `You cannot unify and simplify how you provide access to your Cloud Storage resources in GCP cloud storage bucket unless uniform bucket-level access is enabled.`,
        howToFix: `We recommend you enable uniform bucket-level access on Cloud Storage buckets. 

Uniform bucket-level access is used to unify and simplify how you grant access to your Cloud Storage resources. 

Cloud Storage offers two systems that act in parallel for permitting users to access your buckets and objects:

Cloud Identity and Access Management (Cloud IAM)
Access Control Lists (ACLs).`,
        references: `https://cloud.google.com/storage/docs/uniform-bucket-level-access`,
        group: ``,
    },
    {
        id: `CKV_GCP_30`,
        title: `Instances do not use the default Compute Engine service account`,
        description: `The default Compute Engine service account has an Editor role on the project, allowing read and write access to most Google Cloud Services.`,
        impact: `The project's default Compute Engine service account has the Editor role, which grants read and write access to most Google Cloud Services.`,
        howToFix: `We recommend you configure your instance to not use the default Compute Engine service account.

You should create a new service account and assign only the permissions needed by your instance. 

This helps defend against compromised VM privilege escalations and prevent an attacker from gaining access to all of your project.`,
        references: `https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances`,
        group: ``,
    },
    {
        id: `CKV_GCP_31`,
        title: `Instances use a default service account with full access to cloud APIs`,
        description: `When an instance is configured with Compute Engine default service account with Scope Allow full access to all Cloud APIs, based on IAM roles assigned to the user(s) accessing Instance, it may result in privilege escalation. For example, a user may have permission to perform cloud operations and API calls that they are not required to perform.

Along with the ability to optionally create, manage and use user-managed custom service accounts, Google Compute Engine provides a default service account Compute Engine default service account for instance to access necessary cloud services. Project Editor role is assigned to Compute Engine default service account for this service account to have almost all capabilities overall cloud services, except billing. When Compute Engine default service account is assigned to an instance it can operate in three scopes:

Allow default access: Allows only minimum access required to run an Instance (Least Privileges).
Allow full access to all Cloud APIs: Allows full access to all the cloud APIs/Services (too much access).
Set access for each API: Allows Instance administrator to choose only those APIs that are needed to perform specific business functionality expected by instance.`,
        impact: `Instances with full access to cloud APIs using the default service account do not satisfy the concept of least privilege and assist avoid potential privilege escalation.`,
        howToFix: `We recommend you do not assign instances to the default service account Compute Engine
default service account with Scope Allows full access to all Cloud APIs. 

This supports the principle of least privileges and helps prevent potential privilege escalation,`,
        references: `https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances`,
        group: ``,
    },
    {
        id: `CKV_GCP_32`,
        title: `Disabled GCP VM instances block project-wide SSH keys feature`,
        description: `Project-wide SSH keys are stored in Compute/Project-meta-data. Project-wide SSH keys can be used to login into all instances within a project. 

Using project-wide SSH keys eases SSH key management. If SSH keys are compromised, the potential security risk can impact all instances within a project.`,
        impact: `When SSH keys are hacked, the potential security risk affects all instances in a project.`,
        howToFix: `We recommend you use Instance specific SSH keys instead of common/shared project-wide SSH key(s), to limit the attack surface should the SSH keys be compromised.`,
        references: `https://cloud.google.com/compute/docs/instances/access-overview`,
        group: ``,
    },
    {
        id: `CKV_GCP_33`,
        title: `Disabled GCP projects OS login`,
        description: `Enabling OSLogin ensures that SSH keys used to connect to instances are mapped with IAM users. Revoking access to the IAM user will revoke all the SSH keys associated with that particular user. 

It facilitates centralized and automated SSH keypair management. This is useful in handling cases such as response to compromised SSH key pairs and/or revocation of external/third-party/Vendor users.`,
        impact: `Disabling OSLogin does not guarantee that SSH keys used to connect to instances are associated with IAM users.`,
        howToFix: `We recommend you enable OSLogin to bind SSH certificates to IAM users and facilitate effective SSH certificate management.`,
        references: `https://cloud.google.com/container-optimized-os/docs/how-to/sosreport`,
        group: ``,
    },
    {
        id: `CKV_GCP_34`,
        title: `Project instance does not override the project setting enabling OSLogin`,
        description: `Enabling OSLogin ensures that SSH keys used to connect to instances are mapped with IAM users. Revoking access to the IAM user will revoke all the SSH keys associated with that particular user. 

It facilitates centralized and automated SSH keypair management. This is useful in handling cases such as response to compromised SSH key pairs and/or revocation of external/third-party/Vendor users.`,
        impact: `Disabling OSLogin does not ensure that SSH keys used to login to instances are associated with IAM users.`,
        howToFix: `We recommend you enable OSLogin to bind SSH certificates to IAM users and facilitate effective SSH certificate management.`,
        references: `https://hub.steampipe.io/mods/turbot/gcp_compliance/controls/control.cis_v120_4_4?context=benchmark.cis_v120/benchmark.cis_v120_4`,
        group: ``,
    },
    {
        id: `CKV_GCP_35`,
        title: `GCP VM instances serial port access`,
        description: `Interacting with a serial port is often referred to as the serial console. It is similar to using a terminal window: input and output are entirely in text mode with no graphical interface or mouse support. 

If the interactive serial console on an instance is enabled, clients can attempt to connect to that instance from any IP address. For security purposes, interactive serial console support should be disabled.

A virtual machine instance has four virtual serial ports. Interacting with a serial port is similar to using a terminal window: input and output are entirely in text mode with no graphical interface or mouse support. 

The instance's BIOS operating system and other system-level entities write output to the serial ports and accept input, for example, commands and responses to prompts. Typically, these system-level entities use the first serial port (port 1). Serial port 1 is often referred to as the serial console.`,
        impact: `If an instance's interactive serial terminal is enabled, clients can attempt to connect to that instance from any IP address.`,
        howToFix: `The interactive serial console does not support IP-based access restrictions, for example, an IP whitelist. If you enable the interactive serial console on an instance, clients can connect to that instance from any IP address. 

This allows anybody with the correct SSH key, username, project ID, zone, and instance name to connect to that instance. To stop this type of access interactive serial console support should be disabled.`,
        references: `https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-using-serial-console`,
        group: ``,
    },
    {
        id: `CKV_GCP_36`,
        title: `IP forwarding on instances`,
        description: `The Compute Engine instance cannot forward a packet unless the source IP address of the packet matches the IP address of the instance. 

GCP will not deliver a packet with a destination IP address different from the IP address of the instance receiving the packet. Both capabilities are required when using instances to help route packets.

To enable this source and destination IP check, disable the canIpForward field. The canIpForward field allows an instance to send and receive packets with non-matching destination or source IPs.`,
        impact: `The canIpForward property enables an instance to transmit and receive packets with non-matching destination or source IP addresses. It is unable to prevent data loss or information exposure.`,
        howToFix: `We recommend the forwarding of data packets be disabled to prevent data loss and information disclosure.`,
        references: `https://docs.securestate.vmware.com/rule-docs/compute-instance-disable-ip-forwarding`,
        group: ``,
    },
    {
        id: `CKV_GCP_37`,
        title: `Unencrypted GCP VM disks with CSEKs`,
        description: `Customer-Supplied Encryption Keys (CSEK) are a feature in Google Cloud Storage and Google Compute Engine. Google Compute Engine encrypts all data at rest by default. 

Compute Engine handles and manages this encryption automatically, with no additional action required. When you provide your encryption keys Compute Engine uses your key to protect the Google-generated keys used to encrypt and decrypt your data. 

Only users that provide the correct key can use resources protected by a customer-supplied encryption key. Google does not store your keys on its servers and cannot access your protected data unless you provide the key. 

If you forget or lose your key Google is unable to recover the key or to recover any data encrypted with that key. To control and manage this encryption yourself, you must provide your encryption keys.`,
        impact: `Unencrypted virtual machine disks CSEKs cannot protect mission-critical VM drives. It will not aid in the protection of the Google-generated keys used to encrypt and decrpyt your data.`,
        howToFix: `We recommend you supply your encryption keys for Google to use, at a minimum to encrypt business-critical VM disks. 

This helps protect the Google-generated keys used to encrypt and decrypt your data.`,
        references: `https://cloud.google.com/compute/docs/disks/customer-supplied-encryption`,
        group: ``,
    },
    {
        id: `CKV_GCP_38`,
        title: `Boot disks for instances use CSEKs`,
        description: `Customer-Supplied Encryption Keys (CSEK) are a feature in Google Cloud Storage and Google Compute Engine. Google Compute Engine encrypts all data at rest by default. 

Compute Engine handles and manages this encryption automatically, with no additional action required. When you provide your encryption keys Compute Engine uses your key to protect the Google-generated keys used to encrypt and decrypt your data. 

Only users that provide the correct key can use resources protected by a customer-supplied encryption key. Google does not store your keys on its servers and cannot access your protected data unless you provide the key. 

If you forget or lose your key Google is unable to recover the key or to recover any data encrypted with that key. To control and manage this encryption yourself, you must provide your encryption keys.`,
        impact: `If you do not employ CSEKs for boot disk instances, you will be unable to encrypt boot disks for instances, which will make it impossible to safeguard the Google-generated keys needed to encrypt and decrypt your data.`,
        howToFix: `We recommend you supply your encryption keys for Google to use, at a minimum to encrypt boot disks for instances. 

This helps protect the Google-generated keys used to encrypt and decrypt your data.`,
        references: `https://cloud.google.com/compute/docs/disks/customer-supplied-encryption`,
        group: ``,
    },
    {
        id: `CKV_GCP_39`,
        title: `Compute instances launch with shielded VM disabled`,
        description: `Shielded VMs are virtual machines (VMs) on a Google Cloud Platform hardened by a set of security controls that help defend against rootkits and bootkits. 

Shielded VM offers verifiable integrity on your Compute Engine VM instances, so you can be confident your instances have not been compromised by boot- or kernel-level malware or rootkits. 

The verifiable integrity of a Shielded VM is achieved through the use of Secure Boot and integrity monitoring, see below for further details.

Integrity monitoring helps you understand and make decisions about the state of your VM instances. The Shielded VM vTPM enables Measured Boot by performing the measurements needed to create the integrity policy baseline used for comparison with measurements from subsequent VM boots to determine any changes.`,
        impact: `Compute instances that are launched without shielded VM enabled cannot fight against advanced threats, and you must guarantee that the boot loader and firmware on your VMs are signed and untampered with.`,
        howToFix: `We recommend you launch Compute instances with Shielded VM enabled to defend against advanced threats, and ensure that the boot loader and firmware on your VMs are signed and untampered. 

Shielded VM instances run firmware signed and verified using Google's Certificate Authority, ensuring the instance's firmware is unmodified and the root of trust for Secure Boot is established. 

Secure Boot is a virtual trusted platform module (vTPM)-enabled Measured Boot. It helps ensure that the system only runs authentic software by verifying the digital signature of all boot components and halting the boot process if signature verification fails.`,
        references: `https://cloud.google.com/compute/shielded-vm/docs/shielded-vm`,
        group: ``,
    },
    {
        id: `CKV_GCP_40`,
        title: `Compute instances have public IPs`,
        description: `To reduce your attack surface Compute instances should not have public IP addresses. 

To minimize the instance's exposure to the internet configures instances behind load balancers.`,
        impact: `Using compute instances with public IP addresses broadens your attack surface. It will use external IP addresses to expose your instances over the internet.`,
        howToFix: `We recommend you ensure compute instances are not configured to have external IP addresses.`,
        references: `https://cloud.google.com/compute/docs/ip-addresses`,
        group: ``,
    },
    {
        id: `CKV_GCP_41`,
        title: `IAM users are not assigned Service Account User or Service Account Token creator roles at the project level`,
        description: `A service account is a special Google account that belongs to an application or a VM, instead of to an individual end-user. Application/VM-Instance uses the service account to call the service's Google API so that end-users are not directly involved. 

The service account resource has IAM policies attached to it to determine who can use the service account.

Users with IAM roles to update the App Engine and Compute Engine instances, such as App Engine Deployer and Compute Instance Admin, can run code as the service accounts used to run these instances. 

This enables users to indirectly gain access to resources for which the service accounts have access. Similarly, SSH access to a Compute Engine instance may also provide the ability to execute code as that instance/Service account.

Your organization may have multiple user-managed service accounts configured for a project. Granting the iam.serviceAccountUser or iam.serviceAserviceAccountTokenCreatorccountUser roles to a user for a project gives the user access to all service accounts in the project, including service accounts created in the future. This can result in the elevation of privileges by using service accounts and corresponding Compute Engine instances.

To implement least privileges best practices, IAM users should not be assigned the Service Account User or Service Account Token Creator roles at the project level. 

These roles should be assigned to a user for a specific service account, giving that user access to the service account. The Service Account User allows a user to bind a service account to a long-running job service. The Service Account Token Creator role allows a user to directly impersonate, or assert, the identity of a service account.`,
        impact: `The Service Account User feature enables a user to associate a service account with a long-running job service. A user with the Service Account Token Creator role can directly spoof or claim the identity of a service account.`,
        howToFix: `We recommend you assign the Service Account User (iam.serviceAccountUser) and Service Account Token Creator iam.serviceAccountTokenCreator roles to a user for a specific service account rather than assigning the role to a user at the project level.`,
        references: `https://cloud.google.com/iam/docs/service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_42`,
        title: `Service Account has admin privileges`,
        description: `A service account is a special Google account that belongs to an application or a VM, not to an individual end-user. The application uses the service account to call the service's Google API so that users are not directly involved.

Service accounts represent service-level security of application or VM Resources, determined by the roles assigned to them. Enrolling ServiceAccount with Admin rights gives full access to an assigned application or a VM. 

A ServiceAccount Access holder can perform critical actions, such as delete and update change settings, without user intervention.`,
        impact: `Enrolling a ServiceAccount with Admin privileges grants complete access to a given application or VM. Without user participation, a ServiceAccount Access holder can undertake crucial activities such as deleting and updating modify settings.`,
        howToFix: `We recommend you do not grant Admin privileges for ServiceAccount.`,
        references: `https://cloud.google.com/iam/docs/creating-managing-service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_43`,
        title: `GCP KMS encryption key rotation`,
        description: `Google Cloud Key Management Service stores cryptographic keys in a hierarchical structure designed for access control management. 

The format for the rotation schedule depends on the client library used. In Terraform, the rotation period unit must be seconds.

A key is a named object representing a cryptographic key used for a specific purpose, including data protection. The key material, the actual bits used for encryption, can change over time as new key versions are created. 

A collection of files could be encrypted with the same key and people with decrypt permissions on that key would be able to decrypt those files.`,
        impact: `Data security cannot be provided if the GCP KMS encryption key is not rotated every 90 days.`,
        howToFix: `We recommend you set a key rotation period, including the start time. 

A key can be created with a specified rotation period, which is the time when new key versions are generated automatically.

A key can also be created with a specified next rotation time.`,
        references: `https://cloud.google.com/kms/docs/key-rotation`,
        group: ``,
    },
    {
        id: `CKV_GCP_44`,
        title: `Roles do not impersonate or manage Service Accounts used at the folder level`,
        description: `The IAM role is an identity with specific permissions. 

An IAM role is similar to an IAM user: it has a Google identity with permission policies that determine what the identity can and cannot do in Google Cloud. 

Certain IAM roles contain permissions that enable a user with the role to impersonate or manage service accounts in a GCP folder through IAM inheritance from a higher resource, i.e., folder binding.`,
        impact: `Certain IAM roles have capabilities that allow a user to impersonate or modify service accounts in a GCP folder via IAM inheritance from a higher resource, i.e., folder binding.`,
        howToFix: `We recommend you do not set IAM role bindings with known dangerous roles that enable impersonation at the folder level.`,
        references: `https://cloud.google.com/iam/docs/impersonating-service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_45`,
        title: `Roles do not impersonate or manage Service Accounts used at the organizational level`,
        description: `The IAM role is an identity with specific permissions. An IAM role is similar to an IAM user: it has a Google identity with permission policies that determine what the identity can and cannot do in Google Cloud. 

Certain IAM roles contain permissions that enable a user with the role to impersonate or manage service accounts in a GCP folder through IAM inheritance from a higher resource, i.e., folder binding.`,
        impact: `Certain IAM roles have capabilities that allow a user to impersonate or modify service accounts in a GCP project via IAM inheritance from a higher resource, i.e., project binding.`,
        howToFix: `We recommend you do not set IAM role bindings with known dangerous roles that enable impersonation at the organizational level.`,
        references: `https://cloud.google.com/iam/docs/impersonating-service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_46`,
        title: `Default Service Account is not used at the project level`,
        description: `A service account is a special Google account that belongs to an application or a VM, not to an individual end-user. The application uses the service account to call the service's Google API so that users are not directly involved. 

Service accounts represent service-level security of application or VM Resources, determined by the roles assigned to them. The use of Default service accounts should be avoided, see below for details.`,
        impact: `Service by Default When an account is utilized at the project level, it may result in a service security breach of application or VM resources.`,
        howToFix: `We recommend you do not set IAM role bindings using the default Compute Engine and App Engine service account.`,
        references: `https://cloud.google.com/compute/docs/access/service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_47`,
        title: `Default Service Account is not used at the organization level`,
        description: `A service account is a special Google account that belongs to an application or a VM, not to an individual end-user. The application uses the service account to call the service's Google API so that users are not directly involved. 

Service accounts represent service-level security of application or VM Resources, determined by the roles assigned to them. The use of Default service accounts should be avoided, see below for details.`,
        impact: `Service by Default When an account is utilized at the organizational level, it might result in a service security breach of application or VM resources.`,
        howToFix: `We recommend you do not set IAM role bindings using the default Compute Engine and App Engine service account.

Default Compute Engine Service Account: Used by GKE, Compute, DataProc, DataFlow, Composer.
project-number-compute@developer.gserviceaccount.com

Default App spot Service Account: Used by App Engine, Cloud Functions, App Engine-based services.
project-id@appspot.gserviceaccount.com`,
        references: `https://cloud.google.com/resource-manager/docs/organization-policy/restricting-service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_48`,
        title: `Default Service Account is not used at the folder level`,
        description: `A service account is a special Google account that belongs to an application or a VM, not to an individual end-user. The application uses the service account to call the service's Google API so that users are not directly involved. 

Service accounts represent service-level security of application or VM Resources, determined by the roles assigned to them. The use of Default service accounts should be avoided, see below for details.`,
        impact: `Service by Default When an account is utilized at the folder level, it might result in a service security breach of application or VM resources.`,
        howToFix: `We recommend you do not set IAM role bindings using the default Compute Engine and App Engine service account.

Default Compute Engine Service Account: Used by GKE, Compute, DataProc, DataFlow, Composer.
project-number-compute@developer.gserviceaccount.com

Default Appspot Service Account: Used by App Engine, Cloud Functions, App Engine based services.
project-id@appspot.gserviceaccount.com`,
        references: `https://cloud.google.com/resource-manager/docs/organization-policy/restricting-service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_49`,
        title: `No roles that enable to impersonate and manage all service accounts are used at a project level`,
        description: `The IAM role is an identity with specific permissions. An IAM role is similar to an IAM user: it has a Google identity with permission policies that determine what the identity can and cannot do in Google Cloud. 

Certain IAM roles contain permissions that enable a user with the role to impersonate or manage service accounts in a GCP project through IAM inheritance from a higher resource, i.e., project binding.`,
        impact: `Any roles that allow for the impersonation and management of all service accounts at the project level can result in a service security breach of application or VM resources.`,
        howToFix: `We recommend you do not set IAM role bindings with known dangerous roles that enable impersonation at the project level.

The following roles enable identities to impersonate all service account identities within a project if the identity is granted the role at the project, folder, or organization level. The following list includes our current recommendations for dangerous roles, however, it is not exhaustive as permissions and roles change frequently.

Primitive Roles:

roles/owner\\nroles/editor`,
        references: `https://cloud.google.com/iam/docs/impersonating-service-accounts`,
        group: ``,
    },
    {
        id: `CKV_GCP_50`,
        title: `GCP MySQL instance with local_infile database flag disabled`,
        description: `The local_infile database flag controls the server-side LOCAL capability for LOAD DATA statements. 

Depending on the local_infile setting, the server refuses or permits local data loading by clients that have LOCAL enabled on the client-side.

To explicitly cause the server to refuse LOAD DATA LOCAL statements start mysqld with local_infile disabled, regardless of how client programs and libraries are configured at build time or runtime. local_infile can also be set at runtime.`,
        impact: `The security vulnerabilities cannot be addressed by enabling the local infile database flag in a GCP MySQL instance.`,
        howToFix: `We recommended you set the local_infile database flag for a Cloud SQL MySQL instance to off to address the security issues associated with the flag.`,
        references: `https://cloud.google.com/sql/docs/mysql/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_51`,
        title: `Cloud SQL PostgreSQL instances have log_checkpoints database flag set to On`,
        description: `Enabling log_checkpoints causes checkpoints and restart points to be logged in the server log. 

Some statistics are included in the log messages, including the number of buffers written, and the time spent writing them. This parameter can only be set in the PostgreSQL.conf file or on the server command line.`,
        impact: `Disabling log_checkpoints prevents checkpoints and restart points from being recorded in the server log.`,
        howToFix: `We recommended you set the log_checkpoints database flag for the Cloud SQL PostgreSQL instance to on.`,
        references: `https://cloud.google.com/sql/docs/postgres/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_52`,
        title: `GCP PostgreSQL instance database flag log_connections is disabled`,
        description: `PostgreSQL does not log attempted connections by default. Enabling the log_connections setting creates log entries for each attempted connection to the server, along with successful completion of client authentication.

This information can be useful in troubleshooting issues and determining any unusual connection attempts to the server.`,
        impact: `When the log_connections setting is off, no-log entries are created for each attempted connection to the server, as well as the successful completion of client authentication.`,
        howToFix: `We recommend you set the log_connections database flag for Cloud SQL PostgreSQL instances to on.`,
        references: `https://cloud.google.com/sql/docs/postgres/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_53`,
        title: `GCP PostgreSQL instance database flag log_disconnections disabled`,
        description: `Enabling the log_disconnections database flag logs at the end of each session, including the session duration. PostgreSQL does not log session details by default, including duration and session end details. 

Enabling the log_disconnections database flag creates log entries at the end of each session, useful when troubleshooting issues and determining unusual activity across a time period.

The log_disconnections and log_connections work hand in hand and usually the pair would be enabled/disabled together.`,
        impact: `Disabling the log_disconnections database setting prevents the termination of each session from being logged, including the session length.`,
        howToFix: `We recommended you to set the log_disconnections flag for a PostgreSQL instance to On.`,
        references: `https://cloud.google.com/sql/docs/postgres/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_54`,
        title: `GCP PostgreSQL instance database flag log_lock_waits is disabled`,
        description: `Deadlock timeout defines the time to wait on a lock before checking for any conditions. 

Frequent runovers on deadlock timeout can be an indication of an underlying issue. 

Log these waits on locks using the log_lock_waits database flag and use the information to identify poor performance due to locking delays, or if a specially-crafted SQL is attempting to starve resources through holding locks for excessive amounts of time.`,
        impact: `Disabling log_lock_waits in the GCP PostgreSQL instance database will not generate a log for any session and will prevent you from identifying waits that take longer than the specified deadlock timeout time to obtain a lock.`,
        howToFix: `We recommended you set the log_lock_waits flag for a PostgreSQL instance to On. 

This will create a log for any session and allow you to identify waits that take longer than the allotted deadlock_timeout time to acquire a lock.`,
        references: `https://cloud.google.com/sql/docs/postgres/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_55`,
        title: `PostgreSQL instance database flag log_min_messages is set`,
        description: `The log_min_error_statement database flag defines the minimum message severity level that is considered to be an error statement. Messages for error statements are logged with the SQL statement. 

Valid values include DEBUG5, DEBUG4, DEBUG3, DEBUG2, DEBUG1, INFO, NOTICE, WARNING, ERROR, LOG, FATAL, and PANIC. Each severity level includes subsequent levels.

Deadlock timeout defines the time to wait on a lock before checking for any conditions. Frequent runovers on deadlock timeout can be an indication of an underlying issue. 

Log these waits on locks using the log_lock_waits database flag and use the information to identify poor performance due to locking delays, or if a specially-crafted SQL is attempting to starve resources through holding locks for excessive amounts of time.`,
        impact: `Messages may not be categorized as error messages correctly if log_min_error statement is not set to the right value.`,
        howToFix: `We recommend you set the log_min_error_statement flag for PostgreSQL database instances by your organization's logging policy for auditing purposes. Auditing helps you troubleshoot operational problems and also permits forensic analysis. 

If log_min_error_statement is not set to the correct value, messages may not be classified as error messages appropriately. 

Considering general log messages as error messages would make it difficult to find actual errors while considering only stricter severity levels as error messages may skip actual errors to log their SQL statements.`,
        references: `https://cloud.google.com/sql/docs/postgres/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_56`,
        title: `GCP PostgreSQL instance database flag log_temp_files is set to 0`,
        description: `PostgreSQL can create a temporary file for actions such as sorting, hashing, and temporary query results when these operations exceed work_mem. 

The log_temp_files flag controls logging names and the file size when it is deleted. 

Configuring log_temp_files to zero (0) causes all temporary file information to be logged, while positive values log only files whose size are greater than or equal to the specified number of kilobytes. 

A value of -1 disables temporary file information logging.`,
        impact: `When log_temp_files is set to zero (0), all temporary file information is reported, but positive values log only files with a size larger than or equal to the specified amount of kilobytes.`,
        howToFix: `We recommend you set the log_temp_files database flag for Cloud SQL PostgreSQL instances is set to zero (0). 

If temporary files are not logged, it may be difficult to identify potential performance issues caused by either poor application coding, or deliberate resource starvation attempts.`,
        references: `https://cloud.google.com/sql/docs/postgres/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_57`,
        title: `GCP PostgreSQL instance database flag log_min_duration_statement is set to -1`,
        description: `Logging SQL statements may include sensitive information that should not be recorded in logs. 

The log_min_duration_statement database flag defines the minimum amount of execution time in milliseconds of a statement where the total duration of the statement is logged.`,
        impact: `SQL statements that are logged may include sensitive information that should not be recorded in logs.`,
        howToFix: `We recommend you ensure the log_min_duration_statement database flag for Cloud SQL PostgreSQL instances is disabled. 

To achieve this, set the value to -1.`,
        references: `https://docs.securestate.vmware.com/rule-docs/compute-instance-disable-ip-forwarding`,
        group: ``,
    },
    {
        id: `CKV_GCP_58`,
        title: `Cloud SQL SQL server instance database flag cross DB ownership chaining is set to Off`,
        description: `Use the cross DB ownership chaining database flag to configure cross-database ownership chaining for an instance of Microsoft SQL Server. 

This server option allows you to control cross-database ownership chaining at database-level, or to allow cross-database ownership chaining for all databases.`,
        impact: `Enabling cross db ownership chaining is only effective if all databases hosted by the SQL Server instance participate in cross-database ownership chaining, and you are aware of the security implications of this option.`,
        howToFix: `We recommend you disable the cross DB ownership chaining flag for Cloud SQL SQL Server instances, by setting it to Off. 

Enabling cross DB ownership chaining is only effective when all of the databases hosted by the instance of SQL Server participate in cross-database ownership chaining, and you are aware of the security implications of this setting.`,
        references: `https://cloud.google.com/sql/docs/sqlserver/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_59`,
        title: `Cloud SQL SQL server instance contained database authentication database flag is set to Off`,
        description: `A contained database includes all database settings and metadata required to define the database. It has no configuration dependencies on the instance of the Database Engine where the database is installed. 

Users can connect to the database without authenticating a login at the Database Engine level. Isolating the database from the Database Engine makes it possible to easily move the database to another instance of SQL Server. Contained databases have some unique threats that should be understood and mitigated by SQL Server Database Engine administrators. 

Most of the threats are related to the USER WITH PASSWORD authentication process, which moves the authentication boundary from the Database Engine level to the database level`,
        impact: `If the Cloud SQL SQL server instance included database authentication database flag is set to On, users can connect to the database without authenticating a login at the Database Engine level.`,
        howToFix: `We recommend you ensure the contained database authentication database flag for SQL Server database instances is disabled. 

To achieve this, set the value to Off.`,
        references: `https://cloud.google.com/sql/docs/sqlserver/flags`,
        group: ``,
    },
    {
        id: `CKV_GCP_60`,
        title: `Cloud SQL database instances public IPs`,
        description: `To lower the organization's attack surface, Cloud SQL databases should not have public IPs. Private IPs provide improved network security and lower latency for your application.`,
        impact: `Increase the attack surface of the organization for public IPs in Cloud SQL database instances.`,
        howToFix: `We recommend you configure Second Generation SQL instances to use private IPs instead of public IPs.`,
        references: `https://cloud.google.com/sql/docs/mysql/configure-ip`,
        group: ``,
    },
    {
        id: `CKV_GCP_61`,
        title: `Enable VPC Flow Logs and Intranode Visibility`,
        description: `Enable VPC Flow Logs and Intranode Visibility to see pod-level traffic, even for traffic within a worker node. 

With this feature, you can use VPC Flow Logs or other VPC features for internode traffic.`,
        impact: `When VPC Flow Logs are off, Intranode Visibility does not view pod-level traffic, even within a worker node.`,
        howToFix: `We recommend you to enable VPC Flow Logs and Intranode Visibility`,
        references: `https://cloud.google.com/vpc/docs/using-flow-logs`,
        group: ``,
    },
    {
        id: `CKV_GCP_62`,
        title: `The bucket should log access`,
        description: `Some resources require a record of who access them and when.`,
        impact: `Without log access, it is impossible to obtain information about the bucket's storage use and all queries performed on a single bucket.`,
        howToFix: `We recommend your bucket should have log access`,
        references: `https://cloud.google.com/logging/docs/buckets`,
        group: ``,
    },
    {
        id: `CKV_GCP_63`,
        title: `Bucket log to itself`,
        description: `A check to ensure that the specified logging bucket is not itself. A bucket must not log access to itself, logging requires a second separate bucket.`,
        impact: `Bucket logs to themselves do not meet acceptable compliance criteria.`,
        howToFix: `We recommend you ensure that the specified logging bucket is not itself. A bucket must not log access to itself, logging requires a second separate bucket.`,
        references: `https://cloud.google.com/logging/docs/buckets`,
        group: ``,
    },
    {
        id: `CKV_GCP_64`,
        title: `GCP Kubernetes Engine Clusters configured with private nodes`,
        description: `Disable public IP addresses for cluster nodes, so that they only have private IP addresses. Private Nodes are nodes with no public IP addresses.`,
        impact: `Enabling public IP addresses on cluster nodes does not limit access to just internal networks, and it does not require attackers to first get local network access before attempting to compromise the underlying Kubernetes servers.`,
        howToFix: `Disabling public IP addresses on cluster nodes restricts access to only internal networks, forcing attackers to obtain local network access before attempting to compromise the underlying Kubernetes hosts`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters`,
        group: ``,
    },
    {
        id: `CKV_GCP_65`,
        title: `Kubernetes RBAC users are managed with Google Groups for GKE`,
        description: `Cluster Administrators should leverage G Suite Groups and Cloud IAM to assign Kubernetes user roles to a collection of users, instead of to individual emails using only Cloud IAM.

On- and off-boarding users is often difficult to automate and prone to error. 

Using a single source of truth for user permissions via G Suite Groups reduces the number of locations that an individual must be off-boarded from, and prevents users from gaining unique permissions sets that increase the cost of the audit.`,
        impact: `Onboarding and offboarding user is frequently difficult to automate and prone to mistake.`,
        howToFix: `It is recommended to fix this in buildtime in Terraform. Resource is google_container_cluster. Arguments is authenticator_groups_config.security_group`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control`,
        group: ``,
    },
    {
        id: `CKV_GCP_66`,
        title: `Binary authorization used`,
        description: `Binary Authorization helps to protect supply-chain security by only allowing images with verifiable cryptographically signed metadata into the cluster.

Binary Authorization provides software supply-chain security for images that you deploy to GKE from Google Container Registry (GCR) or another container image registry.

Binary Authorization requires images to be signed by trusted authorities during the development process. These signatures are then validated at deployment time. By enforcing validation, you can gain tighter control over your container environment by ensuring only verified images are integrated into the build-and-release process`,
        impact: `Without binary Authorization, only pictures with verified cryptographically signed information are allowed into the cluster, which does not assist to ensure supply-chain security.`,
        howToFix: `We recommend you ensure binary authorization is used`,
        references: `https://cloud.google.com/binary-authorization#:~:text=Binary%20Authorization%20is%20a%20deploy,(GKE)%20or%20Cloud%20Run.`,
        group: ``,
    },
    {
        id: `CKV_GCP_67`,
        title: `GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled`,
        description: `Disable the legacy GCE instance metadata APIs for GKE nodes. Under some circumstances, these can be used from within a pod to extract the node's credentials.

The legacy GCE metadata endpoint allows simple HTTP requests to be made returning sensitive information. 

To prevent the enumeration of metadata endpoints and data exfiltration, the legacy metadata endpoint must be disabled.

Without requiring a custom HTTP header when accessing the legacy GCE metadata endpoint, a flaw in an application that allows an attacker to trick the code into retrieving the contents of an attacker-specified web URL could provide a simple method for enumeration and potential credential exfiltration. 

By requiring a custom HTTP header, the attacker needs to exploit an application flaw that allows them to control the URL and also add custom headers to carry out this attack successfully.`,
        impact: `Simple HTTP calls may be performed to the old GCE metadata endpoint, which returns sensitive information.`,
        howToFix: `We recommend you ensure GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/protecting-cluster-metadata`,
        group: ``,
    },
    {
        id: `CKV_GCP_68`,
        title: `Disabled secure boot for shielded GKE nodes`,
        description: `Enable Secure Boot for Shielded GKE Nodes to verify the digital signature of node boot components.

An attacker may seek to alter boot components to persist malware or rootkits during system initialization. 

Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.`,
        impact: `An attacker may attempt to modify boot components in order to keep malware or root kits active during system startup.`,
        howToFix: `We recommend you ensure secure boot for shielded GKE nodes is enabled`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes#:~:text=Secure%20boot%20is%20a%20node,tool%20or%20Google%20Cloud%20Console.`,
        group: ``,
    },
    {
        id: `CKV_GCP_69`,
        title: `The disabled GKE metadata server`,
        description: `Running the GKE Metadata Server prevents workloads from accessing sensitive instance metadata and facilitates Workload Identity.

Every node stores its metadata on a metadata server. Some of this metadata, such as kubelet credentials and the VM instance identity token, is sensitive and should not be exposed to a Kubernetes workload. 

Enabling the GKE Metadata server prevents pods (that are not running on the host network) from accessing this metadata and facilitates Workload Identity.

When unspecified, the default setting allows running pods to have full access to the node's underlying metadata server.`,
        impact: `Disabling the GKE metadata server does not prohibit workloads from accessing critical instance metadata and helps with Workload Identity.`,
        howToFix: `We recommend you to ensure Ensure the GKE metadata server is enable`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity`,
        group: ``,
    },
    {
        id: `CKV_GCP_70`,
        title: `Unset GKE Release Channel`,
        description: `Release channels offer customers the ability to balance between stability and the feature set of the version deployed in the cluster.`,
        impact: `Organizations can better define their expectations of what is stable thanks to the release channels.`,
        howToFix: `We recommend you ensure the GKE Release Channel is set`,
        references: `https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels`,
        group: ``,
    },
    {
        id: `CKV_GCP_71`,
        title: `Disabled shielded GKE nodes`,
        description: `Shielded GKE Nodes provides verifiable integrity via secure boot, virtual trusted platform module (vTPM)-enabled measured boot, and integrity monitoring.

Shielded GKE nodes protect clusters against boot- or kernel-level malware or rootkits which persist beyond infected OS.

Shielded GKE nodes run firmware which is signed and verified using Google's Certificate Authority, ensuring that the nodes' firmware is unmodified and establishing the root of trust for Secure Boot. 

GKE node identity is strongly protected via virtual Trusted Platform Module (vTPM) and verified remotely by the master node before the node joins the cluster. Lastly, GKE node integrity (i.e., boot sequence and kernel) is measured and can be monitored and verified remotely.`,
        impact: `Disbaled protected GKE Nodes do not offer verified integrity through secure boot, vTPM-enabled measured boot, or integrity monitoring.`,
        howToFix: `We recommend you ensure shielded GKE nodes are enabled`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes#:~:text=Secure%20boot%20is%20a%20node,tool%20or%20Google%20Cloud%20Console.`,
        group: ``,
    },
    {
        id: `CKV_GCP_72`,
        title: `Disabled integrity monitoring for shielded GKE nodes`,
        description: `Enable Integrity Monitoring for Shielded GKE Nodes to be notified of inconsistencies during the node boot sequence.

Integrity Monitoring provides active alerting for Shielded GKE nodes which allow administrators to respond to integrity failures and prevent compromised nodes from being deployed into the cluster.`,
        impact: `Disabling Integrity Monitoring for Shielded GKE Nodes prevents errors from being detected during the node startup phase.`,
        howToFix: `We recommend you ensure integrity monitoring for shielded GKE nodes is enabled`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes#:~:text=Secure%20boot%20is%20a%20node,tool%20or%20Google%20Cloud%20Console.`,
        group: ``,
    },
    {
        id: `CKV2_GCP_1`,
        title: `Kubernetes engine cluster has a default service account for project access`,
        description: `Create and use minimally privileged Service accounts to run GKE cluster nodes instead of using the Compute Engine default service account. Unnecessary permissions could be abused in the case of a node compromise.

A GCP service account (as distinct from a Kubernetes ServiceAccount) is an identity that an instance of an application can use to run GCP API requests on your behalf. This identity is used to identify virtual machine instances to other Google Cloud Platform services. 

By default, Kubernetes Engine nodes use the Compute Engine default service account. This account has broad access by default, as defined by access scopes, making it useful to a wide variety of applications on the VM, but it has more permissions than are required to run your Kubernetes Engine cluster.

You should create and use a minimally privileged service account to run your Kubernetes Engine cluster instead of using the Compute Engine default service account, and create separate service accounts for each Kubernetes Workload.
Kubernetes Engine requires, at a minimum, the node service account to have the monitoring.

viewer, monitoring.metricWriter, and logging.logWriter roles. Additional roles may need to be added for the nodes to pull images from GCR.`,
        impact: `The Compute Engine default service account has broad access by default, as determined by access scopes, which makes it helpful for a wide range of apps on the VM, but it has more rights than are necessary to run your Kubernetes Engine cluster.`,
        howToFix: `We recommend you ensure Kubernetes engine cluster nodes do not have a default service account for project access`,
        references: `https://cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster`,
        group: ``,
    },
    {
        id: `CKV2_GCP_2`,
        title: `Configured GCP project with legacy network`,
        description: `To prevent the use of legacy networks, a project should not have a legacy network configured.

Legacy networks have a single network IPv4 prefix range and a single gateway IP address for the whole network. The network is global in scope and spans all cloud regions. 

Subnetworks cannot be created in a legacy network and are unable to switch from legacy to auto or custom subnet networks. Legacy networks can have an impact on high network traffic projects and are subject to a single point of contention or failure.`,
        impact: `Legacy networks can have an impact on high-traffic projects because they have a single point of conflict or failure.`,
        howToFix: `We recommend you ensure the GCP project is not configured with legacy network`,
        references: `https://cloud.google.com/vpc/docs/using-legacy`,
        group: ``,
    },
    {
        id: `CKV2_GCP_3`,
        title: `GCP-managed service account keys for each service account`,
        description: `Anyone who has access to the keys will be able to access resources through the service account. GCP-managed keys are used by Cloud Platform services such as App Engine and Compute Engine. 

These keys cannot be downloaded. Google will keep the keys and automatically rotate them on an approximately weekly basis. User-managed keys are created, downloadable, and managed by users. They expire 10 years from creation.`,
        impact: `Anyone with access to the keys will be able to use the service account to access resources.`,
        howToFix: `For user-managed keys, the user has to take ownership of key management activities which include:

Key storage
Key distribution
Key revocation
Key rotation
Protecting the keys from unauthorized users
Key recovery

Even with key owner precautions, keys can be easily leaked by common development malpractices like checking keys into the source code or leaving them in the Downloads directory, or accidentally leaving them on support blogs/channels.

We recommended you prevent user-managed service account keys.`,
        references: `https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-policy-reference/configuration-policies/configuration-policies-build-phase/google-cloud-platform-configuration-policies/policy_662f4580-b4cf-430b-a72c-6550c82d38e1.html`,
        group: ``,
    },
    {
        id: `CKV2_GCP_4`,
        title: `Unconfigured GCP log bucket retention policy`,
        description: `Enabling retention policies on log buckets will protect logs stored in cloud storage buckets from being overwritten or accidentally deleted. 

Logs can be exported by creating one or more sinks that include a log filter and a destination. As Stackdriver Logging receives new log entries, they are compared against each sink. If a log entry matches a sink's filter, then a copy of the log entry is written to the destination.

Sinks can be configured to export logs in storage buckets. It is recommended to configure a data retention policy for these cloud storage buckets and to lock the data retention policy; thus permanently preventing the policy from being reduced or removed. 

This way, if the system is ever compromised by an attacker or a malicious insider who wants to cover their tracks, the activity logs are preserved for forensics and security investigations.`,
        impact: `By not employing retention policies on log buckets, you are risking overwriting or mistakenly deleting logs saved in cloud storage buckets.`,
        howToFix: `It is recommended to set up retention policies and configure Bucket Lock on all storage buckets that are used as log sinks.`,
        references: `https://cloud.google.com/storage/docs/bucket-lock`,
        group: ``,
    },
    {
        id: `CKV2_GCP_5`,
        title: `GCP project audit logging unconfigured across all services and all users in a project`,
        description: `It is recommended that Cloud Audit Logging is configured to track all admin activities and read, write access to user data.
Cloud Audit Logging maintains two audit logs for each project, folder, and organization: Admin Activity and Data Access.

Admin Activity logs contain log entries for API calls or other administrative actions that modify the configuration or metadata of resources. Admin Activity audit logs are enabled for all services and cannot be configured.
Data Access audit logs record API calls that create, modify, or read user-provided data. These are disabled by default and should be enabled.

There are three kinds of Data Access audit log information:

Admin read: Records operations that read metadata or configuration information. Admin Activity audit logs record writes of metadata and configuration information that cannot be disabled.

Data read Records operations that read user-provided data. 
o Data write Records operations that write user-provided data.`,
        impact: `You cannot trace all administrative operations and read/write access to user data unless Cloud Audit Logging is enabled.`,
        howToFix: `It is recommended to have an effective default audit config configured in such a way that:

- log type is set to DATA_READ (to log user activity tracking) and DATA_WRITES (to log changes/tampering to user data).

- audit config is enabled for all the services supported by the Data Access audit logs feature.

- Logs should be captured for all users, i.e., there are no exempted users in any of the audit config sections. This will ensure overriding the audit config will not contradict the requirement.`,
        references: `https://cloud.google.com/logging/docs/audit/configure-data-access`,
        group: ``,
    },
    {
        id: `CKV2_GCP_6`,
        title: `Cloud KMS cryptokeys publicly accessible`,
        description: `Granting permissions to all Users or allAuthenticatedUsers allows anyone to access the dataset. 

Such access might not be desirable if sensitive data is stored at the location. In this case, ensure that anonymous and/or public access to a Cloud KMS cryptokey is not allowed.`,
        impact: `Allowing allUsers or allAuthenticatedUsers to view the dataset allows anybody to do so.`,
        howToFix: `It is recommended that the IAM policy on Cloud KMS cryptokeys should restrict anonymous and/or public access.`,
        references: `https://cloud.google.com/kms/docs/reference/permissions-and-roles`,
        group: ``,
    },
    {
        id: `CKV2_GCP_7`,
        title: `MySQL database instance administrative privileges`,
        description: `This recommendation is applicable only for MySQL Instances. PostgreSQL does not offer any setting for No Password from the cloud console.

At the time of MySQL Instance creation, not providing an administrative password allows anyone to connect to the SQL database instance with administrative privileges. 

The root password should be set to ensure only authorized users have these privileges.`,
        impact: `Without specifying a password for the administrative user or root by default, you cannot prevent unwanted access to SQL database instances.`,
        howToFix: `It is recommended to set a password for the administrative user (root by default) to prevent unauthorized access to the SQL database instances.`,
        references: `https://dev.mysql.com/doc/workbench/en/wb-mysql-connections-navigator-management-users-and-privileges.html`,
        group: ``,
    },
    {
        id: `CKV_GIT_1`,
        title: `Repository access`,
        description: `Private repositories are intriguing because they offer security protections that public repositories don't, such as ensuring that sensitive data like passwords, SSH keys, API keys, and other information isn't accidentally exposed. 

This sensitive information is best stored in a private repository with a publishing process in place to make the appropriate data public as needed.`,
        impact: `If your repository is open to the public, anybody may view it and fork it.`,
        howToFix: `We recommend you keep your repository private if you're having sensitive information`,
        references: `https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository`,
        group: ``,
    },
    {
        id: `CKV_K8S_1`,
        title: `Admit containers to share host process ID namespace`,
        description: `When process namespace sharing is enabled, processes in a container are visible to all other containers in that pod. 

This feature can enable configuring cooperating containers that do not include debugging tools, such as a logger sidecar container or troubleshooting container images.

Sharing the host process ID namespace breaks the isolation between container images and can make processes visible to other containers in the pod. 

This includes all information in the /proc directory, which can sometimes include passwords or keys, passed as environment variables.`,
        impact: `When process namespace sharing is enabled, all containers in a pod may see the processes in that container.`,
        howToFix: `We recommend you do not admit containers wishing to share the host process ID namespace.`,
        references: `https://docs.chkk.dev/docs/chkk-k8s-61`,
        group: ``,
    },
    {
        id: `CKV_K8S_2`,
        title: `Admit privileged containers`,
        description: `Privileged containers are containers that have all of the root capabilities of a host machine, allowing access to resources that are not accessible in ordinary containers.

Running a container with a privileged flag allows users to have critical access to the host’s resources. If a privileged container is compromised, it does not necessarily entail remote code execution, but it implies that an attacker will be able to run full host root with all of the available capabilities, including CAP_SYS_ADMIN.

Common uses of privileged containers include: running a Docker daemon inside a Docker container, running a container with direct hardware access, and automating CI/CD tasks in the open-source automation server Jenkins.`,
        impact: `Privileged containers have all of the root capabilities of the host computer, giving access to resources that conventional containers do not have.`,
        howToFix: `We recommend you not to admit privileged containers`,
        references: `https://kubernetes.io/docs/concepts/policy/pod-security-policy/`,
        group: ``,
    },
    {
        id: `CKV_K8S_3`,
        title: `Admit containers wishing to share host IPC namespace`,
        description: `The host IPC namespace controls whether a pod's containers can be shared. You can administer cluster-level restrictions to ensure that containers remain isolated using PodSecurityPolicy and ensuring host PC is set to False.

Preventing sharing of host PID/IPC namespace, networking, and ports ensures proper isolation between Docker containers and the underlying host.`,
        impact: `Containers desiring to share the host IPC namespace are permitted, however this may result in a data security breach in the cloud.`,
        howToFix: `We recommend you ensure do not admit privileged containers wishing to share the host IPC namespace`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-5.2.3/`,
        group: ``,
    },
    {
        id: `CKV_K8S_4`,
        title: `Admit containers wishing to share a host network namespace`,
        description: `In a Kubernetes cluster, every pod gets its IP address. Pods can be treated much like VMs or physical hosts from the perspectives of port allocation, naming, service discovery, load balancing, application configuration, and migration.

Sharing the host network namespace breaks the isolation between container images and can make the host visible to other containers in the pod. 

In some cases, pods in the host network of a node can communicate with all pods on all nodes without using network address translation (NAT).`,
        impact: `Sharing the host network namespace weakens the isolation between container images and exposes the host to other containers in the pod.`,
        howToFix: `We recommend you ensure do not admit privileged containers wishing to share a host network namespace`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-5.2.4/`,
        group: ``,
    },
    {
        id: `CKV_K8S_5`,
        title: `Containers run with AllowPrivilegeEscalation`,
        description: `The AllowPrivilegeEscalation Pod Security Policy controls whether or not a user is allowed to set the security context of a container to True. Setting it to False ensures that no child process of a container can gain more privileges than its parent.`,
        impact: `Setting AllowPrivilegeEscalation to True does not ensure that RunAsUser commands cannot circumvent their current sets of permissions.`,
        howToFix: `We recommend you to set AllowPrivilegeEscalation to False, to ensure RunAsUser commands cannot bypass their existing sets of permissions.`,
        references: `https://kubernetes.io/docs/concepts/policy/pod-security-policy/#:~:text=AllowPrivilegeEscalation%20%2D%20Gates%20whether%20or%20not,more%20privileges%20than%20its%20parent.`,
        group: ``,
    },
    {
        id: `CKV_K8S_6`,
        title: `Root containers admitted`,
        description: `In Kubernetes, a container's user ID table maps to the host's user table. Running a process as the root user inside a container runs it as root on the host. Many container images use the root user to run PID 1. 

If PID 1 is compromised, an attacker has root permissions in the container, and any misconfigurations can be exploited.

Containers that run as root frequently have more permissions than their workload requires which, in case of compromise, could help an attacker further their exploits.`,
        impact: `Containers that operate as root usually have more permissions than their workload demands, which might aid an attacker in furthering their exploits if compromised.`,
        howToFix: `We recommend you ensure not to admit root customers`,
        references: `https://kubernetes.io/blog/2021/11/09/non-root-containers-and-devices/`,
        group: ``,
    },
    {
        id: `CKV_K8S_7`,
        title: `Containers with NET_RAW capability admitted`,
        description: `NET_RAW is a default permissive setting in Kubernetes allowing ICMP traffic between containers and granting an application the ability to craft raw packets.

In the hands of an attacker, NET_RAW can enable a wide variety of networking exploits from within the cluster.`,
        impact: `In the hands of a malicious user, NET RAW may be used to launch a number of networking attacks from within the cluster.`,
        howToFix: `We recommend you ensure do not admit containers with NET_RAW capability`,
        references: `https://gsl.dome9.com/D9.K8S.IAM.30.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_8`,
        title: `Unconfigured liveness probe`,
        description: `The kubelet uses liveness probes to know when to schedule restarts for containers. Restarting a container in a deadlock state can help to make the application more available, despite bugs.

If a container is unresponsive, either to a deadlocked application or a multi-threading defect, restarting the container can make the application more available, despite the defect.`,
        impact: `If the liveness probe isn't set up, it won't know when to schedule container restarts.`,
        howToFix: `We recommend you ensure the liveness probe is configured`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/`,
        group: ``,
    },
    {
        id: `CKV_K8S_9`,
        title: `Unconfigured Readiness probe`,
        description: `Readiness Probe is a Kubernetes capability that enables teams to make their applications more reliable and robust. 

This probe regulates under what circumstances the pod should be taken out of the list of service endpoints so that it no longer responds to requests. In defined circumstances, the probe can remove the pod from the list of available service endpoints.

Using the Readiness Probe ensures teams define what actions need to be taken to prevent failure and ensure recovery in case of unexpected errors.`,
        impact: `Without utilizing the Readiness Probe, teams outline what steps must be performed to prevent failure and assure recovery in the event of unexpected mistakes.`,
        howToFix: `We recommend you ensure the Readiness probe is configured`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/`,
        group: ``,
    },
    {
        id: `CKV_K8S_10`,
        title: `Unset CPU request`,
        description: `When specifying the resource request for containers in a pod, the scheduler uses this information to decide which node to place the pod on. 

When setting a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set.

If a container is created in a namespace that has a default CPU limit, and the container does not specify its CPU limit, then the container is assigned the default CPU limit. Kubernetes assigns a default CPU request under certain conditions.`,
        impact: `If a container is formed in a namespace with a default CPU limit and the container does not provide its own, the default CPU limit is applied to the container.`,
        howToFix: `We recommend you to ensure CPU request is set`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/`,
        group: ``,
    },
    {
        id: `CKV_K8S_11`,
        title: `Unset CPU Limit`,
        description: `Kubernetes allows administrators to set CPU quotas in namespaces, as hard limits for resource usage. Containers cannot use more CPU than the configured limit. 

Provided the system has CPU time-free, a container is guaranteed to be allocated as much CPU as it requests.

CPU quotas are used to ensure adequate utilization of shared resources. A system without managed quotas could eventually collapse due to inadequate resources for the tasks it bears.`,
        impact: `Due to insufficient resources for the responsibilities it bears, a system without regulated quotas may eventually fail.`,
        howToFix: `We recommend you ensure CPU limits are set`,
        references: `https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/cpu-default-namespace/`,
        group: ``,
    },
    {
        id: `CKV_K8S_12`,
        title: `Unset memory requests`,
        description: `Memory resources can be defined using values from bytes to petabytes, it is common to use mebibytes. If you configure a memory request that is larger than the amount of memory on your nodes, the pod will never be scheduled. 

When specifying a memory request for a Container, include the resources:requests field in the container’s resource manifest. To specify a memory limit, include resources:limits.

Setting memory requests enforces a memory limit for a container. A container is guaranteed to have as much memory as it requests but is not allowed to use more memory than the limit set. 

This configuration may save resources and prevent an attack on an exploited container.`,
        impact: `It does not impose a memory limit for a container without memory requests.`,
        howToFix: `We recommend you ensure memory requests are set`,
        references: `https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/memory-default-namespace/`,
        group: ``,
    },
    {
        id: `CKV_K8S_13`,
        title: `Unset memory limit`,
        description: `The scheduler uses resource request information for containers in a pod to decide which node to place the pod on. 

The kubelet enforces the resource limits set so that the running container is not allowed to use more resources than the limit set.

If a process in the container tries to consume more than the allowed amount of memory, the system kernel terminates the process that attempted the allocation, with an out-of-memory (OOM) error. 

With no limit set, kubectl allocates more and more memory to the container until it runs out.`,
        impact: `kubectl allocates more and more RAM to the container until it runs out if no limit is defined.`,
        howToFix: `We recommend you ensure memory limit is set`,
        references: `https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/memory-constraint-namespace/`,
        group: ``,
    },
    {
        id: `CKV_K8S_14`,
        title: `Image tag is not set to Fixed`,
        description: `You can add a: fixed tag to a container image, making it easier to determine what it contains, for example, to specify the version. Container image tags and digests are used to refer to a specific version or instance of a container image.`,
        impact: `Without specifying the image tag, you can't indicate a container's version or know what it contains.`,
        howToFix: `We recommend you avoid using the: latest and: blank tags when deploying containers in production as it is harder to track which version of the image is running, and more difficult to roll back properly.`,
        references: `https://vsupalov.com/docker-latest-tag/`,
        group: ``,
    },
    {
        id: `CKV_K8S_15`,
        title: `Image pull policy is not set to Always`,
        description: `The Image Pull Policy of a container is set using the imagePullPolicy. The imagePullPolicy and the tag of the image are triggered when the kubelet attempts to pull the specified image. 

When the imagePullPolicy is set to Always, you ensure the latest version of the image is deployed every time the pod is started. Avoid using the latest tag when deploying containers in production, it is harder to track which version of the image is running and more difficult to roll back correctly.`,
        impact: `You cannot assure that the latest version of the image is deployed every time the pod is launched unless imagePullPolicy is set to Always.`,
        howToFix: `We recommend you ensure the image pull policy is set to Always`,
        references: `https://kubernetes.io/docs/concepts/containers/images/`,
        group: ``,
    },
    {
        id: `CKV_K8S_16`,
        title: `Unprivileged container`,
        description: `Privileged containers are containers that have all of the root capabilities of a host machine, allowing access to resources that are not accessible in ordinary containers. Common uses of privileged containers include: 

running a Docker daemon inside a Docker container, running a container with direct hardware access, and automating CI/CD tasks in the open-source automation server Jenkins.

Running a container with a privileged flag allows users to have critical access to the host’s resources. 

If a privileged container is compromised, it does not necessarily entail remote code execution, but it implies that an attacker will be able to run full host root with all of the available capabilities, including CAP_SYS_ADMIN.`,
        impact: `If a privileged container is hacked, an attacker will have complete host root access to all accessible capabilities, including CAP SYS ADMIN.`,
        howToFix: `We recommend you ensure the container is not privileged`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/security-context/`,
        group: ``,
    },
    {
        id: `CKV_K8S_17`,
        title: `Containers share host process ID namespace`,
        description: `Namespaces provide isolation for running processes and limit access to system resources, without the running process agnostic to its limitations.`,
        impact: `You can't block an attacker's possibilities to escalate privileges from within a container if containers share host process ID namespace.`,
        howToFix: `To limit an attacker's options to escalate privileges from within a container, we recommend you configure containers to refrain from sharing the host process ID namespace.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-docker-1.2.0-5.15/`,
        group: ``,
    },
    {
        id: `CKV_K8S_18`,
        title: `Containers share host IPC namespace`,
        description: `Pods share many resources, so it could make sense to share a process namespace. 

Some container images may expect to be isolated from other containers. Not sharing IPC namespaces helps ensure isolation. 

Containers in different pods have distinct IP addresses and will need special configuration to communicate by IPC.`,
        impact: `Containers share a same host. IPC namespace is ineffective in ensuring isolation.`,
        howToFix: `We recommend you ensure containers do not share host IPC namespace`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/`,
        group: ``,
    },
    {
        id: `CKV_K8S_19`,
        title: `Containers share the host network namespace`,
        description: `When using the host network mode for a container, that container’s network stack is not isolated from the Docker host, so the container shares the host’s networking namespace and does not get its IP-address allocation.`,
        impact: `You can't block an attacker's ability to escalate privileges from within a container if they share the host network namespace.`,
        howToFix: `To limit an attacker's options to escalate privileges from within a container, we recommend you configure containers to not share the host network namespace.`,
        references: `https://kubernetes.io/docs/concepts/cluster-administration/networking/`,
        group: ``,
    },
    {
        id: `CKV_K8S_20`,
        title: `Privilege Escalation Allowed in Kubernetes Pod Security Policy`,
        description: `The AllowPrivilegeEscalation Pod Security Policy controls whether or not a user is allowed to set the security context of a container to True. 

Setting it to False ensures that no child process of a container can gain more privileges than its parent.`,
        impact: `With AllowPrivilegeEscalation set to True, RunAsUser commands can circumvent their current permissions.`,
        howToFix: `We recommend you to set AllowPrivilegeEscalation to False, to ensure RunAsUser commands cannot bypass their existing sets of permissions.`,
        references: `https://kubernetes.io/docs/concepts/policy/pod-security-policy/#:~:text=AllowPrivilegeEscalation%20%2D%20Gates%20whether%20or%20not,more%20privileges%20than%20its%20parent.`,
        group: ``,
    },
    {
        id: `CKV_K8S_21`,
        title: `Default namespace`,
        description: `In Kubernetes, the cluster comes out of the box with a namespace called “default.” 

Other namespaces Kubernetes includes are: default, kube-system and kube-public. Some Kubernetes tooling is set up out of the box to use this namespace and you can’t delete it.`,
        impact: `When you use the default namespace, you risk interfering with other services.`,
        howToFix: `We recommend that you do not use the default namespace in large production systems. 

Using this space can result in accidental disruption with other services. Instead, we recommend you create alternate namespaces and use them to run additional required services.`,
        references: `https://www.vmware.com/topics/glossary/content/kubernetes-namespace`,
        group: ``,
    },
    {
        id: `CKV_K8S_22`,
        title: `Read-Only filesystem for containers where possible`,
        description: `A read-only root filesystem helps to enforce an immutable infrastructure strategy. The container should only write on mounted volumes that can persist, even if the container exits.

Using an immutable root filesystem and a verified boot mechanism prevents attackers from "owning" the machine through permanent local changes. An immutable root filesystem can also prevent malicious binaries from writing to the host system.`,
        impact: `If you don't employ a Read-Only filesystem for containers, you won't be able to enforce an immutable infrastructure plan.`,
        howToFix: `We recommend you Use Read-Only filesystem for containers where possible`,
        references: `https://www.thorsten-hans.com/read-only-filesystems-in-docker-and-kubernetes/`,
        group: ``,
    },
    {
        id: `CKV_K8S_23`,
        title: `Admission of root containers`,
        description: `Containers rely on the traditional Unix security model granting explicit and implicit permissions to resources, through permissions granted to users and groups. 

User namespaces are not enabled in Kubernetes. The container's user ID table maps to the host's user table, and running a process as the root user inside a container runs it as root on the host. Although possible, we do not recommend running as root inside the container.

Containers that run as root usually have far more permissions than their workload requires. In case of compromise, an attacker can use these permissions to further an attack on the network. Several container images use the root user to run PID 1. An attacker will have root permissions in the container and be able to exploit misconfigurations.`,
        impact: `Containers that are operated as root typically have significantly more permissions than their workload necessitates. In the event of a compromise, an attacker can utilize these rights to carry out a network assault.`,
        howToFix: `We recommend you minimize admission of root controllers`,
        references: `https://gsl.dome9.com/D9.K8S.IAM.27.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_24`,
        title: `Containers with added capability`,
        description: `Using the Linux capabilities feature you can grant certain privileges to a process without granting all the privileges of the root user. Added capabilities entitle containers in a pod with additional privileges that can be used to change core processes and networking settings of a cluster. To add or remove Linux capabilities for a container, you can include the capabilities field in the security context section of the container manifest.`,
        impact: `Containers in a pod with added capabilities have additional rights that may be utilized to affect the cluster's core processes and networking settings.`,
        howToFix: `We recommend you only use privileges that are required for the proper function of the cluster.`,
        references: `https://unofficial-kubernetes.readthedocs.io/en/latest/concepts/policy/container-capabilities/`,
        group: ``,
    },
    {
        id: `CKV_K8S_26`,
        title: `HostPort specification`,
        description: `The hostPort setting applies to the Kubernetes containers. The container port will be exposed to the external network where the hostIP is the IP address of the Kubernetes node where the container is running, and the hostPort is the port requested by the user.`,
        impact: `Where hostIP is the IP address of the Kubernetes node where the container is executing, and hostPort is the port requested by the user, the container port will be exposed to the external network.`,
        howToFix: `We recommend that you do not specify a hostPort for a pod unless it is necessary. When you bind a pod to a hostPort, it limits the number of places the pod can be scheduled, because each <hostIP, hostPort, protocol> combination must be unique.`,
        references: `https://kubernetes.io/docs/concepts/configuration/overview/#:~:text=Don't%20specify%20a%20hostPort,explicitly%2C%20Kubernetes%20will%20use%200.0.`,
        group: ``,
    },
    {
        id: `CKV_K8S_27`,
        title: `Limit mounting Docker socket daemon`,
        description: `Docker runs through a non-networked UNIX socket. In daemon mode, it only allows connections from clients authenticated by a certificate signed by that CA. 

This socket can be mounted by other containers unless correct permissions are in place. Once mounted, the socket can be used to spin up any container, create new images, or shut down existing containers.

To protect the docker socket daemon running in a container, set appropriate SELinux/AppArmor profiles to limit containers mounting this socket.`,
        impact: `Unless the necessary permissions are in place, this socket can be mounted by other containers. The socket may be used to spin up any container, produce new images, or shut down existing containers after it has been installed.`,
        howToFix: `We recommend you ensure Limit mounting Docker socket daemon in a container`,
        references: `https://docs.docker.com/engine/security/protect-access/

https://docs.docker.com/engine/reference/commandline/dockerd/`,
        group: ``,
    },
    {
        id: `CKV_K8S_28`,
        title: `Admission of containers with NET_RAW capability`,
        description: `NET_RAW capability allows the binary to use RAW and PACKET sockets as well as binding to any address for transparent proxying. The ep stands for “effective” (active) and “permitted” (allowed to be used).

With Docker as the container runtime, NET_RAW capability is enabled by default and may be misused by malicious containers.`,
        impact: `The NET RAW capability is enabled by default with Docker as the container runtime, and it might be exploited by malicious containers.`,
        howToFix: `We recommend you define at least one PodSecurityPolicy (PSP) to prevent containers with NET_RAW capability from launching.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-docker-1.2.0-5.3/`,
        group: ``,
    },
    {
        id: `CKV_K8S_29`,
        title: `Security context to your pods and containers`,
        description: `A security context defines privilege and access control settings for a Pod or Container. Security context settings include,`,
        impact: `If securityContext isn't applied to pods and containers, it won't be able to establish privileges and access controls for your pod or container, and it won't be able to hold security configurations for a container.`,
        howToFix: `We recommend you apply Security context to your pods and containers`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/security-context/`,
        group: ``,
    },
    {
        id: `CKV_K8S_30`,
        title: `Security context is not applied to pods and containers`,
        description: `Security context defines privilege and access control settings for your pod or container and holds security configurations that will be applied to a container. 

Some fields are present in both security context and PodSecurityContext, when both are set, security context takes precedence.

Well-defined privilege and access control settings will enhance assurance that your pod is running with the properties it requires to function.`,
        impact: `If securityContext isn't applied to pods and containers, the privilege and access control settings won't ensure that your pod is operating with the attributes it needs to work.`,
        howToFix: `We recommend you ensure security context is applied to pods and containers`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/security-context/`,
        group: ``,
    },
    {
        id: `CKV_K8S_31`,
        title: `Seccomp profile is not to Docker/Default or Runtime/Default`,
        description: `Secure computing mode (seccomp) is a Linux kernel feature used to restrict actions available within the container. The seccomp() system call operates on the seccomp state of the calling process. 

The default seccomp profile provides a reliable setting for running containers with seccomp and disables non-essential system calls.`,
        impact: `Without seccomp profile, operating containers with seccomp is unreliable, and non-essential system calls are disabled.`,
        howToFix: `We recommend you ensure seccomp profile is set to Docker/Default or Runtime/Default`,
        references: `https://docs.docker.com/engine/security/seccomp/`,
        group: ``,
    },
    {
        id: `CKV_K8S_32`,
        title: `Unconfigured Seccomp Profile in Kubernetes Containers`,
        description: `Secure computing mode (seccomp) is a Linux kernel feature used to restrict actions available within the container. The seccomp() system call operates on the seccomp state of the calling process. 

The default seccomp profile provides a reliable setting for running containers with seccomp and disables non-essential system calls.`,
        impact: `Without seccomp profile, operating containers with seccomp is unreliable, and non-essential system calls are disabled.`,
        howToFix: `We recommend you ensure seccomp profile is set to Docker/Default or Runtime/Default`,
        references: `https://docs.docker.com/engine/security/seccomp/`,
        group: ``,
    },
    {
        id: `CKV_K8S_33`,
        title: `Deployed Kubernetes dashboard`,
        description: `The Terraform provider for Azure enables the capability to disable the Kubernetes dashboard on an AKS cluster. 

This is achieved by providing the Kubernetes dashboard as an AKS add-on, similar to the Azure Monitor, for containers integration, AKS virtual nodes, and the HTTP application routing.

In mid-2019 Tesla was hacked where their kube-dashboard was exposed to the internet. Hackers browsed around, found credentials, and deployed pods running bitcoin mining software.`,
        impact: `Hackers rummaged through the system, discovered passwords, and installed bitcoin mining software on pods.`,
        howToFix: `We recommend you disable the kube-dashboard if it's not needed, to prevent the need to manage its access interface and limit it as an attack vector.`,
        references: `https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/`,
        group: ``,
    },
    {
        id: `CKV_K8S_34`,
        title: `Tiller (Helm V2) deployed`,
        description: `Tiller (Helm v2) is the in-cluster component of Helm. It interacts directly with the Kubernetes API server to install, upgrade, query, and remove Kubernetes resources. It also stores the objects that represent releases. Its permissive configuration could grant the users a broad range of permissions.

New versions of Kubernetes and Helm v3 have made Tiller obsolete, with its over permissive function in existing workloads remaining a security liability.

Consider upgrading to use Helm v3, which only runs on client machines. Not all charts may support Helm 3, but the number that does is growing rapidly.`,
        impact: `Tiller will not become outdated without Helm v3, and its too permissive role in existing workloads will remain a security risk.`,
        howToFix: `We recommend you ensure Tiller (Helm V2) is not deployed`,
        references: `https://github.com/helm/helm/issues/4685`,
        group: ``,
    },
    {
        id: `CKV_K8S_35`,
        title: `Secrets used as environment variables`,
        description: `Secrets can be mounted as data volumes or exposed as environment variables and used by a container in a pod to interact with external systems on your behalf. 

Secrets can also be used by other parts of the system, without being directly exposed to the pod.

Benefits for storing secrets as files include: setting file permissions, projects of secret keys to specific paths, and consuming secret values from volumes.`,
        impact: `Secrets can be mounted as data volumes or exposed as environment variables, and a container in a pod can utilize them to connect with external systems on your behalf.`,
        howToFix: `We recommend you Use secrets as files instead of environment variables`,
        references: `https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables`,
        group: ``,
    },
    {
        id: `CKV_K8S_36`,
        title: `Admission of containers with capabilities assigned`,
        description: `Docker has a default list of capabilities that are allowed for each container of a pod. 

The containers use the capabilities from this default list, but pod manifest authors can alter it by requesting additional capabilities or dropping some of the default capabilities.

Limiting the admission of containers with capabilities ensures that only a small number of containers have extended capabilities outside the default range. 

This helps ensure that if a container becomes compromised it is unable to provide a productive path for an attacker to move laterally to other containers in the pod.`,
        impact: `Allowing all containers with capabilities to be admitted does not guarantee that only a small percentage of containers have capabilities beyond the default range.`,
        howToFix: `We recommend you Minimize the admission of containers with capabilities assigned`,
        references: `https://www.accurics.com/blog/terrascan-blog/kubernetes-security-in-2021-policy-update-1/`,
        group: ``,
    },
    {
        id: `CKV_K8S_37`,
        title: `Admission of containers with capabilities assigned is not limited`,
        description: `Docker has a default list of capabilities that are allowed for each container of a pod. The containers use the capabilities from this default list, but pod manifest authors can alter it by requesting additional capabilities or dropping some of the default capabilities.

Limiting the admission of containers with capabilities ensures that only a small number of containers have extended capabilities outside the default range. 

This helps ensure that if a container becomes compromised it is unable to provide a productive path for an attacker to move laterally to other containers in the pod.`,
        impact: `Although not restricting the admission of containers with capabilities ensures that only a small number of containers have capabilities beyond the default range, it does not ensure that only a small number of containers have capabilities beyond the default range.`,
        howToFix: `We recommend you ensure admission of containers with capabilities assigned is limited`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/security-context/`,
        group: ``,
    },
    {
        id: `CKV_K8S_38`,
        title: `Mount service account tokens where is necessary`,
        description: `One way to authenticate the API is by using the Service Account token. ServiceAccount is an object managed by Kubernetes and used to provide an identity for processes that run in a pod. 

Every service account has a secret related to it, this secret contains a bearer token. This is a JSON Web Token (JWT), a method for representing claims securely between two parties.

This Service Account token is being used during the authentication stage and can become useful for attackers if the service account is privileged and they have access to such a token. With this token, an attacker can easily impersonate the service account and use REST APIs.`,
        impact: `An attacker can simply mimic the service account and utilize REST APIs with this token.`,
        howToFix: `We recommend you ensure service account tokens are mounted where necessary`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/`,
        group: ``,
    },
    {
        id: `CKV_K8S_39`,
        title: `CAP_SYS_ADMIN Linux capability used`,
        description: `Capabilities permit certain named root actions without giving full root access and are considered a fine-grained permissions model.`,
        impact: `CAP SYS ADMIN is a highly privileged access level that is comparable to root access, and an attacker may easily impersonate the account with this access.`,
        howToFix: `We recommend all capabilities should be dropped from a pod, with only those required added back. 

There are a large number of capabilities, with CAP_SYS_ADMIN bounding most. CAP_SYS_ADMIN is a highly privileged access level equivalent to root access and should generally be avoided.`,
        references: `https://kubesec.io/basics/containers-securitycontext-capabilities-drop-index-all/`,
        group: ``,
    },
    {
        id: `CKV_K8S_40`,
        title: `Containers run with a high UID to avoid host conflict`,
        description: `Linux namespaces provide isolation for running processes and limits access to system resources. 

To prevent privilege-escalation attacks from within a container, we recommend that you configure your container’s applications to run as unprivileged users. The mapped user is assigned a range of UIDs that function within the namespace as normal UIDs from 0 to 65536 but have no privileges on the host machine itself.

If a process attempts to escalate privilege outside of the namespace, the process is running as an unprivileged high-number UID on the host, not mapped to a real user. This means the process has no privileges on the host system and cannot be attacked by this method.

This check will trigger below UID 10,000 as common Linux distributions will assign UID 1000 to the first non-root, nonsystem user and 1000 users should provide a reasonable buffer.`,
        impact: `If a process tries to escalate privilege outside of the namespace, it is executing on the host as an unprivileged high-number UID that is not linked to a real user. This signifies that the process has no privileges on the host system and cannot be exploited using this manner.`,
        howToFix: `We recommend you ensure containers run with a high UID to avoid host conflict`,
        references: `https://kubesec.io/basics/containers-securitycontext-runasuser/`,
        group: ``,
    },
    {
        id: `CKV_K8S_41`,
        title: `Default service accounts actively used`,
        description: `Every Kubernetes installation has a service account called default that is associated with every running pod. 

Similarly, to enable pods to make calls to the internal API Server endpoint, there is a ClusterIP service called Kubernetes. This combination makes it possible for internal processes to call the API endpoint.`,
        impact: `Internal processes can use active default service accounts to access the API endpoint.`,
        howToFix: `We recommend that users create their user-managed service accounts and grant the appropriate roles to each service account.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-5.1.5/`,
        group: ``,
    },
    {
        id: `CKV_K8S_42`,
        title: `Use of Default Service Accounts in Kubernetes Pods`,
        description: `Every Kubernetes installation has a service account called default that is associated with every running pod. 

Similarly, to enable pods to make calls to the internal API Server endpoint, there is a ClusterIP service called Kubernetes. This combination makes it possible for internal processes to call the API endpoint.`,
        impact: `Internal processes can use active default service accounts to contact the API endpoint.`,
        howToFix: `We recommend that users create their own user-managed service accounts and grant the appropriate roles to each service account.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-5.1.5/`,
        group: ``,
    },
    {
        id: `CKV_K8S_43`,
        title: `Images are selected using a digest`,
        description: `In some cases, you may prefer to use a fixed version of an image, rather than update to newer versions. Docker enables you to pull an image by its digest, specifying exactly which version of an image to pull.

Pulling using a digest allows you to “pin” an image to that version, and guarantee that the image you’re using is always the same. Digests also prevent race-conditions
 
if a new image is pushed while adeploymenty is in progress, different nodes may be pulling the images at different times, so some nodes have the new image, and some have the old one. Services automatically resolve tags to digests, so you don't need to manually specify a digest.`,
        impact: `Race-conditions cannot be avoided without the use of digests in pictures.`,
        howToFix: `We recommend you ensure images are selected using a digest`,
        references: `https://www.ibm.com/docs/en/filenet-p8-platform/5.5.x?topic=deployment-choosing-image-tags-digests`,
        group: ``,
    },
    {
        id: `CKV_K8S_44`,
        title: `Tiller (Helm v2) service deleted`,
        description: `Tiller (Helm v2) is the in-cluster component of Helm. It interacts directly with the Kubernetes API server to install, upgrade, query, and remove Kubernetes resources. It also stores the objects that represent releases. Its permissive configuration could grant the users a broad range of permissions.

Helm v3 removes Tiller, and it is recommended that you upgrade: see Ensure Tiller (Helm V2) Is Not Deployed. However, this is not always feasible.

Restricting access to Tiller from within the cluster limits the abilities of a compromised pod or anonymous user in the cluster.

After restricting connectivity to the Tiller deployment, the Tiller service can be deleted.`,
        impact: `If the Tiller (Helm v2) service is not terminated, it is not possible to block access to Tiller from within the cluster, which restricts the ability of a hacked pod or anonymous user within the cluster.`,
        howToFix: `We recommend you ensure Tiller (Helm v2) service is deleted`,
        references: `https://github.com/helm/helm/issues/4825`,
        group: ``,
    },
    {
        id: `CKV_K8S_45`,
        title: `Tiller (Helm V2) deployment accessible from within the cluster`,
        description: `Tiller (Helm v2) is the in-cluster component of Helm. It interacts directly with the Kubernetes API server to install, upgrade, query, and remove Kubernetes resources. It also stores the objects that represent releases. Its permissive configuration could grant the users a broad range of permissions.

Helm v3 removes Tiller, and it is recommended that you upgrade: see Ensure Tiller (Helm V2) Is Not Deployed. However, this is not always feasible.

Restricting access to Tiller from within the cluster limits the abilities of a compromised pod or anonymous user in the cluster.`,
        impact: `If the Tiller (Helm V2) deployment is available from within the cluster, access to Tiller from within the cluster restricts the capabilities of a hacked pod or anonymous user in the cluster.`,
        howToFix: `We recommend you ensure Tiller (Helm V2) deployment is not accessible from within the cluster`,
        references: `https://github.com/helm/helm/issues/4685`,
        group: ``,
    },
    {
        id: `CKV_K8S_49`,
        title: `Wildcard use in Roles and ClusterRoles`,
        description: `Kubernetes Roles and ClusterRoles provide access to resources based on sets of objects and actions that can be taken on those objects. 

It is possible to set either of these to be the wildcard ' * ' which matches all items. 

Use of wildcards is not optimal from a security perspective as it may allow for inadvertent access to be granted when new resources are added to the Kubernetes API either as CRDs or in later versions of the product. 

The principle of least privilege recommends that users are provided only the access required for their role and nothing more. The use of wildcard rights grants is likely to provide excessive rights to the Kubernetes API.`,
        impact: `The use of wildcards is not recommended from a security standpoint since it may enable for unintended access to be allowed when additional resources are introduced to the Kubernetes API as CRDs or in subsequent versions of the product.`,
        howToFix: `We recommend you minimize wildcard to use in Roles and ClusterRoles`,
        references: `https://cloudsecops.com/restrict-wildcards/`,
        group: ``,
    },
    {
        id: `CKV_K8S_68`,
        title: `The anonymous-auth argument is set to false`,
        description: `Disable anonymous requests to the API server. When enabled, requests that are not rejected by other configured authentication methods are treated as anonymous requests. These requests are then served by the API server. You should rely on authentication to authorize access and disallow anonymous requests.

If you are using RBAC authorization, it is generally considered reasonable to allow anonymous access to the API Server for health checks and discovery purposes, and hence this recommendation is not scored. However, you should consider whether anonymous discovery is an acceptable risk for your purposes.`,
        impact: `Requests that are not refused by other defined authentication methods are handled as anonymous when the —anonymous-auth parameter is not set to False.`,
        howToFix: `We recommend you ensure the --anonymous-auth argument is set to False`,
        references: `https://rancher.com/docs/rancher/v2.5/en/security/rancher-2.5/1.6-benchmark-2.5/`,
        group: ``,
    },
    {
        id: `CKV_K8S_69`,
        title: `The Basic-auth-file argument is not set`,
        description: `Do not use basic authentication. Basic authentication uses plaintext credentials for authentication. Currently, the basic 

authentication credentials last indefinitely, and the password cannot be changed without restarting the API server.

Basic authentication is currently supported for convenience. Hence, basic authentication should not be used.`,
        impact: `Plaintext credentials are used for authentication in basic authentication. The basic authentication credentials are now forever valid, and the password cannot be changed without restarting the API service.`,
        howToFix: `We recommend you ensure the --basic-auth-file argument is not Set`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/authentication/`,
        group: ``,
    },
    {
        id: `CKV_K8S_70`,
        title: `The token-auth-file argument is not Set`,
        description: `Do not use token-based authentication. The token-based authentication utilizes static tokens to authenticate requests to the API server. The tokens are stored in clear text in a file on the API server, and cannot be revoked or rotated without restarting the API server. Hence, do not use static token-based authentication.`,
        impact: `The tokens are kept in clear text in a file on the apiserver and cannot be revoked or rotated without restarting the apiserver.`,
        howToFix: `We recommend you ensure the token-auth-file argument is not Set`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/authentication/`,
        group: ``,
    },
    {
        id: `CKV_K8S_71`,
        title: `Kubelet-https argument is set to True`,
        description: `Use HTTPS for kubelet connections. Connections from API server to kubelets could potentially carry sensitive data such as secrets and keys. It is thus important to use in-transit encryption for any communication between the API server and kubelets.`,
        impact: `Connections from the apiserver to the kubelets may convey sensitive data like as secrets and keys.`,
        howToFix: `We recommend you ensure the --kubelet-https argument is set to True`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-authentication-authorization/`,
        group: ``,
    },
    {
        id: `CKV_K8S_72`,
        title: `Kubelet-client-certificate and --kubelet-client-key arguments are set appropriately`,
        description: `Enable certificate-based kubelet authentication. The API server, by default, does not authenticate itself to the kubelet's HTTPS endpoints. 

The requests from the apiserver are treated anonymously. 

You should set up certificate-based kubelet authentication to ensure that the API server authenticates itself to kubelets when submitting requests.`,
        impact: `By default, the apiserver does not authenticate itself to the kubelet's HTTPS endpoints. The apiserver's queries are handled anonymously.`,
        howToFix: `We recommend you ensure the --kubelet-client-certificate and --kubelet-client-key arguments are set appropriately`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.5/`,
        group: ``,
    },
    {
        id: `CKV_K8S_73`,
        title: `The kubelet-certificate-authority argument is set appropriately`,
        description: `Verify kubelet's certificate before establishing a connection. The connections from the API server to the kubelet are used for fetching logs for pods, attaching (through kubectl) to running pods, and using the kubelet’s port-forwarding functionality. 

These connections terminate at the kubelet’s HTTPS endpoint. By default, the API server does not verify the kubelet’s serving certificate, which makes the connection subject to man-in-the-middle attacks, and unsafe to run over untrusted and/or public networks.`,
        impact: `The apiserver does not validate the kubelet's serving certificate by default, making the connection vulnerable to man-in-the-middle attacks and dangerous to run over untrusted and/or public networks.`,
        howToFix: `We recommend you ensure the --kubelet-certificate-authority argument is set appropriately.
Verify kubelet’s certificate before establishing a connection.`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.6/`,
        group: ``,
    },
    {
        id: `CKV_K8S_74`,
        title: `The authorization-mode argument is not set to always allow`,
        description: `Do not always authorize all requests. The API Server can be configured to allow all requests. This mode should not be used on any production cluster.`,
        impact: `When the —authorization-mode parameter in production clsuter is set to AlwaysAllow, the data is put at risk.`,
        howToFix: `We recommend you ensure the --authorization-mode argument is not set to always allow`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.7/`,
        group: ``,
    },
    {
        id: `CKV_K8S_75`,
        title: `The authorization-mode argument includes node`,
        description: `Restrict kubelet nodes to reading only objects associated with them. 

The Node authorization mode only allows kubelets to read Secret, ConfigMap, PersistentVolume, and PersistentVolumeClaim objects associated with their nodes.`,
        impact: `If the —authorization-mode parameter does not contain node, the data will be at risk.`,
        howToFix: `We recommend you ensure the --authorization-mode argument includes node`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/node/`,
        group: ``,
    },
    {
        id: `CKV_K8S_77`,
        title: `The authorization-mode argument includes RBAC`,
        description: `Turn on Role-Based Access Control.

Role-Based Access Control (RBAC) allows fine-grained control over the operations that different entities can perform on different objects in the cluster.`,
        impact: `You cannot get fine-grained control over the activities that different entities can conduct on various objects in the cluster without Role Based Access Control (RBAC).`,
        howToFix: `It is recommended to use the RBAC authorization mode.`,
        references: `https://gsl.dome9.com/D9.K8S.IAM.09.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_78`,
        title: `Admission control plugin EventRateLimit is set`,
        description: `Limit the rate at which the API server accepts requests.

Using EventRateLimit admission control enforces a limit on the number of events that the API server will accept in a given time slice. A misbehaving workload could overwhelm and DoS the API Server, making it unavailable. 

This particularly applies to a multi-tenant cluster, where there might be a small percentage of misbehaving tenants which could have a significant impact on the performance of the cluster overall. Hence, it is recommended to limit the rate of events that the API server will accept.

Note: This is an Alpha feature in the Kubernetes 1.15 release.`,
        impact: `You cannot restrict the amount of events that the API Server will accept in a particular time slice if you do not use the EventRateLimit admission control.`,
        howToFix: `We recommend you ensure the admission control plugin EventRateLimit is set`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/`,
        group: ``,
    },
    {
        id: `CKV_K8S_79`,
        title: `Admission control plugin AlwaysAdmit is not set`,
        description: `Do not allow all requests. Setting admission control plugin AlwaysAdmit allows all requests and do not filter any requests.

The AlwaysAdmit admission controller was deprecated in Kubernetes v1.13. Its behavior was equivalent to turning off all admission controllers.`,
        impact: `Setting the admission control plugin AlwaysAdmit to accept all requests without filtering any of them.`,
        howToFix: `We recommend you ensure the admission control plugin AlwaysAdmit is not set`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/`,
        group: ``,
    },
    {
        id: `CKV_K8S_80`,
        title: `Admission control plugin AlwaysPullImages is set`,
        description: `Always pull images.

Setting admission control policy to AlwaysPullImages forces every new pod to pull the required images every time. In a multi-tenant cluster, users can be assured that their private images can only be used by those who have the credentials to pull them. 

Without this admission control policy, once an image has been pulled to a node, any pod from any user can use it simply by knowing the image’s name, without any authorization check against the image ownership. 

When this plug-in is enabled, images are always pulled before starting containers, which means valid credentials are required.`,
        impact: `Without this admission control policy, once an image is fetched to a node, any pod from any user can access it just by knowing the image's name, with no authorization check against image ownership.`,
        howToFix: `We recommend you ensure the admission control plugin AlwaysPullImages is set`,
        references: `https://gsl.dome9.com/D9.K8S.NET.10.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_81`,
        title: `Set Admission control plugin SecurityContextDeny if PodSecurityPolicy is not used`,
        description: `The SecurityContextDeny admission controller can be used to deny pods that make use of some SecurityContext fields which could allow for privilege escalation in the cluster. This should be used where PodSecurityPolicy is not in place within the cluster.

SecurityContextDeny can be used to provide a layer of security for clusters that do not have PodSecurityPolicies enabled.`,
        impact: `The SecurityContextDeny admission controller may be used to refuse pods that employ SecurityContext fields that may allow for privilege escalation in the cluster.`,
        howToFix: `We recommend you ensure the admission control plugin SecurityContextDeny is set if PodSecurityPolicy is not used`,
        references: `https://www.unifiedcompliance.com/products/search-controls/control/14569/`,
        group: ``,
    },
    {
        id: `CKV_K8S_82`,
        title: `Set admission control plugin ServiceAccount`,
        description: `Automate service accounts management. 

When you create a pod, if you do not specify a service account, it is automatically assigned the default service account in the same namespace. 

You should create your service account and let the API server manage its security tokens.`,
        impact: `If you do not provide a service account, the default service account in the same namespace is allocated to it.`,
        howToFix: `We recommend you ensure the admission control plugin ServiceAccount is set`,
        references: `https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/`,
        group: ``,
    },
    {
        id: `CKV_K8S_83`,
        title: `Set Admission control plugin NamespaceLifecycle`,
        description: `Reject creating objects in a namespace that is undergoing termination.

Setting an admission control policy to NamespaceLifecycle ensures that objects cannot be created in non-existent namespaces and that namespaces undergoing termination are not used for creating the new objects.`,
        impact: `Without an admission control policy for NamespaceLifecycle, it is impossible to verify that objects cannot be produced in non-existent namespaces and that namespaces that are being terminated are not utilized to generate new objects.`,
        howToFix: `This is recommended to enforce the integrity of the namespace termination process and also for the availability of the newer objects.`,
        references: `https://gsl.dome9.com/D9.K8S.NET.11.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_84`,
        title: `Set admission control plugin PodSecurityPolicy`,
        description: `Reject creating pods that do not match Pod Security Policies.

A Pod Security Policy is a cluster-level resource that controls the actions that a pod can perform and what it has the ability to access. The PodSecurityPolicy objects define a set of conditions that a pod must run with to be accepted into the system. 

Pod Security Policies are comprised of settings and strategies that control the security features a pod has access to and hence this must be used to control pod access permissions.`,
        impact: `Without a Pod Security Policy, you have no control over the actions that a pod may execute or the data it can access.`,
        howToFix: `We recommend you ensure the admission control plugin PodSecurityPolicy is set`,
        references: `https://kubernetes.io/docs/concepts/policy/pod-security-policy/`,
        group: ``,
    },
    {
        id: `CKV_K8S_85`,
        title: `Set admission control plugin NodeRestriction`,
        description: `Limit the Node and Pod objects that a kubelet could modify.

Using the NodeRestriction plug-in ensures that the kubelet is restricted to the Node and Pod objects that it could modify as defined. Such kubelets will only be allowed to modify their Node API object, and only modify Pod API objects that are bound to their node.`,
        impact: `Without the NodeRestriction plug-in, the kubelet is not limited to the Node and Pod objects that it can change as described.`,
        howToFix: `We recommend you ensure the admission control plugin NodeRestriction is set`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/`,
        group: ``,
    },
    {
        id: `CKV_K8S_86`,
        title: `The insecure-bind-address argument is not set`,
        description: `Do not bind the insecure API service.

If you bind the API server to an insecure address, basically anyone who could connect to it over the insecure port, would have unauthenticated and unencrypted access to your master node. 

The API server doesn't do any authentication checking for insecure binds and traffic to the Insecure API port is not encrypted, allowing attackers to potentially read sensitive data in transit.`,
        impact: `If you bind the apiserver to an unsecured IP, everyone who connects to it over the insecure port has unauthenticated and unencrypted access to your master node.`,
        howToFix: `We recommend you ensure the --insecure-bind-address argument is not set`,
        references: `https://success.myshn.net/Cloud_Native_Application_Protection_Platform_(IaaS)/GCP_Templates_and_Policies/Policy_Templates_for_GKE`,
        group: ``,
    },
    {
        id: `CKV_K8S_88`,
        title: `The insecure-port argument is set to 0`,
        description: `Do not bind to an insecure port. Setting up the API server to serve on an insecure port would allow unauthenticated and unencrypted access to your master node. 

This would allow attackers who could access this port, to easily take control of the cluster.`,
        impact: `Allowing unauthenticated and unencrypted access to your master node by configuring the apiserver to serve on an unsafe port.`,
        howToFix: `We recommend you ensure the --insecure-port argument is set to 0`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/`,
        group: ``,
    },
    {
        id: `CKV_K8S_89`,
        title: `The secure-port argument is not set to 0`,
        description: `Do not disable the secure port. The secure port is used to serve HTTPS with authentication and authorization. 

If you disable it, no HTTPS traffic is served and all traffic is served unencrypted.`,
        impact: `When the secure port is disabled, no https traffic is served, and all traffic is served unencrypted.`,
        howToFix: `We recommend you ensure the --secure-port argument is not set to 0`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.20/`,
        group: ``,
    },
    {
        id: `CKV_K8S_90`,
        title: `The profiling argument is set to False`,
        description: `Disable profiling, if not needed. Profiling allows for the identification of specific performance bottlenecks. 

It generates a significant amount of program data that could potentially be exploited to uncover system and program details. If you are not experiencing any bottlenecks and do not need the profiler for troubleshooting purposes`,
        impact: `Profiling enables the detection of specific performance bottlenecks.`,
        howToFix: `it is recommended to turn it off to reduce the potential attack surface.`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/`,
        group: ``,
    },
    {
        id: `CKV_K8S_91`,
        title: `The audit-log-path argument is set`,
        description: `Enable auditing on the Kubernetes API Server and set the desired audit log path.

Auditing the Kubernetes API Server provides a security-relevant chronological set of records documenting the sequence of activities that have affected the system by individual users, administrators, or other components of the system. 

Even though currently, Kubernetes provides only basic audit capabilities, it should be enabled. You can enable it by setting an appropriate audit log path.`,
        impact: `API Server does not offer a security-relevant chronological collection of records describing the sequence of actions that have affected the system by individual users, administrators, or other system components if the —audit-log-path parameter is not provided.`,
        howToFix: `We recommend you ensure the --audit-log-path argument is set`,
        references: `https://gsl.dome9.com/D9.K8S.LOG.02.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_92`,
        title: `The audit-log-maxage argument is set to 30 or as appropriate`,
        description: `Retain the logs for at least 30 days or as appropriate. Retaining logs for at least 30 days ensures that you can go back in time and investigate or correlate any events. Set your audit log retention period to 30 days or as per your business requirements.`,
        impact: `Without preserving records for at least 30 days, you cannot travel back in time to investigate or correlate any occurrences.`,
        howToFix: `We recommend you ensure --audit-log-maxage argument is set to 30 or as appropriate`,
        references: `https://kubernetes.io/docs/tasks/debug-application-cluster/audit/`,
        group: ``,
    },
    {
        id: `CKV_K8S_93`,
        title: `The audit-log-maxsize argument is set to 10 or as appropriate`,
        description: `Retain 10 or an appropriate number of old log files. 

Kubernetes automatically rotates the log files. Retaining old log files ensures that you would have sufficient log data available for carrying out any investigation or correlation. 

For example, if you have a set file size of 100 MB and the number of old log files to keep as 10, you would approximately have 1 GB of log data that you could potentially use for your analysis.`,
        impact: `If the —audit-log-maxbackup option is not properly specified, Kubernetes does not assure that you have enough log data for any inquiry or correlation.`,
        howToFix: `We recommend you ensure the --audit-log-maxsize argument is set to 10 or as appropriate`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.24/`,
        group: ``,
    },
    {
        id: `CKV_K8S_94`,
        title: `The audit-log-maxsize argument is set to 100 or as appropriate`,
        description: `Rotate log files on reaching 100 MB or as appropriate. 

Kubernetes automatically rotates the log files. Retaining old log files ensures that you would have sufficient log data available for carrying out any investigation or correlation. 

If you have a set file size of 100 MB and the number of old log files to keep as 10, you would approximately have 1 GB of log data that you could potentially use for your analysis.`,
        impact: `If you set the file size to 100 MB and the number of old log files to preserve to 10, you will have around 1 GB of log data to utilize for your study.`,
        howToFix: `We recommend you ensure the --audit-log-maxsize argument is set to 100 or as appropriate`,
        references: `https://kubernetes.io/docs/tasks/debug-application-cluster/audit/`,
        group: ``,
    },
    {
        id: `CKV_K8S_95`,
        title: `The request-timeout argument is set appropriately`,
        description: `Set global request timeout for API server requests as appropriate. 

Setting global request timeout allows extending the API server request timeout limit to a duration appropriate to the user's connection speed. By default, it is set to 60 seconds which might be problematic on slower connections making cluster resources inaccessible once the data volume for requests exceeds what can be transmitted in 60 seconds. 

But, setting this timeout limit to be too large can exhaust the API server resources making it prone to a Denial-of-Service attack. Hence, it is recommended to set this limit as appropriate and change the default limit of 60 seconds only if needed.`,
        impact: `It is set at 60 seconds by default, which may be troublesome on slower connections, rendering cluster resources unreachable once the data volume for requests surpasses what can be transferred in 60 seconds.`,
        howToFix: `We recommend you ensure the --request-timeout argument is set appropriately`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/`,
        group: ``,
    },
    {
        id: `CKV_K8S_96`,
        title: `The service-account-lookup argument is set to True`,
        description: `Validate service account before validating token.

If --service-account-lookup is not enabled, the API server only verifies that the authentication token is valid, and does not validate that the service account token mentioned in the request is actually present in etcd. This allows using a service account token even after the corresponding service account is deleted. This is an example of a time of check to time of use security issue.`,
        impact: `If —service-account-lookup is not set, the apiserver simply validates that the authentication token is valid, not that the service account token given in the request is indeed existing in etcd.`,
        howToFix: `We recommend you ensure the --service-account-lookup argument is set to True`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/`,
        group: ``,
    },
    {
        id: `CKV_K8S_97`,
        title: `The service-account-key-file argument is set appropriately`,
        description: `Explicitly set a service account public key file for service accounts on the API server.

By default, if no --service-account-key-file is specified to the API server, it uses the private key from the TLS serving certificate to verify service account tokens. To ensure that the keys for service account tokens could be rotated as needed, a separate public/private key pair should be used for signing service account tokens. 
Hence, the public key should be specified to the API server with --service-account-key-file.`,
        impact: `If no —service-account-key-file option is given, the apiserver verifies service account tokens using the private key from the TLS serving certificate.`,
        howToFix: `We recommend you ensure the --service-account-key-file argument is set appropriately`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/authentication/`,
        group: ``,
    },
    {
        id: `CKV_K8S_99`,
        title: `The --etcd-certfile and --etcd-keyfile arguments are set appropriately`,
        description: `etcd should be configured to make use of TLS encryption for client connections.

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. 

These objects are sensitive and should be protected by client authentication. This requires the API server to identify itself to the etcd server using a client certificate and key.`,
        impact: `The data will be risk if the —etcd-certfile and —etcd-keyfile options are not properly set.`,
        howToFix: `We recommend you ensure Ensure the --etcd-certfile and --etcd-keyfile arguments are set appropriately`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.29/`,
        group: ``,
    },
    {
        id: `CKV_K8S_100`,
        title: `Weak Cryptographic Ciphers Used by Kubelet in Kubernetes`,
        description: `Ensure that the Kubelet is configured to only use strong cryptographic ciphers. 

TLS ciphers have had a number of known vulnerabilities and weaknesses, which can reduce the protection provided by them. By default Kubernetes supports a number of TLS cipher suites including some that have security concerns, weakening the protection provided.`,
        impact: `Kubelet's security cannot be reduced if it does not employ powerful cryptographic ciphers.`,
        howToFix: `We recommend you ensure Kubelet only uses strong cryptographic ciphers`,
        references: `https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/`,
        group: ``,
    },
    {
        id: `CKV_K8S_102`,
        title: `The etcd-cafile argument is set appropriately`,
        description: `etcd should be configured to make use of TLS encryption for client connections. 

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive in nature and should be protected by client authentication. 

This requires the API server to identify itself to the etcd server using an SSL Certificate Authority file.`,
        impact: `Sensitive objects will be risk if the —etcd-cafile parameter is not properly configured.`,
        howToFix: `We recommend you ensure the --etcd-cafile argument is set appropriately`,
        references: `https://www.unifiedcompliance.com/products/search-controls/control/14592/`,
        group: ``,
    },
    {
        id: `CKV_K8S_104`,
        title: `Encryption providers are appropriately configured`,
        description: `Where etcd encryption is used, appropriate providers should be configured. Where etcd encryption is used, it is important to ensure that the appropriate set of encryption providers is used. Currently, the aescbc, kms and secretbox are likely to be appropriate options.`,
        impact: `Data will be jeopardized if encryption providers are not properly set.`,
        howToFix: `We recommend you ensure encryption providers are appropriately configured`,
        references: `https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/`,
        group: ``,
    },
    {
        id: `CKV_K8S_105`,
        title: `API server makes use of strong cryptographic ciphers`,
        description: `Ensure that the API server is configured to only use strong cryptographic ciphers. 

TLS ciphers have had a number of known vulnerabilities and weaknesses, which can reduce the protection provided by them. By default Kubernetes supports a number of TLS cipher suites including some that have security concerns, weakening the protection provided.`,
        impact: `TLS ciphers have a number of documented flaws and weaknesses that might lower the level of protection they provide.`,
        howToFix: `We recommend you ensure the API server makes use of strong cryptographic ciphers`,
        references: `https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/`,
        group: ``,
    },
    {
        id: `CKV_K8S_106`,
        title: `The terminated-pod-gc-threshold argument for controller managers is set appropriately`,
        description: `Activate garbage collector on pod termination, as appropriate.

Garbage collection is important to ensure sufficient resource availability and avoid degraded performance and availability. In the worst case, the system might crash or just be unusable for a long period. 

The current setting for garbage collection is 12,500 terminated pods which might be too high for your system to sustain. Based on your system resources and tests, choose an appropriate threshold value to activate garbage collection.`,
        impact: `If the —terminated-pod-gc-threshold parameter for controller managers is not properly specified, the system may crash or become useless for an extended length of time.`,
        howToFix: `We recommend you ensure the --terminated-pod-gc-threshold argument for controller managers is set appropriately`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/`,
        group: ``,
    },
    {
        id: `CKV_K8S_107`,
        title: `The profiling argument for controller managers is set to False`,
        description: `Disable profiling, if not needed. Profiling allows for the identification of specific performance bottlenecks. It generates a significant amount of program data that could potentially be exploited to uncover system and program details. 

If you are not experiencing any bottlenecks and do not need the profiler for troubleshooting purposes, it is recommended to turn it off to reduce the potential attack surface.`,
        impact: `If the —profiling parameter for controller managers is not set to False, it creates a large quantity of program data that might be used to discover system and program information.`,
        howToFix: `We recommend you ensure the --profiling argument for controller managers is set to False`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/`,
        group: ``,
    },
    {
        id: `CKV_K8S_108`,
        title: `The use-service-account-credentials argument for controller managers is set to True`,
        description: `Use individual service account credentials for each controller. 

The controller manager creates a service account per controller in the Kube-system namespace, generates a credential for it, and builds a dedicated API client with that service account credential for each controller loop to use. 

Setting the --use-service-account- credentials to true runs each control loop within the controller manager using a separate service account credential. 

When used in combination with RBAC, this ensures that the control loops run with the minimum permissions required to perform their intended tasks.`,
        impact: `If the —use-service-account-credentials parameter for controller managers is not set to True, you will not be able to operate the loop within the controller manager using a different service account credential.`,
        howToFix: `We recommend you ensure use-service-account-credentials argument for controller managers is set to True`,
        references: `https://kubernetes.io/docs/reference/access-authn-authz/_print/`,
        group: ``,
    },
    {
        id: `CKV_K8S_110`,
        title: `The service-account-private-key-file argument for controller managers is set appropriately`,
        description: `Explicitly set a service account private key file for service accounts on the controller manager. 

To ensure that keys for service account tokens can be rotated as needed, a separate public/private key pair should be used for signing service account tokens. 

The private key should be specified to the controller manager with --service-account-private-key-file as appropriate.`,
        impact: `There is a danger of data breach if the —service-account-private-key-file parameter for controller managers is not configured adequately.`,
        howToFix: `We recommend you ensure the --service-account-private-key-file argument for controller managers is set appropriately`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.3.4/`,
        group: ``,
    },
    {
        id: `CKV_K8S_111`,
        title: `The root-ca-file argument for controller managers is set appropriately`,
        description: `Allow pods to verify the API server's serving certificate before establishing connections.

Processes running within pods that need to contact the API server must verify the API server's serving certificate. Failing to do so could be a subject to man-in-the-middle attacks.

Providing the root certificate for the API server's serving certificate to the controller manager with the --root-ca-file argument allows the controller manager to inject the trusted bundle into pods so that they can verify TLS connections to the API server.`,
        impact: `If the controller manager's —root-ca-file parameter is not properly provided, the controller manager will be unable to inject the trusted bundle into pods so that they may validate TLS connections to the API server.`,
        howToFix: `We recommend ensuring the --root-ca-file argument for controller managers is set appropriately`,
        references: `https://github.com/kubernetes/kubernetes/issues/100343`,
        group: ``,
    },
    {
        id: `CKV_K8S_112`,
        title: `RotateKubeletServerCertificate argument for controller managers is set to True`,
        description: `Enable kubelet server certificate rotation. 

RotateKubeletServerCertificate causes the kubelet to both requests a serving certificate after bootstrapping its client credentials and rotate the certificate as its existing credentials expire. 

This automated periodic rotation ensures that there are no downtimes due to expired certificates and thus addressing availability in the CIA security triad.`,
        impact: `The kubelet cannot request a serving certificate after bootstrapping its client credentials and rotate the certificate as its old credentials expire without RotateKubeletServerCertificate.`,
        howToFix: `We recommend you ensure the RotateKubeletServerCertificate argument for controller managers is set to True`,
        references: `https://kubernetes.io/docs/tasks/tls/certificate-rotation/`,
        group: ``,
    },
    {
        id: `CKV_K8S_113`,
        title: `The bind-address argument for controller managers is set to 127.0.0.1`,
        description: `Do not bind the Controller Manager service to non-loopback insecure addresses. 

The Controller Manager API service which runs on port 10252/TCP by default is used for health and metrics information and is available without authentication or encryption. As such it should only be bound to a localhost interface, to minimize the cluster's attack surface`,
        impact: `The Controller Manager API service, which by default operates on port 10252/TCP, is used for health and metrics data and is accessible without authentication or encryption.`,
        howToFix: `We recommend ensuring the --bind-address argument for controller managers is set to 127.0.0.1`,
        references: `https://gsl.dome9.com/D9.K8S.NET.20.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_114`,
        title: `Enabled Profiling in Kubernetes Pods`,
        description: `Disable profiling, if not needed.

Profiling allows for the identification of specific performance bottlenecks. 

It generates a significant amount of program data that could potentially be exploited to uncover system and program details. If you are not experiencing any bottlenecks and do not need the profiler for troubleshooting purposes, it is recommended to turn it off to reduce the potential attack surface.`,
        impact: `It creates a large volume of program data that might be used to reveal system and program specifics.`,
        howToFix: `We recommend you ensure The profiling argument is set to False`,
        references: `https://github.com/kubernetes/kops/issues/6150`,
        group: ``,
    },
    {
        id: `CKV_K8S_115`,
        title: `The bind-address argument is set to 127.0.0.1`,
        description: `Do not bind the scheduler service to non-loopback insecure addresses. 

The Scheduler API service which runs on port 10251/TCP by default is used for health and metrics information and is available without authentication or encryption. 

As such it should only be bound to a localhost interface, to minimize the cluster's attack surface.`,
        impact: `The Scheduler API service, which by default operates on port 10251/TCP, is used for health and metrics data and is accessible without authentication or encryption.`,
        howToFix: `We recommend you ensure the --bind-address argument is set to 127.0.0.1`,
        references: `https://success.myshn.net/Cloud_Native_Application_Protection_Platform_(IaaS)/GCP_Templates_and_Policies/Policy_Templates_for_GKE`,
        group: ``,
    },
    {
        id: `CKV_K8S_116`,
        title: `The cert-file and --key-file arguments are set appropriately`,
        description: `Configure TLS encryption for the etcd service. 

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive and should be encrypted in transit.`,
        impact: `If the —cert-file and —key-file options are not properly specified, the key value store used by Kubernetes deployments will not save all of its REST API objects.`,
        howToFix: `We recommend you ensure the --cert-file and --key-file arguments are set appropriately`,
        references: `https://gsl.dome9.com/D9.K8S.CRY.12.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_117`,
        title: `The client-cert-auth argument is set to True`,
        description: `Enable client authentication on etcd service. 

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive and should not be available to unauthenticated clients. 

You should enable the client authentication via valid certificates to secure access to the etcd service.`,
        impact: `These items are very sensitive and should not be accessible to unauthenticated clients.`,
        howToFix: `We recommend you ensure the --client-cert-auth argument is set to True`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-2.2/`,
        group: ``,
    },
    {
        id: `CKV_K8S_118`,
        title: `The auto-tls argument is not set to True`,
        description: `Do not use self-signed certificates for TLS. 

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive in nature and should not be available to unauthenticated clients. 

You should enable the client authentication via valid certificates to secure access to the etcd service.`,
        impact: `These items are sensitive in nature and should not be accessible to unauthenticated clients.`,
        howToFix: `We recommend you ensure the --auto-tls argument is not set to True`,
        references: `https://gsl.dome9.com/D9.K8S.CRY.14.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_119`,
        title: `Ensure the --peer-cert-file and --peer-key-file arguments are set appropriately`,
        description: `etcd should be configured to make use of TLS encryption for peer connections. 

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. 

These objects are sensitive and should be encrypted in transit and also amongst peers in the etcd clusters.`,
        impact: `Because these items are sensitive, they should be encrypted in transit as well as among peers in the etcd clusters.`,
        howToFix: `We recommend you ensure that the --peer-cert-file and --peer-key-file arguments are set appropriately`,
        references: `https://cloud.google.com/anthos/clusters/docs/on-prem/1.10/concepts/cis-benchmarks`,
        group: ``,
    },
    {
        id: `CKV_K8S_121`,
        title: `The peer-client-cert-auth argument is set to True`,
        description: `etcd should be configured for peer authentication. 

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. 

These objects are sensitive and should be accessible only by authenticated etcd peers in the etcd cluster.`,
        impact: `These are sensitive items that should only be accessed by authorized etcd peers in the etcd cluster.`,
        howToFix: `We recommend you ensure --peer-client-cert-auth argument is set to True`,
        references: `https://github.com/kubernetes/kops/issues/6150`,
        group: ``,
    },
    {
        id: `CKV_K8S_122`,
        title: `The peer-auto-tls argument is not set to True`,
        description: `Do not use automatically generated self-signed certificates for TLS connections between peers.

etcd is a highly-available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive and should be accessible only by authenticated etcd peers in the etcd cluster. 
Hence, do not use self-signed certificates for authentication.`,
        impact: `These are sensitive items that should only be accessed by authorized etcd peers in the etcd cluster.`,
        howToFix: `We recommend you ensure the --peer-auto-tls argument is not set to True`,
        references: `https://github.com/dev-sec/cis-kubernetes-benchmark/blob/master/controls/2_etcd_node.rb`,
        group: ``,
    },
    {
        id: `CKV_K8S_138`,
        title: `The anonymous-auth argument is set to False`,
        description: `Disable anonymous requests to the Kubelet server. When enabled, requests that are not rejected by other configured authentication methods are treated as anonymous requests. 

These requests are then served by the Kubelet server. You should rely on authentication to authorize access and disallow anonymous requests.`,
        impact: `Requests to the Kubelet server that are not refused by other defined authentication mechanisms are considered as anonymous requests when anonymous requests are allowed.`,
        howToFix: `We recommend you ensure --anonymous-auth argument is set to False`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-authentication-authorization/`,
        group: ``,
    },
    {
        id: `CKV_K8S_139`,
        title: `Insecure Authorization Configuration in Kubernetes (--authorization-mode)`,
        description: `Do not allow all requests. Enable explicit authorization. Kubelets, by default, allow all authenticated requests (even anonymous ones) without needing explicit authorization checks from the apiserver. You should restrict this behavior and only allow explicitly authorized requests.`,
        impact: `By default, Kubelets accept all authenticated requests (even anonymous ones) without requiring explicit authorization checks from the apiserver.`,
        howToFix: `We recommend you ensure the --authorization-mode argument is not set to always allow`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-4.2.2/`,
        group: ``,
    },
    {
        id: `CKV_K8S_140`,
        title: `The client-ca-file argument for API Servers is set appropriately`,
        description: `Enable Kubelet authentication using certificates. 

The connections from the apiserver to the kubelet are used for fetching logs for pods, attaching (through kubectl) to running pods, and using the kubelet’s port-forwarding functionality. 

These connections terminate at the kubelet’s HTTPS endpoint. By default, the apiserver does not verify the kubelet’s serving certificate, which makes the connection subject to man-in-the-middle attacks, and unsafe to run over untrusted and/or public networks. 

Enabling Kubelet certificate authentication ensures that the API server could authenticate the Kubelet before submitting any requests.`,
        impact: `The apiserver does not validate the kubelet's serving certificate by default, making the connection vulnerable to man-in-the-middle attacks and dangerous to run over untrusted and/or public networks.`,
        howToFix: `We recommend you ensure the --client-ca-file argument for API Servers is set appropriately`,
        references: `https://kubernetes.io/docs/concepts/architecture/control-plane-node-communication/`,
        group: ``,
    },
    {
        id: `CKV_K8S_141`,
        title: `The read-only-port argument is set to 0`,
        description: `Disable the read-only port. The Kubelet process provides a read-only API in addition to the main Kubelet API. 

Unauthenticated access is provided to this read-only API which could retrieve potentially sensitive information about the cluster.`,
        impact: `This read-only API has unauthenticated access and may extract potentially sensitive information about the cluster.`,
        howToFix: `We recommend you ensure the --read-only-port argument is set to 0`,
        references: `https://github.com/awslabs/amazon-eks-ami/issues/476`,
        group: ``,
    },
    {
        id: `CKV_K8S_143`,
        title: `The streaming-connection-idle-timeout argument is not set to 0`,
        description: `Do not disable timeouts on streaming connections.

Setting idle timeouts ensures that you are protected against Denial-of-Service attacks, inactive connections, and running out of ephemeral ports.

By default, --streaming-connection-idle-timeout is set to 4 hours which might be too high for your environment. 

Setting this as appropriate would additionally ensure that such streaming connections are timed out after serving legitimate use cases.`,
        impact: `Setting idle timeouts protects you from Denial-of-Service attacks, inactive connections, and running out of ephemeral ports.`,
        howToFix: `We recommend you ensure the streaming-connection-idle-timeout argument is not set to 0`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-4.2.5/`,
        group: ``,
    },
    {
        id: `CKV_K8S_144`,
        title: `The protect-kernel-defaults argument is set to True`,
        description: `Protect tuned kernel parameters from overriding kubelet default kernel parameter values.

Kernel parameters are usually tuned and hardened by the system administrators before putting the systems into production. These parameters protect the kernel and the system. 

Your kubelet kernel defaults that rely on such parameters should be appropriately set to match the desired secured system state. Ignoring this could potentially lead to running pods with undesired kernel behavior.`,
        impact: `If the —protect-kernel-defaults parameter is set to True, pods may operate with unacceptable kernel behavior.`,
        howToFix: `We recommend you ensure the --protect-kernel-defaults argument is set to True`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-4.2.6/`,
        group: ``,
    },
    {
        id: `CKV_K8S_145`,
        title: `The make-iptables-util-chains argument is set to True`,
        description: `Allow Kubelet to manage iptables. Kubelets can automatically manage the required changes to IP tables based on how you choose your networking options for the pods. 

It is recommended to let kubelets manage the changes to iptables. This ensures that the iptables configuration remains in sync with the pod's networking configuration. 

Manually configuring IP tables with dynamic pod network configuration changes might hamper the communication between pods/containers and to the outside world. You might have iptables rules too restrictive or too open.`,
        impact: `If the —make-iptables-util-chains parameter is not set to True, Kubelets will not be able to handle the necessary modifications to iptables based on how you configure the pods' networking choices.`,
        howToFix: `We recommend you ensure the --make-iptables-util-chains argument is set to True`,
        references: `https://success.myshn.net/Cloud_Native_Application_Protection_Platform_(IaaS)/GCP_Templates_and_Policies/Policy_Templates_for_GKE`,
        group: ``,
    },
    {
        id: `CKV_K8S_146`,
        title: `The hostname-override argument is not set`,
        description: `Do not override node hostnames. Overriding hostnames could potentially break the TLS setup between the kubelet and the API server. 

Additionally, with overridden hostnames, it becomes increasingly difficult to associate logs with a particular node and process them for security analytics. Hence, you should set up your kubelet nodes with resolvable FQDNs and avoid overriding the hostnames with IPs.`,
        impact: `Overriding hostnames may cause TLS to fail between the kubelet and the apiserver.`,
        howToFix: `We recommend you ensure the hostname-override argument is not set`,
        references: `https://gsl.dome9.com/D9.K8S.OPE.02.html`,
        group: ``,
    },
    {
        id: `CKV_K8S_147`,
        title: `The event-qps argument is set to 0 or a level that ensures appropriate event capture`,
        description: `Security relevant information should be captured. The --event-qps flag on the Kubelet can be used to limit the rate at which events are gathered. Setting this too low could result in relevant events not being logged, however, the unlimited setting of 0 could result in a denial of service on the kubelet.

It is important to capture all events and not restrict event creation. Events are an important source of security information and analytics that ensure that your environment is consistently monitored using the event data.`,
        impact: `Setting this too low may result in important events not being logged, while setting it to a limitless value of 0 may result in a kubelet denial of service.`,
        howToFix: `We recommend you ensure --event-qps argument is set to 0 or a level that ensures appropriate event capture`,
        references: `https://github.com/kubernetes/kops/issues/6150`,
        group: ``,
    },
    {
        id: `CKV_K8S_148`,
        title: `The tls-cert-file and --tls-private-key-file arguments are set appropriately for Kubelet`,
        description: `API server communication contains sensitive parameters that should remain encrypted in transit. Configure the API server to serve only HTTPS traffic by setup a TLS connection on the API server. By default, --tls-cert-file and --tls-private-key-file arguments are not set.`,
        impact: `If the —tls-cert-file and —tls-private-key-file options are not properly configured for Kubelety, API server communication with sensitive parameters will be exposed.`,
        howToFix: `We recommend you ensure --tls-cert-file and --tls-private-key-file arguments are set appropriately for Kubelet`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-1.2.30/`,
        group: ``,
    },
    {
        id: `CKV_K8S_149`,
        title: `The rotate-certificates argument is not set to False`,
        description: `Enable kubelet client certificate rotation.

The --rotate-certificates setting causes the kubelet to rotate its client certificates by creating new CSRs as its existing credentials expire. This automated periodic rotation ensures that there is no downtime due to expired certificates and thus addresses availability in the CIA security triad.`,
        impact: `Without this regular periodic rotation, there will be no downtime due to expired certificates, addressing availability in the CIA security trinity.`,
        howToFix: `We recommend you ensure --rotate-certificates argument is not set to False`,
        references: `https://docs.datadoghq.com/security_platform/default_rules/cis-kubernetes-1.5.1-4.2.11/`,
        group: ``,
    },
    {
        id: `CKV_K8S_150`,
        title: `The RotateKubeletServerCertificate argument for kubelets is set to True`,
        description: `Enable kubelet server certificate rotation. RotateKubeletServerCertificate causes the kubelet to both requests a serving certificate after bootstrapping its client credentials and rotate the certificate as its existing credentials expire. 

This automated periodic rotation ensures that there are no downtimes due to expired certificates and thus addresses availability in the CIA security triad.`,
        impact: `Without This automatic monthly rotation guarantees that no downtime occurs as a result of expired certificates, addressing availability in the CIA security triangle.`,
        howToFix: `We recommend you ensure RotateKubeletServerCertificate argument for kubelets is set to True`,
        references: `https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-tls-bootstrapping/`,
        group: ``,
    },
    {
        id: `CKV_K8S_151`,
        title: `Kubelet only uses strong cryptographic ciphers`,
        description: `Ensure that the Kubelet is configured to only use strong cryptographic ciphers. TLS ciphers have had several known vulnerabilities and weaknesses, which can reduce the protection provided by them. By default Kubernetes supports many TLS cipher suites including some that have security concerns, weakening the protection provided.`,
        impact: `By default, Kubernetes offers a number of TLS ciphersuites, some of which have security problems, hence diminishing the protection given.`,
        howToFix: `We recommend you ensure Kubelet only uses strong cryptographic ciphers`,
        references: `https://www.ibm.com/docs/en/cloud-private/3.2.0?topic=installation-specifying-tls-ciphers-etcd-kubernetes`,
        group: ``,
    },
    {
        id: `CKV_SECRET_1`,
        title: `Artifactory Credentials`,
        description: `Artifactory is a Repository Manager that functions as a single access point organizing all of your binary resources including proprietary libraries, remote artifacts, and other 3rd party resources.

Artifactory allows authentication for REST API calls using your API key as an alternative to your username and password in two ways: either by using the X-JFrog-Art-API header with which you can specify an API key or through basic authentication using your username and API key (instead of your password)`,
        impact: `It will reveal the credentials, resulting in a data leak.`,
        howToFix: `To resolve this issue, you must reset your Access credentials in the database (a process known as bootstrapping). Note: For Artifactory 5.8, a more efficient approach was introduced; please follow the instructions solely for your version.`,
        references: `https://jfrog.com/whitepaper/java-12-reasons-to-use-a-binary-repository-manager-when-developing-with-java/`,
        group: ``,
    },
    {
        id: `CKV_SECRET_2`,
        title: `AWS Access Keys`,
        description: `AWS Access Keys are long-term credentials for an IAM user or the AWS account root user. You can use access keys to sign programmatic requests to the AWS CLI or AWS API (directly or using the AWS SDK). Access keys consist of two parts: An access key ID (for example, AKIAIOSFODNN7EXAMPLE) and a secret access key (for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY).`,
        impact: `Access keys can be used by hackers to sign programmatic queries to the AWS CLI or AWS API (directly or using the AWS SDK).`,
        howToFix: `We recommend you keep your access keys safe to prevent unwanted access to data`,
        references: `https://docs.aws.amazon.com/accounts/latest/reference/credentials-access-keys-best-practices.html`,
        group: ``,
    },
    {
        id: `CKV_SECRET_3`,
        title: `Azure Storage Account access key`,
        description: `When you create a storage account, Azure generates two 512-bit storage account access keys, These keys can be used to authorize access to data in your storage account via Shared Key authorization.`,
        impact: `As a result, leaking this key may risk the data in question.`,
        howToFix: `Microsoft recommends that you use Azure Key Vault to manage your access keys and that you regularly rotate and regenerate your keys. Using Azure Key Vault makes it easy to rotate your keys without interruption to your applications. You can also manually rotate your keys.`,
        references: `https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal`,
        group: ``,
    },
    {
        id: `CKV_SECRET_4`,
        title: `Basic Auth Credentials`,
        description: `With Basic Authentication, you pass your credentials (your Apigee account's email address and password) in each request to the Edge API. 

Basic Authentication is the least secure of the supported authentication mechanisms. Your credentials are not encrypted or hashed; they are Base64-encoded only.`,
        impact: `Attackers can exploit leaked usernames and passwords to attempt to login to existing accounts and steal information from them.`,
        howToFix: `Ensure that the variable used in the BasicAuthentication policy is declared or supplied as an input in the flow where the policy is being run.`,
        references: `https://docs.apigee.com/api-platform/system-administration/basic-auth#:~:text=With%20Basic%20Authentication%2C%20you%20pass,they%20are%20Base64%2Dencoded%20only.`,
        group: ``,
    },
    {
        id: `CKV_SECRET_5`,
        title: `Exposure of Sensitive Credentials in IBM Cloudant`,
        description: `Cloudant is a document-oriented and distributed database running on IBM Cloud. 

The service can be accessed via API calls. An optional authentication method requires a username and password. An alternate authentication method consists of a username and the corresponding API key.`,
        impact: `Attackers can exploit leaked usernames and passwords to try to login to existing accounts and steal information from them.`,
        howToFix: `It is recommended that you repair it through the IBM Cloud console. The secret can be revoked on the Service credentials tab of the IBM Cloudant dashboard. Navigate to your GitHub project's settings and click the adjust visibility button at the bottom. Then, examine LogDNA logs to check that the key was not used within the compromised time period.`,
        references: `https://www.ibm.com/in-en/cloud/cloudant`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CKV_SECRET_6`,
        title: `Base64 High Entropy String`,
        description: `Base64 calculates entropy levels using a Shannon Entropy calculator. The entropy levels of keys are important, as the more or less information required to determine unknown key variables can alter how difficult it is to crack. If a high-entropy string is detected, the string is printed to the screen. This check scans the branch and evaluates the Shannon entropy for both the base64 character set for every blob of text.`,
        impact: `A hacker can crack the key variables, resulting in a data leak.`,
        howToFix: `It is suggested that you fix it in Git. Begin by determining which services were affected, then consult the associated API documentation to discover how to revoke and rotate the secret. After that, navigate to your GitHub project's settings and click the adjust visibility option at the bottom. Then, review any relevant access logs to check that the key was not used during the compromised time.`,
        references: `https://github.com/Yelp/detect-secrets/issues/250`,
        group: ``,
    },
    {
        id: `CKV_SECRET_7`,
        title: `IBM Cloud IAM Key`,
        description: `Generate an IBM Cloud® Identity and Access Management (IAM) token by using either your IAM API key or a service ID's API key. IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role. Each user who is calling the API must pass credentials for the API to authenticate.

You can generate an IAM token by using either your IBM Cloud API key or a service ID's API key. The API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account. This process is also used if you are developing an application that needs to work with other IBM Cloud services. You must use a service ID API key to get an access token to be passed to each of the IBM Cloud services.`,
        impact: `The IBM Cloud Identity and Access Management (IAM) service is in charge of keys that grant access to infrastructure APIs and resources.`,
        howToFix: `It is suggested that you fix it in Git. Remove an API key. To begin, navigate to Manage > Access (IAM) > API keys in the console. Then, pick Delete from the Actions List of actions icon menu after identifying the row of the API key that you want to delete. Then, click Delete to confirm the deletion.`,
        references: `https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey&interface=api`,
        group: ``,
    },
    {
        id: `CKV_SECRET_8`,
        title: `IBM COS HMAC Credentials`,
        description: `HMAC credentials consist of an Access Key and Secret Key paired for use with S3-compatible tools and libraries that require authentication. The IBM Cloud Object Storage API is a REST-based API for reading and writing objects. It uses IBM Cloud Identity and Access Management for authentication and authorization and supports a subset of the S3 API for easy migration of applications to IBM Cloud.`,
        impact: `HMAC credentials are made up of an Access Key and a Secret Key that will be broken by a hacker.`,
        howToFix: `It is suggested that you fix it in Git. Recall the revealed secret. Then, navigate to your GitHub project's settings section and click the alter visibility option at the bottom. Check the IBM Cloud Object Storage Accesser server logs to check that the key was not used during the compromised time.`,
        references: `https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-uhc-hmac-credentials-main`,
        group: ``,
    },
    {
        id: `CKV_SECRET_9`,
        title: `JSON Web Token`,
        description: `JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key. JSON Web Tokens are an open, industry-standard RFC 7519 method for representing claims securely between two parties. Once issued, access tokens and ID tokens cannot be revoked in the same way as cookies with session IDs for server-side sessions. As a result, tokens should be issued for relatively short periods, and then refreshed periodically if the user remains active.`,
        impact: `A hacker can break the JSON web token and get access to sensitive information.`,
        howToFix: `It is suggested that you fix it in Git. The most typical approach is to shorten the JWT's lifespan and revoke the refresh token, preventing the user from generating a new JWT. After that, clear the git history. Check your application access logs to check the key was not used during the compromised time.`,
        references: `https://en.wikipedia.org/wiki/JSON_Web_Token`,
        group: ``,
    },
    {
        id: `CKV_SECRET_10`,
        title: `Secret Keyword`,
        description: `This check attempts to identify non-standard secrets by using standard keyword conventions used to annotate secrets in custom application code.`,
        impact: `A hacker can crack the secret key and get access to sensitive information.`,
        howToFix: `It is suggested that you fix it in Git. Removing Secret. After that, clear the git history. Check your application access logs to check the key was not used during the compromised time.`,
        references: `https://github.com/danielmiessler/SecLists/blob/master/Discovery/Variables/secret-keywords.txt`,
        group: ``,
    },
    {
        id: `CKV_SECRET_11`,
        title: `Mailchimp Access Key`,
        description: `This check detects a Mailchimp access key referenced in your source code. The key enables an authenticated user to perform operational and management activities exposed by Mailchimp's developer API service.`,
        impact: `An authorized user can use the key to execute operational and managerial tasks offered by Mailchimp's developer API service.`,
        howToFix: `It is suggested that you fix it in Git. To begin, navigate to https://us1.admin.mailchimp.com/account/api/ to get your account's API Keys. Second, locate and toggle the slider in the Status column for the API key you wish to deactivate. Then, locate the API key you wish to disable and press the Disable button. Then, in the pop-up modal, select Disable. Finally, review the API call logs in the Mailchimp dashboard to confirm that the key was not used during the compromised time.`,
        references: `https://mailchimp.com/help/about-api-keys/`,
        group: ``,
    },
    {
        id: `CKV_SECRET_12`,
        title: `NPM tokens`,
        description: `The NPM access token can be used to authenticate to npm when using the API or the npm command-line interface (CLI). An access token is a hexadecimal string that you can use to authenticate, and which gives you the right to install and/or publish your modules. NPM access token is an alternative to using your username and password for authenticating to npm when using the API or the npm command-line interface (CLI). The npm CLI automatically generates an access token for you when you run npm login. You can also create an access token to give other tools (such as continuous integration testing environments) access to your npm packages. For example, GitHub Actions provides the ability to store secrets, like access tokens, that you can then use to authenticate. When your workflow runs, it will be able to complete npm tasks as you, including installing private packages you can access.`,
        impact: `The npm token may be cracked and used to authenticate to npm when using the API or the npm command-line interface (CLI)`,
        howToFix: `It is suggested that you fix it in Git. To begin, get a list of your tokens. Then, in the tokens table, locate and copy the ID of the token to be deleted. Ultimately, To confirm the removal of the token`,
        references: `https://docs.npmjs.com/about-access-tokens`,
        group: ``,
    },
    {
        id: `CKV_SECRET_13`,
        title: `Private Key`,
        description: `This check detects private keys by determining whether commonly specified key attributes are present in the analyzed string.

A private key is a sophisticated form of cryptography that allows a user to access their cryptocurrency. 

A private key is an integral aspect of bitcoin and altcoins, and its security makeup helps to protect a user from theft and unauthorized access to funds.


When dealing with cryptocurrency, a user is usually given a public address and a private key to send and receive coins or tokens. 

The public address is where the funds are deposited and received. But even though a user has tokens deposited into their address, they won’t be able to withdraw them without the unique private key.`,
        impact: `Hackers can crack secret passwords and use them to get access to sensitive data.`,
        howToFix: `It is suggested that you fix it in Git. First, rescind the revealed secret. After that, clear the git history. Finally, check the access logs for your application to confirm the key was not used during the compromised time.`,
        references: `https://www.investopedia.com/terms/p/private-key.asp#:~:text=A%20private%20key%20is%20a,and%20unauthorized%20access%20to%20funds.

https://www.techtarget.com/searchsecurity/definition/private-key`,
        group: ``,
    },
    {
        id: `CKV_SECRET_14`,
        title: `Slack Token`,
        description: `Slack API tokens can be created for both members and bot users. For added security, it is recommended to rotate these tokens periodically. Slack will automatically revoke old tokens if they remain unused for long periods. Access tokens are the keys to the Slack platform. Tokens tie together all the scopes and permissions your app has obtained, allowing it to read, write, and interact. There are multiple types of access tokens available. The token types are suited for different functionality, and certain scopes are unique to a particular token type. There are multiple types of tokens available few of them are listed below Bot tokens User tokens App-level tokens Configuration tokens`,
        impact: `A hacker can produce slack tokens for both members and bot users.`,
        howToFix: `We recommend you never share tokens with other users or applications.`,
        references: `https://slack.com/intl/en-in/help/articles/215770388-Create-and-regenerate-API-tokens`,
        group: ``,
    },
    {
        id: `CKV_SECRET_15`,
        title: `SoftLayer Credentials`,
        description: `SoftLayer Technologies, Inc. (now IBM Cloud) was a dedicated server, managed hosting, and cloud computing provider, founded in 2005 and acquired by IBM in 2013. SoftLayer initially specialized in hosting workloads for gaming companies and startups but shifted focus to enterprise workloads after its acquisition.`,
        impact: `Hackers can get access to sensitive data by cracking softlayer credentials.`,
        howToFix: `It is suggested that you fix it in Git. First, rescind the revealed secret. After that, clear the git history. Finally, examine IBM Cloud logs to check that the key was not used during the compromised time.`,
        references: `https://docs.sciencelogic.com/8-14-2/Content/Web_Vendor_Specific_Monitoring/SoftLayer/softlayer_configure_monitoring.htm?TocPath=PowerPacks%7CSoftLayer%3A%20Cloud%20(Beta)%7CConfiguring%20SoftLayer%20Monitoring%7C_____1`,
        group: ``,
    },
    {
        id: `CKV_SECRET_16`,
        title: `Exposure of Square OAuth Secret Key`,
        description: `The Square OAuth API uses the OAuth 2 protocol to get permission from the owner of the seller account to manage specific types of resources in that account. You can use Square APIs to manage resources on behalf of sellers. The OAuth API lets you request specific permissions from Square sellers to manage their resources and get OAuth tokens to call the Square APIs on their behalf. Using the access token and refresh token you receive using OAuth, you can build applications that integrate with Square.`,
        impact: `Square OAutho Secret can be cracked by a hacker, allowing them access to sensitive data.`,
        howToFix: `It is suggested that you fix it in Git. Revokes an access token obtained through the OAuth method. If an account possesses more than one OAuth access token for your application, regardless of which token you supply, this endpoint revokes all of them. When an OAuth access token is removed, all active subscriptions linked with that token are instantly terminated. On the OAuth page in the developer dashboard, replace APPLICATION SECRET with the application secret.`,
        references: `https://developer.squareup.com/docs/oauth-api/overview`,
        group: ``,
    },
    {
        id: `CKV_SECRET_17`,
        title: `Stripe Access Key`,
        description: `Stripe authenticates your API requests using your account’s API keys. If you do not include your key when making an API request or use one that is incorrect or outdated, Stripe returns an error.

Secret API keys should be kept confidential and only stored on your servers. Your account’s secret API key can perform any API request to Stripe without restriction.`,
        impact: `The account's secret API key is unrestricted in its ability to make any API request to Stripe.`,
        howToFix: `Secret You must keep your secret API keys confidential and only store them on your servers. You must not share your secret API key with any third parties. Your account’s secret API key can perform any API request to Stripe without restriction. If Stripe believes that your secret API key has been compromised, we may cancel and reissue it, potentially resulting in an interruption to your Stripe services.`,
        references: `https://stripe.com/docs/keys`,
        group: ``,
    },
    {
        id: `CKV_SECRET_18`,
        title: `Twilio API Key`,
        description: `Twilio Access Tokens are short-lived tokens that you can use to authenticate Twilio Client SDKs like Voice, Conversations, Sync, and Video. You create them on your server to verify a client’s identity and grant access to client API features. All tokens have a limited lifetime, configurable up to 24 hours. However, a best practice is to generate Access Tokens for the shortest amount of time feasible for your application.`,
        impact: `Twilio Api Key may be cracked and used to authenticate Twilio Client SDKs such as Voice, Conversations, Sync, and Video.`,
        howToFix: `We recommend following the standard URI specification and avoiding the following reserved characters

! * ' ( ) ; : @ & = + $ , / ? % # [ ] 

for values such as identity and friendly name in Twilio API key.`,
        references: `https://www.twilio.com/docs/iam/keys/api-key`,
        group: ``,
    },
    {
        id: `CKV_SECRET_19`,
        title: `Detection of High Entropy Strings Indicating Potential Secret Leakage`,
        description: `Hex high string calculates entropy levels using a Shannon Entropy calculator. The entropy levels of keys are important, as the more or less information required to determine unknown key variables can alter how difficult it is to crack. If a high-entropy string is detected, the string is printed to the screen.

This check scans the branch and evaluates the Shannon entropy for both the hexadecimal character set for every blob of text.`,
        impact: `Data leakage will occur if the branch is not scanned and the Shannon entropy for both the hexadecimal character set for each blob of text is not evaluated.`,
        howToFix: `It is suggested that you fix it in Git. To begin, determine which services were impacted and then consult the associated API documentation to discover how to revoke and rotate the secret. After that, clear the git history. Finally, review any relevant access logs to check that the key was not used during the compromised time.`,
        references: `https://github.com/Yelp/detect-secrets/blob/master/detect_secrets/plugins/high_entropy_strings.py`,
        group: ``,
    },
    {
        id: `GoMisconfiguredInterfaceBinding`,
        title: `Misconfigured Interface Binding`,
        description: `Binding to all network interfaces can potentially open up a service to traffic on unintended interfaces, that may not be properly documented or secured. This plugin test looks for a string pattern “0.0.0.0” that may indicate a hardcoded binding to all network interfaces.`,
        impact: `The clustered setup of Apache MXNet allows users to specify which IP address and port the scheduler will listen on via the DMLC_PS_ROOT_URI and DMLC_PS_ROOT_PORT env variables. In versions older than 1.0.0, however, the MXNet framework will listen on 0.0.0.0 rather than user specified DMLC_PS_ROOT_URI once a scheduler node is initialized. This exposes the instance running MXNet to any attackers reachable via the interface they didn't expect to be listening on. For example: If a user wants to run a clustered setup locally, they may specify to run on 127.0.0.1. But since MXNet will listen on 0.0.0.0, it makes the port accessible on all network interfaces.`,
        howToFix: `Avoid listening on all interfaces by default.
 std::string hostname = node.hostname.empty() ? "*" : node.hostname; 
 std::string addr = local ? "ipc:///tmp/" : "tcp://" + hostname + ":";`,
        references: `https://securego.io/docs/rules/g102.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoUnsafeblock`,
        title: `Unsafe block`,
        description: `Using the unsafe package in Go gives you low-level memory management and many of the strength of the C language but also gives flexibility to the attacker of your application. The pointer arithmetic is one of the examples from the unsafe package which can be used for data leak, memory corruption or even execution of attackers own script.Also, you should keep in mind that the "unsafe" package is not protected by Go 1 compatibility guidelines.`,
        impact: `Package unsafe contains operations that step around the type safety of Go programs.Packages that import unsafe may be non-portable and are not protected by the Go 1 compatibility guidelines.`,
        howToFix: `Use of unsafe calls should be audited to prevent DOS attacks or craches during the run time.`,
        references: `https://pkg.go.dev/unsafe`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoMisconfiguredErrorsCheck`,
        title: `Misconfigured Errors Check`,
        description: `A really useful feature of Golang is the ability to return a tuple of a result and an error value from a function. There is an unspoken rule in Golang that the result of a function is unsafe until you make check the error value. Many security exploits can be performed when the error value is not checked.`,
        impact: `If you have written any Go code you have probably encountered the built-in error type. Go code uses error values to indicate an abnormal state. For example, the os.Open function returns a non-nil error value when it fails to open a file.A caller passing a negative argument to Sqrt receives a non-nil error value (whose concrete representation is an errors.errorString value). The caller can access the error string (“math: square root of…“) by calling the error’s Error method, or by just printing it.`,
        howToFix: `The fmt package formats an error value by calling its Error() string method.It is the error implementation’s responsibility to summarize the context. The error returned by os.Open formats as “open /etc/passwd: permission denied,” not just “permission denied.” The error returned by our Sqrt is missing information about the invalid argument.To add that information, a useful function is the fmt package’s Errorf. It formats a string according to Printf’s rules and returns it as an error created by errors.New.`,
        references: `https://securego.io/docs/rules/g104.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoMisconfiguredSSHInsecureIgnoreHostKey`,
        title: `Misconfigured SSH Insecure Ignore HostKey`,
        description: `Audit the use of ssh.InsecureIgnoreHostKey.InsecureIgnoreHostKey is used to accept any host key. It should not be used for production code. Go team provided the "knownhosts" subpackage in their crypto SSH package.Using new with a known_hosts file a code can be written more \`efficiently and securely.`,
        impact: `Performing a key exchange will preserve the integrity of the information sent between two entities, but this will not guarantee that the entities are who they claim they are. This may enable an attacker to impersonate an actor by modifying traffic between the two entities. Typically, this involves a victim client that contacts a malicious server that is impersonating a trusted server. If the client skips authentication or ignores an authentication failure, the malicious server may request authentication information from the user. The malicious server can then use this authentication information to log in to the trusted server using the victim's credentials, sniff traffic between the victim and trusted server, etc.`,
        howToFix: `Audit the use of ssh.InsecureIgnoreHostKey.
 Ensure that proper authentication is included in the system design. 
 Understand and properly implement all checks necessary to ensure the identity of entities involved in encrypted communications.`,
        references: `https://cyruslab.net/2020/10/23/golang-how-to-write-ssh-hostkeycallback/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoIntegerOverflow`,
        title: `Integer Overflow`,
        description: `Potential Integer overflow made by strconv.Atoi result conversion to int16/32.The strconv.Atoi function parses an int - a machine dependent integer type, which, for 64-bit targets will be int64. There are places throughout the codebase where the result returned from strconv.Atoi is later converted to a smaller type: int16 or int32. This may overflow with a certain input.`,
        impact: `In this case the result returned from strconv.Atoi is later converted to a smaller type: int16 or int32. This may overflow with a certain input.`,
        howToFix: `it's highly recommended to use a proper go function to avoid this.`,
        references: `https://golangexample.com/go-library-for-safe-type-conversion-to-prevent-integer-overflow/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `GoMisconfiguredDirectoryCreationPermissions`,
        title: `Misconfigured Directory Creation Permissions`,
        description: `Misconfigured directory permissions that allows attackers to modify/alter the content`,
        impact: `When the directory is created with insufficient permissions, this will allow attackers to access sensitive areas of your application, making it easy for the threat actors to (create and alter) directories.`,
        howToFix: `Do not use insufficient file permissions when creating a directory. Directory permission should be 0750 or less while making it.
 The architecture needs to access and modify attributes for files to only those users who require those actions.
 Compartmentalize the system to have "safe" locations/paths. Do not allow sensitive data to go outside the trusted boundary, and always be careful when interfacing with a compartment outside the safe location/path.`,
        references: `https://cwe.mitre.org/data/definitions/732.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoMisconfiguredPermissionsCHMOD`,
        title: `Misconfigured Permissions CHMOD`,
        description: `During installation, installed file permissions are set to allow anyone to modify those files.`,
        impact: `An attacker can access the file and perhaps have write access to it to establish malicious connection aka reverse shell, bind shell with the system, a chmod command should be carefully investigated to make sure the file that gets created won't be abused by insider or external attack vectors`,
        howToFix: `Do not use poor file permissions for a file with chmod. Use file permimssion 0600 or less.`,
        references: `https://cwe.mitre.org/data/definitions/732.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoTempFileOnAPredictablePath`,
        title: `TempFile On APredictablePath`,
        description: `During installation, installed file permissions are set to allow anyone to modify those files.`,
        impact: `files that get created on a predictable path are easy to find by attackers.
 if the attacker got initial access to the system using the application, they would be able to read the content of the temporary files along with the ability to change the content and make the application follow predefined malicious instructions to conduct post-exploitation attacks.`,
        howToFix: `It's recommended not to use predictable paths when creating temporary files, such as temp directories`,
        references: `https://softwareengineering.stackexchange.com/questions/314796/should-temporary-files-be-saved-to-tmp-or-the-current-working-directory`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `GoMisconfiguredFileCreationPermissions`,
        title: `Misconfigured File Creation Permissions`,
        description: ``,
        impact: `Architects and designers should rely on the principle of least privilege to decide the appropriate time to use privileges and the time to drop privileges.`,
        howToFix: `DO not use Poor file permissions when writing to a new file. Expected permission is 0600 or less for writing in a new file. The architecture needs to access and modify attributes for files to only those users who require those actions. Compartmentalize the system to have "safe" areas where trust boundaries can be unambiguously drawn. Do not allow sensitive data to go outside of the trust boundary, and always be careful when interfacing with a compartment outside of the safe area. Ensure that appropriate compartmentalization is built into the system design, and the compartmentalization allows for and reinforces privilege separation functionality.`,
        references: `https://medium.com/nestedif/vulnerability-disclosure-improper-filesystem-permission-misconfigured-acls-zoho-r-a-p-56e195464b51`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `WEAK_HASH_ALGORITHM`,
        title: `WEAK HASH ALGORITHM`,
        description: `The product uses an algorithm that produces a digest (output value) that does not meet security expectations for a hash function that allows an adversary to reasonably determine the original input (preimage attack), find another input that can produce the same hash (2nd preimage attack), or find multiple inputs that evaluate to the same hash (birthday attack).`,
        impact: `SHA-1 algorithm is not collision-resistant.DNS product uses a weak hash (CRC32 or SHA-1) of the query name, allowing attacker to forge responses by computing domain names with the same hash.blogging product uses MD5-based algorithm for passwords.forging of certificate signatures using SHA-1 collisions.`,
        howToFix: `Use an adaptive hash function that can be configured to change the amount of computational effort needed to compute the hash, such as the number of iterations ("stretching") or the amount of memory required. Some hash functions perform salting automatically. These functions can significantly increase the overhead for a brute force attack compared to intentionally-fast functions such as MD5. For example, rainbow table attacks can become infeasible due to the high computing overhead. Finally, since computing power gets faster and cheaper over time, the technique can be reconfigured to increase the workload without forcing an entire replacement of the algorithm in use.`,
        references: `https://knowledge-base.offensive360.com/WeakHashingConfiguration/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `py_pickle`,
        title: `Use of pickle module`,
        description: `The pickle module in Python is used for serializing and deserializing objects, allowing data to be easily stored, transmitted, and reconstructed. It converts Python objects into byte streams and vice versa, enabling data persistence and object state preservation.`,
        impact: `The use of the pickle module presents a security risk because it can execute arbitrary code during the deserialization process. An attacker can craft a malicious payload and exploit this vulnerability to compromise the application or the underlying system.`,
        howToFix: `To mitigate the security risks associated with the pickle module, consider using safer alternatives for object serialization and deserialization, such as the json module for handling JSON data, or msgpack for a more compact binary format. These alternatives do not support code execution during deserialization, reducing the potential attack surface. Additionally, validate and sanitize all incoming data to ensure that only trusted sources are processed.`,
        references: `https://docs.python.org/3/library/pickle.html`,
        group: `Injection`,
    },
    {
        id: `WPautomaticUpdateDisabled`,
        title: `WP Automatic Update Disabled`,
        description: `Disabling WordPress automatic updates can create security vulnerabilities in a website. WordPress releases security updates regularly to address new security threats and vulnerabilities discovered. If automatic updates are disabled, websites can become vulnerable to attacks, and it is often difficult for website owners to keep track of when updates are needed.`,
        impact: `Disabling automatic updates in WordPress can lead to serious security vulnerabilities on a website. Hackers can exploit known vulnerabilities in outdated versions of WordPress, themes, and plugins to gain unauthorized access to the website. This can result in various issues such as defacement, data theft, or malware injection, leading to loss of sensitive information, legal issues, and reputational damage. Furthermore, manual updates can be neglected or forgotten, leaving websites vulnerable for extended periods.`,
        howToFix: `It is recommended to enable automatic updates for WordPress core, themes, and plugins. Automatic updates ensure that websites are always up-to-date with the latest security patches, reducing the risk of security breaches. If manual updates are preferred, it is essential to ensure that updates are installed as soon as possible after release.`,
        references: `https://wordpress.org/documentation/article/configuring-automatic-background-updates/`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `WEAK_SSL`,
        title: `WEAK SSL`,
        description: `Look for bad TLS connection settings.This weakness is caused during implementation of an architectural security tactic.When the software uses certificate pinning, the developer might not properly validate all relevant components of the certificate before pinning the certificate. This can make it difficult or expensive to test after the pinning is complete.`,
        impact: `Verification function trusts certificate chains in which the last certificate is self-signed.Web browser uses a TLS-related function incorrectly, preventing it from verifying that a server's certificate is signed by a trusted certification authority (CA).If the certificate is self-signed, there was no external authority that could prove the identity of the host. The program could be communicating with a different system that is spoofing the host, e.g. by poisoning the DNS cache or using an Adversary-in-the-Middle (AITM) attack to modify the traffic from server to client.`,
        howToFix: `If the TLS MinVersion too low,It can be fixed by either specifying the MinVersion parameter in TLSConfig, or by disabling the reporting of the issue if you believe it is not a true error.`,
        references: `https://knowledge-base.offensive360.com/WeakCryptoKeyLength/`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `ImplicitMemoryAliasing`,
        title: `Implicit Memory Aliasing`,
        description: `In case you dereference sequentially within the loop and you know for sure that nothing is leaking the pointer, you might get away with ignoring this check. However the job of the linter is precisely to report code patterns that could cause issues, so it's a good idea to fix it.`,
        impact: `The warning Implicit memory aliasing in for loop means, in short, that you are taking the address of a loop variable.It might lead to unintended behaviour`,
        howToFix: `A for loop in Go will only use one iterator variable whose value gets updated in each loop operation. Since it’s just a single variable, its address is constant and doesn’t change. If not used carefully, it might lead to unintended behaviour.`,
        references: `https://husni.dev/beware-of-implicit-memory-aliasing-in-go-foor-loop/`,
        group: `BrokenAccessControl`,
    },
    {
        id: `Ruby_json_html_escape`,
        title: `Disabled JSON HTML Escape for JSON output`,
        description: `Escaping HTML source code is set to disable on a JSON output; this may lead to stored cross-site scripting vulnerability as the HTML output is returned without escaping it`,
        impact: `Unfiltered HTML may lead to executing Javascript and HTML source code in the returned response and allow the attacker to have a stored cross-site scripting vulnerability on the system which may lead to stealing user's data`,
        howToFix: `it's recommended to enable scaping HTML on a JSON output by seting escape_html_entities_in_json to true`,
        references: `https://rubydoc.info/docs/rails/ActiveSupport/JSON/Encoding.escape_html_entities_in_json=`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `Ruby_SSL_verfication_bypass`,
        title: `SSL verification is disabled`,
        description: `verify_mode is set to SSL_VERIFY_NONE which's means the SSL verfication can be bypassed`,
        impact: `Attackers can bypass authentication and have unauthorized access to the application/system`,
        howToFix: `It's highly recommended to enable SSL verification and never set it to SSL_VERIFY_NONE`,
        references: `https://www.ibm.com/docs/en/ztpf/1.1.0.14?topic=functions-ssl-set-verify`,
        group: `BrokenAccessControl`,
    },
    {
        id: `Ruby_template_injection`,
        title: `Template Injection`,
        description: `Template injection is detected from a user controlled input, which may lead to executing code on the web server`,
        impact: `Attackers can execute malicious code on the web application and have remote code execution capabilities on the web server, which may lead to a complete compromise of the web server`,
        howToFix: `Make sure the user input is being validated before accepting it on the server side`,
        references: `https://www.trustedsec.com/blog/rubyerb-template-injection/`,
        group: `Injection`,
    },
    {
        id: `ImproperInputValidation`,
        title: `Improper input validation`,
        description: `Improper input validation occurs when user-supplied data is not adequately checked, potentially enabling malicious actors to manipulate systems or access sensitive information`,
        impact: `Improper input validation can lead to unauthorized access, data breaches, and system compromise`,
        howToFix: `Ensure proper input validation to mitigate the risk of security vulnerabilities such as injection attacks and data manipulation`,
        references: `https://cwe.mitre.org/data/definitions/20.html`,
        group: `Injection`,
    },
    {
        id: `ImproperLimitationToRestrictedDirectory`,
        title: `Improper Limitation of a Pathname to a Restricted Directory`,
        description: `This vulnerability occurs when an application fails to properly restrict the access to files and directories, allowing attackers to navigate to unauthorized locations and access sensitive data`,
        impact: `Improper limitation of pathname can result in unauthorized access to sensitive files and directories, potentially leading to data breaches and system compromise`,
        howToFix: `Ensure proper restriction of pathname to authorized directories to prevent unauthorized access and potential data leakage`,
        references: `https://cwe.mitre.org/data/definitions/22.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `ImproperControlOfCodeGeneration`,
        title: `Improper Control of Generation of Code ('Code Injection')`,
        description: `Code injection vulnerabilities arise when user-supplied data is executed as code without proper validation or sanitization, allowing attackers to execute arbitrary commands or inject malicious code into the application`,
        impact: `Failure to control the generation of code can lead to the execution of arbitrary commands or code within the application's context, potentially resulting in unauthorized access, data loss, or system compromise`,
        howToFix: `Implement proper input validation and validation of user-controlled data to prevent code injection attacks, ensuring the security of the application's execution environment`,
        references: `https://cwe.mitre.org/data/definitions/94.html`,
        group: `Injection`,
    },
    {
        id: `ImproperRestrictionOfOperations`,
        title: `Improper Restriction of Operations within the Bounds of a Memory Buffer`,
        description: `Buffer overflow vulnerabilities occur when a program writes data beyond the boundaries of allocated memory buffers, allowing attackers to overwrite adjacent memory locations and manipulate program behavior`,
        impact: `Failure to restrict operations within memory bounds can lead to buffer overflow attacks, potentially resulting in arbitrary code execution, system crashes, or unauthorized access to sensitive data`,
        howToFix: `Implement proper bounds checking and validation of input data to prevent buffer overflow vulnerabilities, ensuring the integrity and security of the application's memory space`,
        references: `https://cwe.mitre.org/data/definitions/119.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `OutOfBoundsRead`,
        title: `Out of bounds Read`,
        description: `Out of bounds read vulnerabilities occur when a program accesses memory locations outside the bounds of an allocated buffer, allowing attackers to read unintended memory contents or trigger undefined behavior`,
        impact: `Out of bounds read vulnerabilities can lead to the exposure of sensitive data or the execution of arbitrary code, potentially resulting in information disclosure, system crashes, or remote code execution`,
        howToFix: `Implement proper boundary checks and validation of array indices to prevent out-of-bounds read vulnerabilities, safeguarding against unintended memory access and potential security exploits`,
        references: `https://cwe.mitre.org/data/definitions/125.html`,
        group: `Injection`,
    },
    {
        id: `IntegerOverflowOrWraparound`,
        title: `Integer Overflow or Wraparound`,
        description: `Integer overflow or wraparound vulnerabilities occur when arithmetic operations exceed the maximum representable value for a data type, leading to unintended behavior or security vulnerabilities`,
        impact: `Integer overflow or wraparound vulnerabilities can lead to unexpected behavior, potentially resulting in incorrect calculations, system crashes, or security vulnerabilities such as buffer overflows or code execution`,
        howToFix: `Implement proper validation and range checks on integer inputs to prevent integer overflow or wraparound vulnerabilities, ensuring the integrity of arithmetic operations and avoiding potential security exploits`,
        references: `https://cwe.mitre.org/data/definitions/190.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ImproperPrivilegeManagement`,
        title: `Improper Privilege Management`,
        description: `Improper privilege management occurs when an application fails to properly enforce access control policies, allowing users to gain privileges or access resources beyond their authorized level, posing security risks`,
        impact: `Improper privilege management can result in unauthorized access to sensitive data or functionalities, potentially leading to data breaches, unauthorized actions, or system compromise`,
        howToFix: `Implement strong access control mechanisms, such as role-based access control (RBAC) or least privilege principle, to ensure proper privilege management and limit user access to only necessary resources and functionalities`,
        references: `https://cwe.mitre.org/data/definitions/269.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `ImproperAuthentication`,
        title: `Improper Authentication`,
        description: `Improper authentication occurs when an application fails to adequately verify the identity of users, allowing attackers to bypass authentication controls and gain unauthorized access`,
        impact: `Improper authentication can lead to unauthorized access to systems or sensitive data, potentially resulting in data breaches, identity theft, or other security incidents`,
        howToFix: `Implement strong authentication mechanisms, such as multi-factor authentication (MFA) and secure password storage, to ensure proper user authentication and protect against unauthorized access`,
        references: `https://cwe.mitre.org/data/definitions/287.html`,
        group: `Authentication`,
    },
    {
        id: `MissingAuthenticationForCriticalFunction`,
        title: `Missing Authentication for Critical Function`,
        description: `This vulnerability arises when critical functions within an application lack proper authentication controls, enabling unauthorized users to exploit these functionalities without proper authentication`,
        impact: `Missing authentication for critical functions can allow unauthorized users to access sensitive functionalities or perform privileged actions, leading to security breaches, data manipulation, or system compromise`,
        howToFix: `Ensure that all critical functions require proper authentication, employing strong authentication mechanisms to prevent unauthorized access and protect sensitive functionalities`,
        references: `https://cwe.mitre.org/data/definitions/306.html`,
        group: `Authentication`,
    },
    {
        id: `MissingEncryptionOfSensitiveData`,
        title: `Missing Encryption of Sensitive Data`,
        description: `This vulnerability occurs when sensitive data is stored or transmitted without adequate encryption measures, leaving it vulnerable to interception or unauthorized access by malicious actors`,
        impact: `Missing encryption of sensitive data can expose sensitive information to unauthorized access or interception, leading to data breaches, privacy violations, or identity theft`,
        howToFix: `Implement strong encryption algorithms and protocols to protect sensitive data both at rest and in transit, ensuring that all sensitive information is properly encrypted to prevent unauthorized access`,
        references: `https://cwe.mitre.org/data/definitions/311.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `CleartextStorageOfSensitiveInformation`,
        title: `Cleartext Storage of Sensitive Information`,
        description: `This vulnerability occurs when sensitive data is stored in plaintext form, making it easily readable and accessible to anyone who gains unauthorized access to the storage medium`,
        impact: `Storing sensitive information in cleartext can expose it to unauthorized access or theft, potentially leading to data breaches, privacy violations, or identity theft`,
        howToFix: `Utilize strong encryption methods to protect sensitive information, ensuring that data is stored in encrypted form rather than plaintext to prevent unauthorized access and mitigate the risk of data breaches`,
        references: `https://cwe.mitre.org/data/definitions/312.html`,
        group: `SensitiveDataExposure`,
    },
    {
        id: `ConcurrentExecutionRaceCondition`,
        title: `Concurrent Execution using Shared Resource with Improper Synchronization ('Race Condition')`,
        description: `This vulnerability arises when multiple threads or processes access a shared resource concurrently without proper synchronization, leading to unpredictable behavior or data corruption due to interleaved execution sequences`,
        impact: `Race conditions can lead to unpredictable outcomes or data corruption when multiple threads or processes access shared resources concurrently without proper synchronization, potentially resulting in system instability or security vulnerabilities`,
        howToFix: `Implement proper synchronization mechanisms, such as locks or semaphores, to ensure mutually exclusive access to shared resources and prevent race conditions, safeguarding against data corruption and unexpected behavior`,
        references: `https://cwe.mitre.org/data/definitions/362.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `UseAfterFree`,
        title: `Use After Free`,
        description: `This vulnerability arises when a program continues to use memory after it has been deallocated, allowing attackers to manipulate memory contents or execute arbitrary code by exploiting dangling references`,
        impact: `Use-after-free vulnerabilities occur when a program accesses memory that has been freed, potentially leading to the execution of arbitrary code, system crashes, or other security exploits`,
        howToFix: `Implement proper memory management techniques, such as nullifying pointers after freeing memory and avoiding dangling references, to prevent use-after-free vulnerabilities and mitigate the risk of arbitrary code execution or system crashes`,
        references: `https://cwe.mitre.org/data/definitions/416.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `UnrestrictedUpload`,
        title: `Unrestricted Upload of File with Dangerous Type`,
        description: `This vulnerability occurs when an application permits the upload of files with dangerous extensions, such as executable files or scripts, without proper validation, allowing attackers to upload and execute malicious code on the server`,
        impact: `Allowing unrestricted upload of files with dangerous types can lead to the execution of malicious code, server compromise, or other security breaches, posing a threat to system integrity and user data`,
        howToFix: `Implement strict file type validation and enforce restrictions on uploaded file extensions to prevent the upload of potentially dangerous file types, mitigating the risk of malicious file execution or server compromise`,
        references: `https://cwe.mitre.org/data/definitions/434.html`,
        group: `Injection`,
    },
    {
        id: `NullPointerDereference`,
        title: `NULL Pointer Dereference`,
        description: `This vulnerability arises when a program dereferences a NULL pointer, typically due to improper error handling or uninitialized pointer variables, resulting in memory access violations and potential security risks`,
        impact: `NULL pointer dereference vulnerabilities occur when a program attempts to access or manipulate memory using a NULL pointer, leading to crashes, unexpected behavior, or potential security exploits`,
        howToFix: `Implement robust error handling mechanisms to gracefully handle NULL pointers and avoid dereferencing them, preventing NULL pointer dereference vulnerabilities and ensuring system stability`,
        references: `https://cwe.mitre.org/data/definitions/476.html`,
        group: `SecurityMisconfiguration`,
    },
    {
        id: `OutOfBoundsWrite`,
        title: `Out-of-bounds Write`,
        description: `Out-of-bounds write vulnerabilities occur when a program writes data beyond the boundaries of allocated memory buffers, allowing attackers to overwrite adjacent memory locations and manipulate program behavior`,
        impact: `Out-of-bounds write vulnerabilities can lead to the modification of memory locations outside the bounds of allocated buffers, potentially resulting in data corruption, system crashes, or remote code execution`,
        howToFix: `Implement proper bounds checking and validation of array indices to prevent out-of-bounds write vulnerabilities, ensuring the integrity and security of the application's memory space`,
        references: `https://cwe.mitre.org/data/definitions/787.html`,
        group: `Injection`,
    },
    {
        id: `MissingAuthorization`,
        title: `Missing Authorization`,
        description: `This vulnerability occurs when an application fails to enforce proper access control policies, allowing unauthorized users to access sensitive resources or perform privileged actions without proper authorization`,
        impact: `Missing authorization can result in unauthorized access to sensitive resources or functionalities, potentially leading to data breaches, unauthorized actions, or system compromise`,
        howToFix: `Implement robust authorization mechanisms to control access to sensitive resources and functionalities, ensuring that only authorized users or entities are granted access`,
        references: `https://cwe.mitre.org/data/definitions/862.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `IncorrectAuthorization`,
        title: `Incorrect Authorization`,
        description: `Incorrect authorization occurs when an application erroneously grants access to resources or functionalities to users who should not have such privileges, bypassing proper access control measures.`,
        impact: `Incorrect authorization can lead to unauthorized access to resources or functionalities, potentially resulting in data breaches, unauthorized actions, or system compromise.`,
        howToFix: `Ensure accurate and granular authorization mechanisms are implemented to properly control access to resources based on user roles and privileges, preventing unauthorized access and maintaining data security.`,
        references: `https://cwe.mitre.org/data/definitions/863.html`,
        group: `BrokenAccessControl`,
    },
    {
        id: `InsertionOfSensitiveInformationIntoLogFile`,
        title: `Insertion of Sensitive Information into Log File`,
        description: `This vulnerability occurs when an application logs sensitive information without proper protection. Sensitive data stored in log files can be accessed by unauthorized parties, compromising the confidentiality and integrity of the information.`,
        impact: `Insertion of sensitive information into log files can lead to exposure of confidential data to unauthorized users or attackers. This can result in privacy violations, identity theft, financial loss, or reputational damage.`,
        howToFix: `Ensure that sensitive information such as passwords, credit card numbers, or personally identifiable information (PII) are not logged. Implement proper sanitization and filtering mechanisms to prevent sensitive data from being written to log files.`,
        references: `https://cwe.mitre.org/data/definitions/532.html`,
        group: `SensitiveDataExposure`,
    },
];

const KB_BY_ID = new Map<string, KBEntry>();
const KB_BY_NORM = new Map<string, KBEntry>();

for (const e of KB_DATA) {
    KB_BY_ID.set(e.id.toLowerCase(), e);
    KB_BY_NORM.set(e.id.toLowerCase().replace(/[-_\s]/g, ''), e);
    KB_BY_NORM.set(e.title.toLowerCase().replace(/[^a-z0-9]/g, ''), e);
}

export function lookupKB(type: string): KBEntry | null {
    if (!type) { return null; }
    const l = type.toLowerCase().trim();
    if (KB_BY_ID.has(l)) { return KB_BY_ID.get(l)!; }
    const n = l.replace(/[-_\s]/g, '');
    if (KB_BY_NORM.has(n)) { return KB_BY_NORM.get(n)!; }
    return KB_BY_NORM.get(l.replace(/[^a-z0-9]/g, '')) || null;
}

export { KB_DATA };