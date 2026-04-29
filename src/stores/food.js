import { defineStore } from 'pinia'
import { foods } from '@/constants/foods.js'
import { ref, computed } from 'vue'

export const useFoodStore = defineStore('food', () => {
  const list = ref(foods)
  const selectedCategory = ref('all')

  const filteredList = computed(() => {
    if (selectedCategory.value === 'all') return list.value
    return list.value.filter((f) => f.category === selectedCategory.value)
  })

  const categories = computed(() => {
    const cats = new Set(list.value.map((f) => f.category))
    return ['all', ...cats]
  })

  function getById(id) {
    return list.value.find((f) => f.id === Number(id))
  }

  return { list, selectedCategory, filteredList, categories, getById }
})
