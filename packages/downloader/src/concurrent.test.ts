import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { concurrentMap } from './concurrent.js';

describe('concurrentMap', () => {
  it('maps all items and preserves order', async () => {
    const results = await concurrentMap([1, 2, 3], async (n) => n * 10, { concurrency: 2 });
    assert.deepEqual(results, [10, 20, 30]);
  });

  it('returns empty array for empty input', async () => {
    const results = await concurrentMap([], async (n: number) => n, { concurrency: 4 });
    assert.deepEqual(results, []);
  });

  it('respects concurrency limit', async () => {
    let concurrent = 0;
    let maxConcurrent = 0;
    const items = Array.from({ length: 10 }, (_, i) => i);

    await concurrentMap(
      items,
      async (n) => {
        concurrent++;
        maxConcurrent = Math.max(maxConcurrent, concurrent);
        await new Promise((r) => setTimeout(r, 10));
        concurrent--;
        return n;
      },
      { concurrency: 3 }
    );

    assert.ok(maxConcurrent <= 3, `max concurrent was ${maxConcurrent}`);
  });

  it('calls onProgress after each item', async () => {
    const progress: { done: number; total: number }[] = [];

    await concurrentMap([1, 2, 3], async (n) => n, {
      concurrency: 1,
      onProgress: (done, total) => progress.push({ done, total }),
    });

    assert.equal(progress.length, 3);
    assert.deepEqual(
      progress.map((p) => p.done),
      [1, 2, 3]
    );
    assert.ok(progress.every((p) => p.total === 3));
  });

  it('passes index to callback', async () => {
    const indices: number[] = [];

    await concurrentMap(
      ['a', 'b', 'c'],
      async (_, i) => {
        indices.push(i);
      },
      { concurrency: 1 }
    );

    assert.deepEqual(indices, [0, 1, 2]);
  });

  it('rejects when a mapper throws and reports partial progress', async () => {
    const progress: { done: number; total: number }[] = [];
    const error = new Error('boom');

    await assert.rejects(
      () =>
        concurrentMap(
          [0, 1, 2],
          async (_, index) => {
            if (index === 1) throw error;
            return index;
          },
          {
            concurrency: 1,
            onProgress: (done, total) => progress.push({ done, total }),
          }
        ),
      (err) => err === error
    );

    assert.equal(progress.length, 1);
    assert.deepEqual(progress[0], { done: 1, total: 3 });
  });

  it('clamps concurrency to at least 1', async () => {
    const results = await concurrentMap([1, 2], async (n) => n, { concurrency: 0 });
    assert.deepEqual(results, [1, 2]);
  });

  it('clamps concurrency to items length', async () => {
    let concurrent = 0;
    let maxConcurrent = 0;

    await concurrentMap(
      [1, 2],
      async (n) => {
        concurrent++;
        maxConcurrent = Math.max(maxConcurrent, concurrent);
        await new Promise((r) => setTimeout(r, 10));
        concurrent--;
        return n;
      },
      { concurrency: 100 }
    );

    assert.ok(maxConcurrent <= 2, `max concurrent was ${maxConcurrent}`);
  });
});
