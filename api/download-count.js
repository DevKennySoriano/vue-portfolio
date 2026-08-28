import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

const PREFIX = 'portfolio:download:'

function sanitize(name) {
  return String(name || 'unknown').replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase().slice(0, 60)
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const resource = sanitize(req.query.resource || req.body?.resource || 'unknown')
  const key = PREFIX + resource

  if (req.method === 'POST') {
    const count = await redis.incr(key)
    return res.status(200).json({ resource, count })
  }

  const count = await redis.get(key)
  return res.status(200).json({ resource, count: count || 0 })
}
