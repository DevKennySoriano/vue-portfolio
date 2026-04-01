<script setup>
const cards = [
    {
        title: "Education",
        content: "BS Computer Science – STI College",
    },
    {
        title: "Focus",
        content: "Frontend Development, UI/UX, Web Design",
    },
    {
        title: "Experience",
        content: "Completed 300-hour OJT at Wizzard Technologies INC.",
    },
]
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

<style scoped>
.card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
    padding: 0 1rem;
}

.card-row {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
}

.info-card {
    width: min(350px, 100%);
    padding: 1.8rem;
    border-radius: 16px;
    background: var(--bg-elevated);
    border: 2px solid var(--surface-strong);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow);
}

.info-card p {
    margin-top: 1.2rem;
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--text-muted);
}

.label {
    display: inline-block;
    padding: 0.4rem 1.4rem;
    font-size: 0.9rem;
    background: var(--surface-strong);
    color: var(--text-inverse);
    border-radius: 999px;
}

@media (max-width: 768px) {
    .card-wrapper {
        margin-bottom: 80px;
    }

    .info-card {
        padding: 1.4rem;
    }
}
</style>
