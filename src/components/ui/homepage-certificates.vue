<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const certificates = [
  {
    title: "Front End Development Libraries Certification",
    issuer: "freeCodeCamp",
    date: "2025",
    image: "/images/certs/freeCodeCamp.jpg"
  },
  {
    title: "Java Fundamentals Course - STI College",
    issuer: "Oracale Academy",
    date: "2023",
    image: "/images/certs/JavaFundamentals.jpg"
  },
  {
    title: "JavaScript In Celebratin of Nutrition Month 2019 with the Theme (Kumain ng Wasto at Maging Aktibo...Push Natin To) Given 26th of July 2019",
    issuer: "Mabalacat National Senior High School - Dau, Mabalacat Pampanga",
    date: "2019",
    image: "/images/certs/Tshirt.jpg"
  }
]

const currentIndex = ref(0)
let interval = null

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % certificates.length
}

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + certificates.length) % certificates.length
}

const startAutoSlide = () => {
  interval = setInterval(next, 4000)
}

const stopAutoSlide = () => {
  clearInterval(interval)
}

onMounted(startAutoSlide)
onUnmounted(stopAutoSlide)
</script>

<template>
<section class="certificates" data-aos="fade-up" data-aos-once="true">
  <h2 class="section-title">Certificates</h2>

  <div
    class="slider"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <button class="nav left" @click="prev">‹</button>

    <div class="slider-window">
      <div
        class="slider-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          class="slide"
          data-aos="fade-up"
          data-aos-once="true"
          :data-aos-delay="index * 150"
        >
          <div class="card">
            <div class="image-wrapper">
              <img :src="cert.image" alt="Certificate" />
            </div>

            <span class="date">{{ cert.date }}</span>
            <h3 class="title">{{ cert.title }}</h3>
            <p class="issuer">{{ cert.issuer }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="nav right" @click="next">›</button>
  </div>
</section>
</template>

<style scoped>
.certificates {
  background: var(--surface-strong);
  padding: 3.5rem 2rem;
  color: var(--text-inverse);
  box-sizing: border-box;
}

.section-title {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 3rem;
}

.slider {
  max-width: 900px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.slider-window {
  overflow: hidden;
  width: 100%;
}

.slider-track {
  display: flex;
  transition: transform 0.6s ease;
}

.slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  width: 100%;
  max-width: 520px;
  background: color-mix(in srgb, var(--bg-elevated) 12%, transparent);
  border-radius: 16px;
  padding: 1.8rem;
  backdrop-filter: blur(6px);
  border: 1px solid color-mix(in srgb, var(--text-inverse) 22%, transparent);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid color-mix(in srgb, var(--text-inverse) 88%, transparent);
  background: color-mix(in srgb, var(--surface-strong-2) 90%, black);
  margin-bottom: 1.2rem;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.date {
  display: inline-block;
  margin-bottom: 0.6rem;
  padding: 0.35rem 0.9rem;
  background: var(--bg-elevated);
  color: var(--text);
  border-radius: 999px;
  font-size: 0.85rem;
}

.title {
  font-size: 1.5rem;
  margin: 0.6rem 0;
  overflow-wrap: anywhere;
}

.issuer {
  font-size: 1rem;
  opacity: 0.9;
}

.nav {
  background: transparent;
  border: 2px solid color-mix(in srgb, var(--text-inverse) 88%, transparent);
  color: var(--text-inverse);
  font-size: 2rem;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.nav:hover {
  background: color-mix(in srgb, var(--bg-elevated) 18%, transparent);
  transform: scale(1.05);
}

.fade-up {
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .certificates {
    padding: 2.8rem 1rem;
  }

  .slider {
    gap: 0;
    position: relative;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: color-mix(in srgb, var(--surface-strong-2) 85%, transparent);
    font-size: 1.6rem;
    padding: 0.2rem 0.6rem;
  }

  .nav.left {
    left: 0.35rem;
  }

  .nav.right {
    right: 0.35rem;
  }

  .card {
    padding: 1.3rem 1rem;
  }

  .title {
    font-size: 1.2rem;
  }

  .issuer {
    font-size: 0.92rem;
  }
}

@media (max-width: 375px) {
  .certificates {
    padding: 2.5rem 0.5rem;
  }

  .nav {
    font-size: 1.3rem;
    padding: 0.15rem 0.45rem;
  }
}
</style>
