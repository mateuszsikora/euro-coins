/** ISO 3166-1 alpha-2 code for a euro-using country or territory. */
export type CountryCode =
  | 'at'
  | 'be'
  | 'bg'
  | 'cy'
  | 'de'
  | 'ee'
  | 'es'
  | 'fi'
  | 'fr'
  | 'gr'
  | 'hr'
  | 'ie'
  | 'it'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mt'
  | 'nl'
  | 'pt'
  | 'si'
  | 'sk'
  | 'va'
  | 'sm'
  | 'mc'
  | 'ad';

/** Euro coin denomination, e.g. `'2euro'`, `'50cent'`. */
export type Denomination =
  | '2euro'
  | '1euro'
  | '50cent'
  | '20cent'
  | '10cent'
  | '5cent'
  | '2cent'
  | '1cent';

/** `'regular'` for standard circulation coins, `'commemorative'` for special editions. */
export type CoinType = 'regular' | 'commemorative';

/** Metadata entry describing a single coin image. */
export type CoinMetadata = {
  /** Deterministic identifier, e.g. `de_regular_2002_2euro_0`. */
  id: string;
  /** ISO 3166-1 alpha-2 country code. */
  country: CountryCode;
  /** Year the coin design was issued. */
  year: number;
  /** Face value, e.g. `2euro`, `50cent`. */
  denomination: Denomination;
  /** `regular` or `commemorative`. */
  type: CoinType;
  /** Distinguishes multiple designs for the same country/year/denomination. */
  index: number;
  /** Local filename (`{id}.jpg`) or original ECB URL in metadata-only mode. */
  image: string;
};
