<script setup>
import { ref } from 'vue'
const webProjects = [
  {
    slug: "all-about-pets",
    title: "All About Pets",
   progress: 10,
    description: "A client-based mini-thesis web system built for a pet care business...",
    image: "/images/banners/PetsBanner.png",
    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"]
  },
  {
    slug: "homehive",
    title: "HomeHive",
    progress: 100,
    description: "A long-term rental management platform developed for property owners...",
    image: "/images/banners/HomeHiveBanner.png",
    tags: ["PHP", "HTML", "CSS", "AI", "MySQL", "JavaScript"]
  },
  {
    slug: "kapet-bahala-na",
    title: "Kape't Bahala na",
    progress: 5,
    description: "A practice project built to explore and improve my skills in Laravel...",
    image: "/images/banners/KapeBanner.png",
    tags: ["PHP", "Laravel", "HTML", "CSS", "MySQL", "JavaScript", "Vue", "Docker"]
  }
]


const loadedImages = ref([])

const onImageLoad = index => {
  loadedImages.value[index] = true
}

const statusText = value => value === 100 ? 'Completed' : 'In Progress'
</script>


<template>
<section class="projects">


  <h3 class="sub-title">Web-based Projects</h3>
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
    @load="loadedImages[i] = true"
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
            <svg viewBox="0 0 36 36">
              <path class="bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path
                class="progress"
                :stroke-dasharray="`${project.progress}, 100`"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="18" class="percentage">{{ project.progress }}%</text>
              <text x="18" y="23" class="status">{{ statusText(project.progress) }}</text>
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

<style>
.projects {
  margin-top:120px;
  padding: 3rem 2.5rem;
  background-color: #445d48;
}

.section-title {
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #FAFAFA;
}

.sub-title {
  font-size: 1.4rem;
  margin: 2.5rem 0 1.5rem;
  color: #FAFAFA;
}

.web-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
}


.web-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.web-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.18);
}

.web-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

/* Skeleton */
.image-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e5e7eb 30%,
    #f3f4f6 50%,
    #e5e7eb 70%
  );
  background-size: 600% 100%;
  animation: shimmer 2.2s linear infinite;
  transition: opacity 0.45s ease;
  z-index: 1;
}

.image-skeleton.hidden {
  opacity: 0;
  pointer-events: none;
}

/* Image */
.web-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.45s ease;
  z-index: 0;
}

.web-image img.loaded {
  opacity: 1;
}

/* Shimmer */
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.web-content {
  padding: 1.2rem 1.3rem 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.content-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex: 1;
}


.text h4 {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}

.text p {
  font-size: 0.9rem;
  opacity: 0.85;
  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


.tags {
  margin-top: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 6px;
  color: #fff;
}

.tag.php { background-color: #8993be; }
.tag.laravel { background-color: #ff2d20; }
.tag.html { background-color: #e44d26; }
.tag.css { background-color: #264de4; }
.tag.javascript { background-color: #f0db4f; color: #111; }
.tag.vue { background-color: #42b883; }
.tag.ai { background-color: #6f42c1; }
.tag.mysql { background-color: #00758f; }
.tag.docker { background-color: #2496ed; }

.progress-circle {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.progress-circle svg {
  width: 100%;
  height: 100%;
}

.progress-circle .bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 3;
}

.progress-circle .progress {
  fill: none;
  stroke: #445d48;
  stroke-width: 3;
  stroke-linecap: round;
  animation: progressAnim 1.2s ease forwards;
}

.percentage {
  fill: #111827;
  font-size: 0.42rem;
  font-weight: 600;
  text-anchor: middle;
}

.status {
  fill: #6b7280;
  font-size: 0.28rem;
  text-anchor: middle;
}

.view-btn {
  margin-top: 50px;
  align-self: flex-start;
  padding: 0.45rem 1.2rem;
  font-size: 0.8rem;
  border-radius: 999px;
  background: #445d48;
  color: #FAFAFA;
  text-decoration: none;
  transition: all 0.3s ease;
}


.view-btn:hover {
  background: #556d58;
  transform: translateY(-2px);
}

.fade-up {
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
}

.fade-card {
  opacity: 0;
  animation: fadeCard 0.6s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeCard {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes progressAnim {
  from { stroke-dasharray: 0, 100; }
}
</style>
