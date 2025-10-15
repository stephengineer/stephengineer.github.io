# Stephen Wang - Personal Website

A modern, responsive personal website showcasing my work as a Research Scientist & AI Engineer. Built with Vue 3 and Vite for optimal performance and developer experience.

## 🌟 Live Demo

Visit the live website: [https://stephengineer.github.io/](https://stephengineer.github.io/)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Built with Vite for lightning-fast loading
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Skills Showcase**: Interactive skill categories with clean design
- **Experience Timeline**: Professional experience with mobile-optimized layout
- **Contact Form**: Integrated contact form with validation
- **Navigation**: Elegant navigation with mobile hamburger menu

## 🛠️ Tech Stack

- **Frontend**: Vue 3.5.13 with Composition API
- **Build Tool**: Vite 6.0.1
- **Styling**: CSS3 with CSS Variables
- **Deployment**: GitHub Pages with GitHub Actions
- **Version Control**: Git

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

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

# Build for production with environment
npm run build:prod

# Preview production build locally
npm run preview:prod
```

## 📁 Project Structure

```
stephengineer.github.io/
├── src/
│   ├── components/          # Vue components
│   │   ├── Navbar.vue      # Navigation bar with mobile menu
│   │   ├── SkillsSection.vue # Skills showcase
│   │   ├── ExperienceSection.vue # Work experience timeline
│   │   └── ContactForm.vue  # Contact form
│   ├── assets/             # Static assets
│   │   ├── base.css        # Base styles and CSS variables
│   │   ├── main.css        # Global styles
│   │   └── profile.jpeg    # Profile image
│   ├── App.vue             # Main application component
│   └── main.js             # Application entry point
├── .github/
│   └── workflows/          # GitHub Actions for deployment
├── public/                 # Public assets
│   └── favicon.ico         # Site favicon
├── index.html              # Main HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #165DFF (Blue)
- **Secondary**: #36CFC9 (Cyan)
- **Background**: Light theme with CSS variables
- **Navigation**: Dark theme with glassmorphism

### Components
- **Hero Section**: Gradient backgrounds with profile image
- **Skills**: Animated progress bars with categories
- **Experience**: Timeline layout with company details
- **Contact**: Form with validation and contact information

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `master` branch triggers an automatic build and deployment.

### Manual Deployment

The website is automatically deployed via GitHub Actions on every push to the `master` branch. No manual deployment is needed.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Updating Personal Information

1. **Profile Information**: Edit `src/App.vue` hero section
2. **Skills**: Modify `src/components/SkillsSection.vue`
3. **Experience**: Update `src/components/ExperienceSection.vue`
4. **Contact**: Edit `src/components/ContactForm.vue`

### Styling

- **Colors**: Update CSS variables in `src/assets/base.css`
- **Layout**: Modify component styles in respective `.vue` files
- **Global Styles**: Edit `src/assets/main.css`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Stephen Wang**
- Research Scientist at VisionFlow AI
- Specializing in Large Language Models & Multi-agent Systems
- Email: zhongqi1112@gmail.com
- LinkedIn: [stephengineer](https://www.linkedin.com/in/stephengineer/)
- GitHub: [stephengineer](https://github.com/stephengineer)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 2s on 3G networks
- **SEO**: Fully optimized for search engines

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Project portfolio
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] PWA features

---

⭐ If you found this project helpful, please give it a star!