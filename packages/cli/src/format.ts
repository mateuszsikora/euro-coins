import { styleText } from 'node:util';
import { buildId } from '@euro-coins/downloader';
import type { DownloadResult } from '@euro-coins/downloader';
import type { CoinSource } from '@euro-coins/source';

/** Applies terminal color if stdout supports it. Respects NO_COLOR and FORCE_COLOR. */
function colorize(color: 'red' | 'green' | 'yellow', text: string | number): string {
  const s = String(text);
  if (process.env.NO_COLOR !== undefined) return s;
  if (!process.stdout.isTTY && process.env.FORCE_COLOR === undefined) return s;
  return styleText(color, s);
}

const red = (v: string | number) => colorize('red', v);
const green = (v: string | number) => colorize('green', v);
const yellow = (v: string | number) => colorize('yellow', v);

/** ECB attribution notice displayed in help and on startup. */
export const ATTRIBUTION =
  'Images sourced from the European Central Bank (ECB), converted to normalized JPEG format.';

/** Formats a progress line, e.g. `"Downloading: 42/100"`. */
export function formatProgress(label: string, done: number, total: number): string {
  return `${label}: ${done}/${total}`;
}

/** Formats the download result as a multi-line summary. */
export function formatDownloadResult(result: DownloadResult): string {
  const lines: string[] = [];
  lines.push(`  Downloaded: ${green(result.downloaded)}`);
  lines.push(`  Skipped:    ${yellow(result.skipped)}`);
  if (result.failed.length > 0) {
    lines.push(`  Failed:     ${red(result.failed.length)}`);
    for (const f of result.failed) {
      lines.push(`    ${red('✗')} ${f.id} — ${f.error}`);
    }
  }
  return lines.join('\n');
}

/**
 * Formats dead links with coin context.
 *
 * Each line shows the coin ID and the original URL.
 */
export function formatDeadLinks(coins: CoinSource[], results: boolean[]): string {
  const lines: string[] = [];
  for (let i = 0; i < coins.length; i++) {
    if (!results[i]) {
      lines.push(`  ${red('✗')} ${buildId(coins[i])} — ${coins[i].url}`);
    }
  }
  return lines.join('\n');
}
