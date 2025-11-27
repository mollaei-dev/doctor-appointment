import { defineStore } from 'pinia'

defineStore('appointments', {
  state: () => ({
    appointments: [],
    allReservedTimes: [],
  }),
  actions: {
    loadAppointments(user) {
      this.appointments = JSON.parse(localStorage.getItem(`appointment_${user}`)) || []
      this.allReservedTimes = JSON.parse(localStorage.getItem('all_reserved_times')) || []
    },
    reserve(appointmentTime) {
      const user = localStorage.getItem('currentUser')
      if (!this.allReservedTimes.includes(appointmentTime)) {
        this.appointments.push(appointmentTime)
        this.allReservedTimes.push(appointmentTime)
        localStorage.setItem(`appointment_${user}`, this.appointments.stringify())
        localStorage.setItem('all_reserved_times', this.allReservedTimes.stringify())
      }
    },
    cancel(index) {
      const user = localStorage.getItem('currentUser')
      let time = this.appointments.splice(index, 1)[0]
      this.allReservedTimes = this.allReservedTimes.filter((t) => t != time)
      localStorage.setItem(`appointment_${user}`, this.appointments.stringify)
      localStorage.setItem('all_reserved_times', this.allReservedTimes.stringify())
    },
    isReserved(appointmentTime) {
      return this.allReservedTimes.includes(appointmentTime)
    },
  },
})
