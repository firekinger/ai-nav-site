# AI Nav Directory 🤖

一个现代化的AI工具导航网站，汇集了1000+个AI工具，涵盖400+个类别。由ChatGPT每日精选和更新，帮助您在AI世界中保持领先。

## ✨ 特性

- 🚀 **现代化设计**: 使用Next.js 15 + Tailwind CSS构建，响应式设计
- 📊 **海量数据**: 收录1000+个AI工具，覆盖400+个类别
- 🔄 **实时更新**: 由ChatGPT每日精选和更新最新AI工具
- 🎯 **精准分类**: 智能分类系统，快速找到所需工具
- 🔍 **强大搜索**: 支持工具名称、描述和标签搜索
- 📱 **移动友好**: 完全响应式设计，支持所有设备

## 🛠️ 技术栈

- **框架**: [Next.js](https://nextjs.org/) 15.5.3
- **UI框架**: [React](https://reactjs.org/) 19.1.0
- **样式**: [Tailwind CSS](https://tailwindcss.com/) 4.0
- **类型检查**: TypeScript
- **部署**: Vercel
- **分析**: Vercel Analytics
- **邮件**: Nodemailer

## 📁 项目结构

```
ai-nav-site/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   │   ├── tools/         # 工具相关API
│   │   ├── categories/    # 分类相关API
│   │   └── submit/        # 提交工具API
│   ├── category/          # 分类页面
│   ├── submit/            # 提交工具页面
│   ├── tool/              # 工具详情页面
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── data/                  # 数据文件
│   ├── home.json          # 首页数据
│   ├── category.json      # 分类数据
│   ├── categories/        # 各分类详细数据
│   └── tools/             # 工具详细数据
├── logo/                  # 工具Logo图片
├── tools/                 # 工具脚本
│   └── generate-links.js  # 生成链接脚本
└── public/                # 静态资源
```

## 🚀 快速开始

### 环境要求

- Node.js 18.17+
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境

```bash
npm run dev
# 或
yarn dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
```

## 📊 数据管理

### 数据结构

- **首页数据** (`data/home.json`): 首页展示的分类和工具
- **分类数据** (`data/category.json`): 完整的分类结构
- **工具数据** (`data/tools/`): 各工具的详细信息
- **分类详情** (`data/categories/`): 各分类的完整数据

### 添加新工具

1. 在对应分类的JSON文件中添加工具信息
2. 将工具Logo放置在 `logo/` 目录下
3. 运行脚本生成静态页面（如果需要）

### 提交新工具

用户可以通过 `/submit` 页面提交新的AI工具，提交的信息会通过邮件发送给管理员。

## 🎨 自定义配置

### 环境变量

创建 `.env.local` 文件并添加以下环境变量：

```env
# 邮件配置（用于工具提交）
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# 分析（可选）
VERCEL_ANALYTICS_ID=your_analytics_id
```

### 主题定制

在 `tailwind.config.js` 中自定义主题色彩和样式。

## 📈 性能优化

- ✅ 使用Turbopack提升构建速度
- ✅ 图片优化（Next.js Image组件）
- ✅ 代码分割和懒加载
- ✅ SEO优化
- ✅ 缓存策略优化

## 🔍 SEO优化

- 动态生成meta标签
- 结构化数据（JSON-LD）
- 站点地图自动生成
- 开放图谱标签

## 📱 部署

### Vercel部署（推荐）

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置环境变量
4. 自动部署

### 其他平台

```bash
# 构建静态文件
npm run build

# 生成的文件在 .next 目录
```

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 📝 更新日志

### v0.1.0 (2025-01-16)
- ✨ 初始化项目
- 🎨 完成基础UI设计
- 📊 集成1000+ AI工具数据
- 🔍 实现工具搜索功能
- 📱 响应式设计适配
- 🚀 部署到Vercel

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Vercel](https://vercel.com/) - 部署平台
- 所有AI工具的开发者和贡献者

## 📞 联系我们

- 项目地址: [https://github.com/firekinger/ai-nav-site](https://github.com/firekinger/ai-nav-site)
- 问题反馈: [Issues](https://github.com/firekinger/ai-nav-site/issues)
- 邮箱: firekinger@gmail.com

---

<div align="center">
  <p>如果这个项目对您有帮助，请给我们一个 ⭐️</p>
  <p>Made with ❤️ by AI Nav Team</p>
</div>
