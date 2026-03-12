import { checkImage } from './fetch.js';

type CheckOptions = {
  /** Max parallel HEAD requests (default 16). */
  concurrency?: number;
  /** Called after each URL is checked with progress counters. */
  onProgress?: (done: number, total: number) => void;
};

const DEFAULT_CONCURRENCY = 16;

/**
 * HEAD-checks a single URL.
 *
 * Returns `true` if the URL is reachable (HTTP 2xx), `false` otherwise.
 * Never throws — network errors are treated as unreachable.
 */
export async function checkUrl(url: string): Promise<boolean> {
  const result = await checkImage(url);
  return result.ok;
}

/**
 * HEAD-checks multiple URLs concurrently and reports which are reachable.
 *
 * Results preserve input order — `results[i]` corresponds to `urls[i]`.
 *
 * @returns Array of booleans — `true` for reachable, `false` for dead links.
 */
export async function checkUrls(urls: string[], options: CheckOptions = {}): Promise<boolean[]> {
  const { concurrency = DEFAULT_CONCURRENCY, onProgress } = options;
  const results = new Array<boolean>(urls.length);
  let nextIndex = 0;
  let done = 0;

  async function worker() {
    while (nextIndex < urls.length) {
      const i = nextIndex++;
      results[i] = await checkUrl(urls[i]);
      done++;
      onProgress?.(done, urls.length);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, worker));
  return results;
}
