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
        const res = await fetch(`/api/github-contributions?username=${username}`, { cache: 'no-store' })
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

  const monthLabels = []
  const monthRegex = /<td class="ContributionCalendar-label"[^>]*>\s*<span class="sr-only">(\w+)<\/span>/g
  let m
  while ((m = monthRegex.exec(html)) !== null) {
    monthLabels.push(m[1])
  }

  const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/)
  if (!tbodyMatch) return { weeks: [], months: monthLabels, contribCount }

  const rows = []
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g
  let tr
  while ((tr = trRegex.exec(tbodyMatch[1])) !== null) {
    const cellRegex = /data-level="(\d)"/g
    const cells = []
    let cell
    while ((cell = cellRegex.exec(tr[1])) !== null) {
      cells.push(parseInt(cell[1]))
    }
    if (cells.length > 0) rows.push(cells)
  }

  const numWeeks = rows[0] ? rows[0].length : 0
  const weeks = []
  for (let w = 0; w < numWeeks; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      week.push(rows[d] ? rows[d][w] || 0 : 0)
    }
    weeks.push(week)
  }

  return { weeks, months: monthLabels, contribCount }
}
