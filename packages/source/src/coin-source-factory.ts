import type { CoinSource, CountryCode, Denomination } from './coin-source.js';

/**
 * Creates `regular` and `commemorative` helper functions scoped to a country.
 *
 * @example const { regular, commemorative } = coinSourceFactory('de');
 */
export function coinSourceFactory(country: CountryCode) {
  const regular = (data: Pick<CoinSource, 'year' | 'denomination' | 'url'>): CoinSource => ({
    ...data,
    country,
    index: 0,
    type: 'regular',
  });

  const commemorative = (
    data: Pick<CoinSource, 'year' | 'url'> & { denomination?: Denomination; index?: number }
  ): CoinSource => ({
    denomination: '2euro',
    index: 0,
    ...data,
    country,
    type: 'commemorative',
  });

  return { regular, commemorative };
}
