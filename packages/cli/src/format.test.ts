import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { DownloadResult } from '@euro-coins/downloader';
import type { CoinSource } from '@euro-coins/source';
import { ATTRIBUTION, formatDeadLinks, formatDownloadResult, formatProgress } from './format.js';

// Disable colors for predictable assertions.
process.env.NO_COLOR = '1';

function coin(country: string, denom: string, year: number, url: string): CoinSource {
  return {
    country: country as CoinSource['country'],
    year,
    denomination: denom as CoinSource['denomination'],
    type: 'regular',
    index: 0,
    url,
  };
}

describe('ATTRIBUTION', () => {
  it('mentions ECB', () => {
    assert.match(ATTRIBUTION, /European Central Bank/);
  });

  it('mentions ECB abbreviation', () => {
    assert.match(ATTRIBUTION, /ECB/);
  });
});

describe('formatProgress', () => {
  it('formats progress with label', () => {
    assert.equal(formatProgress('Downloading', 3, 10), 'Downloading: 3/10');
  });

  it('handles zero progress', () => {
    assert.equal(formatProgress('Checking', 0, 42), 'Checking: 0/42');
  });

  it('handles completed progress', () => {
    assert.equal(formatProgress('Downloading', 10, 10), 'Downloading: 10/10');
  });
});

describe('formatDownloadResult', () => {
  it('shows downloaded and skipped counts', () => {
    const result: DownloadResult = {
      metadata: [],
      downloaded: 10,
      skipped: 5,
      failed: [],
    };
    const output = formatDownloadResult(result);
    assert.match(output, /Downloaded:\s+10/);
    assert.match(output, /Skipped:\s+5/);
  });

  it('omits failed section when there are no failures', () => {
    const result: DownloadResult = {
      metadata: [],
      downloaded: 10,
      skipped: 0,
      failed: [],
    };
    assert.ok(!formatDownloadResult(result).includes('Failed'));
  });

  it('shows failed section with coin details', () => {
    const result: DownloadResult = {
      metadata: [],
      downloaded: 8,
      skipped: 0,
      failed: [
        {
          coin: coin('de', '2euro', 2002, 'https://example.com/de.png'),
          id: 'de_regular_2002_2euro_0',
          error: '404 Not Found',
        },
      ],
    };
    const output = formatDownloadResult(result);
    assert.match(output, /Failed:\s+1/);
    assert.match(output, /de_regular_2002_2euro_0/);
    assert.match(output, /404 Not Found/);
  });

  it('lists all failed coins', () => {
    const result: DownloadResult = {
      metadata: [],
      downloaded: 0,
      skipped: 0,
      failed: [
        { coin: coin('de', '2euro', 2002, ''), id: 'de_regular_2002_2euro_0', error: 'timeout' },
        { coin: coin('fr', '2euro', 2015, ''), id: 'fr_regular_2015_2euro_0', error: '500' },
      ],
    };
    const output = formatDownloadResult(result);
    assert.match(output, /de_regular_2002_2euro_0.*timeout/);
    assert.match(output, /fr_regular_2015_2euro_0.*500/);
  });

  it('handles all zeros', () => {
    const result: DownloadResult = {
      metadata: [],
      downloaded: 0,
      skipped: 0,
      failed: [],
    };
    const output = formatDownloadResult(result);
    assert.match(output, /Downloaded:\s+0/);
    assert.match(output, /Skipped:\s+0/);
  });
});

describe('formatDeadLinks', () => {
  it('lists only dead links', () => {
    const coins = [
      coin('de', '2euro', 2002, 'https://example.com/de.png'),
      coin('fr', '1euro', 2003, 'https://example.com/fr.png'),
      coin('it', '50cent', 2004, 'https://example.com/it.png'),
    ];
    const results = [true, false, true];
    const output = formatDeadLinks(coins, results);
    assert.ok(!output.includes('de_'));
    assert.ok(output.includes('fr_regular_2003_1euro_0'));
    assert.ok(!output.includes('it_'));
  });

  it('returns empty string when all URLs are reachable', () => {
    const coins = [coin('de', '2euro', 2002, 'https://example.com/de.png')];
    assert.equal(formatDeadLinks(coins, [true]), '');
  });

  it('includes URL in output', () => {
    const coins = [coin('de', '2euro', 2002, 'https://example.com/de.png')];
    const output = formatDeadLinks(coins, [false]);
    assert.match(output, /https:\/\/example\.com\/de\.png/);
  });

  it('shows coin ID', () => {
    const coins = [coin('fr', '50cent', 2010, 'https://example.com/fr.png')];
    const output = formatDeadLinks(coins, [false]);
    assert.match(output, /fr_regular_2010_50cent_0/);
  });

  it('lists all dead links when none are reachable', () => {
    const coins = [
      coin('de', '2euro', 2002, 'https://example.com/de.png'),
      coin('fr', '1euro', 2003, 'https://example.com/fr.png'),
    ];
    const output = formatDeadLinks(coins, [false, false]);
    assert.ok(output.includes('de_regular_2002_2euro_0'));
    assert.ok(output.includes('fr_regular_2003_1euro_0'));
  });
});
