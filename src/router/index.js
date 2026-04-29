import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: { title: '首页 - 湘西风情' },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: { title: '登录 - 湘西风情', guest: true },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register.vue'),
      meta: { title: '注册 - 湘西风情', guest: true },
    },
    {
      path: '/attractions',
      name: 'Attractions',
      component: () => import('@/views/Attractions.vue'),
      meta: { title: '景点总览 - 湘西风情' },
    },
    {
      path: '/attraction/:id',
      name: 'AttractionDetail',
      component: () => import('@/views/AttractionDetail.vue'),
      meta: { title: '景点详情 - 湘西风情' },
    },
    {
      path: '/foods',
      name: 'Foods',
      component: () => import('@/views/Foods.vue'),
      meta: { title: '美食推荐 - 湘西风情' },
    },
    {
      path: '/food/:id',
      name: 'FoodDetail',
      component: () => import('@/views/FoodDetail.vue'),
      meta: { title: '美食详情 - 湘西风情' },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/Profile.vue'),
      meta: { title: '个人中心 - 湘西风情', requiresAuth: true },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
      meta: { title: '关于我们 - 湘西风情' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: { title: '页面未找到 - 湘西风情' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  document.title = to.meta.title || '湘西风情'

  const store = useUserStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  if (to.meta.guest && store.isLoggedIn) {
    return { path: '/' }
  }
})

export default router
