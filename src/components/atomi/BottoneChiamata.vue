<template>
    <div class="
      position-fixed
      bottom-0 start-0
      m-3
      d-md-none
      d-flex
      flex-column
      gap-2
      z-3
      cta-safe
    ">
        <!-- Chiama -->
        <a
            :href="telLink"
            class="btn btn-success rounded-pill shadow"
        >
            <i class="bi bi-telephone-fill me-2"></i>
            Chiamaci ora
        </a>

        <!-- WhatsApp -->
        <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener"
            class="btn btn-outline-success rounded-pill shadow bg-white"
        >
            <i class="bi bi-whatsapp me-2"></i>
            WhatsApp
        </a>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { personalInfo } from '@/data/personalInfo'

const telLink = computed(() => `tel:+39${personalInfo.cellulare}`)
const whatsappLink = computed(() => `https://wa.me/+39${personalInfo.cellulare}`)
</script>

<style scoped>
.cta-safe {
    bottom: calc(1rem + env(safe-area-inset-bottom));
}
</style>