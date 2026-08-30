<script setup>
import { ref, onMounted } from 'vue'
import { useEducationTimeline } from '@/composables/useEducationTimeline'

const { education } = useEducationTimeline()
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
  <section class="education">
    <div class="edu-shell">
      <h2 class="section-title">Educational Background</h2>
      <p class="section-subtitle">
        A summary of my academic journey from senior high school through completing a Bachelor's degree in Computer Science, building a strong foundation in programming, system design, and modern web technologies.
      </p>

      <div class="edu-timeline">
        <div class="edu-line">
          <div class="edu-line-fill"></div>
        </div>

        <div
          v-for="(item, index) in education"
          :key="index"
          :ref="el => { if (el) itemsRef[index] = el }"
          class="edu-entry"
          :class="[index % 2 === 0 ? 'left' : 'right', { visible: visible.has(index) }]"
        >
          <div class="edu-dot">
            <div class="dot-inner"></div>
          </div>

          <div class="edu-card">
            <div class="edu-image" v-if="item.image">
              <img :src="item.image" :alt="item.school" loading="lazy" decoding="async" />
            </div>
            <div class="edu-body">
              <span class="edu-date">{{ item.date }}</span>
              <h3 class="edu-title">{{ item.title }}</h3>
              <h4 class="edu-school">{{ item.school }}</h4>
              <p class="edu-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/home/homepage-educational.css"></style>
