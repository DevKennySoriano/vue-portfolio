<script setup>
import { useHomepageAbout } from '@/composables/useHomepageAbout'

const {
        status,
        name,
        profileImg,
        description,
        tags,
} = useHomepageAbout()
</script>
<template>
<section class="about">
  <div
    class="about-left"
    data-aos="fade-right"
    data-aos-once="true"
  >
<span
  class="status"
  data-aos="fade-up"
  data-aos-once="true"
        data-aos-delay="120"
>
  {{ status }}
</span>


    <h2
      class="name"
      data-aos="fade-up"
      data-aos-once="true"
                data-aos-delay="220"
    >
      {{ name }}
    </h2>

    <p
      class="description"
      data-aos="fade-up"
      data-aos-once="true"
                data-aos-delay="320"
    >
      {{ description }}
    </p>

        <div
                class="buttons"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="420"
        >
                <router-link to="/projects" class="btn primary routerProjects">
                        View Projects
                </router-link>
                <a href="/resume/Kenny_Soriano_Resume_04252026.pdf" class="btn outline routerProjects secondary-link" download>
                  Download Resume
                </a>
        </div>
  </div>

  <div
    class="about-right"
    data-aos="fade-left"
    data-aos-once="true"
  >
    <div
      class="profile-cube"
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-delay="200"
    >
      <img :src="profileImg" alt="Profile picture" />
    </div>

    <div class="tags">
      <span
        v-for="(tag, i) in tags"
        :key="tag"
        class="tag"
        data-aos="zoom-in"
        data-aos-once="true"
        :data-aos-delay="i * 100 + 300"
      >
        {{ tag }}
      </span>
    </div>
  </div>

</section>
</template>

<style scoped src="@/css/home/homepage-about.css"></style>
