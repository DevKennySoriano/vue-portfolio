<script setup>
import { onMounted, nextTick } from 'vue'
import AOS from 'aos'

const techStacks = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    title: "Workflow",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" }
    ]
  }
]

onMounted(async () => {
  await nextTick()
  AOS.refresh()
})
</script>
<template>
<section class="tech">
  <h2
    class="section-title"
    data-aos="fade-up"
  >
    Tech Stack
  </h2>

  <div class="tech-grid">
    <div
      v-for="(stack, index) in techStacks"
      :key="stack.title"
      class="tech-card"
      data-aos="fade-up"
      :data-aos-delay="index * 150"
    >
      <h3 class="tech-title">{{ stack.title }}</h3>

      <div class="icon-grid">
        <div
          v-for="(item, i) in stack.items"
          :key="item.name"
          class="icon-item"
          data-aos="fade-up"
          :data-aos-delay="i * 80 + index * 150"
        >
          <div class="icon-box">
            <img :src="item.icon" :alt="item.name" />
          </div>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.tech {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.6rem);
  margin-bottom: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #262626;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
}

.tech-card {
  position: relative;
  background: #445d48;
  border-radius: 20px;
  padding: 2.2rem 1.8rem;
  color: #f9fafb;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.tech-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at top,
    rgba(154, 247, 157, 0.15),
    transparent 45%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
}

.tech-card:hover::after {
  opacity: 1;
}

.tech-title {
  text-align: center;
  margin-bottom: 1.8rem;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e5e7eb;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #e5e7eb;
  transition: transform 0.25s ease, color 0.25s ease;
}

.icon-item:hover {
  transform: translateY(-4px);
  color: #ffffff;
}

.icon-box {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(139, 135, 135, 0.2),
    rgba(255, 255, 255, 0.05)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.icon-item:hover .icon-box {
  transform: scale(1.1);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}

.icon-box img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
}

.fade-up {
  opacity: 0;
  animation: fadeUp 0.75s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
