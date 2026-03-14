# @euro-coins/downloader

Download and normalize euro coin images from the European Central Bank (ECB).

Images are converted to JPEG with a white background (alpha flattening). This is a library with no side-effects on import — all IO happens through explicit function calls.

## Installation

```bash
npm install @euro-coins/downloader
```

## API

### `downloadAll(coins, options)`

Downloads coin images concurrently, normalizes them to JPEG, and generates a `metadata.json` manifest.

Metadata only includes coins that were successfully downloaded or already existed on disk — failed downloads are excluded.

```ts
import { getAllCoins } from '@euro-coins/source';
import { downloadAll } from '@euro-coins/downloader';

const result = await downloadAll(getAllCoins(), {
  output: './coins',
});

console.log(`Downloaded: ${result.downloaded}`);
console.log(`Skipped: ${result.skipped}`);
console.log(`Failed: ${result.failed.length}`);
```

**Options:**

| Option | Type | Default | Description |
|---|---|---|---|
| `output` | `string` | *required* | Output directory for images and metadata |
| `metadataOnly` | `boolean` | `false` | Write only `metadata.json` without downloading images |
| `quality` | `number` | `100` | JPEG quality (1–100) |
| `forceRefresh` | `boolean` | `false` | Re-download files that already exist |
| `concurrency` | `number` | `8` | Max parallel downloads |
| `onProgress` | `(done, total) => void` | — | Progress callback |

**Returns** `DownloadResult`:

```ts
{
  metadata: CoinMetadata[];   // entries for downloaded/existing coins
  downloaded: number;          // newly downloaded count
  skipped: number;             // already-existed count
  failed: FailedDownload[];    // coins that failed to download
}
```

### `downloadOne(coin, entry, options)`

Downloads and normalizes a single coin image to JPEG.

```ts
import { downloadOne, coinMetadata } from '@euro-coins/downloader';

const entry = coinMetadata(coin);
const result = await downloadOne(coin, entry, { output: './coins' });
// result.status: 'downloaded' | 'skipped' | 'failed'
```

### `coinMetadata(coin, options?)` / `allCoinsMetadata(coins, options?)`

Builds metadata entries from coin configs without downloading.

```ts
import { getAllCoins } from '@euro-coins/source';
import { coinMetadata, allCoinsMetadata } from '@euro-coins/downloader';

// Single coin
const entry = coinMetadata(coin);
// { id: 'de_regular_2002_2euro_0', image: 'de_regular_2002_2euro_0.jpg', ... }

// All coins
const metadata = allCoinsMetadata(getAllCoins());
```

When `useSourceUrl` is set, `image` contains the original ECB URL instead of a local filename.

### `checkUrl(url)` / `checkUrls(urls, options?)`

HEAD-checks URLs to verify they're reachable.

```ts
import { getAllCoins } from '@euro-coins/source';
import { checkUrl, checkUrls } from '@euro-coins/downloader';

// Single URL
const ok = await checkUrl('https://www.ecb.europa.eu/...');

// Batch with progress
const coins = getAllCoins();
const results = await checkUrls(
  coins.map((c) => c.url),
  {
    concurrency: 16,
    onProgress: (done, total) => console.log(`${done}/${total}`),
  }
);
const deadLinks = coins.filter((_, i) => !results[i]);
```

### `fetchImage(url)`

Low-level: fetches a single image and returns a `FetchResult<Buffer>`. Never throws.

```ts
import { fetchImage } from '@euro-coins/downloader';

const result = await fetchImage('https://www.ecb.europa.eu/...');
if (result.ok) {
  console.log(result.data.length); // Buffer
} else {
  console.error(result.error.message);
}
```

### `toJpeg(buffer, options?)`

Converts a raw image buffer to JPEG with a white background.

```ts
import { toJpeg } from '@euro-coins/downloader';

const jpeg = await toJpeg(pngBuffer, { quality: 90 });
```

### `generateMetadataDts()`

Generates a self-contained `.d.ts` string with all metadata types (`CountryCode`, `Denomination`, `CoinType`, `CoinMetadata`). Types are derived from the `COUNTRIES` and `DENOMINATIONS` arrays in `@euro-coins/source`, so the output stays in sync automatically.

```ts
import { generateMetadataDts } from '@euro-coins/downloader';
import { writeFileSync } from 'node:fs';

writeFileSync('metadata.d.ts', generateMetadataDts());
```

Consumers can commit the generated file and drop the dependency on `@euro-coins/downloader` and `@euro-coins/source`.

### `buildId(coin)`

Generates a deterministic ID: `{country}_{type}_{year}_{denomination}_{index}`.

```ts
import { buildId } from '@euro-coins/downloader';

buildId({ country: 'de', type: 'regular', year: 2002, denomination: '2euro', index: 0, url: '...' });
// → 'de_regular_2002_2euro_0'
```

## ECB attribution

Images sourced from the [European Central Bank](https://www.ecb.europa.eu/), converted to normalized JPEG format. See [ECB copyright](https://www.ecb.europa.eu/services/using-our-site/disclaimer/html/index.en.html).
