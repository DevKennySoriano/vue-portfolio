<template>
  <nav class="navbar-wrapper">
    <div class="navbar">
      <router-link to="/" class="logo" aria-label="Go to home">
        <img src="/images/icons/K.png" alt="Ken" class="logo-img" />
      </router-link>

      <ul class="nav-links">
        <li>
          <router-link to="/">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3l10 9h-3v9h-6v-6h-2v6H5v-9H2z"/>
              </svg>
            </span>
            <span class="text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 6h12v2H3V9zm0 6h18v2H3v-2zm0 6h12v2H3v-2z"/>
              </svg>
            </span>
            <span class="text">Projects</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8V7l-3 2-2-2-3 2V7H6v10h12V8z"/>
              </svg>
            </span>
            <span class="text">Contact</span>
          </router-link>
        </li>
        <li>
          <button class="theme-toggle" @click="toggleTheme" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`">
            <span class="icon" aria-hidden="true">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.76 4.84 5.34 3.42l-1.4 1.4 1.42 1.42 1.4-1.4zm10.5 0 1.42-1.42 1.4 1.4-1.42 1.42-1.4-1.4zM12 5a1 1 0 0 0 1-1V2h-2v2a1 1 0 0 0 1 1zm7 8a1 1 0 0 0 1-1h2v-2h-2a1 1 0 0 0-1 1v2zM4 11a1 1 0 0 0-1-1H1v2h2a1 1 0 0 0 1-1zm1.34 9.58 1.42-1.42-1.4-1.4-1.42 1.42 1.4 1.4zm13.32 0 1.4-1.4-1.42-1.42-1.4 1.4 1.42 1.42zM12 19a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.75 15.5A9 9 0 0 1 11.5 2.25 9 9 0 1 0 21.75 15.5z"/>
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <button class="theme-fab" @click="toggleTheme" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`">
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.76 4.84 5.34 3.42l-1.4 1.4 1.42 1.42 1.4-1.4zm10.5 0 1.42-1.42 1.4 1.4-1.42 1.42-1.4-1.4zM12 5a1 1 0 0 0 1-1V2h-2v2a1 1 0 0 0 1 1zm7 8a1 1 0 0 0 1-1h2v-2h-2a1 1 0 0 0-1 1v2zM4 11a1 1 0 0 0-1-1H1v2h2a1 1 0 0 0 1-1zm1.34 9.58 1.42-1.42-1.4-1.4-1.42 1.42 1.4 1.4zm13.32 0 1.4-1.4-1.42-1.42-1.4 1.4 1.42 1.42zM12 19a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.75 15.5A9 9 0 0 1 11.5 2.25 9 9 0 1 0 21.75 15.5z"/>
    </svg>
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('portfolio-theme', theme)
  isDark.value = theme === 'dark'
}

const toggleTheme = () => {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const storedTheme = localStorage.getItem('portfolio-theme')
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(storedTheme || (preferredDark ? 'dark' : 'light'))
})
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 15px 36px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--surface-strong), var(--surface-strong-2));
  border: 1px solid color-mix(in srgb, var(--text-inverse) 30%, transparent);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.55),
              inset 0 1px 0 color-mix(in srgb, var(--text-inverse) 20%, transparent);
  backdrop-filter: blur(14px);
  font-family: "Inter", sans-serif;
}
.nav-links a.router-link-exact-active {
  color: #e5ffed;
}

.nav-links a.router-link-exact-active::before {
  content: "";
  position: absolute;
  inset: -6px -12px;
  border-radius: 999px;
  background: rgba(229, 255, 237, 0.15);
  box-shadow:
    inset 0 0 0 1px rgba(229, 255, 237, 0.25),
    0 6px 18px rgba(0, 0, 0, 0.35);
  z-index: -1;
}
@media (max-width: 1024px) {
  .nav-links a.router-link-exact-active::before {
    inset: -8px;
    border-radius: 16px;
  }
}


.logo {
  font-size: 20px;
  font-weight: 800;
  color: var(--text-inverse);
  letter-spacing: 0.4px;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: flex;
}

.nav-links a {
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--text-inverse);
  transition: color 0.3s ease, transform 0.3s ease;
}

.theme-toggle {
  display: none;
  border: 0;
  background: transparent;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  position: relative;
  color: var(--text-inverse);
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
}

.theme-toggle:hover {
  color: #e5ffed;
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background-color: #e5ffed;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #e5ffed;
  transform: translateY(-2px) scale(1.05);
}

.nav-links a:hover::after {
  width: 100%;
}

.theme-toggle::after {
  display: none;
}

.icon {
  display: none;
  align-items: center;
  justify-content: center;
}

.theme-toggle .icon {
  display: flex;
  margin-bottom: 0;
}

.theme-fab {
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-inverse);
  background: linear-gradient(180deg, var(--surface-strong), var(--surface-strong-2));
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  z-index: 1100;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.theme-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.4);
}

.logo {
  display: flex;
  align-items: center;
}

/* Base logo sizing */
.logo-img {
  height: 36px;          /* desktop size */
  width: auto;           /* keep aspect ratio */
  max-width: 100%;
  object-fit: contain;
  transition: height 0.3s ease, transform 0.3s ease;
}

/* Optional hover micro-interaction */
.logo:hover .logo-img {
  transform: scale(1.05);
}

/* Tablets */
@media (max-width: 1024px) {
  .logo-img {
    height: 30px;
  }
}

/* Phones */
@media (max-width: 768px) {
  .logo-img {
    height: 26px;
  }
}

/* Very small phones */
@media (max-width: 480px) {
  .logo-img {
    height: 22px;
  }
}


@media (max-width: 1024px) {
  .navbar-wrapper {
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
  }

  .navbar {
    border-radius: 0;
    justify-content: space-around;
    padding: 10px 0;
    gap: 0;
    box-shadow: 0 -10px 25px rgba(0,0,0,0.5);
  }

  .nav-links {
    gap: 0;
    flex: 1;
    justify-content: space-around;
  }

  .nav-links a {
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
  }

  .theme-toggle {
    display: flex;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .theme-fab {
    display: none;
  }

  .icon {
    display: flex;
    margin-bottom: 4px;
  }

  .nav-links a::after {
    display: none;
  }

  .theme-toggle::after {
    display: none;
  }
}
</style>
