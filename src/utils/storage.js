const STORAGE_PREFIX = 'xxfy_'

function key (name) {
  return STORAGE_PREFIX + name
}

export function getItem (name) {
  try {
    const raw = localStorage.getItem(key(name))
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setItem (name, value) {
  try {
    localStorage.setItem(key(name), JSON.stringify(value))
  } catch {
    // 本地存储已满或不可用
  }
}

export function removeItem (name) {
  localStorage.removeItem(key(name))
}

export function getUsers () {
  return getItem('users') || []
}

export function saveUsers (users) {
  setItem('users', users)
}

export function getFavorites (userId) {
  return (
    getItem(`favorites_${userId}`) || {
      attractions: [],
      foods: [],
    }
  )
}

export function saveFavorites (userId, favorites) {
  setItem(`favorites_${userId}`, favorites)
}

export function getHistory (userId) {
  return getItem(`history_${userId}`) || []
}

export function saveHistory (userId, history) {
  setItem(`history_${userId}`, history)
}
