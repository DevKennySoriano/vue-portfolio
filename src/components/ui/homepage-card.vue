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
        content: "OJT at Wizzard Technologies INC. - 300 Hours",
    },
]
</script>

<template>
    <section class="card-wrapper">
        <div class="card-row">
            <div
                v-for="(card, i) in cards"
                :key="card.title"
                class="info-card fade-up"
                :style="{ animationDelay: `${i * 0.2}s` }"
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
    margin-bottom: 200px;
}

.card-row {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
}

.info-card {
    width: 350px;
    padding: 1.8rem;
    border-radius: 16px;
    background: #ffffff;
    border: 2px solid #445d48;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
    text-align: center;
    opacity: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(68, 93, 72, 0.25);
}

.info-card p {
    margin-top: 1.2rem;
    font-size: 1.15rem;
    line-height: 1.7;
    opacity: 0.9;
}

.label {
    display: inline-block;
    padding: 0.4rem 1.4rem;
    font-size: 0.9rem;
    background: #445d48;
    color: #FAFAFA;
    border-radius: 999px;
}

.fade-up {
    animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(25px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>