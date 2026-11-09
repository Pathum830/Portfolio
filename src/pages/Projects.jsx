import React, { useState } from 'react'
import './Projects.css'

/**
 * Projects Page
 * HCI Principle: Recognition Rather Than Recall — visual cards with tech tags.
 * HCI Principle: Aesthetic and Minimalist Design — clean grid with focused cards.
 * Accessibility: semantic article elements, descriptive link text, keyboard navigable.
 */

const projects = [
  {
    id: 1,
    title: 'Guide Lanka',
    emoji: '🌿',
    description:
      'A comprehensive safari booking and tourism management platform connecting tourists with experienced local safari drivers. Features real-time booking, driver profiles, and route management.',
    longDesc:
      'Built with React.js for a responsive frontend and Spring Boot for the REST API backend. Includes a MySQL relational database to manage bookings, user accounts, driver availability, and tour packages.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    category: 'Full Stack',
    color: '#22c55e',
    highlights: ['Real-time booking system', 'Driver management', 'Tourist portal'],
    github: 'https://github.com/Pathum830/GuideLanka.git',
    demo: 'https://guide-lanka.netlify.app',
    hasDemo: true,
  },
  {
    id: 2,
    title: 'Library Management System',
    emoji: '📚',
    description:
      'A complete system for managing books, members, and borrowing records at a library. Streamlines the cataloguing, lending, and return process with reporting features.',
    longDesc:
      'Built using Java with JDBC for database interaction and MySQL for persistent storage. Implements object-oriented design patterns for maintainability and supports full CRUD operations on all entities.',
    technologies: ['Java', 'MySQL', 'JDBC', 'OOP'],
    category: 'Backend',
    color: '#f59e0b',
    highlights: ['Book catalogue management', 'Member tracking', 'Borrowing records'],
    github: 'https://github.com/pathum/library-system',
    hasDemo: false,
  },
  {
    id: 3,
    title: 'Student Management System',
    emoji: '🎓',
    description:
      'A robust system for managing student records and academic information in an educational institution, including enrollment, grades, and course assignments.',
    longDesc:
      'Developed with Java and Spring Boot providing a RESTful API layer, backed by MySQL for data persistence. The system handles student profiles, course enrollments, grade management, and generates academic reports.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    category: 'Full Stack',
    color: '#8b5cf6',
    highlights: ['Student records', 'Grade management', 'Academic reports'],
    github: 'https://github.com/Pathum830/Student-Management-System.git',
    hasDemo: false,
  },

  {
    id: 4,
    title: 'Enterprise Resource Planning (ERP) - Project Management Module',
    emoji: '📊',
    description:
      'A comprehensive project management solution designed to streamline project planning, task allocation, team collaboration, and progress tracking within an enterprise environment.',
    longDesc:
      'Developed as part of an Enterprise Resource Planning (ERP) system using Go, Vue.js, PostgreSQL, and Docker. The module enables project managers to create projects, assign tasks, monitor team performance, track project milestones, manage resources, and generate real-time reports. The system improves workflow efficiency, enhances collaboration, and supports data-driven decision-making across the organization.',
    technologies: ['Docker', 'Go', 'PostgreSQL', 'vue.js'],
    category: 'Full Stack',
    color: '#28abbc',
    highlights: ['Project planning & scheduling',
    'Task assignment & tracking',
    'Team collaboration',
    'Resource management',
    'Progress monitoring',
    'Reporting & analytics'],
    github: 'https://github.com/Pathum830/Enterprise-rescores-planning-Project-Management-.git',
    hasDemo: false,
  },
]

function Projects() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-hero" aria-labelledby="projects-heading">
        <div className="page-hero__bg" aria-hidden="true"></div>
        <div className="container">
          <span className="section-tag">My Work</span>
          <h1 id="projects-heading" className="page-hero__title">Projects</h1>
          <p className="page-hero__subtitle">
            Real-world applications built with modern technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-list section" aria-labelledby="projects-heading">
        <div className="container">
          <div className="projects__grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project-card card ${expandedId === project.id ? 'project-card--expanded' : ''}`}
                aria-label={`Project: ${project.title}`}
              >
                {/* Project Image Placeholder */}
                <div
                  className="project-card__image"
                  style={{ '--project-color': project.color }}
                  aria-label={`${project.title} project image placeholder`}
                >
                  <span className="project-card__emoji" aria-hidden="true">
                    {project.emoji}
                  </span>
                  <span className="project-card__category-badge">{project.category}</span>
                </div>

                {/* Card Body */}
                <div className="project-card__body">
                  <h2 className="project-card__title">{project.title}</h2>
                  <p className="project-card__desc">{project.description}</p>

                  {/* Expanded detail */}
                  {expandedId === project.id && (
                    <p className="project-card__long-desc animate-fade-up">
                      {project.longDesc}
                    </p>
                  )}

                  {/* Highlights */}
                  <ul className="project-card__highlights" aria-label="Key features">
                    {project.highlights.map((h) => (
                      <li key={h} className="project-card__highlight">
                        <span aria-hidden="true">✓</span> {h}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="project-card__tech" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-card__tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-card__actions">
                    {/* GitHub — always present */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-card__btn"
                      aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>

                    {/* Live Demo — conditional */}
                    {project.hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-card__btn"
                        aria-label={`View live demo of ${project.title} (opens in new tab)`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    )}

                    {/* Read more toggle */}
                    <button
                      className="btn btn-ghost project-card__btn"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={expandedId === project.id}
                      aria-controls={`project-detail-${project.id}`}
                    >
                      {expandedId === project.id ? 'Less Info' : 'More Info'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to action */}
          <div className="projects__cta">
            <p>Interested in seeing more of my work?</p>
            <a
              href="https://github.com/Pathum830"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="View all my projects on GitHub (opens in new tab)"
            >
              View All on GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
