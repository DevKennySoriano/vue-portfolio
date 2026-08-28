import { reactive } from 'vue'

const API = '/api/project-views'

export function useProjectViews() {
  const views = reactive({})

  async function fetchAll(slugs) {
    const jobs = (slugs || []).map(async (slug) => {
      try {
        const res = await fetch(`${API}?slug=${encodeURIComponent(slug)}`)
        const data = await res.json()
        views[slug] = data.count || 0
      } catch {
        views[slug] = views[slug] || 0
      }
    })
    await Promise.all(jobs)
    return views
  }

  async function increment(slug) {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()
      views[slug] = data.count || (views[slug] || 0) + 1
    } catch {
      views[slug] = (views[slug] || 0) + 1
    }
    return views[slug]
  }

  return { views, fetchAll, increment }
}
