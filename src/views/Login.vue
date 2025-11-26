<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const email = ref('')
const password = ref('')
const router = useRouter()
const currentUserStore = useUserStore()

function handleLogin() {
  let users = JSON.parse(localStorage.getItem('users')) || []
  if (!Array.isArray(users)) {
    users = []
  }
  const foundUser = users.find(
    (user) => user.email === email.value && user.password === password.value,
  )
  if (!foundUser) {
    alert('User not found')
    email.value = ''
    password.value = ''
    return
  }
  alert('sucess')
  localStorage.setItem('currentUser', JSON.stringify(foundUser))
  currentUserStore.setUser(foundUser)
  router.push('dashboard')
}
</script>
<template>
  <main>
    <form @submit.prevent="handleLogin" class="form">
      <h2 class="form__title">Login</h2>
      <div class="form__field">
        <label class="form__label" for="username">Username</label>
        <input
          v-model="email"
          type="email"
          class="form__input"
          id="username"
          placeholder="Email "
          autocomplete="off"
        />
      </div>
      <div class="form__field">
        <label class="form__label" for="password">Password</label>
        <input
          v-model="password"
          type="password"
          class="form__input"
          id="password"
          placeholder="Password"
          autocomplete="new-password"
        />
      </div>
      <button type="submit" class="form__button">Login</button>
      <div class="form__signup">
        <p class="form__signup-text">Don't have an account?</p>
        <router-link to="signup" class="form__signup-link">Sign Up</router-link>
      </div>
    </form>
  </main>
</template>
<style scoped>
input,
button {
  font-family: inherit;
  border: none;
  outline: none;
}
.form {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  padding: 50px 35px 35px 35px;
  backdrop-filter: blur(10px);
}
.form__title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
}
.form__field {
  margin-bottom: 26px;
}
.form__label {
  font-size: 16px;
}
.form__input {
  font-size: 15px;
  font-weight: 600;
  display: block;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  color: black;
  border-radius: 6px;
}
.form__input::placeholder {
  color: rgb(34, 32, 32);
}
.form__button {
  background-color: #fff;
  color: #080710;
  border-radius: 4px;
  text-align: center;
  padding: 15px 0;
  display: block;
  font-size: 20px;
  width: 100%;
  margin-top: 46px;
  font-weight: bolder;
  transition: all 200ms;
}
.form__button:hover {
  cursor: pointer;
  background-color: darkgrey;
}

.form__signup {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.form__signup-text {
  font-size: 16px;
}
.form__signup-link {
  color: rgb(26, 23, 23);
  font-size: 16px;
  font-weight: bold;
}
</style>
