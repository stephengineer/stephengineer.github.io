import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useScrollToSection } from '../hooks/useScrollToSection.js'
import { useMobileMenu } from '../hooks/useMobileMenu.js'
import './Navbar.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'ideas', label: 'Ideas' },
  { id: 'contact', label: 'Contact', cta: true },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollToSection } = useScrollToSection()
  const {
    isOpen: isMobileMenuOpen,
    toggle: toggleMobileMenu,
    close: closeMobileMenu,
  } = useMobileMenu()

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    scrollToSection(sectionId)
    closeMobileMenu()
  }

  const handleBrandClick = (e) => {
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      closeMobileMenu()
    }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" onClick={handleBrandClick} className="navbar-brand">
            Stephen Wang
          </Link>

          <div className="navbar-nav desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`nav-link${item.cta ? ' nav-link-cta' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-btn${isMobileMenuOpen ? ' active' : ''}`}
            type="button"
            aria-controls="primary-mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>

        <div
          id="primary-mobile-navigation"
          className={`mobile-nav${isMobileMenuOpen ? ' mobile-nav-open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              className="mobile-nav-link"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
