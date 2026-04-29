<script setup>
import { formatDate } from '@/utils/formatters'

defineProps({
  tabs: { type: Object, required: true },
})
</script>

<template>
  <div class="attraction-tabs">
    <el-tabs type="border-card">
      <el-tab-pane v-if="tabs.intro" :label="tabs.intro.title">
        <div v-for="(section, i) in tabs.intro.sections" :key="i" class="attraction-tabs__section">
          <h3 class="attraction-tabs__heading">{{ section.heading }}</h3>
          <p class="attraction-tabs__text">{{ section.text }}</p>
          <img v-if="section.image" :src="section.image" :alt="section.heading" class="attraction-tabs__image" />
        </div>
      </el-tab-pane>

      <el-tab-pane v-if="tabs.guide" :label="tabs.guide.title">
        <div v-for="(section, i) in tabs.guide.sections" :key="i" class="attraction-tabs__section">
          <h3 class="attraction-tabs__heading">{{ section.heading }}</h3>
          <p class="attraction-tabs__text attraction-tabs__text--guide">{{ section.text }}</p>
          <img v-if="section.image" :src="section.image" :alt="section.heading" class="attraction-tabs__image" />
        </div>
      </el-tab-pane>

      <el-tab-pane v-if="tabs.reviews" :label="tabs.reviews.title">
        <div v-for="review in tabs.reviews.items" :key="review.id" class="attraction-tabs__review">
          <div class="attraction-tabs__review-header">
            <img :src="review.avatar" :alt="review.user" class="attraction-tabs__review-avatar" />
            <div class="attraction-tabs__review-meta">
              <span class="attraction-tabs__review-user">{{ review.user }}</span>
              <span class="attraction-tabs__review-date">{{ formatDate(review.date) }}</span>
            </div>
            <el-rate :model-value="review.rating" disabled size="small" />
          </div>
          <p class="attraction-tabs__review-content">{{ review.content }}</p>
        </div>
      </el-tab-pane>

      <el-tab-pane v-if="tabs.traffic" :label="tabs.traffic.title">
        <div v-for="(section, i) in tabs.traffic.sections" :key="i" class="attraction-tabs__section">
          <h3 class="attraction-tabs__heading">{{ section.heading }}</h3>
          <p class="attraction-tabs__text attraction-tabs__text--guide">{{ section.text }}</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.attraction-tabs {
  margin-top: var(--spacing-xl);
}

.attraction-tabs__section {
  margin-bottom: var(--spacing-lg);
}

.attraction-tabs__section:last-child {
  margin-bottom: 0;
}

.attraction-tabs__heading {
  font-size: 18px;
  color: #1a365d;
  margin-bottom: var(--spacing-sm);
  padding-left: 12px;
  border-left: 3px solid #922c21;
}

.attraction-tabs__text {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

.attraction-tabs__text--guide {
  white-space: pre-line;
}

.attraction-tabs__image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

/* 评价样式 */
.attraction-tabs__review {
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
}

.attraction-tabs__review:last-child {
  border-bottom: none;
}

.attraction-tabs__review-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.attraction-tabs__review-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.attraction-tabs__review-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.attraction-tabs__review-user {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

.attraction-tabs__review-date {
  font-size: 12px;
  color: var(--color-text-light);
}

.attraction-tabs__review-content {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .attraction-tabs__review-header {
    flex-wrap: wrap;
  }
}
</style>
