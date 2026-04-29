<script setup>
import { useAttractionStore } from '@/stores/attraction'
import { CATEGORY_MAP } from '@/constants'
import { Search } from '@element-plus/icons-vue'

const store = useAttractionStore()
</script>

<template>
  <aside class="attraction-sidebar">
    <div class="attraction-sidebar__search">
      <el-input
        v-model="store.searchKeyword"
        placeholder="搜索景点..."
        :prefix-icon="Search"
        clearable
      />
    </div>

    <div class="attraction-sidebar__section">
      <h3 class="attraction-sidebar__title">景点分类</h3>
      <el-radio-group v-model="store.selectedCategory" class="attraction-sidebar__categories">
        <el-radio
          v-for="(label, key) in CATEGORY_MAP"
          :key="key"
          :value="key"
          class="attraction-sidebar__radio"
        >
          {{ label }}
        </el-radio>
      </el-radio-group>
    </div>

    <div class="attraction-sidebar__section">
      <h3 class="attraction-sidebar__title">排序方式</h3>
      <el-select v-model="store.sortBy" class="attraction-sidebar__sort">
        <el-option label="默认排序" value="default" />
        <el-option label="评分最高" value="rating" />
        <el-option label="价格最低" value="price-low" />
        <el-option label="价格最高" value="price-high" />
      </el-select>
    </div>
  </aside>
</template>

<style scoped>
.attraction-sidebar {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-lg));
}

.attraction-sidebar__search {
  margin-bottom: var(--spacing-lg);
}

.attraction-sidebar__section {
  margin-bottom: var(--spacing-lg);
}

.attraction-sidebar__section:last-child {
  margin-bottom: 0;
}

.attraction-sidebar__title {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
}

.attraction-sidebar__categories {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.attraction-sidebar__radio {
  margin-right: 0;
}

.attraction-sidebar__sort {
  width: 100%;
}
</style>
