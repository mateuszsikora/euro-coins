import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getCountryName } from './country-names.js';
import type { CoinConfig, CountryCode } from './types.js';

type Year = number;
type NumberOfRegularCoins = number;
type NumberOfCommemorativeCoins = number;
type CountrySpec = [Year, NumberOfRegularCoins, NumberOfCommemorativeCoins];
export type CountrySpecs = CountrySpec[];

export function runCountryTest(country: CountryCode, specs: CountrySpecs, coins: CoinConfig[]) {
  const countryName = getCountryName(country);

  const coinYears = new Set(coins.map((coin) => coin.year));
  const specYears = new Set(specs.map(([year]) => year));
  for (const year of coinYears) {
    if (!specYears.has(year)) {
      throw new Error(
        `${countryName} (${country}): year ${year} found in coins but missing from specs`
      );
    }
  }
  for (const year of specYears) {
    if (!coinYears.has(year)) {
      throw new Error(
        `${countryName} (${country}): year ${year} found in specs but missing from coins`
      );
    }
  }

  for (const [year, noOfRegular, noOfCommemorative] of specs) {
    describe(`Coins from ${country} for the year ${year}`, () => {
      it(`should have ${noOfCommemorative} commemorative coins from ${country} for the year ${year}`, () => {
        const commemorativeCoins = coins.filter(
          (coin) => coin.year === year && coin.type === 'commemorative'
        );
        assert.strictEqual(commemorativeCoins.length, noOfCommemorative);
      });

      it(`should have ${noOfRegular} regular coins from ${country} for the year ${year}`, () => {
        const regularCoins = coins.filter((coin) => coin.year === year && coin.type === 'regular');
        assert.strictEqual(regularCoins.length, noOfRegular);
        const denominations = regularCoins.map((c) => c.denomination);
        const uniqueDenominations = new Set(denominations);
        assert.strictEqual(
          uniqueDenominations.size,
          denominations.length,
          `Duplicate denominations in ${countryName} (${country}) ${year}: ${denominations.join(', ')}`
        );
      });
    });
  }
}
