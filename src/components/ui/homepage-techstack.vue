<script setup>
const techStacks = [
  {
    title: "Languages",
    items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    title: "Workflow",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ]
  }
]
</script>

<template>
<section class="tech">
  <h2 class="section-title fade-up">Tech Stack</h2>

  <div class="tech-grid">
    <div
      v-for="(stack, index) in techStacks"
      :key="stack.title"
      class="tech-card fade-up"
      :style="{ animationDelay: `${index * 0.15}s` }"
    >
      <h3 class="tech-title">{{ stack.title }}</h3>

      <div class="icon-grid">
        <div
          v-for="item in stack.items"
          :key="item.name"
          class="icon-item"
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
  padding: 2rem 2rem;
  max-width: 1100px;
  margin: auto;
}

.section-title {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 3.2rem;
    color:#262626;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.tech-card {
  background: #445d48;
  border-radius: 16px;
  padding: 2rem 1.6rem;
  color: #fafafa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.3);
}

.tech-title {
  text-align: center;
  margin-bottom: 1.6rem;
  font-size: 1.25rem;
  letter-spacing: 0.6px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  opacity: 0.95;
  transition: transform 0.25s ease;
}

.icon-item:hover {
  transform: scale(1.12);
}

.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.fade-up {
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(22px);
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
