<script setup>
defineProps({
  count: { type: Number, default: 6 },
  type: { type: String, default: 'card' },
})
</script>

<template>
  <div class="loading-skeleton" :class="`loading-skeleton--${type}`">
    <div v-for="i in count" :key="i" class="loading-skeleton__item">
      <el-skeleton animated>
        <template #template>
          <div v-if="type === 'card'" class="loading-skeleton__card">
            <el-skeleton-item variant="image" style="width: 100%; height: 180px" />
            <div class="loading-skeleton__card-body">
              <el-skeleton-item variant="text" style="width: 60%" />
              <el-skeleton-item variant="text" style="width: 90%" />
              <el-skeleton-item variant="text" style="width: 40%" />
            </div>
          </div>
          <div v-else class="loading-skeleton__list">
            <el-skeleton-item variant="image" style="width: 120px; height: 90px" />
            <div class="loading-skeleton__list-body">
              <el-skeleton-item variant="text" style="width: 50%" />
              <el-skeleton-item variant="text" style="width: 80%" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<style scoped>
.loading-skeleton--card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.loading-skeleton--list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.loading-skeleton__card-body {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.loading-skeleton__list .loading-skeleton__item {
  display: flex;
  gap: var(--spacing-md);
}

.loading-skeleton__list-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
}

@media (max-width: 1200px) {
  .loading-skeleton--card {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .loading-skeleton--card {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
