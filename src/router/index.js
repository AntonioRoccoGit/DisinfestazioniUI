import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }, {

            path: "/disinfestazione",
            name: "Disintestazione",
            component: Home
        }
    ],
})
// // Esempio di guard globale (facoltativo, ma utile)
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = false // TODO: sostituisci con il tuo controllo login
//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })
export default router
