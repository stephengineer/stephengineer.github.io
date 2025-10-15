<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div class="theme-icon">
      <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="sun-icon">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
      </svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="moon-icon">
        <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 9 9 0 009-9 8.97 8.97 0 00-3.477-3.463.75.75 0 01.162-.819A8.97 8.97 0 0018 3a9 9 0 00-9 9 8.97 8.97 0 00-3.477 3.463z"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = prefersDark
  }
  
  // Apply initial theme
  updateTheme()
})
</script>

<style scoped>
.theme-toggle {
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-text);
}

.theme-toggle:hover {
  background: var(--color-background-soft);
  border-color: #165DFF;
  transform: translateY(-1px);
}

.theme-toggle:active {
  transform: translateY(0);
}

.theme-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sun-icon,
.moon-icon {
  transition: all 0.3s ease;
}

.sun-icon {
  transform: rotate(0deg);
}

.moon-icon {
  transform: rotate(0deg);
}

.theme-toggle:hover .sun-icon {
  transform: rotate(180deg);
}

.theme-toggle:hover .moon-icon {
  transform: rotate(180deg);
}

/* Dark mode specific styles */
.dark .theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.dark .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #36CFC9;
}
</style>
