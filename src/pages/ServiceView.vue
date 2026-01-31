<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { services } from '@/data/services'
import BottoneChiamata from '@/components/atomi/BottoneChiamata.vue'

const route = useRoute()
const router = useRouter()

const service = ref(null)

function loadService() {
    const slug = route.params.slug
    const found = services.find(s => s.slug === slug)

    if (!found) {
        router.replace({ name: 'NotFound' })
        return
    }

    service.value = found
    updateMeta(found)
}

function updateMeta(s) {
    document.title = s.metaTitle

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
        meta.setAttribute('content', s.metaDescription)
    }
}

onMounted(loadService)

watch(
    () => route.params.slug,
    () => loadService()
)
</script>

<template>
    <div v-if="service">

        <!-- HERO con background -->
        <section
            class="service-hero d-flex align-items-center"
            :style="{
                backgroundImage: `url(${service.heroImage})`
            }"
        >
            <div class="overlay"></div>

            <div class="container position-relative">
                <div class="row">
                    <div class="col-lg-8 text-white">

                        <h1 class="display-5 fw-bold mb-3">
                            {{ service.title }}
                        </h1>

                        <p class="lead mb-4">
                            {{ service.description }}
                        </p>

                    </div>
                </div>
            </div>
        </section>

        <!-- CONTENUTO -->
        <div class="container my-5">

            <!-- Breadcrumb -->
            <nav
                aria-label="breadcrumb"
                class="mb-4"
            >
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/#servizi">Servizi</router-link>
                    </li>
                    <li class="breadcrumb-item active">
                        {{ service.label }}
                    </li>
                </ol>
            </nav>

            <div class="row">

                <!-- Testo principale -->
                <div class="col-lg-8">
                    <component :is="service.component" />
                </div>


                <!-- Sidebar -->
                <div class="col-lg-4">
                    <BottoneChiamata />
                </div>

            </div>
        </div>

    </div>
</template>
<style>
.service-hero {
    min-height: 60vh;
    background-size: cover;
    background-position: center 20%;
    position: relative;
}

.service-hero .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
}

.service-hero h1,
.service-hero p {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.service-content p {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}
</style>