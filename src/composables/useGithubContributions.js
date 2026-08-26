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
        const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(url)}&t=${Date.now()}`
        const res = await fetch(proxyUrl)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const html = await res.text()
        data = parseGitHubHTML(html)
      } else {
        const res = await fetch(`/api/github-contributions?username=${username}&t=${Date.now()}`)
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
    const trContent = tr[1]
    const cells = []
    const cellRegex = /data-date="([^"]+)"[^>]*data-level="(\d)"[^>]*class="ContributionCalendar-day"[^>]*>[\s\S]*?<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g
    let cell
    while ((cell = cellRegex.exec(trContent)) !== null) {
      const level = parseInt(cell[2])
      const tipText = cell[3].replace(/<[^>]*>/g, '').trim()
      let count = 0
      if (level > 0) {
        const tipCountMatch = tipText.match(/^(\d+)\s+contribution/)
        if (tipCountMatch) count = parseInt(tipCountMatch[1])
      }
      cells.push({ level, count, date: cell[1] })
    }
    if (cells.length > 0) rows.push(cells)
  }

  const numWeeks = rows[0] ? rows[0].length : 0
  const weeks = []
  for (let w = 0; w < numWeeks; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      week.push(rows[d] ? rows[d][w] || { level: 0, count: 0, date: '' } : { level: 0, count: 0, date: '' })
    }
    weeks.push(week)
  }

  return { weeks, months: monthLabels, contribCount }
}
