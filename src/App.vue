<script setup>
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="page">
    <Navbar v-if="!route.meta.hideLayout" />

    <main :class="['content', { 'content--flush-top': route.meta.flushTop }]">
      <router-view />
    </main>

    <Footer v-if="!route.meta.hideLayout && !route.meta.hideFooter" />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  height: 100%;
}

:root {
  --bg: #f4f7f5;
  --bg-elevated: #ffffff;
  --bg-soft: #e9f1ec;
  --surface-strong: #445d48;
  --surface-strong-2: #2a3e32;
  --text: #1f2937;
  --text-muted: #4b5563;
  --text-inverse: #f8fafc;
  --border: rgba(26, 44, 34, 0.14);
  --shadow: 0 18px 36px rgba(11, 31, 22, 0.12);
}

:root[data-theme='dark'] {
  --bg: #0f1714;
  --bg-elevated: #16221d;
  --bg-soft: #1b2b24;
  --surface-strong: #1e3a31;
  --surface-strong-2: #12261f;
  --text: #e5ece8;
  --text-muted: #b4c2bc;
  --text-inverse: #f8fafc;
  --border: rgba(229, 236, 232, 0.16);
  --shadow: 0 22px 42px rgba(0, 0, 0, 0.38);
}

body {
  font-family: "Inter", sans-serif;
  color: var(--text);
  background-color: var(--bg);
  background-image:
    linear-gradient(color-mix(in srgb, var(--border) 72%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--border) 72%, transparent) 1px, transparent 1px);
  background-size: 24px 24px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding-top: 104px;
}

.content--flush-top {
  padding-top: 0;
}

@media (max-width: 1024px) {
  .content {
    padding-top: 1rem;
    padding-bottom: 86px;
  }

  .content--flush-top {
    padding-top: 0;
  }
}
</style>
