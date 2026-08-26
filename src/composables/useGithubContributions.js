import { ref, onMounted } from 'vue'

export function useGithubContributions(username = 'DevKennySoriano') {
  const weeks = ref([])
  const months = ref([])
  const contribCount = ref(0)
  const loading = ref(true)

  onMounted(async () => {
    try {
      const isDev = import.meta.env.DEV
      let data

      if (isDev) {
        const url = `https://github.com/users/${username}/contributions`
        const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(url)}`
        const res = await fetch(proxyUrl)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const html = await res.text()
        data = parseGitHubHTML(html)
      } else {
        const res = await fetch(`/api/github-contributions?username=${username}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        data = await res.json()
      }

      weeks.value = data.weeks || []
      months.value = data.months || []
      contribCount.value = data.contribCount || 0
    } catch (e) {
      console.error('Failed to fetch GitHub contributions:', e)
    } finally {
      loading.value = false
    }
  })

  return { weeks, months, contribCount, loading }
}

function parseGitHubHTML(html) {
  const countMatch = html.match(/(\d[\d,]*)\s*contributions/)
  const contribCount = countMatch ? parseInt(countMatch[1].replace(/,/g, '')) : 0

  const monthRegex = /<td class="ContributionCalendar-label"[^>]*>[\s\S]*?<span[^>]*>(\w+)<\/span>/g
  const months = []
  let m
  while ((m = monthRegex.exec(html)) !== null) {
    months.push(m[1])
  }

  const dayRegex = /data-level="(\d)"/g
  const levels = []
  let d
  while ((d = dayRegex.exec(html)) !== null) {
    levels.push(parseInt(d[1]))
  }

  const weeks = []
  for (let i = 0; i < levels.length; i += 7) {
    weeks.push(levels.slice(i, i + 7))
  }

  return { weeks, months, contribCount }
}
