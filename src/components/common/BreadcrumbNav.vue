<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="breadcrumb-nav">
    <el-breadcrumb separator-icon="">
      <el-breadcrumb-item v-for="(item, index) in items" :key="index">
        <RouterLink v-if="item.path && index < items.length - 1" :to="item.path" class="breadcrumb-nav__link">
          {{ item.name }}
        </RouterLink>
        <span v-else class="breadcrumb-nav__current">{{ item.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped>
.breadcrumb-nav {
  padding: var(--spacing-md) 0;
}

.breadcrumb-nav__link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-nav__link:hover {
  color: var(--color-primary);
}

.breadcrumb-nav__current {
  color: var(--color-text);
  font-weight: 500;
}
</style>
