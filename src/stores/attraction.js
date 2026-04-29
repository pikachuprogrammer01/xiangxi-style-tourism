import { defineStore } from 'pinia'
import { attractions } from '@/constants/attractions.js'
import { ref, computed } from 'vue'

export const useAttractionStore = defineStore('attraction', () => {
  const list = ref(attractions)
  const searchKeyword = ref('')
  const selectedCategory = ref('all')
  const sortBy = ref('default')

  const filteredList = computed(() => {
    let result = [...list.value]

    if (searchKeyword.value) {
      const kw = searchKeyword.value.toLowerCase()
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(kw) ||
          a.location.toLowerCase().includes(kw) ||
          a.tags.some((t) => t.toLowerCase().includes(kw)),
      )
    }

    if (selectedCategory.value !== 'all') {
      result = result.filter((a) => a.category === selectedCategory.value)
    }

    switch (sortBy.value) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'hot':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
        break
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return result
  })

  function getById(id) {
    return list.value.find((a) => a.id === Number(id))
  }

  return { list, searchKeyword, selectedCategory, sortBy, filteredList, getById }
})
