import { onMounted, ref } from 'vue'

export function useAppLoader() {
  const isLoading = ref(true)

  const hideLoader = () => {
    window.setTimeout(() => {
      isLoading.value = false
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, 3000)
  }

  onMounted(() => {
    if (document.readyState === 'complete') {
      hideLoader()
      return
    }

    window.addEventListener('load', hideLoader, { once: true })
  })

  return {
    isLoading,
  }
}