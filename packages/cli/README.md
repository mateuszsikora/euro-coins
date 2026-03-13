# @euro-coins/cli

Command-line tool for downloading and checking euro coin images from the European Central Bank (ECB).

Wraps `@euro-coins/downloader` with progress display, colored output, and proper exit codes.

Requires **Node >= 22** (uses `node:util` `styleText`).

## Installation

```bash
npm install -g @euro-coins/cli
```

Or run via npx:

```bash
npx @euro-coins/cli download
```

## Commands

### `euro-coins download`

Downloads all euro coin images, normalizes them to JPEG with a white background, and generates a `metadata.json` manifest.

```bash
euro-coins download                    # download all, skip existing
euro-coins download --output ./coins   # custom output directory
euro-coins download --metadata-only    # generate metadata without downloading
euro-coins download --force-refresh    # overwrite existing files
euro-coins download --quality 90       # JPEG quality (default: 100)
euro-coins download --concurrency 4    # parallel downloads (default: 8)
```

**Options:**

| Option | Default | Description |
|---|---|---|
| `-o, --output <dir>` | `./coins` | Output directory for images and metadata |
| `--metadata-only` | — | Write only `metadata.json` without downloading images |
| `--force-refresh` | — | Re-download files that already exist |
| `--quality <n>` | `100` | JPEG quality (1–100) |
| `--concurrency <n>` | `8` | Max parallel downloads |

Exit code is `1` if any downloads fail.

### `euro-coins check`

HEAD-checks all source URLs and reports dead links.

```bash
euro-coins check                       # check all URLs
euro-coins check --concurrency 32      # increase parallelism
```

**Options:**

| Option | Default | Description |
|---|---|---|
| `--concurrency <n>` | `16` | Max parallel HEAD requests |

Exit code is `1` if any dead links are found.

## Color output

Colors are enabled automatically when stdout is a TTY. Supports standard environment variables:

- `NO_COLOR` — disable colors (any value)
- `FORCE_COLOR` — force colors even when stdout is not a TTY (e.g. piped output, CI)

## ECB attribution

Images sourced from the [European Central Bank](https://www.ecb.europa.eu), converted to normalized JPEG format.
