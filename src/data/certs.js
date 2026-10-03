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
    id: 'cipp-us',
    name: 'CIPP/US',
    fullName: 'Certified Information Privacy Professional/United States',
    issuer: 'IAPP',
    area: 'Privacy',
    ready: false,
    domains: [
      { id: 'd1', name: 'Introduction to the U.S. privacy environment' },
      { id: 'd2', name: 'Limits on private-sector collection and use of data' },
      { id: 'd3', name: 'Government and court access to private-sector information' },
      { id: 'd4', name: 'Workplace privacy' },
      { id: 'd5', name: 'State privacy laws' }
    ]
  }
]

export const getCert = (id) => certs.find((c) => c.id === id)
