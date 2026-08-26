import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

const TIMEOUT = 30

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const now = Math.floor(Date.now() / 1000)

  if (req.method === 'POST') {
    const { id, action } = req.body || {}
    if (!id) return res.status(400).json({ error: 'Missing id' })

    const key = `viewer:${id}`

    if (action === 'leave') {
      await redis.del(key)
    } else {
      await redis.set(key, now, { ex: TIMEOUT })
    }

    const keys = await redis.keys('viewer:*')
    return res.status(200).json({ count: keys.length })
  }

  const keys = await redis.keys('viewer:*')
  return res.status(200).json({ count: keys.length })
}
