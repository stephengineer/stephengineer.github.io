# Stephen Wang - Personal Website

A modern, responsive personal website showcasing my work as a Research Scientist & AI Engineer. Built with Vue 3 and Vite for optimal performance and developer experience.

## 🌟 Live Demo

Visit the live website: [https://stephengineer.github.io/](https://stephengineer.github.io/)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations and glassmorphism
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Built with Vite and optimized with code splitting and compression
- **SEO Optimized**: Dynamic meta tags managed with `@unhead/vue`, Open Graph, and structured data
- **Skills Showcase**: Interactive skill categories with clean design
- **Experience Timeline**: Professional experience with mobile-optimized layout
- **Contact Form**: Integrated contact form with validation and user feedback
- **Dark Mode Ready**: CSS variable-based theming architecture

## 🛠️ Tech Stack

- **Frontend**: Vue 3.5.13 with Composition API
- **Build Tool**: Vite 6.4.1
- **Styling**: CSS3 with CSS Variables & Scoped Styles
- **SEO**: @unhead/vue
- **Linting**: ESLint + Prettier
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/stephengineer/stephengineer.github.io.git

# Navigate to the project directory
cd stephengineer.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and fix files
npm run lint

# Format files
npm run format
```

## 📁 Project Structure

```
src/
├── assets/             # Static assets (CSS, images)
│   ├── base.css        # Design tokens (colors, spacing)
│   └── main.css        # Global styles
├── components/         # Reusable Vue components
│   ├── BaseCard.vue    # Standard card component
│   ├── SectionHeader.vue # Standard section title
│   └── ...
├── composables/        # Shared logic (Vue Composables)
│   ├── useMobileMenu.js
│   └── useScrollToSection.js
├── data/               # Static content data
│   ├── experience.js
│   ├── skills.js
│   └── ...
├── router/             # Vue Router config
├── views/              # Page components
│   ├── Home.vue
│   └── Podcasts.vue
├── App.vue             # Root component
└── main.js             # Entry point
```

## 🎨 Design System

The project uses a CSS variable-based design system defined in `src/assets/base.css`:

- **Colors**: Semantic color names (`--color-primary`, `--color-text`)
- **Spacing**: T-shirt sizing scale (`--spacing-sm`, `--spacing-xl`)
- **Typography**: Responsive font sizes
- **Components**: Standardized cards, buttons, and inputs

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `master` branch triggers an automatic build and deployment.

## 👨‍💻 Author

**Stephen Wang**
- Research Scientist at VisionFlow AI
- Specializing in Large Language Models & Multi-agent Systems
- Email: zhongqi1112@gmail.com
- LinkedIn: [stephengineer](https://www.linkedin.com/in/stephengineer/)
- GitHub: [stephengineer](https://github.com/stephengineer)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
