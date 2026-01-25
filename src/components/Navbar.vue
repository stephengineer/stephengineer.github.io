<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="navbar-content">
        <router-link to="/" @click="handleBrandClick" class="navbar-brand">
          Stephen Wang
        </router-link>

        <!-- Desktop Navigation -->
        <div class="navbar-nav desktop-nav">
          <a @click.stop="handleNavClick('about')" class="nav-link">About</a>
          <a @click.stop="handleNavClick('skills')" class="nav-link">Skills</a>
          <a @click.stop="handleNavClick('experience')" class="nav-link">Experience</a>
          <a @click.stop="handleNavClick('projects')" class="nav-link">Projects</a>
          <a @click.stop="handleNavClick('research')" class="nav-link">Research</a>
          <a @click.stop="handleNavClick('education')" class="nav-link">Education</a>
          <a @click.stop="handleIdeasClick" class="nav-link">Ideas</a>
          <a @click.stop="handleNavClick('contact')" class="nav-link nav-link-cta">Contact</a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click.stop="toggleMobileMenu"
          @touchstart.stop="toggleMobileMenu"
          class="mobile-menu-btn"
          :class="{ active: isMobileMenuOpen }"
          type="button"
          aria-label="Toggle menu"
        >
          <span class="hamburger">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ 'mobile-nav-open': isMobileMenuOpen }">
        <a @click.stop="handleNavClick('about')" class="mobile-nav-link">About</a>
        <a @click.stop="handleNavClick('skills')" class="mobile-nav-link">Skills</a>
        <a @click.stop="handleNavClick('experience')" class="mobile-nav-link">Experience</a>
        <a @click.stop="handleNavClick('projects')" class="mobile-nav-link">Projects</a>
        <a @click.stop="handleNavClick('research')" class="mobile-nav-link">Research</a>
        <a @click.stop="handleNavClick('education')" class="mobile-nav-link">Education</a>
        <a @click.stop="handleIdeasClick" class="mobile-nav-link">Ideas</a>
        <a @click.stop="handleNavClick('contact')" class="mobile-nav-link">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useScrollToSection } from '../composables/useScrollToSection'
import { useMobileMenu } from '../composables/useMobileMenu'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)

const { scrollToSection: scrollTo } = useScrollToSection()
const {
  isOpen: isMobileMenuOpen,
  toggle: toggleMobileMenu,
  close: closeMobileMenu,
} = useMobileMenu()

const handleNavClick = (sectionId) => {
  scrollTo(sectionId)
  closeMobileMenu()
}

const handleIdeasClick = () => {
  if (route.path === '/') {
    handleNavClick('ideas')
  } else {
    router.push('/')
    setTimeout(() => {
      handleNavClick('ideas')
    }, 100)
  }
}

const handleBrandClick = (e) => {
  if (route.path !== '/') {
    e.preventDefault()
    router.push('/')
    closeMobileMenu()
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: var(--glass-bg-strong);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-nav);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .navbar-container {
    padding: 0 2rem;
  }
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

@media (min-width: 768px) {
  .navbar-content {
    height: 72px;
  }
}

.navbar-brand {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-heading);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.2s ease;
}

@media (min-width: 768px) {
  .navbar-brand {
    font-size: 1.25rem;
  }
}

.navbar-brand:hover {
  color: var(--color-primary);
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

@media (min-width: 900px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 0.875rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--color-heading);
  background: var(--color-primary-alpha-10);
}

.nav-link-cta {
  color: var(--color-primary);
  font-weight: 600;
}

.nav-link-cta:hover {
  color: var(--color-primary-dark);
  background: var(--color-primary-alpha-15);
}

/* Mobile menu button */
.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

@media (min-width: 900px) {
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-menu-btn:hover {
  background: var(--color-background-mute);
}

.mobile-menu-btn:active {
  background: var(--color-border);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18px;
  height: 12px;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: var(--color-heading);
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

/* Mobile navigation */
.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 0.5rem 0 1rem;
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

@media (max-width: 899px) {
  .mobile-nav {
    display: flex;
  }
}

.mobile-nav-open {
  max-height: 500px;
  opacity: 1;
  padding: 0.75rem 0 1rem;
}

.mobile-nav-link {
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link:active {
  color: var(--color-heading);
  background: var(--color-primary-alpha-10);
}
</style>
