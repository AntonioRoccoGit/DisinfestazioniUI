<script setup>
import logo from '@/assets/logo.png'
import { services } from '@/data/services';
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
                            to="/"
                        >
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle fs-5"
                            href="#"
                            id="serviziDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Servizi
                        </a>

                        <ul
                            class="dropdown-menu"
                            aria-labelledby="serviziDropdown"
                        >
                            <li v-for="item in services">
                                <router-link
                                    class="dropdown-item"
                                    :to="`/servizi/${item.slug}`"
                                >
                                    {{ item.label }}
                                </router-link>
                            </li>

                        </ul>
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