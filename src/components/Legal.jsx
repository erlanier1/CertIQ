import { site, certBodies } from '../site.js'

const Contact = () =>
  site.contactEmail ? (
    <p>Questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
  ) : (
    <p>Contact details for questions about this policy will be posted here.</p>
  )

function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="muted small">Last updated: {site.policiesUpdated}</p>

      <h2>The short version</h2>
      <p>
        {site.name} does not ask for your name, email or any other personal information to use the app. There are no
        accounts, no advertising and no tracking cookies.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Problem reports and emails:</strong> if you use “Report a problem” or email us, we receive your email
          address and whatever you include. We use it only to fix content and reply to you, and we don’t add you to any
          mailing list.
        </li>
        <li><strong>Your quiz answers and scores:</strong> these stay in your browser while you use the app and are not sent to us.</li>
        <li>
          <strong>Basic technical data:</strong> like any website, our hosting provider automatically processes standard
          request data (such as IP address, browser type and the pages requested) to deliver the site and protect it from
          abuse. We do not use this data to identify you.
        </li>
      </ul>

      <h2>Cookies and offline storage</h2>
      <p>
        We do not use tracking or advertising cookies. The app uses your browser’s storage to save a copy of the site so
        it can load quickly and work offline. You can clear this at any time in your browser settings.
      </p>

      <h2>Sharing</h2>
      <p>We do not sell or share personal information. We only use service providers, such as our host, to run the site.</p>

      <h2>Children</h2>
      <p>{site.name} is designed for adults and is not directed to children under 13. We do not knowingly collect information from children.</p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct or delete personal information. Because we
        don’t collect personal information through the app, there is usually nothing for us to provide, but you are
        welcome to contact us.
      </p>

      <h2>Changes</h2>
      <p>
        If we add features that collect information, such as accounts or payments, we will update this policy before
        those features go live and change the date above.
      </p>

      <h2>Contact</h2>
      <Contact />
    </>
  )
}

function Terms() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p className="muted small">Last updated: {site.policiesUpdated}</p>

      <h2>Using {site.name}</h2>
      <p>
        By using {site.name}, you agree to these terms. If you don’t agree, please don’t use the site.
      </p>

      <h2>Study aid only</h2>
      <p>
        {site.name} is a study aid. Its review notes and practice questions are original material written to help you
        prepare. They are not official exam questions, and using {site.name} does not guarantee that you will pass any exam.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Use {site.name} for your own personal study or for training within your organization.</li>
        <li>Do not copy, resell or republish the questions or content without written permission.</li>
        <li>Do not try to disrupt, hack or overload the site.</li>
      </ul>

      <h2>Ownership</h2>
      <p>
        The {site.name} name, design and content are owned by {site.name}. Certification names are trademarks of their
        respective owners and are used only to describe the exams the content relates to.
      </p>

      <h2>No warranty</h2>
      <p>
        The site and content are provided “as is.” We work to keep content accurate and current, but exam outlines
        change and errors can happen. We make no warranties about accuracy, completeness or availability.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent allowed by law, {site.name} is not liable for any indirect or consequential losses, or for
        exam results, arising from your use of the site.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date above shows when they last changed.</p>

      <h2>Contact</h2>
      <Contact />
    </>
  )
}

function Disclaimer() {
  return (
    <>
      <h1>Disclaimer</h1>
      <p className="muted small">Last updated: {site.policiesUpdated}</p>

      <h2>Not affiliated</h2>
      <p>
        {site.name} is an independent study tool. It is not affiliated with, endorsed by, or sponsored by {certBodies}.
      </p>

      <h2>Trademarks</h2>
      <p>
        CISM and CISA are trademarks of ISACA. CISSP is a trademark of ISC2. CompTIA Security+ is a trademark of
        CompTIA. AIGP and CIPP/US are trademarks of the International Association of Privacy Professionals (IAPP). All
        other trademarks belong to their respective owners.
      </p>

      <h2>Original content</h2>
      <p>
        All review notes and practice questions are original and written by {site.name}. They are not taken from any
        official exam, and they do not represent actual exam questions.
      </p>

      <h2>Accuracy</h2>
      <p>
        Exam outlines change over time. Always check the official exam outline from the certifying body before your
        exam. Use {site.name} alongside official study materials, not instead of them.
      </p>

      <h2>Contact</h2>
      <Contact />
    </>
  )
}

const pages = { privacy: Privacy, terms: Terms, disclaimer: Disclaimer }

export default function Legal({ page, go }) {
  const Page = pages[page]
  return (
    <article className="legal">
      <button className="back" onClick={() => go({ view: 'home' })}>← Home</button>
      <Page />
    </article>
  )
}
