import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'

let lastUpdated = 'Unknown'
try {
  const gitDate = execSync('git log -1 --format=%cd --date=format:%Y-%m-%d', {
    encoding: 'utf-8',
  }).trim()
  if (gitDate) {
    lastUpdated = gitDate
  }
} catch {
  // Keep fallback when git is unavailable (e.g., ZIP deploys).
}

export default defineConfig({
  plugins: [vue()],
  define: {
    __LAST_UPDATED__: JSON.stringify(lastUpdated),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
