import Booking from '@/views/Booking.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/signup', component: Signup, name: 'signup' },
  { path: '/dashboard', component: Dashboard, name: 'dashboard' },
  { path: '/booking', component: Booking, name: 'booking' },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
