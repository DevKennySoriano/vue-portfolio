import { ref, onMounted, onUnmounted } from 'vue'
import { useToast } from '@/composables/useToast'

const STORAGE_KEY_VIEWER_ID = 'portfolio_viewer_id'
const VIEWER_API = '/api/viewers'
const COUNT_API = '/api/visitor-count'

const totalVisitors = ref(0)
const viewingNow = ref(0)
const loading = ref(true)

let heartbeatTimer = null
let currentViewerId = null
let initialized = false

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

async function sendHeartbeat() {
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

async function sendLeave() {
  const id = getViewerId()
  try {
    await fetch(VIEWER_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'leave' })
    })
  } catch {}
}

export function useVisitorCounter() {
  const { error: toastError } = useToast()

  onMounted(async () => {
    if (!initialized) {
      initialized = true

      try {
        const res = await fetch(COUNT_API, { method: 'POST' })
        const data = await res.json()
        totalVisitors.value = data.count || 0
      } catch (e) {
        console.error('[VisitorCounter]', e)
        toastError('Visitor count unavailable')
      } finally {
        loading.value = false
      }

      await sendHeartbeat()
      heartbeatTimer = setInterval(sendHeartbeat, 15000)

      window.addEventListener('pagehide', sendLeave)
    }
  })

  onUnmounted(() => {})

  return { totalVisitors, viewingNow, loading }
}
