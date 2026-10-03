import { cism } from './cism.js'
import { cisa } from './cisa.js'
import { cissp } from './cissp.js'
import { secplus } from './secplus.js'
import { aigp } from './aigp.js'
import { cippus } from './cippus.js'

// Domain names and weights follow each body's published exam outline.
// Re-check them against the official outline whenever the exam is updated.
export const certs = [cism, cisa, cissp, secplus, aigp, cippus]

export const getCert = (id) => certs.find((c) => c.id === id)
