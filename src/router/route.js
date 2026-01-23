import Home from '@/pages/Home.vue'
import ServiceView from '@/pages/ServiceView.vue'
import { services } from '@/data/services'

const validSlugs = services.map(s => s.slug)
export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/servizi/:slug',
        component: ServiceView,
        beforeEnter: (to, from, next) => {
            if (validSlugs.includes(to.params.slug)) {
                next()
            } else {
                next({ name: 'NotFound' })
            }
        }
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFoundView.vue')
    }
]