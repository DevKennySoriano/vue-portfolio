const viewers = new Map()
const TIMEOUT = 30000

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const now = Date.now()

  for (const [id, ts] of viewers) {
    if (now - ts > TIMEOUT) viewers.delete(id)
  }

  if (req.method === 'POST') {
    const { id, action } = req.body || {}
    if (id) {
      if (action === 'leave') {
        viewers.delete(id)
      } else {
        viewers.set(id, now)
      }
    }
    return res.status(200).json({ count: viewers.size })
  }

  return res.status(200).json({ count: viewers.size })
}
