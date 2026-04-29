<script setup>
import { RouterLink } from 'vue-router'
import { formatNumber } from '@/utils/formatters'
import { FOOD_CATEGORY_MAP } from '@/constants'

defineProps({
  food: { type: Object, required: true },
})
</script>

<template>
  <RouterLink :to="`/food/${food.id}`" class="food-card">
    <div class="food-card__image-wrap">
      <img :src="food.coverImage" :alt="food.name" class="food-card__image" />
      <span class="food-card__category">{{ FOOD_CATEGORY_MAP[food.category] }}</span>
      <div v-if="food.heat > 0" class="food-card__heat">
        <span v-for="n in 3" :key="n" class="food-card__heat-dot" :class="{ 'is-active': n <= food.heat }"></span>
      </div>
    </div>
    <div class="food-card__body">
      <h3 class="food-card__name">{{ food.name }}</h3>
      <div class="food-card__tags">
        <span v-for="tag in food.tags" :key="tag" class="food-card__tag">{{ tag }}</span>
      </div>
      <div class="food-card__footer">
        <div class="food-card__flavors">
          <span v-for="f in food.flavor" :key="f" class="food-card__flavor">{{ f }}</span>
        </div>
        <span class="food-card__popularity">{{ formatNumber(food.popularity) }}人推荐</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.food-card {
  display: block;
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  text-decoration: none;
  color: inherit;
}

.food-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.food-card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.food-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.food-card:hover .food-card__image {
  transform: scale(1.05);
}

.food-card__category {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(26, 54, 93, 0.85);
  color: #fff;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 3px;
  letter-spacing: 1px;
}

.food-card__heat {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 3px;
}

.food-card__heat-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.food-card__heat-dot.is-active {
  background: #ef4444;
  box-shadow: 0 0 4px rgba(239, 68, 68, 0.6);
}

.food-card__body {
  padding: var(--spacing-md);
}

.food-card__name {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.food-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.food-card__tag {
  font-size: 12px;
  color: #922c21;
  background: rgba(146, 44, 33, 0.08);
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid rgba(146, 44, 33, 0.15);
}

.food-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.food-card__flavors {
  display: flex;
  gap: 6px;
}

.food-card__flavor {
  font-size: 12px;
  color: #b8860b;
  background: rgba(184, 134, 11, 0.1);
  padding: 2px 8px;
  border-radius: 3px;
}

.food-card__popularity {
  font-size: 13px;
  color: var(--color-text-light);
}
</style>
