<script setup>
import { useEducationTimeline } from '@/composables/useEducationTimeline'

const { education } = useEducationTimeline()
</script>
<template>
<section class="education">
  <h2 class="section-title animate-fade-up">
    Educational Background
  </h2>

  <div class="timeline">
    <div
      v-for="(item, index) in education"
      :key="index"
      class="timeline-item"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <div
        class="timeline-image animate-fade-up"
        :style="{ animationDelay: `${index * 0.2 + 0.15}s` }"
      >
        <div class="image-wrapper">
          <img :src="item.image" alt="Education image" />
        </div>
      </div>

      <div
        class="timeline-content animate-fade-up"
        :style="{ animationDelay: `${index * 0.2 + 0.3}s` }"
      >
        <div class="content-card">
          <span class="date">{{ item.date }}</span>
          <h3 class="title">{{ item.title }}</h3>
          <h4 class="school">{{ item.school }}</h4>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<style scoped src="@/css/home/homepage-educational.css"></style>
