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
const groups = ref([
  brandingWorks,
  brandingWorks, // start with two sets
])

let rafId
let lastTime = 0
let x = 0
const speed = 100 // px per second

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

  // distance from right edge of content to viewport right
  const remaining = trackEl.scrollWidth + x - viewportWidth

  // when almost done → append another set
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
            <img :src="img" alt="" />
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
  transform: translate3d(0, 0, 0);
}

.group {
  display: flex;
}

.branding-card {
  width: 220px;
  flex: 0 0 auto;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
}

.branding-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
