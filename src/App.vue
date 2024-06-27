<script setup lang="ts">
const msg = ref('Hello World')
const { counter, x, y } = useTest()
</script>

<template>
  <div class="text-purple-900 text-center">
    {{ msg }}
  </div>
  <div class="text-green-900 text-xl font-bold">
    Composable Data: {{ counter }} | {{ x }} | {{ y }}
  </div>
  <router-view />
</template>

<style>
</style>
