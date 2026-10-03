import { site, certBodies } from '../site.js'

export default function Footer({ go }) {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <button className="link" onClick={() => go({ view: 'privacy' })}>Privacy Policy</button>
        <button className="link" onClick={() => go({ view: 'terms' })}>Terms of Use</button>
        <button className="link" onClick={() => go({ view: 'disclaimer' })}>Disclaimer</button>
      </nav>
      <p className="small muted">
        {site.name} is an independent study tool and is not affiliated with, endorsed by, or sponsored by {certBodies}.
        All certification names are trademarks of their respective owners.
      </p>
      <p className="small muted">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}
