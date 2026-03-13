import type { View } from '../App';
import './Header.css';

const TABS: { view: View; label: string }[] = [
  { view: 'all', label: 'All' },
  { view: 'regular', label: 'Regular' },
  { view: 'commemorative', label: 'Commemorative' },
];

type Props = {
  view: View;
};

export function Header({ view }: Props) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">Euro Coins</h1>
        <nav className="tab-bar">
          {TABS.map((tab) => (
            <a
              key={tab.view}
              href={`#${tab.view}`}
              className={`tab ${view === tab.view ? 'tab-active' : ''}`}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
