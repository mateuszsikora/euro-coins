import type { CoinMetadata } from '../types';
import { CoinCard } from './CoinCard';
import './CoinGrid.css';

type Props = {
  coins: CoinMetadata[];
};

export function CoinGrid({ coins }: Props) {
  return (
    <div className="coin-grid">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
