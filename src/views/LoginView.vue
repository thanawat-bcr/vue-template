<script setup lang="ts">
import { useRouter } from 'vue-router'

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')

const { login } = useAuthStore()
const router = useRouter()
function _login() {
  login(username.value, password.value).then(() => {
    router.push('/')
  })
}
</script>

<template>
  <div class="login-view flex flex-col gap-y-4">
    <h1 class="text-emerald-800 text-3xl font-bold">
      Login Page
    </h1>
    <div class="flex flex-col gap-y-1">
      <label for="username">Username</label>
      <InputText
        id="username" v-model="username"
      />
    </div>
    <div class="flex flex-col gap-y-1">
      <label for="password">Password</label>
      <Password
        id="password" v-model="password" :feedback="false"
        :pt="{ input: { root: { class: 'w-full' } } }"
      />
    </div>
    <Button label="Submit" @click="_login()" />
  </div>
</template>

<style>
</style>
