# Country coin definitions

Each file in this directory defines all coin sources for a single eurozone country. The filename is the ISO 3166-1 alpha-2 country code (e.g. `fr.ts` for France).

## File structure

Every country file follows the same pattern:

```typescript
import { coinSourceFactory } from '../coin-source-factory.js';

const { regular, commemorative } = coinSourceFactory('xx');

// Group coins by year and type
const regular1999 = [
  regular({ year: 1999, denomination: '2euro', url: '...' }),
  regular({ year: 1999, denomination: '1euro', url: '...' }),
  // ... all 8 denominations
];

const commemorative2012 = [
  commemorative({ year: 2012, url: '...' }),
];

// Default export: flat array of all coins
export default [...regular1999, ...commemorative2012];
```

### `regular()`

Creates a regular circulation coin. Requires `year`, `denomination`, and `url`. Sets `index: 0` and `type: 'regular'` automatically.

### `commemorative()`

Creates a commemorative coin. Requires `year` and `url`. Defaults to `denomination: '2euro'` and `index: 0`. Override `index` when a country has multiple commemorative coins in the same year.

## Adding a new country

1. Create `{code}.ts` in this directory using the pattern above
2. Create `{code}.test.ts` with year/coin-count specs:
   ```typescript
   import coins from './{code}.js';
   import { type CountrySpecs, runCountryTest } from '../run-country-tests.js';

   const specs: CountrySpecs = [
     // [year, numberOfRegularCoins, numberOfCommemorativeCoins]
     [2023, 8, 1],
   ];

   runCountryTest('{code}', specs, coins);
   ```
3. Add the import and spread in `all-coins.ts`
4. Add the country code to the `COUNTRIES` array in `coin-source.ts`

## Image URLs

All URLs point to the ECB website. Regular coin URLs follow a pattern like:
```
https://www.ecb.europa.eu/euro/coins/common/shared/img/{code}/{Country}_{denomination}.jpg
```

Commemorative coin URLs vary by year and are listed in `../commemorative-urls.ts`.
