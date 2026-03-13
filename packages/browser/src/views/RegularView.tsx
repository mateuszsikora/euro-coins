import { CoinGrid } from '../components/CoinGrid';
import { Section } from '../components/Section';
import { COUNTRY_NAMES } from '../countries';
import { groupBy } from '../group-by';
import type { CoinMetadata, CountryCode } from '../types';

type Props = {
  coins: CoinMetadata[];
};

export function RegularView({ coins }: Props) {
  const regular = coins.filter((c) => c.type === 'regular');
  const byCountry = groupBy(regular, (c) => c.country);
  const sortedCountries = [...byCountry.keys()].sort((a, b) =>
    COUNTRY_NAMES[a as CountryCode].localeCompare(COUNTRY_NAMES[b as CountryCode])
  );

  return (
    <div>
      {sortedCountries.map((country) => {
        const countryCoins = byCountry.get(country) ?? [];
        const byYear = groupBy(countryCoins, (c) => String(c.year));
        const years = [...byYear.keys()].sort();

        return (
          <Section key={country} title={COUNTRY_NAMES[country as CountryCode]}>
            {years.map((year) => (
              <div key={year} className="year-group">
                <h4 className="year-label">{year}</h4>
                <CoinGrid coins={byYear.get(year) ?? []} />
              </div>
            ))}
          </Section>
        );
      })}
    </div>
  );
}
