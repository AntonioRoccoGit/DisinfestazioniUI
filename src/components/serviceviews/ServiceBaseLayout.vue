<template>
    <section class="service-content">

        <h2 class="mb-3">
            <slot name="title">
                <!-- fallback obbligatorio -->
            </slot>
        </h2>

        <div class="mb-4">
            <slot name="intro" />
        </div>

        <h3 class="h5 mt-4 mb-2">
            <slot name="method-title">
                Metodo
            </slot>
        </h3>

        <div class="mb-3">
            <slot name="method" />
        </div>

        <div class="mb-4">
            <slot name="tech-points" />
        </div>

        <h3 class="h5 mt-4 mb-2">
            <slot name="benefits-title">
                Benefici
            </slot>
        </h3>

        <div class="mb-3">
            <slot name="benefits" />
        </div>

        <div class="mb-4">
            <slot name="benefits-points" />
        </div>

        <p class="fw-semibold">
            <slot name="cta" />
        </p>

    </section>
</template>
