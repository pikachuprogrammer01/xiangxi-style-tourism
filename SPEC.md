毕业设计：基于 Vue + Element Plus 的湘西风情旅游宣传网站

# **技术规格说明书（SPEC）**

# **1. 开发环境配置**

| **工具/环境** | **版本要求** | **用途**                                            |
| :------------ | :----------- | :-------------------------------------------------- |
| VS Code       | 最新稳定版   | 代码编辑器，推荐插件：Volar、ESLint、Prettier       |
| Node.js       | ≥18.0.0      | 运行环境                                            |
| npm           |
| Vite          | ^5.0.0       | 构建工具，提供极速HMR和优化打包                     |
| Vue           | ^3.4.0       | 前端框架，使用Composition API + <script setup> 语法 |
| Element Plus  | ^2.5.0       | UI组件库，按需引入（unplugin-vue-components）       |
| Vue Router    | ^4.2.0       | 前端路由管理                                        |
| Pinia         | ^2.1.0       | 状态管理（替代Vuex）                                |

# **2. 项目目录结构（详细版）**

xiangxi-style-tourism/
├── public/ # 静态资源（不经过构建）
│ ├── favicon.ico # 网站图标
│ └── images/ # 无需处理的图片（如LOGO原始文件）
├── src/
│ ├── assets/ # 资源文件（会被构建工具处理）
│ │ ├── images/ # 图片资源
│ │ │ ├── logo.png # 网站LOGO（横版）
│ │ │ ├── logo-square.png # 网站LOGO（方形）
│ │ │ ├── attractions/ # 景点图片
│ │ │ ├── foods/ # 美食图片
│ │ │ ├── carousel/ # 轮播图
│ │ │ └── icons/ # 自定义图标
│ │ └── styles/ # 全局样式
│ │ ├── main.css # 全局基础样式（在main.js引入）
│ │ ├── variables.css # CSS变量（主题色、间距等）
│ │ └── animations.css # 全局动画关键帧
│ ├── components/ # 公共组件
│ │ ├── common/ # 通用组件
│ │ │ ├── HeaderNav.vue # 顶部导航栏
│ │ │ ├── FooterBar.vue # 底部页脚
│ │ │ ├── BreadcrumbNav.vue # 面包屑导航
│ │ │ ├── BackToTop.vue # 返回顶部（封装el-backtop）
│ │ │ ├── LoadingSkeleton.vue # 加载骨架屏
│ │ │ └── EmptyState.vue # 空状态组件
│ │ ├── home/ # 首页专用组件
│ │ │ ├── HeroCarousel.vue # 轮播图组件
│ │ │ ├── HotRecommend.vue # 热点推荐
│ │ │ ├── CultureHighlights.vue# 文化特色
│ │ │ └── FoodPreview.vue # 美食速览
│ │ ├── attraction/ # 景点模块组件
│ │ │ ├── AttractionCard.vue # 景点卡片
│ │ │ ├── AttractionSidebar.vue# 景点侧边栏
│ │ │ └── AttractionTabs.vue # 景点详情Tab
│ │ ├── food/ # 美食模块组件
│ │ │ ├── FoodCard.vue # 美食卡片
│ │ │ └── FoodSidebar.vue # 美食详情侧边栏
│ │ └── user/ # 用户模块组件
│ │ ├── UserProfileCard.vue # 用户信息卡片
│ │ ├── UserStats.vue # 用户统计
│ │ └── FavoriteList.vue # 收藏列表
│ ├── views/ # 页面级组件（对应路由）
│ │ ├── Home.vue # 首页
│ │ ├── Login.vue # 登录页
│ │ ├── Register.vue # 注册页
│ │ ├── Attractions.vue # 景点总览页
│ │ ├── AttractionDetail.vue # 景点详情页（动态路由）
│ │ ├── Foods.vue # 美食推荐页
│ │ ├── FoodDetail.vue # 美食详情页（动态路由）
│ │ ├── Profile.vue # 个人中心
│ │ └── About.vue # 关于我们
│ ├── router/ # 路由配置
│ │ └── index.js # 路由表定义，路由守卫
│ ├── stores/ # Pinia状态管理
│ │ ├── user.js # 用户状态（登录信息、收藏）
│ │ ├── attraction.js # 景点状态
│ │ └── food.js # 美食状态
│ ├── composables/ # 组合式函数（逻辑复用）
│ │ ├── useAuth.js # 认证逻辑
│ │ ├── useFavorites.js # 收藏逻辑
│ │ ├── useScroll.js # 滚动相关逻辑
│ │ └── useResponsive.js # 响应式断点检测
│ ├── utils/ # 工具函数
│ │ ├── request.js # 封装请求（模拟API）
│ │ ├── validators.js # 表单验证规则
│ │ ├── formatters.js # 数据格式化（日期、价格等）
│ │ └── storage.js # localStorage封装
│ ├── constants/ # 常量定义
│ │ ├── index.js # 通用常量
│ │ ├── attractions.js # 景点常量数据
│ │ ├── foods.js # 美食常量数据
│ │ └── mockData.js # 模拟数据总入口
│ ├── App.vue # 根组件
│ └── main.js # 入口文件（引入全局样式、注册插件）
├── index.html # HTML模板
├── vite.config.js # Vite配置（别名、插件、代理）
├── package.json # 依赖管理
└── README.md # 项目说明文档

