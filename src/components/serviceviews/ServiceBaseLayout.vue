<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { servicesRoute } from '@/data/services';

const route = useRoute();
const router = useRouter();

const currentIndex = computed(() => {
    return servicesRoute.findIndex(s => s.route === route.path);
});

const prevService = computed(() => {
    if (currentIndex.value > 0) {
        return servicesRoute[currentIndex.value - 1];
    }
    return null;
});

const nextService = computed(() => {
    if (currentIndex.value < servicesRoute.length - 1) {
        return servicesRoute[currentIndex.value + 1];
    }
    return null;
});

function goTo(service) {
    router.push(service.route);
}

</script>
<template>
    <section class="service-content">

        <h2 class="mb-3">
            <slot name="title">
                titolo
            </slot>
        </h2>

        <div class="mb-4">
            <slot name="intro" />
        </div>

        <h3 class="h5 mt-4 mb-2">
            <slot name="method-title">
                Metodo
            </slot>
        </h3>

        <div class="mb-3">
            <slot name="method" />
        </div>

        <div class="mb-4">
            <slot name="tech-points" />
        </div>

        <h3 class="h5 mt-4 mb-2">
            <slot name="benefits-title">
                Benefici
            </slot>
        </h3>

        <div class="mb-3">
            <slot name="benefits" />
        </div>

        <div class="mb-4">
            <slot name="benefits-points" />
        </div>

        <p class="fw-semibold">
            <slot name="cta" />
        </p>

        <!-- Navigazione tra servizi -->
        <nav class="d-flex justify-content-between align-items-center border-top pt-4 mt-5">

            <button
                v-if="prevService"
                class="btn btn-outline-secondary d-flex align-items-center gap-2"
                @click="goTo(prevService)"
            >
                <i class="bi bi-arrow-left"></i>
                <span class="d-none d-md-inline">{{ prevService.label }}</span>
            </button>

            <div></div> <!-- spacer -->

            <button
                v-if="nextService"
                class="btn btn-outline-primary d-flex align-items-center gap-2"
                @click="goTo(nextService)"
            >
                <span class="d-none d-md-inline">{{ nextService.label }}</span>
                <i class="bi bi-arrow-right"></i>
            </button>

        </nav>
    </section>
</template>
