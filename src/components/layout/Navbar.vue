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
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped src="@/css/layout/navbar.css"></style>
