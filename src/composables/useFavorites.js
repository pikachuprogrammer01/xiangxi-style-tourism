import { useUserStore } from '@/stores/user'

export function useFavorites() {
  const store = useUserStore()

  function toggle(type, id) {
    if (!store.isLoggedIn) {
      return false
    }
    store.toggleFavorite(type, id)
    return true
  }

  function isFav(type, id) {
    return store.isFavorite(type, id)
  }

  return { favorites: computed(() => store.favorites), toggle, isFav }
}
