export const usernameRules = [
  { required: true, message: '请输入用户名', trigger: 'blur' },
  { min: 3, max: 20, message: '用户名长度为3-20个字符', trigger: 'blur' },
  { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线', trigger: 'blur' },
]

export const emailRules = [
  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
  { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
]

export const passwordRules = [
  { required: true, message: '请输入密码', trigger: 'blur' },
  { min: 6, max: 20, message: '密码长度为6-20个字符', trigger: 'blur' },
  {
    pattern: /^(?=.*[a-zA-Z])(?=.*\d)/,
    message: '密码必须同时包含字母和数字',
    trigger: 'blur',
  },
]

export const confirmPasswordRules = (form) => [
  { required: true, message: '请再次输入密码', trigger: 'blur' },
  {
    validator: (_rule, value, callback) => {
      if (value !== form.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    },
    trigger: 'blur',
  },
]

export const phoneRules = [
  {
    pattern: /^1\d{10}$/,
    message: '请输入有效的手机号码',
    trigger: 'blur',
  },
]

export function checkPasswordStrength(password) {
  if (!password) return { level: 0, label: '', color: '' }
  let score = 0
  if (password.length >= 6) score++
  if (password.length >= 10) score++
  if (/[a-zA-Z]/.test(password) && /\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  if (score <= 1) return { level: 1, label: '弱', color: '#ef4444' }
  if (score <= 2) return { level: 2, label: '中', color: '#f59e0b' }
  return { level: 3, label: '强', color: '#10b981' }
}
