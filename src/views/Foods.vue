<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import FoodCard from '@/components/food/FoodCard.vue'
import FoodSidebar from '@/components/food/FoodSidebar.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import { useFoodStore } from '@/stores/food'

const store = useFoodStore()

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '美食推荐' },
]
</script>

<template>
  <div class="foods-page">
    <div class="foods-page__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" class="foods-page__breadcrumb" />
        <h1 class="foods-page__title">舌尖上的湘西</h1>
        <p class="foods-page__subtitle">品味地道湘西美食，感受独特饮食文化</p>
      </div>
    </div>

    <div class="container foods-page__layout">
      <FoodSidebar />

      <div class="foods-page__main">
        <div v-if="store.filteredList.length > 0" class="foods-page__grid">
          <FoodCard
            v-for="food in store.filteredList"
            :key="food.id"
            :food="food"
          />
        </div>
        <EmptyState
          v-else
          title="暂无匹配美食"
          description="试试更换筛选条件"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.foods-page {
  min-height: 100vh;
}

.foods-page__hero {
  background: linear-gradient(135deg, #922c21, #b8453a);
  padding: var(--spacing-xl) 0;
  color: #fff;
}

.foods-page__breadcrumb {
  margin-bottom: var(--spacing-md);
}

.foods-page__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.foods-page__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.foods-page__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.foods-page__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 32px;
  letter-spacing: 4px;
  margin-bottom: var(--spacing-sm);
}

.foods-page__subtitle {
  font-size: 15px;
  opacity: 0.8;
  font-style: italic;
}

.foods-page__layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
  align-items: start;
}

.foods-page__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 1200px) {
  .foods-page__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .foods-page__layout {
    grid-template-columns: 1fr;
  }

  .foods-page__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
}
</style>
