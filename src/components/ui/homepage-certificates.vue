<script setup>
import { ref } from 'vue'
import { useCertificateCarousel } from '@/composables/useCertificateCarousel'

const { certificates } = useCertificateCarousel()

const isPreviewOpen = ref(false)
const selectedCert = ref(null)

function openPreview(cert) {
  selectedCert.value = cert
  isPreviewOpen.value = true
}

function closePreview() {
  isPreviewOpen.value = false
  selectedCert.value = null
}
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
        @click="openPreview(cert)"
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

        <button class="cert-view" @click.stop="openPreview(cert)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
          View
        </button>
      </article>
    </div>
  </div>

  <Teleport to="body">
    <transition name="cert-modal-fade">
      <div v-if="isPreviewOpen" class="cert-modal" @click.self="closePreview">
        <div class="cert-modal-box" @click.stop>
          <button class="cert-modal-close" @click="closePreview" aria-label="Close">
            ✕
          </button>
          <img :src="selectedCert.image" :alt="selectedCert.title" class="cert-modal-img" />
          <div class="cert-modal-info">
            <h3>{{ selectedCert.title }}</h3>
            <p class="cert-modal-issuer">{{ selectedCert.issuer }}</p>
            <p class="cert-modal-date">{{ selectedCert.date }}</p>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</section>
</template>

<style scoped src="@/css/home/homepage-certificates.css"></style>
