<template>
  <!-- Desktop Navbar -->
  <nav class="navbar-wrapper navbar-desktop">
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
          <router-link to="/testimonials">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 5h14v10H8l-3 3V5Zm3.3 3.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm4 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm4 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"/>
              </svg>
            </span>
            <span class="text">Testimonials</span>
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

  <!-- Mobile Navbar Top Bar -->
  <nav class="navbar-mobile-top">
    <div class="mobile-header">
      <router-link to="/" class="mobile-logo" aria-label="Go to home">
        <img src="/images/icons/K.png" alt="Ken" class="logo-img" />
      </router-link>
      <button class="mobile-theme-toggle" @click="toggleTheme" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`">
        <span class="icon" aria-hidden="true">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2.3M12 19.7V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.3M19.7 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </span>
      </button>
    </div>
  </nav>

  <nav class="navbar-mobile-bottom">
    <!-- Mobile Menu Items -->
    <ul class="mobile-nav-links">
      <li>
        <router-link to="/">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9.5V20h14V9.5" />
              <path d="M9.5 20v-5h5v5" />
            </svg>
          </span>
          <span class="text">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/projects">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3.5" y="4" width="17" height="5.5" rx="1.5" />
              <rect x="3.5" y="14.5" width="10.5" height="5.5" rx="1.5" />
              <path d="M17.5 15.5h3" />
              <path d="M17.5 18.5h3" />
            </svg>
          </span>
          <span class="text">Projects</span>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 8l8.2 6a1.3 1.3 0 0 0 1.6 0L21 8" />
            </svg>
          </span>
          <span class="text">Contact</span>
        </router-link>
      </li>
      <li>
        <router-link to="/testimonials">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 6h14v9H8l-3 3V6z" />
              <path d="M8.5 9.8h.01M12 9.8h.01M15.5 9.8h.01" />
            </svg>
          </span>
          <span class="text">Testimonials</span>
        </router-link>
      </li>
    </ul>
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
  // Default to light theme
  applyTheme(storedTheme || 'light')
})
</script>

<style scoped>
/* Desktop Navbar */
.navbar-desktop {
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
  display: flex;
  align-items: center;
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

/* Base logo sizing */
.logo-img {
  height: 36px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  transition: height 0.3s ease, transform 0.3s ease;
}

/* Optional hover micro-interaction */
.logo:hover .logo-img {
  transform: scale(1.05);
}

/* Mobile Navbar */
.navbar-mobile-top {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(180deg, var(--surface-strong), var(--surface-strong-2));
  border-bottom: 1px solid color-mix(in srgb, var(--text-inverse) 30%, transparent);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  font-family: "Inter", sans-serif;
}

.navbar-mobile-bottom {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  background: linear-gradient(180deg, var(--surface-strong), var(--surface-strong-2));
  border-top: 1px solid color-mix(in srgb, var(--text-inverse) 20%, transparent);
  box-shadow: 0 -10px 24px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(14px);
  font-family: "Inter", sans-serif;
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 16px 8px;
  min-height: 52px;
}

.mobile-theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--text-inverse) 24%, transparent);
  border-radius: 999px;
  background: transparent;
  color: var(--text-inverse);
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.mobile-theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.12);
  color: #e5ffed;
}

.mobile-theme-toggle:active {
  transform: translateY(-50%) scale(0.96);
}

.mobile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
}

.mobile-logo .logo-img {
  height: 32px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.mobile-logo:hover .logo-img {
  transform: scale(1.05);
}

/* Mobile Menu */
.mobile-nav-links {
  display: flex;
  list-style: none;
  padding: 8px 10px 12px;
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: transparent;
}

.mobile-nav-links li {
  display: flex;
  flex: 1;
}

.mobile-nav-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-direction: column;
  width: 100%;
  min-height: 58px;
  padding: 8px 6px;
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--text-inverse) 22%, transparent);
  border-radius: 14px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  color: var(--text-inverse);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.mobile-nav-links a.router-link-exact-active {
  background: rgba(229, 255, 237, 0.14);
  border-color: rgba(229, 255, 237, 0.45);
  color: #e5ffed;
}

.mobile-nav-links a:hover,
.mobile-nav-links a:focus-visible,
.mobile-theme-toggle:focus-visible {
  background-color: rgba(255, 255, 255, 0.1);
  color: #e5ffed;
}

.mobile-nav-links .icon,
.mobile-theme-toggle .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav-links .icon svg,
.mobile-theme-toggle .icon svg {
  width: 20px;
  height: 20px;
}

.mobile-nav-links .text {
  font-size: 11px;
  letter-spacing: 0.01em;
}

/* Tablets */
@media (max-width: 1024px) {
  .navbar-desktop {
    display: none;
  }

  .theme-fab {
    display: none;
  }

  .navbar-mobile-top {
    display: flex;
    flex-direction: column;
  }

  .navbar-mobile-bottom {
    display: block;
  }
}

/* Phones */
@media (max-width: 768px) {
  .mobile-logo .logo-img {
    height: 28px;
  }
  
  .mobile-nav-links a {
    min-height: 56px;
    padding: 7px 6px;
    font-size: 11px;
  }
}

/* Very small phones */
@media (max-width: 480px) {
  .mobile-logo .logo-img {
    height: 24px;
  }

  .mobile-header {
    min-height: 46px;
    padding: 8px 10px 6px;
  }

  .mobile-nav-links a {
    min-height: 54px;
    padding: 6px 5px;
    font-size: 11px;
  }
}

/* Desktop: hide mobile elements, show desktop navbar */
@media (min-width: 1025px) {
  .navbar-mobile-top {
    display: none !important;
  }

  .navbar-mobile-bottom {
    display: none !important;
  }

  .navbar-desktop {
    display: block;
  }

  .theme-fab {
    display: inline-flex;
  }
}
</style>
