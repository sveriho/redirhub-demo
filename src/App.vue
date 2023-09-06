<script setup>
import AppHeader from './components/AppHeader.vue'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <main class="flex">
    <NavMenu />
    <div class="grow">
      <AppHeader />
      <div class="p-8">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
