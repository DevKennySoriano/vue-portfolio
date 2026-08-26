<script setup>
const latestResume = {
  title: 'Resume',
  subTitle: 'ATS Resume',
  date: 'July 11, 2026',
  href: '/resume/Kenny_Soriano_Resume_07112026_A4.pdf',
  thumbnail: '/resume/resume_thumbnail_sorianokenny.png',
}
</script>

<template>
  <section class="resources-page">
    <div class="resources-shell">
      <header class="resources-hero">
        <p class="eyebrow">Resources</p>
        <h1>Downloadable Files</h1>
        <p class="subtitle">
          Quick access to resume files and downloadable portfolio resources.
        </p>
      </header>

      <div class="resources-grid">
        <article class="resource-card">
          <div class="resource-preview">
            <img :src="latestResume.thumbnail" alt="Resume preview" />
          </div>

          <div class="resource-head">
            <span class="resource-type-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5ZM7 20V4h5v4a1 1 0 0 0 1 1h4v11H7Zm2-8h6v1.5H9V12Zm0 3h6v1.5H9V15Z"/></svg>
            </span>
            <span class="resource-tag">Free</span>
          </div>

          <div class="resource-info">
            <h2>{{ latestResume.title }}</h2>
            <p class="resource-subtitle">{{ latestResume.subTitle }}</p>
            <p class="resource-label">Date</p>
            <p class="resource-date">{{ latestResume.date }}</p>
          </div>

          <div class="resource-actions">
            <a
              class="resource-btn preview"
              :href="latestResume.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Preview
            </a>
            <a
              class="resource-btn download"
              :href="latestResume.href"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              Download
            </a>
          </div>
        </article>

        <article class="resource-card">
          <div class="resource-preview">
            <img src="/resources/brandstyle_thumbnail_sorianokenny.png" alt="Brand Style Guide preview" />
          </div>

          <div class="resource-head">
            <span class="resource-type-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-4-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
            </span>
            <span class="resource-tag">Free</span>
          </div>

          <div class="resource-info">
            <h2>Brand Style Guide</h2>
            <p class="resource-subtitle">Brandstyle Template Example</p>
            <p class="resource-label">Date</p>
            <p class="resource-date">August 26, 2026</p>
          </div>

          <div class="resource-actions">
            <a
              class="resource-btn preview"
              href="/resources/free_template_brandstyle_guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Preview
            </a>
            <a
              class="resource-btn download"
              href="/resources/free_template_brandstyle_guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              Download
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/views/resources.css"></style>
