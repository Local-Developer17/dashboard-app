<template>
  <div id="app">
    <div class="main w-full h-full px-16 py-8 overflow-hidden">
      <div class="left h-full w-full flex flex-col">
        <HeaderVue />
        <main class="h-full">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderVue from './components/HeaderVue.vue'
import { provide, ref } from 'vue'
const selectedFilter = ref('')
const searchedVal = ref('')
const blueButton = ref('bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600')
provide('selectedFilter', selectedFilter)
provide('searchedVal', searchedVal)
provide('blueButton', blueButton)
</script>
