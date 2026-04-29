<script setup>
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
import { cultures } from '@/constants/cultures'

const route = useRoute()
const router = useRouter()

const culture = computed(() => cultures.find((c) => c.id === route.params.id))

if (!culture.value) {
  router.replace('/404')
}

const breadcrumbItems = computed(() => [
  { name: '首页', path: '/' },
  { name: '湘西文化', path: '/' },
  { name: culture.value?.name || '' },
])
</script>

<template>
  <div v-if="culture" class="culture-detail">
    <div class="culture-detail__hero">
      <img :src="culture.heroImage" :alt="culture.name" class="culture-detail__cover" />
      <div class="culture-detail__hero-overlay">
        <div class="container">
          <BreadcrumbNav :items="breadcrumbItems" class="culture-detail__breadcrumb" />
          <h1 class="culture-detail__title">{{ culture.name }}</h1>
          <p class="culture-detail__subtitle">{{ culture.subtitle }}</p>
        </div>
      </div>
    </div>

    <div class="container culture-detail__body">
      <section class="culture-detail__section">
        <p class="culture-detail__intro">{{ culture.intro }}</p>
      </section>

      <section
        v-for="(section, i) in culture.sections"
        :key="i"
        class="culture-detail__section"
      >
        <h2 class="culture-detail__section-title">{{ section.title }}</h2>
        <div class="culture-detail__section-body" :class="{ 'culture-detail__section-body--reverse': i % 2 === 1 }">
          <div class="culture-detail__text">
            <p>{{ section.content }}</p>
          </div>
          <div v-if="section.image" class="culture-detail__image-wrap">
            <img :src="section.image" :alt="section.title" class="culture-detail__image" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.culture-detail__hero {
  position: relative;
  height: 360px;
}

.culture-detail__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.culture-detail__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--spacing-xl);
}

.culture-detail__breadcrumb :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.7);
}

.culture-detail__breadcrumb :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}

.culture-detail__breadcrumb :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.9);
}

.culture-detail__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 40px;
  color: #fff;
  letter-spacing: 6px;
  margin-bottom: var(--spacing-sm);
}

.culture-detail__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
}

.culture-detail__body {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
}

.culture-detail__section {
  margin-bottom: var(--spacing-xl);
}

.culture-detail__intro {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.9;
  text-indent: 2em;
}

.culture-detail__section-title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 20px;
  color: #922c21;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid #dcd3b2;
}

.culture-detail__section-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.culture-detail__section-body--reverse .culture-detail__image-wrap {
  order: -1;
}

.culture-detail__text {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.9;
  text-indent: 2em;
}

.culture-detail__image-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
}

.culture-detail__image {
  width: 100%;
  height: 100%;
  max-height: 360px;
  object-fit: cover;
  border-radius: var(--radius-md);
  transition: transform var(--transition-normal);
}

.culture-detail__image:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .culture-detail__hero {
    height: 240px;
  }

  .culture-detail__title {
    font-size: 28px;
  }

  .culture-detail__section-body {
    grid-template-columns: 1fr;
  }

  .culture-detail__section-body--reverse .culture-detail__image-wrap {
    order: 0;
  }
}
</style>
