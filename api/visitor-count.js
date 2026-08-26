const WORKSPACE = 'dev-kennysorianos-team-5252'
const COUNTER_NAME = 'visitorsdevkennysoriano'
const BASE = `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'POST') {
    try {
      await fetch(`${BASE}/up`)
      await new Promise(r => setTimeout(r, 1000))
      const statsRes = await fetch(`${BASE}/stats`)
      const stats = await statsRes.json()
      return res.status(200).json({ count: stats.data?.up_count || 0 })
    } catch (e) {
      return res.status(500).json({ error: e.message })
    }
  }

  try {
    const statsRes = await fetch(`${BASE}/stats`)
    const stats = await statsRes.json()
    return res.status(200).json({ count: stats.data?.up_count || 0 })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
