<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from 'vue'
import { useProjectView } from '@/composables/useProjectView'

const {
  route,
  project,
  isPreviewOpen,
  selectedImage,
  isPageLoading,
  openPreview,
  closePreview,
} = useProjectView()

const activeSection = ref('')
let wrapperEl = null
let cleanup = []
let spyFrozen = false
let unfreezeTimer = null

const ACTIVE_OFFSET = 96

const tocSections = computed(() => {
  if (!project.value) return []

  const token = (id, label, show) => (show ? { id, label } : null)

  return [
    token('summary', 'Project Summary', true),
    token('overview', 'System Overview', true),
    token('introduction', 'Introduction', !!project.value.background),
    token('methodology', 'Methodology', !!project.value.methodology),
    token('objectives', 'Objectives', !!(project.value.objectives && project.value.objectives.length)),
    token('stack', 'Technology Stack', !!(project.value.techStack && project.value.techStack.length)),
    token('features', 'Key Features', !!(project.value.features && project.value.features.length)),
    token('screenshots', 'Implementation & Output', !!(project.value.screenshots && project.value.screenshots.length)),
    token('challenges', 'Challenges and Learnings', !!project.value.challenges),
    token('conclusion', 'Conclusion', !!project.value.conclusion),
    token('acknowledgements', 'Acknowledgements', !!project.value.footer),
  ].filter(Boolean)
})

const getScroller = () => {
  if (wrapperEl && wrapperEl.scrollHeight > wrapperEl.clientHeight) return wrapperEl
  return window
}

const onScroll = () => {
  if (spyFrozen) return

  const scroller = getScroller()
  const isWin = scroller === window
  const rect = isWin ? null : scroller.getBoundingClientRect()
  const scrollerTop = rect ? rect.top : 0
  const line = scrollerTop + ACTIVE_OFFSET
  const scrollerBottom = rect ? rect.bottom : window.innerHeight
  const docBottom = isWin ? document.documentElement.offsetHeight : scroller.scrollHeight
  const atBottom = isWin
    ? scrollerBottom >= docBottom - 4
    : scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4

  const sections = document.querySelectorAll('[data-toc]')
  let current = ''
  let lastVisible = ''

  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top
    if (top <= line) current = sec.getAttribute('data-toc')
    if (top <= scrollerBottom) lastVisible = sec.getAttribute('data-toc')
  })

  if (atBottom && lastVisible) current = lastVisible

  activeSection.value = current || ''
}

