import { useUserStore } from '@/stores/user'

export function useFavorites() {
  const store = useUserStore()
  const router = useRouter()
  const route = useRoute()

  /**
   * Toggle favorite for a given type + id.
   * Returns: null if not logged in (redirects to login), true if it was a favorite (now removed), false if it was not a favorite (now added).
   */
  function toggle(type, id) {
    if (!store.isLoggedIn) {
      router.push({ path: '/login', query: { redirect: route.fullPath } })
      return null
    }
    const wasFav = store.isFavorite(type, id)
    store.toggleFavorite(type, id)
    return wasFav
  }

  function isFav(type, id) {
    return store.isFavorite(type, id)
  }

  return { favorites: computed(() => store.favorites), toggle, isFav }
}
