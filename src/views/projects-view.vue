<script setup>
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
          <div class="ratio-16x9 system-overview-image">
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
  </div>
</template>

<style scoped src="@/css/views/projects-view.css"></style>
