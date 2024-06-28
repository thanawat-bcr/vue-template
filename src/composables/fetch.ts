import { ofetch } from 'ofetch'

export const useFetch = ofetch.create({
  // baseURL: import.meta.env.VITE_BASE_API,
  baseURL: 'http://localhost:8000',
  async onRequest({ options }) {
    const token = localStorage.getItem('access') ?? undefined

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  },
})
