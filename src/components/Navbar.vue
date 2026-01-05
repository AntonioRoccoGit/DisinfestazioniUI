<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow-sm border-bottom"> -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a
                class="navbar-brand"
                href="#"
            >Il Mio Sito</a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="collapse navbar-collapse"
                id="mainNavbar"
            >
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a
                            class="nav-link"
                            href="#"
                        >Home</a></li>
                    <li class="nav-item"><a
                            class="nav-link"
                            href="#"
                        >Servizi</a></li>
                    <li class="nav-item"><a
                            class="nav-link"
                            href="#"
                        >Contatti</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: rgba(25, 135, 84, 0.95);
    backdrop-filter: blur(6px);
}
</style>