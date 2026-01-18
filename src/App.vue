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
provide('selectedFilter', selectedFilter)
</script>
