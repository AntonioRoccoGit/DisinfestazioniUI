<template>
    <div class="container text-center my-5">

        <!-- Emoji -->
        <div class="display-1 mb-3">⎔</div>

        <!-- Codice errore -->
        <h1 class="display-4 fw-bold">404</h1>

        <!-- Messaggio -->
        <p class="lead mb-4">
            La pagina che stai cercando non esiste.
        </p>

        <!-- CTA -->
        <router-link
            to="/"
            class="btn btn-outline-primary btn-lg"
        >
            Torna alla home
        </router-link>

    </div>
</template>
