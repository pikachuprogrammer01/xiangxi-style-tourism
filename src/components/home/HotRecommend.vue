<script setup>
import { RouterLink } from 'vue-router'
import { formatPrice, truncateText } from '@/utils/formatters'

defineProps({
  attractions: { type: Array, required: true },
})
</script>

<template>
  <section class="hot-recommend">
    <div class="container">
      <div class="hot-recommend__header">
        <h2 class="hot-recommend__title">热门推荐</h2>
        <p class="hot-recommend__subtitle">探索湘西最受欢迎的目的地</p>
      </div>

      <div class="hot-recommend__grid">
        <div v-for="item in attractions.slice(0, 3)" :key="item.id" class="hot-recommend__card">
          <RouterLink :to="`/attraction/${item.id}`" class="hot-recommend__card-link">
            <div class="hot-recommend__image-wrap">
              <img :src="item.coverImage" :alt="item.name" class="hot-recommend__image" />
            </div>
            <div class="hot-recommend__content">
              <div class="hot-recommend__rating">
                <el-rate :model-value="item.rating" disabled show-score :score-template="`${item.rating}`" />
              </div>
              <h3 class="hot-recommend__name">{{ item.name }}</h3>
              <p class="hot-recommend__desc">{{ truncateText(item.description, 60) }}</p>
              <div class="hot-recommend__footer">
                <span class="hot-recommend__price">{{ formatPrice(item.price) }}</span>
                <span class="hot-recommend__cta">查看详情 →</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hot-recommend {
  padding: var(--spacing-2xl) 0;
}

.hot-recommend__header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.hot-recommend__title {
  font-size: 28px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.hot-recommend__subtitle {
  font-size: 16px;
  color: var(--color-text-secondary);
}

.hot-recommend__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.hot-recommend__card {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.hot-recommend__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.hot-recommend__card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.hot-recommend__image-wrap {
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.hot-recommend__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.hot-recommend__card:hover .hot-recommend__image {
  transform: scale(1.05);
}

.hot-recommend__content {
  padding: var(--spacing-md);
}

.hot-recommend__name {
  font-size: 18px;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.hot-recommend__desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.hot-recommend__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hot-recommend__price {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-danger);
}

.hot-recommend__cta {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 500;
}

@media (max-width: 1200px) {
  .hot-recommend__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hot-recommend__grid {
    grid-template-columns: 1fr;
  }
}
</style>
