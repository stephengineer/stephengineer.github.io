import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for mobile menu state management
 * Handles opening/closing, body scroll lock, and outside click detection
 */
export function useMobileMenu() {
  const isOpen = ref(false)

  /**
   * Toggle mobile menu open/closed
   * @param {Event} event - Optional event to prevent default behavior
   */
  const toggle = (event) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    isOpen.value = !isOpen.value
    document.body.style.overflow = isOpen.value ? 'hidden' : ''
  }

  /**
   * Close mobile menu
   */
  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }

  /**
   * Open mobile menu
   */
  const open = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  // Handle click outside to close menu
  const handleOutsideClick = (event) => {
    const navbar = document.querySelector('.navbar')
    if (navbar && !navbar.contains(event.target) && isOpen.value) {
      close()
    }
  }

  // Setup and cleanup event listeners
  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    // Ensure body scroll is restored on unmount
    document.body.style.overflow = ''
  })

  return {
    isOpen,
    toggle,
    close,
    open,
  }
}
