<script setup>
const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
})
</script>
<template>
    <section class="bg-success bg-gradient text-white rounded-3 pt-3 px-4 mb-5 h-100">
        <div class="d-flex flex-column h-100">
            <!-- Immagine -->
            <div class="card-image-wrapper mb-4">
                <img
                    :src="image"
                    class="card-image"
                    :alt="title"
                />
            </div>

            <!-- Testo -->
            <div class="">
                <h2 class="fw-bold mb-3">
                    {{ title }}
                </h2>
                <p class="text-white-50 fs-5 mb-0">
                    {{ description }}
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card-image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    /* 16:9, cambia se vuoi */
    overflow: hidden;
    border-radius: 1rem;
}

.card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>