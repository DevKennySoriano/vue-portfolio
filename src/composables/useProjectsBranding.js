import { nextTick, onMounted, onUnmounted, ref } from 'vue'

export function useProjectsBranding() {
  const brandingWorks = [
    '/images/brandstyling/Dump-Cat.png',
    '/images/brandstyling/HomeHive.png',
    '/images/brandstyling/EcoAlert.png',
    '/images/brandstyling/CKMJ.png',
    '/images/brandstyling/All About Pets.png',
    '/images/brandstyling/Lutowl.png',
  ]

  const track = ref(null)
  const groups = ref([brandingWorks, brandingWorks])
  const loadedImages = ref({})
  const previewSrc = ref('')

  let rafId
  let lastTime = 0
  let x = 0
  const speed = 100
  let groupWidth = 0
  let gap = 0

  const maybeAppendGroup = () => {
    const trackEl = track.value
    const viewportWidth = trackEl.parentElement.offsetWidth
    const remaining = trackEl.scrollWidth + x - viewportWidth

    if (remaining < groupWidth * 1.5) {
      groups.value.push(brandingWorks)
    }
  }

  const animate = (time) => {
    if (!lastTime) lastTime = time
    const delta = (time - lastTime) / 1000
    lastTime = time

    x -= speed * delta
    track.value.style.transform = `translate3d(${x}px, 0, 0)`

    maybeAppendGroup()
    rafId = requestAnimationFrame(animate)
  }

  const openPreview = (src) => {
    previewSrc.value = src
  }

  const closePreview = () => {
    previewSrc.value = ''
  }

  const onKeydown = (event) => {
    if (event.key === 'Escape' && previewSrc.value) {
      closePreview()
    }
  }

  onMounted(async () => {
    await nextTick()
    const firstGroup = track.value.querySelector('.group')
    const styles = getComputedStyle(track.value)
    gap = parseFloat(styles.gap)
    groupWidth = firstGroup.offsetWidth + gap
    window.addEventListener('keydown', onKeydown)
    rafId = requestAnimationFrame(animate)
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('keydown', onKeydown)
  })

  return {
    brandingWorks,
    track,
    groups,
    loadedImages,
    previewSrc,
    openPreview,
    closePreview,
  }
}