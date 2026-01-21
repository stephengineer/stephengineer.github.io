# AGENTS.md - AI Agent Guidelines

> Guidelines for AI agents working on this Vue 3 personal website codebase.

## Project Overview

A personal portfolio website built with **Vue 3** and **Vite**. Deployed automatically to GitHub Pages via GitHub Actions on push to `master`.

- **Framework**: Vue 3.5+ with Composition API
- **Build Tool**: Vite 6.4+
- **Styling**: Scoped CSS with CSS Variables
- **State Management**: Composables (no Pinia needed yet)
- **Linting**: ESLint + Prettier

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run lint         # Lint and fix files
npm run format       # Format with Prettier
```

### Production
```bash
npm run build        # Production build to ./dist
npm run preview      # Preview production build locally
```

## Project Structure

```
src/
├── composables/         # Shared logic (use*)
├── components/          # Reusable UI components
├── data/                # Static content (skills, exp, etc)
├── views/               # Page-level components
├── assets/              # CSS and images
└── router/              # Vue Router config
```

## Architecture & Patterns

### 1. Data-Driven Components
**Do not hardcode content in components.**
- Move static data to `src/data/*.js` files.
- Import data in components:
```javascript
import { skills } from '../data/skills'
```

### 2. Composables
**Extract logic into `src/composables/`.**
- Naming: `useFeatureName.js`
- Return refs and functions.
- Add JSDoc for public API.

### 3. Base Components
**Use base components for consistency:**
- `BaseCard.vue`: For any card-like layout (skills, podcasts, education).
- `SectionHeader.vue`: For all section titles.

### 4. Design System (CSS)
**Use CSS Variables from `src/assets/base.css`:**
- **Colors**: `var(--color-primary)`, `var(--color-text)`
- **Spacing**: `var(--spacing-md)`, `var(--spacing-xl)`
- **Radius**: `var(--radius-lg)`
- **Shadows**: `var(--shadow-card)`

**Scoped Styles Only**:
```vue
<style scoped>
.container {
  padding: var(--spacing-xl);
}
</style>
```

### 5. SEO
**Use `@unhead/vue` for meta tags:**
```javascript
import { useHead } from '@unhead/vue'
useHead({ title: 'My Page' })
```

## Code Style

### Vue Components
- Use `<script setup>`.
- Order: Imports → Props/Emits → State → Logic → Lifecycle.
- PascalCase for component names.

### Formatting
- Run `npm run lint` before committing.
- No `console.log` in production code.

## Deployment
- Automatic via GitHub Actions on push to `master`.
- Verify build locally with `npm run build` before pushing.
