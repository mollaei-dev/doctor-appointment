<script setup>
const props = defineProps({
  listItems: Array,
  actionLabel: String,
  isReserved: { type: Function, default: () => false },
})
const emit = defineEmits(['itemAction'])
</script>

<template>
  <ul class="list">
    <li class="list__item" v-for="(item, index) in listItems" :key="index">
      <p class="list__item-text">{{ item }}</p>
      <button
        class="list__item-button"
        @click="emit('itemAction', item)"
        :disabled="isReserved(item)"
        :class="{
          'list__item-button--reserve': actionLabel === 'Reserve',
          'list__item-button--remove': actionLabel === 'Cancel',
        }"
      >
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
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 0 7px #fff;
  border: 2px solid #fff;
}
.list__item-text {
  color: #fff;
  font-size: 20px;
  flex-wrap: nowrap;
}
.list__item-button {
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 7px;
  border: 3px solid white;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  text-align: center;
}
.list__item-button--remove:hover {
  box-shadow: 0 0 15px #e65100;
  border: 3px solid #e65100;
}
.list__item-button--reserve:hover {
  box-shadow: 0 0 15px #42a5f5;
  border: 3px solid #42a5f5;
}
.list__item-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
  background-color: gray;
  border: none;
}
</style>