import { useRouter, useRoute } from 'vue-router'

/**
 * Composable for smooth scrolling to page sections
 * Handles both same-page scrolling and cross-page navigation
 */
export function useScrollToSection() {
  const router = useRouter()
  const route = useRoute()

  /**
   * Scroll to a section by ID with navbar offset handling
   * @param {string} sectionId - The ID of the section to scroll to
   * @param {Object} options - Optional configuration
   * @param {number} options.extraOffset - Additional offset in pixels (default: 0)
   * @param {string} options.behavior - Scroll behavior ('smooth' | 'auto', default: 'smooth')
   */
  const scrollToSection = (sectionId, options = {}) => {
    const { extraOffset = 0, behavior = 'smooth' } = options

    const performScroll = () => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const navbar = document.querySelector('.navbar')
      const navbarHeight = navbar ? navbar.offsetHeight : 80
      const isMobile = window.innerWidth <= 768
      const mobileOffset = isMobile ? 20 : 0
      const totalOffset = navbarHeight + mobileOffset + extraOffset

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - totalOffset

      window.scrollTo({
        top: elementPosition,
        behavior,
      })
    }

    // If not on home page, navigate first then scroll
    if (route.path !== '/') {
      router.push('/').then(() => {
        // Wait for DOM to update after navigation
        setTimeout(performScroll, 100)
      })
    } else {
      performScroll()
    }
  }

  /**
   * Scroll to top of page
   * @param {Object} options - Optional configuration
   * @param {string} options.behavior - Scroll behavior ('smooth' | 'auto', default: 'smooth')
   */
  const scrollToTop = (options = {}) => {
    const { behavior = 'smooth' } = options
    window.scrollTo({ top: 0, behavior })
  }

  return {
    scrollToSection,
    scrollToTop,
  }
}
