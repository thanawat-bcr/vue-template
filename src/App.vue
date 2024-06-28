<script setup lang="ts">
import Toast from 'primevue/toast'

const { onRefreshToken } = useAuthStore()
onMounted(async () => {
  await onRefreshToken()
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <Toast position="top-center" group="tc" />
    <the-navbar />
    <router-view class="flex-grow m-3" />
  </div>
</template>

<style>
</style>
