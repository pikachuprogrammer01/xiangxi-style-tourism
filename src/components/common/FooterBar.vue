<script setup>
import { RouterLink } from 'vue-router'
import { Message, Phone, Location } from '@element-plus/icons-vue'
</script>

<template>
  <footer class="footer-bar">
    <div class="footer-bar__main">
      <div class="footer-bar__inner">
        <div class="footer-bar__col">
          <h4 class="footer-bar__col-title">关于我们</h4>
          <p class="footer-bar__about-text">
            湘西风情致力于推广湘西土家族苗族自治州的自然风光、民俗文化和特色美食，让更多人了解湘西、爱上湘西、走进湘西。
          </p>
        </div>

        <div class="footer-bar__col">
          <h4 class="footer-bar__col-title">快速导航</h4>
          <ul class="footer-bar__nav-list">
            <li><RouterLink to="/attractions" class="footer-bar__link">景点总览</RouterLink></li>
            <li><RouterLink to="/foods" class="footer-bar__link">美食推荐</RouterLink></li>
            <li><RouterLink to="/about" class="footer-bar__link">关于我们</RouterLink></li>
            <li><RouterLink to="/profile" class="footer-bar__link">个人中心</RouterLink></li>
          </ul>
        </div>

        <div class="footer-bar__col">
          <h4 class="footer-bar__col-title">联系方式</h4>
          <ul class="footer-bar__contact-list">
            <li class="footer-bar__contact-item">
              <el-icon><Message /></el-icon>
              <span>contact@xiangxi-style.cn</span>
            </li>
            <li class="footer-bar__contact-item">
              <el-icon><Phone /></el-icon>
              <span>0743-8888888</span>
            </li>
            <li class="footer-bar__contact-item">
              <el-icon><Location /></el-icon>
              <span>湖南省湘西土家族苗族自治州</span>
            </li>
          </ul>
        </div>

        <div class="footer-bar__col">
          <h4 class="footer-bar__col-title">关注我们</h4>
          <div class="footer-bar__social">
            <span class="footer-bar__social-item">微信公众号</span>
            <span class="footer-bar__social-item">新浪微博</span>
            <span class="footer-bar__social-item">抖音短视频</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bar__bottom">
      <p>&copy; 2024 湘西风情 版权所有 | 毕业设计作品</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-bar {
  background: #1f2937;
  color: #e5e7eb;
  margin-top: var(--spacing-2xl);
}

.footer-bar__main {
  padding: var(--spacing-2xl) 0;
}

.footer-bar__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr 1fr;
  gap: var(--spacing-xl);
}

.footer-bar__col-title {
  font-size: 16px;
  color: #fff;
  margin-bottom: var(--spacing-md);
  position: relative;
  padding-bottom: var(--spacing-sm);
}

.footer-bar__col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background: var(--color-primary);
}

.footer-bar__about-text {
  font-size: 14px;
  line-height: 1.8;
  color: #9ca3af;
}

.footer-bar__nav-list,
.footer-bar__contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-bar__nav-list li {
  margin-bottom: var(--spacing-sm);
}

.footer-bar__link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color var(--transition-fast);
}

.footer-bar__link:hover {
  color: #fff;
}

.footer-bar__contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  font-size: 14px;
  color: #9ca3af;
}

.footer-bar__contact-item .el-icon {
  color: var(--color-primary);
}

.footer-bar__social {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-bar__social-item {
  font-size: 14px;
  color: #9ca3af;
  cursor: default;
}

.footer-bar__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-md) 0;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

@media (max-width: 1200px) {
  .footer-bar__inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .footer-bar__inner {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .footer-bar__main {
    padding: var(--spacing-xl) 0;
  }
}
</style>
