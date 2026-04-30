<script setup>
import { RouterLink } from 'vue-router'
import { useFavorites } from '@/composables/useFavorites'
import { Star, StarFilled } from '@element-plus/icons-vue'

const props = defineProps({
  foods: { type: Array, required: true },
})

const fav = useFavorites()

function toggleFav(e, id) {
  e.preventDefault()
  const wasFav = fav.toggle('foods', id)
  if (wasFav === null) return
  ElMessage.success(wasFav ? '已取消收藏' : '已收藏')
}
</script>

<template>
  <section class="food-preview">
    <div class="container">
      <div class="food-preview__header">
        <h2 class="food-preview__title">舌尖上的湘西</h2>
        <p class="food-preview__subtitle">品味地道湘西美食，感受独特饮食文化</p>
      </div>

      <div class="food-preview__grid">
        <RouterLink
          v-for="item in foods.slice(0, 4)"
          :key="item.id"
          :to="`/food/${item.id}`"
          class="food-preview__card"
        >
          <div class="food-preview__image-wrap">
            <img :src="item.coverImage" :alt="item.name" class="food-preview__image" />
            <button
              class="food-preview__fav"
              :class="{ 'is-active': fav.isFav('foods', item.id) }"
              @click="toggleFav($event, item.id)"
            >
              <el-icon :size="14"><StarFilled v-if="fav.isFav('foods', item.id)" /><Star v-else /></el-icon>
            </button>
          </div>
          <div class="food-preview__info">
            <h3 class="food-preview__name">{{ item.name }}</h3>
            <span class="food-preview__popularity">{{ item.popularity }}人推荐</span>
          </div>
        </RouterLink>
      </div>

      <div class="food-preview__more">
        <RouterLink to="/foods" class="food-preview__more-link">
          查看更多美食 →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.food-preview {
  padding: var(--spacing-2xl) 0;
}

.food-preview__header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.food-preview__title {
  font-size: 28px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.food-preview__subtitle {
  font-size: 16px;
  color: var(--color-text-secondary);
}

.food-preview__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.food-preview__card {
  text-decoration: none;
  color: inherit;
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.food-preview__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.food-preview__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.food-preview__fav {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  transition: all var(--transition-fast);
}

.food-preview__fav:hover,
.food-preview__fav.is-active {
  color: #e6a23c;
  background: #fff;
}

.food-preview__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.food-preview__card:hover .food-preview__image {
  transform: scale(1.05);
}

.food-preview__info {
  padding: var(--spacing-md);
  text-align: center;
}

.food-preview__name {
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.food-preview__popularity {
  font-size: 13px;
  color: var(--color-text-light);
}

.food-preview__more {
  text-align: center;
  margin-top: var(--spacing-xl);
}

.food-preview__more-link {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.food-preview__more-link:hover {
  color: var(--color-primary-dark);
}

@media (max-width: 1200px) {
  .food-preview__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .food-preview__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
}
</style>
