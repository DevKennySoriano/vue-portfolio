<script setup>
import { computed, watchEffect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { webProjects } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() =>
  webProjects.find(p => p.slug === route.params.slug)
)

const isPreviewOpen = ref(false)
const selectedImage = ref(null)

const openPreview = (shot) => {
  selectedImage.value = shot
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
  selectedImage.value = null
}

watchEffect(() => {
  if (!project.value) {
    router.push('/projects')
  }
})
</script>


<template>
  <div class="project-layout">

    <!-- ================= SIDEBAR ================= -->
    <aside class="sidebar">

      <button class="back-btn" @click="router.push('/projects')">
        <span>Back to Projects</span>
      </button>

      <div class="logo-wrapper">
        <img :src="project.logo" :alt="project.title" />
      </div>

      <div class="meta">
        <h3>Project Info</h3>
        <p v-if="project.date"><strong>Year:</strong> {{ project.date }}</p>
        <p v-if="project.type"><strong>Category:</strong> {{ project.type }}</p>
      </div>

      <div class="links">
      
        <a v-if="project.github" :href="project.github" target="_blank">
          Source Code
        </a>
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          class="primary"
        >
          Live Preview
        </a>
      </div>

    </aside>

    <!-- ================= RIGHT SIDE ================= -->
    <main class="content-wrapper">
      <div class="content">

        <!-- HEADER -->
        <header class="header">
          <h1>{{ project.title }}</h1>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- SUMMARY -->
        <section class="section highlight">
          <h2>Project Summary</h2>
          <p>
            {{ project.overview || project.description }}
          </p>
        </section>

        <!-- INTRODUCTION -->
        <section v-if="project.background" class="section">
          <h2>Introduction</h2>
          <p>{{ project.background }}</p>
        </section>

        <!-- OBJECTIVES -->
        <section v-if="project.objectives?.length" class="section">
          <h2>Objectives</h2>
          <ul>
            <li v-for="(item, i) in project.objectives" :key="i">
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- TECH STACK (NEW SECTION) -->
        <section v-if="project.techStack?.length" class="section tech">
          <h2>Technology Stack</h2>
          <div class="tech-grid">
            <div 
              v-for="(tech, i) in project.techStack" 
              :key="i" 
              class="tech-card"
            >
              {{ tech }}
            </div>
          </div>
        </section>

        <!-- SYSTEM OVERVIEW -->
        <section class="section">
          <h2>System Overview</h2>
          <div class="ratio-16x9">
            <img :src="project.project" :alt="project.title" />
          </div>
        </section>

        <!-- FEATURES -->
        <section v-if="project.features?.length" class="section">
          <h2>Key Features</h2>
          <ul>
            <li v-for="(feature, i) in project.features" :key="i">
              {{ feature }}
            </li>
          </ul>
        </section>

        <!-- SCREENSHOTS -->
          <section v-if="project.screenshots?.length" class="section">
        <h2>Implementation & Output</h2>

        <div class="images-grid">
          <figure
            v-for="(shot, i) in project.screenshots"
            :key="i"
            class="image-card"
            @click="openPreview(shot)"
          >
            <div class="ratio-16x9 image-wrapper">
              <img :src="shot.image" :alt="shot.caption" />
              <div class="overlay">
                <span>Click to View</span>
              </div>
            </div>
            <figcaption>
              Figure {{ i + 1 }}. {{ shot.caption }}
            </figcaption>
          </figure>
        </div>
      </section>

        <!-- CHALLENGES -->
        <section v-if="project.challenges" class="section">
          <h2>Challenges and Learnings</h2>
          <p>{{ project.challenges }}</p>
        </section>

        <!-- CONCLUSION -->
        <section v-if="project.conclusion" class="section">
          <h2>Conclusion</h2>
          <p>{{ project.conclusion }}</p>
        </section>

        <!-- FOOTER -->
        <footer v-if="project.footer" class="footer">
          <h3>Acknowledgements</h3>
          <p>{{ project.footer }}</p>
        </footer>

      </div>



      <!-- IMAGE PREVIEW MODAL -->
<div v-if="isPreviewOpen" class="image-modal" @click="closePreview">
  <div class="modal-content" @click.stop>
    <button class="close-btn" @click="closePreview">✕</button>
    <img :src="selectedImage.image" :alt="selectedImage.caption" />
    <p class="modal-caption">
      {{ selectedImage.caption }}
    </p>
  </div>
