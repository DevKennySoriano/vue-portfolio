<script setup>
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import { useAppLoader } from '@/composables/useAppLoader'
import { useVisitorCounter } from '@/composables/useVisitorCounter'
import { useSound } from '@/composables/useSound'
import { useToast } from '@/composables/useToast'

const route = useRoute()
const { isLoading } = useAppLoader()
useVisitorCounter()
useSound()

const { toasts } = useToast()
</script>

<template>
  <transition name="preloader-fade">
    <div v-if="isLoading" class="preloader" aria-label="Loading page" role="status">
      <div class="preloader-box">
        <img src="/images/icons/K.png" alt="" class="preloader-logo" />
        <p class="preloader-text">Loading...</p>
      </div>
    </div>
  </transition>

  <div class="page" :class="{ 'page--with-layout': !route.meta.hideLayout }">
    <Navbar v-if="!route.meta.hideLayout" />

    <div class="page-main">
      <main :class="['content', { 'content--flush-top': route.meta.flushTop }]">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>

  <div class="toast-container" aria-live="polite">
    <transition-group name="toast-slide">
      <div
        v-for="t in toasts"
        :key="t.id"
        :class="['toast', `toast--${t.type}`]"
      >
        <svg v-if="t.type === 'success'" class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        <svg v-else-if="t.type === 'error'" class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
        <svg v-else class="toast-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
        <span class="toast-message">{{ t.message }}</span>
      </div>
    </transition-group>
  </div>
</template>

<style src="@/css/app.css"></style>
