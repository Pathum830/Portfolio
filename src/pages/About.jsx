
import React from 'react'
import profilePhoto from '../assets/profile.jpeg'
import './About.css'

/**
 * About Page
 * Career Focus: Cloud & DevOps Engineering
 * HCI: User-Centered Design and Recognition Rather Than Recall.
 * Accessibility: Semantic HTML and ARIA landmarks.
 */

// Technical Skills Data
const skills = [
  // Cloud Computing
  { name: 'AWS', level: 55, category: 'cloud' },
  { name: 'Microsoft Azure', level: 65, category: 'cloud' },

  // DevOps Tools
  { name: 'Docker', level: 60, category: 'devops' },
  { name: 'Git & GitHub', level: 80, category: 'tools' },
  { name: 'GitHub Actions', level: 55, category: 'ci/cd' },
  { name: 'Linux', level: 55, category: 'operating systems' },

  // Backend Development
  { name: 'Java', level: 75, category: 'backend' },
  { name: 'Spring Boot', level: 70, category: 'backend' },
  { name: 'Python', level: 65, category: 'programming' },

  // Frontend Development
  { name: 'React.js', level: 75, category: 'frontend' },
  { name: 'JavaScript', level: 75, category: 'frontend' },
  { name: 'HTML & CSS', level: 85, category: 'frontend' },

  // Databases
  { name: 'MySQL', level: 75, category: 'database' },
  { name: 'PostgreSQL', level: 70, category: 'database' },
]

// Skill Icons
const skillIcons = {
  AWS: '☁️',
  'Microsoft Azure': '🌐',
  Docker: '🐳',
  'Git & GitHub': '🔀',
  'GitHub Actions': '⚙️',
  Linux: '🐧',
  Java: '☕',
  'Spring Boot': '🍃',
  Python: '🐍',
  'React.js': '⚛️',
  JavaScript: '🟨',
  'HTML & CSS': '🌐',
  MySQL: '🗄️',
  PostgreSQL: '🐘',
}