</div>


    </main>

  </div>
</template>

<style scoped>

/* ================= LAYOUT ================= */
.project-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: #f4f7f5;
  font-family: "Inter", "Segoe UI", sans-serif;
}

/* ================= SIDEBAR ================= */
.sidebar {
  width: 300px;
  background: linear-gradient(180deg, #445d48, #384f3f);
  color: #ffffff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.2rem;
  box-shadow: 8px 0 30px rgba(0,0,0,0.08);
}

.logo-wrapper img {
  max-width: 150px;
  opacity: 0.95;
}

.meta h3 {
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.meta p {
  font-size: 0.95rem;
  opacity: 0.9;
}

.back-btn {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.back-btn:hover {
  background: #ffffff;
  color: #445d48;
}

/* LINKS */
.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.links a {
  text-decoration: none;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(255,255,255,0.12);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.links a:hover {
  background: rgba(255,255,255,0.25);
}

.links a.primary {
  background: #ffffff;
  color: #445d48;
  font-weight: 600;
}

.links a.primary:hover {
  background: #e7efe9;
}

/* ================= RIGHT SIDE ================= */
.content-wrapper {
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

.content {
  width: 100%;
  max-width: 880px;
  padding: 4.5rem 0;
}

/* ================= HEADER ================= */
.header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.header h1 {
  font-size: 2.6rem;
  font-weight: 700;
  color: #2f3e46;
  margin-bottom: 1.2rem;
}

/* TAGS */
.tags {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  background: #dbe5dc;
  border-radius: 999px;
  color: #2f3e46;
  font-weight: 500;
}

/* ================= SECTIONS ================= */
.section {
  margin-bottom: 3.5rem;
}

.section h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #2f3e46;
  border-left: 4px solid #445d48;
  padding-left: 0.9rem;
}

.section p,
.section ul {
  font-size: 1rem;
  line-height: 1.85;
  color: #374151;
}

.section ul {
  padding-left: 1.2rem;
}

/* HIGHLIGHT SUMMARY */
.highlight {
  background: #e9f1ec;
  padding: 2rem;
  border-radius: 14px;
}

/* ================= TECH STACK ================= */
.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-card {
  padding: 0.6rem 1.2rem;
  background: #dbe5dc;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #2f3e46;
  transition: 0.25s ease;
}

.tech-card:hover {
  background: #445d48;
  color: #ffffff;
}

/* ================= IMAGES ================= */
.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.2rem;
}

.ratio-16x9 {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 18px 35px rgba(0,0,0,0.08);
}

.ratio-16x9 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-card figcaption {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  font-style: italic;
  opacity: 0.75;
}

/* ================= FOOTER ================= */
.footer {
  margin-top: 5rem;
  padding: 3rem 0 2rem;
  border-top: 1px solid #dbe5dc;
  text-align: center;
}

.footer-section {
  max-width: 720px;
  margin: 0 auto;
}

.footer h3 {
  display: inline-block;         
  font-size: 1.1rem;
  font-weight: 600;
  color: #2f3e46;
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid #445d48;   
}

.footer p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #4b5563;
  opacity: 0.9;
  white-space: pre-line;

}


/* ================= SCROLLBAR ================= */
.content-wrapper::-webkit-scrollbar {
  width: 8px;
}

.content-wrapper::-webkit-scrollbar-thumb {
  background: #b7c6ba;
  border-radius: 10px;
}

.content-wrapper::-webkit-scrollbar-thumb:hover {
  background: #8fa896;
}

/* ================= IMAGE HOVER EFFECT ================= */
.image-card {
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.image-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.image-wrapper {
  position: relative;
}

.image-wrapper img {
  transition: transform 0.4s ease;
}

.image-card:hover img {
  transform: scale(1.08);
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 16px;
}

.image-card:hover .overlay {
  opacity: 1;
}

/* ================= MODAL ================= */
.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 2rem;
  backdrop-filter: blur(6px);
}

.modal-content {
  max-width: 1000px;
  width: 100%;
  animation: fadeIn 0.3s ease;
  text-align: center;
}

.modal-content img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.35);
}

.modal-caption {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #f1f1f1;
}

.close-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
}

.close-btn:hover {
  background: white;
  color: #000;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
