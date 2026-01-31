<template>
    <ul class="list-unstyled mb-4">
        <li
            v-for="(item, i) in items"
            :key="i"
            class="d-flex align-items-start mb-2"
        >
            <span class="me-2 text-success fw-bold">✔</span>
            <span>{{ item }}</span>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>