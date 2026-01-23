import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './route'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
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
