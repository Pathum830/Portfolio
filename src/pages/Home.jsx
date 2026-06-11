import React from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpeg'
import './Home.css'

/**
 * Home Page
 * HCI Principle: User-Centered Design — designed for recruiters & internship providers.
 * HCI Principle: Aesthetic and Minimalist Design — clean hero with clear CTA.
 * HCI Principle: Visibility of System Status — hover effects give immediate feedback.
 */
function Home() {
  const skills = ['React.js', 'Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Git','Go','PostgreSQL','Vue.js','C','Python']

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        {/* Background decoration */}
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--1"></div>
          <div className="hero__blob hero__blob--2"></div>
          <div className="hero__grid"></div>
        </div>

        <div className="container hero__container">
          {/* Text Content */}
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
              IT Student & Aspiring Full Stack Developer
            </p>

            <p className="hero__intro animate-fade-up animate-delay-3">
              A passionate technology student at the Institute of Technology,
              University of Moratuwa — building modern web applications and
              eager to grow through real-world internship experience.
            </p>

            {/* Skill Tags */}
            <div className="hero__skills animate-fade-up animate-delay-4" aria-label="Key skills">
              {skills.map(skill => (
                <span key={skill} className="hero__skill-tag">{skill}</span>
              ))}
            </div>

            {/* CTA Buttons — Nielsen: clear affordances */}
            <div className="hero__actions animate-fade-up animate-delay-5">
              <Link
                to="/projects"
                className="btn btn-primary hero__btn"
                aria-label="View my projects portfolio"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="hero__photo-wrapper animate-fade-up animate-delay-2" aria-label="Pathum's profile photo">
            <div className="hero__photo">
              <img src={profilePhoto} alt="Pathum Siriwardhana profile" className="hero__photo-image" />
            </div>
            {/* Floating badges */}
            <div className="hero__float-badge hero__float-badge--1" aria-label="University of Moratuwa">
              <span>🎓</span> UoM ITF
            </div>
            <div className="hero__float-badge hero__float-badge--2" aria-label="Full Stack Developer">
              <span>💻</span> Full Stack
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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
              <span className="stats__number" aria-label="3 portfolio projects">4+</span>
              <span className="stats__label">Projects</span>
            </div>
            <div className="stats__divider" aria-hidden="true"></div>
            <div className="stats__item">
              <span className="stats__number" aria-label="8 technical skills">10+</span>
              <span className="stats__label">Technologies</span>
            </div>
            <div className="stats__divider" aria-hidden="true"></div>
            <div className="stats__item">
              <span className="stats__number" aria-label="National Diploma in Technology">NDT-UOM</span>
              <span className="stats__label">Qualification</span>
            </div>
            <div className="stats__divider" aria-hidden="true"></div>
            <div className="stats__item">
              <span className="stats__number" aria-label="Open to opportunities">Open</span>
              <span className="stats__label">To Internship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="highlights section" aria-labelledby="highlights-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What I Offer</span>
            <h2 id="highlights-heading" className="section-title">Why Work With Me?</h2>
            <p className="section-subtitle">
              I combine academic knowledge with hands-on project experience to deliver
              impactful software solutions.
            </p>
          </div>

          <div className="highlights__grid">
            <article className="highlight-card card" tabIndex="0">
              <div className="highlight-card__icon" aria-hidden="true">🧩</div>
              <h3 className="highlight-card__title">Full Stack Skills</h3>
              <p className="highlight-card__desc">
                Proficient in both frontend (React, HTML, CSS, JavaScript,Go,) and backend
                (Java, Spring Boot) development with database experience in MySQL.
              </p>
            </article>

            <article className="highlight-card card" tabIndex="0">
              <div className="highlight-card__icon" aria-hidden="true">📚</div>
              <h3 className="highlight-card__title">Strong Foundation</h3>
              <p className="highlight-card__desc">
                Currently pursuing NDT at the Institute of Technology, University of
                Moratuwa — one of Sri Lanka's most prestigious institutions.
              </p>
            </article>

            <article className="highlight-card card" tabIndex="0">
              <div className="highlight-card__icon" aria-hidden="true">🚀</div>
              <h3 className="highlight-card__title">Real Projects</h3>
              <p className="highlight-card__desc">
                Built real-world applications including a tourism platform, library
                system, and student management system using modern tech stacks.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
