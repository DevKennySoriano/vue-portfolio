<script setup>
import { onMounted, ref } from 'vue'
import Content from '@/components/ui/projects-content.vue'
import Brand from '@/components/ui/projects-branding.vue'
import End from '@/components/ui/projects-end.vue'

const isLoading = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    isLoading.value = false
  }, 700)
})
</script>

<template>
  <div class="projects-page-shell">
    <transition name="page-loader-fade">
      <div v-if="isLoading" class="page-loader" aria-label="Loading projects page" role="status">
        <div class="page-loader-box">
          <img src="/images/icons/K.png" alt="" class="page-loader-logo" />
          <p class="page-loader-text">Loading projects...</p>
        </div>
      </div>
    </transition>

    <div v-if="!isLoading">
      <Content />
      <Brand />
      <End />
    </div>
  </div>
</template>

<style scoped>
.projects-page-shell {
  position: relative;
}

.page-loader {
  position: fixed;
  inset: 0;
  z-index: 1500;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--surface-strong) 22%, transparent), transparent 52%),
    radial-gradient(circle at 80% 82%, color-mix(in srgb, var(--surface-strong-2) 24%, transparent), transparent 50%),
    var(--bg);
}

.page-loader-box {
  display: grid;
  justify-items: center;
  gap: 0.75rem;
}

.page-loader-logo {
  width: 54px;
  height: 54px;
  object-fit: contain;
  filter: drop-shadow(0 5px 12px rgba(10, 40, 28, 0.24));
  animation: pagePulse 1.15s ease-in-out infinite;
}

.page-loader-text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.page-loader-fade-enter-active,
.page-loader-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-loader-fade-enter-from,
.page-loader-fade-leave-to {
  opacity: 0;
}

@keyframes pagePulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.9;
  }

  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}
</style>
