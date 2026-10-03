import { cism } from './cism.js'

// Domain names and weights follow each body's published exam outline.
// Re-check them against the official outline whenever the exam is updated.
export const certs = [
  cism,
  {
    id: 'cisa',
    name: 'CISA',
    fullName: 'Certified Information Systems Auditor',
    issuer: 'ISACA',
    area: 'Audit',
    ready: false,
    domains: [
      { id: 'd1', name: 'Information System Auditing Process', weight: 18 },
      { id: 'd2', name: 'Governance and Management of IT', weight: 18 },
      { id: 'd3', name: 'Information Systems Acquisition, Development and Implementation', weight: 12 },
      { id: 'd4', name: 'Information Systems Operations and Business Resilience', weight: 26 },
      { id: 'd5', name: 'Protection of Information Assets', weight: 26 }
    ]
  },
  {
    id: 'aigp',
    name: 'AIGP',
    fullName: 'Artificial Intelligence Governance Professional',
    issuer: 'IAPP',
    area: 'AI Governance',
    ready: false,
    domains: [
      { id: 'd1', name: 'Foundations of AI governance' },
      { id: 'd2', name: 'How laws, standards and frameworks apply to AI' },
      { id: 'd3', name: 'Governing AI development' },
      { id: 'd4', name: 'Governing AI deployment and use' }
    ]
  },
  {
    id: 'cipp',
    name: 'CIPP',
    fullName: 'Certified Information Privacy Professional',
    issuer: 'IAPP',
    area: 'Privacy',
    ready: false,
    domains: []
  }
]

export const getCert = (id) => certs.find((c) => c.id === id)
