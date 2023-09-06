<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import ShuffleIcon from './icons/IconShuffle.vue'

const percentage = ref(80)
</script>

<template>
  <Card
    :pt="{
      root: { class: 'm-6 p-4 bg-gray-50 rounded-lg' },
      body: { class: 'py-0' },
      content: { class: 'py-0' }
    }"
  >
    <template #content>
      <div class="mb-4 flex items-center justify-start gap-3">
        <div class="w-8 h-8 rounded bg-warning-500 flex items-center justify-center">
          <ShuffleIcon class="text-warning-25" />
        </div>
        <span class="text-sm text-gray-700 font-medium">Redirects Basic</span>
      </div>
      <div class="progressbar-container">
        <div class="flex justify-between text-gray-400">
          <span class="text-xs font-extralight">You're at {{ percentage }}% of your plan</span>
          <i class="pi pi-info-circle"></i>
        </div>
        <ProgressBar
          :pt="{
            root: { class: 'my-2 h-2 rounded-lg bg-gray-200' },
            label: { class: 'hidden' },
            value: { class: 'h-2 rounded-lg bg-primary-600' }
          }"
          :value="percentage"
        />
      </div>
      <div class="flex justify-center mt-2">
        <Button class="text-sm text-primary-700 font-semibold" label="Upgrade" text />
      </div>
    </template>
  </Card>
</template>
