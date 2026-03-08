# @euro-coins/source

Structured map of every euro coin design with metadata and ECB image URLs. Covers all 24 eurozone countries from 1999 to present.

## Install

```bash
npm install @euro-coins/source
```

## Usage

```typescript
import { getAllCoins } from '@euro-coins/source';

const coins = getAllCoins();
// [
//   { country: 'at', year: 1999, denomination: '2euro', type: 'regular', index: 0, url: '...' },
//   ...
// ]
```

## API

### `getAllCoins(): CoinConfig[]`

Returns all coin configurations.

### Types

```typescript
interface CoinConfig {
  country: CountryCode;   // ISO country code (e.g. 'at', 'de', 'fr')
  year: number;
  denomination: Denomination;
  type: CoinType;          // 'regular' | 'commemorative'
  index: number;           // distinguishes multiple coins per country/year
  url: string;             // ECB image URL
}
```

### Constants

- `COUNTRIES` — list of all 24 eurozone country codes
- `DENOMINATIONS` — list of all 8 denominations (`2euro`, `1euro`, `50cent`, ..., `1cent`)
- `BASE_URL` — ECB base URL

## Data source

All coin data and image URLs are sourced from the [European Central Bank](https://www.ecb.europa.eu/euro/coins/html/index.en.html). Images sourced from ECB, converted to normalized JPEG format.

## License

MIT
