export function parseInvoice(text) {
  const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean)
  const totalLine = lines.find((line) => /total/i.test(line)) || ''
  const invoiceLine = lines.find((line) => /invoice/i.test(line)) || ''
  const totalMatch = totalLine.match(/([0-9]+(?:\.[0-9]{2})?)/)
  const invoiceMatch = invoiceLine.match(/([A-Z0-9-]{3,})/i)
  return {
    vendor: lines[0] || null,
    invoiceNumber: invoiceMatch ? invoiceMatch[1] : null,
    total: totalMatch ? Number(totalMatch[1]) : null,
    lineCount: lines.length,
  }
}
