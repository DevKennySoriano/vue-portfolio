<script setup>
import { useHomepageTechStack } from '@/composables/useHomepageTechStack'

const { techStacks } = useHomepageTechStack()
</script>
<template>
  <section class="tools-page">
    <div class="tools-shell">
      <header class="tools-hero">
        <p class="eyebrow">Tools & Tech</p>
        <h1>Skills & Software</h1>
        <p class="subtitle">
          Technologies, frameworks, and tools used across development and design projects.
        </p>
      </header>

      <div class="tools-grid">
        <article
          v-for="(stack, index) in techStacks"
          :key="stack.title"
          class="tools-card"
        >
          <h2 class="tools-card-title">{{ stack.title }}</h2>
          <div class="tools-items">
            <div
              v-for="item in stack.items"
              :key="item.name"
              class="tool-item"
            >
              <div class="tool-icon">
                <img :src="item.icon" :alt="item.name" loading="lazy" />
              </div>
              <span class="tool-name">{{ item.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/home/homepage-techstack.css"></style>
