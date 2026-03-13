import { CoinGrid } from '../components/CoinGrid';
import { Section } from '../components/Section';
import { COUNTRY_NAMES } from '../countries';
import { groupBy } from '../group-by';
import type { CoinMetadata, CountryCode } from '../types';

type Props = {
  coins: CoinMetadata[];
};

export function CommemorativeView({ coins }: Props) {
  const commemorative = coins.filter((c) => c.type === 'commemorative');
  const byYear = groupBy(commemorative, (c) => String(c.year));
  const sortedYears = [...byYear.keys()].sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      {sortedYears.map((year) => {
        const yearCoins = byYear.get(year) ?? [];
        const byCountry = groupBy(yearCoins, (c) => c.country);
        const sortedCountries = [...byCountry.keys()].sort((a, b) =>
          COUNTRY_NAMES[a as CountryCode].localeCompare(COUNTRY_NAMES[b as CountryCode])
        );

        return (
          <Section key={year} title={year}>
            {sortedCountries.map((country) => (
              <Section
                key={country}
                title={COUNTRY_NAMES[country as CountryCode]}
                level="subsection"
              >
                <CoinGrid coins={byCountry.get(country) ?? []} />
              </Section>
            ))}
          </Section>
        );
      })}
    </div>
  );
}
