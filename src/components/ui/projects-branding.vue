<script setup>
import { useProjectsBranding } from '@/composables/useProjectsBranding'

const {
  track,
  groups,
  loadedImages,
  previewSrc,
  openPreview,
  closePreview,
} = useProjectsBranding()
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

<style scoped src="@/css/views/projects-branding.css"></style>
