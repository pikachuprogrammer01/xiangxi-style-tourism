# 湘西风情 — 技术规格说明书（SPEC）

## 1. 开发环境与依赖

| 工具/库 | 版本 | 用途 |
| :--- | :--- | :--- |
| Node.js | ^20.19.0 \|\| >=22.12.0 | 运行环境 |
| Vue | ^3.5.29 | 前端框架，Composition API + `<script setup>` |
| Vite | ^7.3.1 | 构建工具，HMR 热更新 |
| Element Plus | ^2.13.7 | UI 组件库 |
| Vue Router | ^5.0.3 | 前端路由（history 模式） |
| Pinia | ^3.0.4 | 状态管理 |
| pinia-plugin-persistedstate | ^4.7.1 | Pinia localStorage 持久化 |
| unplugin-auto-import | ^21.0.0 | Element Plus 自动导入 |
| unplugin-vue-components | ^32.0.0 | Element Plus 组件按需导入 |
| Prettier | 3.8.1 | 代码格式化（semi:false, singleQuote:true, printWidth:100） |

## 2. 项目目录结构

```
xiangxi-style-tourism/
├── public/                        # 静态资源（不经过构建）
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/                # 图片资源
│   │   │   ├── logo.png
│   │   │   ├── attractions/       # 景点图片
│   │   │   ├── foods/             # 美食图片
│   │   │   ├── carousel/          # 轮播图
│   │   │   └── icons/             # 自定义图标
│   │   └── styles/
│   │       ├── main.css           # 全局基础样式（main.js 引入）
│   │       ├── variables.css      # CSS 变量（主题色、间距、断点）
│   │       └── animations.css     # 全局动画关键帧
│   ├── components/
│   │   ├── common/                # 通用组件
│   │   │   ├── HeaderNav.vue      # 顶部导航栏
│   │   │   ├── FooterBar.vue      # 底部页脚
│   │   │   ├── BreadcrumbNav.vue  # 面包屑导航
│   │   │   ├── BackToTop.vue      # 返回顶部
│   │   │   ├── LoadingSkeleton.vue # 加载骨架屏
│   │   │   └── EmptyState.vue     # 空状态组件
│   │   ├── home/                  # 首页专用组件
│   │   │   ├── HeroCarousel.vue   # 轮播图
│   │   │   ├── HotRecommend.vue   # 热门推荐
│   │   │   └── FoodPreview.vue    # 美食速览
│   │   ├── attraction/            # 景点模块组件
│   │   │   ├── AttractionCard.vue  # 景点卡片
│   │   │   ├── AttractionSidebar.vue # 景点侧边栏
│   │   │   └── AttractionTabs.vue  # 景点详情 Tab
│   │   ├── food/                  # 美食模块组件
│   │   │   ├── FoodCard.vue       # 美食卡片
│   │   │   └── FoodSidebar.vue    # 美食详情侧边栏
│   │   └── user/                  # 用户模块组件
│   │       ├── UserProfileCard.vue # 用户信息卡片
│   │       ├── UserStats.vue      # 用户统计
│   │       └── FavoriteList.vue   # 收藏列表
│   ├── views/                     # 页面级组件（15 个）
│   │   ├── Home.vue               # 首页
│   │   ├── Login.vue              # 登录页
│   │   ├── Register.vue           # 注册页
│   │   ├── Attractions.vue        # 景点总览
│   │   ├── AttractionDetail.vue   # 景点详情（动态路由）
│   │   ├── Foods.vue              # 美食推荐
│   │   ├── FoodDetail.vue         # 美食详情（动态路由）
│   │   ├── TravelGuide.vue        # 旅游攻略
│   │   ├── Heritage.vue           # 非遗展示
│   │   ├── HeritageDetail.vue     # 非遗详情（动态路由）
│   │   ├── Gallery.vue            # 摄影画廊
│   │   ├── Guestbook.vue          # 留言板
│   │   ├── Profile.vue            # 个人中心
│   │   ├── About.vue              # 关于我们
│   │   └── NotFound.vue           # 404 页面
│   ├── router/
│   │   └── index.js               # 路由表 + 全局守卫
│   ├── stores/
│   │   └── user.js                # 用户状态（登录、收藏、历史）
│   ├── constants/                 # 常量与 Mock 数据
│   │   ├── index.js               # 通用常量
│   │   ├── attractions.js         # 景点数据
│   │   ├── foods.js               # 美食数据
│   │   ├── heritage.js            # 非遗数据
│   │   ├── guide.js               # 旅游攻略数据
│   │   ├── gallery.js             # 摄影画廊数据
│   │   ├── guestbook.js           # 留言板模拟数据
│   │   └── mockData.js            # 数据总入口
│   ├── utils/
│   │   ├── request.js             # 模拟 API 请求
│   │   ├── validators.js          # 表单验证规则
│   │   ├── formatters.js          # 数据格式化
│   │   └── storage.js             # localStorage 封装（用户隔离）
│   ├── App.vue                    # 根组件：<RouterView />
│   └── main.js                    # 入口：createApp → pinia → router → mount
├── index.html
├── vite.config.js
├── package.json
└── CLAUDE.md
```

