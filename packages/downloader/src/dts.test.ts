import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { COUNTRIES, DENOMINATIONS } from '@euro-coins/source';
import { generateMetadataDts } from './dts.js';

describe('generateMetadataDts', () => {
  const output = generateMetadataDts();

  it('exports CountryCode with all countries', () => {
    assert.match(output, /export type CountryCode =/);
    for (const c of COUNTRIES) {
      assert.ok(output.includes(`'${c}'`), `missing country '${c}'`);
    }
  });

  it('exports Denomination with all denominations', () => {
    assert.match(output, /export type Denomination =/);
    for (const d of DENOMINATIONS) {
      assert.ok(output.includes(`'${d}'`), `missing denomination '${d}'`);
    }
  });

  it('exports CoinType', () => {
    assert.match(output, /export type CoinType = 'regular' \| 'commemorative'/);
  });

  it('exports CoinMetadata with all fields', () => {
    assert.match(output, /export type CoinMetadata =/);
    for (const field of ['id', 'country', 'year', 'denomination', 'type', 'index', 'image']) {
      assert.match(output, new RegExp(`${field}:`), `missing field '${field}'`);
    }
  });

  it('includes JSDoc comments', () => {
    assert.match(output, /\/\*\* ISO 3166-1 alpha-2/);
    assert.match(output, /\/\*\* Metadata entry describing/);
  });

  it('is valid TypeScript (no import statements)', () => {
    assert.ok(!output.includes('import '), 'should be self-contained with no imports');
  });
});
