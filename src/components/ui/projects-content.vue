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
          View Project
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>

<style src="@/css/views/projects-content.css"></style>