## 3. 五种 CSS+DIV 布局实现

### 布局 1：Banner 全宽布局

**应用页面**：首页 Hero 区、各页面顶部 Hero 区、非遗详情封面

```css
.hero-section {
  width: 100vw;
  height: 70vh;          /* 移动端 50vh */
  position: relative;
  overflow: hidden;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### 布局 2：侧边栏布局（Flexbox）

**应用页面**：景点总览、景点详情、关于我们

```css
.layout-container {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 200px;           /* 固定宽度 */
  flex-shrink: 0;         /* 不收缩 */
}
.main-content {
  flex: 1;                /* 占据剩余空间 */
  padding: 24px;
}
/* 移动端：flex-direction: column，侧边栏移到底部 */
@media (max-width: 768px) {
  .layout-container { flex-direction: column; }
  .sidebar { width: 100%; order: 2; }
}
```

### 布局 3：响应式网格布局（CSS Grid）

**应用页面**：美食推荐、非遗展示、摄影画廊

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 桌面 4 列 */
  gap: 24px;
}
@media (max-width: 1200px) {
  .grid-container { grid-template-columns: repeat(3, 1fr); } /* 平板 3 列 */
}
@media (max-width: 768px) {
  .grid-container { grid-template-columns: repeat(2, 1fr); } /* 手机 2 列 */
}
```

### 布局 4：Flex 居中布局

**应用页面**：登录页、注册页、404 页

```css
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.auth-card {
  width: 100%;
  max-width: 400px;       /* 注册页 450px */
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
```

### 布局 5：仪表盘布局（CSS Grid + Card）

**应用页面**：个人中心

```css
.dashboard {
  display: grid;
  grid-template-columns: 280px 1fr;  /* 左侧固定，右侧自适应 */
  gap: 24px;
  padding: 24px;
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

## 4. CSS 样式组织规范

| 层级 | 存放位置 | 作用范围 | 说明 |
| :--- | :--- | :--- | :--- |
| 全局基础样式 | `src/assets/styles/main.css` | 全站 | reset、工具类、字体定义 |
| CSS 变量 | `src/assets/styles/variables.css` | 全站 | 主题色、间距、断点 |
| 组件局部样式 | `<style scoped>` | 当前组件 | BEM 命名，避免样式污染 |
| 动画关键帧 | `src/assets/styles/animations.css` | 全站 | `@keyframes` 复用定义 |

**命名规范**：BEM 命名法 `.block__element--modifier`，组件根类名为组件 kebab-case 名。

## 5. 路由设计

| 路由 | 视图组件 | 需登录 | meta |
| :--- | :--- | :--- | :--- |
| `/` | Home.vue | 否 | `{ title: '首页 - 湘西风情' }` |
| `/login` | Login.vue | 否（已登录跳转 `/`） | `{ title: '登录 - 湘西风情', guest: true }` |
| `/register` | Register.vue | 否（已登录跳转 `/`） | `{ title: '注册 - 湘西风情', guest: true }` |
| `/attractions` | Attractions.vue | 否 | `{ title: '景点总览 - 湘西风情' }` |
| `/attraction/:id` | AttractionDetail.vue | 否 | 动态路由，title 动态设置 |
| `/foods` | Foods.vue | 否 | `{ title: '美食推荐 - 湘西风情' }` |
| `/food/:id` | FoodDetail.vue | 否 | 动态路由，title 动态设置 |
| `/guide` | TravelGuide.vue | 否 | `{ title: '旅游攻略 - 湘西风情' }` |
| `/heritage` | Heritage.vue | 否 | `{ title: '非遗展示 - 湘西风情' }` |
| `/heritage/:id` | HeritageDetail.vue | 否 | 动态路由，title 动态设置 |
| `/gallery` | Gallery.vue | 否 | `{ title: '摄影画廊 - 湘西风情' }` |
| `/guestbook` | Guestbook.vue | 否 | `{ title: '留言板 - 湘西风情' }` |
| `/profile` | Profile.vue | **是**（未登录跳转 `/login?redirect=...`） | `{ title: '个人中心 - 湘西风情', requiresAuth: true }` |
| `/about` | About.vue | 否 | `{ title: '关于我们 - 湘西风情' }` |
| `/:pathMatch(.*)*` | NotFound.vue | 否 | `{ title: '页面未找到 - 湘西风情' }` |

### 路由守卫

- `beforeEach` 全局前置守卫：设置 `document.title`
- `meta.requiresAuth === true` 且未登录 → 重定向到 `/login?redirect=<原路径>`
- `meta.guest === true` 且已登录 → 重定向到 `/`
- 所有路由懒加载（动态 `import()`）
- `scrollBehavior`：切换路由后滚动到顶部

## 6. 数据架构

### 6.1 Mock 数据组织

纯前端项目，所有数据以 JavaScript 常量形式存放在 `src/constants/` 下，通过 `v-for` 渲染。

| 数据文件 | 导出 | 主要字段 |
| :--- | :--- | :--- |
| `attractions.js` | `attractions` 数组 | id, name, category, tags, rating, price, location, coverImage, images[], description, details{}, reviews[] |
| `foods.js` | `foods` 数组 | id, name, category, tags, flavor[], heat, popularity, coverImage, images[], story, ingredients[], steps[], nutrition{}, shops[] |
| `heritage.js` | `heritageItems` 数组 + `HERITAGE_CATEGORY_MAP` | id, name, category, level, year, image, description, origin, features, status, value |
| `guide.js` | `seasons` 数组 + `routePlans` 数组 + `travelTips` 对象 | 季节名/描述、路线标题/天数/日程、分类贴士 |
| `gallery.js` | `galleryPhotos` 数组 + `GALLERY_CATEGORIES` | id, src, title, author, category |
| `guestbook.js` | `mockMessages` 数组 | id, username, avatar, content, time, likes |

### 6.2 Pinia 状态管理（user.js）

```
useUserStore（Composition API 风格）
├── state
│   ├── isLoggedIn: boolean
│   ├── userInfo: { id, username, email, phone, createdAt } | null
│   ├── favorites: { attractions: number[], foods: number[] }
│   └── history: { id, type, name, image, time }[]
├── actions
│   ├── init()                  — 从 localStorage 恢复登录态
│   ├── login(username, password) → boolean
│   ├── register(userData) → { success, message }
│   ├── logout()                — 清除状态 + localStorage
│   ├── toggleFavorite(type, id)
│   ├── isFavorite(type, id) → boolean
│   ├── addToHistory(item)      — 去重 + 最大 50 条
│   └── clearHistory()
└── 持久化
    └── localStorage（按用户 ID 隔离 key）
