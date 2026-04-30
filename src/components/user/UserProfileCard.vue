<script setup>
import { User, Message, Iphone, Calendar } from '@element-plus/icons-vue'

defineProps({
  userInfo: { type: Object, required: true },
})
</script>

<template>
  <div v-if="userInfo" class="user-profile-card">
    <div class="user-profile-card__avatar-wrap">
      <img
        :src="`https://api.dicebear.com/9.x/avataaars/svg?seed=${userInfo.username}`"
        :alt="userInfo.username"
        class="user-profile-card__avatar"
      />
    </div>
    <div class="user-profile-card__info">
      <h2 class="user-profile-card__name">{{ userInfo.username }}</h2>
      <div class="user-profile-card__details">
        <div class="user-profile-card__detail">
          <el-icon><Message /></el-icon>
          <span>{{ userInfo.email }}</span>
        </div>
        <div class="user-profile-card__detail">
          <el-icon><Iphone /></el-icon>
          <span>{{ userInfo.phone || '未绑定手机号' }}</span>
        </div>
        <div class="user-profile-card__detail">
          <el-icon><Calendar /></el-icon>
          <span>{{ userInfo.createdAt || '未知' }} 加入</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-profile-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
}

.user-profile-card__avatar-wrap {
  flex-shrink: 0;
}

.user-profile-card__avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #fcfaf2;
  border: 3px solid #dcd3b2;
}

.user-profile-card__name {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 24px;
  color: #1a365d;
  margin-bottom: var(--spacing-md);
  letter-spacing: 2px;
}

.user-profile-card__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.user-profile-card__detail {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .user-profile-card {
    flex-direction: column;
    text-align: center;
  }

  .user-profile-card__details {
    align-items: center;
  }
}
</style>
