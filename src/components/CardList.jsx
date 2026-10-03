import { NftCard } from './NftCard';
import 'animate.css';
export function CardList({ cards }) {
  return <ul className="card-list" aria-label="Obras da coleção">
    {cards.map((card, index) => <li className="animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 140}ms` }} key={card.id}><NftCard card={card} /></li>)}
  </ul>;
}
