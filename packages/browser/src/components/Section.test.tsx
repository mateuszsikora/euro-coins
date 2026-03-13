import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Section } from './Section';

describe('Section', () => {
  it('renders h2 for section level', () => {
    render(<Section title="Germany">content</Section>);
    const heading = screen.getByRole('heading', { level: 2, name: 'Germany' });
    expect(heading).toBeInTheDocument();
  });

  it('renders h3 for subsection level', () => {
    render(
      <Section title="Regular" level="subsection">
        content
      </Section>
    );
    const heading = screen.getByRole('heading', { level: 3, name: 'Regular' });
    expect(heading).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Section title="Test">
        <p>child content</p>
      </Section>
    );
    expect(screen.getByText('child content')).toBeInTheDocument();
  });
});
