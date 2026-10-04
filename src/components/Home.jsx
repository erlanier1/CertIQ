import { certs } from '../data/certs.js'

export default function Home({ onPick, go }) {
  return (
    <>
      <button className="back" onClick={() => go({ view: 'home' })}>← Home</button>
      <h1>Choose a certification</h1>
      <p className="muted">Pick an exam to review its domains and practice questions.</p>
      <div className="grid">
        {certs.map((c) => (
          <button key={c.id} className="card cert-card" disabled={!c.ready} onClick={() => onPick(c.id)}>
            <span className="tag">{c.area}</span>
            <span className="cert-name">{c.name}</span>
            <span className="muted">{c.fullName}</span>
            <span className="muted small">{c.issuer}</span>
            {!c.ready && <span className="soon">Coming soon</span>}
          </button>
        ))}
      </div>
    </>
  )
}
