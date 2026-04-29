<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { usernameRules, passwordRules } from '@/utils/validators'
import { User, Lock, View, Hide } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const loginFormRef = ref(null)
const loginForm = reactive({
  username: '',
  password: '',
  remember: false,
})
const showPassword = ref(false)
const loading = ref(false)

const rules = {
  username: usernameRules,
  password: passwordRules,
}

function handleLogin() {
  loginFormRef.value?.validate((valid) => {
    if (!valid) return
    loading.value = true
    const success = userStore.login(loginForm.username, loginForm.password)
    if (success) {
      ElMessage.success('登录成功')
      const redirect = route.query.redirect || '/'
      setTimeout(() => router.push(redirect), 800)
    } else {
      ElMessage.error('用户名或密码错误')
      loginForm.password = ''
      loading.value = false
    }
  })
}
</script>

<template>
  <div class="login-page">
    <div class="login-bg-overlay"></div>

    <div class="login-page__card">
      <div class="login-header">
        <h1 class="login-page__title">湘西风情</h1>
        <div class="title-divider">
          <span class="dot"></span>
          <span class="line"></span>
          <span class="dot"></span>
        </div>
        <p class="login-page__subtitle">探寻秘境，登录您的文化之旅</p>
      </div>

      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-position="top"
        @submit.prevent="handleLogin"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="账号 / 用户名"
            :prefix-icon="User"
            size="large"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="密码"
            :prefix-icon="Lock"
            size="large"
          >
            <template #suffix>
              <el-icon class="login-page__password-toggle" @click="showPassword = !showPassword">
                <View v-if="showPassword" /><Hide v-else />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>

        <div class="login-page__options">
          <el-checkbox v-model="loginForm.remember" label="记住账号" />
          <span class="forget-pwd">忘记密码？</span>
        </div>

        <el-button
          type="primary"
          size="large"
          class="login-page__submit"
          :loading="loading"
          @click="handleLogin"
        >
          开启旅程
        </el-button>
      </el-form>

      <p class="login-page__footer">
        初来乍到？<RouterLink to="/register" class="login-page__link">立即注册</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a2a3a;
  padding: 20px;
  position: relative;
}

/* 遮罩层，让背景看起来更有质感 */
.login-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 27, 42, 0.6);
  backdrop-filter: blur(4px);
}

.login-page__card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  /* 模拟宣纸边框感 */
  border: 1px solid #dcd3b2;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-page__title {
  font-family: 'STKaiti', 'KaiTi', serif; /* 使用楷体增强文化感 */
  font-size: 32px;
  color: #922c21; /* 朱砂红 */
  margin: 0;
  letter-spacing: 4px;
}

.title-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.title-divider .line {
  width: 50px;
  height: 1px;
  background: #922c21;
  margin: 0 10px;
}

.title-divider .dot {
  width: 4px;
  height: 4px;
  background: #922c21;
  transform: rotate(45deg);
}

.login-page__subtitle {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

/* 输入框样式重写 */
:deep(.el-input__wrapper) {
  background-color: #fcfaf2 !important;
  border-radius: 0; /* 方正感 */
  box-shadow: none !important;
  border-bottom: 1px solid #dcd3b2;
}

:deep(.el-input__wrapper.is-focus) {
  border-bottom: 1px solid #922c21;
}

.login-page__options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: 14px;
}

.forget-pwd {
  color: #666;
  cursor: pointer;
}

/* 按钮样式：靛青色 */
.login-page__submit {
  width: 100%;
  background-color: #1a365d !important;
  border-color: #1a365d !important;
  border-radius: 4px;
  height: 45px;
  font-size: 16px;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.login-page__submit:hover {
  background-color: #2c5282 !important;
  transform: translateY(-2px);
}

.login-page__footer {
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
  color: #666;
}

.login-page__link {
  color: #922c21;
  text-decoration: none;
  font-weight: bold;
}

.login-page__link:hover {
  text-decoration: underline;
}
</style>
