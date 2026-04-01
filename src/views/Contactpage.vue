<template>
  <section class="contact-page">
    <div class="contact-shell">
      <header class="contact-hero">
        <p class="eyebrow">Contact</p>
        <h1>Let's connect.</h1>
        <p class="subtitle">
          I am Kenny Soriano, a Computer Science student focused on frontend development,
          UI/UX, and building practical web experiences.
        </p>
      </header>

      <div class="contact-grid">
        <article class="contact-card info-card reveal-1">
          <h2>Reach me directly</h2>
          <p>
            I am open to freelance projects, internships, and full-time opportunities.
          </p>

          <div class="info-list">
            <a class="email" href="mailto:devkennysoriano@gmail.com">
              <span class="link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.25-7.37 5.26a1.1 1.1 0 0 1-1.26 0L4 7.25V6h16v1.25Z"/>
                </svg>
              </span>
              <span class="link-text">
                <span class="label">Email</span>
                <span class="value">devkennysoriano@gmail.com</span>
              </span>
            </a>
            <a class="facebook" href="https://www.facebook.com/soriano.kenny" target="_blank" rel="noopener noreferrer">
              <span class="link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08V12.1h3.05V9.42c0-3.02 1.8-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.28h3.35l-.54 3.47h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/>
                </svg>
              </span>
              <span class="link-text">
                <span class="label">Facebook</span>
                <span class="value">facebook.com/soriano.kenny</span>
              </span>
            </a>
            <a class="linkedin" href="https://www.linkedin.com/in/kennysoriano/" target="_blank" rel="noopener noreferrer">
              <span class="link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.64-1.84 3.36-1.84 3.58 0 4.24 2.35 4.24 5.42v6.31ZM5.35 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.57V9h3.55v11.45Z"/>
                </svg>
              </span>
              <span class="link-text">
                <span class="label">LinkedIn</span>
                <span class="value">linkedin.com/in/kennysoriano</span>
              </span>
            </a>
            <a class="github" href="https://github.com/DevKennySoriano" target="_blank" rel="noopener noreferrer">
              <span class="link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
              </span>
              <span class="link-text">
                <span class="label">GitHub</span>
                <span class="value">github.com/DevKennySoriano</span>
              </span>
            </a>
          </div>
        </article>

        <article class="contact-card details-card reveal-2">
          <h2>About me</h2>
          <p>
            Currently doing OJT at Wizzard Technologies INC. and actively improving my
            skills in Vue, JavaScript, and responsive interface design.
          </p>

          <div class="details-list">
            <div>
              <span class="label">Location</span>
              <span class="value">Philippines</span>
            </div>
            <div>
              <span class="label">Education</span>
              <span class="value">BS Computer Science - STI College</span>
            </div>
            <div>
              <span class="label">Availability</span>
              <span class="value">Open for internships and freelance projects</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=DM+Sans:wght@400;500;700&display=swap');

.contact-page {
  --bg-card: color-mix(in srgb, var(--bg-elevated) 80%, transparent);
  --text-main: var(--text);
  --text-soft: var(--text-muted);
  --line: var(--border);
  --accent: #1e7f5f;
  --accent-strong: #0f5a42;

  position: relative;
  min-height: calc(100vh - 140px);
  padding: clamp(2rem, 4vw, 4.5rem) 1.2rem;
  color: var(--text-main);
}

.contact-shell {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-hero {
  margin-bottom: 1.8rem;
  animation: rise 0.7s ease both;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(30, 127, 95, 0.12);
  color: var(--accent-strong);
  font: 700 0.78rem/1 'Space Grotesk', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-hero h1 {
  margin: 0.9rem 0 0;
  max-width: 18ch;
  font: 700 clamp(1.9rem, 5.2vw, 3.5rem) / 1.05 'Space Grotesk', sans-serif;
  letter-spacing: -0.03em;
}

.subtitle {
  margin: 1rem 0 0;
  max-width: 58ch;
  color: var(--text-soft);
  font: 500 1.03rem/1.6 'DM Sans', sans-serif;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-card {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 30px rgba(10, 51, 37, 0.08);
}

.info-card {
  padding: 1.6rem;
}

.info-card h2,
.details-card h2 {
  margin: 0 0 0.6rem;
  font: 700 1.35rem/1.2 'Space Grotesk', sans-serif;
}

.info-card p {
  margin: 0;
  color: var(--text-soft);
  font: 500 0.96rem/1.6 'DM Sans', sans-serif;
}

.info-list {
  margin-top: 1.3rem;
  display: grid;
  gap: 0.65rem;
}

.info-list a {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  color: inherit;
  text-decoration: none;
  background: color-mix(in srgb, var(--bg-elevated) 68%, transparent);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.link-icon {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--bg-elevated) 88%, var(--bg-soft));
  color: var(--surface-strong);
  flex-shrink: 0;
}

.link-icon svg {
  width: 17px;
  height: 17px;
  fill: currentColor;
}

.link-text {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.info-list a:hover {
  border-color: rgba(30, 127, 95, 0.45);
  transform: translateY(-2px);
}

.info-list a.email .link-icon {
  color: #db4437;
  background: rgba(219, 68, 55, 0.12);
}

.info-list a.facebook .link-icon {
  color: #1877f2;
  background: rgba(24, 119, 242, 0.12);
}

.info-list a.linkedin .link-icon {
  color: #0a66c2;
  background: rgba(10, 102, 194, 0.12);
}

.info-list a.github .link-icon {
  color: #111827;
  background: rgba(17, 24, 39, 0.12);
}

:root[data-theme='dark'] .info-list a.github .link-icon {
  color: #f8fafc;
  background: rgba(248, 250, 252, 0.12);
}

.info-list a.email:hover {
  border-color: rgba(219, 68, 55, 0.45);
}

.info-list a.facebook:hover {
  border-color: rgba(24, 119, 242, 0.45);
}

.info-list a.linkedin:hover {
  border-color: rgba(10, 102, 194, 0.45);
}

.info-list a.github:hover {
  border-color: rgba(17, 24, 39, 0.45);
}

.label {
  color: var(--text-soft);
  font: 600 0.76rem/1.4 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.value {
  font: 600 0.95rem/1.4 'DM Sans', sans-serif;
}

.details-card {
  padding: 1.6rem;
  display: grid;
  gap: 0.85rem;
}

.details-card p {
  margin: 0;
  color: var(--text-soft);
  font: 500 0.96rem/1.7 'DM Sans', sans-serif;
}

.details-list {
  display: grid;
  gap: 0.65rem;
  margin-top: 0.5rem;
}

.details-list div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.85rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg-elevated) 68%, transparent);
}

.reveal-1 {
  animation: rise 0.7s ease 0.12s both;
}

.reveal-2 {
  animation: rise 0.7s ease 0.24s both;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 880px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .contact-page {
    padding-inline: 0.85rem;
  }

  .contact-card {
    border-radius: 18px;
  }

  .details-card,
  .info-card {
    padding: 1.1rem;
  }

  .link-icon {
    width: 30px;
    height: 30px;
  }

  .value {
    font-size: 0.87rem;
    word-break: break-word;
  }
}
</style>
