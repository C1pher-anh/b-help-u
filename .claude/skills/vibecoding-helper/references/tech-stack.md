# 技术栈推荐库

> 原则：成熟 > 流行 > 新；简单 > 强大；有文档 > 无文档；CDN 可用 > 需要构建

---

## 前端框架

| 方案 | 适用场景 | 引入方式 | 推荐指数 |
|------|----------|----------|----------|
| 原生 HTML/JS | 极简页面、纯展示 | 无需引入 | ⭐⭐⭐ 首选 |
| Alpine.js | 轻交互、表单、简单状态 | CDN | ⭐⭐⭐ 首选 |
| Vue 3 (CDN) | 中等复杂度、多组件 | CDN | ⭐⭐⭐ 推荐 |
| Vue 3 + Vite | 复杂项目、需要构建 | npm | ⭐⭐ 适合有基础用户 |
| React (Artifacts) | 在 Claude 里直接运行 | 内置 | ⭐⭐⭐ Claude 专用 |

**不推荐给小白的**：Next.js（需要 Node.js）、Nuxt（同上）、Angular（学习曲线陡）

---

## CSS / UI 框架

| 方案 | 适用场景 | 引入方式 | 推荐指数 |
|------|----------|----------|----------|
| Tailwind CSS | 任何项目，快速美化 | CDN Play | ⭐⭐⭐ 首选 |
| Element Plus | Vue 3 项目，需要复杂组件 | CDN | ⭐⭐⭐ 推荐 |
| Naive UI | Vue 3 项目，风格现代 | CDN | ⭐⭐ 推荐 |
| DaisyUI | Tailwind 组件扩展 | CDN | ⭐⭐ 推荐 |
| Bootstrap 5 | 快速原型，组件齐全 | CDN | ⭐⭐ 备选 |

**Tailwind CDN 引入（Play CDN，适合原型）：**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Element Plus CDN 引入：**
```html
<link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css" />
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/element-plus"></script>
```

---

## 图表库

| 方案 | 适用场景 | 引入方式 | 推荐指数 |
|------|----------|----------|----------|
| Chart.js | 常规图表（折线、柱状、饼图） | CDN | ⭐⭐⭐ 首选 |
| ECharts | 复杂图表、大数据量 | CDN | ⭐⭐ 推荐 |
| ApexCharts | 交互性强、美观 | CDN | ⭐⭐ 推荐 |

**Chart.js CDN：**
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

## 数据存储

| 方案 | 适用场景 | 容量 | 推荐指数 |
|------|----------|------|----------|
| localStorage | 简单键值对、小数据量 | 5MB | ⭐⭐⭐ 首选 |
| IndexedDB (Dexie.js) | 结构化数据、需要查询 | 无限制 | ⭐⭐ 推荐 |
| JSON 文件读写 | 需要导入导出 | 无限制 | ⭐⭐ 推荐 |
| 无存储 | 纯工具类、用完即走 | — | ⭐⭐⭐ 最简单 |

**不推荐给小白的**：SQLite（需要后端）、Firebase（需要注册配置）、Supabase（同上）

> 💡 **但如果项目需要 AI 功能**，调用外部 AI API 是可以的！像 DeepSeek、OpenAI 这些服务，注册后就能拿到 API Key，新用户通常有免费额度。只要在产品里做好设置弹窗，让用户自己填 Key，就不算"引入复杂云服务"。

**Dexie.js CDN：**
```html
<script src="https://unpkg.com/dexie/dist/dexie.js"></script>
```

---

## 特殊功能库

| 功能需求 | 推荐库 | 引入方式 |
|----------|--------|----------|
| Markdown 渲染 | marked.js | CDN |
| 代码高亮 | highlight.js | CDN |
| 日期处理 | dayjs | CDN |
| 拖拽排序 | Sortable.js | CDN |
| 富文本编辑 | Quill | CDN |
| 文件导出 PDF | jsPDF | CDN |
| 文件导出 Excel | SheetJS (xlsx) | CDN |
| 图标 | Font Awesome 或 Lucide | CDN |
| 动画 | Animate.css | CDN |

**常用 CDN 集合：**
```html
<!-- dayjs -->
<script src="https://unpkg.com/dayjs/dayjs.min.js"></script>

<!-- marked.js -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- Sortable.js -->
<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## 项目类型快速匹配

### 待办/任务管理类
```
HTML + Alpine.js + Tailwind CSS + localStorage
```

### 数据展示/仪表盘类
```
Vue 3 (CDN) + Element Plus + Chart.js + localStorage
```

### 内容创作/编辑器类
```
HTML + Quill (富文本) + Tailwind CSS + localStorage
```

### 配色/图片处理类（纯前端）
```
原生 HTML + Canvas API + Tailwind CSS
```

### 文档/笔记类
```
Vue 3 (CDN) + marked.js + highlight.js + localStorage
```

### 计算器/工具类（无需存储）
```
原生 HTML + Alpine.js + Tailwind CSS
```

### 在 Claude 里直接运行
```
React (内置) + Tailwind CSS (内置)
```

### AI 聊天 / AI 翻译 / AI 写作类（调用外部大模型 API）
```
Vue 3 (CDN) + Tailwind CSS + localStorage（存 API Key + 聊天记录）
注意：必须设计设置弹窗让用户自行输入 API Key，严禁硬编码
推荐 AI 服务：DeepSeek（前端可直调、价格低、中文友好）
```
