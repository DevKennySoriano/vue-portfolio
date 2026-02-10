<script setup>
</script>

<template>
<div class="collab" data-aos="fade-up" data-aos-duration="900">
  <h2 class="title">Ready to collaborate?</h2>
  <p class="text">
    I’m open to internships, freelance work, and exciting projects.  
    Let’s build something meaningful together.
  </p>
  <a href="/contact" class="cta">Get in touch</a>
</div>
</template>

<style scoped>
.collab {
  max-width: 900px;
  margin: 5rem auto 4rem;
  padding: 0 2rem;
  text-align: center;
  color: #262626;
}

.title {
  font-size: 2.3rem;
  margin-bottom: 1rem;
}

.text {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 2rem;
}

.cta {
  display: inline-block;
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  border: 2px solid #445d48;
  color: #445d48;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.cta:hover {
  background: #445d48;
  color: #fafafa;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .title {
    font-size: 1.9rem;
  }
}
</style>
