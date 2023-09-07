<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu'
import InputText from 'primevue/inputtext'

const menu = ref()
const value = ref(null)

const menuItems = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Action'
      },
      {
        label: 'Action'
      }
    ]
  }
])

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <header class="px-6 h-65 bg-white flex justify-between">
    <div class="flex items-center grow">
      <span class="p-input-icon-left w-full relative">
        <i class="pi pi-search absolute top-2 left-2 text-gray-600" />
        <InputText class="w-4/5 border-none pl-8" v-model="value" placeholder="Search" />
      </span>
    </div>
    <div class="user flex items-center gap-2">
      <Avatar icon="pi pi-user" class="mr-2" shape="circle" />
      <span
        class="flex items-center gap-2 cursor-pointer"
        @click="toggleMenu"
        aria-haspopup="true"
        aria-controls="userMenu"
      >
        <span class="text-base text-gray-700 font-semibold">John Smith</span>
        <i class="pi pi-angle-down" />
      </span>
      <Menu ref="menu" id="userMenu" :model="menuItems" :popup="true" />
    </div>
  </header>
</template>
