<script setup>
import { heritageItems } from '@/constants/heritage'
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'

const route = useRoute()
const router = useRouter()

const item = computed(() => heritageItems.find((h) => h.id === route.params.id))

if (!item.value) {
  router.replace('/404')
}

const breadcrumbItems = computed(() => [
  { name: '首页', path: '/' },
  { name: '非遗展示', path: '/heritage' },
  { name: item.value?.name || '' },
])

const levelTagType = computed(() => (item.value?.level === '国家级' ? 'danger' : 'warning'))
</script>

<template>
  <div v-if="item" class="heritage-detail">
    <div class="heritage-detail__hero">
      <img :src="item.image" :alt="item.name" class="heritage-detail__cover" />
      <div class="heritage-detail__hero-overlay">
        <div class="container">
          <BreadcrumbNav :items="breadcrumbItems" class="heritage-detail__breadcrumb" />
          <div class="heritage-detail__hero-info">
            <h1 class="heritage-detail__title">{{ item.name }}</h1>
            <div class="heritage-detail__tags">
              <span class="heritage-detail__level" :class="`heritage-detail__level--${item.level === '国家级' ? 'national' : 'province'}`">
                {{ item.level }}
              </span>
              <span class="heritage-detail__year">列入年份：{{ item.year }}年</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container heritage-detail__body">
      <p class="heritage-detail__summary">{{ item.summary }}</p>

      <section class="heritage-detail__section">
        <h2 class="heritage-detail__section-title">起源与分布</h2>
        <p class="heritage-detail__text">{{ item.origin }}</p>
      </section>

      <section class="heritage-detail__section">
        <h2 class="heritage-detail__section-title">艺术特色</h2>
        <p class="heritage-detail__text">{{ item.features }}</p>
      </section>

      <section class="heritage-detail__section">
        <h2 class="heritage-detail__section-title">工艺流程</h2>
        <p class="heritage-detail__text">{{ item.process }}</p>
      </section>

      <section class="heritage-detail__section">
        <h2 class="heritage-detail__section-title">文化意义</h2>
        <p class="heritage-detail__text">{{ item.significance }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.heritage-detail__hero {
  position: relative;
  height: 380px;
}

.heritage-detail__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heritage-detail__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 40px;
}

.heritage-detail__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}
.heritage-detail__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}
.heritage-detail__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}
.heritage-detail__breadcrumb :deep(.breadcrumb-nav__separator) {
  color: rgba(255, 255, 255, 0.45);
}

.heritage-detail__hero-info {
  margin-top: 8px;
}

.heritage-detail__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 38px;
  color: #fff;
  letter-spacing: 6px;
  margin-bottom: 12px;
}

.heritage-detail__tags {
  display: flex;
  gap: 16px;
  align-items: center;
}

.heritage-detail__level {
  font-size: 13px;
  padding: 3px 14px;
  border-radius: 12px;
  font-weight: 500;
}

.heritage-detail__level--national {
  background: #dc2626;
  color: #fff;
}

.heritage-detail__level--province {
  background: #d97706;
  color: #fff;
}

.heritage-detail__year {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
}

.heritage-detail__body {
  padding: 40px 0 60px;
  max-width: 800px;
}

.heritage-detail__summary {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.9;
  padding: 20px 24px;
  background: #fef3c7;
  border-left: 4px solid #d97706;
  border-radius: 0 8px 8px 0;
  margin-bottom: 36px;
}

.heritage-detail__section {
  margin-bottom: 32px;
}

.heritage-detail__section-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 20px;
  color: #922c21;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid #dcd3b2;
}

.heritage-detail__text {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 2;
  text-indent: 2em;
}

@media (max-width: 768px) {
  .heritage-detail__hero {
    height: 260px;
  }

  .heritage-detail__title {
    font-size: 26px;
  }

  .heritage-detail__body {
    padding: 28px 0 48px;
  }
}
</style>
