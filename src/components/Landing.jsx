import { certs } from '../data/certs.js'

const steps = [
  { title: 'Review', text: 'Read a short summary and key points for each exam domain.' },
  { title: 'Practice', text: 'Answer questions by domain or across the whole exam.' },
  { title: 'Improve', text: 'See your score by domain and learn from every missed question.' }
]

export default function Landing({ go }) {
  const total = certs.reduce((n, c) => n + c.domains.reduce((m, d) => m + (d.questions?.length ?? 0), 0), 0)

  return (
    <>
      <section className="hero landing-hero">
        <h1>Pass your certification with confidence</h1>
        <p>
          Free study and practice for cybersecurity, audit, privacy and AI governance certifications. Review each exam
          domain, then test yourself.
        </p>
        <button className="btn hero-btn" onClick={() => go({ view: 'certs' })}>Start studying</button>
        <div className="hero-note">No sign-up. No login. Just open and study.</div>
      </section>

      <div className="warning" role="note">
        <div className="warning-title">⚠ Beta version: please read</div>
        <ul>
          <li>CertIQ is in early testing. Some questions may contain mistakes.</li>
          <li>All questions are original practice material, <strong>not official exam questions</strong>.</li>
          <li>CertIQ is not affiliated with or endorsed by ISACA, ISC2, CompTIA or the IAPP.</li>
          <li>Use CertIQ alongside official study materials, not instead of them.</li>
          <li>See a problem? Tap <strong>⚑ Report a problem</strong> under any question.</li>
        </ul>
      </div>

      <h2 className="section-title">How it works</h2>
      <div className="grid steps-grid">
        {steps.map((s, i) => (
          <div key={s.title} className="card">
            <div className="step-num">{i + 1}</div>
            <div className="domain-name">{s.title}</div>
            <div className="muted small">{s.text}</div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Certifications covered</h2>
      <div className="chips">
        {certs.map((c) => (
          <button key={c.id} className="chip" onClick={() => go({ view: 'cert', certId: c.id })}>
            {c.name}
          </button>
        ))}
      </div>
      <p className="muted small">{certs.length} certifications · {total} practice questions, with more on the way.</p>

      <button className="btn wide" onClick={() => go({ view: 'certs' })}>Choose a certification</button>
    </>
  )
}
