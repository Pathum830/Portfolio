
import React, { useState } from 'react'
import './Projects.css'

/**
 * Projects Page
 * Career Focus: Cloud & DevOps Engineering
 * HCI: Recognition Rather Than Recall, Aesthetic Design,
 * and Accessible Interactive Project Cards.
 */

const projects = [
  {
    id: 1,
    title: 'GuideLanka - AI Tourism Platform',
    emoji: '🌿',
    description:
      'An intelligent tourism platform designed to connect tourists with local safari drivers and improve wildlife safari experiences in Sri Lanka.',
    longDesc:
      'Developed as an Agentic AI ecosystem for rural tourism and safari optimization. The platform focuses on tourist services, local provider management, wildlife sighting information, GPS tracking, and intelligent safari route optimization.',
    technologies: [
      'React.js',
      'Flutter',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'Gemini API',
      'Mapbox'
    ],
    category: 'AI & Software Development',
    color: '#22c55e',
    highlights: [
      'Tourist and provider management',
      'AI-powered tourist assistance',
      'Safari route optimization',
      'GPS tracking and safety monitoring',
      'Wildlife sighting management'
    ],
    github: 'https://github.com/Pathum830/GuideLanka.git',
    demo: 'https://guide-lanka.netlify.app',
    hasDemo: true,
  },

  {
    id: 2,
    title: 'PartTime LK - Job Marketplace',
    emoji: '📱',
    description:
      'A mobile application designed to connect part-time job seekers with employers through a convenient digital job marketplace.',
    longDesc:
      'Developed using Flutter with a focus on helping users discover part-time job opportunities. The application aims to simplify job searching and recruitment through features such as job discovery, worker profiles, job applications, and employer-worker connectivity.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Git',
      'GitHub'
    ],
    category: 'Mobile Application',
    color: '#0ea5e9',
    highlights: [
      'Location-based job discovery',
      'Job application management',
      'Worker profile management',
      'Employer and worker connectivity',
      'Mobile-first user experience'
    ],
    github: 'https://github.com/Pathum830/PartTime-LK.git',
    hasDemo: false,
  },

  {
    id: 3,
    title: 'Library Management System',
    emoji: '📚',
    description:
      'A library management application designed to manage books, members, borrowing records, and returns efficiently.',
    longDesc:
      'Developed using Java and JDBC with MySQL for database management. Implemented object-oriented programming concepts and CRUD operations to manage library records.',
    technologies: [
      'Java',
      'MySQL',
      'JDBC',
      'OOP'
    ],
    category: 'Backend Development',
    color: '#f59e0b',
    highlights: [
      'Book catalogue management',
      'Member management',
      'Borrowing records',
      'Database operations'
    ],
    github: 'https://github.com/pathum/library-system',
    hasDemo: false,
  },

  {
    id: 4,
    title: 'Student Management System',
    emoji: '🎓',
    description:
      'A student management application for handling student profiles, academic records, course information, and enrollment details.',
    longDesc:
      'Developed using Java and Spring Boot with MySQL database integration. The application provides RESTful APIs for managing student information and academic records.',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'REST API'
    ],
    category: 'Backend Development',
    color: '#8b5cf6',
    highlights: [
      'Student record management',
      'Course management',
      'REST API development',
      'Database integration'
    ],
    github: 'https://github.com/Pathum830/Student-Management-System.git',
    hasDemo: false,
  },

  {
    id: 5,
    title: 'ERP - Project Management Module',
    emoji: '📊',
    description:
      'An enterprise project management module designed to support project planning, task allocation, team collaboration, and progress monitoring.',
    longDesc:
      'Developed using Go, Vue.js, PostgreSQL, and Docker. The system supports project and task management, team collaboration, work logging, and dashboard analytics. Docker is used as part of the development environment.',
    technologies: [
      'Docker',
      'Go',
      'Vue.js',
      'PostgreSQL'
    ],
    category: 'DevOps & Software Development',
    color: '#28abbc',
    highlights: [
      'Project planning and management',
      'Task allocation and tracking',
      'Team collaboration',
      'Docker-based development',
      'Progress monitoring',
      'Dashboard analytics'
    ],
    github: 'https://github.com/Pathum830/Enterprise-rescores-planning-Project-Management-.git',
    hasDemo: false,
  },

  {
    id: 6,
    title: 'Spring Boot CI/CD Pipeline',
    emoji: '⚙️',
    description:
      'A practical CI/CD project demonstrating automated application building and testing using GitHub Actions.',
    longDesc:
      'Configured a GitHub Actions workflow for a Spring Boot Maven application. The pipeline checks out source code, sets up Java, builds the application, and executes automated tests using Maven.',
    technologies: [
      'Java',
      'Spring Boot',
      'Maven',
      'Git',
      'GitHub Actions',
      'CI/CD'
    ],
    category: 'Cloud & DevOps',
    color: '#6366f1',
    highlights: [
      'GitHub Actions workflow',
      'Automated Maven build',
      'Automated testing',
      'Git-based version control',
      'Continuous Integration'
    ],
    github: 'https://github.com/Pathum830/CI-CD-Practical.git',
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

          <h1 id="projects-heading" className="page-hero__title">
            Projects
          </h1>

          <p className="page-hero__subtitle">
            Exploring software development, cloud technologies,
            mobile applications, and DevOps automation through
            practical projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className="projects-list section"
        aria-labelledby="projects-heading"
      >
        <div className="container">

          <div className="projects__grid">

            {projects.map((project) => (
              <article
                key={project.id}
                className={`project-card card ${
                  expandedId === project.id
                    ? 'project-card--expanded'
                    : ''
                }`}
                aria-label={`Project: ${project.title}`}
              >

                {/* Project Image Placeholder */}
                <div
                  className="project-card__image"
                  style={{ '--project-color': project.color }}
                  aria-label={`${project.title} project image placeholder`}
                >
                  <span
                    className="project-card__emoji"
                    aria-hidden="true"
                  >
                    {project.emoji}
                  </span>

                  <span className="project-card__category-badge">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="project-card__body">

                  <h2 className="project-card__title">
                    {project.title}
                  </h2>

                  <p className="project-card__desc">
                    {project.description}
                  </p>

                  {/* Expanded Details */}
                  {expandedId === project.id && (
                    <p
                      id={`project-detail-${project.id}`}
                      className="project-card__long-desc animate-fade-up"
                    >
                      {project.longDesc}
                    </p>
                  )}

                  {/* Project Highlights */}
                  <ul
                    className="project-card__highlights"
                    aria-label="Key features"
                  >
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="project-card__highlight"
                      >
                        <span aria-hidden="true">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div
                    className="project-card__tech"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="project-card__tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Actions */}
                  <div className="project-card__actions">

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-card__btn"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>

                      GitHub
                    </a>

                    {/* Live Demo */}
                    {project.hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-card__btn"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>

                        Live Demo
                      </a>
                    )}

                    {/* More Info */}
                    <button
                      className="btn btn-ghost project-card__btn"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={expandedId === project.id}
                      aria-controls={`project-detail-${project.id}`}
                    >
                      {expandedId === project.id
                        ? 'Less Info'
                        : 'More Info'}
                    </button>

                  </div>
                </div>
              </article>
            ))}

          </div>

          {/* Call to Action */}
          <div className="projects__cta">

            <p>
              Interested in seeing more of my work?
            </p>

            <a
              href="https://github.com/Pathum830"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="View all my projects on GitHub"
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
