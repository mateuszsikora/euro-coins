# euro-coins

Structured catalog of every euro coin design — metadata, image downloader, and CLI. Covers all 24 eurozone countries from 1999 to present.

## Quick start

Download all coin images to a local directory:

```bash
npx @euro-coins/cli download --output ./coins
```

This fetches every coin image from the ECB, normalizes it to JPEG, and generates a `metadata.json` manifest.

### Global install

```bash
npm install -g @euro-coins/cli

euro-coins download
euro-coins check              # verify all source URLs are alive
euro-coins types -o types.d.ts # generate TypeScript declarations
```

## Packages

| Package | Description |
|---|---|
| [`@euro-coins/source`](packages/source) | Map of every euro coin design with metadata and ECB image URLs |
| [`@euro-coins/downloader`](packages/downloader) | Library for downloading and normalizing coin images to JPEG |
| [`@euro-coins/cli`](packages/cli) | CLI wrapper — download, check URLs, generate types |
| [`@euro-coins/browser`](packages/browser) | Vite + React demo app for visual data verification (not published) |

### Dependency graph

```
source <- downloader <- cli
                        cli <- browser
```

## Programmatic usage

Use `@euro-coins/source` directly to access coin data without downloading images:

```typescript
import { getAllCoins } from '@euro-coins/source';

const coins = getAllCoins();
// [{ country: 'de', year: 2002, denomination: '2euro', type: 'regular', url: '...', ... }, ...]
```

Or use `@euro-coins/downloader` for full control over downloads:

```typescript
import { getAllCoins } from '@euro-coins/source';
import { downloadAll } from '@euro-coins/downloader';

const result = await downloadAll(getAllCoins(), { output: './coins' });
```

## Development

```bash
npm ci
npm run build
npm test
npm run qa          # lint & format check (biome)
```

## Data source

Coin data and images sourced from the [European Central Bank](https://www.ecb.europa.eu/). See [ECB copyright](https://www.ecb.europa.eu/services/using-our-site/disclaimer/html/index.en.html).

## License

MIT
