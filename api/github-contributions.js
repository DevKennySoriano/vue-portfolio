export default async function handler(req, res) {
  const { username = 'DevKennySoriano' } = req.query

  try {
    const response = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/html',
      },
    })

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch' })
    }

    const html = await response.text()

    const countMatch = html.match(/(\d[\d,]*)\s*contributions/)
    const contribCount = countMatch ? parseInt(countMatch[1].replace(/,/g, '')) : 0

    const monthLabels = []
    const monthRegex = /<td class="ContributionCalendar-label"[^>]*>\s*<span class="sr-only">(\w+)<\/span>/g
    let m
    while ((m = monthRegex.exec(html)) !== null) {
      monthLabels.push(m[1])
    }

    const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/)
    if (!tbodyMatch) {
      return res.status(200).json({ weeks: [], months: monthLabels, contribCount })
    }

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

    res.setHeader('Cache-Control', 'no-store')
    res.status(200).json({ weeks, months: monthLabels, contribCount })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
