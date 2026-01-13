<template>
  <div id="app">
    <div class="main w-full h-full">
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
import HeaderVue from "./components/HeaderVue.vue";
</script>
