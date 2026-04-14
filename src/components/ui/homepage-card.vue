<script setup>
import { useHomepageCards } from '@/composables/useHomepageCards'

const cards = useHomepageCards()
</script>
<template>
<section class="card-wrapper">
  <div class="card-row">
    <div
      v-for="(card, i) in cards"
      :key="card.title"
            class="info-card"
      data-aos="fade-up"
      data-aos-once="true"
      :data-aos-delay="i * 200"
    >
      <span class="label">{{ card.title }}</span>
      <p>{{ card.content }}</p>
    </div>
  </div>
</section>
</template>

<style scoped src="@/css/home/homepage-card.css"></style>
