import { onMounted, ref } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
    isDark.value = theme === 'dark'
  }

  const toggleTheme = () => {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  onMounted(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    applyTheme(storedTheme || 'light')
  })

  return {
    isDark,
    toggleTheme,
  }
}