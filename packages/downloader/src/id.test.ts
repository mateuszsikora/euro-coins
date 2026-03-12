import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildId } from './id.js';

describe('buildId', () => {
  it('builds id from regular coin', () => {
    assert.equal(
      buildId({
        country: 'de',
        year: 2002,
        denomination: '2euro',
        type: 'regular',
        index: 0,
        url: 'https://example.com/coin.jpg',
      }),
      'de_regular_2002_2euro_0'
    );
  });

  it('builds id from commemorative coin with index', () => {
    assert.equal(
      buildId({
        country: 'fr',
        year: 2015,
        denomination: '2euro',
        type: 'commemorative',
        index: 1,
        url: 'https://example.com/coin.jpg',
      }),
      'fr_commemorative_2015_2euro_1'
    );
  });

  it('includes denomination in id', () => {
    assert.equal(
      buildId({
        country: 'at',
        year: 1999,
        denomination: '50cent',
        type: 'regular',
        index: 0,
        url: 'https://example.com/coin.jpg',
      }),
      'at_regular_1999_50cent_0'
    );
  });
});
