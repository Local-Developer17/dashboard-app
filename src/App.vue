<template>
  <div id="app">
    <h1 v-if="state.isVisible" class="text-3xl font-bold underline">Your title is here!</h1>
    <button @click="state.isVisible = !state.isVisible">Click Here</button>
    <button @click="increment">Count is {{ state.count }}</button>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
let state = reactive({
  isVisible: false,
  count: 2,
})
const increment = () => {
  state.count++
}
</script>
<style scoped></style>
