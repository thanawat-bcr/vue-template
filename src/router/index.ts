import { createRouter, createWebHistory } from 'vue-router'
import { useToast } from 'primevue/usetoast'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/DashboardView.vue'),
    },
    {
      path: '/province',
      component: () => import('@/views/ProvinceView.vue'),
    },
    {
      path: '/address',
      component: () => import('@/views/AddressView.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { isAuth } = useAuthStore()

  const toast = useToast()
  if (to.path !== '/login' && !isAuth) {
    next('/login')
    toast.add({ severity: 'error', summary: 'Alert!', detail: 'Please login first', life: 3000, group: 'tc' })
  }
  else {
    next()
  }
})

export default router
