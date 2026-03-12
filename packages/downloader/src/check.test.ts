import assert from 'node:assert/strict';
import { afterEach, describe, it, mock } from 'node:test';
import { checkUrl, checkUrls } from './check.js';

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function mockFetch(
  handler: (url: string | URL | Request, init?: RequestInit) => Promise<Response>
) {
  globalThis.fetch = mock.fn(handler);
}

describe('checkUrl', () => {
  it('returns true for reachable URL', async () => {
    mockFetch(async () => new Response(null, { status: 200 }));
    assert.equal(await checkUrl('https://example.com/coin.jpg'), true);
  });

  it('returns false for 404', async () => {
    mockFetch(async () => new Response(null, { status: 404 }));
    assert.equal(await checkUrl('https://example.com/missing.jpg'), false);
  });

  it('returns false for network error', async () => {
    mockFetch(async () => {
      throw new Error('ECONNREFUSED');
    });
    assert.equal(await checkUrl('https://example.com/down.jpg'), false);
  });
});

describe('checkUrls', () => {
  it('checks all URLs and returns results', async () => {
    mockFetch(async () => new Response(null, { status: 200 }));
    const results = await checkUrls(['https://example.com/de.jpg', 'https://example.com/fr.jpg']);
    assert.equal(results.length, 2);
    assert.ok(results.every((r) => r === true));
  });

  it('handles mix of ok and failed URLs', async () => {
    mockFetch(async (_url) => {
      const url = String(_url);
      return url.includes('missing')
        ? new Response(null, { status: 404 })
        : new Response(null, { status: 200 });
    });
    const results = await checkUrls([
      'https://example.com/de.jpg',
      'https://example.com/missing.jpg',
    ]);
    assert.equal(results.filter((r) => r).length, 1);
    assert.equal(results.filter((r) => !r).length, 1);
  });

  it('returns empty array for empty input', async () => {
    assert.deepEqual(await checkUrls([]), []);
  });

  it('calls onProgress for each URL', async () => {
    mockFetch(async () => new Response(null, { status: 200 }));
    const progress: { done: number; total: number }[] = [];
    await checkUrls(
      ['https://example.com/de.jpg', 'https://example.com/fr.jpg', 'https://example.com/it.jpg'],
      {
        onProgress: (done, total) => {
          progress.push({ done, total });
        },
      }
    );
    assert.equal(progress.length, 3);
    assert.ok(progress.every((p) => p.total === 3));
    assert.deepEqual(progress.map((p) => p.done).sort(), [1, 2, 3]);
  });

  it('respects concurrency limit', async () => {
    let concurrent = 0;
    let maxConcurrent = 0;
    mockFetch(async () => {
      concurrent++;
      maxConcurrent = Math.max(maxConcurrent, concurrent);
      await new Promise((r) => setTimeout(r, 10));
      concurrent--;
      return new Response(null, { status: 200 });
    });
    const urls = Array.from({ length: 10 }, (_, i) => `https://example.com/${i}.jpg`);
    await checkUrls(urls, { concurrency: 3 });
    assert.ok(maxConcurrent <= 3, `max concurrent was ${maxConcurrent}`);
  });
});
