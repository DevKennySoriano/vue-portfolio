<template>
  <main class="not-found">
    <section class="not-found-hero" data-aos="fade-up" data-aos-once="true">
      <img class="not-found-logo" src="/images/icons/K-128.png" alt="Ken" />
      <p class="not-found-eyebrow">404</p>
      <h1 class="not-found-title">Page not found</h1>
      <p class="not-found-copy">
        The page you are looking for does not exist or was moved. Head back home or explore
        another section below.
      </p>
      <div class="not-found-actions">
        <button class="not-found-link back" type="button" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Go back
        </button>
        <router-link class="not-found-link primary" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Go home
        </router-link>
      </div>
      <nav class="not-found-links" aria-label="Popular pages">
        <router-link to="/projects/web">Web Projects</router-link>
        <router-link to="/certifications">Certifications</router-link>
        <router-link to="/tech-stack">Tools & Tech</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </section>
  </main>
</template>

<script setup>
function goBack() {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.href = '/'
  }
}
</script>

<style scoped src="@/css/views/not-found.css"></style>
