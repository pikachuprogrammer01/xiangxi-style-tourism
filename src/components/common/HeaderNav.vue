<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

defineProps({
  transparent: { type: Boolean, default: false },
})

const userStore = useUserStore()
const router = useRouter()

const isScrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function handleLogout() {
  ElMessageBox.confirm('确定要退出登录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    userStore.logout()
    ElMessage.success('已退出登录')
    router.push('/')
  }).catch(() => {})
}

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="header-nav"
    :class="{
      'header-nav--transparent': transparent && !isScrolled,
      'header-nav--solid': !transparent || isScrolled,
    }"
  >
    <div class="header-nav__inner">
      <RouterLink to="/" class="header-nav__logo" @click="closeMobile">湘西风情</RouterLink>

      <nav class="header-nav__links" :class="{ 'header-nav__links--open': mobileOpen }">
        <RouterLink
          to="/"
          class="header-nav__link"
          active-class="header-nav__link--active"
          exact
          @click="closeMobile"
          >首页</RouterLink
        >
        <RouterLink
          to="/attractions"
          class="header-nav__link"
          active-class="header-nav__link--active"
          @click="closeMobile"
          >景点总览</RouterLink
        >
        <RouterLink
          to="/foods"
          class="header-nav__link"
          active-class="header-nav__link--active"
          @click="closeMobile"
          >美食推荐</RouterLink
        >
        <RouterLink
          to="/about"
          class="header-nav__link"
          active-class="header-nav__link--active"
          @click="closeMobile"
          >关于我们</RouterLink
        >
      </nav>

      <div class="header-nav__actions">
        <template v-if="userStore.isLoggedIn">
          <el-dropdown trigger="click">
            <span class="header-nav__user">
              <el-avatar
                :size="32"
                :src="`https://api.dicebear.com/9.x/avataaars/svg?seed=${userStore.userInfo?.username || 'user'}`"
              />
              <span class="header-nav__username">{{ userStore.userInfo?.username }}</span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/profile')">个人中心</el-dropdown-item>
                <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <div class="header-nav-btn" v-else>
          <RouterLink to="/login" class="header-nav__login-btn">登录</RouterLink>
          <RouterLink to="/register" class="header-nav__register-btn">注册</RouterLink>
        </div>

        <button class="header-nav__hamburger" @click="mobileOpen = !mobileOpen">
          <span
            :class="{
              'header-nav__hamburger-line': true,
              'header-nav__hamburger-line--open': mobileOpen,
            }"
          ></span>
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="header-nav__overlay" @click="closeMobile"></div>
  </header>
</template>

<style scoped>
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.header-nav--transparent {
  background: transparent;
}

.header-nav--solid {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

.header-nav__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-nav__logo {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: 2px;
  flex-shrink: 0;
}

.header-nav--transparent .header-nav__logo {
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.header-nav__links {
  display: flex;
  gap: var(--spacing-xl);
}

.header-nav__link {
  color: var(--color-text);
  text-decoration: none;
  font-size: 15px;
  position: relative;
  padding: 4px 0;
  transition: color var(--transition-fast);
}

.header-nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-normal);
}

.header-nav__link:hover,
.header-nav__link--active {
  color: var(--color-primary);
}

.header-nav__link:hover::after,
.header-nav__link--active::after {
  width: 100%;
}

.header-nav--transparent .header-nav__link {
  color: rgba(255, 255, 255, 0.9);
}

.header-nav--transparent .header-nav__link:hover,
.header-nav--transparent .header-nav__link--active {
  color: #fff;
}

.header-nav--transparent .header-nav__link::after {
  background: #fff;
}

.header-nav__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-shrink: 0;
}

.header-nav__user {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  color: var(--color-text);
}

.header-nav--transparent .header-nav__username {
  color: #fff;
}

.header-nav__username {
  font-size: 14px;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.header-nav__login-btn,
.header-nav__register-btn {
  margin-right: 6px;
  padding: 6px 20px;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: 14px;
  transition: background var(--transition-fast);
}

.header-nav__login-btn:hover,
.header-nav__register-btn:hover {
  background: var(--color-primary-dark);
}

.header-nav__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.header-nav__hamburger-line,
.header-nav__hamburger-line::before,
.header-nav__hamburger-line::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  transition: all 0.3s ease;
}

.header-nav--transparent .header-nav__hamburger-line,
.header-nav--transparent .header-nav__hamburger-line::before,
.header-nav--transparent .header-nav__hamburger-line::after {
  background: #fff;
}

.header-nav__hamburger-line {
  position: relative;
}

.header-nav__hamburger-line::before,
.header-nav__hamburger-line::after {
  content: '';
  position: absolute;
  left: 0;
}

.header-nav__hamburger-line::before {
  top: -6px;
}

.header-nav__hamburger-line::after {
  top: 6px;
}

.header-nav__hamburger-line--open {
  background: transparent !important;
}

.header-nav__hamburger-line--open::before {
  top: 0;
  transform: rotate(45deg);
}

.header-nav__hamburger-line--open::after {
  top: 0;
  transform: rotate(-45deg);
}

.header-nav__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

@media (max-width: 768px) {
  .header-nav__hamburger {
    display: flex;
  }

  .header-nav__links {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    padding: var(--spacing-md) var(--spacing-lg);
    gap: 0;
    box-shadow: var(--shadow-md);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  .header-nav__links--open {
    transform: translateY(0);
  }

  .header-nav__link {
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 16px;
  }

  .header-nav__link::after {
    display: none;
  }
}
</style>
