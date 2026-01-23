<script setup>
import Jumbo from '@/components/Jumbo.vue';
import { jumboItems } from '@/data/jumboItems'
import Presentation from '@/components/Presentation.vue';
import ServiceCard from '@/components/atomi/ServiceCard.vue';

</script>

<template>
    <Jumbo :items="jumboItems" />
    <section>
        <Presentation />
    </section>

    <section
        id="servizi"
        class="py-5"
    >
        <div class="container-fluid w-75">
            <ServiceCard></ServiceCard>
        </div>
    </section>
</template>

<style scoped>
.scrollspy-example {
    height: 300px;
    overflow-y: auto;
}
</style>