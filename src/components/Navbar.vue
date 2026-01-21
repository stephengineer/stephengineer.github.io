<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" @click="handleBrandClick" class="navbar-brand">
          Stephen<span class="text-primary">Wang</span>
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
          <a @click.stop="handleNavClick('contact')" class="nav-link">Contact</a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click.stop="toggleMobileMenu"
          @touchstart.stop="toggleMobileMenu"
          class="mobile-menu-btn"
          :class="{ active: isMobileMenuOpen }"
          type="button"
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
    // Wait for navigation then scroll
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
  isScrolled.value = window.scrollY > 50
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
  background: rgba(29, 33, 41, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(29, 33, 41, 0.98);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
}

@media (min-width: 768px) {
  .navbar-content {
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .navbar-content {
    padding: 0.75rem 1rem;
  }
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

@media (min-width: 768px) {
  .navbar-brand {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .navbar-brand {
    font-size: 1.125rem;
  }
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.text-primary {
  background: linear-gradient(135deg, #165dff 0%, #36cfc9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #165dff 0%, #36cfc9 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #36cfc9;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10000;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Hamburger animation */
.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-menu-btn:active {
  background: rgba(255, 255, 255, 0.2);
}

.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 0;
  padding: 0;
  background: rgba(29, 33, 41, 0.98);
  backdrop-filter: blur(10px);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 9998;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile-nav-open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-link {
  padding: 1rem 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  min-height: 44px;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover {
  color: #36cfc9;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 2rem;
}

.mobile-nav-link:active {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}

/* iPhone specific fixes */
@media (max-width: 414px) {
  .navbar-content {
    padding: 0.75rem 1rem;
  }

  .navbar-brand {
    font-size: 1rem;
  }

  .mobile-menu-btn {
    min-width: 44px;
    min-height: 44px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

/* Mobile touch fixes */
@media (max-width: 768px) {
  .mobile-menu-btn {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .mobile-menu-btn:active {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(0.95);
  }
}
</style>
