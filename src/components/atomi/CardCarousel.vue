<script setup>
import ServiceCard from './ServiceCard.vue'

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})

</script>


<template>
    <div class="row gy-3">
        <div
            v-for="(item, i) in items"
            :key="i"
            class="col-12 col-lg-6 col-xxl-3"
        >
            <ServiceCard
                class="h-100"
                :title="item.title"
                :image="item.image"
                :description="item.description"
            />
        </div>
    </div>
</template>


<style scoped></style>