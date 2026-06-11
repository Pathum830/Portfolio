import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-initials" aria-hidden="true">PS</span>
              <span className="footer__logo-text">Pathum Siriwardhana</span>
            </div>
            <p className="footer__tagline">
              IT Student · Aspiring Full Stack Developer
            </p>
            <p className="footer__location">
              📍 Institute of Technology, University of Moratuwa
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__heading">Navigation</h3>
            <ul>
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About</Link></li>
              <li><Link to="/projects" className="footer__link">Projects</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </nav>

          {/* Connect */}
          <div className="footer__connect">
            <h3 className="footer__heading">Connect</h3>
            <ul>
              <li>
                <a
                  href="mailto:pathumsiriwardhana86@gmail.com"
                  className="footer__link"
                  aria-label="Send email to Pathum"
                >
                  ✉️ pathumsiriwardhana86@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pathum830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pathum-siriwardhana-b78a9236b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Pathum Siriwardhana. All rights reserved.</p>
          <p className="footer__hci">Built with React </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
