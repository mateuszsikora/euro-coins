import { describe, expect, it } from 'vitest';
import { DENOMINATION_LABELS } from './denominations';
import type { Denomination } from './types';

const ALL_DENOMINATIONS: Denomination[] = [
  '2euro',
  '1euro',
  '50cent',
  '20cent',
  '10cent',
  '5cent',
  '2cent',
  '1cent',
];

describe('DENOMINATION_LABELS', () => {
  it('has a label for every denomination', () => {
    for (const d of ALL_DENOMINATIONS) {
      expect(DENOMINATION_LABELS[d]).toBeTruthy();
    }
  });

  it('covers exactly 8 denominations', () => {
    expect(Object.keys(DENOMINATION_LABELS)).toHaveLength(8);
  });

  it('uses euro symbol for euro denominations', () => {
    expect(DENOMINATION_LABELS['2euro']).toBe('2\u20AC');
    expect(DENOMINATION_LABELS['1euro']).toBe('1\u20AC');
  });

  it('uses c suffix for cent denominations', () => {
    expect(DENOMINATION_LABELS['50cent']).toBe('50c');
    expect(DENOMINATION_LABELS['1cent']).toBe('1c');
  });
});
