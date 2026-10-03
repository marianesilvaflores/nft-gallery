import { CardList } from './components/CardList';
import { cards } from './data';
export default function App() {
  return <main className="gallery"><h1>NFT Gallery</h1><CardList cards={cards} /></main>;
}
