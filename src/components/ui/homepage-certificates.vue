<script setup>
import { useCertificateCarousel } from '@/composables/useCertificateCarousel'

const { certificates } = useCertificateCarousel()
</script>

<template>
<section class="certificates" data-aos="fade-up" data-aos-once="true">
  <div class="certs-shell">
    <header class="certs-hero">
      <p class="eyebrow">Certifications</p>
      <h1>Certificates</h1>
      <p class="subtitle">
        Credentials and certifications earned throughout my academic and professional journey.
      </p>
    </header>

    <div class="certs-grid">
      <article
        v-for="(cert, index) in certificates"
        :key="index"
        class="cert-card"
        data-aos="fade-up"
        data-aos-once="true"
        :data-aos-delay="index * 100"
      >
        <div class="cert-head">
          <span class="cert-type-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/></svg>
          </span>
          <span class="cert-date">{{ cert.date }}</span>
        </div>

        <div class="cert-image">
          <img :src="cert.image" :alt="cert.title" />
        </div>

        <div class="cert-info">
          <h2>{{ cert.title }}</h2>
          <p class="cert-issuer">{{ cert.issuer }}</p>
        </div>
      </article>
    </div>
  </div>
</section>
</template>

<style scoped src="@/css/home/homepage-certificates.css"></style>
