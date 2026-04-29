<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import AttractionCard from '@/components/attraction/AttractionCard.vue'
import AttractionSidebar from '@/components/attraction/AttractionSidebar.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import { useAttractionStore } from '@/stores/attraction'

const store = useAttractionStore()

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '景点总览' },
]
</script>

<template>
  <div class="attractions-page">
    <div class="attractions-page__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" class="attractions-page__breadcrumb" />
        <h1 class="attractions-page__title">探索湘西秘境</h1>
        <p class="attractions-page__subtitle">千峰竞秀，万壑争流 — 发现湘西最美的风景</p>
      </div>
    </div>

    <div class="container attractions-page__layout">
      <AttractionSidebar />

      <div class="attractions-page__main">
        <div v-if="store.filteredList.length > 0" class="attractions-page__grid">
          <AttractionCard
            v-for="attraction in store.filteredList"
            :key="attraction.id"
            :attraction="attraction"
          />
        </div>
        <EmptyState
          v-else
          title="暂无匹配景点"
          description="试试更换筛选条件或搜索词"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.attractions-page {
  min-height: 100vh;
}

.attractions-page__hero {
  background: linear-gradient(135deg, #1a365d, #2d5a87);
  padding: var(--spacing-xl) 0;
  color: #fff;
}

.attractions-page__breadcrumb {
  margin-bottom: var(--spacing-md);
}

.attractions-page__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.attractions-page__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.attractions-page__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.attractions-page__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 32px;
  letter-spacing: 4px;
  margin-bottom: var(--spacing-sm);
}

.attractions-page__subtitle {
  font-size: 15px;
  opacity: 0.8;
  font-style: italic;
}

.attractions-page__layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
  align-items: start;
}

.attractions-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 1200px) {
  .attractions-page__layout {
    grid-template-columns: 220px 1fr;
  }
}

@media (max-width: 768px) {
  .attractions-page__layout {
    grid-template-columns: 1fr;
  }

  .attractions-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
