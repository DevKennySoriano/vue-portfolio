import { ref, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY_VIEWER_ID = 'portfolio_viewer_id'
const STORAGE_KEY_COUNTED = 'portfolio_counted'

export function useVisitorCounter() {
  const totalVisitors = ref(0)
  const viewingNow = ref(0)
  const loading = ref(true)

  const WORKSPACE = 'dev-kennysorianos-team-5252'
  const COUNTER_NAME = 'visitorsdevkennysoriano'
  const BASE = `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}`
  const VIEWER_API = '/api/viewers'

  let heartbeatTimer = null
  let leaveSent = false

  const getViewerId = () => {
    let id = sessionStorage.getItem(STORAGE_KEY_VIEWER_ID)
    if (!id) {
      id = Math.random().toString(36).slice(2, 9)
      sessionStorage.setItem(STORAGE_KEY_VIEWER_ID, id)
    }
    return id
  }

  const viewerId = getViewerId()

  const sendHeartbeat = async () => {
    try {
      const res = await fetch(VIEWER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: viewerId })
      })
      if (res.ok) {
        const data = await res.json()
        viewingNow.value = data.count
      }
    } catch {}
  }

  const sendLeave = async () => {
    if (leaveSent) return
    leaveSent = true
    try {
      await fetch(VIEWER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: viewerId, action: 'leave' })
      })
    } catch {}
  }

  onMounted(async () => {
    const alreadyCounted = sessionStorage.getItem(STORAGE_KEY_COUNTED)
    const url = alreadyCounted ? BASE : `${BASE}/up`

    try {
      const res = await fetch(url)
      const data = await res.json()
      if (res.ok) {
        totalVisitors.value = data.data?.up_count || 0
        if (!alreadyCounted) {
          sessionStorage.setItem(STORAGE_KEY_COUNTED, '1')
        }
      }
    } catch (e) {
      console.error('[VisitorCounter]', e)
    } finally {
      loading.value = false
    }

    await sendHeartbeat()
    heartbeatTimer = setInterval(sendHeartbeat, 15000)

    window.addEventListener('pagehide', sendLeave)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') sendLeave()
    })
  })

  onUnmounted(() => {
    clearInterval(heartbeatTimer)
    sendLeave()
  })

  return { totalVisitors, viewingNow, loading }
}
