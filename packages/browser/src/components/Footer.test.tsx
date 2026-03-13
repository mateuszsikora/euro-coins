import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders ECB attribution', () => {
    render(<Footer />);
    expect(screen.getByText(/Images sourced from ECB/)).toBeInTheDocument();
  });

  it('renders issues link with correct href', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Report missing coins/ });
    expect(link).toHaveAttribute('href', 'https://github.com/mateuszsikora/euro-coins/issues');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
