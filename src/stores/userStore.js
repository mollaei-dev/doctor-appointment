import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: localStorage.getItem('cuurentUser') || '',
  }),
  actions: {
    login(username) {
      this.currentUser = username
      localStorage.setItem("currentUser",username)
    },
    logOut() {
      this.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
})
