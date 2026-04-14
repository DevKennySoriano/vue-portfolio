import { onMounted, onUnmounted, ref } from 'vue'

export function useCertificateCarousel() {
  const certificates = [
    {
      title: 'Front End Development Libraries Certification',
      issuer: 'freeCodeCamp',
      date: '2025',
      image: '/images/certs/freeCodeCamp.jpg',
    },
    {
      title: 'Java Fundamentals Course - STI College',
      issuer: 'Oracale Academy',
      date: '2023',
      image: '/images/certs/JavaFundamentals.jpg',
    },
    {
      title: 'JavaScript In Celebratin of Nutrition Month 2019 with the Theme (Kumain ng Wasto at Maging Aktibo...Push Natin To) Given 26th of July 2019',
      issuer: 'Mabalacat National Senior High School - Dau, Mabalacat Pampanga',
      date: '2019',
      image: '/images/certs/Tshirt.jpg',
    },
  ]

  const currentIndex = ref(0)
  let interval = null

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % certificates.length
  }

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + certificates.length) % certificates.length
  }

  const startAutoSlide = () => {
    interval = setInterval(next, 4000)
  }

  const stopAutoSlide = () => {
    clearInterval(interval)
  }

  onMounted(startAutoSlide)
  onUnmounted(stopAutoSlide)

  return {
    certificates,
    currentIndex,
    next,
    prev,
    startAutoSlide,
    stopAutoSlide,
  }
}