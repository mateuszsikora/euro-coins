export type CountryCode =
  | 'at'
  | 'be'
  | 'cy'
  | 'de'
  | 'et'
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

export type Denomination =
  | '2euro'
  | '1euro'
  | '50cent'
  | '20cent'
  | '10cent'
  | '5cent'
  | '2cent'
  | '1cent';

export type CoinType = 'regular' | 'commemorative';

export type CoinMetadata = {
  id: string;
  country: CountryCode;
  year: number;
  denomination: Denomination;
  type: CoinType;
  index: number;
  image: string;
};
