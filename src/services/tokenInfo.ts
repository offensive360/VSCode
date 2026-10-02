/**
 * Reads the expiry date of an O360 access token locally and explains, in plain words, why a
 * request was refused. Access tokens are JWTs whose payload carries an "exp" claim (seconds since
 * the epoch). Nothing is verified here and nothing leaves the editor: the server stays the only
 * authority. This module has no dependency on the vscode API so it can be unit-tested with node.
 */

const NEW_TOKEN =
    'Generate a new token in the O360 console under Settings → Access Tokens and paste it in ' +
    'the O360 SAST settings (File → Preferences → Settings → "O360: Access Token").';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Expiry of the token, or null when it is not a JWT or carries no "exp" claim. */
export function tokenExpiry(token: string | undefined | null): Date | null {
    if (!token) { return null; }
    const parts = token.trim().split('.');
    if (parts.length !== 3) { return null; }
    try {
        const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
        const exp = Number(payload?.exp);
        return Number.isFinite(exp) && exp > 0 ? new Date(exp * 1000) : null;
    } catch {
        return null;
    }
}

export function isTokenExpired(token: string | undefined | null, now: Date = new Date()): boolean {
    const exp = tokenExpiry(token);
    return exp !== null && exp.getTime() < now.getTime();
}

export function formatDate(date: Date): string {
    return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

/** The server answered, but refused the request. */
export function rejectedMessage(status: number, body: unknown, token: string | undefined | null, now: Date = new Date()): string {
    const exp = tokenExpiry(token);
    const text = typeof body === 'string' ? body : JSON.stringify(body ?? '');
    if ((status === 401 || status === 403) && /LICENSE_/i.test(text)) {
        return `The O360 server is refusing requests because its licence is not active (HTTP ${status}). Please contact your O360 administrator.`;
    }
    if (status === 401 && exp && exp.getTime() < now.getTime()) {
        return `Your access token expired on ${formatDate(exp)}. ${NEW_TOKEN}`;
    }
    if (status === 401) {
        return 'The server did not accept this access token (HTTP 401). It was deleted or revoked in the O360 console, ' +
            'was copied incompletely, or was generated on a different O360 server.' +
            (exp ? ` The token itself is dated valid until ${formatDate(exp)}.` : '') + ` ${NEW_TOKEN}`;
    }
    if (status === 403) {
        return 'The server refused this request (HTTP 403). Use an access token generated under Settings → Access Tokens ' +
            'in the O360 console; a login session cannot be used here.';
    }
    return `The server returned HTTP ${status}. Check the endpoint and the access token.`;
}

const CERT_CODES = new Set([
    'DEPTH_ZERO_SELF_SIGNED_CERT', 'SELF_SIGNED_CERT_IN_CHAIN', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    'UNABLE_TO_GET_ISSUER_CERT', 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY', 'CERT_HAS_EXPIRED',
    'ERR_TLS_CERT_ALTNAME_INVALID', 'CERT_UNTRUSTED',
]);

export function isCertificateError(err: any): boolean {
    const code = err?.code || err?.cause?.code;
    if (code && CERT_CODES.has(code)) { return true; }
    return /self[- ]signed certificate|unable to verify the first certificate|certificate has expired/i.test(String(err?.message || ''));
}

/**
 * No usable answer from the server. Returns a plain-language message for the causes we can name
 * (untrusted certificate, unknown host, refused connection, timeout) and null for anything else.
 */
export function failureMessage(err: any, allowSelfSigned: boolean): string | null {
    const code = err?.code || err?.cause?.code;
    if (isCertificateError(err)) {
        return allowSelfSigned
            ? `A secure connection could not be established with the O360 server (${err?.message || 'TLS error'}). Check the endpoint and your network proxy.`
            : 'The certificate of the O360 server is not trusted. This is normal for an on-premise instance with a ' +
              'self-signed or internal certificate. Enable the setting "O360: Allow Self Signed Certs" and scan again.';
    }
    if (code === 'ENOTFOUND' || code === 'EAI_AGAIN') {
        return 'The server name could not be resolved. Check the endpoint and your network or VPN connection.';
    }
    if (code === 'ECONNREFUSED') {
        return 'The connection was refused. Check the endpoint (address and port) and your network or VPN connection.';
    }
    if (code === 'ETIMEDOUT' || code === 'ECONNABORTED') {
        return 'The server did not answer in time. Check the endpoint and your network or VPN connection.';
    }
    return null;
}

/** No HTTP answer at all from the endpoint, for a cause failureMessage() could not name. */
export function unreachableMessage(endpoint: string, err: any): string {
    const detail = err?.code || err?.cause?.code || err?.message || 'no answer';
    return `The O360 server at ${endpoint} could not be reached (${detail}). ` +
        'Check the endpoint and your network, VPN or proxy connection, then scan again.';
}
