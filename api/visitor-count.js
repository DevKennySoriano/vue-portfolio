import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

const TOTAL_KEY = 'portfolio:total-visitors'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'POST') {
    const count = await redis.incr(TOTAL_KEY)
    return res.status(200).json({ count })
  }

  const count = await redis.get(TOTAL_KEY)
  return res.status(200).json({ count: count || 0 })
}
