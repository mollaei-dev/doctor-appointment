import Appointments from '@/views/Appointments.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/signup', component: Signup, name: 'signup' },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    beforeEnter: () => {
      const userStore = useUserStore()
      return userStore.currentUser ? true : { name: 'login' }
    },
  },
  {
    path: '/appointments',
    component: Appointments,
    name: 'appointments',
    beforeEnter: () => {
      const userStore = useUserStore()
      return userStore.currentUser ? true : { name: 'login' }
    },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
