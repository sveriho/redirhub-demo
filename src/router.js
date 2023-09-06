import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './components/NotFound.vue'
import RedirectsContent from './components/RedirectsContent.vue'

export const routes = [
  {
    name: 'Home',
    path: '/',
    icon: 'pi pi-fw pi-home',
    label: 'Home',
    component: NotFound
  },
  {
    name: 'Redirects',
    path: '/redirects',
    icon: 'pi pi-fw pi-cog',
    label: 'Redirects',
    component: RedirectsContent
  },
  {
    name: 'UrlShortener',
    path: '/urlshortener',
    icon: 'pi pi-fw pi-link',
    label: 'URL shortener',
    component: NotFound
  },
  {
    name: 'Monitor',
    path: '/monitor',
    icon: 'pi pi-fw pi-eye',
    label: 'Monitor',
    component: NotFound
  },
  {
    name: 'Hostnames',
    path: '/hostnames',
    icon: 'pi pi-fw pi-server',
    label: 'Hostnames',
    component: NotFound
  },
  {
    label: 'Subscriptions',
    icon: 'pi pi-fw pi-database',
    path: '/subscriptions',
    component: NotFound
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'pi pi-fw pi-cog',
    label: 'Settings',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
