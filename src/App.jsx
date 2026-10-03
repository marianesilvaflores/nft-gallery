import { CardList } from './components/CardList';
import { Header } from './components/Header';
import { cards } from './data';
export default function App() {
  return <><a className="skip-link" href="#colecao">Pular para a coleção</a><Header />
    <main className="gallery" id="colecao">
      <div className="collection-heading"><div><p className="eyebrow"><span />COLEÇÃO GÊNESE · VOL. 01</p><h1>Arte além do <em>óbvio.</em></h1><p className="intro">Novas formas de imaginar. Três obras, infinitas perspectivas.</p></div><div className="collection-count"><strong>03</strong><span>OBRAS ORIGINAIS</span></div></div>
      <div className="collection-label"><span>Explore a coleção</span><span>01 — 03</span></div>
      <CardList cards={cards} />
      <section className="about" id="sobre"><span className="about-symbol" aria-hidden="true">✳</span><div><h2>Imaginação que ganha forma.</h2><p>Uma exploração de luz, matéria e movimento. Artes e logo criadas com Leonardo.ai, em uma galeria inspirada no desafio NFT Preview Card do Frontend Mentor.</p></div><span className="about-note">PROJETO DE ESTUDO<br/>DESIGN + CÓDIGO + IA</span></section>
    </main>
    <footer className="site-footer"><span>NFT Gallery <span className="brand-dot">©</span> 2026</span><p>Feito por <a href="https://github.com/marianesilvaflores">Mariane Silva Flores</a></p><span>Galeria demonstrativa · Sem transações</span></footer>
  </>;
}
