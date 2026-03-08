export const COUNTRIES = [
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
] as const;

export const BASE_URL = 'https://www.ecb.europa.eu';

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

export type Denomination = (typeof DENOMINATIONS)[number];

export type CountryCode = (typeof COUNTRIES)[number];

export type CoinType = 'regular' | 'commemorative';

export interface CoinConfig {
  country: CountryCode;
  year: number;
  denomination: Denomination;
  type: CoinType;
  index: number;
  url: string;
}
