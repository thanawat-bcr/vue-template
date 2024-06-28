import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(ToastService)

useAuthStore().onRefreshToken().then(() => {
  app.use(router)
  router.isReady().then(() => {
    app.mount('#app')
  })
})
