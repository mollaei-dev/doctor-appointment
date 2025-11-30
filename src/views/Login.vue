<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import UserForm from '@/components/UserForm.vue'

const router = useRouter()
const currentUserStore = useUserStore()

function handleLogin(username, password, setMessage) {
  let users = JSON.parse(localStorage.getItem('users')) || []
  if (!Array.isArray(users)) {
    users = []
  }
  const foundUser = users.find((user) => user.username === username && user.password === password)
  if (!foundUser) {
    setMessage('User not found')
    return
  }
  localStorage.setItem('currentUser', JSON.stringify(foundUser))
  currentUserStore.login(foundUser)
  router.push('dashboard')
}
</script>
<template>
  <main>
    <UserForm
      title="Login"
      btnText="Login"
      :submit="handleLogin"
      linkTo="signup"
      linkText="Don't have an account?"
    />
  </main>
</template>
