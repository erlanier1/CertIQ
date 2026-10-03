import { useState } from 'react'
import { getCert } from './data/certs.js'
import Home from './components/Home.jsx'
import CertOverview from './components/CertOverview.jsx'
import DomainReview from './components/DomainReview.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'

export default function App() {
  const [screen, setScreen] = useState({ view: 'home' })
  const go = (next) => {
    setScreen(next)
    window.scrollTo(0, 0)
  }

  const cert = screen.certId ? getCert(screen.certId) : null
  const domain = cert && screen.domainId ? cert.domains.find((d) => d.id === screen.domainId) : null

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => go({ view: 'home' })}>
          <img src="/icon.svg" alt="" width="28" height="28" />
          CertIQ
        </button>
      </header>
      <main className="content">
        {screen.view === 'home' && <Home onPick={(certId) => go({ view: 'cert', certId })} />}
        {screen.view === 'cert' && <CertOverview cert={cert} go={go} />}
        {screen.view === 'review' && <DomainReview cert={cert} domain={domain} go={go} />}
        {screen.view === 'quiz' && (
          <Quiz
            key={`${cert.id}-${screen.domainId ?? 'all'}-${screen.attempt ?? 0}`}
            cert={cert}
            domain={domain}
            onDone={(result) => go({ ...screen, view: 'results', result })}
            go={go}
          />
        )}
        {screen.view === 'results' && <Results cert={cert} domain={domain} result={screen.result} go={go} />}
      </main>
    </div>
  )
}
