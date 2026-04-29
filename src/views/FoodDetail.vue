<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import { useFoodStore } from '@/stores/food'
import { FOOD_CATEGORY_MAP } from '@/constants'
import { Bowl, Location, Food as FoodIcon, Star, StarFilled } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const store = useFoodStore()
const userStore = useUserStore()

const food = computed(() => store.getById(route.params.id))

function toggleFav() {
  if (!food.value) return
  const isFav = userStore.isFavorite('foods', food.value.id)
  userStore.toggleFavorite('foods', food.value.id)
  ElMessage.success(isFav ? '已取消收藏' : '已收藏')
}

if (!food.value) {
  router.replace('/404')
}

const breadcrumbItems = computed(() => [
  { name: '首页', path: '/' },
  { name: '美食推荐', path: '/foods' },
  { name: food.value?.name || '' },
])
</script>

<template>
  <div v-if="food" class="food-detail">
    <div class="food-detail__hero">
      <img :src="food.coverImage" :alt="food.name" class="food-detail__cover" />
      <div class="food-detail__hero-overlay">
        <div class="container">
          <BreadcrumbNav :items="breadcrumbItems" class="food-detail__breadcrumb" />
          <h1 class="food-detail__title">{{ food.name }}</h1>
          <div class="food-detail__hero-meta">
            <span class="food-detail__category-tag">{{ FOOD_CATEGORY_MAP[food.category] }}</span>
            <span class="food-detail__popularity">{{ food.popularity }}人推荐</span>
            <button
              class="food-detail__fav"
              :class="{ 'is-active': userStore.isFavorite('foods', food.id) }"
              @click="toggleFav"
            >
              <el-icon :size="18"><StarFilled v-if="userStore.isFavorite('foods', food.id)" /><Star v-else /></el-icon>
              <span>{{ userStore.isFavorite('foods', food.id) ? '已收藏' : '收藏' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container food-detail__body">
      <!-- 文化故事 -->
      <section class="food-detail__section">
        <h2 class="food-detail__section-title">文化故事</h2>
        <p class="food-detail__story">{{ food.story }}</p>
      </section>

      <!-- 食材 & 做法 -->
      <div class="food-detail__two-col">
        <section class="food-detail__section">
          <h2 class="food-detail__section-title">
            <el-icon><Bowl /></el-icon> 主要食材
          </h2>
          <ul class="food-detail__ingredients">
            <li v-for="(item, i) in food.ingredients" :key="i" class="food-detail__ingredient">
              {{ item }}
            </li>
          </ul>
        </section>

        <section class="food-detail__section">
          <h2 class="food-detail__section-title">
            <el-icon><FoodIcon /></el-icon> 制作步骤
          </h2>
          <ol class="food-detail__steps">
            <li v-for="(step, i) in food.steps" :key="i" class="food-detail__step">
              <span class="food-detail__step-num">{{ i + 1 }}</span>
              {{ step }}
            </li>
          </ol>
        </section>
      </div>

      <!-- 美食图集 -->
      <section v-if="food.images && food.images.length > 1" class="food-detail__section">
        <h2 class="food-detail__section-title">美食图集</h2>
        <div class="food-detail__gallery">
          <img
            v-for="(img, i) in food.images"
            :key="i"
            :src="img"
            :alt="`${food.name} ${i + 1}`"
            class="food-detail__gallery-img"
          />
        </div>
      </section>

      <!-- 营养信息 -->
      <section class="food-detail__section">
        <h2 class="food-detail__section-title">营养信息</h2>
        <div class="food-detail__nutrition">
          <div v-for="(val, key) in food.nutrition" :key="key" class="food-detail__nutrition-item">
            <span class="food-detail__nutrition-value">{{ val }}</span>
            <span class="food-detail__nutrition-label">{{ key === 'calories' ? '热量' : key === 'protein' ? '蛋白质' : '脂肪' }}</span>
          </div>
        </div>
      </section>

      <!-- 推荐探店 -->
      <section class="food-detail__section">
        <h2 class="food-detail__section-title">
          <el-icon><Location /></el-icon> 推荐探店
        </h2>
        <div class="food-detail__shops">
          <div v-for="shop in food.shops" :key="shop.name" class="food-detail__shop">
            <div class="food-detail__shop-info">
              <h4 class="food-detail__shop-name">{{ shop.name }}</h4>
              <p class="food-detail__shop-address">{{ shop.address }}</p>
            </div>
            <span class="food-detail__shop-price">约{{ shop.avgPrice }}元/人</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.food-detail__hero {
  position: relative;
  height: 380px;
}

.food-detail__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.food-detail__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--spacing-xl);
}

.food-detail__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.food-detail__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.food-detail__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.food-detail__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 40px;
  color: #fff;
  letter-spacing: 6px;
  margin-bottom: var(--spacing-sm);
}

.food-detail__hero-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.food-detail__category-tag {
  font-size: 13px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 12px;
  border-radius: 3px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.food-detail__popularity {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
}

.food-detail__fav {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  backdrop-filter: blur(4px);
  transition: all var(--transition-fast);
  white-space: nowrap;
  margin-left: auto;
}

.food-detail__fav:hover {
  background: rgba(255, 255, 255, 0.25);
}

.food-detail__fav.is-active {
  background: rgba(230, 162, 60, 0.3);
  border-color: rgba(230, 162, 60, 0.5);
  color: #f7d06e;
}

.food-detail__body {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
}

.food-detail__section {
  margin-bottom: var(--spacing-xl);
}

.food-detail__section-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 20px;
  color: #922c21;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid #dcd3b2;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

/* 文化故事 */
.food-detail__story {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.9;
  text-indent: 2em;
}

/* 双栏 */
.food-detail__two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

/* 食材列表 */
.food-detail__ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.food-detail__ingredient {
  font-size: 14px;
  color: #1a365d;
  background: rgba(26, 54, 93, 0.06);
  padding: 4px 14px;
  border-radius: 20px;
  border: 1px solid rgba(26, 54, 93, 0.12);
}

/* 制作步骤 */
.food-detail__steps {
  list-style: none;
  counter-reset: step;
}

.food-detail__step {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}

.food-detail__step-num {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  background: #922c21;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 美食图集 */
.food-detail__gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.food-detail__gallery-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius-md);
  transition: transform var(--transition-normal);
}

.food-detail__gallery-img:hover {
  transform: scale(1.03);
}

/* 营养信息 */
.food-detail__nutrition {
  display: flex;
  gap: var(--spacing-lg);
}

.food-detail__nutrition-item {
  background: #fcfaf2;
  border: 1px solid #dcd3b2;
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: center;
  min-width: 120px;
}

.food-detail__nutrition-value {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #922c21;
  margin-bottom: 4px;
}

.food-detail__nutrition-label {
  font-size: 12px;
  color: var(--color-text-light);
}

/* 推荐探店 */
.food-detail__shops {
  display: grid;
  gap: var(--spacing-md);
}

.food-detail__shop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: box-shadow var(--transition-fast);
}

.food-detail__shop:hover {
  box-shadow: var(--shadow-sm);
}

.food-detail__shop-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.food-detail__shop-address {
  font-size: 13px;
  color: var(--color-text-light);
}

.food-detail__shop-price {
  font-size: 15px;
  font-weight: 600;
  color: #922c21;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .food-detail__hero {
    height: 260px;
  }

  .food-detail__title {
    font-size: 28px;
  }

  .food-detail__two-col {
    grid-template-columns: 1fr;
  }

  .food-detail__nutrition {
    flex-wrap: wrap;
  }

  .food-detail__gallery {
    grid-template-columns: 1fr;
  }
}
</style>
