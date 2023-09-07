<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import RedirectCard from './RedirectCard.vue'

const appearanceOptions = ref([
  { icon: 'pi pi-align-justify', value: 'List' },
  { icon: 'pi pi-align-center', value: 'Sidebar' }
])

const appearanceValue = ref(appearanceOptions.value[0])

const data = [
  {
    id: 0,
    name: 'RedirHub Name line',
    image: '../assets/images/1.png',
    clicks: 2,
    type: 'Permanent (301)',
    date: new Date('08-16-2023'),
    from: 'console.dnspod.cn/dns/djiankong.com/record',
    to: 'https://www.redirhub.com',
    tags: [
      { id: 1, name: 'New' },
      { id: 2, name: 'Personal' }
    ]
  },
  {
    id: 1,
    name: 'Facebook redirect',
    image: '../assets/images/2.png',
    clicks: 2,
    type: 'Permanent (301)',
    date: new Date('08-16-2023'),
    from: 'console.dnspod.cn/dns/djiankong.com/record',
    to: 'https://www.redirhub.com',
    tags: []
  },
  {
    id: 2,
    name: 'Loom redirect',
    image: '../assets/images/3.png',
    clicks: 2,
    type: 'Permanent (301)',
    date: new Date('08-16-2023'),
    from: 'console.dnspod.cn/dns/djiankong.com/record',
    to: 'https://www.redirhub.com',
    tags: [
      { id: 1, name: 'New' },
      { id: 2, name: 'Personal' }
    ]
  },
  {
    id: 3,
    name: 'console.dnspod.cn/dns/djiankong.com/record',
    image: '../assets/images/4.png',
    clicks: 2,
    type: 'Permanent (301)',
    date: new Date('08-16-2023'),
    from: 'console.dnspod.cn/dns/djiankong.com/record',
    to: 'https://www.redirhub.com',
    tags: []
  }
]
</script>

<template>
  <section class="list-container">
    <div class="my-6 flex justify-between">
      <Button
        class="flex flex-row-reverse bg-white border-gray-300 text-gray-700"
        label="Filter"
        icon="pi pi-bars"
        iconPos="right"
        outlined
      />
      <div class="flex items-center gap-4">
        <span class="text-base text-gray-700">Appearance</span>
        <SelectButton
          v-model="appearanceValue"
          :options="appearanceOptions"
          optionLabel="value"
          dataKey="value"
          aria-labelledby="custom"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
          </template>
        </SelectButton>
      </div>
    </div>
    <div class="flex flex-col">
      <RedirectCard v-for="item in data" :key="item.id" :item="item" />
    </div>
  </section>
</template>
