import { useUserStore } from '@/stores/user'

export function useAuth() {
  const store = useUserStore()

  function requireAuth() {
    if (!store.isLoggedIn) {
      return { allowed: false, redirect: '/login' }
    }
    return { allowed: true }
  }

  function guestOnly() {
    if (store.isLoggedIn) {
      return { allowed: false, redirect: '/' }
    }
    return { allowed: true }
  }

  return { isLoggedIn: computed(() => store.isLoggedIn), userInfo: computed(() => store.userInfo), login: store.login, register: store.register, logout: store.logout, requireAuth, guestOnly }
}
