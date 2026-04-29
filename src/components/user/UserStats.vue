<script setup>
import { Star, Bowl, Clock } from '@element-plus/icons-vue'

defineProps({
  stats: { type: Object, required: true },
})
</script>

<template>
  <div class="user-stats">
    <div class="user-stats__item">
      <div class="user-stats__icon user-stats__icon--attraction">
        <el-icon :size="22"><Star /></el-icon>
      </div>
      <div class="user-stats__text">
        <span class="user-stats__number">{{ stats.attractions }}</span>
        <span class="user-stats__label">收藏景点</span>
      </div>
    </div>
    <div class="user-stats__item">
      <div class="user-stats__icon user-stats__icon--food">
        <el-icon :size="22"><Bowl /></el-icon>
      </div>
      <div class="user-stats__text">
        <span class="user-stats__number">{{ stats.foods }}</span>
        <span class="user-stats__label">收藏美食</span>
      </div>
    </div>
    <div class="user-stats__item">
      <div class="user-stats__icon user-stats__icon--history">
        <el-icon :size="22"><Clock /></el-icon>
      </div>
      <div class="user-stats__text">
        <span class="user-stats__number">{{ stats.history }}</span>
        <span class="user-stats__label">浏览足迹</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.user-stats__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.user-stats__item:hover {
  transform: translateY(-2px);
}

.user-stats__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-stats__icon--attraction {
  background: rgba(26, 54, 93, 0.1);
  color: #1a365d;
}

.user-stats__icon--food {
  background: rgba(146, 44, 33, 0.1);
  color: #922c21;
}

.user-stats__icon--history {
  background: rgba(184, 134, 11, 0.1);
  color: #b8860b;
}

.user-stats__text {
  display: flex;
  flex-direction: column;
}

.user-stats__number {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
}

.user-stats__label {
  font-size: 13px;
  color: var(--color-text-light);
  margin-top: 2px;
}

@media (max-width: 768px) {
  .user-stats {
    grid-template-columns: 1fr;
  }
}
</style>
