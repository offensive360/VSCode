// Plain node test of the token explanations (no vscode API needed). Run: npm run test:unit
const assert = require('assert');
const t = require('../out/tokenInfo.test-bundle.js');
const now = new Date('2026-10-02T09:00:00Z');
const jwt = (exp) => {
    const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
    return `${enc({ alg: 'HS256', typ: 'JWT' })}.${enc(exp === null ? { Id: '1' } : { Id: '1', role: 'External', exp })}.c2ln`;
};
const expired = jwt(Math.floor(new Date('2026-09-27T10:00:00Z').getTime() / 1000));
const valid = jwt(Math.floor(new Date('2031-03-17T10:00:00Z').getTime() / 1000));
let n = 0; const check = (name, fn) => { fn(); n++; console.log('ok   ' + name); };

check('expired token is recognised and explained with its date', () => {
    assert.strictEqual(t.isTokenExpired(expired, now), true);
    const m = t.rejectedMessage(401, '', expired, now);
    assert.ok(m.startsWith('Your access token expired on 27 Sep 2026.'), m);
    assert.ok(m.includes('Settings → Access Tokens'), m);
});
check('valid token refused by the server is not called expired', () => {
    assert.strictEqual(t.isTokenExpired(valid, now), false);
    const m = t.rejectedMessage(401, '', valid, now);
    assert.ok(m.startsWith('The server did not accept this access token (HTTP 401).'), m);
    assert.ok(m.includes('valid until 17 Mar 2031'), m);
});
check('malformed tokens never throw and carry no date', () => {
    for (const tok of [undefined, null, '', 'abc', 'a.b', 'a.b.c', 'a.!!!.c', jwt(null)]) {
        assert.strictEqual(t.tokenExpiry(tok), null);
        assert.strictEqual(t.isTokenExpired(tok, now), false);
    }
});
check('licence lock, 403 and other codes get their own explanation', () => {
    assert.ok(t.rejectedMessage(403, { error: 'LICENSE_REQUIRED' }, valid, now).includes('licence is not active'));
    assert.ok(t.rejectedMessage(403, '', valid, now).includes('HTTP 403'));
    assert.ok(t.rejectedMessage(418, '', valid, now).includes('HTTP 418'));
});
check('untrusted certificate points to the self-signed setting', () => {
    const err = Object.assign(new Error('self-signed certificate'), { code: 'DEPTH_ZERO_SELF_SIGNED_CERT' });
    assert.ok(t.failureMessage(err, false).includes('Allow Self Signed Certs'));
    assert.ok(!t.failureMessage(err, true).includes('Allow Self Signed Certs'));
});
check('connectivity errors are named, unknown errors are left alone', () => {
    assert.ok(t.failureMessage({ code: 'ENOTFOUND' }, false).includes('could not be resolved'));
    assert.ok(t.failureMessage({ code: 'ECONNREFUSED' }, false).includes('refused'));
    assert.strictEqual(t.failureMessage({ code: 'EPIPE' }, false), null);
});
check('unreachable server is reported with the endpoint and the cause', () => {
    const m = t.unreachableMessage('https://sast.company.local', { code: 'ECONNRESET' });
    assert.ok(m.includes('https://sast.company.local') && m.includes('ECONNRESET'), m);
    assert.ok(t.unreachableMessage('https://x', new Error('socket hang up')).includes('socket hang up'));
});
console.log(`${n} checks passed`);
