import type { CoinSource, CoinType, CountryCode, Denomination } from '@euro-coins/source';
import { buildId } from './id.js';

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

type MetadataOptions = {
  /** Use original ECB URLs as `image` instead of local filenames. */
  useSourceUrl?: boolean;
};

/**
 * Builds a metadata entry for a single coin.
 *
 * @example coinMetadata(coin) // { id: 'de_regular_2002_2euro_0', image: 'de_regular_2002_2euro_0.jpg', … }
 * @example coinMetadata(coin, { useSourceUrl: true }) // image → original ECB URL
 */
export function coinMetadata(coin: CoinSource, options: MetadataOptions = {}): CoinMetadata {
  const id = buildId(coin);
  return {
    id,
    country: coin.country,
    year: coin.year,
    denomination: coin.denomination,
    type: coin.type,
    index: coin.index,
    image: options.useSourceUrl ? coin.url : `${id}.jpg`,
  };
}

/**
 * Builds metadata entries for all coins.
 *
 * Delegates to {@link coinMetadata} for each coin, preserving input order.
 */
export function allCoinsMetadata(
  coins: CoinSource[],
  options: MetadataOptions = {}
): CoinMetadata[] {
  return coins.map((coin) => coinMetadata(coin, options));
}
