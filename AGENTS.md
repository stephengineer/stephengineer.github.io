# AGENTS.md - AI Agent Guidelines

> Guidelines for AI agents working on this Vue 3 personal website codebase.

## Project Overview

A personal portfolio website built with **Vue 3** and **Vite**. Deployed automatically to GitHub Pages via GitHub Actions on push to `master`.

- **Framework**: Vue 3.5+ with Composition API
- **Build Tool**: Vite 6.0+
- **Styling**: Scoped CSS with CSS Variables
- **Routing**: Vue Router 4
- **Node**: 18+

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build to ./dist
npm run preview      # Preview production build locally
```

### Production
```bash
npm run build:prod   # Build with NODE_ENV=production
npm run preview:prod # Build and preview production
```

### No Test/Lint Commands
This project currently has no configured test suite or linter. When making changes:
- Verify manually in browser (`npm run dev`)
- Check browser console for errors
- Test on mobile viewport sizes (responsive design is critical)

## Project Structure

```
src/
├── main.js              # App entry point
├── App.vue              # Root component (Navbar + RouterView)
├── router/index.js      # Vue Router configuration
├── views/               # Page-level components
│   ├── Home.vue         # Main landing page with all sections
│   └── Podcasts.vue     # Podcasts listing page
├── components/          # Reusable components
│   ├── Navbar.vue       # Navigation with mobile menu
│   ├── SkillsSection.vue
│   ├── ExperienceSection.vue
│   ├── EducationSection.vue
│   ├── ContactForm.vue
│   └── PodcastSection.vue
└── assets/
    ├── base.css         # CSS variables and base styles
    ├── main.css         # Global styles, animations
    └── profile.jpeg     # Profile image
```

## Code Style Guidelines

### Vue Components

**Use Composition API with `<script setup>`**:
```vue
<script setup>
import { ref, onMounted } from 'vue'
import ChildComponent from './ChildComponent.vue'

const isActive = ref(false)

const handleClick = () => {
  isActive.value = true
}
</script>

<template>
  <div class="container">
    <ChildComponent :active="isActive" @click="handleClick" />
  </div>
</template>

<style scoped>
.container {
  /* scoped styles */
}
</style>
```

**Component file order**: `<script setup>` → `<template>` → `<style scoped>`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `SkillsSection.vue` |
| Component tags | PascalCase | `<SkillsSection />` |
| CSS classes | kebab-case | `.hero-section`, `.hero-content` |
| CSS variables | `--kebab-case` | `--color-primary` |
| JS variables | camelCase | `isScrolled`, `handleClick` |
| Refs | camelCase | `const isMobileMenuOpen = ref(false)` |

### Import Order

1. Vue core imports (`vue`, `vue-router`)
2. Local components (relative paths)
3. Assets (CSS, images)

```javascript
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ChildComponent from '../components/ChildComponent.vue'
```

### CSS Guidelines

**Use CSS Variables for theming** (defined in `src/assets/base.css`):
```css
.my-element {
  color: var(--color-text);
  background: var(--color-background);
  border-color: var(--color-border);
}
```

**Color palette**:
- Primary: `#165DFF` (Blue)
- Secondary: `#36CFC9` (Cyan)
- Gradient: `linear-gradient(135deg, #165DFF 0%, #36CFC9 100%)`

**Always use scoped styles** in components to prevent style leakage:
```vue
<style scoped>
/* styles here only affect this component */
</style>
```

**Responsive design pattern** - Mobile-first with breakpoints:
```css
/* Mobile first (default) */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .container {
    padding: 3rem;
  }
}
```

**Transitions**: Use consistent timing:
```css
.element {
  transition: all 0.3s ease;
}
```

### TypeScript

TypeScript is configured but **strict mode is OFF**. The codebase primarily uses JavaScript.
- Don't add `as any` or type assertions unless necessary
- Prefer JavaScript syntax for consistency with existing code

## Patterns to Follow

### Router Links
Use `router-link` for internal navigation:
```vue
<router-link to="/podcasts" class="link">View Podcasts</router-link>
```

### External Links
Always include `target="_blank"` and `rel="noopener"`:
```vue
<a href="https://github.com/user" target="_blank" rel="noopener">GitHub</a>
```

### Smooth Scroll to Section
Pattern used for section navigation:
```javascript
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbar = document.querySelector('.navbar')
    const navbarHeight = navbar ? navbar.offsetHeight : 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
```

### Mobile Menu Toggle
Pattern for mobile-responsive navigation:
```javascript
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}
```

## Deployment

**Automatic**: Push to `master` triggers GitHub Actions deployment to GitHub Pages.

**Workflow** (`.github/workflows/deploy.yml`):
1. Checkout code
2. Setup Node.js 18
3. `npm ci`
4. `npm run build`
5. Deploy `./dist` to GitHub Pages

**Manual verification before push**:
1. `npm run build` - Ensure build succeeds
2. `npm run preview` - Verify production build locally
3. Test responsive layouts at 320px, 768px, 1200px widths

## Common Tasks

### Adding a New Section to Home Page

1. Create component in `src/components/NewSection.vue`
2. Import and use in `src/views/Home.vue`
3. Add section with proper ID for navigation:
```vue
<section id="new-section" class="new-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Section Title</h2>
      <p class="section-description">Description text.</p>
    </div>
    <NewSection />
  </div>
</section>
```
4. Add navigation link in `src/components/Navbar.vue`

### Adding a New Route/Page

1. Create view in `src/views/NewPage.vue`
2. Add route in `src/router/index.js`:
```javascript
import NewPage from '../views/NewPage.vue'

const routes = [
  // ... existing routes
  {
    path: '/new-page',
    name: 'NewPage',
    component: NewPage
  }
]
```

### Modifying Theme Colors

Update CSS variables in `src/assets/base.css`:
```css
:root {
  --color-background: #ffffff;
  --color-text: #2c3e50;
  /* ... */
}
```

## Gotchas

1. **No HMR for CSS variables**: Changes to `base.css` may require page refresh
2. **Fixed navbar**: Account for 80px navbar height when calculating scroll positions
3. **Mobile menu**: Remember to restore `body.style.overflow` when closing
4. **Image paths**: Use relative paths from component (`../assets/image.jpg`)
5. **SVG icons**: Inline SVGs preferred over icon libraries for performance
