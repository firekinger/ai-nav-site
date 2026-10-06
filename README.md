# AI Nav Directory 🤖

A modern AI tools navigation website featuring 1000+ AI tools across 400+ categories. Curated and updated daily by ChatGPT to keep you ahead in the AI world.

## ✨ Features

- 🚀 **Modern Design**: Built with Next.js 15 + Tailwind CSS, fully responsive
- 📊 **Massive Database**: 1000+ AI tools covering 400+ categories
- 🔄 **Real-time Updates**: Daily curated and updated by ChatGPT
- 🎯 **Smart Categorization**: Intelligent classification system for quick discovery
- 🔍 **Powerful Search**: Search by tool name, description, and tags
- 📱 **Mobile Friendly**: Fully responsive design for all devices

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.5.3
- **UI Library**: [React](https://reactjs.org/) 19.1.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.0
- **Type Safety**: TypeScript
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics
- **Email**: Nodemailer

## 📁 Project Structure

```
ai-nav-site/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── tools/         # Tools API
│   │   ├── categories/    # Categories API
│   │   └── submit/        # Submit Tool API
│   ├── category/          # Category Pages
│   ├── submit/            # Submit Tool Page
│   ├── tool/              # Tool Detail Pages
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Homepage
├── data/                  # Data Files
│   ├── home.json          # Homepage Data
│   ├── category.json      # Category Structure
│   ├── categories/        # Category Details
│   └── tools/             # Tool Details
├── logo/                  # Tool Logo Images
├── tools/                 # Utility Scripts
│   └── generate-links.js  # Link Generation Script
└── public/                # Static Assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

## 📊 Data Management

### Data Structure

- **Homepage Data** (`data/home.json`): Featured categories and tools
- **Category Data** (`data/category.json`): Complete category structure
- **Tool Data** (`data/tools/`): Detailed information for each tool
- **Category Details** (`data/categories/`): Complete data for each category

### Adding New Tools

1. Add tool information to the corresponding category JSON file
2. Place tool logo in the `logo/` directory
3. Run scripts to generate static pages (if needed)

### Submit New Tools

Users can submit new AI tools through the `/submit` page. Submissions are sent to administrators via email.

## 🎨 Customization

### Environment Variables

Create a `.env.local` file with the following environment variables:

```env
# Email configuration (for tool submissions)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Analytics (optional)
VERCEL_ANALYTICS_ID=your_analytics_id
```

### Theme Customization

Customize theme colors and styles in `tailwind.config.js`.

## 📈 Performance Optimizations

- ✅ Turbopack for faster builds
- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting and lazy loading
- ✅ SEO optimization
- ✅ Caching strategies

## 🔍 SEO Features

- Dynamic meta tag generation
- Structured data (JSON-LD)
- Automatic sitemap generation
- Open Graph tags

## 📱 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Automatic deployment

### Other Platforms

```bash
# Build static files
npm run build

# Generated files are in .next directory
```

## 🤝 Contributing

We welcome Issues and Pull Requests!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### v0.1.0 (2025-01-16)
- ✨ Initial project setup
- 🎨 Basic UI design completed
- 📊 Integrated 1000+ AI tools data
- 🔍 Implemented tool search functionality
- 📱 Responsive design adaptation
- 🚀 Deployed to Vercel

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- All AI tool developers and contributors

## 📞 Contact

- Project URL: [https://github.com/firekinger/ai-nav-site](https://github.com/firekinger/ai-nav-site)
- Issue Tracker: [Issues](https://github.com/firekinger/ai-nav-site/issues)
- Email: [firekinger@gmail.com](mailto:firekinger@gmail.com)

---

<div align="center">
  <p>If this project helps you, please give us a ⭐️</p>
  <p>Made with ❤️ by AI Nav Team</p>
</div>
