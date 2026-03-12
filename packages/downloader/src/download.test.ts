import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, it, mock } from 'node:test';
import type { CoinConfig } from '@euro-coins/source';
import { downloadAll, downloadOne } from './download.js';
import { coinMetadata } from './metadata.js';

const originalFetch = globalThis.fetch;
let testDir: string;

function mockFetch(
  handler: (url: string | URL | Request, init?: RequestInit) => Promise<Response>
) {
  globalThis.fetch = mock.fn(handler);
}

// 1x1 red PNG
const PNG_BYTES = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  'base64'
);

function mockFetchWithPng() {
  mockFetch(async () => new Response(PNG_BYTES, { status: 200 }));
}

function coin(country: string, url: string): CoinConfig {
  return {
    country: country as CoinConfig['country'],
    year: 2002,
    denomination: '2euro',
    type: 'regular',
    index: 0,
    url,
  };
}

beforeEach(async () => {
  testDir = join(tmpdir(), `downloader-test-${Date.now()}`);
  await mkdir(testDir, { recursive: true });
});

afterEach(async () => {
  globalThis.fetch = originalFetch;
  await rm(testDir, { recursive: true, force: true });
});

describe('downloadOne', () => {
  it('downloads and saves a JPEG', async () => {
    mockFetchWithPng();
    const c = coin('de', 'https://example.com/de.png');
    const entry = coinMetadata(c);
    const result = await downloadOne(c, entry, { output: testDir });
    assert.equal(result.status, 'downloaded');
    assert.ok(existsSync(join(testDir, entry.image)));
  });

  it('skips existing file', async () => {
    mockFetchWithPng();
    const c = coin('de', 'https://example.com/de.png');
    const entry = coinMetadata(c);
    await writeFile(join(testDir, entry.image), 'existing');
    const result = await downloadOne(c, entry, { output: testDir });
    assert.equal(result.status, 'skipped');
    const content = await readFile(join(testDir, entry.image), 'utf-8');
    assert.equal(content, 'existing');
  });

  it('re-downloads when forceRefresh is set', async () => {
    mockFetchWithPng();
    const c = coin('de', 'https://example.com/de.png');
    const entry = coinMetadata(c);
    await writeFile(join(testDir, entry.image), 'old');
    const result = await downloadOne(c, entry, { output: testDir, forceRefresh: true });
    assert.equal(result.status, 'downloaded');
    const content = await readFile(join(testDir, entry.image));
    assert.notEqual(content.toString(), 'old');
  });

  it('returns failed on fetch error', async () => {
    mockFetch(async () => new Response(null, { status: 404 }));
    const c = coin('de', 'https://example.com/missing.png');
    const entry = coinMetadata(c);
    const result = await downloadOne(c, entry, { output: testDir });
    assert.equal(result.status, 'failed');
    if (result.status === 'failed') {
      assert.match(result.error, /404/);
    }
  });
});

describe('downloadAll', () => {
  it('downloads all coins and writes metadata.json', async () => {
    mockFetchWithPng();
    const coins = [
      coin('de', 'https://example.com/de.png'),
      coin('fr', 'https://example.com/fr.png'),
    ];
    const result = await downloadAll(coins, { output: testDir });
    assert.equal(result.downloaded, 2);
    assert.equal(result.skipped, 0);
    assert.equal(result.failed.length, 0);
    assert.equal(result.metadata.length, 2);
    assert.ok(existsSync(join(testDir, 'metadata.json')));
  });

  it('skips existing files', async () => {
    mockFetchWithPng();
    const coins = [coin('de', 'https://example.com/de.png')];
    const entry = coinMetadata(coins[0]);
    await writeFile(join(testDir, entry.image), 'existing');
    const result = await downloadAll(coins, { output: testDir });
    assert.equal(result.downloaded, 0);
    assert.equal(result.skipped, 1);
  });

  it('metadataOnly writes metadata without downloading', async () => {
    const coins = [coin('de', 'https://example.com/de.png')];
    const result = await downloadAll(coins, { output: testDir, metadataOnly: true });
    assert.equal(result.downloaded, 0);
    assert.equal(result.skipped, 0);
    assert.ok(existsSync(join(testDir, 'metadata.json')));
    const meta = JSON.parse(await readFile(join(testDir, 'metadata.json'), 'utf-8'));
    assert.equal(meta[0].image, 'https://example.com/de.png');
  });

  it('calls onProgress for each coin', async () => {
    mockFetchWithPng();
    const coins = [
      coin('de', 'https://example.com/de.png'),
      coin('fr', 'https://example.com/fr.png'),
    ];
    const progress: number[] = [];
    await downloadAll(coins, {
      output: testDir,
      onProgress: (done) => progress.push(done),
    });
    assert.equal(progress.length, 2);
    assert.deepEqual(progress.sort(), [1, 2]);
  });

  it('collects failures without stopping', async () => {
    mockFetch(async () => new Response(null, { status: 500 }));
    const coins = [
      coin('de', 'https://example.com/de.png'),
      coin('fr', 'https://example.com/fr.png'),
    ];
    const result = await downloadAll(coins, { output: testDir });
    assert.equal(result.downloaded, 0);
    assert.equal(result.failed.length, 2);
  });

  it('excludes failed coins from metadata', async () => {
    let callCount = 0;
    mockFetch(async () => {
      callCount++;
      if (callCount === 1) return new Response(PNG_BYTES, { status: 200 });
      return new Response(null, { status: 500 });
    });
    const coins = [
      coin('de', 'https://example.com/de.png'),
      coin('fr', 'https://example.com/fr.png'),
    ];
    const result = await downloadAll(coins, { output: testDir, concurrency: 1 });
    assert.equal(result.downloaded, 1);
    assert.equal(result.failed.length, 1);
    assert.equal(result.metadata.length, 1);
    assert.equal(result.metadata[0].country, 'de');
    const meta = JSON.parse(await readFile(join(testDir, 'metadata.json'), 'utf-8'));
    assert.equal(meta.length, 1);
  });

  it('creates output directory if it does not exist', async () => {
    mockFetchWithPng();
    const nested = join(testDir, 'a', 'b', 'c');
    const coins = [coin('de', 'https://example.com/de.png')];
    await downloadAll(coins, { output: nested });
    assert.ok(existsSync(join(nested, 'metadata.json')));
  });
});
