<script setup>
import { useProjectsContent } from '@/composables/useProjectsContent'

const {
  webProjects,
  loadedImages,
  onImageLoad,
  statusText,
  statusClass,
  statusDasharray,
  statusValue,
} = useProjectsContent()
</script>

<template>
<section class="projects">
  <h2 class="section-title fade-up">Projects</h2>

  <h3 class="sub-title">Web Projects</h3>
  <div class="web-grid">
    <div
      v-for="(project, i) in webProjects"
      :key="project.title"
      class="web-card fade-card"
      :style="{ animationDelay: `${i * 0.08}s` }"
    >
      <div class="web-image">
        <div
          class="image-skeleton"
          :class="{ hidden: loadedImages[i] }"
        ></div>

        <img
          :src="project.image"
          :alt="project.title"
          loading="lazy"
          @load="onImageLoad(i)"
          :class="{ loaded: loadedImages[i] }"
        />
      </div>

      <div class="web-content">
        <div class="content-top">
          <div class="text">
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>

            <div class="tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                :class="['tag', tag.toLowerCase().replace(/\s+/g, '')]"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="progress-circle">
            <svg viewBox="0 0 36 36" :class="statusClass(project)">
              <path class="bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path
                class="progress"
                :stroke-dasharray="statusDasharray(project)"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="18" class="percentage">{{ statusValue(project) }}</text>
              <text x="18" y="23" class="status">{{ statusText(project) }}</text>
            </svg>
          </div>
        </div>

        <router-link
          :to="{ name: 'ProjectsView', params: { slug: project.slug } }"
          class="view-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
          View
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>

<style src="@/css/views/projects-content.css"></style>
