<script setup>
import Card5050 from '@/components/atomi/Card5050.vue';
import Jumbo from '@/components/Jumbo.vue';
import { jumboItems } from '@/data/home/jumboItems'
import { home5050CardImgs } from '@/data/home/home5050Card';
import Presentation from '@/components/Presentation.vue';

</script>

<template>
    <Jumbo :items="jumboItems"></Jumbo>
    <section>
        <Presentation></Presentation>
    </section>
    <section class="py-5">
        <div class="container">

            <Card5050
                v-for="(card, i) in home5050CardImgs"
                :key="i"
                :title="card.title"
                :image="card.image"
                :description="card.description"
                :reverse="card.reverse"
            />

        </div>
    </section>
</template>

<style scoped></style>