function About() {
  return (
    <div className="about">

      {/* Page Header */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="page-hero__bg" aria-hidden="true"></div>

        <div className="container">
          <span className="section-tag">Get to Know Me</span>

          <h1 id="about-heading" className="page-hero__title">
            About Me
          </h1>

          <p className="page-hero__subtitle">
            IT undergraduate passionate about Cloud Computing,
            DevOps Engineering, and modern technology.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio section" aria-labelledby="bio-heading">
        <div className="container">
          <div className="about-bio__grid">

            {/* Profile Photo */}
            <div className="about-bio__photo-col">
              <div
                className="about-bio__photo"
                aria-label="Pathum's profile photo"
              >
                <img
                  src={profilePhoto}
                  alt="Pathum Siriwardhana"
                  className="about-bio__photo-image"
                />
              </div>

              {/* Quick Information */}
              <div className="about-bio__quick-info">

                <div className="about-bio__info-item">
                  <span className="about-bio__info-label">
                    University
                  </span>
                  <span className="about-bio__info-value">
                    ITUM – IT
                  </span>
                </div>

                <div className="about-bio__info-item">
                  <span className="about-bio__info-label">
                    Qualification
                  </span>
                  <span className="about-bio__info-value">
                    NDT-UOM
                  </span>
                </div>

                <div className="about-bio__info-item">
                  <span className="about-bio__info-label">
                    Status
                  </span>
                  <span className="about-bio__info-value about-bio__info-value--green">
                    Open to Internship
                  </span>
                </div>

              </div>
            </div>

            {/* About Me Content */}
            <div className="about-bio__text-col">

              <h2 id="bio-heading" className="about-bio__name">
                Pathum Siriwardhana
              </h2>

              <p className="about-bio__role">
                IT Undergraduate · Aspiring Cloud & DevOps Engineer
              </p>

              <p className="about-bio__para">
                I'm an IT undergraduate currently pursuing a National
                Diploma in Technology (NDT) at the Institute of Technology,
                University of Moratuwa. I am passionate about Cloud
                Computing, DevOps Engineering, automation, and software
                development.
              </p>

              <p className="about-bio__para">
                I have practical experience developing software projects
                using technologies such as Java, Spring Boot, React,
                Python, MySQL, and PostgreSQL. I am also developing my
                knowledge of cloud platforms, containerization,
                version control, and CI/CD automation using AWS,
                Microsoft Azure, Docker, and GitHub Actions.
              </p>

              <p className="about-bio__para">
                My career goal is to become a skilled Cloud & DevOps
                Engineer, contributing to reliable, scalable, and
                efficient technology solutions. I am actively seeking
                internship opportunities to strengthen my technical
                skills and gain real-world industry experience.
              </p>

              {/* Career Goals */}
              <div className="about-goals__grid">

                <div className="about-goals__item" role="listitem">
                  <span className="about-goals__icon" aria-hidden="true">
                    ☁️
                  </span>
                  <span>Cloud Engineer</span>
                </div>

                <div className="about-goals__item" role="listitem">
                  <span className="about-goals__icon" aria-hidden="true">
                    ⚙️
                  </span>
                  <span>DevOps Engineer</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        className="education section"
        aria-labelledby="education-heading"
        style={{ background: 'var(--gray-50)' }}
      >
        <div className="container">

          <div className="section-header">
            <span className="section-tag">My Background</span>

            <h2 id="education-heading" className="section-title">
              Education
            </h2>
          </div>

          <div className="education__timeline" role="list">

            <article
              className="education__item card"
              role="listitem"
              tabIndex="0"
            >
              <div className="education__icon" aria-hidden="true">
                🎓
              </div>

              <div className="education__content">

                <div className="education__period">
                  Current
                </div>

                <h3 className="education__degree">
                  National Diploma in Technology (NDT)
                </h3>

                <p className="education__institution">
                  Institute of Technology, University of Moratuwa
                </p>

                <p className="education__desc">
                  Developing knowledge in Information Technology,
                  software engineering, networking, database systems,
                  and web development. Expanding practical skills in
                  Cloud Computing, DevOps practices, and software
                  development through academic work and independent
                  projects.
                </p>

                <div className="education__tags">
                  <span className="education__tag">
                    Cloud Computing
                  </span>

                  <span className="education__tag">
                    DevOps Engineering
                  </span>

                  <span className="education__tag">
                    Software Engineering
                  </span>

                  <span className="education__tag">
                    Networking
                  </span>

                  <span className="education__tag">
                    Database Systems
                  </span>
                </div>

              </div>
            </article>
          </div>
        </div>
      </section>

      
{/* Certifications Section */}
<section className="certifications section" aria-labelledby="certifications-heading">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Achievements & Learning</span>
      <h2 id="certifications-heading" className="section-title">
        My Certifications
      </h2>
      <p className="section-subtitle">
        Professional certifications and courses that support my continuous learning journey.
      </p>
    </div>

    <div className="certifications__grid">

      {/* IBM Certificate */}
      <article className="certification-card card">
        <div className="certification-card__icon">☁️</div>
        <span className="certification-card__category">Cloud Computing</span>
        <h3>Cloud Computing Fundamentals</h3>
        <p className="certification-card__issuer">
          IBM SkillsBuild
        </p>
        <p className="certification-card__description">
          Digital badge covering fundamental cloud computing concepts
          and cloud technology knowledge.
        </p>
        <a
          href="https://lnkd.in/p/g9ipBVZH"
          target="_blank"
          rel="noopener noreferrer"
          className="certification-card__link"
        >
          View Certificate <span>↗</span>
        </a>
      </article>

      {/* Google Certificate */}
      <article className="certification-card card">
        <div className="certification-card__icon">🤖</div>
        <span className="certification-card__category">Artificial Intelligence</span>
        <h3>Google AI Essentials</h3>
        <p className="certification-card__issuer">
          Google
        </p>
        <p className="certification-card__description">
          Learning AI fundamentals, generative AI tools,
          prompt engineering and responsible AI usage.
        </p>
        <a
          href="https://lnkd.in/p/g5MszaBE"
          target="_blank"
          rel="noopener noreferrer"
          className="certification-card__link"
        >
          View Certificate <span>↗</span>
        </a>
      </article>

      {/* University of Moratuwa Certificate */}
      <article className="certification-card card">
        <div className="certification-card__icon">💻</div>
        <span className="certification-card__category">Information Technology</span>
        <h3>Python for Beginners</h3>
        <p className="certification-card__issuer">
          University of Moratuwa
        </p>
        <p className="certification-card__description">
          Free Beginner IT Course focused on developing
          foundational IT and programming knowledge.
        </p>
        <a
          href="https://lnkd.in/p/ghMzK-4T"
          target="_blank"
          rel="noopener noreferrer"
          className="certification-card__link"
        >
          View Certificate <span>↗</span>
        </a>
      </article>

    </div>
  </div>
</section>


      {/* Skills Section */}
      <section
        className="skills-section section"
        aria-labelledby="skills-heading"
      >
        <div className="container">

          <div className="section-header">
            <span className="section-tag">
              Technical Expertise
            </span>

            <h2 id="skills-heading" className="section-title">
              My Skills
            </h2>

            <p className="section-subtitle">
              Technologies and tools I explore across Cloud Computing,
              DevOps, software development, and database management.
            </p>
          </div>

          <div className="skills-grid" role="list">

            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card card"
                role="listitem"
                tabIndex="0"
              >

                <div className="skill-card__header">

                  <span
                    className="skill-card__icon"
                    aria-hidden="true"
                  >
                    {skillIcons[skill.name]}
                  </span>

                  <div>
                    <h3 className="skill-card__name">
                      {skill.name}
                    </h3>

                    <span className="skill-card__category">
                      {skill.category}
                    </span>
                  </div>

                  <span
                    className="skill-card__percent"
                    aria-label={`${skill.level}% proficiency`}
                  >
                    {skill.level}%
                  </span>

                </div>

                {/* Skill Progress Bar */}
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
