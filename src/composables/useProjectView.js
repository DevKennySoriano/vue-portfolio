import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { webProjects } from '@/data/projects'

export function useProjectView() {
  const route = useRoute()
  const router = useRouter()

  const project = computed(() => webProjects.find((item) => item.slug === route.params.slug))

  const isPreviewOpen = ref(false)
  const selectedImage = ref(null)
  const isPageLoading = ref(true)
  let loadingTimeout

  const runLoader = () => {
    isPageLoading.value = true
    window.clearTimeout(loadingTimeout)
    loadingTimeout = window.setTimeout(() => {
      isPageLoading.value = false
    }, 700)
  }

  onMounted(() => {
    runLoader()
  })

  watch(() => route.params.slug, () => {
    runLoader()
  })

  const openPreview = (shot) => {
    selectedImage.value = shot
    isPreviewOpen.value = true
  }

  const closePreview = () => {
    isPreviewOpen.value = false
    selectedImage.value = null
  }

  watchEffect(() => {
    if (!project.value) {
      router.push('/projects')
    }
  })

  return {
    route,
    project,
    isPreviewOpen,
    selectedImage,
    isPageLoading,
    openPreview,
    closePreview,
  }
}