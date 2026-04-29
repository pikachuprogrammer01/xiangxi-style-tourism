<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import UserProfileCard from '@/components/user/UserProfileCard.vue'
import UserStats from '@/components/user/UserStats.vue'
import FavoriteList from '@/components/user/FavoriteList.vue'
import { useUserStore } from '@/stores/user'
import { useAttractionStore } from '@/stores/attraction'
import { useFoodStore } from '@/stores/food'
import { RouterLink } from 'vue-router'
import { Delete } from '@element-plus/icons-vue'

const userStore = useUserStore()
const attractionStore = useAttractionStore()
const foodStore = useFoodStore()

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '个人中心' },
]

const stats = computed(() => ({
  attractions: userStore.favorites.attractions.length,
  foods: userStore.favorites.foods.length,
  history: userStore.history.length,
}))

const activeTab = ref('attractions')

function getHistoryItem(id, type) {
  if (type === 'attraction') return attractionStore.getById(id)
  return foodStore.getById(id)
}

function clearHistory() {
  ElMessageBox.confirm('确定要清空所有浏览足迹吗？此操作不可恢复。', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    userStore.clearHistory()
    ElMessage.success('已清空浏览足迹')
  }).catch(() => {})
}
</script>

<template>
  <div class="profile-page">
    <div class="profile-page__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" class="profile-page__breadcrumb" />
        <h1 class="profile-page__title">个人中心</h1>
      </div>
    </div>

    <div class="container profile-page__body">
      <UserProfileCard :user-info="userStore.userInfo" />

      <UserStats :stats="stats" />

      <section class="profile-page__section">
        <div class="profile-page__tabs">
          <button
            class="profile-page__tab"
            :class="{ 'is-active': activeTab === 'attractions' }"
            @click="activeTab = 'attractions'"
          >
            收藏景点
          </button>
          <button
            class="profile-page__tab"
            :class="{ 'is-active': activeTab === 'foods' }"
            @click="activeTab = 'foods'"
          >
            收藏美食
          </button>
          <button
            class="profile-page__tab"
            :class="{ 'is-active': activeTab === 'history' }"
            @click="activeTab = 'history'"
          >
            浏览足迹
          </button>
        </div>

        <div class="profile-page__tab-content">
          <template v-if="activeTab === 'attractions'">
            <FavoriteList type="attractions" />
          </template>
          <template v-else-if="activeTab === 'foods'">
            <FavoriteList type="foods" />
          </template>
          <template v-else>
            <div v-if="userStore.history.length > 0" class="profile-page__history">
              <div class="profile-page__history-header">
                <span class="profile-page__history-count">共 {{ userStore.history.length }} 条记录</span>
                <el-button type="danger" :icon="Delete" size="small" plain @click="clearHistory">
                  清空足迹
                </el-button>
              </div>
              <div
                v-for="item in userStore.history"
                :key="`${item.type}-${item.id}-${item.time}`"
                class="profile-page__history-item"
              >
                <RouterLink
                  :to="`/${item.type === 'attraction' ? 'attraction' : 'food'}/${item.id}`"
                  class="profile-page__history-link"
                >
                  <img
                    v-if="getHistoryItem(item.id, item.type)"
                    :src="getHistoryItem(item.id, item.type).coverImage"
                    :alt="getHistoryItem(item.id, item.type).name"
                    class="profile-page__history-image"
                  />
                  <div class="profile-page__history-info">
                    <span class="profile-page__history-name">
                      {{ getHistoryItem(item.id, item.type)?.name || '已失效' }}
                    </span>
                    <span class="profile-page__history-type">
                      {{ item.type === 'attraction' ? '景点' : '美食' }}
                    </span>
                  </div>
                </RouterLink>
                <span class="profile-page__history-time">{{ new Date(item.time).toLocaleString() }}</span>
              </div>
            </div>
            <div v-else class="profile-page__empty">
              <p>暂无浏览记录</p>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.profile-page__hero {
  background: linear-gradient(135deg, #1a365d, #2d5a87);
  padding: var(--spacing-xl) 0;
  color: #fff;
}

.profile-page__breadcrumb {
  margin-bottom: var(--spacing-md);
}

.profile-page__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.profile-page__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.profile-page__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.profile-page__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 28px;
  letter-spacing: 4px;
}

.profile-page__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
}

/* 标签切换 */
.profile-page__section {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.profile-page__tabs {
  display: flex;
  border-bottom: 1px solid var(--color-border);
}

.profile-page__tab {
  flex: 1;
  padding: 14px 0;
  font-size: 15px;
  color: var(--color-text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: color var(--transition-fast);
}

.profile-page__tab:hover {
  color: #1a365d;
}

.profile-page__tab.is-active {
  color: #1a365d;
  font-weight: 600;
}

.profile-page__tab.is-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: #1a365d;
}

.profile-page__tab-content {
  padding: var(--spacing-lg);
}

/* 浏览足迹 */
.profile-page__history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.profile-page__history-count {
  font-size: 13px;
  color: var(--color-text-light);
}

.profile-page__history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
}

.profile-page__history-item:last-child {
  border-bottom: none;
}

.profile-page__history-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  text-decoration: none;
  color: inherit;
  flex: 1;
  min-width: 0;
}

.profile-page__history-image {
  width: 64px;
  height: 48px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.profile-page__history-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.profile-page__history-name {
  font-size: 14px;
  color: var(--color-text);
}

.profile-page__history-type {
  font-size: 12px;
  color: var(--color-text-light);
}

.profile-page__history-time {
  font-size: 12px;
  color: var(--color-text-light);
  white-space: nowrap;
}

.profile-page__empty {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--color-text-light);
}
</style>
