import { COUNTRY_NAMES } from '../countries';
import { DENOMINATION_LABELS } from '../denominations';
import type { CoinMetadata } from '../types';
import './CoinCard.css';

type Props = {
  coin: CoinMetadata;
};

export function CoinCard({ coin }: Props) {
  return (
    <div className="coin-card">
      <img
        className="coin-image"
        src={`/coins/${coin.image}`}
        alt={`${COUNTRY_NAMES[coin.country]} ${coin.year} ${DENOMINATION_LABELS[coin.denomination]}`}
        loading="lazy"
      />
      <div className="coin-info">
        <span className="coin-country">{COUNTRY_NAMES[coin.country]}</span>
        <span className="coin-detail">
          {coin.year} &middot; {DENOMINATION_LABELS[coin.denomination]}
        </span>
      </div>
    </div>
  );
}
