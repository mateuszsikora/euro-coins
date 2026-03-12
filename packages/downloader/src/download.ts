import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { CoinConfig } from '@euro-coins/source';
import { fetchImage } from './fetch.js';
import { toJpeg } from './image.js';
import { type CoinMetadata, allCoinsMetadata, coinMetadata } from './metadata.js';

const DEFAULT_CONCURRENCY = 8;

/** Options for {@link downloadAll}. */
export type DownloadOptions = {
  /** Output directory for images and `metadata.json`. */
  output: string;
  /** Write only `metadata.json` without downloading images (default `false`). */
  metadataOnly?: boolean;
  /** JPEG quality 1–100 (default 100). */
  quality?: number;
  /** Re-download files that already exist (default `false`). */
  forceRefresh?: boolean;
  /** Max parallel downloads (default 8). */
  concurrency?: number;
  /** Called after each coin is processed. */
  onProgress?: (done: number, total: number) => void;
};

/** Summary returned by {@link downloadAll}. */
export type DownloadResult = {
  /** Entries for coins that were downloaded or already existed. */
  metadata: CoinMetadata[];
  /** Number of newly downloaded images. */
  downloaded: number;
  /** Number of images that already existed on disk. */
  skipped: number;
  /** Coins that failed to download. */
  failed: FailedDownload[];
};

/** A coin that failed to download, with the error message. */
export type FailedDownload = {
  /** Original coin config. */
  coin: CoinConfig;
  /** Deterministic coin identifier. */
  id: string;
  /** Human-readable error message. */
  error: string;
};

/** Outcome of a single coin download via {@link downloadOne}. */
export type DownloadOneResult =
  | { status: 'downloaded' }
  | { status: 'skipped' }
  | { status: 'failed'; error: string };

/**
 * Downloads and normalizes a single coin image to JPEG.
 *
 * Fetches the image from `coin.url`, flattens alpha to white,
 * converts to JPEG, and saves to `{output}/{metadata.image}`.
 *
 * @returns `downloaded`, `skipped` (file already exists), or `failed`.
 */
export async function downloadOne(
  coin: CoinConfig,
  entry: CoinMetadata,
  options: { output: string; quality?: number; forceRefresh?: boolean }
): Promise<DownloadOneResult> {
  const { output, quality, forceRefresh = false } = options;
  const filePath = join(output, entry.image);

  if (!forceRefresh && existsSync(filePath)) {
    return { status: 'skipped' };
  }

  const result = await fetchImage(coin.url);
  if (!result.ok) {
    return { status: 'failed', error: result.error.message };
  }

  try {
    const jpeg = await toJpeg(result.data, { quality });
    await writeFile(filePath, jpeg);
    return { status: 'downloaded' };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    return { status: 'failed', error };
  }
}

/**
 * Downloads all coin images concurrently, normalizes them to JPEG,
 * and writes a `metadata.json` manifest to the output directory.
 *
 * Metadata only includes coins that were successfully downloaded or
 * already existed on disk — failed downloads are excluded.
 *
 * Existing files are skipped unless `forceRefresh` is set.
 * When `metadataOnly` is set, only the metadata file is written (no downloads).
 *
 * @returns Summary with metadata entries, counts, and any failures.
 */
export async function downloadAll(
  coins: CoinConfig[],
  options: DownloadOptions
): Promise<DownloadResult> {
  const {
    output,
    metadataOnly = false,
    quality,
    forceRefresh = false,
    concurrency = DEFAULT_CONCURRENCY,
    onProgress,
  } = options;

  await mkdir(output, { recursive: true });

  if (metadataOnly) {
    const metadata = allCoinsMetadata(coins, { useSourceUrl: true });
    await writeFile(join(output, 'metadata.json'), `${JSON.stringify(metadata, null, 2)}\n`);
    return { metadata, downloaded: 0, skipped: 0, failed: [] };
  }

  const entries = new Array<CoinMetadata | undefined>(coins.length);
  const failed: FailedDownload[] = [];
  let downloaded = 0;
  let skipped = 0;
  let done = 0;

  let nextIndex = 0;
  async function worker() {
    while (nextIndex < coins.length) {
      const i = nextIndex++;
      const coin = coins[i];
      const entry = coinMetadata(coin);

      const result = await downloadOne(coin, entry, { output, quality, forceRefresh });

      if (result.status === 'downloaded') {
        downloaded++;
        entries[i] = entry;
      } else if (result.status === 'skipped') {
        skipped++;
        entries[i] = entry;
      } else {
        failed.push({ coin, id: entry.id, error: result.error });
      }

      done++;
      onProgress?.(done, coins.length);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, coins.length) }, worker));

  const metadata = entries.filter((e): e is CoinMetadata => e !== undefined);
  await writeFile(join(output, 'metadata.json'), `${JSON.stringify(metadata, null, 2)}\n`);

  return { metadata, downloaded, skipped, failed };
}
