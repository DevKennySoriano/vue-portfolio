<template>
  <main class="testimonials-page">
    <section class="testimonials-hero" data-aos="fade-up" data-aos-once="true">
      <p class="eyebrow">Testimonials</p>
      <h1>What People Say</h1>
      <p class="intro">
        This page will show feedback from mentors, teachers, and teammates.
      </p>
    </section>

    <section class="empty-state" data-aos="fade-up" data-aos-once="true" aria-label="Testimonials under development">
      <p class="empty-title">This section is still in progress.</p>
      <p class="empty-description">I will add testimonials here soon.</p>
    </section>
  </main>
</template>

<style scoped>
.testimonials-page {
  max-width: 1080px;
  margin: 120px auto 90px;
  padding: 0 1rem;
}

.testimonials-hero {
  margin: 0 auto 2rem;
  max-width: 760px;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 0.5rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-inverse);
  background: var(--surface-strong);
}

h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3.7vw, 2.7rem);
  color: var(--text);
}

.intro {
  margin: 1rem auto 0;
  max-width: 680px;
  color: var(--text-muted);
  line-height: 1.75;
  font-size: 1rem;
}

.empty-state {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.2rem;
  background: color-mix(in srgb, var(--bg-elevated) 90%, var(--bg-soft));
  box-shadow: var(--shadow);
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.empty-title {
  margin: 0;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
}

.empty-description {
  margin: 0.55rem 0 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .testimonials-page {
    margin: 95px auto 80px;
    padding: 0 0.8rem;
  }

  .testimonials-hero {
    margin-bottom: 1.25rem;
  }

  .intro {
    font-size: 0.95rem;
  }

  .empty-state {
    padding: 1rem;
  }
}
</style>
