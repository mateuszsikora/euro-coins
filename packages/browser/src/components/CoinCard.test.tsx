import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CoinMetadata } from '../types';
import { CoinCard } from './CoinCard';

const coin: CoinMetadata = {
  id: 'de_regular_2002_2euro_0',
  country: 'de',
  year: 2002,
  denomination: '2euro',
  type: 'regular',
  index: 0,
  image: 'de_regular_2002_2euro_0.jpg',
};

describe('CoinCard', () => {
  it('renders country name', () => {
    render(<CoinCard coin={coin} />);
    expect(screen.getByText('Germany')).toBeInTheDocument();
  });

  it('renders year and denomination', () => {
    render(<CoinCard coin={coin} />);
    expect(screen.getByText(/2002/)).toBeInTheDocument();
    expect(screen.getByText(/2\u20AC/)).toBeInTheDocument();
  });

  it('renders image with correct src and lazy loading', () => {
    render(<CoinCard coin={coin} />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toContain('coins/de_regular_2002_2euro_0.jpg');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('sets descriptive alt text', () => {
    render(<CoinCard coin={coin} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Germany 2002 2\u20AC');
  });
});
