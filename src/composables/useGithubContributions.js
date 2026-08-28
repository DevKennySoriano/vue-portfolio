import { ref, onMounted } from 'vue'
import { useToast } from '@/composables/useToast'

export function useGithubContributions(username = 'DevKennySoriano') {
  const weeks = ref([])
  const months = ref([])
  const contribCount = ref(0)
  const loading = ref(true)
  const { error: toastError } = useToast()

  onMounted(async () => {
    try {
      const res = await fetch(`/api/github-contributions?username=${username}&t=${Date.now()}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()

      weeks.value = data.weeks || []
      months.value = data.months || []
      contribCount.value = data.contribCount || 0
    } catch (e) {
      console.error('Failed to fetch GitHub contributions:', e)
      toastError('Could not load GitHub contributions')
    } finally {
      loading.value = false
    }
  })

  return { weeks, months, contribCount, loading }
}
