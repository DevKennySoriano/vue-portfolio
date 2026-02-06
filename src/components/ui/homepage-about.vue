<script setup>
const status = "Currently OJT at Wizzard Technologies INC."
const name = "Kenny Soriano"
const profileImg = "https://imgs.search.brave.com/Jf3zTfPSqN0LdkdaMAKeC6u2OaELjtf3JQU5u2PslZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vOTk5ODQz/Mi8xMzMzNS92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzEzMzM1NDQ5/MC1zdG9jay1pbGx1/c3RyYXRpb24tZGVm/YXVsdC1wbGFjZWhv/bGRlci1wcm9maWxl/LWljb24uanBn"
const description =
  "Pogi lang."

const tags = ["he/him","student","STI College"]
</script>

<template>
<section class="about">
  <!-- LEFT -->
  <div class="about-left fade-left">
    <span class="status delay-1">{{ status }}</span>

    <h2 class="name delay-2">{{ name }}</h2>

    <p class="description delay-3">
      {{ description }}
    </p>

    <div class="buttons delay-4">
      <button class="btn primary">View Projects</button>
      <button class="btn outline">Download Resume</button>
    </div>
  </div>

  <!-- RIGHT -->
  <div class="about-right fade-right">
    <div class="profile-cube float">
      <img :src="profileImg" alt="Profile picture" />
    </div>

    <div class="tags">
      <span
        v-for="(tag, i) in tags"
        :key="tag"
        class="tag tag-animate"
        :style="{ animationDelay: `${i * 0.1}s` }"
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
    font-size: 0.95rem;
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
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.description {
    max-width: 500px;
    font-size: 1.1rem;
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
    font-size: 1rem;
    border-radius: 8px;
    font-family: inherit;
    cursor: pointer;
     transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
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
    width: 240px;
    height: 240px;
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
    font-size: 0.85rem;
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

.fade-left {
    animation: fadeLeft 0.9s ease forwards;
}

.fade-right {
    animation: fadeRight 0.9s ease forwards;
}

@keyframes fadeLeft {
    from {
        opacity: 0;
        transform: translateX(-40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeRight {
    from {
        opacity: 0;
        transform: translateX(40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.35s; }
.delay-3 { animation-delay: 0.5s; }
.delay-4 { animation-delay: 0.65s; }

.delay-1,
.delay-2,
.delay-3,
.delay-4 {
    opacity: 0;
    animation-name: fadeUp;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}.tag-animate {
    opacity: 0;
    animation: tagPop 0.4s ease forwards;
}

@keyframes tagPop {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

</style>