import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: JSON.parse(localStorage.getItem('cuurentUser')) || '',
  }),
  actions: {
    login(username) {
      this.currentUser = username
      localStorage.setItem("currentUser",JSON.stringify(username))
    },
    logOut() {
      this.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
})
