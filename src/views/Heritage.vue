<script setup>
import { heritageItems, HERITAGE_CATEGORY_MAP } from '@/constants/heritage'

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '非遗展示' },
]

const activeCategory = ref('all')

const filteredItems = computed(() =>
  activeCategory.value === 'all'
    ? heritageItems
    : heritageItems.filter((h) => h.category === activeCategory.value),
)

const categories = computed(() =>
  Object.entries(HERITAGE_CATEGORY_MAP).map(([value, label]) => ({ value, label })),
)
</script>

<template>
  <div class="heritage">
    <div class="heritage__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" />
        <h1 class="heritage__title">非遗展示</h1>
        <p class="heritage__subtitle">探寻湘西非物质文化遗产，感受千年匠心传承</p>
      </div>
    </div>

    <div class="container heritage__body">
      <div class="heritage__filters">
        <button
          v-for="cat in categories"
          :key="cat.value"
          class="heritage__filter-btn"
          :class="{ 'heritage__filter-btn--active': activeCategory === cat.value }"
          @click="activeCategory = cat.value"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="heritage__grid">
        <RouterLink
          v-for="item in filteredItems"
          :key="item.id"
          :to="`/heritage/${item.id}`"
          class="heritage__card"
        >
          <div class="heritage__card-img-wrap">
            <img :src="item.image" :alt="item.name" class="heritage__card-img" />
          </div>
          <div class="heritage__card-body">
            <div class="heritage__card-header">
              <h3 class="heritage__card-name">{{ item.name }}</h3>
              <span class="heritage__card-level">{{ item.level }}</span>
            </div>
            <p class="heritage__card-summary">{{ item.summary }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heritage__hero {
  background: linear-gradient(135deg, #5c1a1a 0%, #8b2e2e 50%, #4a1a3a 100%);
  padding: 120px 0 60px;
  text-align: center;
}

.heritage__hero :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.65);
}
.heritage__hero :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}
.heritage__hero :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.85);
}

.heritage__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 42px;
  color: #fff;
  letter-spacing: 8px;
  margin: 16px 0 12px;
}

.heritage__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.heritage__body {
  padding: var(--spacing-2xl) 0;
}

.heritage__filters {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xl);
  justify-content: center;
}

.heritage__filter-btn {
  padding: 8px 24px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: #fff;
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.heritage__filter-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.heritage__filter-btn--active {
  color: #fff;
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.heritage__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.heritage__card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: #fff;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  cursor: pointer;
}

.heritage__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.heritage__card-img-wrap {
  height: 180px;
  overflow: hidden;
}

.heritage__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.heritage__card:hover .heritage__card-img {
  transform: scale(1.05);
}

.heritage__card-body {
  padding: var(--spacing-md);
}

.heritage__card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.heritage__card-name {
  font-size: 15px;
  color: var(--color-text);
}

.heritage__card-level {
  font-size: 11px;
  background: #fef3c7;
  color: #92400e;
  padding: 2px 8px;
  border-radius: 10px;
  white-space: nowrap;
}

.heritage__card-summary {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 992px) {
  .heritage__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .heritage__title {
    font-size: 32px;
  }
  .heritage__grid {
    grid-template-columns: 1fr;
  }
}
</style>
