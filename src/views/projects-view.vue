<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { webProjects } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() =>
  webProjects.find(p => p.slug === route.params.slug)
)

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
        <a v-if="project.github" :href="project.github" target="_blank">
          GitHub
        </a>
        <a v-if="project.live" :href="project.live" target="_blank" class="primary">
          Live Demo
        </a>
      </div>
    </aside>

    <!-- CONTENT -->
    <main class="content">
      <!-- TITLE -->
      <header class="doc-header">
        <h1>{{ project.title }}</h1>

        <p v-if="project.date" class="date">
          {{ project.date }}
        </p>

        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- HERO IMAGE -->
      <section class="hero">
        <div class="ratio-16x9">
          <img :src="project.project" :alt="project.title" />
        </div>
      </section>

      <!-- OVERVIEW -->
      <section class="section">
        <h2>Overview</h2>
        <p>
          {{ project.overview || project.description }}
        </p>
      </section>

      <!-- BACKGROUND -->
      <section v-if="project.background" class="section">
        <h2>Background</h2>
        <p>
          {{ project.background }}
        </p>
      </section>

      <!-- IMAGES -->
      <section v-if="project.screenshots?.length" class="section">
        <h2>Images</h2>

        <div class="images-grid">
          <figure
            v-for="(shot, i) in project.screenshots"
            :key="i"
            class="image-card"
          >
            <div class="ratio-16x9">
              <img :src="shot.image" :alt="shot.caption" />
            </div>
            <figcaption>{{ shot.caption }}</figcaption>
          </figure>
        </div>
      </section>

      <!-- FOOTER -->
      <footer v-if="project.footer" class="research-footer">
        <h3>Acknowledgements</h3>
        <p>{{ project.footer }}</p>
      </footer>
    </main>
  </div>
</template>

<style scoped>
/* LAYOUT */
.project-view {
  display: flex;
  min-height: 100vh;
  background: #f9fafb;
}

/* SIDEBAR */
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
  color: inherit;
  cursor: pointer;
  opacity: 0.85;
}

.back-btn:hover {
  opacity: 1;
}

.logo img {
  max-width: 160px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.links a {
  color: #fafafa;
  text-decoration: none;
  padding: 0.6rem;
  border-radius: 8px;
  background: rgba(255,255,255,0.15);
  text-align: center;
}

.links a.primary {
  background: #fff;
  color: #445d48;
  font-weight: 600;
}

/* CONTENT */
.content {
  flex: 2;
  padding: 3rem 4rem;
}

.doc-header h1 {
  font-size: 2.4rem;
}

.date {
  margin-top: 0.4rem;
  font-size: 0.85rem;
  opacity: 0.7;
}

.tags {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.7rem;
  padding: 0.3rem 0.7rem;
  background: #e5e7eb;
  border-radius: 999px;
}

/* SECTIONS */
.section {
  max-width: 820px;
  margin-top: 3rem;
}

.section h2 {
  margin-bottom: 0.8rem;
}

.section p {
  line-height: 1.75;
  opacity: 0.9;
}

/* IMAGES */
.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.image-card figcaption {
  margin-top: 0.6rem;
  font-size: 0.85rem;
  opacity: 0.75;
}

/* 16:9 */
.ratio-16x9 {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.ratio-16x9 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* FOOTER */
.research-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  max-width: 820px;
}

.research-footer h3 {
  margin-bottom: 0.6rem;
}
</style>
