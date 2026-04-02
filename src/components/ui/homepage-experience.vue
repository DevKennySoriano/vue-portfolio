<script setup>
import { ref } from 'vue'

const expandedIndex = ref(-1)

const timeline = [
  {
    period: "Present",
    title: "OJT Intern - Product Development",
    company: "Wizzard Technologies Inc.",
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
    description:
      "Completed a 300-hour On-the-Job Training at Wizzard Technologies Inc. as a requirement for my BS Computer Science degree at STI College. I was given backend tasks like system logic, database work, and server-side coding. I also worked with a team to build and complete a full system in a professional setting."
  },
  {
    period: "2025",
    title: "Front End Development Libraries",
    company: "FreeCodeCamp",
    duration: "Completed 300 hours",
    dateRange: "July 2025",
    description:
      "Completed comprehensive Front End Development Libraries course on FreeCodeCamp with 300 hours of self-paced learning. Mastered modern JavaScript frameworks and libraries with hands-on projects. Developed proficiency in building interactive and responsive user interfaces with industry-standard tools.",
    tech: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      }
    ],
    freecodecamp: "https://www.freecodecamp.org/",
    isSimple: false
  },
  {
    period: "2024 - 2025",
    title: "Programming, Networking, and Cybersecurity Foundations",
    company: "STI College",
    sti: "https://www.sti.edu/",
    dateRange: "2024",
    description:
      "Expanded my STI College training by learning Python and PHP for practical software development, cybersecurity principles aligned with ISO standards, and core networking concepts including IPv4 and IPv6.",
    tech: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        name: "Cybersecurity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      },
      {
        name: "IPv4",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg"
      },
      {
        name: "IPv6",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg"
      }
    ],
    isSimple: false
  },
  {
    period: "2023",
    title: "Data Structures and Algorithms",
    company: "STI College",
    sti: "https://www.sti.edu/",
    dateRange: "2023",
    description:
      "Studied core data structures and algorithmic thinking at STI College, with hands-on practice in sorting techniques and related efficiency concepts for writing better-performing programs.",
    tech: [
      {
        name: "Algorithms",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        name: "Sorting",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        name: "Data Structures",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      }
    ],
    isSimple: false
  },
  {
    period: "2022 - 2023",
    title: "Oracle Java Fundamentals",
    company: "STI College",
    sti: "https://www.sti.edu/",
    dateRange: "2022 - 2023",
    description:
      "Completed comprehensive Oracle Java Fundamentals course at STI College. Developed strong foundation in object-oriented programming principles, data structures, and Java development best practices. Mastered core Java concepts including exception handling, collections, and multi-threading.",
    tech: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "OOP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "Collections",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "Exceptions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      }
    ],
    isSimple: false
  },
  {
    period: "2021",
    title: "Hello World",
    company: "Started Learning Programming",
    sti: "https://www.sti.edu/",
    w3schools: "https://www.w3schools.com/",
    dateRange: "2021",
    description:
      "Began my journey into software development with passion and curiosity. Started learning the fundamentals of programming and web development, laying the foundation for my career in tech.",
    tech: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      }
    ],
    isSimple: true
  }
]

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? -1 : index
}
</script>

