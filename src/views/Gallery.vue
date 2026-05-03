<script setup>
import { galleryPhotos, GALLERY_CATEGORIES } from '@/constants/gallery'

const breadcrumbItems = [
  { name: '首页', path: '/' },
  { name: '摄影画廊' },
]

const activeCategory = ref('全部')
const lightboxPhoto = ref(null)

const filteredPhotos = computed(() =>
  activeCategory.value === '全部'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory.value),
)

function openLightbox(photo) {
  lightboxPhoto.value = photo
}

function closeLightbox() {
  lightboxPhoto.value = null
}
</script>

<template>
  <div class="gallery">
    <div class="gallery__hero">
      <div class="container">
        <BreadcrumbNav :items="breadcrumbItems" />
        <h1 class="gallery__title">摄影画廊</h1>
        <p class="gallery__subtitle">用镜头记录湘西的山水之美、人文之韵</p>
      </div>
    </div>

    <div class="container gallery__body">
      <div class="gallery__filters">
        <button
          v-for="cat in GALLERY_CATEGORIES"
          :key="cat"
          class="gallery__filter-btn"
          :class="{ 'gallery__filter-btn--active': activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="gallery__grid">
        <div
          v-for="photo in filteredPhotos"
          :key="photo.id"
          class="gallery__item"
          @click="openLightbox(photo)"
        >
          <img :src="photo.src" :alt="photo.title" class="gallery__img" />
          <div class="gallery__item-overlay">
            <h3 class="gallery__item-title">{{ photo.title }}</h3>
            <span class="gallery__item-cat">{{ photo.category }}</span>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxPhoto"
        class="gallery__lightbox"
        @click.self="closeLightbox"
      >
        <button class="gallery__lightbox-close" @click="closeLightbox">&times;</button>
        <img
          :src="lightboxPhoto.src"
          :alt="lightboxPhoto.title"
          class="gallery__lightbox-img"
        />
        <h3 class="gallery__lightbox-title">{{ lightboxPhoto.title }}</h3>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery__hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 120px 0 60px;
  text-align: center;
}

.gallery__hero :deep(.breadcrumb-nav__link) {
  color: rgba(255, 255, 255, 0.65);
}
.gallery__hero :deep(.breadcrumb-nav__link:hover) {
  color: #fff;
}
.gallery__hero :deep(.breadcrumb-nav__current) {
  color: rgba(255, 255, 255, 0.85);
}

.gallery__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 42px;
  color: #fff;
  letter-spacing: 8px;
  margin: 16px 0 12px;
}

.gallery__subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.gallery__body {
  padding: var(--spacing-2xl) 0;
}

.gallery__filters {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xl);
  justify-content: center;
}

.gallery__filter-btn {
  padding: 8px 24px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: #fff;
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.gallery__filter-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.gallery__filter-btn--active {
  color: #fff;
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}

.gallery__item {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.gallery__item:hover .gallery__img {
  transform: scale(1.08);
}

.gallery__item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-md);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery__item:hover .gallery__item-overlay {
  opacity: 1;
}

.gallery__item-title {
  font-size: 14px;
  color: #fff;
  margin-bottom: 4px;
}

.gallery__item-cat {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.gallery__lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.gallery__lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  line-height: 1;
}

.gallery__lightbox-img {
  max-width: 90vw;
  max-height: 75vh;
  object-fit: contain;
  border-radius: var(--radius-sm);
}

.gallery__lightbox-title {
  margin-top: 20px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

@media (max-width: 992px) {
  .gallery__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery__title {
    font-size: 32px;
  }
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
