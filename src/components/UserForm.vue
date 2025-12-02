<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  btnText: String,
  submit: Function,
  linkTo: String,
  linkText: String,
})
const username = ref('')
const password = ref('')
const message = ref('')

function setMessage(text) {
  message.value = text

  setTimeout(() => {
    message.value = ''
  }, 2500)
}

function handleSubmit() {
  if (!username.value || !password.value) {
    setMessage('All fields are required')
    return
  }
  props.submit(username.value, password.value, setMessage)
  username.value = ''
  password.value = ''
}
</script>
<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h2 class="form__title">{{ title }}</h2>
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
      <button type="submit" class="form__button">{{ btnText }}</button>
    </div>
    <div class="form__footer">
      <p class="form__footer-text">{{ linkText }}</p>
      <router-link :to="linkTo" class="form__footer-link">
        {{ title === 'Login' ? 'Signup' : 'Login' }}
      </router-link>
    </div>
  </form>
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
.form__footer {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin: 10px;
}
.form__footer-text {
  font-size: 16px;
}
.form__footer-link {
  color: #03386e;
  font-size: 16px;
  font-weight: bold;
}
</style>
