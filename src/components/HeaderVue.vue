<template>
  <header class="h-24 flex items-center justify-end px-16">
    <nav class="bg-white p-2 flex gap-4 rounded-full border-solid">
      <RouterLink
        v-for="link in routerLinks"
        :key="link.to"
        :to="link.to"
        class="link py-2 px-4 rounded-full font-medium"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const routerLinks = [
  { to: '/', name: 'Dashboard' },
  { to: '/people', name: 'People' },
  { to: '/settings', name: 'Settings' },
]
</script>

<style scoped>
.link.router-link-active {
  background: #111827;
  color: white;
}
</style>
