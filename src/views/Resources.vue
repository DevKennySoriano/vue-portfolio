<script setup>
const latestResume = {
  title: 'Resume',
  subTitle: 'ATS Resume',
  date: 'July 11, 2026',
  href: '/resume/Kenny_Soriano_Resume_07112026_A4.pdf',
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
        <article class="resource-card resume-card">
          <div class="resource-head">
            <span class="resource-type-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5ZM7 20V4h5v4a1 1 0 0 0 1 1h4v11H7Zm2-8h6v1.5H9V12Zm0 3h6v1.5H9V15Z" />
              </svg>
            </span>
            <span class="resource-tag">Free</span>
          </div>

          <div class="resource-info">
            <h2>{{ latestResume.title }}</h2>

            <p class="resource-subtitle">{{ latestResume.subTitle }}</p>

            <p class="resource-label">Date</p>
            <p class="resource-date">{{ latestResume.date }}</p>
          </div>

          <a
            class="resource-download"
            :href="latestResume.href"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span class="resource-download-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.29 1.4 1.4-4.7 4.7-4.7-4.7 1.4-1.4 2.3 2.29V4a1 1 0 0 1 1-1ZM5 18h14v2H5v-2Z" />
              </svg>
            </span>
            Download Resume
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/views/resources.css"></style>
