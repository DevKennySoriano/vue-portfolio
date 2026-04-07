<script setup>
</script>

<template>
<div class="collab" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
<span class="eyebrow">Selected Work</span>
<h2 class="title">Curious what I’ve been building?</h2>
<p class="text">
  Explore a curated selection of projects that reflect my design sense,
  technical growth, and attention to detail.
</p>
<router-link to="/projects" class="cta">Explore Projects</router-link>

</div>
</template>

<style scoped>
.collab {
  max-width: 900px;
  margin: 5rem auto 4rem;
  padding: 2.5rem 2rem;
  text-align: center;
  color: var(--text);
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, color-mix(in srgb, var(--bg-elevated) 96%, transparent), color-mix(in srgb, var(--bg-soft) 55%, transparent));
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--surface-strong);
}

.title {
  font-size: clamp(2rem, 4vw, 2.6rem);
  margin-bottom: 1rem;
}

.text {
  max-width: 680px;
  margin: 0 auto 2rem;
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.cta {
  display: inline-block;
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
    margin-top: 3rem;
    padding: 0 1rem;
    background: transparent;
    border: none;
    box-shadow: none;
  }

  .title {
    font-size: 1.9rem;
  }
}

@media (max-width: 375px) {
  .collab {
    padding: 0 0.5rem;
  }

  .title {
    font-size: 1.6rem;
  }
}
</style>
