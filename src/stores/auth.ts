import type { Token, TokenRefreshResponse } from '@/types/models/auth'

export const useAuthStore = defineStore('auth', () => {
  const username: Ref<string> = ref('')
  const password: Ref<string> = ref('')

  const refresh: Ref<string | null> = ref(null)
  const access: Ref<string | null> = ref(null)
  const isAuth = computed(() => access.value !== null)

  const _setToken = (token: Token) => {
    refresh.value = token.refresh
    access.value = token.access
  }

  const login = async (_username: string, _password: string) => {
    username.value = _username
    password.value = _password

    await useFetch<Token>('/api/token/', { method: 'POST', body: { username: _username, password: _password } }).then((data) => {
      _setToken({ refresh: data.refresh, access: data.access })
      localStorage.setItem('refresh', data.refresh)
      localStorage.setItem('access', data.access)
    })
  }

  const onRefreshToken = async () => {
    const _refresh: string = localStorage.getItem('refresh') ?? ''
    if (!_refresh)
      return
    const { access } = await useFetch<TokenRefreshResponse>('/api/token/refresh/', { method: 'POST', body: { refresh: _refresh } })
    _setToken({ refresh: _refresh, access })
    localStorage.setItem('access', access)
  }

  const logout = async () => {
    refresh.value = null
    access.value = null
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
  }

  return {
    username,
    password,
    refresh,
    access,
    isAuth,
    login,
    logout,
    onRefreshToken,
  }
})
