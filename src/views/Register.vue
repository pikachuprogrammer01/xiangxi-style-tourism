<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
import {
  usernameRules,
  emailRules,
  passwordRules,
  confirmPasswordRules,
  phoneRules,
  checkPasswordStrength,
} from '@/utils/validators'
import { User, Message, Lock, View, Hide, Iphone } from '@element-plus/icons-vue'

const router = useRouter()
const userStore = useUserStore()

const registerFormRef = ref(null)
const registerForm = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
})
const showPassword = ref(false)
const showConfirm = ref(false)
const loading = ref(false)

const rules = computed(() => ({
  username: usernameRules,
  email: emailRules,
  password: passwordRules,
  confirmPassword: confirmPasswordRules(registerForm),
  phone: phoneRules,
}))

const strength = computed(() => checkPasswordStrength(registerForm.password))

function handleRegister() {
  registerFormRef.value?.validate((valid) => {
    if (!valid) return
    loading.value = true
    const result = userStore.register({
      username: registerForm.username,
      email: registerForm.email,
      password: registerForm.password,
      phone: registerForm.phone || '',
    })
    if (result.success) {
      ElMessage.success('注册成功，请登录')
      setTimeout(() => router.push('/login'), 800)
    } else {
      ElMessage.error(result.message)
      loading.value = false
    }
  })
}
</script>

<template>
  <div class="register-page">
    <div class="register-bg-overlay"></div>

    <div class="register-page__card">
      <div class="register-header">
        <h1 class="register-page__title">湘西风情</h1>
        <div class="title-divider">
          <span class="dot"></span>
          <span class="line"></span>
          <span class="dot"></span>
        </div>
        <p class="register-page__subtitle">莫向潇湘寻秘境，且从此处入画屏</p>
      </div>

      <el-form
        ref="registerFormRef"
        :model="registerForm"
        :rules="rules"
        label-position="top"
        @submit.prevent="handleRegister"
      >
        <el-form-item prop="username">
          <el-input
            v-model="registerForm.username"
            placeholder="设置您的雅号（用户名）"
            :prefix-icon="User"
            size="large"
          />
        </el-form-item>

        <el-form-item prop="email">
          <el-input
            v-model="registerForm.email"
            placeholder="邮箱地址（接收资讯）"
            :prefix-icon="Message"
            size="large"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="设置登录密码"
            :prefix-icon="Lock"
            size="large"
          >
            <template #suffix>
              <el-icon class="register-page__password-toggle" @click="showPassword = !showPassword">
                <View v-if="showPassword" /><Hide v-else />
              </el-icon>
            </template>
          </el-input>
          <div v-if="registerForm.password" class="register-page__strength">
            <div class="register-page__strength-bar">
              <span
                class="register-page__strength-fill"
                :class="`register-page__strength-fill--level${strength.level}`"
              ></span>
            </div>
            <span class="register-page__strength-label" :style="{ color: strength.color }">
              墨韵强度：{{ strength.label }}
            </span>
          </div>
        </el-form-item>

        <el-form-item prop="confirmPassword">
          <el-input
            v-model="registerForm.confirmPassword"
            :type="showConfirm ? 'text' : 'password'"
            placeholder="再次确认密码"
            :prefix-icon="Lock"
            size="large"
          >
            <template #suffix>
              <el-icon class="register-page__password-toggle" @click="showConfirm = !showConfirm">
                <View v-if="showConfirm" /><Hide v-else />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="phone">
          <el-input
            v-model="registerForm.phone"
            placeholder="手机号（可选）"
            :prefix-icon="Iphone"
            size="large"
          />
        </el-form-item>

        <el-button
          type="primary"
          size="large"
          class="register-page__submit"
          :loading="loading"
          @click="handleRegister"
        >
          即刻开启
        </el-button>
      </el-form>

      <p class="register-page__footer">
        已有账号？<RouterLink to="/login" class="register-page__link">去登录</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a2a3a;
  padding: 40px 20px;
  position: relative;
}

.register-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 27, 42, 0.6);
  backdrop-filter: blur(4px);
}

.register-page__card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 1px solid #dcd3b2;
}

.register-header {
  text-align: center;
  margin-bottom: 25px;
}

.register-page__title {
  font-family: 'STKaiti', 'KaiTi', serif;
  font-size: 32px;
  color: #922c21; /* 朱砂红 */
  margin: 0;
  letter-spacing: 4px;
}

.title-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
}

.title-divider .line {
  width: 40px;
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

.register-page__subtitle {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

/* 输入框重写 - 宣纸质感 */
:deep(.el-input__wrapper) {
  background-color: #fcfaf2 !important;
  border-radius: 0;
  box-shadow: none !important;
  border-bottom: 1px solid #dcd3b2;
}

:deep(.el-input__wrapper.is-focus) {
  border-bottom: 1px solid #922c21;
}

.register-page__password-toggle {
  cursor: pointer;
  color: #a89f8d;
}

/* 密码强度样式 */
.register-page__strength {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.register-page__strength-bar {
  flex: 1;
  max-width: 100px;
  height: 3px;
  background: #e5e5e5;
  border-radius: 2px;
}

.register-page__strength-fill {
  display: block;
  height: 100%;
  transition: all 0.4s ease;
}

.register-page__strength-fill--level1 {
  width: 33%;
  background: #922c21;
} /* 红色 */
.register-page__strength-fill--level2 {
  width: 66%;
  background: #b8860b;
} /* 琥珀色 */
.register-page__strength-fill--level3 {
  width: 100%;
  background: #1a365d;
} /* 靛蓝色 */

.register-page__strength-label {
  font-size: 12px;
  font-family: 'KaiTi', serif;
}

/* 按钮 - 靛蓝色 */
.register-page__submit {
  width: 100%;
  background-color: #1a365d !important;
  border-color: #1a365d !important;
  border-radius: 4px;
  height: 45px;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 10px;
}

.register-page__submit:hover {
  background-color: #2c5282 !important;
  transform: translateY(-1px);
}

.register-page__footer {
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
  color: #666;
}

.register-page__link {
  color: #922c21;
  text-decoration: none;
  font-weight: bold;
}

.register-page__link:hover {
  text-decoration: underline;
}

/* 针对移动端优化 */
@media (max-width: 480px) {
  .register-page__card {
    padding: 30px 20px;
    margin: 10px;
  }
}
</style>
