<script setup>
import { ref } from 'vue'
import { useProjectsBranding } from '@/composables/useProjectsBranding'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { brandingWorks, loadedImages } = useProjectsBranding()
const activeIndex = ref(0)

function onSlideChange(swiper) {
  activeIndex.value = swiper.activeIndex
}
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

      <div class="branding-swiper-wrap">
        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="16"
          :navigation="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }"
          class="branding-swiper"
          @slide-change="onSlideChange"
        >
          <SwiperSlide
            v-for="(img, i) in brandingWorks"
            :key="i"
            class="branding-slide"
          >
            <div class="branding-card">
              <div class="branding-image">
                <div
                  class="image-skeleton"
                  :class="{ hidden: loadedImages[i] }"
                ></div>
                <img
                  :src="img"
                  loading="lazy"
                  decoding="async"
                  @load="loadedImages[i] = true"
                  :class="{ loaded: loadedImages[i] }"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="branding-counter">
          {{ activeIndex + 1 }} / {{ brandingWorks.length }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/views/projects-branding.css"></style>
