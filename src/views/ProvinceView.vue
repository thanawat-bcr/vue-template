<script setup lang='ts'>
useFetch('/api/provinces/', { method: 'GET' })
</script>

<template>
  <div class="province-view flex h-full justify-center items-center">
    <span class="text-4xl font-bold text-emerald-600">PROVINCE</span>
  </div>
</template>
