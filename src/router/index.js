import { createRouter, createWebHistory } from 'vue-router'
import PeoplePage from '@/views/PeoplePage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import Settings from '@/views/Settings.vue'
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/people',
    name: 'People',
    component: PeoplePage,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