<template>
  <section class="experience">
    <div class="experience-shell">
      <h2 class="section-title" data-aos="fade-up" data-aos-once="true">Experience</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-once="true">
        This section highlights not only my professional work experience, but also my continuous journey through the programming world, including technical training, hands-on practice, and key learning milestones that shaped my growth as a developer.
      </p>

      <div class="timeline">
        <button
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-item"
          :class="{ 'is-expanded': expandedIndex === index }"
          @click="toggleExpand(index)"
        >
          <div class="timeline-marker">
            <div class="bullet"></div>
            <div v-if="index < timeline.length - 1" class="line"></div>
          </div>

          <div class="timeline-content">
            <div class="timeline-header">
              <span class="period">{{ item.period }}</span>
              <h3 class="title">{{ item.title }}</h3>
              <p class="company">{{ item.company }}</p>
              <svg
                class="chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

              <transition name="expand" mode="out-in">
                <div v-if="expandedIndex === index" key="details" class="timeline-details" @click.stop>
                  <div class="date-range" v-if="item.dateRange">
                    {{ item.dateRange }}
                  </div>

                  <div v-if="item.duration" class="duration-badge">
                    {{ item.duration }}
                  </div>

                  <p class="description">{{ item.description }}</p>

                  <div v-if="item.tech && item.tech.length > 0" class="full-section">
                    <p class="block-title">Core Competencies</p>
                    <div class="tech-stack">
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
                  </div>

                  <div v-if="item.facebook || item.maps || item.freecodecamp || item.sti || item.w3schools" class="full-section">
                    <p class="block-title">Links</p>
                    <div class="brand-row">
                      <a
                        v-if="item.facebook"
                        class="facebook-link"
                        :href="item.facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        aria-label="Wizzard Technologies Facebook page"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08V12.1h3.05V9.42c0-3.02 1.8-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.28h3.35l-.54 3.47h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/>
                        </svg>
                        <span>Facebook</span>
                      </a>

                      <a
                        v-if="item.maps"
                        class="maps-link"
                        :href="item.maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        aria-label="Wizzard Technologies Google Maps location"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2a7 7 0 0 0-7 7c0 5.38 7 13 7 13s7-7.62 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
                        </svg>
                        <span>Google Maps</span>
                      </a>

                      <a
                        v-if="item.freecodecamp"
                        class="freecodecamp-link"
                        :href="item.freecodecamp"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        aria-label="FreeCodeCamp"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                          <path d="M4.5 10.5h3v7h-3zm7-7h3v14h-3zm-7 14h3v3h-3zm3 0h3v3h-3zm10-14h3v7h-3zm0 10h3v4h-3z"/>
                        </svg>
                        <span>FreeCodeCamp</span>
                      </a>

                      <a
                        v-if="item.sti"
                        class="sti-link"
                        :href="item.sti"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        aria-label="STI College"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                          <path d="M12 3 3 7.5v1.2l9 4.5 7-3.5V16h2V7.5L12 3Zm-6.8 8.7V15c0 2.3 3.1 4 6.8 4s6.8-1.7 6.8-4v-3.3L12 15l-6.8-3.3Z"/>
                        </svg>
                        <span>STI College</span>
                      </a>

                      <a
                        v-if="item.w3schools"
                        class="w3schools-link"
                        :href="item.w3schools"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        aria-label="W3Schools"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                          <path d="M2 3h20L19 21H5L2 3Zm6.5 4.2 1.7 8.5 1.8-5.1 1.8 5.1 1.7-8.5h2l-2.7 11.1h-2L12 12.7l-1.8 5.6h-2L5.5 7.2h3Z"/>
                        </svg>
                        <span>W3Schools</span>
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 0 1rem;
  margin: 0 auto 90px;
}

.experience-shell {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  margin: 0 0 0.55rem;
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  color: var(--text);
}

.section-subtitle {
  margin: 0 0 1.6rem;
  margin-left: calc(40px + 1.5rem);
  max-width: 760px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 40px;
  padding-top: 0.4rem;
}

.bullet {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--surface-strong);
  border: 3px solid var(--bg);
  position: relative;
  z-index: 10;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.timeline-item.is-expanded .bullet {
  width: 20px;
  height: 20px;
  background: color-mix(in srgb, var(--surface-strong) 120%, #22c55e);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--surface-strong) 30%, transparent);
}

.line {
  width: 3px;
  flex-grow: 1;
  background: var(--border);
  margin-top: 0.5rem;
  position: relative;
}

.timeline-content {
  padding: 0.6rem 0;
  flex: 1;
  margin-bottom: 2rem;
}

.timeline-header {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: all 0.25s ease;
  position: relative;
}

.timeline-item:hover .timeline-header {
  border-color: color-mix(in srgb, var(--surface-strong) 60%, var(--border));
  background: color-mix(in srgb, var(--bg-elevated) 95%, var(--surface-strong));
}

.timeline-item.is-expanded .timeline-header {
  border-color: var(--surface-strong);
  background: color-mix(in srgb, var(--bg-elevated) 90%, var(--surface-strong));
}

.period {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--surface-strong);
  white-space: nowrap;
  margin-top: 0.2rem;
}

