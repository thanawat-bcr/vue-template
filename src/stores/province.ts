import type { Location } from '@/types/models/location'

export const useProvinceStore = defineStore('province', () => {
  const provinces = ref<Location[]>([])
  const districts = ref<Location[]>([])
  const subDistricts = ref<Location[]>([])

  const fetchProvinces = async () => {
    provinces.value = await useFetch('/api/provinces/', { method: 'GET' })
    districts.value = []
    subDistricts.value = []
  }

  const fetchDistricts = async (id: number) => {
    districts.value = await useFetch(`/api/provinces/${id}/district/`, { method: 'GET' })
    subDistricts.value = []
  }

  const fetchSubDistricts = async (id: number) => {
    subDistricts.value = await useFetch(`/api/districts/${id}/subdistrict/`, { method: 'GET' })
  }
  return { provinces, districts, subDistricts, fetchProvinces, fetchDistricts, fetchSubDistricts }
})
