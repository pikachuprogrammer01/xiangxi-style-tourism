<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import AttractionTabs from '@/components/attraction/AttractionTabs.vue'
import { useAttractionStore } from '@/stores/attraction'
import { formatPrice } from '@/utils/formatters'
import { Clock, Sunrise, Coin, MapLocation, Star, StarFilled } from '@element-plus/icons-vue'
import { useFavorites } from '@/composables/useFavorites'

const route = useRoute()
const router = useRouter()
const store = useAttractionStore()
const fav = useFavorites()

function toggleFav() {
  if (!attraction.value) return
  const wasFav = fav.toggle('attractions', attraction.value.id)
  if (wasFav === null) return
  ElMessage.success(wasFav ? '已取消收藏' : '已收藏')
}

const attraction = computed(() => store.getById(route.params.id))

if (!attraction.value) {
  router.replace('/404')
}

const breadcrumbItems = computed(() => [
  { name: '首页', path: '/' },
  { name: '景点总览', path: '/attractions' },
  { name: attraction.value?.name || '' },
])

const quickInfo = computed(() => {
  if (!attraction.value) return []
  const d = attraction.value.details
  return [
    { icon: Clock, label: '开放时间', value: d.openTime },
    { icon: Sunrise, label: '建议游玩', value: d.duration },
    { icon: MapLocation, label: '最佳季节', value: d.bestSeason },
    { icon: Coin, label: '门票价格', value: d.priceDetail },
  ]
})
</script>

<template>
  <div v-if="attraction" class="attraction-detail">
    <div class="attraction-detail__hero">
      <img :src="attraction.coverImage" :alt="attraction.name" class="attraction-detail__cover" />
      <div class="attraction-detail__hero-overlay">
        <div class="container">
          <BreadcrumbNav :items="breadcrumbItems" class="attraction-detail__breadcrumb" />
          <h1 class="attraction-detail__title">{{ attraction.name }}</h1>
          <div class="attraction-detail__tags">
            <span v-for="tag in attraction.tags" :key="tag" class="attraction-detail__tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container attraction-detail__body">
      <div class="attraction-detail__quick-info">
        <div v-for="info in quickInfo" :key="info.label" class="attraction-detail__info-item">
          <el-icon :size="20"><component :is="info.icon" /></el-icon>
          <div class="attraction-detail__info-text">
            <span class="attraction-detail__info-label">{{ info.label }}</span>
            <span class="attraction-detail__info-value">{{ info.value }}</span>
          </div>
        </div>
      </div>

      <div class="attraction-detail__action-bar">
        <button
          class="attraction-detail__fav"
          :class="{ 'is-active': fav.isFav('attractions', attraction.id) }"
          @click="toggleFav"
        >
          <el-icon :size="20">
            <StarFilled v-if="fav.isFav('attractions', attraction.id)" />
            <Star v-else />
          </el-icon>
          <span>{{ fav.isFav('attractions', attraction.id) ? '已收藏此景点' : '收藏此景点' }}</span>
        </button>
      </div>

      <div class="attraction-detail__overview">
        <h2 class="attraction-detail__section-title">景点概述</h2>
        <p class="attraction-detail__desc">{{ attraction.description }}</p>
      </div>

      <div class="attraction-detail__gallery">
        <img
          v-for="(img, i) in attraction.images"
          :key="i"
          :src="img"
          :alt="`${attraction.name} ${i + 1}`"
          class="attraction-detail__gallery-img"
        />
      </div>

      <AttractionTabs :tabs="attraction.tabs" />
    </div>
  </div>
</template>

<style scoped>
.attraction-detail__hero {
  position: relative;
  height: 420px;
}

.attraction-detail__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.attraction-detail__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--spacing-xl);
}

.attraction-detail__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.attraction-detail__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.attraction-detail__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.attraction-detail__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 40px;
  color: #fff;
  letter-spacing: 6px;
  margin-bottom: var(--spacing-sm);
}

.attraction-detail__tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* 收藏操作栏 */
.attraction-detail__action-bar {
  margin-bottom: var(--spacing-xl);
}

.attraction-detail__fav {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg-white);
  border: 1px solid #dcd3b2;
  color: #922c21;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all var(--transition-normal);
  font-family: 'STKaiti', 'KaiTi', serif;
}

.attraction-detail__fav:hover {
  background: #fcfaf2;
  border-color: #922c21;
  box-shadow: 0 2px 8px rgba(146, 44, 33, 0.12);
}

.attraction-detail__fav.is-active {
  background: rgba(146, 44, 33, 0.06);
  border-color: #922c21;
  color: #922c21;
}

.attraction-detail__tag {
  font-size: 13px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 12px;
  border-radius: 3px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.attraction-detail__body {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
}

/* 快捷信息条 */
.attraction-detail__quick-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-xl);
}

.attraction-detail__info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: #1a365d;
}

.attraction-detail__info-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.attraction-detail__info-label {
  font-size: 12px;
  color: var(--color-text-light);
}

.attraction-detail__info-value {
  font-size: 14px;
  font-weight: 500;
}

/* 概述区 */
.attraction-detail__overview {
  margin-bottom: var(--spacing-xl);
}

.attraction-detail__section-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 22px;
  color: #922c21;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid #dcd3b2;
}

.attraction-detail__desc {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.9;
  text-indent: 2em;
}

/* 图片廊 */
.attraction-detail__gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.attraction-detail__gallery-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-md);
  transition: transform var(--transition-normal);
}

.attraction-detail__gallery-img:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .attraction-detail__hero {
    height: 280px;
  }

  .attraction-detail__title {
    font-size: 28px;
  }

  .attraction-detail__quick-info {
    grid-template-columns: repeat(2, 1fr);
  }

  .attraction-detail__gallery {
    grid-template-columns: 1fr;
  }
}
</style>
