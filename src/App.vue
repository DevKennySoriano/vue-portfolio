<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

</script>

<template>
  <div class="page">
    <Navbar />
    <main class="content">
      <Navbar/>
    </main>
    <Footer/>
  </div>
</template>

<style>

html, body, #app {
  margin: 0;
  height: 100%;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  background-image:
  linear-gradient(#e6e6e6 1px, transparent 1px),
  linear-gradient(90deg, #e6e6e6 1px, transparent 1px);
  background-size: 24px 24px;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1; 
}

</style>