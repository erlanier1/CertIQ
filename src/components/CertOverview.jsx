export default function CertOverview({ cert, go }) {
  return (
    <>
      <button className="back" onClick={() => go({ view: 'home' })}>← All certifications</button>
      <h1>{cert.name}</h1>
      <p className="muted">{cert.fullName} · {cert.issuer}</p>

      <div className="steps">
        <span className="step active">1. Review domains</span>
        <span className="step">2. Practice questions</span>
        <span className="step">3. Check your score</span>
      </div>

      <h2 className="section-title">Exam domains</h2>
      <ol className="domain-list">
        {cert.domains.map((d, i) => (
          <li key={d.id} className="card domain-row">
            <div>
              <div className="small muted">Domain {i + 1}{d.weight ? ` · ${d.weight}% of exam` : ''}</div>
              <div className="domain-name">{d.name}</div>
            </div>
            <div className="row-actions">
              <button className="btn" onClick={() => go({ view: 'review', certId: cert.id, domainId: d.id })}>Review</button>
              <button className="btn ghost" onClick={() => go({ view: 'quiz', certId: cert.id, domainId: d.id })}>Practice</button>
            </div>
          </li>
        ))}
      </ol>

      <button className="btn wide" onClick={() => go({ view: 'quiz', certId: cert.id })}>
        Practice test: all domains
      </button>
    </>
  )
}
