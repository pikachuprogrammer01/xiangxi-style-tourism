<script setup>
import { StarFilled } from '@element-plus/icons-vue'
import { mockMessages } from '@/constants/guestbook'

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '留言板' },
]

const messages = ref([...mockMessages])

const form = reactive({
  username: '',
  content: '',
})

function handleSubmit() {
  if (!form.username.trim() || !form.content.trim()) {
    ElMessage.warning('请填写昵称和留言内容')
    return
  }
  messages.value.unshift({
    id: Date.now(),
    username: form.username,
    avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(form.username)}`,
    content: form.content,
    time: new Date().toLocaleString('zh-CN'),
    likes: 0,
  })
  form.username = ''
  form.content = ''
  ElMessage.success('留言发布成功')
}
</script>

<template>
  <div class="guestbook">
    <div class="guestbook__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" />
        <h1 class="guestbook__title">留言板</h1>
        <p class="guestbook__subtitle">分享你的湘西旅行体验，与其他游客交流心得</p>
      </div>
    </div>

    <div class="container guestbook__body">
      <div class="guestbook__form-card">
        <h3 class="guestbook__form-title">写留言</h3>
        <el-input
          v-model="form.username"
          placeholder="你的昵称"
          maxlength="20"
          class="guestbook__input"
        />
        <el-input
          v-model="form.content"
          type="textarea"
          placeholder="写下你想说的话..."
          maxlength="500"
          show-word-limit
          :rows="3"
        />
        <el-button type="primary" class="guestbook__submit-btn" @click="handleSubmit"
          >发布留言</el-button
        >
      </div>

      <div class="guestbook__list">
        <div v-for="msg in messages" :key="msg.id" class="guestbook__msg-card">
          <div class="guestbook__msg-header">
            <div class="guestbook__msg-user">
              <el-avatar :size="40" :src="msg.avatar" />
              <div>
                <span class="guestbook__msg-username">{{ msg.username }}</span>
                <span class="guestbook__msg-time">{{ msg.time }}</span>
              </div>
            </div>
            <span class="guestbook__msg-likes">
              <el-icon><StarFilled /></el-icon>
              {{ msg.likes }}
            </span>
          </div>
          <p class="guestbook__msg-content">{{ msg.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guestbook__hero {
  background: linear-gradient(135deg, #1a3a5c 0%, #2d5a8e 50%, #1a4a3a 100%);
  padding: 120px 0 60px;
  text-align: center;
}

.guestbook__hero :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.65);
}
.guestbook__hero :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}
.guestbook__hero :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.85);
}

.guestbook__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 42px;
  color: #fff;
  letter-spacing: 8px;
  margin: 16px 0 12px;
}

.guestbook__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.guestbook__body {
  padding: var(--spacing-2xl) 0;
  max-width: 720px;
  margin: 0 auto;
}

.guestbook__form-card {
  background: #fff;
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-xl);
}

.guestbook__form-title {
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.guestbook__input {
  margin-bottom: var(--spacing-md);
}

.guestbook__submit-btn {
  margin-top: var(--spacing-md);
  width: 100%;
}

.guestbook__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.guestbook__msg-card {
  background: #fff;
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.guestbook__msg-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.guestbook__msg-user {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.guestbook__msg-username {
  display: block;
  font-size: 15px;
  color: var(--color-text);
  font-weight: 500;
}

.guestbook__msg-time {
  font-size: 12px;
  color: var(--color-text-muted);
}

.guestbook__msg-likes {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: var(--color-text-muted);
}

.guestbook__msg-likes .el-icon {
  color: #f59e0b;
}

.guestbook__msg-content {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .guestbook__title {
    font-size: 32px;
  }
}
</style>
