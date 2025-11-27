<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const user = computed(() => userStore.currentUser)

onMounted(() => {
  const saveUser = JSON.parse(localStorage.getItem('currentUser'))
  if (saveUser) {
    userStore.setUser(saveUser)
  } else {
    router.push('login')
  }
})

function logout() {
  userStore.logOut()
  router.push('login')
}
</script>
<template>
  <div v-if="user" class="dashboard">
    <h1 class="dashboard__title">
      Welcome , <span class="dashboard__email">{{ user.username }}</span>
    </h1>
    <p class="dashboard__text">This is your dashboard</p>
    <p class="dashboard__text">No turn has been recorded❗</p>
    <ul>
      <li></li>
    </ul>
    <button class="dashboard__logout" @click="logout">Booking</button>
    <button class="dashboard__logout" @click="logout">Log Out</button>
  </div>
  <div v-else class="dashboard">
    <p class="dashboard__alert">you are not logged in</p>
    <RouterLink class="dashboard__link" to="login">login</RouterLink>
  </div>
</template>
<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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
.dashboard__title {
  font-size: 22px;
}
.dashboard__email {
  color: orange;
}

.dashboard__text {
  font-size: 25px;
}
.dashboard__alert {
  font-size: 30px;
  font-weight: bold;
}
.dashboard__link {
  font-size: 30px;
  font-weight: bold;
  color: orange;
}
.dashboard__logout {
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  padding: 15px 0;
  display: block;
  font-size: 25px;
  width: 100%;
  margin-top: 46px;
  font-weight: bolder;
  transition: all 200ms;
  font-family: inherit;
  border: none;
  outline: none;
}
.dashboard__logout:hover {
  cursor: pointer;
  background-color: rgb(240, 223, 192);
}
</style>
