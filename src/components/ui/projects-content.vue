<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProjectsContent } from '@/composables/useProjectsContent'
import { useProjectViews } from '@/composables/useProjectViews'

const {
  webProjects,
  loadedImages,
  onImageLoad,
  statusText,
  statusClass,
  statusDasharray,
  statusValue,
} = useProjectsContent()

const { views, fetchAll, increment } = useProjectViews()

onMounted(async () => {
  await fetchAll(webProjects.map((p) => p.slug))
})

function onViewProject(project) {
  increment(project.slug)
}

const showFilter = ref(false)
const selectedTags = ref(new Set())

const allTags = computed(() => {
  const tags = new Set()
  webProjects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return [...tags].sort()
})

const selectedCount = computed(() => selectedTags.value.size)

const filteredProjects = computed(() => {
  if (selectedTags.value.size === 0) return webProjects
  return webProjects.filter((p) =>
    [...selectedTags.value].some((t) => p.tags.includes(t))
  )
})

function toggleTag(tag) {
  if (selectedTags.value.has(tag)) {
    selectedTags.value.delete(tag)
  } else {
    selectedTags.value.add(tag)
  }
  selectedTags.value = new Set(selectedTags.value)
}

function clearAll() {
  selectedTags.value = new Set()
}

function closeFilter() {
  showFilter.value = false
}
</script>

<template>
<section class="projects" @click.self="closeFilter">
  <div class="projects-shell">
    <header class="projects-hero">
      <p class="eyebrow">Web Projects</p>
      <h1>Programming</h1>
      <p class="subtitle">
        Web applications and systems built across various projects.
      </p>
    </header>

    <div class="filter-bar">
      <div class="filter-wrapper">
        <button class="filter-btn" @click="showFilter = !showFilter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          Filter
          <span v-if="selectedCount > 0" class="filter-badge">{{ selectedCount }}</span>
        </button>

        <div v-if="showFilter" class="filter-popover">
          <div class="filter-popover-header">
            <p class="filter-popover-title">Technologies</p>
            <button v-if="selectedCount > 0" class="filter-clear" @click="clearAll">Clear</button>
          </div>
          <ul class="filter-popover-list">
            <li v-for="tag in allTags" :key="tag">
              <label class="filter-option">
                <input
                  type="checkbox"
                  :checked="selectedTags.has(tag)"
                  @change="toggleTag(tag)"
                  class="filter-checkbox"
                />
                <span class="filter-checkmark"></span>
                <span class="filter-label">{{ tag }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <p v-if="selectedCount > 0" class="filter-result-count">
        {{ filteredProjects.length }} project{{ filteredProjects.length !== 1 ? 's' : '' }}
      </p>
    </div>

    <div class="web-grid">
    <div
      v-for="(project, i) in filteredProjects"
      :key="project.title"
      class="web-card fade-card"
      :style="{ animationDelay: `${i * 0.08}s` }"
    >
      <div class="web-image">
        <div
          class="image-skeleton"
          :class="{ hidden: loadedImages[project.slug] }"
        ></div>

        <img
          :src="project.image"
          :alt="project.title"
          loading="lazy"
          @load="onImageLoad(project.slug)"
          :class="{ loaded: loadedImages[project.slug] }"
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
                :class="['tag', tag.toLowerCase().replace(/\s+/g, ''), { 'tag--active': selectedTags.has(tag) }]"
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

        <div class="web-footer">
          <div class="project-views">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            {{ views[project.slug] ?? '—' }} views
          </div>
          <router-link
            :to="{ name: 'ProjectsView', params: { slug: project.slug } }"
            class="view-btn"
            @click="onViewProject(project)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            View
          </router-link>
        </div>
      </div>
    </div>
    </div>

    <p v-if="filteredProjects.length === 0" class="no-results">
      No projects match this filter.
    </p>
  </div>
</section>
</template>

<style src="@/css/views/projects-content.css"></style>
