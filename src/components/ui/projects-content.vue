<script setup>
import dumpCat from '@/images/brandstyling/Dump-Cat.png'
import homeHiveBanner from '@/images/banners/HomeHiveBanner.png'
import AllAboutPets from '@/images/banners/PetsBanner.png'
import Kape from '@/images/banners/KapeBanner.png'



const webProjects = [
  {
    title: "All About Pets",
    description: "A client-based mini-thesis web system built for a pet care business, focusing on service management and user experience. Although discontinued, the project demonstrates real-world client collaboration, system architecture planning, and interface design.",
    image: AllAboutPets,
    link: "#",
    progress: 10,
    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript" ]
  },
  {
    title: "HomeHive",
    description: "A long-term rental management platform developed for property owners and administrators. The system handles contract creation, tenant and admin management, and uses AI-powered predictive maintenance to support data-driven decisions for property owners.",
    image: homeHiveBanner,
    link: "#",
    progress: 100,
    tags: ["PHP", "HTML", "CSS", "AI", "MySQL", "JavaScript" ]
  },
  {
    title: "Kape't Bahala na",
    description: "A practice project built to explore and improve my skills in Laravel. Focused on learning backend development, routing, and database interactions while experimenting with dynamic web features.",
    image: Kape,
    link: "#",
    progress: 5,
    tags: ["PHP", "Laravel", "HTML", "CSS", "MySQL"," JavaScript","Vue","Docker" ]
  }
]

const brandingWorks = [
  dumpCat
]

const statusText = (value) => value === 100 ? 'Completed' : 'In Progress'
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
        <img :src="project.image" :alt="project.title" />
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
              <path
                class="bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="progress"
                :stroke-dasharray="`${project.progress}, 100`"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="18" class="percentage">
                {{ project.progress }}%
              </text>
              <text x="18" y="23" class="status">
                {{ statusText(project.progress) }}
              </text>
            </svg>
          </div>
        </div>

        <a :href="project.link" class="view-btn">View Project</a>
      </div>
    </div>
  </div>

  <h3 class="sub-title">Layout & Styling</h3>
  <div class="branding-grid">
    <div
      v-for="(img, i) in brandingWorks"
      :key="i"
      class="branding-card fade-card"
      :style="{ animationDelay: `${i * 0.05}s` }"
    >
      <img :src="img" alt="Brand styling work" />
    </div>
  </div>
</section>
</template>

<style>

.projects {
  margin: 120px auto;
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
  grid-template-columns: repeat(3, 1fr);
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

.web-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
}

.text h4 {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}

.text p {
  font-size: 0.9rem;
  opacity: 0.85;
  line-height: 1.5;
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
margin-top: 0.8rem;
  display: inline-block;
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

.branding-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.branding-card {
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.05);
  width: 60%;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.branding-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.16);
}

.branding-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeCard {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progressAnim {
  from {
    stroke-dasharray: 0, 100;
  }
}
/* ===== TABLET ===== */
@media (max-width: 1024px) {
  .projects {
    padding: 2.5rem 2rem;
  }

  .web-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .text h4 {
    font-size: 1rem;
  }

  .text p {
    font-size: 0.85rem;
    line-height: 1.45;
  }

  .progress-circle {
    width: 56px;
    height: 56px;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 640px) {
  .projects {
    margin: 80px auto;
    padding: 2rem 1.4rem;
  }

  .web-grid {
    grid-template-columns: 1fr;
  }

  .content-top {
    flex-direction: column;
    gap: 0.8rem;
  }

  .progress-circle {
    align-self: flex-start;
    width: 52px;
    height: 52px;
  }

  .text h4 {
    font-size: 0.95rem;
  }

  .text p {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .view-btn {
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
  }

  .branding-grid {
    grid-template-columns: 1fr;
  }

  .branding-card {
    width: 100%;
  }
}</style>