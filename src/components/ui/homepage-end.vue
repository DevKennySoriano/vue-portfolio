<script setup>
</script>

<template>
<div class="collab" data-aos="fade-up" data-aos-duration="900">
<h2 class="title">Curious what I’ve been working on?</h2>
<p class="text">
 Explore a curated selection of my projects, showcasing my skills,
  creativity, and attention to detail.
</p>
<router-link to="/projects" class="cta">View projects</router-link>

</div>
</template>

<style scoped>
.collab {
  max-width: 900px;
  margin: 5rem auto 4rem;
  padding: 0 2rem;
  text-align: center;
  color: var(--text);
}

.title {
  font-size: 2.3rem;
  margin-bottom: 1rem;
}

.text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.cta {
  display: inline-block;
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

@media (max-width: 768px) {
  .collab {
    margin-top: 3rem;
    padding: 0 1rem;
  }

  .title {
    font-size: 1.9rem;
  }
}
</style>
