<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const username = ref('')
const password = ref('')
const router = useRouter()
const currentUserStore = useUserStore()
const message = ref('')

function hideMessage() {
  setTimeout(() => {
    message.value = null
  }, 3000)
}

function handleLogin() {
  if (!username.value || !password.value) {
    message.value = 'All fields are required'
    hideMessage()
    return
  }
  let users = JSON.parse(localStorage.getItem('users')) || []
  if (!Array.isArray(users)) {
    users = []
  }
  const foundUser = users.find(
    (user) => user.username === username.value && user.password === password.value,
  )
  if (!foundUser) {
    message.value = 'User not found'
    hideMessage()
    username.value = ''
    password.value = ''
    return
  }
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
          v-model="username"
          type="text"
          class="form__input"
          id="username"
          placeholder="Username"
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
      <div class="form__field--btn">
        <p class="form__message" :class="{ 'form__message--show': message }">{{ message }}</p>
        <button type="submit" class="form__button">Login</button>
      </div>
      <div class="form__signup">
        <p class="form__signup-text">Don't have an account?</p>
        <router-link to="signup" class="form__signup-link">Sign Up</router-link>
      </div>
    </form>
  </main>
</template>
<style scoped>
input,
button,
label {
  font: inherit;
  border: none;
  outline: none;
  letter-spacing: 0.6px;
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
  letter-spacing: 1.5px;
}
.form__field {
  margin-top: 33px;
}
.form__label {
  font-size: 16px;
}
.form__input {
  font-size: 15px;
  font-weight: 500;
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
.form__field--btn {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.form__message {
  height: 24px;
  opacity: 0;
  color: orange;
  font-size: 18px;
  text-align: center;
  opacity: 1;
  transition: opacity 1000ms ease;
}
.form__message--show {
  opacity: 1;
}
.form__button {
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  padding: 15px 0;
  display: block;
  font-size: 20px;
  width: 100%;
  font-weight: bolder;
  transition: all 200ms;
}
.form__button:hover {
  cursor: pointer;
  background-color: rgb(240, 223, 192);
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
  color:#03386e;
  font-size: 16px;
  font-weight: bold;
}
</style>
