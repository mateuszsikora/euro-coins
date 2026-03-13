import { CoinGrid } from '../components/CoinGrid';
import { Section } from '../components/Section';
import { COUNTRY_NAMES } from '../countries';
import { groupBy } from '../group-by';
import type { CoinMetadata, CountryCode } from '../types';

type Props = {
  coins: CoinMetadata[];
};

export function AllView({ coins }: Props) {
  const byCountry = groupBy(coins, (c) => c.country);
  const sortedCountries = [...byCountry.keys()].sort((a, b) =>
    COUNTRY_NAMES[a as CountryCode].localeCompare(COUNTRY_NAMES[b as CountryCode])
  );

  return (
    <div>
      {sortedCountries.map((country) => {
        const countryCoins = byCountry.get(country) ?? [];
        const regular = countryCoins.filter((c) => c.type === 'regular');
        const commemorative = countryCoins.filter((c) => c.type === 'commemorative');
        const regularByYear = groupBy(regular, (c) => String(c.year));
        const commemorativeByYear = groupBy(commemorative, (c) => String(c.year));
        const regularYears = [...regularByYear.keys()].sort((a, b) => Number(a) - Number(b));
        const commemorativeYears = [...commemorativeByYear.keys()].sort(
          (a, b) => Number(a) - Number(b)
        );

        return (
          <Section key={country} title={COUNTRY_NAMES[country as CountryCode]}>
            {regularYears.length > 0 && (
              <Section title="Regular" level="subsection">
                {regularYears.map((year) => (
                  <div key={year} className="year-group">
                    <h4 className="year-label">{year}</h4>
                    <CoinGrid coins={regularByYear.get(year) ?? []} />
                  </div>
                ))}
              </Section>
            )}
            {commemorativeYears.length > 0 && (
              <Section title="Commemorative" level="subsection">
                {commemorativeYears.map((year) => (
                  <div key={year} className="year-group">
                    <h4 className="year-label">{year}</h4>
                    <CoinGrid coins={commemorativeByYear.get(year) ?? []} />
                  </div>
                ))}
              </Section>
            )}
          </Section>
        );
      })}
    </div>
  );
}
