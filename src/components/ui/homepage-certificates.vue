<script setup>
import { useCertificateCarousel } from '@/composables/useCertificateCarousel'

const {
  certificates,
  currentIndex,
  next,
  prev,
  startAutoSlide,
  stopAutoSlide,
} = useCertificateCarousel()
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

<style scoped src="@/css/home/homepage-certificates.css"></style>
