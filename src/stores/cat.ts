import type { Fact } from '@/types/models/cat'

export const useCatStore = defineStore('cat', () => {
  const facts: Ref<Fact[]> = ref([])

  const fetchFacts = async () => {
    useFetch('https://cat-fact.herokuapp.com/facts/', { method: 'GET' }).then((data) => {
      facts.value = data
    })
  }

  return {
    facts,
    fetchFacts,
  }
})
