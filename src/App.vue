<template>
  <div id="app">
    <div class="main w-full h-full">
      <div class="left h-full w-full flex flex-col">
        <HeaderVue />
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderVue from "./components/HeaderVue.vue";
</script>
<style scoped></style>