```

### 6.3 用户数据隔离

收藏和历史记录按用户 ID 存储在不同的 localStorage key 中：
- `favorites_<userId>` — 用户收藏数据
- `history_<userId>` — 用户浏览历史
- `currentUser` — 当前登录用户信息
- `users` — 所有注册用户列表

不同用户登录后看到的收藏和历史记录完全隔离。

### 6.4 演示账号

首次启动自动初始化：用户名 `test`，密码 `abc123`。

## 7. 组件复用关系

| 组件 | 复用位置 | 关键 Props |
| :--- | :--- | :--- |
| HeaderNav | 所有页面 | —（自动根据路由高亮，已登录显示头像下拉菜单） |
| FooterBar | 所有页面 | — |
| BreadcrumbNav | 详情页 | `items: { name, path }[]` |
| AttractionCard | 首页热门推荐、景点总览、相关推荐、收藏列表 | `data: attraction 对象` |
| FoodCard | 首页美食速览、美食推荐、相关推荐、收藏列表 | `data: food 对象` |
| EmptyState | 收藏页、搜索结果页 | `image, title, description` |
| LoadingSkeleton | 列表加载中 | `rows, type` |
| BackToTop | 各内容页 | —（封装 el-backtop） |
| AttractionSidebar | 景点详情 | `attraction 对象` |
| AttractionTabs | 景点详情 | `attraction 对象` |
| FoodSidebar | 美食详情 | `food 对象` |
| UserProfileCard | 个人中心 | —（从 store 读取） |
| UserStats | 个人中心 | —（从 store 读取） |
| FavoriteList | 个人中心 | `type: 'attractions' \| 'foods'` |

## 8. 自查清单

| 检查项 | 验收标准 |
| :--- | :--- |
| 页面数量 | 15 个页面，内容充实，不重复 |
| 5 种布局 | Banner 全宽、侧边栏、Grid 网格、Flex 居中、仪表盘全部使用 |
| 3+ 动效 | 轮播图、返回顶部、卡片悬停、图片放大、骨架屏、灯箱预览 |
| 响应式 | 桌面/平板/移动端三档适配，媒体查询 + Element Plus 响应式栅格 |
| CSS 规范 | `<style scoped>` + BEM 命名，样式与结构分离 |
| Mock 数据 | 6 个数据模块，JSON 结构完整，`v-for` 动态渲染 |
| 交互功能 | 登录/注册/收藏/历史/留言板/搜索/筛选/分页 |
| 用户隔离 | 不同用户收藏和历史记录独立存储 |
| 路由守卫 | 需登录页面保护，已登录跳转首页 |
| 路由懒加载 | 全部路由使用动态 `import()` |
