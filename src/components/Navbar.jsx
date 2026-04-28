import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useScrollToSection } from '../hooks/useScrollToSection.js'
import { useMobileMenu } from '../hooks/useMobileMenu.js'
import './Navbar.css'

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

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    closeMobileMenu()
  }

  const handleIdeasClick = (e) => {
    e.stopPropagation()
    if (location.pathname === '/') {
      handleNavClick('ideas')
    } else {
      navigate('/')
      setTimeout(() => handleNavClick('ideas'), 100)
    }
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
    <nav className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" onClick={handleBrandClick} className="navbar-brand">
            Stephen Wang
          </Link>

          <div className="navbar-nav desktop-nav">
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('about')
              }}
              className="nav-link"
            >
              About
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('skills')
              }}
              className="nav-link"
            >
              Skills
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('experience')
              }}
              className="nav-link"
            >
              Experience
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('projects')
              }}
              className="nav-link"
            >
              Projects
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('research')
              }}
              className="nav-link"
            >
              Research
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('education')
              }}
              className="nav-link"
            >
              Education
            </a>
            <a onClick={handleIdeasClick} className="nav-link">
              Ideas
            </a>
            <a
              onClick={(e) => {
                e.stopPropagation()
                handleNavClick('contact')
              }}
              className="nav-link nav-link-cta"
            >
              Contact
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            onTouchStart={toggleMobileMenu}
            className={`mobile-menu-btn${isMobileMenuOpen ? ' active' : ''}`}
            type="button"
            aria-label="Toggle menu"
          >
            <span className="hamburger">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>

        <div className={`mobile-nav${isMobileMenuOpen ? ' mobile-nav-open' : ''}`}>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('about')
            }}
            className="mobile-nav-link"
          >
            About
          </a>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('skills')
            }}
            className="mobile-nav-link"
          >
            Skills
          </a>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('experience')
            }}
            className="mobile-nav-link"
          >
            Experience
          </a>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('projects')
            }}
            className="mobile-nav-link"
          >
            Projects
          </a>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('research')
            }}
            className="mobile-nav-link"
          >
            Research
          </a>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('education')
            }}
            className="mobile-nav-link"
          >
            Education
          </a>
          <a onClick={handleIdeasClick} className="mobile-nav-link">
            Ideas
          </a>
          <a
            onClick={(e) => {
              e.stopPropagation()
              handleNavClick('contact')
            }}
            className="mobile-nav-link"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
