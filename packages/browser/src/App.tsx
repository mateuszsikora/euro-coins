import { useEffect, useState } from 'react';
import './App.css';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import type { CoinMetadata } from './types';
import { AllView } from './views/AllView';
import { CommemorativeView } from './views/CommemorativeView';
import { RegularView } from './views/RegularView';

export type View = 'all' | 'regular' | 'commemorative';

export type FilterState = {
  country: string;
  denomination: string;
  year: string;
};

function getViewFromHash(): View {
  const hash = window.location.hash.slice(1);
  if (hash === 'regular' || hash === 'commemorative') return hash;
  return 'all';
}

export function App() {
  const [view, setView] = useState<View>(getViewFromHash);
  const [filters, setFilters] = useState<FilterState>({
    country: '',
    denomination: '',
    year: '',
  });
  const [metadata, setMetadata] = useState<CoinMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/coins/metadata.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load metadata: ${res.status}`);
        return res.json();
      })
      .then((data) => setMetadata(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setView(getViewFromHash());
      setFilters({ country: '', denomination: '', year: '' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const filtered = metadata.filter((coin) => {
    if (filters.country && coin.country !== filters.country) return false;
    if (filters.denomination && coin.denomination !== filters.denomination) return false;
    if (filters.year && coin.year !== Number(filters.year)) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="app">
        <Header view={view} />
        <main className="main">
          <p className="status-message">Loading coins...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header view={view} />
        <main className="main">
          <p className="status-message error">{error}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header view={view} />
      <main className="main">
        <Filters view={view} metadata={metadata} filters={filters} onChange={setFilters} />
        {filtered.length === 0 && (
          <p className="status-message">No coins match the selected filters.</p>
        )}
        {view === 'all' && filtered.length > 0 && <AllView coins={filtered} />}
        {view === 'regular' && filtered.length > 0 && <RegularView coins={filtered} />}
        {view === 'commemorative' && filtered.length > 0 && <CommemorativeView coins={filtered} />}
      </main>
      <Footer />
    </div>
  );
}
