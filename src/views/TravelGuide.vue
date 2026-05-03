<script setup>
import { seasons, routePlans, travelTips } from '@/constants/guide'

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '旅游攻略' },
]
</script>

<template>
  <div class="travel-guide">
    <div class="travel-guide__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" />
        <h1 class="travel-guide__title">旅游攻略</h1>
        <p class="travel-guide__subtitle">全面了解湘西旅行资讯，规划你的完美旅程</p>
      </div>
    </div>

    <div class="container travel-guide__body">
      <section class="travel-guide__section">
        <h2 class="travel-guide__section-title">最佳旅游季节</h2>
        <div class="travel-guide__seasons">
          <div v-for="s in seasons" :key="s.name" class="travel-guide__season-card">
            <h3 class="travel-guide__season-name">{{ s.name }}</h3>
            <p class="travel-guide__season-desc">{{ s.desc }}</p>
          </div>
        </div>
      </section>

      <section class="travel-guide__section">
        <h2 class="travel-guide__section-title">推荐路线</h2>
        <div class="travel-guide__routes">
          <div v-for="r in routePlans" :key="r.title" class="travel-guide__route-card">
            <div class="travel-guide__route-header">
              <h3 class="travel-guide__route-name">{{ r.title }}</h3>
              <span class="travel-guide__route-duration">{{ r.duration }}</span>
            </div>
            <p class="travel-guide__route-summary">{{ r.summary }}</p>
            <ul class="travel-guide__route-detail">
              <li v-for="d in r.detail" :key="d">{{ d }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="travel-guide__section">
        <h2 class="travel-guide__section-title">出行贴士</h2>
        <div class="travel-guide__tips">
          <div v-for="t in travelTips" :key="t.title" class="travel-guide__tip-card">
            <h3 class="travel-guide__tip-title">{{ t.title }}</h3>
            <p class="travel-guide__tip-content">{{ t.content }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.travel-guide__hero {
  background: linear-gradient(135deg, #0f4c38 0%, #1a6b4f 50%, #0d3b5c 100%);
  padding: 120px 0 60px;
  text-align: center;
}

.travel-guide__hero :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.65);
}
.travel-guide__hero :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}
.travel-guide__hero :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.85);
}

.travel-guide__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 42px;
  color: #fff;
  letter-spacing: 8px;
  margin: 16px 0 12px;
}

.travel-guide__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.travel-guide__body {
  padding: var(--spacing-2xl) 0;
}

.travel-guide__section {
  margin-bottom: var(--spacing-2xl);
}

.travel-guide__section-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 24px;
  color: #1a3a2a;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
}

.travel-guide__seasons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.travel-guide__season-card {
  background: #fff;
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border-top: 3px solid var(--color-primary);
}

.travel-guide__season-name {
  font-size: 16px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.travel-guide__season-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.travel-guide__routes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.travel-guide__route-card {
  background: #fff;
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.travel-guide__route-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.travel-guide__route-name {
  font-size: 18px;
  color: var(--color-text);
}

.travel-guide__route-duration {
  font-size: 13px;
  color: #fff;
  background: var(--color-primary);
  padding: 2px 12px;
  border-radius: 20px;
  white-space: nowrap;
}

.travel-guide__route-summary {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.travel-guide__route-detail {
  list-style: none;
  padding: 0;
  margin: 0;
}

.travel-guide__route-detail li {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  padding-left: 16px;
  position: relative;
}

.travel-guide__route-detail li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
}

.travel-guide__tips {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.travel-guide__tip-card {
  background: #f8faf8;
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  border-left: 3px solid var(--color-primary);
}

.travel-guide__tip-title {
  font-size: 15px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.travel-guide__tip-content {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.8;
}

@media (max-width: 992px) {
  .travel-guide__seasons {
    grid-template-columns: repeat(2, 1fr);
  }
  .travel-guide__routes,
  .travel-guide__tips {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .travel-guide__title {
    font-size: 32px;
  }
  .travel-guide__seasons,
  .travel-guide__routes,
  .travel-guide__tips {
    grid-template-columns: 1fr;
  }
}
</style>
