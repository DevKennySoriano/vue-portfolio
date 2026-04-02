<script setup>
const status = "Available for Work"
const name = "Kenny Soriano"
const profileImg = "/images/ken/about-img.jpeg"
const description =
        "I build responsive and user-focused web interfaces with Vue and modern frontend practices."

const tags = ["he/him","STI College"]
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
  data-aos-delay="100"
>
  {{ status }}
</span>


    <h2
      class="name"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="200"
    >
      {{ name }}
    </h2>

    <p
      class="description"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="300"
    >
      {{ description }}
    </p>
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

        <div
                class="buttons"
                data-aos="fade-up"
                data-aos-once="true"
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
</section>
</template>

<style scoped>

.about {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-areas:
                "left right"
                "buttons right";
        column-gap: 1rem;
        row-gap: 1.2rem;
        padding: 2.5rem;
        margin: 120px auto 80px;
        max-width: 1000px;
        width: 100%;
        box-sizing: border-box;
        align-items: center;
        overflow-x: clip;
}

.about-left {
        grid-area: left;
        flex: 1;
}

.status {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 1rem;
  padding: 0.4rem 1rem 0.4rem 1.6rem;

  font-size: 1.05rem;
  font-weight: 500;
        color: var(--text-inverse);

        background: var(--surface-strong);
  border-radius: 999px;
  transition: all 0.3s ease;
}

.status::before {
        content: "";
        position: absolute;
        left: 0.7rem;
        top: 50%;
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: #22c55e;
        transform: translateY(-50%);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55);
        animation: pulseStatus 1.8s infinite;
}

.status:hover {
        background: color-mix(in srgb, var(--surface-strong) 90%, white);
  transform: translateY(-2px);
        box-shadow: var(--shadow);
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
        color: var(--text-muted);
        margin-bottom: 2rem;
}

.buttons {
        grid-area: buttons;
        display: flex;
        gap: 1.2rem;
        flex-wrap: wrap;
}

.btn {
        padding: 0.8rem 1.8rem;
        font-size: 1.1rem;
        border-radius: 8px;
        font-family: inherit;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow);
}

.routerProjects{
        text-decoration: none;
        color:var(--text-inverse);
}

.primary {
        background: var(--surface-strong);
        color: var(--text-inverse);
        border: none;
}

.outline {
        background: color-mix(in srgb, var(--bg-elevated) 88%, var(--bg-soft));
        color: var(--text);
        border: 1px solid var(--border);
        font-weight: 600;
}

.outline:hover {
        background: var(--surface-strong);
        color: var(--text-inverse);
        border-color: var(--surface-strong);
}

.outline:focus-visible {
        outline: 3px solid color-mix(in srgb, var(--surface-strong) 45%, transparent);
        outline-offset: 2px;
}

.outline:active {
        transform: translateY(0);
}

.about-right {
        grid-area: right;
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
        background: color-mix(in srgb, var(--bg-elevated) 85%, transparent);
        margin-bottom: 1.5rem;
        border: 2px solid var(--surface-strong);
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
        background: var(--surface-strong);
        color: var(--text-inverse);
        transition: all 0.3s ease;
        cursor: pointer;
}

.tag:hover {
        background: color-mix(in srgb, var(--surface-strong) 90%, white);
        transform: translateY(-2px);
        box-shadow: var(--shadow);
}

@keyframes pulseStatus {
        0% {
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55);
        }
        70% {
                box-shadow: 0 0 0 9px rgba(34, 197, 94, 0);
        }
        100% {
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
        }
}




/* Tablet (768px and below) */
@media (max-width: 768px) {
        .about {
                grid-template-columns: 1fr;
                grid-template-areas:
                        "left"
                        "right"
                        "buttons";
                padding: 1.5rem;
                margin: 60px auto;
                text-align: center;
        }

        .buttons {
                justify-content: center;
        }

        .name {
                font-size: 2.5rem;
        }

        .description {
                font-size: 1rem;
                margin-inline: auto;
        }

        .profile-cube {
                width: 220px;
                height: 220px;
        }
}

/* Mobile (480px and below) */
@media (max-width: 480px) {
        .about {
                padding: 1rem;
                margin: 40px auto;
                gap: 1.5rem;
        }

        .about-left,
        .about-right {
                width: 100%;
        }

        .name {
                font-size: 2rem;
                margin-bottom: 1rem;
        }

        .status {
                font-size: 0.9rem;
                padding: 0.3rem 0.8rem;
        }

        .description {
                font-size: 0.95rem;
                margin-bottom: 1.5rem;
        }

        .buttons {
                flex-direction: column;
                gap: 0.8rem;
        }

        .btn {
                width: 100%;
                padding: 0.7rem 1.5rem;
                font-size: 1rem;
        }

        .profile-cube {
                width: 180px;
                height: 180px;
        }

        .tag {
                font-size: 0.85rem;
                padding: 0.3rem 0.7rem;
        }
}

/* Extra small screens */
@media (max-width: 375px) {
        .about {
                padding: 1rem 0.5rem;
        }
}

</style>
