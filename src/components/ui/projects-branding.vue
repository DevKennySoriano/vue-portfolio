<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue"

const brandingWorks = [
  "/images/brandstyling/Dump-Cat.png",
  "/images/brandstyling/HomeHive.png",
  "/images/brandstyling/EcoAlert.png",
  "/images/brandstyling/CKMJ.png",
  "/images/brandstyling/All About Pets.png",
]

const track = ref(null)
const groups = ref([brandingWorks, brandingWorks])
const loadedImages = ref({})

let rafId
let lastTime = 0
let x = 0
const speed = 100

let groupWidth = 0
let gap = 0

const animate = (time) => {
  if (!lastTime) lastTime = time
  const delta = (time - lastTime) / 1000
  lastTime = time

  x -= speed * delta
  track.value.style.transform = `translate3d(${x}px, 0, 0)`

  maybeAppendGroup()
  rafId = requestAnimationFrame(animate)
}

const maybeAppendGroup = () => {
  const trackEl = track.value
  const viewportWidth = trackEl.parentElement.offsetWidth
  const remaining = trackEl.scrollWidth + x - viewportWidth

  if (remaining < groupWidth * 1.5) {
    groups.value.push(brandingWorks)
  }
}

onMounted(async () => {
  await nextTick()
  const firstGroup = track.value.querySelector(".group")
  const styles = getComputedStyle(track.value)
  gap = parseFloat(styles.gap)
  groupWidth = firstGroup.offsetWidth + gap
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <section class="branding">
    <h3 class="sub-title">Layout & Styling</h3>

    <div class="marquee">
      <div class="marquee-track" ref="track">
        <div
          v-for="(group, gi) in groups"
          :key="gi"
          class="group"
        >
          <div
            v-for="(img, i) in group"
            :key="gi + '-' + i"
            class="branding-card"
          >
            <div
              class="image-skeleton"
              :class="{ hidden: loadedImages[gi + '-' + i] }"
            ></div>

            <img
              :src="img"
              loading="lazy"
              @load="loadedImages[gi + '-' + i] = true"
              :class="{ loaded: loadedImages[gi + '-' + i] }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.branding {
  padding: 1rem 2.5rem;
  overflow: hidden;
}

.sub-title {
  margin-bottom: 1.5rem;
  color: #445d48;
}

.marquee {
  width: 100%;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  will-change: transform;
}

.group {
  display: flex;
  gap:30px;
}

.branding-card {
  position: relative;
  width: 220px;
  height: auto;
  flex: 0 0 auto;
  border-radius: 14px;
  overflow: hidden;
  background: #e5e7eb;
}

.image-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e5e7eb 30%,
    #f3f4f6 50%,
    #e5e7eb 70%
  );
  background-size: 600% 100%;
  animation: shimmer 2.2s linear infinite;
  transition: opacity 0.45s ease;
  z-index: 1;
}

.image-skeleton.hidden {
  opacity: 0;
  pointer-events: none;
}

.branding-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity 0.45s ease;
}

.branding-card img.loaded {
  opacity: 1;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
