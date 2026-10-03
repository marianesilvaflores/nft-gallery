import { NftCard } from './components/NftCard';
import { cards } from './data';
export default function App() {
  return <main className="single-card"><h1 className="sr-only">NFT Gallery</h1><NftCard card={cards[0]} /></main>;
}
