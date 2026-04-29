<script setup>
import { RouterLink } from 'vue-router'
import HeaderNav from '@/components/common/HeaderNav.vue'
import FooterBar from '@/components/common/FooterBar.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAuthPage = computed(() => route.name === 'Login' || route.name === 'Register')
</script>

<template>
  <template v-if="isAuthPage">
    <header class="app-auth-header">
      <RouterLink to="/" class="app-auth-header__logo">湘西风情</RouterLink>
      <span class="app-auth-header__title">{{ route.name === 'Login' ? '登录' : '注册' }}</span>
    </header>
    <main class="app-main app-main--auth">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </template>

  <template v-else>
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
</template>

<style scoped>
.app-main {
  padding-top: var(--header-height);
  min-height: calc(100vh - var(--header-height));
}

.app-main--auth {
  padding-top: 0;
  min-height: 100vh;
}

.app-auth-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-lg);
  background: transparent;
}

.app-auth-header__logo {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
}

.app-auth-header__title {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
}
</style>
