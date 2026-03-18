/** All 25 countries and territories that use the euro (ISO 3166-1 alpha-2 codes). */
export const COUNTRIES = [
  'at',
  'be',
  'bg',
  'cy',
  'de',
  'ee',
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
] as const;

/** All 8 euro coin denominations, from highest to lowest face value. */
export const DENOMINATIONS = [
  '2euro',
  '1euro',
  '50cent',
  '20cent',
  '10cent',
  '5cent',
  '2cent',
  '1cent',
] as const;

/** Euro coin denomination, e.g. `'2euro'`, `'50cent'`. */
export type Denomination = (typeof DENOMINATIONS)[number];

/** ISO 3166-1 alpha-2 code for a euro-using country or territory. */
export type CountryCode = (typeof COUNTRIES)[number];

/** `'regular'` for standard circulation coins, `'commemorative'` for special editions. */
export type CoinType = 'regular' | 'commemorative';

/** Source entry for a single euro coin design. */
export interface CoinSource {
  /** ISO 3166-1 alpha-2 country code. */
  country: CountryCode;
  /** Year the coin design was issued. */
  year: number;
  /** Face value, e.g. `'2euro'`, `'50cent'`. */
  denomination: Denomination;
  /** `'regular'` or `'commemorative'`. */
  type: CoinType;
  /** Distinguishes multiple designs for the same country/year/denomination. */
  index: number;
  /** ECB image URL. */
  url: string;
}
