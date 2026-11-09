import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

/**
 * Navbar Component
 * HCI Principle: Consistency and Standards — same navigation on every page.
 * HCI Principle: Recognition Rather Than Recall — clear labels and active states.
 * Accessibility: keyboard navigable, ARIA roles, skip link.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add shadow when user scrolls (Visibility of System Status)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes (mobile UX)
  const closeMenu = () => setIsOpen(false)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      {/* Skip-to-content for keyboard/screen reader users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        role="banner"
      >
        <div className="navbar__container container">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="navbar__logo"
            aria-label="Pathum Siriwardhana - Home"
            onClick={closeMenu}
          >
            <span className="navbar__logo-initials" aria-hidden="true">PS</span>
            <span className="navbar__logo-text">Pathum</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="navbar__nav"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA Button (desktop) */}
          <Link
            to="/contact"
            className="btn btn-primary navbar__cta"
            aria-label="Hire me - go to contact page"
          >
            Hire Me
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="navbar__hamburger-line" aria-hidden="true"></span>
            <span className="navbar__hamburger-line" aria-hidden="true"></span>
            <span className="navbar__hamburger-line" aria-hidden="true"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}
          aria-hidden={!isOpen}
        >
          <nav
            role="navigation"
            aria-label="Mobile navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ marginTop: '1rem', justifyContent: 'center' }}
              onClick={closeMenu}
            >
              Hire Me
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
