import { useId, useState } from 'react'
import { site } from '../site.js'

const reasons = ['The marked answer is wrong', 'The question is confusing', 'Typo or wording issue', 'Something else']

export default function ReportProblem({ cert, question }) {
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState(reasons[0])
  const [comment, setComment] = useState('')
  const [sent, setSent] = useState(false)
  const group = useId()

  const send = () => {
    const subject = `CertIQ problem report: ${cert.name} - ${question.domainName}`
    const body = [
      `Reason: ${reason}`,
      `Comment: ${comment || '(none)'}`,
      '',
      `Certification: ${cert.name}`,
      `Domain: ${question.domainName}`,
      `Question: ${question.q}`,
      `Answer marked correct: ${question.choices[question.answer]}`
    ].join('\n')
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <p className="report-thanks small">
        Thanks! Your email app should open with the report filled in. Just press send. If it didn’t open, email{' '}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    )
  }

  if (!open) {
    return (
      <button className="link report-link" onClick={() => setOpen(true)}>
        ⚑ Report a problem
      </button>
    )
  }

  return (
    <div className="report-box">
      <div className="small"><strong>What’s wrong with this question?</strong></div>
      {reasons.map((r) => (
        <label key={r} className="report-option small">
          <input type="radio" name={group} checked={reason === r} onChange={() => setReason(r)} />
          {r}
        </label>
      ))}
      <textarea
        className="report-comment"
        rows="3"
        placeholder="Optional: tell us more"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="row-actions">
        <button className="btn" onClick={send}>Send report</button>
        <button className="btn ghost" onClick={() => setOpen(false)}>Cancel</button>
      </div>
      <p className="small muted">This opens your email app. Your email address will be visible to us when you send it.</p>
    </div>
  )
}
