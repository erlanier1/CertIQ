# CertIQ

## What it is
CertIQ helps people prepare for compliance, privacy, security and AI-governance certifications: CISM, CISA, AIGP, CIPP/US and more.

## Who it's for
- Students
- Employees
- Training companies

## Core features (v1)
1. **Domain review:** a summary and key points for each exam domain.
2. **Practice test:** by domain, or across all domains.
3. **Score:** overall and by domain.
4. **Review wrong answers:** each miss shows the correct answer, why it's correct, and a link back to the domain review.

## Platform
A website that can be installed as an app (PWA) and works offline after the first visit.

## Status
| Certification | Domains | Review content | Questions |
|---|---|---|---|
| CISM | ✅ | ✅ | 44 (11 per domain) |
| CISA | ✅ | ⏳ | ⏳ |
| AIGP | ✅ | ⏳ | ⏳ |
| CIPP/US | ✅ | ⏳ | ⏳ |

## Later list (not now)
Add new ideas here so they don't derail v1.
-

## Run it locally
```bash
npm install
npm run dev      # development server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Where content lives
- `src/data/certs.js`: the list of certifications and their domains
- `src/data/cism.js`: CISM review notes and questions (copy this pattern for each new cert)
