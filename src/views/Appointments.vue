<script setup>
import AppointmentList from '@/components/AppointmentList.vue'
import { onMounted, reactive } from 'vue'
import { useAppointmentStore } from '@/stores/appointmentStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const appointmentSlots = reactive([
  'ِDr.Mohammadi 10:00 friday',
  'Dr.Ahmadi 08:00 saturday',
  'Dr.Kamali 16:00 sunday ',
  'Dr.Akbari 12:00 monday ',
  'Dr.Ghasemi 16:00 Tuesday  ',
  'Dr.Rezaei 16:00 Wednesday ',
  'Dr.javadi 11:00 Thursday ',
  'Dr.Mollaei 09:00 friday ',
])

const appointmentStore = useAppointmentStore()

onMounted(() => {
  appointmentStore.loadAppointments(JSON.parse(localStorage.getItem('currentUser')))
})

function reserveTime(time) {
  appointmentStore.reserve(time)
}
function isReserved(time) {
  return appointmentStore.isReserved(time)
}
</script>
<template>
  <div class="appointments">
    <h1 class="title">Appointments</h1>
    <AppointmentList
      :listItems="appointmentSlots"
      actionLabel="Reserve"
      :isReserved="isReserved"
      @itemAction="reserveTime"
    />
    <button class="dashboard-btn" @click="router.push('dashboard')">Back to Dashboard</button>
  </div>
</template>
<style scoped>
.appointments {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 12px 30px;
}
.dashboard-btn {
  text-align: center;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  padding: 12px;
  display: block;
  font-size: 18px;
  font-weight: bolder;
  transition: all 200ms;
  font-family: inherit;
  border: none;
  outline: none;
  cursor: pointer;
}
.dashboard-btn:hover {
  cursor: pointer;
  background-color: rgb(240, 223, 192);
}
.dashboard-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
