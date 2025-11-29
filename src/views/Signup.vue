<script setup>
import { ref } from 'vue'
import Login from './Login.vue'
import { useRouter } from 'vue-router'

const username = ref(null)
const password = ref(null)
const router = useRouter()
const message = ref('')

function hideMessage() {
  setTimeout(() => {
    message.value = null
  }, 3000)
}

function handleSignup() {
  if (!username.value || !password.value) {
    message.value = 'All fields are required'
    hideMessage()
    return
  }
  let users = JSON.parse(localStorage.getItem('users')) || []
  if (!Array.isArray(users)) {
    users = []
  }
  const userExists = users.find(
    (user) => user.username === username.value && user.password === password.value,
  )
  if (userExists) {
    message.value = 'User already exists'
    hideMessage()
    return
  }
  users.push({ username: username.value, password: password.value })
  localStorage.setItem('users', JSON.stringify(users))
  message.value = 'Signup successful'
  hideMessage()
  setTimeout(() => {
    router.push('login')
  }, 2000)
}
</script>
<template>
  <main>
    <form @submit.prevent="handleSignup" class="form">
      <h2 class="form__title">Signup</h2>
      <div class="form__field">
        <label class="form__label" for="username">Username</label>
        <input
          v-model="username"
          autocomplete="off"
          type="text"
          class="form__input"
          id="username"
          placeholder="Username"
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
          placeholder="Password"
        />
      </div>
      <div class="form__field--btn">
        <p class="form__message" :class="{ 'form__message--show': message }">{{ message }}</p>
        <button type="submit" class="form__button">Signup</button>
      </div>

      <div class="form__signup">
        <p class="form__signup-text">Already have an account?</p>
        <router-link to="login" class="form__signup-link">Login</router-link>
      </div>
    </form>
  </main>
</template>
<style scoped>
input,
button,
label {
  font-family: inherit;
  border: none;
  outline: none;
  letter-spacing: 0.6px;
}
.form__title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
}
.form__field {
  margin-bottom: 33px;
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
  background-color: #10579d;
  color: #fff;
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
  background-color: #093c70;
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
