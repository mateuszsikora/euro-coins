import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CoinMetadata } from '../types';
import { CoinGrid } from './CoinGrid';

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
    id: 'fr_regular_1999_1euro_0',
    country: 'fr',
    year: 1999,
    denomination: '1euro',
    type: 'regular',
    index: 0,
    image: 'fr_regular_1999_1euro_0.jpg',
  },
];

describe('CoinGrid', () => {
  it('renders a card for each coin', () => {
    render(<CoinGrid coins={coins} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  it('renders nothing for empty array', () => {
    const { container } = render(<CoinGrid coins={[]} />);
    expect(container.querySelector('.coin-grid')?.children).toHaveLength(0);
  });
});
