import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CoinMetadata } from '../types';
import { CommemorativeView } from './CommemorativeView';

const coins: CoinMetadata[] = [
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
    id: 'fr_commemorative_2020_2euro_0',
    country: 'fr',
    year: 2020,
    denomination: '2euro',
    type: 'commemorative',
    index: 0,
    image: 'fr_commemorative_2020_2euro_0.jpg',
  },
  {
    id: 'de_regular_2002_2euro_0',
    country: 'de',
    year: 2002,
    denomination: '2euro',
    type: 'regular',
    index: 0,
    image: 'de_regular_2002_2euro_0.jpg',
  },
];

describe('CommemorativeView', () => {
  it('only renders commemorative coins', () => {
    render(<CommemorativeView coins={coins} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('groups by year descending', () => {
    render(<CommemorativeView coins={coins} />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings[0]).toHaveTextContent('2020');
    expect(headings[1]).toHaveTextContent('2006');
  });

  it('renders country as subsection within year', () => {
    render(<CommemorativeView coins={coins} />);
    expect(screen.getByRole('heading', { level: 3, name: 'France' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Germany' })).toBeInTheDocument();
  });
});
