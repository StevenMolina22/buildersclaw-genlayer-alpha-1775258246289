import assert from 'node:assert/strict'
import { parseInvoice } from '../src/parser.js'

const sample = 'Acme Corp\nInvoice INV-1001\nTotal: 42.50'
const parsed = parseInvoice(sample)
assert.equal(parsed.vendor, 'Acme Corp')
assert.equal(parsed.invoiceNumber, 'INV-1001')
assert.equal(parsed.total, 42.5)
assert.equal(parsed.lineCount, 3)
console.log('parser tests passed')
