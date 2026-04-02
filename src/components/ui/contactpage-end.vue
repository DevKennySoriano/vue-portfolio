<script setup>
</script>

<template>
  <section class="collab" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
    <h2 class="title">Want to hear what people say?</h2>
    <p class="text">
      Check out testimonials from mentors, teachers, and teammates to see how I work and collaborate.
    </p>
    <router-link to="/testimonials" class="cta">View testimonials</router-link>
  </section>
</template>

<style scoped>
.collab {
  max-width: 900px;
  margin: 4.75rem auto 0;
  padding: 0 1rem;
  text-align: center;
  color: var(--text);
}

.title {
  margin: 0;
  font-size: clamp(1.55rem, 3.3vw, 2.35rem);
  line-height: 1.15;
}

.text {
  margin: 1rem auto 0;
  max-width: 60ch;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.cta {
  display: inline-block;
  margin-top: 1.75rem;
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  border: 2px solid var(--surface-strong);
  color: var(--surface-strong);
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.cta:hover {
  background: var(--surface-strong);
  color: var(--text-inverse);
  transform: translateY(-2px);
}

@media (max-width: 560px) {
  .collab {
    margin-top: 3.5rem;
    padding: 0;
  }

  .text {
    font-size: 0.95rem;
  }
}
</style>
