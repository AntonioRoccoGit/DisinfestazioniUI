<script setup>
import Jumbo from '@/components/Jumbo.vue';
import { jumboItems } from '@/data/home/jumboItems'
import { serviceItems } from '@/data/home/serviceItems';
import Presentation from '@/components/Presentation.vue';
import CardCarousel from '@/components/atomi/CardCarousel.vue';

</script>

<template>
    <Jumbo :items="jumboItems" />
    <section>
        <Presentation />
    </section>
    <section class="py-5">
        <div class="container-fluid w-75">
            <CardCarousel :items="serviceItems" />
        </div>
    </section>
</template>

<style scoped>
.scrollspy-example {
    height: 300px;
    overflow-y: auto;
}
</style>