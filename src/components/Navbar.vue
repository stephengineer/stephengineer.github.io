<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <a href="#about" class="navbar-brand">
          Stephen<span class="text-primary">Wang</span>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="navbar-nav desktop-nav">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path v-if="!isMobileMenuOpen" d="M3 12h18M3 6h18M3 18h18"/>
            <path v-else d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ 'mobile-nav-open': isMobileMenuOpen }">
        <a href="#about" @click="closeMobileMenu" class="mobile-nav-link">About</a>
        <a href="#skills" @click="closeMobileMenu" class="mobile-nav-link">Skills</a>
        <a href="#contact" @click="closeMobileMenu" class="mobile-nav-link">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.dark .navbar {
  background: rgba(29, 33, 41, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dark .navbar-scrolled {
  background: rgba(29, 33, 41, 0.95);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-heading);
  text-decoration: none;
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.text-primary {
  background: linear-gradient(135deg, #165DFF 0%, #36CFC9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.desktop-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--color-text);
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
  background: linear-gradient(135deg, #165DFF 0%, #36CFC9 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #165DFF;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--color-background-mute);
}

.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  background: var(--color-background);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-nav-open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-link {
  padding: 0.75rem 0;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0.25rem;
}

.mobile-nav-link:hover {
  color: #165DFF;
  background: var(--color-background-mute);
  padding-left: 0.5rem;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-nav {
    display: flex;
  }
}
</style>
