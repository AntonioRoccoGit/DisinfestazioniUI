<template>
    <section class="card5050 bg-success bg-gradient text-white rounded-4 shadow-sm p-4 p-md-5 mb-5">
        <div
            class="row align-items-center"
            :class="{ 'flex-md-row-reverse': reverse }"
        >
            <!-- Immagine -->
            <div class="col-md-6 mb-4 mb-md-0">
                <img
                    :src="image"
                    class="img-fluid rounded-3 shadow"
                    :alt="title"
                />
            </div>

            <!-- Testo -->
            <div class="col-md-6">
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


<script setup>
const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    reverse: { type: Boolean, default: false }   // immagine a destra
})
</script>