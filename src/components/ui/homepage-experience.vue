<script setup>
import { ref, onMounted } from 'vue'
import { useExperienceTimeline } from '@/composables/useExperienceTimeline'

const { expandedIndex, timeline, toggleExpand } = useExperienceTimeline()
const itemsRef = ref([])
const visible = ref(new Set())

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = Number(entry.target.dataset.index)
        if (entry.isIntersecting) {
          visible.value = new Set([...visible.value, idx])
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )

  itemsRef.value.forEach((el, i) => {
    if (el) {
      el.dataset.index = i
      observer.observe(el)
    }
  })
})
</script>

<template>
  <section class="experience">
    <div class="exp-shell">
      <h2 class="section-title">Experience</h2>
      <p class="section-subtitle">
        This section highlights not only my professional work experience, but also my continuous journey through the programming world, including technical training, hands-on practice, and key learning milestones that shaped my growth as a developer.
      </p>

      <div class="exp-timeline">
        <div class="exp-line">
          <div class="exp-line-fill"></div>
        </div>

        <button
          v-for="(item, index) in timeline"
          :key="index"
          :ref="el => { if (el) itemsRef[index] = el }"
          class="exp-entry"
          :class="[
            index % 2 === 0 ? 'left' : 'right',
            { visible: visible.has(index), expanded: expandedIndex === index }
          ]"
          @click="toggleExpand(index)"
        >
          <div class="exp-dot">
            <div class="dot-inner"></div>
          </div>

          <div class="exp-card">
            <div class="exp-header">
              <div class="exp-meta">
                <span class="exp-period">{{ item.period }}</span>
                <span v-if="item.comingSoon" class="status-badge active">Active</span>
              </div>
              <h3 class="exp-title">{{ item.title }}</h3>
              <p class="exp-company">{{ item.company }}</p>
              <svg class="exp-chevron" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>

            <transition name="expand">
              <div v-if="expandedIndex === index" class="exp-details" @click.stop>
                <div class="date-range" v-if="item.dateRange">{{ item.dateRange }}</div>
                <div v-if="item.duration" class="duration-badge">{{ item.duration }}</div>
                <p class="exp-desc">{{ item.description }}</p>

                <div v-if="item.tech && item.tech.length > 0" class="exp-section">
                  <p class="block-title">Core Competencies</p>
                  <div class="tech-stack">
                    <span v-for="tech in item.tech" :key="tech.name" class="tech-pill" :title="tech.name">
                      <img :src="tech.icon" :alt="tech.name" loading="lazy" />
                      <span>{{ tech.name }}</span>
                    </span>
                  </div>
                </div>

                <div v-if="item.tech && item.tech.length === 0 && item.comingSoon" class="exp-section">
                  <p class="block-title">Core Competencies</p>
                  <p class="coming-soon-text">Tech stack coming soon</p>
                </div>

                <div v-if="item.facebook || item.maps || item.freecodecamp || item.sti || item.w3schools" class="exp-section">
                  <p class="block-title">Links</p>
                  <div class="brand-row">
                    <a v-if="item.facebook" class="link-pill facebook" :href="item.facebook" target="_blank" rel="noopener noreferrer" @click.stop>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08V12.1h3.05V9.42c0-3.02 1.8-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.28h3.35l-.54 3.47h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/></svg>
                      <span>Facebook</span>
                    </a>
                    <a v-if="item.maps" class="link-pill maps" :href="item.maps" target="_blank" rel="noopener noreferrer" @click.stop>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.38 7 13 7 13s7-7.62 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
                      <span>Google Maps</span>
                    </a>
                    <a v-if="item.freecodecamp" class="link-pill freecodecamp" :href="item.freecodecamp" target="_blank" rel="noopener noreferrer" @click.stop>
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4.5 10.5h3v7h-3zm7-7h3v14h-3zm-7 14h3v3h-3zm3 0h3v3h-3zm10-14h3v7h-3zm0 10h3v4h-3z"/></svg>
                      <span>FreeCodeCamp</span>
                    </a>
                    <a v-if="item.sti" class="link-pill sti" :href="item.sti" target="_blank" rel="noopener noreferrer" @click.stop>
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 3 3 7.5v1.2l9 4.5 7-3.5V16h2V7.5L12 3Zm-6.8 8.7V15c0 2.3 3.1 4 6.8 4s6.8-1.7 6.8-4v-3.3L12 15l-6.8-3.3Z"/></svg>
                      <span>STI College</span>
                    </a>
                    <a v-if="item.w3schools" class="link-pill w3schools" :href="item.w3schools" target="_blank" rel="noopener noreferrer" @click.stop>
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M2 3h20L19 21H5L2 3Zm6.5 4.2 1.7 8.5 1.8-5.1 1.8 5.1 1.7-8.5h2l-2.7 11.1h-2L12 12.7l-1.8 5.6h-2L5.5 7.2h3Z"/></svg>
                      <span>W3Schools</span>
                    </a>
                  </div>
                </div>

                <div v-if="item.comingSoon && !item.facebook && !item.maps && !item.freecodecamp && !item.sti && !item.w3schools" class="exp-section">
                  <p class="block-title">Links</p>
                  <p class="coming-soon-text">Links coming soon</p>
                </div>
              </div>
            </transition>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/home/homepage-experience.css"></style>
