<script setup lang='ts'>
const { provinces, districts, subDistricts } = storeToRefs(useProvinceStore())
const { fetchProvinces, fetchDistricts, fetchSubDistricts } = useProvinceStore()
onMounted(() => {
  fetchProvinces()
})
</script>

<template>
  <div class="province-view flex flex-col h-full overflow-hidden">
    <div class="flex gap-x-4 h-full outline">
      <ColumnList title="Provinces" :items="provinces" @select="fetchDistricts" />
      <ColumnList title="Districts" :items="districts" @select="fetchSubDistricts" />
      <ColumnList title="Sub Districts" :items="subDistricts" />
    </div>
  </div>
</template>
