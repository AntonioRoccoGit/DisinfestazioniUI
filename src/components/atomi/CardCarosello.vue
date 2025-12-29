<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
    id: { type: [String, Number], required: true },
    titolo: { type: String, required: true },
    descrizione: { type: String, required: true },
    //immagine: { type: String, default: '/src/assets/default.jpg' }
})

const emit = defineEmits(['selezionato'])

function handleClick() {
    emit('selezionato', props.id)
}
</script>

<template>
    <div>
        <h1 class="card-title">{{ titolo }}</h1>
        <p class="mt-3 card-text">{{ descrizione }}</p>
    </div>
</template>

<style scoped>
div {
    width: 60%;
    margin: 0 auto;
}

h1 {
    font-size: 3rem;

}
</style>