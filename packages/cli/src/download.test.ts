import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { type DownloadFlags, buildDownloadOptions } from './download.js';

describe('buildDownloadOptions', () => {
  it('maps flags to download options', () => {
    const flags: DownloadFlags = {
      output: './out',
      quality: 90,
      concurrency: 4,
    };
    const options = buildDownloadOptions(flags);
    assert.equal(options.output, './out');
    assert.equal(options.quality, 90);
    assert.equal(options.concurrency, 4);
  });

  it('passes through boolean flags', () => {
    const flags: DownloadFlags = {
      output: './out',
      metadataOnly: true,
      forceRefresh: true,
      quality: 100,
      concurrency: 8,
    };
    const options = buildDownloadOptions(flags);
    assert.equal(options.metadataOnly, true);
    assert.equal(options.forceRefresh, true);
  });

  it('defaults metadataOnly and forceRefresh to false', () => {
    const flags: DownloadFlags = {
      output: './coins',
      quality: 100,
      concurrency: 8,
    };
    const options = buildDownloadOptions(flags);
    assert.equal(options.metadataOnly, false);
    assert.equal(options.forceRefresh, false);
  });

  it('preserves output path as-is', () => {
    const flags: DownloadFlags = {
      output: '/absolute/path/to/coins',
      quality: 100,
      concurrency: 8,
    };
    assert.equal(buildDownloadOptions(flags).output, '/absolute/path/to/coins');
  });
});
