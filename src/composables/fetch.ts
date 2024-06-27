import { ofetch } from 'ofetch'

export const useFetch = ofetch.create({
  baseURL: import.meta.env.VITE_BASE_API,
  async onRequest({ options }) {
    const token = localStorage.getItem('token') ?? undefined

    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
    }
  },
})
