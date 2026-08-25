<script setup>
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import { useAppLoader } from '@/composables/useAppLoader'

const route = useRoute()
const { isLoading } = useAppLoader()
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
        <router-view />
      </main>
    </div>
  </div>
</template>

<style src="@/css/app.css"></style>
