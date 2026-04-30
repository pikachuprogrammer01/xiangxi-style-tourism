import { useUserStore } from '@/stores/user'

export function useFavorites () {
  const store = useUserStore()
  const router = useRouter()
  const route = useRoute()

  /**
   * 切换指定类型和 ID 的收藏夹
   * Returns: 如果未登录则为 null（重定向到登录），如果是收藏夹则为 true，如果不是收藏夹则为 false
   */
  function toggle (type, id) {
    if (!store.isLoggedIn) {
      router.push({ path: '/login', query: { redirect: route.fullPath } })
      return null
    }
    const wasFav = store.isFavorite(type, id)
    store.toggleFavorite(type, id)
    return wasFav
  }

  function isFav (type, id) {
    return store.isFavorite(type, id)
  }

  return { favorites: computed(() => store.favorites), toggle, isFav }
}
