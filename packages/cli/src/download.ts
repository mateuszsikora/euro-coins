import { type DownloadOptions, downloadAll } from '@euro-coins/downloader';
import { getAllCoins } from '@euro-coins/source';
import ora from 'ora';
import { formatDownloadResult, formatProgress } from './format.js';

/** CLI flags for the `download` command (parsed by commander). */
export type DownloadFlags = {
  output: string;
  metadataOnly?: boolean;
  forceRefresh?: boolean;
  quality: number;
  concurrency: number;
};

/** Maps CLI flags to download options. */
export function buildDownloadOptions(flags: DownloadFlags): Omit<DownloadOptions, 'onProgress'> {
  return {
    output: flags.output,
    metadataOnly: flags.metadataOnly ?? false,
    forceRefresh: flags.forceRefresh ?? false,
    quality: flags.quality,
    concurrency: flags.concurrency,
  };
}

/** Runs the `download` command. */
export async function downloadCommand(flags: DownloadFlags): Promise<void> {
  const coins = getAllCoins();
  const options = buildDownloadOptions(flags);
  const label = options.metadataOnly ? 'Generating metadata' : 'Downloading';
  const spinner = ora(formatProgress(label, 0, coins.length)).start();

  try {
    const result = await downloadAll(coins, {
      ...options,
      onProgress(done, total) {
        spinner.text = formatProgress(label, done, total);
      },
    });

    if (options.metadataOnly) {
      spinner.succeed(`Metadata written (${result.metadata.length} entries) → ${options.output}`);
      return;
    }

    if (result.failed.length > 0) {
      spinner.warn(`Download complete with errors → ${options.output}`);
      process.exitCode = 1;
    } else {
      spinner.succeed(`Download complete → ${options.output}`);
    }
    console.log(formatDownloadResult(result));
  } catch (err) {
    spinner.fail(err instanceof Error ? err.message : String(err));
    process.exitCode = 1;
  }
}
