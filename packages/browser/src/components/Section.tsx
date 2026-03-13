import type { ReactNode } from 'react';
import './Section.css';

type Props = {
  title: string;
  level?: 'section' | 'subsection';
  children: ReactNode;
};

export function Section({ title, level = 'section', children }: Props) {
  const Tag = level === 'section' ? 'h2' : 'h3';
  return (
    <section className={`section section-${level}`}>
      <Tag className={`section-title section-title-${level}`}>{title}</Tag>
      {children}
    </section>
  );
}
