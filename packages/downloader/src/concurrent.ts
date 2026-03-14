/**
 * Runs `fn` on every item in `items` with bounded concurrency.
 *
 * Results preserve input order — `results[i]` corresponds to `items[i]`.
 * Progress is reported after each item completes.
 */
export async function concurrentMap<T, R>(
  items: readonly T[],
  fn: (item: T, index: number) => Promise<R>,
  options: { concurrency: number; onProgress?: (done: number, total: number) => void }
): Promise<PromiseSettledResult<R>[]> {
  const { concurrency, onProgress } = options;
  if (items.length === 0) return [];
  const workerCount = Math.min(
    Math.max(1, Number.isFinite(concurrency) ? concurrency : 1),
    items.length
  );
  const results = new Array<PromiseSettledResult<R>>(items.length);
  let nextIndex = 0;
  let done = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const i = nextIndex++;
      try {
        results[i] = { status: 'fulfilled', value: await fn(items[i], i) };
      } catch (err) {
        results[i] = { status: 'rejected', reason: err };
      }
      done++;
      onProgress?.(done, items.length);
    }
  }

  await Promise.all(Array.from({ length: workerCount }, worker));
  return results;
}
