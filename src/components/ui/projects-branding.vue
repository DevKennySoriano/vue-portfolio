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
const previewSrc = ref("")

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

const openPreview = (src) => {
  previewSrc.value = src
}

const closePreview = () => {
  previewSrc.value = ""
}

const onKeydown = (event) => {
  if (event.key === "Escape" && previewSrc.value) {
    closePreview()
  }
}

onMounted(async () => {
  await nextTick()
  const firstGroup = track.value.querySelector(".group")
  const styles = getComputedStyle(track.value)
  gap = parseFloat(styles.gap)
  groupWidth = firstGroup.offsetWidth + gap
  window.addEventListener("keydown", onKeydown)
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener("keydown", onKeydown)
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
          <button
            v-for="(img, i) in group"
            :key="gi + '-' + i"
            class="branding-card"
            type="button"
            :aria-label="`Preview layout ${i + 1}`"
            @click="openPreview(img)"
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
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="previewSrc"
      class="preview-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Layout preview"
      @click.self="closePreview"
    >
      <div class="preview-frame">
        <div class="preview-watermark" aria-hidden="true">
          <img src="/images/icons/K.png" alt="" class="watermark-logo" />
        </div>
        <button type="button" class="preview-close" aria-label="Close preview" @click="closePreview">x</button>
        <img :src="previewSrc" alt="Layout preview" class="preview-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.branding {
  padding: 1rem 2.5rem;
  overflow: hidden;
  margin-top: 1.2rem;
}

.sub-title {
  margin-bottom: 1.5rem;
  color: var(--text);
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
  background: color-mix(in srgb, var(--bg-elevated) 85%, var(--bg-soft));
  border: 0;
  padding: 0;
  cursor: zoom-in;
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

.preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.72);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.preview-frame {
  position: relative;
  width: min(920px, 96vw);
  max-height: 90vh;
  border-radius: 14px;
  overflow: hidden;
  background: color-mix(in srgb, var(--surface-strong) 88%, #052e1f);
}

.preview-image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  display: block;
}

.preview-watermark {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  display: grid;
  place-items: center;
  opacity: 0.18;
}

.watermark-logo {
  width: min(240px, 40vw);
  aspect-ratio: 1;
  object-fit: contain;
  filter: brightness(1.25) contrast(1.05);
}

.preview-close {
  position: absolute;
  z-index: 3;
  top: 0.6rem;
  right: 0.6rem;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 0;
  font-size: 1rem;
  line-height: 1;
  background: color-mix(in srgb, var(--surface-strong) 75%, #052e1f);
  color: #fff;
  cursor: pointer;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 768px) {
  .branding {
    margin-top: 0.6rem;
    padding: 1rem;
  }

  .marquee-track,
  .group {
    gap: 14px;
  }

  .branding-card {
    width: 160px;
  }
}
</style>
