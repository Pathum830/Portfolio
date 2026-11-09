
import React from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpeg'
import './Home.css'

/**
 * Home Page
 * Career Focus: Cloud & DevOps Engineering
 * HCI: User-Centered Design, Minimalist Design and Visibility of System Status.
 */

function Home() {
  const skills = [
    'AWS',
    'Microsoft Azure',
    'Docker',
    'Git',
    'GitHub Actions',
    'CI/CD',
    'Linux',
    'Java',
    'Spring Boot',
    'Python',
    'JavaScript',
    'MySQL',
    'PostgreSQL'
  ]

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">

        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--1"></div>
          <div className="hero__blob hero__blob--2"></div>
          <div className="hero__grid"></div>
        </div>

        <div className="container hero__container">

          <div className="hero__content">

            <div className="hero__badge animate-fade-up">
              <span className="hero__badge-dot" aria-hidden="true"></span>
              Available for Internship
            </div>

            <h1 id="hero-heading" className="hero__name animate-fade-up animate-delay-1">
              Hi, I'm <span className="hero__name-highlight">Pathum</span>
              <br />Siriwardhana
            </h1>

            <p className="hero__role animate-fade-up animate-delay-2">
              Aspiring Cloud & DevOps Engineer
            </p>

            <p className="hero__intro animate-fade-up animate-delay-3">
              An IT undergraduate at the Institute of Technology,
              University of Moratuwa, passionate about Cloud Computing,
              DevOps practices, automation, and software development.
              Eager to build reliable systems and grow through
              real-world industry experience.
            </p>

            {/* Key Skills */}
            <div
              className="hero__skills animate-fade-up animate-delay-4"
              aria-label="Key skills"
            >
              {skills.map(skill => (
                <span key={skill} className="hero__skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero__actions animate-fade-up animate-delay-5">

              <Link
                to="/projects"
                className="btn btn-primary hero__btn"
                aria-label="View my projects portfolio"
              >
                <svg width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                View Projects
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline hero__btn"
                aria-label="Contact me"
              >
                <svg width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Me
              </Link>

            </div>
          </div>

          {/* Profile Photo */}
          <div
            className="hero__photo-wrapper animate-fade-up animate-delay-2"
            aria-label="Pathum's profile photo"
          >
            <div className="hero__photo">
              <img
                src={profilePhoto}
                alt="Pathum Siriwardhana profile"
                className="hero__photo-image"
              />
            </div>

            <div className="hero__float-badge hero__float-badge--1"
              aria-label="University of Moratuwa">
              <span>🎓</span> ITUM IT
            </div>

            <div className="hero__float-badge hero__float-badge--2"
              aria-label="Cloud and DevOps Engineering">
              <span>☁️</span> Cloud & DevOps
            </div>

          </div>
        </div>

        <div className="hero__scroll" aria-label="Scroll down for more content">
          <div className="hero__scroll-line"></div>
          <span>Scroll</span>
        </div>

      </section>

      {/* Stats Bar */}
      <section className="stats" aria-label="Quick statistics">
        <div className="container">
          <div className="stats__grid">

            <div className="stats__item">
              <span className="stats__number">6+</span>
              <span className="stats__label">Projects</span>
            </div>

            <div className="stats__divider" aria-hidden="true"></div>

            <div className="stats__item">
              <span className="stats__number">13+</span>
              <span className="stats__label">Technologies</span>
            </div>

            <div className="stats__divider" aria-hidden="true"></div>

            <div className="stats__item">
              <span className="stats__number">NDT</span>
              <span className="stats__label">IT - University of Moratuwa</span>
            </div>

            <div className="stats__divider" aria-hidden="true"></div>

            <div className="stats__item">
              <span className="stats__number">Open</span>
              <span className="stats__label">To Internship</span>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section
        className="highlights section"
        aria-labelledby="highlights-heading"
      >
        <div className="container">

          <div className="section-header">
            <span className="section-tag">What I Offer</span>

            <h2 id="highlights-heading" className="section-title">
              Why Work With Me?
            </h2>

            <p className="section-subtitle">
              Combining IT fundamentals, cloud technologies,
              software development, and practical project experience
              to build reliable technology solutions.
            </p>
          </div>

          <div className="highlights__grid">

            <article className="highlight-card card" tabIndex="0">
              <div className="highlight-card__icon" aria-hidden="true">
                ☁️
              </div>

              <h3 className="highlight-card__title">
                Cloud & DevOps
              </h3>

              <p className="highlight-card__desc">
                Exploring AWS, Microsoft Azure, Docker, Git,
                GitHub Actions, CI/CD pipelines, and cloud
                infrastructure deployment.
              </p>
            </article>

            <article className="highlight-card card" tabIndex="0">
              <div className="highlight-card__icon" aria-hidden="true">
                🎓
              </div>

              <h3 className="highlight-card__title">
                Strong IT Foundation
              </h3>

              <p className="highlight-card__desc">
                Currently pursuing the National Diploma in
                Technology in Information Technology at the
                Institute of Technology, University of Moratuwa.
              </p>
            </article>

            <article className="highlight-card card" tabIndex="0">
              <div className="highlight-card__icon" aria-hidden="true">
                🚀
              </div>

              <h3 className="highlight-card__title">
                Practical Projects
              </h3>

              <p className="highlight-card__desc">
                Developing practical applications and exploring
                cloud deployment, backend development, databases,
                containerization, and automation through projects.
              </p>
            </article>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
