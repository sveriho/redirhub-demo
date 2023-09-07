<script setup>
import { ref } from 'vue'
import Menu from 'primevue/menu'

import { routes } from '../router'
import LogoIcon from './icons/IconLogo.vue'
import PlanInfo from './PlanInfo.vue'

const items = ref(routes)
</script>

<template>
  <aside
    class="w-260 h-screen fixed bg-white flex flex-col justify-between border-r border-solid border-gray-200"
  >
    <div class="aside-header">
      <div class="pl-4 py-3">
        <LogoIcon />
      </div>
      <Menu
        :model="items"
        :pt="{
          root: { class: 'w-full' },
          action: {
            class: 'group px-5 py-3 hover:bg-gray-100 cursor-pointer items-center gap-5'
          },
          label: {
            class: 'font-semibold text-sm text-gray-500 group-hover:text-gray-700'
          },
          icon: { class: 'text-gray-600 text-xl group-hover:text-warning-500' }
        }"
      >
        <template #item="{ label, item, props }">
          <router-link :to="item.path" class="flex" v-bind="props.action">
            <span class="nav-icon" v-bind="props.icon" />
            <span class="nav-label" v-bind="props.label">{{ label }}</span>
          </router-link>
        </template>
      </Menu>
    </div>
    <PlanInfo />
  </aside>
</template>
