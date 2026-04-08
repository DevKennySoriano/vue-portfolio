<script setup>
</script>

<template>
  <section class="collab" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
    <h2 class="title">Curious what I've been building?</h2>
    <p class="text">
      Explore a curated selection of projects that reflect my design sense,
      technical growth, and attention to detail.
    </p>
    <router-link to="/projects" class="cta">Explore projects</router-link>
  </section>
</template>

<style scoped>
.collab {
  max-width: 900px;
  margin: 6rem auto 5rem;
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
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
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
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.cta:hover {
  background: var(--surface-strong);
  color: var(--text-inverse);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

@media (max-width: 768px) {
  .collab {
    margin: 4rem auto 3.5rem;
    padding: 0;
  }

  .title {
    font-size: 1.9rem;
  }
}

@media (max-width: 560px) {
  .collab {
    margin: 3.5rem auto 3rem;
  }

  .text {
    font-size: 0.95rem;
  }
}
</style>
