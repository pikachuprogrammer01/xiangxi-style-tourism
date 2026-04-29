const STORAGE_PREFIX = 'xxfy_'

function key(name) {
  return STORAGE_PREFIX + name
}

export function getItem(name) {
  try {
    const raw = localStorage.getItem(key(name))
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setItem(name, value) {
  try {
    localStorage.setItem(key(name), JSON.stringify(value))
  } catch {
    // localStorage full or unavailable
  }
}

export function removeItem(name) {
  localStorage.removeItem(key(name))
}

export function getUsers() {
  return getItem('users') || []
}

export function saveUsers(users) {
  setItem('users', users)
}

export function getFavorites() {
  return (
    getItem('favorites') || {
      attractions: [],
      foods: [],
    }
  )
}

export function saveFavorites(favorites) {
  setItem('favorites', favorites)
}

export function getHistory() {
  return getItem('history') || []
}

export function saveHistory(history) {
  setItem('history', history)
}
