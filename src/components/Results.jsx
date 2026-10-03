export default function Results({ cert, domain, result, go }) {
  const { answers } = result
  const correct = answers.filter((a) => a.picked === a.answer).length
  const pct = Math.round((correct / answers.length) * 100)
  const wrong = answers.filter((a) => a.picked !== a.answer)

  const byDomain = cert.domains
    .map((d) => {
      const list = answers.filter((a) => a.domainId === d.id)
      return { d, total: list.length, right: list.filter((a) => a.picked === a.answer).length }
    })
    .filter((x) => x.total > 0)

  const retry = () =>
    go({ view: 'quiz', certId: cert.id, domainId: domain?.id, attempt: Date.now() })

  return (
    <>
      <button className="back" onClick={() => go({ view: 'cert', certId: cert.id })}>← {cert.name} domains</button>
      <div className="card score">
        <div className="score-num">{pct}%</div>
        <div>{correct} of {answers.length} correct</div>
      </div>

      {byDomain.length > 1 && (
        <div className="card">
          <h2 className="section-title">By domain</h2>
          {byDomain.map(({ d, total, right }) => (
            <div key={d.id} className="domain-score">
              <span>{d.name}</span>
              <span className={right / total < 0.7 ? 'weak' : 'strong'}>{right}/{total}</span>
            </div>
          ))}
        </div>
      )}

      <h2 className="section-title">{wrong.length ? 'Review what you missed' : 'Perfect score. Nothing to review.'}</h2>
      {wrong.map((a) => (
        <div key={a.q} className="card review-item">
          <div className="small muted">{a.domainName}</div>
          <p className="question-sm">{a.q}</p>
          <p className="bad">Your answer: {a.choices[a.picked]}</p>
          <p className="good">Correct answer: {a.choices[a.answer]}</p>
          <p className="why">{a.why}</p>
          <button className="link" onClick={() => go({ view: 'review', certId: cert.id, domainId: a.domainId })}>
            Review this domain →
          </button>
        </div>
      ))}

      <div className="actions">
        <button className="btn" onClick={retry}>Try again</button>
        <button className="btn ghost" onClick={() => go({ view: 'cert', certId: cert.id })}>Back to domains</button>
      </div>
    </>
  )
}
