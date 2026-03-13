import { describe, expect, it } from 'vitest';
import { groupBy } from './group-by';

describe('groupBy', () => {
  it('groups items by key', () => {
    const items = [
      { name: 'a', type: 'x' },
      { name: 'b', type: 'y' },
      { name: 'c', type: 'x' },
    ];
    const result = groupBy(items, (i) => i.type);

    expect(result.get('x')).toEqual([
      { name: 'a', type: 'x' },
      { name: 'c', type: 'x' },
    ]);
    expect(result.get('y')).toEqual([{ name: 'b', type: 'y' }]);
  });

  it('returns empty map for empty array', () => {
    const result = groupBy([], () => 'key');
    expect(result.size).toBe(0);
  });

  it('preserves insertion order of keys', () => {
    const items = [{ v: 'b' }, { v: 'a' }, { v: 'b' }];
    const result = groupBy(items, (i) => i.v);
    expect([...result.keys()]).toEqual(['b', 'a']);
  });
});
