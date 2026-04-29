<script setup>
import { Picture } from '@element-plus/icons-vue'

defineProps({
  image: { type: String, default: '' },
  title: { type: String, default: '暂无数据' },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="empty-state">
    <div class="empty-state__icon">
      <el-icon :size="64"><Picture /></el-icon>
    </div>
    <h3 class="empty-state__title">{{ title }}</h3>
    <p v-if="description" class="empty-state__desc">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) var(--spacing-lg);
  text-align: center;
}

.empty-state__icon {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.empty-state__title {
  font-size: 18px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.empty-state__desc {
  font-size: 14px;
  color: var(--color-text-light);
  max-width: 360px;
  line-height: 1.6;
}
</style>
