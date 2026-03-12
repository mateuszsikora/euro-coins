import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { CoinConfig } from '@euro-coins/source';
import { allCoinsMetadata, coinMetadata } from './metadata.js';

const coins: CoinConfig[] = [
  {
    country: 'de',
    year: 2002,
    denomination: '2euro',
    type: 'regular',
    index: 0,
    url: 'https://www.ecb.europa.eu/euro/coins/de.jpg',
  },
  {
    country: 'fr',
    year: 2015,
    denomination: '2euro',
    type: 'commemorative',
    index: 0,
    url: 'https://www.ecb.europa.eu/euro/coins/fr.jpg',
  },
];

describe('coinMetadata', () => {
  it('uses filename as image by default', () => {
    const entry = coinMetadata(coins[0]);
    assert.equal(entry.image, 'de_regular_2002_2euro_0.jpg');
  });

  it('uses source URL as image when useSourceUrl is true', () => {
    const entry = coinMetadata(coins[0], { useSourceUrl: true });
    assert.equal(entry.image, 'https://www.ecb.europa.eu/euro/coins/de.jpg');
  });

  it('builds entry with correct fields', () => {
    assert.deepEqual(coinMetadata(coins[0]), {
      id: 'de_regular_2002_2euro_0',
      country: 'de',
      year: 2002,
      denomination: '2euro',
      type: 'regular',
      index: 0,
      image: 'de_regular_2002_2euro_0.jpg',
    });
  });
});

describe('allCoinsMetadata', () => {
  it('generates entries for all coins', () => {
    const metadata = allCoinsMetadata(coins);
    assert.equal(metadata.length, 2);
    assert.equal(metadata[0].image, 'de_regular_2002_2euro_0.jpg');
    assert.equal(metadata[1].image, 'fr_commemorative_2015_2euro_0.jpg');
  });

  it('passes options to each entry', () => {
    const metadata = allCoinsMetadata(coins, { useSourceUrl: true });
    assert.equal(metadata[0].image, 'https://www.ecb.europa.eu/euro/coins/de.jpg');
    assert.equal(metadata[1].image, 'https://www.ecb.europa.eu/euro/coins/fr.jpg');
  });
});
