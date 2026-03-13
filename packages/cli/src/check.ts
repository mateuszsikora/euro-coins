import { checkUrls } from '@euro-coins/downloader';
import { getAllCoins } from '@euro-coins/source';
import ora from 'ora';
import { formatDeadLinks, formatProgress } from './format.js';

/** CLI flags for the `check` command (parsed by commander). */
export type CheckFlags = {
  concurrency: number;
};

/** Runs the `check` command. */
export async function checkCommand(flags: CheckFlags): Promise<void> {
  const coins = getAllCoins();
  const spinner = ora(formatProgress('Checking', 0, coins.length)).start();

  try {
    const results = await checkUrls(
      coins.map((c) => c.url),
      {
        concurrency: flags.concurrency,
        onProgress(done, total) {
          spinner.text = formatProgress('Checking', done, total);
        },
      }
    );

    if (results.length !== coins.length) {
      spinner.fail(`Result length mismatch: expected ${coins.length}, got ${results.length}`);
      process.exitCode = 1;
      return;
    }

    const deadCount = results.filter((r) => !r).length;

    if (deadCount === 0) {
      spinner.succeed(`All ${coins.length} URLs are reachable`);
    } else {
      spinner.fail(`${deadCount} dead link(s) found`);
      console.log(formatDeadLinks(coins, results));
      process.exitCode = 1;
    }
  } catch (err) {
    spinner.fail(err instanceof Error ? err.message : String(err));
    process.exitCode = 1;
  }
}
