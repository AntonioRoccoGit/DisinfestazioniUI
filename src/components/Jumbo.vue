<script setup>
import { defineProps, nextTick } from 'vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Carousel } from 'bootstrap'

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    height: {
        type: String,
        default: '80vh'
    },
    overlay: {
        type: Boolean,
        default: true
    },
    overlayColor: {
        type: String,
        default: 'rgba(0,0,0,0.3)'
    },
    interval: {
        type: Number,
        default: 6000
    }
})
const carouselRef = ref(null)
let carouselInstance = null

onMounted(async () => {
    await nextTick()

    const el = carouselRef.value
    if (!el) return

    // 🔥 IMPORTANTE: rimuove eventuale istanza precedente
    const existing = Carousel.getInstance(el)
    if (existing) existing.dispose()

    // ✅ Inizializzazione manuale, nessun data-bs-ride
    carouselInstance = new Carousel(el, {
        interval: props.interval,
        pause: false,
        ride: false, // manuale
        wrap: true
    })

    // Avvio manuale ciclo
    carouselInstance.cycle()
})

onBeforeUnmount(() => {
    if (carouselInstance) {
        carouselInstance.pause()
        carouselInstance.dispose()
        carouselInstance = null
    }
})
</script>

<template>
    <div
        id="jumboCarousel"
        class="carousel slide carousel-fade"
        ref="carouselRef"
    >
        <div class="carousel-inner">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="carousel-item"
                :class="{ active: index === 0 }"
            >
                <div
                    class="zoom-bg d-flex align-items-center justify-content-center text-white position-relative bg-dark"
                    :style="{
                        minHeight: height,
                        backgroundImage: item.bgImage ? `url(${item.bgImage})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
                >
                    <div
                        v-if="overlay"
                        class="position-absolute top-0 start-0 w-100 h-100"
                        :style="{ backgroundColor: overlayColor, zIndex: 1 }"
                    ></div>

                    <div
                        class="container position-relative text-center"
                        style="z-index: 2;"
                    >
                        <component
                            :is="item.component"
                            v-bind="item.props"
                        />
                    </div>

                </div>
            </div>
        </div>

        <!-- Controlli -->
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#jumboCarousel"
            data-bs-slide="prev"
        >
            <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
            <span class="visually-hidden">Precedente</span>
        </button>

        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#jumboCarousel"
            data-bs-slide="next"
        >
            <span
                class="carousel-control-next-icon"
                aria-hidden="true"
            ></span>
            <span class="visually-hidden">Successivo</span>
        </button>
    </div>
</template>
<style scoped>
.carousel-item .zoom-bg {
    transition: transform 7s ease-in-out;
    transform: scale(1);
}

.carousel-item.active .zoom-bg {
    transform: scale(1.12);
    /* zoom leggero e pulito */
}
</style>