import type { CoinConfig, CountryCode, Denomination } from './types.js';

export function coinConfigFactory(country: CountryCode) {
  const regular = (data: Pick<CoinConfig, 'year' | 'denomination' | 'url'>): CoinConfig => ({
    ...data,
    country,
    index: 0,
    type: 'regular',
  });

  const commemorative = (
    data: Pick<CoinConfig, 'year' | 'url'> & { denomination?: Denomination; index?: number }
  ): CoinConfig => ({
    denomination: '2euro',
    index: 0,
    ...data,
    country,
    type: 'commemorative',
  });

  return { regular, commemorative };
}
