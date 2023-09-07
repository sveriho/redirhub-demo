<script setup>
import Button from 'primevue/button'
import RedirectsList from './RedirectsList.vue'
</script>

<template>
  <section class="subheader flex items-center justify-between">
    <h1 class="text-3xl text-gray-700">Redirects</h1>
    <div class="button-group flex gap-4">
      <Button
        class="bg-white border-gray-300 text-gray-700"
        icon="pi pi-server"
        type="button"
        outlined
      />
      <Button
        class="bg-white border-gray-300 text-gray-700"
        icon="pi pi-chart-pie"
        type="button"
        outlined
      />
      <Button
        class="bg-white border-gray-300 text-gray-700"
        icon="pi pi-arrow-right"
        type="button"
        outlined
      />
      <Button class="bg-primary-600 text-white border-none" label="New redirect" type="button" />
    </div>
  </section>
  <RedirectsList />
</template>
