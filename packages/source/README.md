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

### `getAllCoins(): CoinSource[]`

Returns all coin sources across all 24 eurozone countries.

### `coinSourceFactory(country)`

Factory for creating coin source entries. Returns `{ regular, commemorative }` helpers — see [countries/README.md](src/countries/README.md) for usage.

### Types

```typescript
interface CoinSource {
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

## Adding a country

See [countries/README.md](src/countries/README.md) for the file structure and step-by-step guide.

## Data source

All coin data and image URLs are sourced from the [European Central Bank](https://www.ecb.europa.eu/euro/coins/html/index.en.html). Images sourced from ECB, converted to normalized JPEG format.

## License

MIT
