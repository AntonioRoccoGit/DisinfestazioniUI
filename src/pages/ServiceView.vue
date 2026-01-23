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
    <div
        v-if="service"
        class="container my-5"
    >

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
                    <router-link to="/#servizi">
                        Servizi
                    </router-link>
                </li>
                <li class="breadcrumb-item active">
                    {{ service.label }}
                </li>
            </ol>
        </nav>

        <!-- Hero -->
        <div class="row align-items-center mb-5">
            <div class="col-md-6">
                <h1 class="mb-3">{{ service.title }}</h1>
                <p class="lead">{{ service.description }}</p>
            </div>
            <div class="col-md-6">
                <img
                    :src="service.heroImage"
                    :alt="service.label"
                    class="img-fluid rounded"
                />
            </div>
        </div>

        <!-- Contenuto -->
        <div class="row">
            <div class="col-lg-8">
                <div v-html="service.content"></div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
                <BottoneChiamata></BottoneChiamata>
            </div>
        </div>

    </div>
</template>