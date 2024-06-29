<script setup lang='ts'>
import type { Location } from '@/types/models/location'

defineProps<{
  title: string
  items: Location[]
}>()

const emit = defineEmits<{
  select: [id: number]
}>()
</script>

<template>
  <div class="column-list flex flex-col flex-1 h-full gap-y-2">
    <div class="text-4xl font-bold text-emerald-900 text-center">
      {{ title }}
    </div>
    <div class="overflow-y-auto flex flex-col flex-grow gap-y-2 border p-3 rounded-lg">
      <div v-for="item in items" :key="item.id" class="flex flex-col p-3 bg-white rounded-md shadow-md hover:shadow-lg cursor-pointer" @click="emit('select', item.id)">
        <span class="text-lg font-bold text-emerald-600">{{ item.name_th }}  </span>
        <span class="text-sm text-emerald-500">{{ item.name_en }}<span v-if="item?.zip_code" class="font-light ml-1">({{ item.zip_code }})</span></span>
      </div>
    </div>
  </div>
</template>