# **3. 五种布局实现方案（详细技术说明）**

## **布局1：Banner全宽布局（首页Hero区）**

**技术要点：**

.hero-section {
`  `width: 100vw; /\* 视口全宽 \*/
`  `height: 70vh; /\* 视口高度的70% \*/
`  `position: relative;
`  `overflow: hidden;
}

.hero-image {
`  `width: 100%;
`  `height: 100%;
`  `object-fit: cover; /\* 图片填充，保持比例 \*/
`  `object-position: center; /\* 居中裁剪 \*/
}

**应用场景：**

首页轮播图、页面顶部大图

## **布局2：圣杯布局/侧边栏布局（景点总览、详情页）**

**技术要点：Flexbox实现**

.layout-container {
`  `display: flex;
`  `min-height: 100vh;
}

.sidebar {
`  `width: 200px; /\* 固定宽度 \*/
`  `flex-shrink: 0; /\* 不收缩 \*/
`  `background: #f5f5f5;
}

.main-content {
`  `flex: 1; /\* 占据剩余空间 \*/
`  `padding: 24px;
`  `overflow-y: auto;
}

/\* 移动端适配 \*/
@media (max-width: 768px) {
.layout-container {
`    `flex-direction: column;
`  `}
.sidebar {
`    `width: 100%;
`    `order: 2; /\* 移动端侧边栏移到底部 \*/
`  `}
}

**应用场景：**

景点总览页、景点详情页、关于我们页

## **布局3：响应式网格布局（美食推荐页）**

**技术要点：CSS Grid**

.food-grid {
`  `display: grid;
`  `grid-template-columns: repeat(4, 1fr); /\* 桌面端4列 \*/
`  `gap: 24px;
`  `padding: 24px;
}

/\* 响应式断点 \*/
@media (max-width: 1200px) {
.food-grid {
`    `grid-template-columns: repeat(3, 1fr); /\* 平板3列 \*/
`  `}
}

@media (max-width: 768px) {
.food-grid {
`    `grid-template-columns: repeat(2, 1fr); /\* 手机2列 \*/
`  `}
}

**替代方案：**

使用Element Plus的<el-row :gutter="24"> + <el-col :xs="12" :sm="8" :md="6">

**应用场景：**

美食推荐页、景点卡片列表、首页热点推荐

## **布局4：Flex居中布局（登录/注册页）**

**技术要点：Flexbox完美居中**

