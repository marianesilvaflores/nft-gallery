export function NftCard({ card }) {
  return <article className="nft-card" tabIndex="0" aria-labelledby={`title-${card.id}`}>
    <div className="artwork">
      <img src={`${import.meta.env.BASE_URL}${card.image}`} alt={card.alt} width="1024" height="1024" />
      <span className="artwork-overlay" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M5 24s7-12 19-12 19 12 19 12-7 12-19 12S5 24 5 24Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/></svg></span>
      <span className="edition">{card.edition}</span>
    </div>
    <div className="card-copy">
      <p className="card-category">{card.category}</p>
      <h2 id={`title-${card.id}`}>{card.name} <span>#{card.id}</span></h2>
      <p className="description">{card.description}</p>
      <div className="card-details"><span className="price"><svg viewBox="0 0 12 20" aria-hidden="true"><path d="m6 0 6 10-6 4-6-4Zm0 15 6-4-6 9-6-9Z" fill="currentColor"/></svg>{card.price} ETH</span><span className="time"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.7"/></svg>{card.time}</span></div>
      <div className="creator"><span className="avatar" aria-hidden="true">MF</span><span>Criação de <strong>Mariane Flores</strong></span></div>
    </div>
  </article>;
}
