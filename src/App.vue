<script setup>
import HeaderNav from '@/components/common/HeaderNav.vue'
import FooterBar from '@/components/common/FooterBar.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <HeaderNav :transparent="route.name === 'Home'" />
  <main class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterBar />
  <BackToTop />
</template>

<style scoped>
.app-main {
  padding-top: var(--header-height);
  min-height: calc(100vh - var(--header-height));
}
</style>
