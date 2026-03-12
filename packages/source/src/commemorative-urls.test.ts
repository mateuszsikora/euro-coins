import assert from 'node:assert';
import { describe, it } from 'node:test';

import { getAllCoins } from './all-coins.js';
import * as commemorativeUrls from './commemorative-urls.js';

const allExpectedUrls = Object.entries(commemorativeUrls)
  .filter(([key]) => key.startsWith('year'))
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([, urls]) => urls as string[]);

describe('commemorative URLs', () => {
  const allUsedUrls = new Set(getAllCoins().map((coin) => coin.url));

  for (const url of allExpectedUrls) {
    it(`should have URL: ${url}`, () => {
      assert.strictEqual(allUsedUrls.has(url), true);
    });
  }
});

describe('unique coin identities', () => {
  const allCoins = getAllCoins();

  it('should have unique (country, type, year, denomination, index) for every coin', () => {
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const coin of allCoins) {
      const id = `${coin.country}_${coin.type}_${coin.year}_${coin.denomination}_${coin.index}`;
      if (seen.has(id)) {
        duplicates.push(id);
      }
      seen.add(id);
    }
    assert.deepStrictEqual(duplicates, [], `Duplicate coin identities: ${duplicates.join(', ')}`);
  });
});

describe('placeholder coins', () => {
  const allCoins = getAllCoins();
  const placeholderCoins = allCoins.filter((coin) => coin.url.includes('placeholder_coming_soon'));

  it('should have exactly 12 placeholder coins (2024: va, 2025: lt, si, mc, hr, fr, gr×2, va×3, pt)', () => {
    assert.strictEqual(placeholderCoins.length, 12);
  });

  it('should have the expected placeholder distribution by year and country', () => {
    const countsByYearCountry: Record<string, number> = {};
    for (const coin of placeholderCoins) {
      const key = `${coin.year}:${coin.country}`;
      countsByYearCountry[key] = (countsByYearCountry[key] || 0) + 1;
    }
    assert.deepStrictEqual(countsByYearCountry, {
      '2024:va': 1,
      '2025:lt': 1,
      '2025:si': 1,
      '2025:mc': 1,
      '2025:hr': 1,
      '2025:fr': 1,
      '2025:gr': 2,
      '2025:va': 3,
      '2025:pt': 1,
    });
  });
});
