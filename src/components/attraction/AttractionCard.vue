<script setup>
import { RouterLink } from 'vue-router'
import { formatPrice, truncateText } from '@/utils/formatters'
import { CATEGORY_MAP } from '@/constants'
import { useUserStore } from '@/stores/user'
import { Star, StarFilled } from '@element-plus/icons-vue'

const props = defineProps({
  attraction: { type: Object, required: true },
})

const userStore = useUserStore()

function toggleFav(e) {
  e.preventDefault()
  const isFav = userStore.isFavorite('attractions', props.attraction.id)
  userStore.toggleFavorite('attractions', props.attraction.id)
  ElMessage.success(isFav ? '已取消收藏' : '已收藏')
}
</script>

<template>
  <RouterLink :to="`/attraction/${attraction.id}`" class="attraction-card">
    <div class="attraction-card__image-wrap">
      <img :src="attraction.coverImage" :alt="attraction.name" class="attraction-card__image" />
      <span class="attraction-card__category">{{ CATEGORY_MAP[attraction.category] }}</span>
      <button
        class="attraction-card__fav"
        :class="{ 'is-active': userStore.isFavorite('attractions', attraction.id) }"
        @click="toggleFav"
      >
        <el-icon :size="16"><StarFilled v-if="userStore.isFavorite('attractions', attraction.id)" /><Star v-else /></el-icon>
      </button>
    </div>
    <div class="attraction-card__body">
      <div class="attraction-card__rating">
        <el-rate
          :model-value="attraction.rating"
          disabled
          show-score
          :score-template="`${attraction.rating}`"
          size="small"
        />
      </div>
      <h3 class="attraction-card__name">{{ attraction.name }}</h3>
      <div class="attraction-card__tags">
        <span v-for="tag in attraction.tags" :key="tag" class="attraction-card__tag">{{ tag }}</span>
      </div>
      <p class="attraction-card__desc">{{ truncateText(attraction.description, 60) }}</p>
      <div class="attraction-card__footer">
        <span class="attraction-card__price">{{ formatPrice(attraction.price) }}</span>
        <span class="attraction-card__cta">查看详情 →</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.attraction-card {
  display: block;
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  text-decoration: none;
  color: inherit;
}

.attraction-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.attraction-card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.attraction-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.attraction-card:hover .attraction-card__image {
  transform: scale(1.05);
}

.attraction-card__category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(26, 54, 93, 0.85);
  color: #fff;
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 3px;
  letter-spacing: 1px;
}

.attraction-card__fav {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
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

.attraction-card__fav:hover,
.attraction-card__fav.is-active {
  color: #e6a23c;
  background: #fff;
}

.attraction-card__fav.is-active {
  color: #e6a23c;
}

.attraction-card__body {
  padding: var(--spacing-md);
}

.attraction-card__name {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.attraction-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.attraction-card__tag {
  font-size: 12px;
  color: #922c21;
  background: rgba(146, 44, 33, 0.08);
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid rgba(146, 44, 33, 0.15);
}

.attraction-card__desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.attraction-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.attraction-card__price {
  font-size: 18px;
  font-weight: 700;
  color: #922c21;
}

.attraction-card__cta {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 500;
}
</style>
