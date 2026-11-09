import React, { useState } from 'react'
import './Contact.css'

/**
 * Contact Page
 * HCI Principle: Error Prevention — frontend validation with real-time feedback.
 * HCI Principle: Visibility of System Status — success/error messages.
 * HCI Principle: Help Users Recognize, Diagnose, and Recover from Errors.
 * Accessibility: ARIA live regions, associated labels, error descriptions.
 */

// Validation helpers
const validate = (name, value) => {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required.'
      if (value.trim().length < 2) return 'Name must be at least 2 characters.'
      return ''
    case 'email':
      if (!value.trim()) return 'Email is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.'
      return ''
    case 'message':
      if (!value.trim()) return 'Message is required.'
      if (value.trim().length < 20) return 'Message must be at least 20 characters.'
      return ''
    default:
      return ''
  }
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Handle field changes with live validation
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Real-time validation after field is touched
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
    }
  }

  // Mark field as touched on blur and validate
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      message: validate('message', formData.message),
    }
    setErrors(newErrors)
    setTouched({ name: true, email: true, message: true })

    // Check if form is valid
    const hasErrors = Object.values(newErrors).some(Boolean)
    if (hasErrors) return

    // Simulate form submission
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
    }, 1500)
  }

  const handleReset = () => {
    setSubmitted(false)
    setErrors({})
  }

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="page-hero__bg" aria-hidden="true"></div>
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 id="contact-heading" className="page-hero__title">Contact Me</h1>
          <p className="page-hero__subtitle">
            Have an opportunity or project? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-section section" aria-label="Contact information and form">
        <div className="container">
          <div className="contact__grid">
            {/* Contact Info */}
            <aside className="contact-info" aria-label="Contact details">
              <h2 className="contact-info__title">Let's Connect</h2>
              <p className="contact-info__desc">
                I'm currently looking for internship opportunities. Whether you have a
                role, a project, or just want to say hi — my inbox is always open.
              </p>

              <ul className="contact-info__list">
                <li className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">✉️</div>
                  <div>
                    <span className="contact-info__label">Email</span>
                    <a
                      href="mailto:pathum@example.com"
                      className="contact-info__value contact-info__value--link"
                      aria-label="Send email to pathum@example.com"
                    >
                      pathumsiriwardhana86@gmail.com
                    </a>
                  </div>
                </li>
                <li className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">📱</div>
                  <div>
                    <span className="contact-info__label">Phone</span>
                    <a
                      href="tel:+94751265653"
                      className="contact-info__value contact-info__value--link"
                      aria-label="Call +94 751265653"
                    >
                      +94 75 126 5653
                    </a>
                  </div>
                </li>
                <li className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">💼</div>
                  <div>
                    <span className="contact-info__label">LinkedIn</span>
                    <a
                      href="https://linkedin.com/in/pathum-siriwardhana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info__value contact-info__value--link"
                      aria-label="Visit LinkedIn profile (opens in new tab)"
                    >
                      linkedin.com/in/pathum-siriwardhana
                    </a>
                  </div>
                </li>
                <li className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">🐙</div>
                  <div>
                    <span className="contact-info__label">GitHub</span>
                    <a
                      href="https://github.com/pathum830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info__value contact-info__value--link"
                      aria-label="Visit GitHub profile (opens in new tab)"
                    >
                      github.com/pathum830
                    </a>
                  </div>
                </li>
              </ul>

              {/* Availability note */}
              <div className="contact-info__availability" aria-label="Availability status">
                <span className="contact-info__avail-dot" aria-hidden="true"></span>
                <div>
                  <strong>Available for Internship</strong>
                  <p>Typically responds within 24 hours</p>
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                /* Success State */
                <div
                  className="contact-success"
                  role="alert"
                  aria-live="polite"
                  aria-label="Message sent successfully"
                >
                  <div className="contact-success__icon" aria-hidden="true">🎉</div>
                  <h3 className="contact-success__title">Message Sent!</h3>
                  <p className="contact-success__msg">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button className="btn btn-primary" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form */
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h2 className="contact-form__title">Send a Message</h2>

                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span aria-label="required" className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name && touched.name ? 'form-input--error' : ''} ${!errors.name && touched.name ? 'form-input--success' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. John Smith"
                      aria-required="true"
                      aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                      aria-describedby={errors.name && touched.name ? 'name-error' : 'name-hint'}
                    />
                    <span id="name-hint" className="form-hint" hidden>
                      Enter your full name
                    </span>
                    {errors.name && touched.name && (
                      <span
                        id="name-error"
                        className="form-error"
                        role="alert"
                        aria-live="polite"
                      >
                        ⚠ {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span aria-label="required" className="form-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email && touched.email ? 'form-input--error' : ''} ${!errors.email && touched.email ? 'form-input--success' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. john@example.com"
                      aria-required="true"
                      aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    />
                    {errors.email && touched.email && (
                      <span
                        id="email-error"
                        className="form-error"
                        role="alert"
                        aria-live="polite"
                      >
                        ⚠ {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span aria-label="required" className="form-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-input form-textarea ${errors.message && touched.message ? 'form-input--error' : ''} ${!errors.message && touched.message ? 'form-input--success' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about an opportunity, project, or just say hello..."
                      rows="5"
                      aria-required="true"
                      aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                      aria-describedby={errors.message && touched.message ? 'message-error' : 'message-count'}
                    ></textarea>
                    <span id="message-count" className="form-hint">
                      {formData.message.length} characters
                      {formData.message.length > 0 && formData.message.length < 20 && (
                        <span style={{ color: 'var(--warning)' }}>
                          {' '}(need {20 - formData.message.length} more)
                        </span>
                      )}
                    </span>
                    {errors.message && touched.message && (
                      <span
                        id="message-error"
                        className="form-error"
                        role="alert"
                        aria-live="polite"
                      >
                        ⚠ {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary contact-form__submit"
                    disabled={submitting}
                    aria-label={submitting ? 'Sending message, please wait' : 'Send message'}
                  >
                    {submitting ? (
                      <>
                        <span className="contact-form__spinner" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="contact-form__note">
                    * Required fields. No data is stored — this is a frontend-only demo.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
