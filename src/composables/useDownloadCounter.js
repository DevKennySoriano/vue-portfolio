import { reactive } from 'vue'

const API = '/api/download-count'

function normalize(key) {
  return String(key).toLowerCase().replace(/[^a-z0-9-_]/g, '-')
}

export function useDownloadCounter() {
  const counts = reactive({})

  async function fetchCount(resource) {
    const key = normalize(resource)
    if (typeof counts[key] !== 'number') counts[key] = 0
    try {
      const res = await fetch(`${API}?resource=${encodeURIComponent(key)}`)
      const data = await res.json()
      counts[key] = data.count || 0
    } catch {}
    return counts[key]
  }

  async function increment(resource) {
    const key = normalize(resource)
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resource: key }),
      })
      const data = await res.json()
      counts[key] = data.count || (counts[key] || 0) + 1
    } catch {
      counts[key] = (counts[key] || 0) + 1
    }
    return counts[key]
  }

  return { counts, fetchCount, increment }
}
