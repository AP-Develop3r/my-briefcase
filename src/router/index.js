import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/about',
        name: 'about',
        component: () => import('@/views/components/about/About.vue')
      },
      {
      path: '/skills',
        name: 'skills',
        component: () => import('@/views/components/skills/Skills.vue')
      },
      {
        path: '/contact',
          name: 'contact',
          component: () => import('@/views/components/contact/Contact.vue')
        },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
