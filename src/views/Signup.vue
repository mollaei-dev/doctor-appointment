<script setup>
import { useRouter } from 'vue-router'
import UserForm from '@/components/UserForm.vue'

const router = useRouter()

function handleSignup(username, password, setMessage) {
  let users = JSON.parse(localStorage.getItem('users')) || []
  if (!Array.isArray(users)) {
    users = []
  }
  const userExists = users.find((user) => user.username === username)
  if (userExists) {
    setMessage('User already exists')
    return
  }
  users.push({ username: username, password: password })
  localStorage.setItem('users', JSON.stringify(users))

  setMessage('Signup successful!')
  setTimeout(() => router.push('login'), 2000)
}
</script>
<template>
  <main>
    <UserForm
      title="Signup"
      btnText="Create Account"
      :submit="handleSignup"
      linkTo="login"
      linkText="Already have an account?"
    />
  </main>
</template>
