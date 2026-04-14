<script setup>
import { useHomepageTechStack } from '@/composables/useHomepageTechStack'

const { techStacks } = useHomepageTechStack()
</script>
<template>
<section class="tech">
  <h2
    class="section-title"
    data-aos="fade-up"
    data-aos-once="true"
  >
    Tech Stack
  </h2>

  <div class="tech-grid">
    <div
      v-for="(stack, index) in techStacks"
      :key="stack.title"
      class="tech-card"
      data-aos="fade-up"
      data-aos-once="true"
      :data-aos-delay="index * 150"
    >
      <h3 class="tech-title">{{ stack.title }}</h3>

      <div class="icon-grid">
        <div
          v-for="(item, i) in stack.items"
          :key="item.name"
          class="icon-item"
          data-aos="fade-up"
          data-aos-once="true"
          :data-aos-delay="i * 80 + index * 150"
        >
          <div class="icon-box">
            <img :src="item.icon" :alt="item.name" />
          </div>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped src="@/css/home/homepage-techstack.css"></style>
