<script setup>
import { defineProps, ref } from 'vue'
import moment from 'moment'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Tag from 'primevue/tag'
import ActivityIcon from './icons/IconActivity.vue'
import ArrowRightCircleIcon from './icons/IconArrowRightCircle.vue'
import CalendarIcon from './icons/IconCalendar.vue'
import CommandIcon from './icons/IconCommand.vue'

const props = defineProps(['item'])

const formatDate = (date) => {
  return moment(date).format('DD.MM.yyyy')
}

const imageUrl = new URL(props.item.image, import.meta.url).href

const checked = ref(false)
</script>

<template>
  <Card class="my-2">
    <template #content>
      <section class="flex items-start gap-5">
        <div class="my-3 flex items-center justify-between gap-8">
          <Checkbox v-model="checked" :binary="true" />
          <Avatar class="w-40 h-40 p-overlay-badge" :image="imageUrl" size="large" shape="circle" />
        </div>
        <div class="w-full">
          <div class="my-4 flex items-center justify-between">
            <h3 class="w-72 overflow-hidden text-ellipsis text-lg">{{ props.item.name }}</h3>
            <div class="flex items-center gap-6">
              <div class="flex gap-3 text-sm font-normal color-gray-500">
                <span class="inline-flex gap-2">
                  <ActivityIcon />{{ props.item.clicks }} clicks
                </span>
                <span class="inline-flex gap-2"> <CommandIcon />{{ props.item.type }} </span>
                <span class="inline-flex gap-2">
                  <CalendarIcon />{{ formatDate(props.item.date) }}
                </span>
              </div>
              <div class="flex gap-3 text-sm">
                <Button
                  class="!bg-primary-50 border-gray-300 text-primary-600"
                  icon="pi pi-server"
                  size="small"
                  type="button"
                  outlined
                />
                <Button
                  class="bg-white border-gray-300 text-gray-700"
                  icon="pi pi-chart-pie"
                  size="small"
                  type="button"
                  outlined
                />
                <Button
                  class="bg-white border-gray-300 text-gray-700"
                  icon="pi pi-arrow-right"
                  size="small"
                  type="button"
                  outlined
                />
              </div>
            </div>
          </div>
          <div class="my-4 flex items-center gap-5">
            <InputText :value="props.item.from" class="grow font-semibold" />
            <ArrowRightCircleIcon />
            <InputText
              :value="props.item.to"
              class="grow font-medium border-green-500 text-green-700"
            />
          </div>
          <div v-if="props.item.tags.length" class="my-4 flex items-center gap-3">
            <i class="pi pi-tag"></i>
            <Tag
              v-for="item in props.item.tags"
              :pt="{
                root: { class: 'py-0.5 px-2.5 bg-orange-50 rounded-2xl' },
                value: { class: 'text-orange-700 text-sm font-medium' }
              }"
              :key="item.id"
              :value="item.name"
            />
          </div>
        </div>
      </section>
    </template>
  </Card>
</template>
