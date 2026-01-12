import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from './stores/userStore'
import { useAppointmentStore } from './stores/appointmentStore'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

const userStore = useUserStore()
const appointmentStore = useAppointmentStore()
const savedUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
if (savedUser) {
  userStore.login(savedUser)
  appointmentStore.loadAppointments(savedUser)
}
app.use(router)

app.mount('#app')
