<script setup>
const brandingWorks = [
  "/images/brandstyling/Dump-Cat.png",
  "/images/brandstyling/HomeHive.png"
]
</script>

<template>
<section class="branding">
  <h3 class="sub-title">Layout & Styling</h3>
  <div class="branding-grid">
    <div
      v-for="(img, i) in brandingWorks"
      :key="i"
      class="branding-card fade-card"
      :style="{ animationDelay: `${i * 0.05}s` }"
    >
      <img :src="img" alt="Brand styling work" />
    </div>
  </div>
</section>
</template>

<style>
.branding {
  padding: 3rem 2.5rem;

}

.sub-title {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #445d48;

}

.branding-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.branding-card {
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.05);
  width: 60%;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.branding-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.16);
}

.branding-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-card {
  opacity: 0;
  animation: fadeCard 0.6s ease forwards;
}

@keyframes fadeCard {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .branding-grid {
    grid-template-columns: 1fr;
  }

  .branding-card {
    width: 100%;
  }
}
</style>
