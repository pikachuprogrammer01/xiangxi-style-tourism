<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import { SITE_NAME } from '@/constants'
import { Location, Message, Star } from '@element-plus/icons-vue'

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '关于我们' },
]

const features = [
  { icon: Star, title: '精选内容', desc: '精心挑选湘西最具代表性的景点、美食和文化体验，让您一站式了解湘西。' },
  { icon: Location, title: '实用攻略', desc: '提供详细的交通指南、游玩路线和美食推荐，让您的湘西之旅更加便捷。' },
  { icon: Message, title: '文化传播', desc: '致力于传播湘西独特的民族文化，让更多人了解这片神秘而美丽的土地。' },
]
</script>

<template>
  <div class="about-page">
    <div class="about-page__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" class="about-page__breadcrumb" />
        <h1 class="about-page__title">关于我们</h1>
        <p class="about-page__subtitle">走进湘西，感受千年文化的魅力</p>
      </div>
    </div>

    <div class="container about-page__body">
      <section class="about-page__intro">
        <h2 class="about-page__section-title">{{ SITE_NAME }}</h2>
        <p class="about-page__text">
          {{ SITE_NAME }}是一个专注于湘西旅游文化推广的在线平台。我们致力于为游客提供最全面的湘西旅游资讯，
          涵盖凤凰古城、张家界、芙蓉镇等著名景点的详细介绍，以及湘西腊肉、苗家酸汤鱼、血粑鸭等地方美食的文化故事与制作工艺。
        </p>
        <p class="about-page__text">
          湘西，这片位于湖南西部的神奇土地，是土家族、苗族的聚居地。这里有巍峨的峰林、秀美的沱江、古朴的吊脚楼、
          浓郁的民俗风情和令人垂涎的美食。无论是沈从文笔下的边城凤凰，还是阿凡达取景地的张家界，每一处都承载着
          深厚的历史文化底蕴。
        </p>
      </section>

      <section class="about-page__features">
        <h2 class="about-page__section-title about-page__section-title--center">我们的特色</h2>
        <div class="about-page__features-grid">
          <div v-for="item in features" :key="item.title" class="about-page__feature">
            <div class="about-page__feature-icon">
              <el-icon :size="28"><component :is="item.icon" /></el-icon>
            </div>
            <h3 class="about-page__feature-title">{{ item.title }}</h3>
            <p class="about-page__feature-desc">{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <section class="about-page__contact">
        <h2 class="about-page__section-title">联系我们</h2>
        <div class="about-page__contact-grid">
          <div class="about-page__contact-item">
            <span class="about-page__contact-label">联系邮箱</span>
            <span class="about-page__contact-value">xiangxi@example.com</span>
          </div>
          <div class="about-page__contact-item">
            <span class="about-page__contact-label">服务时间</span>
            <span class="about-page__contact-value">周一至周日 9:00 - 18:00</span>
          </div>
          <div class="about-page__contact-item">
            <span class="about-page__contact-label">合作景区</span>
            <span class="about-page__contact-value">凤凰古城 / 张家界 / 芙蓉镇</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page__hero {
  background: linear-gradient(135deg, #1a365d, #2d5a87);
  padding: var(--spacing-xl) 0;
  color: #fff;
}

.about-page__breadcrumb {
  margin-bottom: var(--spacing-md);
}

.about-page__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.about-page__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.about-page__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.about-page__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 32px;
  letter-spacing: 4px;
  margin-bottom: var(--spacing-sm);
}

.about-page__subtitle {
  font-size: 15px;
  opacity: 0.8;
  font-style: italic;
}

.about-page__body {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.about-page__section-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 22px;
  color: #922c21;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid #dcd3b2;
}

.about-page__section-title--center {
  text-align: center;
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: var(--spacing-xl);
}

.about-page__text {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.9;
  text-indent: 2em;
  margin-bottom: var(--spacing-md);
}

.about-page__text:last-child {
  margin-bottom: 0;
}

/* 特色卡片 */
.about-page__features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.about-page__feature {
  text-align: center;
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl) var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal);
}

.about-page__feature:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.about-page__feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(26, 54, 93, 0.08);
  color: #1a365d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
}

.about-page__feature-title {
  font-size: 17px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.about-page__feature-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* 联系信息 */
.about-page__contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.about-page__contact-item {
  background: #fcfaf2;
  border: 1px solid #dcd3b2;
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-page__contact-label {
  font-size: 12px;
  color: var(--color-text-light);
}

.about-page__contact-value {
  font-size: 14px;
  color: var(--color-text);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-page__features-grid,
  .about-page__contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
