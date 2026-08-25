import { ref } from 'vue'

export function useProjectsBranding() {
  const brandingWorks = [
    '/images/brandstyling/Dump-Cat.png',
    '/images/brandstyling/HomeHive.png',
    '/images/brandstyling/EcoAlert.png',
    '/images/brandstyling/CKMJ.png',
    '/images/brandstyling/All About Pets.png',
    '/images/brandstyling/Lutowl.png',
  ]

  const loadedImages = ref({})

  return {
    brandingWorks,
    loadedImages,
  }
}
