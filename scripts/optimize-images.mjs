import { readdir, stat, unlink } from 'node:fs/promises'
import { join, extname, dirname, basename } from 'node:path'
import sharp from 'sharp'

const ROOT = join(process.cwd(), 'public')
const MAX_WIDTH = 1600
const QUALITY = 82

const KEEP_PNG_DIRS = new Set(['images/icons'])
const KEEP_PNG_FILES = new Set(['images/icons/K.png', 'images/icons/K-black.png', 'images/icons/K-white.png'])

const stats = { converted: 0, skipped: 0, removed: 0, savedBytes: 0, failures: [] }

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
      continue
    }
    const ext = extname(entry.name).toLowerCase()
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

    const rel = full.replace(ROOT + '\\', '').replace(ROOT + '/', '').replace(/\\/g, '/')

    if (KEEP_PNG_FILES.has(rel) || KEEP_PNG_DIRS.has(rel.split('/')[0] + '/' + rel.split('/')[1])) {
      if (KEEP_PNG_FILES.has(rel)) {
        stats.skipped++
        console.log(`skip  ${rel}`)
      }
      continue
    }

    const before = (await stat(full)).size
    const outFile = join(dirname(full), basename(entry.name, ext) + '.webp')

    try {
      await sharp(full)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outFile)
      const after = (await stat(outFile)).size
      await unlink(full)
      stats.converted++
      stats.savedBytes += before - after
      console.log(`webp  ${rel}  ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB`)
    } catch (err) {
      stats.failures.push({ rel, error: err.message })
      console.error(`FAIL  ${rel}: ${err.message}`)
    }
  }
}

await walk(ROOT)

console.log('\n----------------------------------------')
console.log(`converted: ${stats.converted}`)
console.log(`skipped (kept as PNG): ${stats.skipped}`)
console.log(`savings: ${(stats.savedBytes / 1024 / 1024).toFixed(1)} MB`)
if (stats.failures.length) {
  console.log(`failures: ${stats.failures.length}`)
  stats.failures.forEach((f) => console.log(`  - ${f.rel}: ${f.error}`))
}