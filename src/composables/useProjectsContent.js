import { ref } from 'vue'

export function useProjectsContent() {
  const webProjects = [
    {
      slug: 'all-about-pets',
      title: 'All About Pets',
      progress: 10,
      status: 'archived',
      description: 'A client-based mini-thesis web system built for a pet care business...',
      image: '/images/banners/PetsBanner.png',
      tags: ['PHP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
    },
    {
      slug: 'homehive',
      title: 'HomeHive',
      progress: 100,
      description: 'A long-term rental management platform developed for property owners...',
      image: '/images/banners/HomeHiveBanner.png',
      tags: ['PHP', 'HTML', 'CSS', 'AI', 'MySQL', 'JavaScript'],
    },
    {
      slug: 'kapet-bahala-na',
      title: "Kape't Bahala Na",
      progress: 5,
      status: 'archived',
      description: 'A technical-task cafe system built during my Wizzard Technologies Inc. OJT journey, focused on Laravel, Blade components, database integration, and modern frontend tooling.',
      image: '/images/banners/KapeBanner.png',
      tags: ['Laravel', 'Blade', 'PHP', 'MySQL', 'JavaScript', 'Vue', 'Vite'],
    },
    {
      slug: 'swak-cart',
      title: 'SWAK-CART',
      progress: 100,
      description: 'A modern grocery companion web app focused on budget-aware shopping, real-time tracking, and receipt-ready checkout workflows.',
      image: '/images/banners/swak-cart-banner.png',
      tags: ['Vue', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    },
  ]

  const loadedImages = ref([])

  const onImageLoad = (index) => {
    loadedImages.value[index] = true
  }

  const statusText = (project) => {
    if (project.status === 'archived') return 'Archived'
    return project.progress === 100 ? 'Completed' : 'In Progress'
  }

  const statusClass = (project) => (project.status === 'archived' ? 'archived' : '')

  const statusDasharray = (project) => (project.status === 'archived' ? '100, 100' : `${project.progress}, 100`)

  const statusValue = (project) => (project.status === 'archived' ? '-' : `${project.progress}%`)

  return {
    webProjects,
    loadedImages,
    onImageLoad,
    statusText,
    statusClass,
    statusDasharray,
    statusValue,
  }
}