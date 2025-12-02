<script setup>
import AppointmentList from '@/components/AppointmentList.vue'
import { useAppointmentStore } from '@/stores/appointmentStore'
import { useUserStore } from '@/stores/userStore'
import { computed, watchEffect } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const appointmentStore = useAppointmentStore()

onMounted(() => {
  const saveUser = JSON.parse(localStorage.getItem('currentUser') || '')
  if (saveUser) {
    userStore.login(saveUser)
    appointmentStore.loadAppointments(saveUser)
  }
})
watchEffect(() => {
  appointmentStore.loadAppointments(userStore.currentUser)
})

const user = computed(() => userStore.currentUser)

function removeTime(time) {
  appointmentStore.cancel(time)
}
function logout() {
  localStorage.removeItem('currentUser')
  userStore.logOut()
  router.push('login')
}
</script>
<template>
  <div v-if="user" class="dashboard">
    <h1 class="dashboard__title">
      Welcome , <span class="dashboard__email">{{ user.username }}</span>
    </h1>
    <p v-if="appointmentStore.appointments.length === 0" class="dashboard__text">
      No turn has been recorded❗
    </p>
    <div v-else>
      <p class="dashboard__text">Your booked appointments :</p>
      <AppointmentList
        :listItems="appointmentStore.appointments"
        actionLabel="Cancel"
        @itemAction="removeTime"
      />
    </div>

    <div class="wrapper-button">
      <button class="dashboard__button" @click="router.push('appointments')">Appointments</button>
      <button class="dashboard__button" @click="logout">Log Out</button>
    </div>
  </div>
  <div v-else class="dashboard">
    <p class="dashboard__alert">you are not logged in</p>
    <RouterLink class="dashboard__link" to="login">login</RouterLink>
  </div>
</template>
<style scoped>
* {
  color: #fff;
}
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.dashboard__title {
  font-size: 26px;
}
.dashboard__email {
  color: orange;
}
.dashboard__alert {
  font-size: 30px;
  font-weight: bold;
}
.dashboard__link {
  font-size: 30px;
  font-weight: bold;
  color: orange;
}
.dashboard__text {
  font-size: 22px;
  margin-bottom: 20px;
}
.wrapper-button {
  display: flex;
  justify-content: space-between;
  gap: 32px;
}
.dashboard__button {
  width: 170px;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  display: block;
  font-size: 18px;
  margin-top: 30px;
  font-weight: bolder;
  transition: all 200ms;
  font-family: inherit;
  border: none;
  outline: none;
  cursor: pointer;
}
.dashboard__button:hover {
  background-color: rgb(240, 223, 192);
}
</style>
