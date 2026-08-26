import { ref, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY_VIEWER_ID = 'portfolio_viewer_id'
const STORAGE_KEY_COUNTED = 'portfolio_counted'
const STORAGE_KEY_VIEWERS = 'viewers'

export function useVisitorCounter() {
  const totalVisitors = ref(0)
  const viewingNow = ref(0)
  const loading = ref(true)

  const API_KEY = import.meta.env.VITE_COUNTER_API_KEY
  const WORKSPACE = 'kenny-portfolio'
  const COUNTER_NAME = 'visitors'

  let channel = null
  let isInitialMount = true

  const getViewerId = () => {
    let id = sessionStorage.getItem(STORAGE_KEY_VIEWER_ID)
    if (!id) {
      id = Math.random().toString(36).slice(2, 9)
      sessionStorage.setItem(STORAGE_KEY_VIEWER_ID, id)
    }
    return id
  }

  const viewerId = getViewerId()

  const getViewers = () => JSON.parse(sessionStorage.getItem(STORAGE_KEY_VIEWERS) || '{}')

  const setViewers = (obj) => sessionStorage.setItem(STORAGE_KEY_VIEWERS, JSON.stringify(obj))

  const broadcast = (msg) => {
    if (channel) channel.postMessage(msg)
  }

  const recalcViewers = () => {
    viewingNow.value = Object.keys(getViewers()).length
  }

  const addViewer = () => {
    const active = getViewers()
    active[viewerId] = Date.now()
    setViewers(active)
    recalcViewers()
  }

  const removeViewer = () => {
    const active = getViewers()
    delete active[viewerId]
    setViewers(active)
    recalcViewers()
  }

  onMounted(async () => {
    const alreadyCounted = sessionStorage.getItem(STORAGE_KEY_COUNTED)

    if (!alreadyCounted) {
      try {
        const res = await fetch(
          `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}/up`,
          { headers: { Authorization: `Bearer ${API_KEY}` } }
        )
        if (res.ok) {
          const data = await res.json()
          totalVisitors.value = data.data?.up_count || data.value || 0
          sessionStorage.setItem(STORAGE_KEY_COUNTED, '1')
        }
      } catch (e) {
        console.error('Visitor count error:', e)
      } finally {
        loading.value = false
      }
    } else {
      try {
        const res = await fetch(
          `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}`,
          { headers: { Authorization: `Bearer ${API_KEY}` } }
        )
        if (res.ok) {
          const data = await res.json()
          totalVisitors.value = data.data?.count || data.value || 0
        }
      } catch (e) {
        console.error('Visitor count fetch error:', e)
      } finally {
        loading.value = false
      }
    }

    try {
      channel = new BroadcastChannel('portfolio-viewers')

      addViewer()

      channel.postMessage({ type: 'join', id: viewerId })

      channel.onmessage = (e) => {
        if (e.data.type === 'join' && e.data.id !== viewerId) {
          addViewer()
          broadcast({ type: 'sync', viewers: getViewers() })
        }
        if (e.data.type === 'sync' && e.data.viewers) {
          setViewers(e.data.viewers)
          recalcViewers()
        }
        if (e.data.type === 'leave') {
          const active = getViewers()
          delete active[e.data.id]
          setViewers(active)
          recalcViewers()
        }
      }

      window.addEventListener('beforeunload', () => {
        broadcast({ type: 'leave', id: viewerId })
        removeViewer()
      })

      isInitialMount = false
    } catch (e) {
      viewingNow.value = 1
    }
  })

  onUnmounted(() => {
    if (!isInitialMount && channel) {
      channel.close()
    }
  })

  return { totalVisitors, viewingNow, loading }
}
