import { ref, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY_VIEWER_ID = 'portfolio_viewer_id'
const VIEWER_API = '/api/viewers'
const COUNT_API = '/api/visitor-count'

let hasIncremented = false
let cachedCount = 0
let heartbeatTimer = null
let currentViewerId = null

function getViewerId() {
  if (currentViewerId) return currentViewerId
  let id = sessionStorage.getItem(STORAGE_KEY_VIEWER_ID)
  if (!id) {
    id = Math.random().toString(36).slice(2, 9)
    sessionStorage.setItem(STORAGE_KEY_VIEWER_ID, id)
  }
  currentViewerId = id
  return id
}

export function useVisitorCounter() {
  const totalVisitors = ref(cachedCount)
  const viewingNow = ref(0)
  const loading = ref(true)

  const sendHeartbeat = async () => {
    const id = getViewerId()
    try {
      const res = await fetch(VIEWER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      if (res.ok) {
        const data = await res.json()
        viewingNow.value = data.count
      }
    } catch {}
  }

  const sendLeave = async () => {
    const id = getViewerId()
    try {
      await fetch(VIEWER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'leave' })
      })
    } catch {}
  }

  onMounted(async () => {
    if (!hasIncremented) {
      try {
        const res = await fetch(COUNT_API, { method: 'POST' })
        const data = await res.json()
        cachedCount = data.count || 0
        totalVisitors.value = cachedCount
        hasIncremented = true
      } catch (e) {
        console.error('[VisitorCounter]', e)
      } finally {
        loading.value = false
      }
    } else {
      totalVisitors.value = cachedCount
      loading.value = false
    }

    if (!heartbeatTimer) {
      await sendHeartbeat()
      heartbeatTimer = setInterval(sendHeartbeat, 15000)
    }

    window.addEventListener('pagehide', sendLeave)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') sendLeave()
    })
  })

  onUnmounted(() => {})

  return { totalVisitors, viewingNow, loading }
}
