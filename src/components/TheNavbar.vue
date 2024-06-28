<script setup lang='ts'>
import { useRouter } from 'vue-router'

const { logout } = useAuthStore()
const { isAuth } = storeToRefs(useAuthStore())
const router = useRouter()
const items = computed(() => ([
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    },
  },
  {
    label: 'Province',
    icon: 'pi pi-compass',
    command: () => {
      router.push('/province')
    },
  },
  {
    label: 'Address',
    icon: 'pi pi-address-book',
    command: () => {
      router.push('/address')
    },
  },
  {
    label: isAuth.value ? 'Logout' : 'Login',
    icon: 'pi pi-user',
    command: () => {
      if (isAuth.value) {
        logout().then(() => router.push('/login'))
      }
      else {
        router.push('/login')
      }
    },

  },
]))
</script>

<template>
  <div class="the-navbar">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
  </div>
</template>
