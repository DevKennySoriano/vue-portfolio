<template>
  <main class="not-found">
    <section class="not-found-hero" data-aos="fade-up" data-aos-once="true">
      <img class="not-found-logo" src="/images/icons/K.png" alt="Ken" />
      <p class="not-found-eyebrow">404</p>
      <h1 class="not-found-title">Page not found</h1>
      <p class="not-found-copy">
        The page you are looking for does not exist or was moved. Use the button below.
      </p>
      <div class="not-found-actions">
        <router-link class="not-found-link primary" to="/">Go home</router-link>
      </div>
    </section>
  </main>
</template>

<style scoped src="@/css/views/not-found.css"></style>
