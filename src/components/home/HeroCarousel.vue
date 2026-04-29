<script setup>
const slides = [
  {
    image: '/images/carousel/hero-1-fenghuang-night.jpg',
    title: '探秘凤凰古城',
    subtitle: '沱江灯火，千年一梦',
  },
  {
    image: '/images/carousel/hero-2-fenghuang-aerial.jpg',
    title: '俯瞰湘西大地',
    subtitle: '山水画卷，尽收眼底',
  },
  {
    image: '/images/carousel/hero-3-fenghuang-bridge.jpg',
    title: '虹桥遗梦',
    subtitle: '边城故事，湘西风情',
  },
  {
    image: '/images/carousel/hero-4-zhangjiajie-misty.jpg',
    title: '奇峰仙境',
    subtitle: '张家界 — 阿凡达的灵感之源',
  },
  {
    image: '/images/carousel/hero-5-zhangjiajie-pillars.jpg',
    title: '千峰竞秀',
    subtitle: '世界自然遗产的壮丽奇观',
  },
]
</script>

<template>
  <div class="hero-carousel">
    <el-carousel :interval="5000" arrow="always" :pause-on-hover="true">
      <el-carousel-item v-for="(slide, index) in slides" :key="index">
        <div class="hero-carousel__slide">
          <img :src="slide.image" :alt="slide.title" class="hero-carousel__image" />
          <div class="hero-carousel__overlay">
            <h2 class="hero-carousel__title">{{ slide.title }}</h2>
            <p class="hero-carousel__subtitle">{{ slide.subtitle }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.hero-carousel {
  width: 100%;
}

.hero-carousel :deep(.el-carousel__container) {
  height: 70vh;
}

.hero-carousel__slide {
  position: relative;
  width: 100%;
  height: 70vh;
}

.hero-carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-carousel__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  color: #fff;
  text-align: center;
}

.hero-carousel__title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.hero-carousel__subtitle {
  font-size: 18px;
  opacity: 0.9;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .hero-carousel :deep(.el-carousel__container),
  .hero-carousel__slide {
    height: 50vh;
  }

  .hero-carousel__title {
    font-size: 24px;
  }

  .hero-carousel__subtitle {
    font-size: 14px;
  }
}
</style>
