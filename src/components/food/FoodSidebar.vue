<script setup>
import { useFoodStore } from '@/stores/food'
import { FOOD_CATEGORY_MAP } from '@/constants'

const store = useFoodStore()
</script>

<template>
  <aside class="food-sidebar">
    <div class="food-sidebar__section">
      <h3 class="food-sidebar__title">美食分类</h3>
      <ul class="food-sidebar__categories">
        <li
          v-for="(label, key) in FOOD_CATEGORY_MAP"
          :key="key"
          class="food-sidebar__category"
          :class="{ 'is-active': store.selectedCategory === key }"
          @click="store.selectedCategory = key"
        >
          {{ label }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.food-sidebar {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-lg));
}

.food-sidebar__title {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
}

.food-sidebar__categories {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.food-sidebar__category {
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.food-sidebar__category:hover {
  color: #922c21;
  background: rgba(146, 44, 33, 0.04);
}

.food-sidebar__category.is-active {
  color: #922c21;
  background: rgba(146, 44, 33, 0.08);
  font-weight: 600;
}
</style>
