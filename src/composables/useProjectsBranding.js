import { ref } from 'vue'

export function useProjectsBranding() {
  const brandingWorks = [
    '/images/brandstyling/Dump-Cat.webp',
    '/images/brandstyling/HomeHive.webp',
    '/images/brandstyling/EcoAlert.webp',
    '/images/brandstyling/CKMJ.webp',
    '/images/brandstyling/All About Pets.webp',
    '/images/brandstyling/Lutowl.webp',
  ]

  const loadedImages = ref({})

  return {
    brandingWorks,
    loadedImages,
  }
}
