<script setup>
const status = "Currently OJT at Wizzard Technologies INC."
const name = "Kenny Soriano"
const profileImg = "/images/ken/about-img.jpeg"
const description =
    "Pogi lang."

const tags = ["he/him","STI College"]
</script>
<template>
<section class="about">
  <div
    class="about-left"
    data-aos="fade-right"
  >
    <span
      class="status"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {{ status }}
    </span>

    <h2
      class="name"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {{ name }}
    </h2>

    <p
      class="description"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {{ description }}
    </p>

    <div
      class="buttons"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <button class="btn primary">
        <router-link to="/projects" class="routerProjects">
          View Projects
        </router-link>
      </button>
      <button class="btn outline">
        Download Resume
      </button>
    </div>
  </div>

  <div
    class="about-right"
    data-aos="fade-left"
  >
    <div
      class="profile-cube"
      data-aos="zoom-in"
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
        :data-aos-delay="i * 100 + 300"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</section>
</template>


<style scoped>

.about {
        display: flex;
        gap: 1rem;
        padding: 2.5rem;
        margin: 120px auto;   
        max-width: 1000px;    
        align-items: center;  
}

.about-left {
        flex: 1;
}

.status {
        display: inline-block;
        margin-bottom: 1rem;
        padding: 0.4rem 1rem;
        font-size: 1.1rem;
        background: #445d48;
        border-radius: 999px;
        color: #FAFAFA;
        transition: all 0.3s ease;
}

.status:hover {
        background: #556d58;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(68, 93, 72, 0.3);
}

.name {
        font-size: 3.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
}

.description {
        max-width: 500px;
        font-size: 1.25rem;
        line-height: 1.8;
        opacity: 0.9;
        margin-bottom: 2rem;
}

.buttons {
        display: flex;
        gap: 1.2rem;
}

.btn {
        padding: 0.8rem 1.8rem;
        font-size: 1.1rem;
        border-radius: 8px;
        font-family: inherit;
        cursor: pointer;
         transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
.routerProjects{
        text-decoration: none;
        color:white;
}

.primary {
        background: #445d48;
        color: #FAFAFA;
        border: none;
}

.outline {
        background: transparent;
        color: #262626;
        border: 1px solid #445d48;
}

.about-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
}

.profile-cube {
        width: 280px;
        height: 280px;
        border-radius: 14px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.2);
        margin-bottom: 1.5rem;
        border: 2px solid #445d48;
}

.profile-cube img {
        width: 100%;
        height: 100%;
        object-fit: cover;
}

.tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        justify-content: center;
}

.tag {
        font-size: 0.95rem;
        padding: 0.4rem 0.85rem;
        border-radius: 999px;
        background: #445d48;
        color: #FAFAFA;
        transition: all 0.3s ease;
        cursor: pointer;
}

.tag:hover {
        background: #556d58;
        transform: translateY(-px);
        box-shadow: 0 4px 12px rgba(68, 93, 72, 0.3);
}

</style>
