<script setup>
import { onMounted, nextTick } from 'vue'
import AOS from 'aos'

const education = [
  {
    date: "2022 – 2026",
    title: "Bachelor of Science in Computer Science",
    school: "STI College – Novaliches, Quezon City",
    description:
      "Currently pursuing a degree in Computer Science with studies covering software development, cybersecurity fundamentals, ISO standards awareness, system design principles, and modern web technologies.",
    image: "/images/edu/stinova.jpeg"
  },
  {
    date: "2021 – 2022",
    title: "Bachelor of Science in Computer Science",
    school: "STI College – Calamba, Laguna",
    description:
      "Built a strong programming foundation through hands-on projects using multiple programming languages and core web technologies, focusing on problem-solving and application development.",
    image: "/images/edu/sticalamba.jpg"
  },
  {
    date: "2019 – 2021",
    title: "Senior High School – ICT Strand",
    school: "Mabalacat National Senior High School – Dau, Mabalacat, Pampanga",
    description:
      "Specialized in Information and Communications Technology with practical experience in basic programming, computer systems, networking concepts, and technical fundamentals.",
    image: "/images/edu/shs.jpeg"
  }
]


onMounted(async () => {
  await nextTick()
  AOS.refresh()
})
</script>
<template>
<section class="education">
  <h2
    class="section-title"
    data-aos="fade-up"
  >
    Educational Background
  </h2>

  <div class="timeline">
    <div
      v-for="(item, index) in education"
      :key="index"
      class="timeline-item"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <div
        class="timeline-image"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
      >
        <div class="image-wrapper">
          <img :src="item.image" alt="Education image" />
        </div>
      </div>

      <div
        class="timeline-content"
        :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
        data-aos-delay="100"
      >
        <div class="content-card">
          <span class="date">{{ item.date }}</span>
          <h3 class="title">{{ item.title }}</h3>
          <h4 class="school">{{ item.school }}</h4>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<style scoped>
.education {
  background: var(--surface-strong);
  padding: 3.5rem 2rem;
  color: var(--text-inverse);
  width: auto;
  box-sizing: border-box;
  overflow-x: clip;

}

.section-title {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 3.5rem;
}

.timeline {
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.timeline-item.reverse {
  flex-direction: row-reverse;
}

.timeline-image {
  flex: 1;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid color-mix(in srgb, var(--text-inverse) 90%, transparent);
  background: color-mix(in srgb, var(--surface-strong-2) 90%, black);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-wrapper:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.timeline-content {
  flex: 1;
}

.content-card {
  background: color-mix(in srgb, var(--bg-elevated) 12%, transparent);
  border-radius: 16px;
  padding: 1.8rem 1.8rem;
  backdrop-filter: blur(6px);
  border: 1px solid color-mix(in srgb, var(--text-inverse) 22%, transparent);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.date {
  display: inline-block;
  margin-bottom: 0.7rem;
  padding: 0.35rem 0.9rem;
  background: var(--bg-elevated);
  color: var(--text);
  border-radius: 999px;
  font-size: 0.85rem;
}

.title {
  font-size: 1.6rem;
  margin: 0.6rem 0;
}

.school {
  font-size: 1.05rem;
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: 0.9rem;
}

.description {
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.95;
}

.fade-left {
  animation: fadeLeft 0.8s ease forwards;
}

.fade-right {
  animation: fadeRight 0.8s ease forwards;
}

.fade-up {
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .timeline-item,
  .timeline-item.reverse {
    flex-direction: column;
    text-align: center;
  }

  .education {
    padding: 2.8rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .timeline {
    gap: 2rem;
  }

  .content-card {
    padding: 1.2rem;
  }

  .title {
    font-size: 1.25rem;
  }
}

/* Extra small screens */
@media (max-width: 375px) {
  .education {
    padding: 2.8rem 0.5rem;
  }
}
</style>
