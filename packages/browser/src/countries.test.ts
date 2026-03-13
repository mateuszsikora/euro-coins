import { describe, expect, it } from 'vitest';
import { COUNTRY_NAMES } from './countries';
import type { CountryCode } from './types';

const ALL_CODES: CountryCode[] = [
  'at',
  'be',
  'cy',
  'de',
  'et',
  'es',
  'fi',
  'fr',
  'gr',
  'hr',
  'ie',
  'it',
  'lt',
  'lu',
  'lv',
  'mt',
  'nl',
  'pt',
  'si',
  'sk',
  'va',
  'sm',
  'mc',
  'ad',
];

describe('COUNTRY_NAMES', () => {
  it('has an entry for every country code', () => {
    for (const code of ALL_CODES) {
      expect(COUNTRY_NAMES[code]).toBeTruthy();
    }
  });

  it('covers exactly 24 countries', () => {
    expect(Object.keys(COUNTRY_NAMES)).toHaveLength(24);
  });

  it('maps known codes to correct names', () => {
    expect(COUNTRY_NAMES.de).toBe('Germany');
    expect(COUNTRY_NAMES.fr).toBe('France');
    expect(COUNTRY_NAMES.va).toBe('Vatican City');
    expect(COUNTRY_NAMES.ad).toBe('Andorra');
  });
});
