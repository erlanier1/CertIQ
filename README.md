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
| CISA | ✅ | ✅ | 30 (6 per domain) |
| AIGP | ✅ | ✅ | 24 (6 per domain) |
| CIPP/US | ✅ | ✅ | 30 (6 per domain) |

## Later list (not now)
Add new ideas here so they don't derail v1.
- CompTIA Security+ (6th cert, keeps the 2-column grid even)

## Run it locally
```bash
npm install
npm run dev      # development server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Where content lives
- `src/data/certs.js`: the list of certifications and their domains
- `src/data/cism.js`, `cisa.js`, `aigp.js`, `cippus.js`: review notes and questions for each cert

All questions are original practice questions, not official exam items. Have a subject-matter expert review them before wide release.

## Deploy
The app is a static site. On Vercel or Netlify, import the GitHub repo and use the defaults:
- Build command: `npm run build`
- Output folder: `dist`
