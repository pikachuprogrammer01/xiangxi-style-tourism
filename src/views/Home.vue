<script setup>
import HeroCarousel from '@/components/home/HeroCarousel.vue'
import HotRecommend from '@/components/home/HotRecommend.vue'
import CultureHighlights from '@/components/home/CultureHighlights.vue'
import FoodPreview from '@/components/home/FoodPreview.vue'
import { attractions } from '@/constants/attractions'
import { foods } from '@/constants/foods'
</script>

<template>
  <div class="home-page">
    <HeroCarousel />
    <HotRecommend :attractions="attractions" />
    <CultureHighlights />
    <FoodPreview :foods="foods" />
  </div>
</template>

<style scoped>
.home-page {
  margin-top: calc(-1 * var(--header-height));
}
</style>
