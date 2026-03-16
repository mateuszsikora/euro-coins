# @euro-coins/browser

Vite + React app for browsing euro coin images. Visual data quality verification tool and demo for the euro-coins monorepo.

## Setup

```bash
# from monorepo root
npm ci
npm run build           # build cli (needed for download)

# from packages/browser
npm run download        # fetch coin images via @euro-coins/cli
npm run dev             # start dev server
```

## Scripts

| Script | Description |
|---|---|
| `npm run download` | Download coin images to `public/coins/` |
| `npm run types` | Generate TypeScript declarations to `src/types.d.ts` |
| `npm run dev` | Start Vite dev server (auto-downloads coins via predev) |
| `npm run build` | Type-check and production build (run `download` first) |
| `npm run preview` | Preview production build |

## Views

Three views accessible via hash navigation (`#all`, `#regular`, `#commemorative`):

- **All** — grouped by country, then type (Regular/Commemorative), then year
- **Regular** — grouped by country, then year
- **Commemorative** — grouped by year (newest first), then country

Each view has contextual filters:

| Filter | All | Regular | Commemorative |
|---|---|---|---|
| Country | yes | yes | yes |
| Denomination | yes | yes | — |
| Year | — | — | yes |

## Data

Coin images and `metadata.json` are downloaded via `@euro-coins/cli` and served from `public/coins/`. The `dev` script auto-downloads via `predev`; for production builds, run `npm run download` explicitly after building the CLI. This directory is gitignored — no images are stored in the repository.

TypeScript declarations (`src/types.d.ts`) are generated via `npm run types` and committed to the repo. Re-run when `@euro-coins/source` adds new countries or denominations.

## ECB attribution

Images sourced from the [European Central Bank](https://www.ecb.europa.eu/), converted to normalized JPEG format. See [ECB copyright](https://www.ecb.europa.eu/services/using-our-site/disclaimer/html/index.en.html).