const scrollToSection = (id) => {
  const el = document.querySelector(`[data-toc="${id}"]`)
  if (!el) return

  spyFrozen = true
  activeSection.value = id

  let settled = false
  const done = () => {
    if (settled) return
    settled = true
    spyFrozen = false
    window.clearTimeout(unfreezeTimer)
    window.removeEventListener('scrollend', done)
    if (wrapperEl) wrapperEl.removeEventListener('scrollend', done)
  }

  window.addEventListener('scrollend', done, { once: true })
  if (wrapperEl) wrapperEl.addEventListener('scrollend', done, { once: true })
  window.clearTimeout(unfreezeTimer)
  unfreezeTimer = window.setTimeout(done, 800)

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const bindScroller = async () => {
  cleanup.forEach((fn) => fn())
  cleanup = []
  await nextTick()
  wrapperEl = document.querySelector('.content-wrapper')
  if (wrapperEl) {
    wrapperEl.addEventListener('scroll', onScroll, { passive: true })
    cleanup.push(() => wrapperEl.removeEventListener('scroll', onScroll))
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  cleanup.push(() => window.removeEventListener('scroll', onScroll))
  onScroll()
}

watch(isPageLoading, (loading) => {
  if (!loading) bindScroller()
})

onMounted(() => {
  if (!isPageLoading.value) bindScroller()
})

onBeforeUnmount(() => {
  window.clearTimeout(unfreezeTimer)
  cleanup.forEach((fn) => fn())
  cleanup = []
})
</script>


<template>
  <div class="project-view-shell">

    <transition name="page-loader-fade">
      <div v-if="isPageLoading" class="page-loader" aria-label="Loading project details" role="status">
        <div class="page-loader-box">
          <img :src="project?.logo || '/images/icons/K.png'" alt="" class="page-loader-logo" />
          <p class="page-loader-text">Loading project details...</p>
        </div>
      </div>
    </transition>

  <div v-if="!isPageLoading" class="project-layout">

    <!-- ================= SIDEBAR ================= -->
    <aside class="sidebar">

      <router-link to="/projects/web" class="back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>
        Back to Projects
      </router-link>

      <div class="logo-wrapper">
        <img :src="project.logo" :alt="project.title" />
      </div>

      <div class="meta">
        <h3>Project Info</h3>
        <p v-if="project.date"><strong>Year</strong><span>{{ project.date }}</span></p>
        <p v-if="project.type"><strong>Category</strong><span>{{ project.type }}</span></p>
      </div>

      <div class="links">
      
        <a v-if="project.github" :href="project.github" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"/><path d="M14 2v5h5"/></svg>
          Source Code
        </a>
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          class="primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
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
          <p v-if="project.date || project.type" class="header-sub">
            <span v-if="project.date" class="header-sub-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {{ project.date }}
            </span>
            <span v-if="project.type" class="header-sub-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {{ project.type }}
            </span>
          </p>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- SUMMARY -->
        <section class="section summary highlight" data-toc="summary">
          <h2>Project Summary</h2>
          <p>
            {{ project.overview || project.description }}
          </p>
        </section>

        <!-- SYSTEM OVERVIEW -->
        <section class="section" data-toc="overview">
          <h2>System Overview</h2>
          <figure class="system-overview-wrap">
            <div class="ratio-16x9 system-overview-image">
              <img :src="project.project" :alt="project.title + ' system overview'" />
            </div>
            <figcaption>A look at the {{ project.title }} interface.</figcaption>
          </figure>
        </section>

        <!-- INTRODUCTION -->
        <section v-if="project.background" class="section" data-toc="introduction">
          <h2>Introduction</h2>
          <p>{{ project.background }}</p>
        </section>

        <!-- METHODOLOGY -->
        <section v-if="project.methodology" class="section" data-toc="methodology">
          <h2>Methodology</h2>
          <p>{{ project.methodology }}</p>
        </section>

        <!-- OBJECTIVES -->
        <section v-if="project.objectives?.length" class="section" data-toc="objectives">
          <h2>Objectives</h2>
          <ul class="check-list">
            <li v-for="(item, i) in project.objectives" :key="i">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- TECH STACK -->
        <section v-if="project.techStack?.length" class="section tech" data-toc="stack">
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

        <!-- FEATURES -->
        <section v-if="project.features?.length" class="section" data-toc="features">
          <h2>Key Features</h2>
          <ul class="check-list">
            <li v-for="(feature, i) in project.features" :key="i">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              {{ feature }}
            </li>
          </ul>
        </section>

        <!-- SCREENSHOTS -->
        <section v-if="project.screenshots?.length" class="section" data-toc="screenshots">
          <h2>Implementation & Output</h2>

          <div class="images-grid">
            <figure
              v-for="(shot, i) in project.screenshots"
              :key="i"
              class="image-card"
              @click="openPreview(shot)"
            >
              <div class="ratio-16x9 image-wrapper">
                <img :src="shot.image" :alt="shot.caption" loading="lazy" />
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
        <section v-if="project.challenges" class="section" data-toc="challenges">
          <h2>Challenges and Learnings</h2>
          <p>{{ project.challenges }}</p>
        </section>

        <!-- CONCLUSION -->
        <section v-if="project.conclusion" class="section" data-toc="conclusion">
          <h2>Conclusion</h2>
          <p>{{ project.conclusion }}</p>
        </section>

        <!-- FOOTER -->
        <footer v-if="project.footer" class="footer" data-toc="acknowledgements">
          <div class="footer-section">
            <h3>Acknowledgements</h3>
            <p>{{ project.footer }}</p>
          </div>
        </footer>

      </div>

      <!-- SCROLL SPY NAVIGATION -->
      <nav class="toc-rail" aria-label="Page sections">
        <span class="toc-label">On this page</span>
        <div class="toc-list">
          <button
            v-for="s in tocSections"
            :key="s.id"
            class="toc-item"
            :class="{ 'is-active': activeSection === s.id }"
            type="button"
            @click="scrollToSection(s.id)"
          >
            <span class="toc-dot"></span>
            <span class="toc-title">{{ s.label }}</span>
          </button>
        </div>
      </nav>

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
  </div>
</template>

<style scoped src="@/css/views/projects-view.css"></style>
