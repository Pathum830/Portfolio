import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

/**
 * App Component
 * Root component handling routing and layout structure.
 * React Router v6 is used for client-side navigation.
 */
function App() {
  return (
    <div className="app">
      {/* Persistent navigation across all pages */}
      <Navbar />

      {/* Page content rendered based on current route */}
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
