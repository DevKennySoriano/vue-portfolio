import { ref, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY_VIEWER_ID = 'portfolio_viewer_id'
const STORAGE_KEY_COUNTED = 'portfolio_counted'
const VIEWER_API = '/api/viewers'
const COUNT_API = '/api/visitor-count'

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
  const totalVisitors = ref(0)
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
    const alreadyCounted = sessionStorage.getItem(STORAGE_KEY_COUNTED)

    if (!alreadyCounted) {
      try {
        const res = await fetch(COUNT_API, { method: 'POST' })
        const data = await res.json()
        totalVisitors.value = data.count || 0
        sessionStorage.setItem(STORAGE_KEY_COUNTED, '1')
      } catch (e) {
        console.error('[VisitorCounter]', e)
      } finally {
        loading.value = false
      }
    } else {
      try {
        const res = await fetch(COUNT_API)
        const data = await res.json()
        totalVisitors.value = data.count || 0
      } catch {}
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
