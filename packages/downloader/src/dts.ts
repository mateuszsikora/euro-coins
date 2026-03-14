import { COUNTRIES, DENOMINATIONS } from '@euro-coins/source';

/** Generates a self-contained `.d.ts` file describing the metadata shape. */
export function generateMetadataDts(): string {
  const countryUnion = COUNTRIES.map((c) => `  | '${c}'`).join('\n');
  const denomUnion = DENOMINATIONS.map((d) => `  | '${d}'`).join('\n');

  return `/** ISO 3166-1 alpha-2 code for a euro-using country or territory. */
export type CountryCode =
${countryUnion};

/** Euro coin denomination, e.g. \`'2euro'\`, \`'50cent'\`. */
export type Denomination =
${denomUnion};

/** \`'regular'\` for standard circulation coins, \`'commemorative'\` for special editions. */
export type CoinType = 'regular' | 'commemorative';

/** Metadata entry describing a single coin image. */
export type CoinMetadata = {
  /** Deterministic identifier, e.g. \`de_regular_2002_2euro_0\`. */
  id: string;
  /** ISO 3166-1 alpha-2 country code. */
  country: CountryCode;
  /** Year the coin design was issued. */
  year: number;
  /** Face value, e.g. \`2euro\`, \`50cent\`. */
  denomination: Denomination;
  /** \`regular\` or \`commemorative\`. */
  type: CoinType;
  /** Distinguishes multiple designs for the same country/year/denomination. */
  index: number;
  /** Local filename (\`{id}.jpg\`) or original ECB URL in metadata-only mode. */
  image: string;
};
`;
}
