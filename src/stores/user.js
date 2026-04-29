import { defineStore } from 'pinia'
import {
  getItem,
  setItem,
  removeItem,
  getUsers,
  saveUsers,
  getFavorites,
  saveFavorites,
  getHistory,
  saveHistory,
} from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const userInfo = ref(null)
  const favorites = ref({ attractions: [], foods: [] })
  const history = ref([])

  function init() {
    const saved = getItem('currentUser')
    if (saved) {
      isLoggedIn.value = true
      userInfo.value = saved
    }
    favorites.value = getFavorites()
    history.value = getHistory()
  }

  function login(username, password) {
    const users = getUsers()
    const user = users.find((u) => u.username === username && u.password === password)
    if (!user) return false
    isLoggedIn.value = true
    userInfo.value = { id: user.id, username: user.username, email: user.email, phone: user.phone }
    setItem('currentUser', userInfo.value)
    return true
  }

  function register(userData) {
    const users = getUsers()
    const exists = users.find(
      (u) => u.username === userData.username || u.email === userData.email,
    )
    if (exists) return { success: false, message: '用户名或邮箱已被注册' }
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString().split('T')[0],
    }
    users.push(newUser)
    saveUsers(users)
    return { success: true }
  }

  function logout() {
    isLoggedIn.value = false
    userInfo.value = null
    removeItem('currentUser')
  }

  function toggleFavorite(type, id) {
    const list = favorites.value[type]
    const index = list.indexOf(id)
    if (index > -1) {
      list.splice(index, 1)
    } else {
      list.push(id)
    }
    saveFavorites(favorites.value)
  }

  function isFavorite(type, id) {
    return favorites.value[type].includes(id)
  }

  function addToHistory(item) {
    const existing = history.value.findIndex((h) => h.id === item.id && h.type === item.type)
    if (existing > -1) {
      history.value.splice(existing, 1)
    }
    history.value.unshift({ ...item, time: Date.now() })
    if (history.value.length > 50) {
      history.value = history.value.slice(0, 50)
    }
    saveHistory(history.value)
  }

  function clearHistory() {
    history.value = []
    saveHistory(history.value)
  }

  init()

  return {
    isLoggedIn,
    userInfo,
    favorites,
    history,
    login,
    register,
    logout,
    toggleFavorite,
    isFavorite,
    addToHistory,
    clearHistory,
  }
})
