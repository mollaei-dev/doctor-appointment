<script setup>
const props = defineProps({ listItems: Array, actionLabel: String })
const emit = defineEmits(['itemAction'])
</script>
<template>
  <ul class="list">
    <li class="list__item" v-for="(item, index) in listItems" :key="index">
      <p class="list__item-text">{{ item }}</p>
      <button class="list__item-button" @click="emit('itemAction', index)">
        {{ actionLabel }}
      </button>
    </li>
  </ul>
</template>
<style scoped>
* {
  color: #fff;
}
.list__item--selected {
  text-decoration: line-through;
}
.list {
  list-style: none;
  padding: 0;
}
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.13);
}
.list__item-text {
  color: #fff;
  font-size: 20px;
  flex-wrap: nowrap;
}
.list__item-button {
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 7px;
  border: 1px solid white;
  background-color: rgb(68, 68, 68);
  cursor: pointer;
  text-align: center;
}
.list__item-button:hover {
  box-shadow: 0 0 10px #42a5f5;
  border: 2px solid #42a5f5;
}
.list__item-button--selected {
  text-decoration: line-through;
}
</style>
