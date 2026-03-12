import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { coinSourceFactory } from './coin-source-factory.js';

describe('coinSourceFactory', () => {
  const { regular, commemorative } = coinSourceFactory('de');

  describe('regular', () => {
    it('creates a regular coin source with correct defaults', () => {
      const coin = regular({
        year: 2002,
        denomination: '2euro',
        url: 'https://www.ecb.europa.eu/euro/coins/de.jpg',
      });

      assert.deepEqual(coin, {
        country: 'de',
        year: 2002,
        denomination: '2euro',
        type: 'regular',
        index: 0,
        url: 'https://www.ecb.europa.eu/euro/coins/de.jpg',
      });
    });

    it('sets index to 0', () => {
      const coin = regular({
        year: 1999,
        denomination: '1euro',
        url: 'https://example.com/coin.jpg',
      });

      assert.equal(coin.index, 0);
    });

    it('sets country from factory argument', () => {
      const { regular: frRegular } = coinSourceFactory('fr');
      const coin = frRegular({
        year: 1999,
        denomination: '50cent',
        url: 'https://example.com/coin.jpg',
      });

      assert.equal(coin.country, 'fr');
    });
  });

  describe('commemorative', () => {
    it('creates a commemorative coin source with correct defaults', () => {
      const coin = commemorative({
        year: 2012,
        url: 'https://www.ecb.europa.eu/euro/coins/comm_2012/de.jpg',
      });

      assert.deepEqual(coin, {
        country: 'de',
        year: 2012,
        denomination: '2euro',
        type: 'commemorative',
        index: 0,
        url: 'https://www.ecb.europa.eu/euro/coins/comm_2012/de.jpg',
      });
    });

    it('defaults denomination to 2euro', () => {
      const coin = commemorative({
        year: 2015,
        url: 'https://example.com/coin.jpg',
      });

      assert.equal(coin.denomination, '2euro');
    });

    it('allows overriding denomination', () => {
      const coin = commemorative({
        year: 2020,
        denomination: '1euro',
        url: 'https://example.com/coin.jpg',
      });

      assert.equal(coin.denomination, '1euro');
    });

    it('allows overriding index', () => {
      const coin = commemorative({
        year: 2020,
        index: 3,
        url: 'https://example.com/coin.jpg',
      });

      assert.equal(coin.index, 3);
    });

    it('defaults index to 0', () => {
      const coin = commemorative({
        year: 2020,
        url: 'https://example.com/coin.jpg',
      });

      assert.equal(coin.index, 0);
    });
  });
});
