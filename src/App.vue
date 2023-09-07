<script setup>
import AppHeader from './components/AppHeader.vue'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <main class="flex">
    <NavMenu />
    <div class="ml-[260px] grow">
      <AppHeader />
      <div class="p-8 pb-0">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
