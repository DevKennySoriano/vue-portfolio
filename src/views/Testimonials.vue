<template>
  <main class="testimonials-page">
    <section class="testimonials-hero" data-aos="fade-up" data-aos-once="true">
      <p class="eyebrow">Testimonials</p>
      <h1>What People Say</h1>
      <p class="intro">
        This page will show feedback from mentors, teachers, and teammates.
      </p>
      <div class="submit-card">
        <div class="submit-copy">
          <p class="submit-label">Share Your Feedback</p>
          <p class="submit-text">
            This page is still in progress. Soon it will highlight feedback from people who know me and how I work.
          </p>
        </div>
        <a
          class="submit-link"
          href="https://forms.gle/dzBi7NQGjKAZ54Dj9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Submit here</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h12.17l-5.58-5.59L13 5l8 8-8 8-1.41-1.41L17.17 13H5v-1Z" />
          </svg>
        </a>
      </div>
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

.submit-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1rem;
  margin: 1.75rem auto 0;
  max-width: 720px;
  padding: 1rem 1.1rem;
  border: 1px solid var(--border);
  border-radius: 20px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--bg-elevated) 96%, transparent), color-mix(in srgb, var(--bg-soft) 58%, transparent));
  box-shadow: var(--shadow);
  text-align: left;
}

.submit-copy {
  flex: 1;
  min-width: 0;
}

.submit-label {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--surface-strong);
}

.submit-text {
  margin: 0.35rem 0 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.submit-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  flex-shrink: 0;
  white-space: nowrap;
  padding: 0.8rem 1.3rem;
  border-radius: 999px;
  border: 2px solid var(--surface-strong);
  color: var(--surface-strong);
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-link:hover {
  background: var(--surface-strong);
  color: var(--text-inverse);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.submit-link svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
  transition: transform 0.2s ease;
}

.submit-link:hover svg {
  transform: translateX(2px);
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

  .submit-card {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 1rem;
  }

  .submit-copy {
    text-align: center;
  }

  .submit-link {
    width: 100%;
  }
}
</style>
