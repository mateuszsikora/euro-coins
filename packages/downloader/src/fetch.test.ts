import assert from 'node:assert/strict';
import { afterEach, describe, it, mock } from 'node:test';
import { checkImage, fetchImage } from './fetch.js';

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function mockFetch(
  handler: (url: string | URL | Request, init?: RequestInit) => Promise<Response>
) {
  globalThis.fetch = mock.fn(handler);
}

function binaryResponse(content: string, status = 200) {
  return new Response(content, { status });
}

describe('fetchImage', () => {
  it('returns ok with buffer on success', async () => {
    mockFetch(async () => binaryResponse('image-data'));
    const result = await fetchImage('https://example.com/coin.jpg');
    assert.equal(result.ok, true);
    if (!result.ok) throw new Error('expected ok');
    assert.ok(Buffer.isBuffer(result.data));
    assert.equal(result.data.toString(), 'image-data');
  });

  it('returns error on HTTP 404', async () => {
    mockFetch(async () => binaryResponse('', 404));
    const result = await fetchImage('https://example.com/missing.jpg');
    assert.equal(result.ok, false);
    if (result.ok) throw new Error('expected not ok');
    assert.match(result.error.message, /404/);
  });

  it('returns error on HTTP 500', async () => {
    mockFetch(async () => binaryResponse('', 500));
    const result = await fetchImage('https://example.com/error.jpg');
    assert.equal(result.ok, false);
    if (result.ok) throw new Error('expected not ok');
    assert.match(result.error.message, /500/);
  });

  it('returns error on network failure', async () => {
    mockFetch(async () => {
      throw new Error('ECONNREFUSED');
    });
    const result = await fetchImage('https://example.com/coin.jpg');
    assert.equal(result.ok, false);
    if (result.ok) throw new Error('expected not ok');
    assert.match(result.error.message, /ECONNREFUSED/);
  });
});

describe('checkImage', () => {
  it('returns ok true on success', async () => {
    mockFetch(async () => new Response(null, { status: 200 }));
    const result = await checkImage('https://example.com/coin.jpg');
    assert.equal(result.ok, true);
  });

  it('returns ok false on HTTP 404', async () => {
    mockFetch(async () => new Response(null, { status: 404 }));
    const result = await checkImage('https://example.com/missing.jpg');
    assert.equal(result.ok, false);
    if (result.ok) throw new Error('expected not ok');
    assert.match(result.error.message, /404/);
  });

  it('returns ok false on network failure', async () => {
    mockFetch(async () => {
      throw new Error('DNS_RESOLUTION_FAILED');
    });
    const result = await checkImage('https://example.com/coin.jpg');
    assert.equal(result.ok, false);
    if (result.ok) throw new Error('expected not ok');
    assert.match(result.error.message, /DNS_RESOLUTION_FAILED/);
  });
});