.title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  flex: 1;
}

.company {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
}

.chevron {
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: transform 0.3s ease;
  margin-top: 0.2rem;
}

.timeline-item.is-expanded .chevron {
  transform: rotate(180deg);
  color: var(--surface-strong);
}

.timeline-details {
  padding: 1.2rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 12px 12px;
  margin-top: -1px;
  margin-bottom: 1.5rem;
}

/* Expand/Collapse - No Animation */
.expand-enter-active,
.expand-leave-active {
  transition: none;
}

.expand-enter-from {
  opacity: 1;
}

.expand-leave-to {
  opacity: 1;
}


.date-range {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  margin: 0 0 0.6rem 0;
}

.duration-badge {
  display: inline-block;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--text-inverse);
  background: var(--surface-strong);
  margin-bottom: 1rem;
}

.description {
  margin: 0.8rem 0;
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.full-section {
  margin-top: 1.2rem;
}

.block-title {
  margin: 0 0 0.6rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--text) 80%, var(--text-muted));
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg-elevated) 86%, var(--bg-soft));
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text);
}

.tech-pill img {
  width: 14px;
  height: 14px;
  object-fit: contain;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.facebook-link,
.maps-link,
.freecodecamp-link,
.sti-link,
.w3schools-link {
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

.facebook-link:hover,
.maps-link:hover,
.freecodecamp-link:hover,
.sti-link:hover,
.w3schools-link:hover {
  transform: translateY(-1px);
}

.facebook-link:hover {
  border-color: color-mix(in srgb, #1877f2 50%, var(--border));
}

.maps-link:hover {
  border-color: color-mix(in srgb, #0f9d58 50%, var(--border));
}

.freecodecamp-link:hover {
  border-color: color-mix(in srgb, #004d99 50%, var(--border));
}

.sti-link:hover {
  border-color: color-mix(in srgb, #f59e0b 50%, var(--border));
}

.w3schools-link:hover {
  border-color: color-mix(in srgb, #04aa6d 50%, var(--border));
}

.facebook-link svg {
  width: 14px;
  height: 14px;
  fill: #1877f2;
}

.maps-link svg {
  width: 14px;
  height: 14px;
  fill: #db4437;
}

.freecodecamp-link svg {
  width: 14px;
  height: 14px;
  fill: #004d99;
}

.sti-link svg {
  width: 14px;
  height: 14px;
  fill: #f59e0b;
}

.w3schools-link svg {
  width: 14px;
  height: 14px;
  fill: #04aa6d;
}

@media (max-width: 640px) {
  .experience {
    margin-bottom: 70px;
    padding: 0 0.8rem;
  }

  .timeline-marker {
    min-width: 32px;
  }

  .section-subtitle {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 34rem;
    font-size: 0.9rem;
  }

  .bullet {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }

  .timeline-item.is-expanded .bullet {
    width: 16px;
    height: 16px;
  }

  .timeline-header {
    flex-direction: column;
    gap: 0.4rem;
  }

  .period {
    font-size: 0.65rem;
  }

  .title {
    font-size: 0.95rem;
  }

  .company {
    font-size: 0.8rem;
  }

  .chevron {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    width: 18px;
    height: 18px;
  }

  .timeline-details {
    padding: 1rem;
  }

  .tech-stack {
    gap: 0.4rem;
  }

  .tech-pill {
    font-size: 0.68rem;
    padding: 0.25rem 0.5rem;
  }

  .tech-pill img {
    width: 12px;
    height: 12px;
  }

  .brand-row {
    gap: 0.5rem;
  }

  .facebook-link,
  .maps-link,
  .freecodecamp-link,
  .sti-link,
  .w3schools-link {
    padding: 0.35rem 0.6rem;
    font-size: 0.75rem;
  }

  .facebook-link svg,
  .maps-link svg,
  .freecodecamp-link svg,
  .sti-link svg,
  .w3schools-link svg {
    width: 12px;
    height: 12px;
  }
}
</style>
