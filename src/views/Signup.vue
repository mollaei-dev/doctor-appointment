<script setup>
import { ref } from 'vue'
import Login from './Login.vue'
import { useRouter } from 'vue-router'

const email = ref()
const password = ref()
const router = useRouter()

email.value = ''
password.value = ''

function handleSignup() {
  let users = JSON.parse(localStorage.getItem('users')) || []
   if (!Array.isArray(users)) {
  users = []
}
  const userExists = users.find(
    (user) => user.email === email.value && user.password === password.value,
  )
  if (userExists) {
    alert('User already exists')
    return
  }
  users.push({ email: email.value, password: password.value })
  localStorage.setItem('users', JSON.stringify(users))

  alert('Signup successful , You can login now')
  router.push('login')
}
</script>
<template>
  <main>
    <form @submit.prevent="handleSignup" class="form">
      <h2 class="form__title">Signup</h2>
      <div class="form__field">
        <label class="form__label" for="username">Username</label>
        <input
          v-model="email"
          autocomplete="off"
          type="text"
          class="form__input"
          id="username"
          placeholder="Enter your email"
        />
      </div>
      <div class="form__field">
        <label class="form__label" for="password">Password</label>
        <input
          autocomplete="new-password"
          v-model="password"
          type="password"
          class="form__input"
          id="password"
          placeholder="Enter a Password"
        />
      </div>
      <button type="submit" class="form__button">Signup</button>
      <div class="form__signup">
        <p class="form__signup-text">Already have an account?</p>
        <router-link to="login" class="form__signup-link">Login</router-link>
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
  background-color: #d0caca;
  border-radius: 6px;
}
.form__input::placeholder {
  color: rgb(34, 32, 32);
  background-color: #d0caca;
}
.form__button {
  background-color: #acabab;
  color: black;
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
  background-color: #696868;
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