.auth-page {
`  `display: flex;
`  `justify-content: center; /\* 水平居中 \*/
`  `align-items: center; /\* 垂直居中 \*/
`  `min-height: 100vh; /\* 全屏高度 \*/
`  `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.auth-card {
`  `width: 100%;
`  `max-width: 400px; /\* 最大宽度限制 \*/
`  `padding: 40px;
`  `background: white;
`  `border-radius: 12px;
`  `box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

**应用场景：**

登录页、注册页、404错误页

## **布局5：仪表盘布局（个人中心）**

**技术要点：CSS Grid + Card分区**

.dashboard {
`  `display: grid;
`  `grid-template-columns: 280px 1fr; /\* 左侧固定，右侧自适应 \*/
`  `gap: 24px;
`  `padding: 24px;
}

.stats-row {
`  `display: grid;
`  `grid-template-columns: repeat(4, 1fr);
`  `gap: 16px;
`  `margin-bottom: 24px;
}

.stat-card {
`  `background: white;
`  `padding: 20px;
`  `border-radius: 8px;
`  `box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

**应用场景：**

个人中心、后台管理界面（如有）

# **4. CSS+DIV代码分离规范（严格执行）**

## **4.1 样式组织原则**

| **层级**     | **存放位置**                     | **作用范围** | **说明**                       |
| :----------- | :------------------------------- | :----------- | :----------------------------- |
| 全局基础样式 | src/assets/styles/main.css       | 全站         | 重置样式、通用工具类、字体定义 |
| CSS变量      | src/assets/styles/variables.css  | 全站         | 主题色、间距、断点等变量       |
| 组件局部样式 | <style scoped>                   | 当前组件     | 组件特有样式，避免污染         |
| 动画关键帧   | src/assets/styles/animations.css | 全站         | 复用动画定义                   |

## **4.2 命名规范**

- BEM命名法：.block\_\_element--modifier
- 示例：.attraction-card\_\_title--highlighted
- Vue组件类名：与组件名保持一致，使用kebab-case
- 示例：组件AttractionCard.vue → 根类.attraction-card

## **4.3 样式隔离示例**

<!-- AttractionCard.vue -->
<template>
`  `<div class="attraction-card">
`    `<img class="attraction-card\_\_image" :src="image" />
`    `<div class="attraction-card\_\_content">
`      `<h3 class="attraction-card\_\_title">{{ name }}</h3>
`      `<p class="attraction-card\_\_desc">{{ description }}</p>
`    `</div>
`  `</div>
</template>

<style scoped>
.attraction-card {
`  `border-radius: 8px;
`  `overflow: hidden;
`  `transition: transform 0.3s ease;
}

.attraction-card:hover {
`  `transform: translateY(-4px);
}

.attraction-card\_\_image {
`  `width: 100%;
`  `aspect-ratio: 16/9;
`  `object-fit: cover;
}
</style>

# **5. 数据展示方案（Mock数据设计）**

## **5.1 数据架构**

由于本毕设为纯前端项目，采用JSON模拟数据，通过Vue的v-for指令渲染。

## **数据文件组织：**

- src/constants/mockData.js：数据总入口，导出所有模拟数据
- src/constants/attractions.js：景点数据
- src/constants/foods.js：美食数据
- src/constants/users.js：用户模拟数据

## **5.2 景点数据结构设计**

// attractions.js 示例结构
export const attractions = [
`  `{
`    `id: 1,
`    `name: "凤凰古城",
`    `category: "history", // 分类：history/nature/ethnic/red
`    `tags: ["4A景区", "历史古镇", "夜景"],
`    `rating: 4.8,
`    `price: 148, // 门票价格，0表示免费
`    `location: "湘西土家族苗族自治州凤凰县",
`    `coverImage: "/images/attractions/fenghuang-cover.jpg",
`    `images: ["...", "...", "..."], // 详情页图集
`    `description: "凤凰古城始建于清康熙年间...", // 简介
`    `details: {
`      `openTime: "全天开放（内部景点8:00-17:30）",
`      `duration: "建议1-2天",
`      `bestSeason: "3-5月、9-11月",
`      `traffic: "吉首火车站转大巴，约1小时..."
`    `},
`    `reviews: [
` `{
` `id: 1,
` `user: "旅行达人小王",
` `avatar: "/images/avatars/user1.jpg",
` `rating: 5,
` `date: "2024-03-15",
` `content: "夜景真的太美了，强烈推荐住一晚..."
` `}
` `]
`  `}
`  `// ... 更多景点
];

## **5.3 美食数据结构设计**

// foods.js 示例结构
export const foods = [
`  `{
`    `id: 1,
`    `name: "湘西腊肉",
`    `category: "main", // 分类：main/snack/drink/festival
`    `tags: ["土家族", "传统名菜", "咸香"],
`    `flavor: ["咸", "香"], // 口味标签
`    `heat: 3, // 辣度 0-5
`    `popularity: 9856, // 推荐人数
`    `coverImage: "/images/foods/larou-cover.jpg",
`    `images: ["...", "..."],
`    `story: "湘西腊肉是土家族的传统美食，已有千年历史...",
`    `ingredients: ["五花肉", "食盐", "花椒", "白酒"],
`    `steps: [
` `"选用新鲜五花肉，切成长条...",
` `"用食盐、花椒腌制7天...",
` `"悬挂于火塘上方，烟熏30天..."
` `],
`    `nutrition: {
`      `calories: "320千卡/100g",
`      `protein: "18g",
`      `fat: "28g"
`    `},
`    `shops: [
` `{
` `name: "古城腊肉坊",
` `address: "凤凰古城东正街12号",
` `avgPrice: 45
` `}
` `]
`  `}
`  `// ... 更多美食
];

## **5.4 用户状态设计（Pinia）**

// stores/user.js
export const useUserStore = defineStore('user', {
`  `state: () => ({
`    `isLoggedIn: false,
`    `userInfo: null,
`    `favorites: {
`      `attractions: [], // 收藏的景点ID数组
`      `foods: [] // 收藏的美食ID数组
`    `},
`    `history: [] // 浏览历史
`  `}),

`  `actions: {
`    `login(userData) { ... },
`    `logout() { ... },
`    `toggleFavorite(type, id) { ... },
`    `addToHistory(item) { ... }
`  `},

`  `persist: true // 使用pinia-plugin-persistedstate持久化到localStorage
});

# **6. 路由设计**

| **路由路径**    | **组件**             | **是否需要登录**       | **页面标题**        |
| :-------------- | :------------------- | :--------------------- | :------------------ |
| /               | Home.vue             | 否                     | 首页 - 湘西风情     |
| /login          | Login.vue            | 否（已登录跳转首页）   | 登录 - 湘西风情     |
| /register       | Register.vue         | 否（已登录跳转首页）   | 注册 - 湘西风情     |
| /attractions    | Attractions.vue      | 否                     | 景点总览 - 湘西风情 |
| /attraction/:id | AttractionDetail.vue | 否                     | {{name}} - 湘西风情 |
| /foods          | Foods.vue            | 否                     | 美食推荐 - 湘西风情 |
| /food/:id       | FoodDetail.vue       | 否                     | {{name}} - 湘西风情 |
| /profile        | Profile.vue          | 是（未登录跳转登录页） | 个人中心 - 湘西风情 |
| /about          | About.vue            | 否                     | 关于我们 - 湘西风情 |
| \*              | 404页面              | 否                     | 页面未找到          |

## **路由守卫逻辑：**

- 全局前置守卫检查to.meta.requiresAuth
- 需要登录的页面未登录时，跳转登录页并携带redirect参数

# **7. 组件复用策略**

| **组件名称**   | **复用位置**             | **可配置Props**             |
| :------------- | :----------------------- | :-------------------------- |
| HeaderNav      | 所有页面                 | transparent（首页透明背景） |
| FooterBar      | 所有页面                 | 无                          |
| BreadcrumbNav  | 详情页、总览页           | items（面包屑数组）         |
| AttractionCard | 首页、景点总览、相关推荐 | data（景点数据对象）        |
| FoodCard       | 首页、美食推荐、相关推荐 | data（美食数据对象）        |
| EmptyState     | 收藏页、搜索结果页       | image, title, description   |

# **8. 项目进度与自查表（答辩准备）**

## **8.1 自查清单**

| **检查项** | **状态** | **验收标准**                                      | **备注**                                   |
| :--------- | :------- | :------------------------------------------------ | :----------------------------------------- |
| LOGO设计   | 待完成   | 使用PS设计，PNG格式，融入湘西元素，提供横版/方形  | 需体现地方特色                             |
| 页面数量   | 待完成   | 共12个页面，每个页面内容充实，不重复              | 包含首页、3个景点详情、3个美食详情         |
| 布局规范   | 待完成   | 5种CSS+DIV布局全部使用，代码分离规范              | Banner全宽、侧边栏、网格、Flex居中、仪表盘 |
| 动效实现   | 待完成   | 至少3种动效：轮播图、返回顶部、表单校验、卡片悬停 | 使用Element Plus组件+自定义CSS             |
| 响应式设计 | 待完成   | 适配桌面端、平板端、移动端三种设备                | 使用媒体查询+Element Plus响应式栅格        |
| 代码规范   | 待完成   | 样式与结构分离，组件化开发，命名规范              | <style scoped> + BEM命名                   |
| 数据模拟   | 待完成   | JSON数据充实，每个景点/美食有完整信息             | 使用v-for渲染，数据量充足                  |
| 交互功能   | 待完成   | 登录注册、收藏、浏览历史、表单验证                | 使用Pinia管理状态，localStorage持久化      |
| 积极向上   | 满足     | 内容聚焦湘西地方文化，传播正能量                  | 展示自然风光、民俗文化、传统美食           |
| 文档完整   | 待完成   | 项目README、代码注释、设计说明                    | 便于答辩展示                               |

## **8.2 建议开发顺序**

1\. 第一阶段（基础搭建）：项目初始化、目录结构、全局样式、路由配置

2\. 第二阶段（页面骨架）：按模块顺序开发12个页面的基础布局和静态内容

3\. 第三阶段（数据接入）：编写Mock数据，使用v-for渲染动态内容

4\. 第四阶段（交互实现）：登录状态、收藏功能、表单验证、路由守卫

5\. 第五阶段（动效优化）：轮播图、过渡动画、悬停效果、响应式适配

6\. 第六阶段（细节打磨）：空状态、加载状态、错误处理、代码注释

7\. 第七阶段（答辩准备）：整理文档、准备演示数据、检查清单验收

# **附录：设计素材清单**

| **素材类型** | **数量** | **要求**               | **来源建议**                  |
| :----------- | :------- | :--------------------- | :---------------------------- |
| 网站LOGO     | 2张      | 横版+方形，PNG透明背景 | Photoshop自行设计             |
| 首页轮播图   | 4-5张    | 1920×1080，高清风景照  | Unsplash、Pixabay（免费商用） |
| 景点封面图   | 6张+     | 1200×800，构图精美     | 同上                          |
| 景点详情图   | 15张+    | 展示不同角度和季节     | 同上                          |
| 美食图片     | 10张+    | 特写+场景，诱人食欲    | 同上                          |
| 用户头像     | 5-8张    | 用于模拟评论           | 随机头像API或默认头像         |
| 图标素材     | 若干     | 统一风格线性图标       | Element Plus图标库            |
