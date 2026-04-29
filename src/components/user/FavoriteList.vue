<script setup>
import { RouterLink } from 'vue-router'
import { useAttractionStore } from '@/stores/attraction'
import { useFoodStore } from '@/stores/food'
import { useUserStore } from '@/stores/user'
import { Delete } from '@element-plus/icons-vue'

const props = defineProps({
  type: { type: String, required: true },
})

const attractionStore = useAttractionStore()
const foodStore = useFoodStore()
const userStore = useUserStore()

const items = computed(() => {
  const ids = userStore.favorites[props.type]
  if (props.type === 'attractions') {
    return ids.map((id) => attractionStore.getById(id)).filter(Boolean)
  }
  return ids.map((id) => foodStore.getById(id)).filter(Boolean)
})

function removeFav(id) {
  ElMessageBox.confirm('确定要取消收藏吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    userStore.toggleFavorite(props.type, id)
    ElMessage.success('已取消收藏')
  }).catch(() => {})
}
</script>

<template>
  <div class="favorite-list">
    <template v-if="items.length > 0">
      <div
        v-for="item in items"
        :key="item.id"
        class="favorite-list__item"
      >
        <RouterLink
          :to="`/${type === 'attractions' ? 'attraction' : 'food'}/${item.id}`"
          class="favorite-list__link"
        >
          <img
            :src="item.coverImage"
            :alt="item.name"
            class="favorite-list__image"
          />
          <div class="favorite-list__info">
            <h4 class="favorite-list__name">{{ item.name }}</h4>
            <p class="favorite-list__meta">
              <template v-if="type === 'attractions'">
                {{ item.location }}
              </template>
              <template v-else>
                {{ item.tags.slice(0, 2).join(' / ') }}
              </template>
            </p>
          </div>
        </RouterLink>
        <el-button
          type="danger"
          :icon="Delete"
          circle
          size="small"
          class="favorite-list__remove"
          @click="removeFav(item.id)"
        />
      </div>
    </template>
    <div v-else class="favorite-list__empty">
      <p>暂无收藏{{ type === 'attractions' ? '景点' : '美食' }}</p>
      <RouterLink :to="`/${type === 'attractions' ? 'attractions' : 'foods'}`" class="favorite-list__go">
        去发现 →
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.favorite-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.favorite-list__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: var(--color-bg-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-fast);
}

.favorite-list__item:hover {
  box-shadow: var(--shadow-md);
}

.favorite-list__link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.favorite-list__image {
  width: 64px;
  height: 48px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.favorite-list__info {
  flex: 1;
  min-width: 0;
}

.favorite-list__name {
  font-size: 15px;
  color: var(--color-text);
  margin-bottom: 2px;
}

.favorite-list__meta {
  font-size: 12px;
  color: var(--color-text-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.favorite-list__remove {
  flex-shrink: 0;
}

.favorite-list__empty {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--color-text-light);
}

.favorite-list__go {
  display: inline-block;
  margin-top: 8px;
  color: #922c21;
  font-weight: 500;
}
</style>
