import { useState } from 'react'
import ReportProblem from './ReportProblem.jsx'

const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Shuffle choices too, so the correct letter isn't predictable.
const shuffleChoices = (q) => {
  const order = shuffle(q.choices.map((_, i) => i))
  return { ...q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) }
}

const buildQuestions = (cert, domain) =>
  shuffle(
    (domain ? [domain] : cert.domains).flatMap((d) =>
      d.questions.map((q) => ({ ...shuffleChoices(q), domainId: d.id, domainName: d.name }))
    )
  )

export default function Quiz({ cert, domain, onDone, go }) {
  const [questions] = useState(() => buildQuestions(cert, domain))
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [answers, setAnswers] = useState([])

  const q = questions[index]
  const isLast = index === questions.length - 1

  const next = () => {
    const all = [...answers, { ...q, picked }]
    if (isLast) return onDone({ answers: all })
    setAnswers(all)
    setPicked(null)
    setIndex(index + 1)
  }

  return (
    <>
      <button className="back" onClick={() => go({ view: 'cert', certId: cert.id })}>← Quit</button>
      <div className="small muted">
        {domain ? domain.name : `${cert.name}: all domains`} · Question {index + 1} of {questions.length}
      </div>
      <div className="progress"><div style={{ width: `${(index / questions.length) * 100}%` }} /></div>

      <h2 className="question">{q.q}</h2>
      <div className="choices">
        {q.choices.map((c, i) => (
          <button
            key={c}
            className={`choice ${picked === i ? 'picked' : ''}`}
            onClick={() => setPicked(i)}
          >
            <span className="letter">{String.fromCharCode(65 + i)}</span>
            {c}
          </button>
        ))}
      </div>

      <ReportProblem key={q.q} cert={cert} question={q} />

      <button className="btn wide" disabled={picked === null} onClick={next}>
        {isLast ? 'See my score' : 'Next question'}
      </button>
    </>
  )
}
