<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { webProjects } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return webProjects.find(p => p.slug === route.params.slug)
})

// optional safety redirect
if (!project.value) {
  router.push('/projects')
}
</script>



<template>
  <div class="project-view">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <button class="back-btn" @click="router.push('/projects')">
        ← Back to Projects
      </button>

      <div class="logo">
        <img :src="project.logo" :alt="project.title" />
      </div>

      <div class="links">
        <a :href="project.github" target="_blank">View on GitHub</a>
        <a :href="project.live" target="_blank" class="primary">View Live</a>
      </div>
    </aside>

    <!-- CONTENT -->
    <main class="content">
      <header class="doc-header">
        <h1>{{ project.title }}</h1>
        <p class="description">{{ project.description }}</p>

        <div class="tags">
          <span
            v-for="tag in project.tags"
            :key="tag"
            :class="['tag', tag.toLowerCase()]"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <section class="project">
        <img :src="project.project" :alt="project.title" />
      </section>

      <section class="screenshots">
        <h2>Screenshots</h2>

        <div
          v-for="(shot, i) in project.screenshots"
          :key="i"
          class="screenshot"
        >
          <img :src="shot.image" :alt="shot.caption" />
          <p>{{ shot.caption }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.project-view {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
}

.sidebar {
  width: 260px;
  background: #445d48;
  color: #fafafa;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.back-btn {
  background: none;
  border: none;
  color: #fafafa;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  opacity: 0.85;
}

.back-btn:hover {
  opacity: 1;
}

.logo img {
  width: 100%;
  max-width: 160px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.links a {
  text-decoration: none;
  color: #fafafa;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  background: rgba(255,255,255,0.12);
  text-align: center;
  transition: background 0.3s ease;
}

.links a:hover {
  background: rgba(255,255,255,0.2);
}

.links a.primary {
  background: #fafafa;
  color: #445d48;
  font-weight: 600;
}

.content {
  flex: 1;
  padding: 3rem 4rem;
  overflow-y: auto;
}

.doc-header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.6rem;
}

.description {
  max-width: 720px;
  line-height: 1.7;
  opacity: 0.85;
}

.tags {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: #e5e7eb;
}

.project {
  margin: 3rem 0;
}

.project img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

/* SCREENSHOTS */
.screenshots h2 {
  margin-bottom: 1.5rem;
}

.screenshot {
  margin-bottom: 2.5rem;
}

.screenshot img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 0.6rem;
}

.screenshot p {
  font-size: 0.85rem;
  opacity: 0.8;
}
</style>
