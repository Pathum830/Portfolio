import React from 'react'
import profilePhoto from '../assets/profile.jpeg'
import './About.css'


/**
 * About Page
 * HCI Principle: User-Centered Design — structured for recruiters scanning quickly.
 * HCI Principle: Recognition Rather Than Recall — skill icons, clear categories.
 * Accessibility: semantic HTML5 elements, ARIA landmarks, good color contrast.
 */

// Technical skills data
const skills = [
  { name: 'Java', level: 85, category: 'backend' },
  { name: 'Spring Boot', level: 78, category: 'backend' },
  { name: 'React.js', level: 80, category: 'frontend' },
  { name: 'JavaScript', level: 82, category: 'frontend' },
  { name: 'HTML & CSS', level: 90, category: 'frontend' },
  { name: 'MySQL', level: 75, category: 'database' },
  { name: 'Git & GitHub', level: 80, category: 'tools' },
]

const skillIcons = {
  Java: '☕',
  'Spring Boot': '🍃',
  'React.js': '⚛️',
  JavaScript: '🟨',
  'HTML & CSS': '🌐',
  MySQL: '🗄️',
  'Git & GitHub': '📝',
}

function About() {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="page-hero__bg" aria-hidden="true"></div>
        <div className="container">
          <span className="section-tag">Get to Know Me</span>
          <h1 id="about-heading" className="page-hero__title">About Me</h1>
          <p className="page-hero__subtitle">
            Passionate IT student with a love for building meaningful software.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio section" aria-labelledby="bio-heading">
        <div className="container">
          <div className="about-bio__grid">
            {/* Photo */}
            <div className="about-bio__photo-col">
              <div className="about-bio__photo" aria-label="Pathum's profile photo">
                <img src={profilePhoto} alt="Pathum Siriwardhana" className="about-bio__photo-image" />
              </div>

              {/* Contact quick links */}
              <div className="about-bio__quick-info">
                <div className="about-bio__info-item">
                  <span className="about-bio__info-label">University</span>
                  <span className="about-bio__info-value">UOM – IT</span>
                </div>
                <div className="about-bio__info-item">
                  <span className="about-bio__info-label">Degree</span>
                  <span className="about-bio__info-value">NDT-UOM</span>
                </div>
                <div className="about-bio__info-item">
                  <span className="about-bio__info-label">Status</span>
                  <span className="about-bio__info-value about-bio__info-value--green">
                    Open to Internship
                  </span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="about-bio__text-col">
              <h2 id="bio-heading" className="about-bio__name">
                Pathum Siriwardhana
              </h2>
              <p className="about-bio__role">IT Student · Full Stack Enthusiast</p>

              <p className="about-bio__para">
                I'm a dedicated IT student currently pursuing a National Diploma in Technology (NDT)
                at the Institute of Technology, University of Moratuwa — one of Sri Lanka's most
                prestigious institutions. My passion lies in developing software that solves real-world
                problems with clean, maintainable code.
              </p>
              <p className="about-bio__para">
                Over the past few years, I have built projects ranging from tourism management
                platforms to library systems, giving me hands-on experience with the full development
                lifecycle from database design to frontend implementation.
              </p>
              <p className="about-bio__para">
                I am actively seeking an internship opportunity where I can contribute meaningfully
                to a team while continuing to grow as a software engineer.
              </p>

              {/* Career Goals */}
              <div className="about-goals">
                <h3 className="about-goals__title">Career Aspirations</h3>
                <div className="about-goals__grid">
                  <div className="about-goals__item" role="listitem">
                    <span className="about-goals__icon" aria-hidden="true">🎯</span>
                    <span>Software Engineer</span>
                  </div>
                  <div className="about-goals__item" role="listitem">
                    <span className="about-goals__icon" aria-hidden="true">🌐</span>
                    <span>Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education section" aria-labelledby="education-heading" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">My Background</span>
            <h2 id="education-heading" className="section-title">Education</h2>
          </div>

          <div className="education__timeline" role="list">
            <article className="education__item card" role="listitem" tabIndex="0">
              <div className="education__icon" aria-hidden="true">🎓</div>
              <div className="education__content">
                <div className="education__period">Current</div>
                <h3 className="education__degree">National Diploma in Technology (NDT)</h3>
                <p className="education__institution">
                  Institute of Technology, University of Moratuwa
                </p>
                <p className="education__desc">
                  Focused on software engineering, web development, and database management.
                  Building foundational skills in Java, Spring Boot, and React.js through
                  coursework and independent projects.
                </p>
                <div className="education__tags">
                  <span className="education__tag">Software Engineering</span>
                  <span className="education__tag">Web Development</span>
                  <span className="education__tag">Database Systems</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section" aria-labelledby="skills-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Technical Expertise</span>
            <h2 id="skills-heading" className="section-title">My Skills</h2>
            <p className="section-subtitle">
              Technologies I work with across the full development stack.
            </p>
          </div>

          <div className="skills-grid" role="list">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card card" role="listitem" tabIndex="0">
                <div className="skill-card__header">
                  <span className="skill-card__icon" aria-hidden="true">
                    {skillIcons[skill.name]}
                  </span>
                  <div>
                    <h3 className="skill-card__name">{skill.name}</h3>
                    <span className="skill-card__category">{skill.category}</span>
                  </div>
                  <span className="skill-card__percent" aria-label={`${skill.level}% proficiency`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar — visual proficiency indicator */}
                <div
                  className="skill-card__bar"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${skill.name} proficiency: ${skill.level}%`}
                >
                  <div
                    className="skill-card__bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
