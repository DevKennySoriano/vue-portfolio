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

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.status(200).json({ weeks, months, contribCount })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
