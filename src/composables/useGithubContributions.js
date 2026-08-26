import { ref, onMounted } from 'vue'

export function useGithubContributions(username = 'DevKennySoriano') {
  const weeks = ref([])
  const months = ref([])
  const contribCount = ref(0)
  const loading = ref(true)

  onMounted(async () => {
    try {
      const url = `https://github.com/users/${username}/contributions`
      const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(url)}`
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)

      const res = await fetch(proxyUrl, { signal: controller.signal })
      clearTimeout(timeout)

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const html = await res.text()

      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const countEl = doc.querySelector('h2')
      if (countEl) {
        const num = countEl.textContent.match(/(\d[\d,]*)/)
        contribCount.value = num ? parseInt(num[1].replace(/,/g, '')) : 0
      }

      const monthLabels = doc.querySelectorAll('thead .ContributionCalendar-label [aria-hidden="true"]')
      months.value = Array.from(monthLabels).map(el => el.textContent.trim())

      const rows = doc.querySelectorAll('tbody tr')
      const numWeeks = rows[0] ? rows[0].querySelectorAll('td[data-level]').length : 0

      const grid = []
      for (let w = 0; w < numWeeks; w++) {
        const week = []
        for (let d = 0; d < 7; d++) {
          const row = rows[d]
          if (!row) { week.push(0); continue }
          const cells = row.querySelectorAll('td[data-level]')
          const cell = cells[w]
          week.push(cell ? parseInt(cell.getAttribute('data-level')) : 0)
        }
        grid.push(week)
      }
      weeks.value = grid
    } catch (e) {
      console.error('Failed to fetch GitHub contributions:', e)
    } finally {
      loading.value = false
    }
  })

  return { weeks, months, contribCount, loading }
}
