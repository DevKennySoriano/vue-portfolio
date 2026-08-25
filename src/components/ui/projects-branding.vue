<script setup>
import { useProjectsBranding } from '@/composables/useProjectsBranding'

const {
  brandingWorks,
  loadedImages,
} = useProjectsBranding()
</script>

<template>
  <section class="branding-page">
    <div class="branding-shell">
      <header class="branding-hero">
        <p class="eyebrow">Visual Projects</p>
        <h1>Layout & Styling</h1>
        <p class="subtitle">
          Brand styling and layout design work across various projects.
        </p>
      </header>

      <div class="branding-grid">
        <article
          v-for="(img, i) in brandingWorks"
          :key="i"
          class="branding-card"
        >
          <div class="branding-image">
            <div
              class="image-skeleton"
              :class="{ hidden: loadedImages[i] }"
            ></div>
            <img
              :src="img"
              loading="lazy"
              @load="loadedImages[i] = true"
              :class="{ loaded: loadedImages[i] }"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/views/projects-branding.css"></style>
