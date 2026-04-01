<script setup>
const experiences = [
  {
    role: "OJT Intern - Product Development Department (PDD)",
    company: "Wizzard Technologies INC.",
    duration: "Completed 300 hours",
    dateRange: "January 2026 - March 2026",
    facebook: "https://www.facebook.com/wtiwizzard",
    maps: "https://www.google.com/maps/place/Wizzard+Technologies,+Inc./@14.5845565,121.0600478,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c81136017fcd:0x99ee0dccd4b379b9!8m2!3d14.5845565!4d121.0626227!16s%2Fg%2F11f_p7ql63?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D",
    tech: [
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Vue",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
      },
      {
        name: "Nuxt UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
      },
      {
        name: "Tailwind",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      },
      {
        name: "Node",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
      }
    ],
    summary:
      "Completed a 300-hour On-the-Job Training program at Wizzard Technologies INC. as a formal academic requirement of STI College for the completion of my Bachelor of Science in Computer Science degree. Since I was already knowledgeable in frontend development, my mentor assigned me backend-focused responsibilities to further develop my technical range. This included contributing to system logic, database integration, and server-side implementation while collaborating with the team on full-system delivery in a professional development environment."
  }
]
</script>

<template>
  <section class="experience">
    <div class="experience-shell">
      <h2 class="section-title" data-aos="fade-up">Experience</h2>

      <article
        v-for="(item, index) in experiences"
        :key="item.company"
        class="experience-card"
        data-aos="fade-up"
        :data-aos-delay="index * 120"
      >
        <div class="top-row">
          <div>
            <h3>{{ item.role }}</h3>
            <p class="company">{{ item.company }}</p>
          </div>
          <div class="meta-right">
            <span class="duration">{{ item.duration }}</span>
            <p class="date-range">{{ item.dateRange }}</p>
          </div>
        </div>

        <p class="summary">{{ item.summary }}</p>

        <p class="block-title">Core Competencies</p>
        <div class="tech-stack" aria-label="Tech stack used during OJT">
          <span
            v-for="tech in item.tech"
            :key="tech.name"
            class="tech-pill"
            :title="tech.name"
          >
            <img :src="tech.icon" :alt="tech.name" loading="lazy" />
            <span>{{ tech.name }}</span>
          </span>
        </div>

        <p class="block-title contact-title">Links</p>
        <div class="brand-row">
          <a
            class="facebook-link"
            :href="item.facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wizzard Technologies Facebook page"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08V12.1h3.05V9.42c0-3.02 1.8-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.28h3.35l-.54 3.47h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/>
            </svg>
            <span>Facebook</span>
          </a>

          <a
            class="maps-link"
            :href="item.maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wizzard Technologies Google Maps location"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.38 7 13 7 13s7-7.62 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
            </svg>
            <span>Google Maps</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 0 1rem;
  margin: 0 auto 90px;
}

.experience-shell {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  margin: 0 0 1.2rem;
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  color: var(--text);
}

.experience-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-left: 6px solid var(--surface-strong);
  border-radius: 16px;
  padding: 1.2rem 1.2rem 1.1rem;
  box-shadow: var(--shadow);
}

.top-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text);
}

.company {
  margin: 0.25rem 0 0;
  color: var(--text-muted);
  font-weight: 600;
}

.duration {
  white-space: nowrap;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--text-inverse);
  background: var(--surface-strong);
}

.meta-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
}

.date-range {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
}

.summary {
  margin: 0.85rem 0 0;
  color: var(--text-muted);
  line-height: 1.7;
}

.block-title {
  margin: 1rem 0 0.55rem;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--text) 80%, var(--text-muted));
}

.contact-title {
  margin-top: 1.15rem;
}

.tech-stack {
  margin-top: 0.95rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg-elevated) 86%, var(--bg-soft));
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text);
}

.tech-pill img {
  width: 15px;
  height: 15px;
  object-fit: contain;
}

.brand-row {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.facebook-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text);
  font-weight: 600;
  font-size: 0.8rem;
  background: color-mix(in srgb, var(--bg-elevated) 85%, transparent);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.facebook-link:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, #1877f2 50%, var(--border));
}

.facebook-link svg {
  width: 16px;
  height: 16px;
  fill: #1877f2;
}

.maps-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text);
  font-weight: 600;
  font-size: 0.8rem;
  background: color-mix(in srgb, var(--bg-elevated) 85%, transparent);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.maps-link:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, #0f9d58 50%, var(--border));
}

.maps-link svg {
  width: 16px;
  height: 16px;
  fill: #db4437;
}

@media (max-width: 640px) {
  .experience {
    margin-bottom: 70px;
  }

  .top-row {
    flex-direction: column;
  }

  .duration {
    white-space: normal;
  }

  .meta-right {
    align-items: flex-start;
  }

  .brand-row {
    align-items: stretch;
  }

  .tech-stack {
    gap: 0.45rem;
  }
}
</style>
