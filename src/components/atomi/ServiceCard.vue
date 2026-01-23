<script setup>
import { serviceItems } from '@/data/serviceItems';
</script>
<template>
    <div class="container my-5">
        <div class="row g-4">
            <div
                class="col-12 col-md-6 col-lg-4"
                v-for="card in serviceItems"
                :key="card.id"
            >
                <div class="card h-100 shadow-sm service-card">
                    <div class="card-body d-flex flex-column">

                        <div class="mb-3 fs-2 text-primary">
                            <i :class="card.icon"></i>
                        </div>

                        <h5 class="card-title">{{ card.title }}</h5>
                        <p class="card-text flex-grow-1">
                            {{ card.description }}
                        </p>

                        <router-link
                            :to="card.link"
                            class="btn btn-outline-primary mt-auto align-self-start"
                        >
                            Scopri di più
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.service-card {
    transition: transform .2s ease, box-shadow .2s ease;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, .15);
}
</style>