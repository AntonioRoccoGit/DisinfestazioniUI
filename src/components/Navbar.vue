<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid w-75 py-3">
            <router-link
                class="navbar-brand"
                style="height: 6rem;"
                to="/"
            >
                <img
                    :src="logo"
                    alt="Logo"
                    class="img-fluid h-100"
                >
            </router-link>

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
                    <li class="nav-item color-success">
                        <router-link
                            class="nav-link fs-5"
                            to="#"
                        >
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link fs-5"
                            to="#"
                        >
                            Servizi
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link fs-5"
                            to="#"
                        >
                            Contatti
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(6px);
    border-bottom: 2px solid rgba(25, 135, 84, 0.95);
}
</style>