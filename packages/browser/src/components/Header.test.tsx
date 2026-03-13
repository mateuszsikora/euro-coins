import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders the title', () => {
    render(<Header view="all" />);
    expect(screen.getByRole('heading', { name: 'Euro Coins' })).toBeInTheDocument();
  });

  it('renders all three tabs', () => {
    render(<Header view="all" />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Commemorative')).toBeInTheDocument();
  });

  it('marks the active tab', () => {
    render(<Header view="regular" />);
    expect(screen.getByText('Regular')).toHaveClass('tab-active');
    expect(screen.getByText('All')).not.toHaveClass('tab-active');
  });

  it('links tabs to hash routes', () => {
    render(<Header view="all" />);
    expect(screen.getByText('Commemorative')).toHaveAttribute('href', '#commemorative');
  });
});
