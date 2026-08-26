<script setup>
import { useHomepageAbout } from '@/composables/useHomepageAbout'
import { useGithubContributions } from '@/composables/useGithubContributions'
import { useVisitorCounter } from '@/composables/useVisitorCounter'

const {
  status,
  name,
  profileImg,
  description,
  tags,
  info,
} = useHomepageAbout()

const { weeks, months, contribCount, loading } = useGithubContributions()
const { totalVisitors, viewingNow, loading: visitorLoading } = useVisitorCounter()

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const exploreLinks = [
  {
    title: 'Web Projects',
    subtitle: 'Programming',
    to: '/projects/web',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  },
  {
    title: 'Visual Projects',
    subtitle: 'Branding & Design',
    to: '/projects/visual',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',
  },
  {
    title: 'Certifications',
    subtitle: 'Credentials',
    to: '/certifications',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="M12 15v4"/><path d="M9 19h6"/></svg>',
  },
  {
    title: 'Tools & Tech',
    subtitle: 'Skills',
    to: '/tech-stack',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
  },
]
</script>

<template>
  <section class="about-page">
    <div class="about-shell">
      <header class="about-hero">
        <div class="about-hero-content">
          <div class="about-hero-left">
            <span class="status">
              <span class="status-dot"></span>
              {{ status }}
            </span>
            <h1>{{ name }}</h1>
            <p class="subtitle">{{ description }}</p>
            <div class="tags">
              <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="buttons">
              <router-link to="/contact" class="btn primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                Contact
              </router-link>
              <router-link to="/resources" class="btn outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
                Download Resume
              </router-link>
            </div>
          </div>
          <div class="about-hero-right">
            <div class="profile-cube">
              <img :src="profileImg" alt="Profile picture" />
            </div>
          </div>
        </div>
      </header>

      <div class="info-grid">
        <div v-for="item in info" :key="item.label" class="info-card">
          <div class="info-icon" v-html="item.icon"></div>
          <div class="info-text">
            <span class="info-label">{{ item.label }}</span>
            <span class="info-value">{{ item.value }}</span>
          </div>
        </div>
      </div>

      <div class="visitor-stats">
        <div class="visitor-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <div class="visitor-info">
            <span class="visitor-count">{{ visitorLoading ? '—' : totalVisitors.toLocaleString() }}</span>
            <span class="visitor-label">Total Visitors</span>
          </div>
        </div>
        <div class="visitor-card">
          <div class="viewing-dot"></div>
          <div class="visitor-info">
            <span class="visitor-count">{{ viewingNow }}</span>
            <span class="visitor-label">is viewing now</span>
          </div>
        </div>
      </div>

      <div class="about-github">
        <a href="https://github.com/DevKennySoriano" target="_blank" rel="noopener noreferrer" class="github-link">
          <div v-if="loading" class="github-loading">Loading contributions...</div>
          <template v-else>
            <div class="github-calendar">
              <div class="cal-grid">
                <div v-for="(week, wi) in weeks" :key="wi" class="cal-week">
                  <span
                    v-for="(day, di) in week"
                    :key="di"
                    class="cal-dot"
                    :class="'level-' + day.level"
                    :data-tip="day.date ? day.count + ' contribution' + (day.count !== 1 ? 's' : '') + ' on ' + formatDate(day.date) : ''"
                  ></span>
                </div>
              </div>
            </div>
            <div class="github-footer">
              <span class="github-count">{{ contribCount }} contributions in the last year</span>
              <span class="github-label">@DevKennySoriano</span>
            </div>
          </template>
        </a>
      </div>

      <div class="explore-section">
        <h2 class="section-title">Explore</h2>
        <div class="explore-grid">
          <router-link
            v-for="link in exploreLinks"
            :key="link.title"
            :to="link.to"
            class="explore-card"
          >
            <div class="explore-icon" v-html="link.icon"></div>
            <div class="explore-info">
              <h3>{{ link.title }}</h3>
              <p>{{ link.subtitle }}</p>
            </div>
            <svg class="explore-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/home/homepage-about.css"></style>
