<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found">
    <div class="not-found__card">
      <h1 class="not-found__code">404</h1>
      <div class="not-found__divider">
        <span class="dot"></span>
        <span class="line"></span>
        <span class="dot"></span>
      </div>
      <p class="not-found__title">页面未找到</p>
      <p class="not-found__desc">莫向潇湘寻此路，且从此处返画屏</p>
      <RouterLink to="/" class="not-found__link">返回首页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a2a3a;
  padding: 40px 20px;
  position: relative;
}

.not-found::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(13, 27, 42, 0.6);
  backdrop-filter: blur(4px);
}

.not-found__card {
  position: relative;
  z-index: 1;
  text-align: center;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 8px;
  padding: 60px 50px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 1px solid #dcd3b2;
  max-width: 450px;
  width: 100%;
}

.not-found__code {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 96px;
  color: #922c21;
  line-height: 1;
  letter-spacing: 8px;
  margin-bottom: var(--spacing-md);
}

.not-found__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
}

.not-found__divider .line {
  width: 50px;
  height: 1px;
  background: #922c21;
  margin: 0 10px;
}

.not-found__divider .dot {
  width: 4px;
  height: 4px;
  background: #922c21;
  transform: rotate(45deg);
}

.not-found__title {
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  letter-spacing: 2px;
}

.not-found__desc {
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin-bottom: var(--spacing-xl);
}

.not-found__link {
  display: inline-block;
  padding: 12px 40px;
  background: #1a365d;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 2px;
  transition: all var(--transition-normal);
}

.not-found__link:hover {
  background: #2c5282;
  transform: translateY(-2px);
}
</style>
