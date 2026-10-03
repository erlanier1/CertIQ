import { certs } from '../data/certs.js'

export default function Home({ onPick }) {
  return (
    <>
      <section className="hero">
        <h1>Pass your certification with confidence</h1>
        <p>Review each exam domain, then test yourself. Built for security, audit, privacy and AI governance professionals.</p>
      </section>
      <h2 className="section-title">Choose a certification</h2>
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
