import { defineStore } from 'pinia'

export const useAppointmentStore = defineStore('appointments', {
  state: () => ({
    appointments: [],
    allReservedTimes: [],
  }),
  actions: {
    loadAppointments(user) {
      this.appointments = JSON.parse(localStorage.getItem(`appointment_${user.username}`)) || []
      this.allReservedTimes = JSON.parse(localStorage.getItem('all_reserved_times')) || []
    },
    reserve(appointmentTime) {
      const user = JSON.parse(localStorage.getItem('currentUser'))
      if (!this.allReservedTimes.includes(appointmentTime)) {
        this.appointments = [...this.appointments, appointmentTime]
        this.allReservedTimes = [...this.allReservedTimes, appointmentTime]
        localStorage.setItem(`appointment_${user.username}`, JSON.stringify(this.appointments))
        localStorage.setItem('all_reserved_times', JSON.stringify(this.allReservedTimes))
      }
    },
    cancel(time) {
      const user = JSON.parse(localStorage.getItem('currentUser'))
      this.appointments = this.appointments.filter((t) => t != time)
      this.allReservedTimes = this.allReservedTimes.filter((t) => t != time)
      localStorage.setItem(`appointment_${user.username}`, JSON.stringify(this.appointments))
      localStorage.setItem('all_reserved_times', JSON.stringify(this.allReservedTimes))
    },
  },
  getters: {
    isReserved: (state) => (appointmentTime) => state.allReservedTimes.includes(appointmentTime)
    },
})