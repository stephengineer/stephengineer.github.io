import { useNavigate, useLocation } from 'react-router-dom'

export function useScrollToSection() {
  const navigate = useNavigate()
  const location = useLocation()

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

      window.scrollTo({ top: elementPosition, behavior })
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(performScroll, 100)
    } else {
      performScroll()
    }
  }

  const scrollToTop = (options = {}) => {
    const { behavior = 'smooth' } = options
    window.scrollTo({ top: 0, behavior })
  }

  return { scrollToSection, scrollToTop }
}
