<script setup>
import ContactpageEnd from '@/components/ui/contactpage-end.vue'
</script>

<template>
  <section class="contact-page">
    <div class="contact-shell">
      <header class="contact-hero">
        <p class="eyebrow">Contact</p>
        <h1>Let's connect.</h1>
        <p class="subtitle">
          Open to internships, freelance projects, and full-time opportunities.
        </p>
      </header>

      <div class="contact-grid">
        <a class="contact-link" href="mailto:devkennysoriano@gmail.com">
          <span class="contact-icon email-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">Email</span>
            <span class="contact-value">devkennysoriano@gmail.com</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>

        <a class="contact-link" href="https://www.facebook.com/soriano.kenny" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon facebook-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08V12.1h3.05V9.42c0-3.02 1.8-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.28h3.35l-.54 3.47h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">Facebook</span>
            <span class="contact-value">soriano.kenny</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>

        <a class="contact-link" href="https://www.linkedin.com/in/kennysoriano/" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon linkedin-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.64-1.84 3.36-1.84 3.58 0 4.24 2.35 4.24 5.42v6.31ZM5.35 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.57V9h3.55v11.45Z"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">kennysoriano</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>

        <a class="contact-link" href="https://github.com/DevKennySoriano" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon github-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">GitHub</span>
            <span class="contact-value">DevKennySoriano</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>

      <ContactpageEnd />
    </div>
  </section>
</template>

<style scoped src="@/css/views/contactpage.css"></style>
