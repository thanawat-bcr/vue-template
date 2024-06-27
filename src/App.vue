<script setup lang="ts">
const { fetchFacts } = useCatStore()
const { facts } = storeToRefs(useCatStore())
</script>

<template>
  <div class="flex flex-col gap-y-3 items-center h-screen p-4">
    <Button class="w-full" label="Fetch" @click="fetchFacts" />
    <div class="text-purple-900 text-center">
      Facts Length = {{ facts.length }}
    </div>
    <Card
      v-for="(fact, index) in facts" :key="index" :pt="{
        root: 'w-[80%]',
      }"
    >
      <template #title>
        Card No.{{ index }}
      </template>
      <template #content>
        <div>{{ fact.text }}</div>
      </template>
    </Card>
  </div>
</template>

<style>
</style>
