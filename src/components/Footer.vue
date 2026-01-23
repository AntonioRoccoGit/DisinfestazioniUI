<script setup lang="ts">
import FooterLogo from './atomi/FooterLogo.vue';
import { personalInfo } from '@/data/personalInfo';
</script>

<template>
    <footer class="bg-dark text-white py-5 mt-5">
        <div class="container">
            <div class="row align-items-stretch text-center text-lg-start align-items-start">

                <!-- Sezione 1: Logo + Social -->
                <div class="col-lg-4 mb-4 mb-lg-0 section-with-line">
                    <FooterLogo
                        alt="Logo"
                        style="width: 75%;"
                        class="mb-3 m-auto"
                    ></FooterLogo>
                    <div class="d-flex justify-content-center justify-content-lg-even gap-3 mt-3">
                        <a
                            href="#"
                            class="text-white fs-4"
                        ><i class="bi bi-facebook"></i></a>
                        <a
                            href="https://www.instagram.com/alpha_range_/"
                            target="_blank"
                            class="text-white fs-4"
                        ><i class="bi bi-instagram"></i></a>
                    </div>
                </div>

                <!-- Sezione 2: Dove siamo -->
                <div class="col-lg-4 mb-4 mb-lg-0 section-with-line">
                    <h5 class="fw-bold mb-3">Dove Siamo</h5>
                    <p class="mb-1">{{ personalInfo.coumune }}, {{ personalInfo.indirizzo }}</p>
                    <p class="mb-1">
                        {{ personalInfo.cap }} - {{ personalInfo.provincia }}({{ personalInfo.siglaProvincia }})
                    </p>
                    <p class="mb-1">{{ personalInfo.nazione }}</p>
                </div>

                <!-- Sezione 3: Contatti -->
                <div class="col-lg-4">
                    <h5 class="fw-bold mb-3">Contatti</h5>
                    <ul className="list-unstyled small mb-0">
                        <li>
                            <a
                                href="mailto:alpharange@example.com"
                                target="_blank"
                                className="text-light text-decoration-none"
                            >
                                {{ personalInfo.email }}
                            </a>
                        </li>
                        <li className="mt-1">Robert:
                            <a
                                target="_blank"
                                :href="`tel:+39${personalInfo.cellulare}`"
                                className="text-light text-decoration-none"
                            >{{ personalInfo.cellulare }}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>

<style scoped></style>
