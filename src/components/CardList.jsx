import { NftCard } from './NftCard';
export function CardList({ cards }) {
  return <ul className="card-list" aria-label="Obras da coleção">
    {cards.map(card => <li key={card.id}><NftCard card={card} /></li>)}
  </ul>;
}
