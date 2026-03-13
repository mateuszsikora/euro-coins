import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { CoinMetadata } from '../types';
import { Filters } from './Filters';

const metadata: CoinMetadata[] = [
  {
    id: 'de_regular_2002_2euro_0',
    country: 'de',
    year: 2002,
    denomination: '2euro',
    type: 'regular',
    index: 0,
    image: 'de_regular_2002_2euro_0.jpg',
  },
  {
    id: 'fr_commemorative_2020_2euro_0',
    country: 'fr',
    year: 2020,
    denomination: '2euro',
    type: 'commemorative',
    index: 0,
    image: 'fr_commemorative_2020_2euro_0.jpg',
  },
];

const emptyFilters = { country: '', denomination: '', year: '' };

describe('Filters', () => {
  it('shows country and denomination selects for "all" view', () => {
    render(<Filters view="all" metadata={metadata} filters={emptyFilters} onChange={() => {}} />);
    expect(screen.getByText('All countries')).toBeInTheDocument();
    expect(screen.getByText('All denominations')).toBeInTheDocument();
    expect(screen.queryByText('All years')).not.toBeInTheDocument();
  });

  it('shows country and year selects for "commemorative" view', () => {
    render(
      <Filters
        view="commemorative"
        metadata={metadata}
        filters={emptyFilters}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('All countries')).toBeInTheDocument();
    expect(screen.getByText('All years')).toBeInTheDocument();
    expect(screen.queryByText('All denominations')).not.toBeInTheDocument();
  });

  it('populates country options from metadata', () => {
    render(<Filters view="all" metadata={metadata} filters={emptyFilters} onChange={() => {}} />);
    expect(screen.getByText('France')).toBeInTheDocument();
    expect(screen.getByText('Germany')).toBeInTheDocument();
  });

  it('hides reset button when no filters active', () => {
    render(<Filters view="all" metadata={metadata} filters={emptyFilters} onChange={() => {}} />);
    expect(screen.queryByText('Reset')).not.toBeInTheDocument();
  });

  it('shows reset button when a filter is active', () => {
    const filters = { country: 'de', denomination: '', year: '' };
    render(<Filters view="all" metadata={metadata} filters={filters} onChange={() => {}} />);
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('calls onChange with cleared filters on reset', () => {
    const onChange = vi.fn();
    const filters = { country: 'de', denomination: '', year: '' };
    render(<Filters view="all" metadata={metadata} filters={filters} onChange={onChange} />);
    fireEvent.click(screen.getByText('Reset'));
    expect(onChange).toHaveBeenCalledWith({ country: '', denomination: '', year: '' });
  });

  it('calls onChange when country select changes', () => {
    const onChange = vi.fn();
    render(<Filters view="all" metadata={metadata} filters={emptyFilters} onChange={onChange} />);
    fireEvent.change(screen.getByRole('combobox', { name: 'Country' }), {
      target: { value: 'de' },
    });
    expect(onChange).toHaveBeenCalledWith({ country: 'de', denomination: '', year: '' });
  });
});
