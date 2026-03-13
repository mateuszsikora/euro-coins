import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CoinMetadata } from '../types';
import { AllView } from './AllView';

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

describe('AllView', () => {
  it('renders country sections sorted alphabetically', () => {
    render(<AllView coins={coins} />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings[0]).toHaveTextContent('France');
    expect(headings[1]).toHaveTextContent('Germany');
  });

  it('renders Regular and Commemorative subsections', () => {
    render(<AllView coins={coins} />);
    const subsections = screen.getAllByRole('heading', { level: 3 });
    const labels = subsections.map((h) => h.textContent);
    expect(labels).toContain('Regular');
    expect(labels).toContain('Commemorative');
  });

  it('renders year labels', () => {
    render(<AllView coins={coins} />);
    expect(screen.getByText('2002')).toBeInTheDocument();
    expect(screen.getByText('2006')).toBeInTheDocument();
    expect(screen.getByText('1999')).toBeInTheDocument();
  });

  it('renders a card for each coin', () => {
    render(<AllView coins={coins} />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('renders nothing for empty array', () => {
    const { container } = render(<AllView coins={[]} />);
    expect(container.querySelectorAll('.coin-card')).toHaveLength(0);
  });
});
