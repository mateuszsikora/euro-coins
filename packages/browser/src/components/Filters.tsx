import type { FilterState, View } from '../App';
import { COUNTRY_NAMES } from '../countries';
import { DENOMINATION_LABELS } from '../denominations';
import type { CoinMetadata, CountryCode, Denomination } from '../types';
import './Filters.css';

const DENOM_ORDER: Denomination[] = [
  '2euro',
  '1euro',
  '50cent',
  '20cent',
  '10cent',
  '5cent',
  '2cent',
  '1cent',
];

type Props = {
  view: View;
  metadata: CoinMetadata[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
};

export function Filters({ view, metadata, filters, onChange }: Props) {
  const viewCoins = view === 'all' ? metadata : metadata.filter((c) => c.type === view);

  const countries = [...new Set(viewCoins.map((c) => c.country))].sort((a, b) =>
    COUNTRY_NAMES[a].localeCompare(COUNTRY_NAMES[b])
  );

  const denominations = [...new Set(viewCoins.map((c) => c.denomination))].sort(
    (a, b) => DENOM_ORDER.indexOf(a) - DENOM_ORDER.indexOf(b)
  );

  const years = [...new Set(viewCoins.map((c) => c.year))].sort((a, b) => b - a);

  const showDenomination = view === 'all' || view === 'regular';
  const showYear = view === 'commemorative';
  const hasFilters = filters.country || filters.denomination || filters.year;

  return (
    <div className="filters">
      <select
        value={filters.country}
        onChange={(e) => onChange({ ...filters, country: e.target.value })}
      >
        <option value="">All countries</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {COUNTRY_NAMES[c as CountryCode]}
          </option>
        ))}
      </select>

      {showDenomination && (
        <select
          value={filters.denomination}
          onChange={(e) => onChange({ ...filters, denomination: e.target.value })}
        >
          <option value="">All denominations</option>
          {denominations.map((d) => (
            <option key={d} value={d}>
              {DENOMINATION_LABELS[d as Denomination]}
            </option>
          ))}
        </select>
      )}

      {showYear && (
        <select
          value={filters.year}
          onChange={(e) => onChange({ ...filters, year: e.target.value })}
        >
          <option value="">All years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      )}

      {hasFilters && (
        <button
          type="button"
          className="filters-reset"
          onClick={() => onChange({ country: '', denomination: '', year: '' })}
        >
          Reset
        </button>
      )}
    </div>
  );
}
