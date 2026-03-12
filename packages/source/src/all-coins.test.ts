import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getAllCoins } from './all-coins.js';
import { COUNTRIES } from './coin-source.js';

describe('getAllCoins', () => {
  const coins = getAllCoins();

  it('returns a non-empty array', () => {
    assert.ok(coins.length > 0);
  });

  it('every entry has all required fields', () => {
    for (const coin of coins) {
      assert.ok(coin.country, `missing country: ${JSON.stringify(coin)}`);
      assert.ok(coin.denomination, `missing denomination: ${JSON.stringify(coin)}`);
      assert.ok(coin.url, `missing url: ${JSON.stringify(coin)}`);
      assert.equal(typeof coin.year, 'number');
      assert.equal(typeof coin.index, 'number');
      assert.ok(coin.type === 'regular' || coin.type === 'commemorative');
    }
  });

  it('includes coins from all countries', () => {
    const countriesInData = new Set(coins.map((c) => c.country));
    for (const code of COUNTRIES) {
      assert.ok(countriesInData.has(code), `missing country: ${code}`);
    }
  });

  it('has no duplicate identities (country + type + year + denomination + index)', () => {
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const coin of coins) {
      const id = `${coin.country}_${coin.type}_${coin.year}_${coin.denomination}_${coin.index}`;
      if (seen.has(id)) duplicates.push(id);
      seen.add(id);
    }
    assert.deepEqual(duplicates, []);
  });
});
