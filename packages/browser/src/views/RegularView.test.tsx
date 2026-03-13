import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CoinMetadata } from '../types';
import { RegularView } from './RegularView';

const coins: CoinMetadata[] = [
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
    id: 'de_commemorative_2006_2euro_0',
    country: 'de',
    year: 2006,
    denomination: '2euro',
    type: 'commemorative',
    index: 0,
    image: 'de_commemorative_2006_2euro_0.jpg',
  },
  {
    id: 'fr_regular_1999_1euro_0',
    country: 'fr',
    year: 1999,
    denomination: '1euro',
    type: 'regular',
    index: 0,
    image: 'fr_regular_1999_1euro_0.jpg',
  },
];

describe('RegularView', () => {
  it('only renders regular coins', () => {
    render(<RegularView coins={coins} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('renders country sections sorted alphabetically', () => {
    render(<RegularView coins={coins} />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings[0]).toHaveTextContent('France');
    expect(headings[1]).toHaveTextContent('Germany');
  });

  it('renders year labels', () => {
    render(<RegularView coins={coins} />);
    expect(screen.getByText('2002')).toBeInTheDocument();
    expect(screen.getByText('1999')).toBeInTheDocument();
    expect(screen.queryByText('2006')).not.toBeInTheDocument();
  });
});
