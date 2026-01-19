<script setup>
const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
})
</script>
<template>
    <div class="my-card">
        <img
            :src="image"
            :alt="title"
        />

        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.my-card {
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    background: #fff;
    display: flex;
    flex-direction: column;
}

.my-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

.my-card .card-body {
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.my-card .card-title {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
}

.my-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.my-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}
</style>