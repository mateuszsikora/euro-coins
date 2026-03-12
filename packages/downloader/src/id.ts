import type { CoinSource } from '@euro-coins/source';

/**
 * Builds a deterministic identifier for a coin.
 *
 * Format: `{country}_{type}_{year}_{denomination}_{index}`
 * @example buildId(coin) // "de_regular_2002_2euro_0"
 */
export function buildId(coin: CoinSource): string {
  return `${coin.country}_${coin.type}_${coin.year}_${coin.denomination}_${coin.index}`;
}
