import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { COUNTRIES, DENOMINATIONS } from './coin-source.js';

describe('COUNTRIES', () => {
  it('has 25 eurozone countries', () => {
    assert.equal(COUNTRIES.length, 25);
  });

  it('contains unique codes', () => {
    assert.equal(new Set(COUNTRIES).size, COUNTRIES.length);
  });

  it('uses lowercase two-letter codes', () => {
    for (const code of COUNTRIES) {
      assert.match(code, /^[a-z]{2}$/);
    }
  });
});

describe('DENOMINATIONS', () => {
  it('has 8 denominations', () => {
    assert.equal(DENOMINATIONS.length, 8);
  });

  it('is ordered from highest to lowest face value', () => {
    assert.deepEqual(
      [...DENOMINATIONS],
      ['2euro', '1euro', '50cent', '20cent', '10cent', '5cent', '2cent', '1cent']
    );
  });
});
