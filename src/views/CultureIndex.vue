<script setup>
import { cultures } from '@/constants/cultures'

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '湘西文化' },
]
</script>

<template>
  <div class="culture-index">
    <div class="culture-index__hero">
      <div class="container culture-index__hero-content">
        <BreadcrumbNav :items="breadcrumbItems" />
        <h1 class="culture-index__title">湘西文化</h1>
        <p class="culture-index__subtitle">苗族与土家族的多彩民俗，千年传承的民族风情</p>
      </div>
    </div>

    <div class="container culture-index__body">
      <div class="culture-index__grid">
        <RouterLink
          v-for="item in cultures"
          :key="item.id"
          :to="`/culture/${item.id}`"
          class="culture-index__card"
        >
          <div class="culture-index__card-img-wrap">
            <img :src="item.heroImage" :alt="item.name" class="culture-index__card-img" />
          </div>
          <div class="culture-index__card-body">
            <h3 class="culture-index__card-title">{{ item.name }}</h3>
            <p class="culture-index__card-desc">{{ item.subtitle }}</p>
            <span class="culture-index__card-more">了解更多 &rarr;</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.culture-index__hero {
  background: linear-gradient(135deg, #1a0a2e 0%, #3d1a5e 50%, #1a3a2a 100%);
  padding: 120px 0 60px;
  text-align: center;
}

.culture-index__hero-content :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.65);
}
.culture-index__hero-content :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}
.culture-index__hero-content :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.85);
}

.culture-index__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 42px;
  color: #fff;
  letter-spacing: 8px;
  margin: 16px 0 12px;
}

.culture-index__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.culture-index__body {
  padding: var(--spacing-2xl) 0;
}

.culture-index__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.culture-index__card {
  text-decoration: none;
  color: inherit;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.culture-index__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.culture-index__card-img-wrap {
  height: 220px;
  overflow: hidden;
}

.culture-index__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.culture-index__card:hover .culture-index__card-img {
  transform: scale(1.05);
}

.culture-index__card-body {
  padding: var(--spacing-lg);
}

.culture-index__card-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.culture-index__card-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}

.culture-index__card-more {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .culture-index__grid {
    grid-template-columns: 1fr;
  }

  .culture-index__title {
    font-size: 32px;
  }
}
</style>
