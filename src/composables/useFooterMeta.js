import { computed } from 'vue'

export function useFooterMeta() {
  const lastUpdated = typeof __LAST_UPDATED__ !== 'undefined' ? __LAST_UPDATED__ : 'Unknown'

  const formattedLastUpdated = computed(() => {
    if (lastUpdated === 'Unknown') {
      return lastUpdated
    }

    const parsedDate = new Date(lastUpdated)

    if (Number.isNaN(parsedDate.getTime())) {
      return lastUpdated
    }

    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }).format(parsedDate)
  })

  return {
    formattedLastUpdated,
  }
}