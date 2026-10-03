export default function DomainReview({ cert, domain, go }) {
  const idx = cert.domains.indexOf(domain)
  const next = cert.domains[idx + 1]
  return (
    <>
      <button className="back" onClick={() => go({ view: 'cert', certId: cert.id })}>← {cert.name} domains</button>
      <div className="small muted">Domain {idx + 1}{domain.weight ? ` · ${domain.weight}% of exam` : ''}</div>
      <h1>{domain.name}</h1>
      <p className="lead">{domain.summary}</p>

      <div className="card">
        <h2 className="section-title">Key points</h2>
        <ul className="key-points">
          {domain.keyPoints.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>

      <div className="actions">
        <button className="btn" onClick={() => go({ view: 'quiz', certId: cert.id, domainId: domain.id })}>
          Practice this domain
        </button>
        {next && (
          <button className="btn ghost" onClick={() => go({ view: 'review', certId: cert.id, domainId: next.id })}>
            Next domain →
          </button>
        )}
      </div>
    </>
  )
}
