import { ref } from 'vue'

const toasts = ref([])
let nextId = 0

export function useToast() {
  function show(message, { type = 'info', duration = 3000 } = {}) {
    const id = nextId++
    toasts.value.push({ id, message, type })
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, duration)
  }

  function success(message, opts) {
    show(message, { ...opts, type: 'success' })
  }

  function error(message, opts) {
    show(message, { ...opts, type: 'error', duration: 4000 })
  }

  return { toasts, show, success, error }
}
