<script setup>
import { Sunny, Brush, Present } from '@element-plus/icons-vue'

const items = [
  {
    icon: Sunny,
    title: '民俗文化',
    image: '/images/culture/culture-01-miao-costume.jpg',
    desc: '湘西是苗族、土家族等少数民族的聚居地，拥有丰富的民俗文化。苗族的银饰锻制技艺、土家族的摆手舞、苗族的四月八、土家族的社巴节等，构成了湘西独特的民俗文化画卷。',
  },
  {
    icon: Brush,
    title: '传统手工艺',
    image: '/images/culture/culture-02-miao-women.jpg',
    desc: '苗族银饰、土家织锦（西兰卡普）、苗族刺绣、蜡染等传统手工艺，是湘西人民智慧的结晶。每一件手工艺品都承载着千年的文化记忆和匠人精神。',
  },
  {
    icon: Present,
    title: '节庆活动',
    image: '/images/culture/culture-03-miao-headdress.jpg',
    desc: '苗年、土家赶年、四月八、六月六、赶秋节……湘西的节庆活动丰富多彩。每逢节庆，各族人民身着盛装，载歌载舞，展示着湘西人民的热情与活力。',
  },
]
</script>

<template>
  <section class="culture-highlights">
    <div class="container">
      <div class="culture-highlights__header">
        <h2 class="culture-highlights__title">湘西文化</h2>
        <p class="culture-highlights__subtitle">领略多彩民族风情，感受千年文化传承</p>
      </div>

      <div class="culture-highlights__grid">
        <div v-for="item in items" :key="item.title" class="culture-highlights__card">
          <div class="culture-highlights__image-wrap">
            <img :src="item.image" :alt="item.title" class="culture-highlights__image" />
            <div class="culture-highlights__icon">
              <el-icon :size="28"><component :is="item.icon" /></el-icon>
            </div>
          </div>
          <div class="culture-highlights__content">
            <h3 class="culture-highlights__card-title">{{ item.title }}</h3>
            <p class="culture-highlights__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.culture-highlights {
  padding: var(--spacing-2xl) 0;
  background: var(--color-bg-gray);
}

.culture-highlights__header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.culture-highlights__title {
  font-size: 28px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.culture-highlights__subtitle {
  font-size: 16px;
  color: var(--color-text-secondary);
}

.culture-highlights__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.culture-highlights__card {
  background: var(--color-bg-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal);
}

.culture-highlights__card:hover {
  transform: translateY(-4px);
}

.culture-highlights__image-wrap {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.culture-highlights__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.culture-highlights__card:hover .culture-highlights__image {
  transform: scale(1.05);
}

.culture-highlights__icon {
  position: absolute;
  bottom: -20px;
  left: var(--spacing-md);
  width: 48px;
  height: 48px;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.culture-highlights__content {
  padding: var(--spacing-lg) var(--spacing-md) var(--spacing-md);
}

.culture-highlights__card-title {
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.culture-highlights__desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

@media (max-width: 1200px) {
  .culture-highlights__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .culture-highlights__grid {
    grid-template-columns: 1fr;
  }
}
</style>
