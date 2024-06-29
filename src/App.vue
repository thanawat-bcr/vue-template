<script setup lang="ts">
import Toast from 'primevue/toast'

const { onRefreshToken } = useAuthStore()
onMounted(async () => {
  await onRefreshToken()
})
</script>

<template>
  <div id="layout" class="flex flex-auto flex-col pt-20 px-4 pb-4 h-screen">
    <Toast position="top-center" group="tc" />
    <the-navbar />
    <router-view />
  </div>
</template>

<style>
/* #app > #layout > div:not(.the-navbar) {
  border: 1px solid purple;
} */
</style>
