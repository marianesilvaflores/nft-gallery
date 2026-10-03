import { useState } from 'react';
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header" id="topo"><div className="header-inner">
    <a className="brand" href="#topo" aria-label="NFT Gallery — início"><img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" width="48" height="48"/><span>NFT<span className="brand-light">Gallery</span><span className="brand-dot">.</span></span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? 'Fechar' : 'Menu'}<span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal" onKeyDown={event => { if(event.key === 'Escape') { setOpen(false); document.querySelector('.menu-toggle').focus(); } }}>
      <a href="#colecao" className="nav-current" onClick={() => setOpen(false)}>Coleção</a>
      <a href="#sobre" onClick={() => setOpen(false)}>Sobre o projeto</a>
      <a href="https://github.com/marianesilvaflores/nft-gallery" target="_blank" rel="noreferrer" className="github-link">Ver no GitHub <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" stroke="currentColor" strokeWidth="1.5"/></svg></a>
    </nav>
  </div></header>;
}
