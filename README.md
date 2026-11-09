# Pathum Siriwardhana — Personal Portfolio

A modern, responsive React.js portfolio website built as a Human Computer Interaction (HCI) university assignment.

## Live Demo

Deploy to Netlify (see instructions below).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | React.js 18 |
| Routing | React Router v6 |
| Styling | CSS Modules (plain CSS with CSS custom properties) |
| Build Tool | Vite |
| Deployment | Netlify |

---

## HCI Principles Demonstrated

### 1. User-Centered Design
- Target users (recruiters, internship providers) guide every layout decision
- Quick-scan layout: name, skills, projects visible within seconds

### 2. Nielsen's Usability Heuristics
| Heuristic | Implementation |
|-----------|---------------|
| Visibility of System Status | Scroll-triggered navbar shadow, hover effects, form loading spinner, success message |
| Consistency and Standards | Unified color palette, button styles, and navigation on all pages |
| Recognition Rather Than Recall | Active nav highlighting, labeled skill tags, clear CTA buttons |
| Error Prevention | Real-time form validation, descriptive error messages |
| Aesthetic and Minimalist Design | Clean grid layout, generous whitespace, focused content |

### 3. Accessibility
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- ARIA labels, `aria-required`, `aria-invalid`, `aria-live` for form feedback
- Skip-to-content link for keyboard users
- High contrast color ratios (WCAG AA compliant)
- All interactive elements keyboard-navigable with visible focus styles
- Alt text on all images (including placeholders)
- `prefers-reduced-motion` friendly animations

### 4. Feedback Mechanisms
- Hover animations on cards and buttons (translateY + shadow)
- Floating profile badges animate independently
- Form validation shows inline error messages in real time
- Form submission shows spinner then success confirmation
- Navbar scrolled state adds shadow cue

---

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Responsive navbar with hamburger
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx       # Hero, stats, highlights
│   │   ├── Home.css
│   │   ├── About.jsx      # Bio, education, skills
│   │   ├── About.css
│   │   ├── Projects.jsx   # 3 project cards
│   │   ├── Projects.css
│   │   ├── Contact.jsx    # Contact info + validated form
│   │   └── Contact.css
│   ├── styles/
│   │   └── global.css     # Design system, tokens, utilities
│   ├── App.jsx            # Router setup
│   └── main.jsx           # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Running Locally

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- npm (comes with Node.js)

### Steps

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Deploying to Netlify

### Method 1 — Drag and Drop (Easiest)

1. Run `npm run build` to generate the `dist/` folder
2. Go to [app.netlify.com](https://app.netlify.com)
3. Sign up or log in (free account)
4. Drag the `dist/` folder into the Netlify dashboard
5. Your site is live instantly!

### Method 2 — Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir dist
```

### Method 3 — GitHub Integration (Recommended for Updates)

1. Push this project to a GitHub repository
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site" → "Import an existing project"**
4. Connect your GitHub account and select the repository
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

Netlify will automatically redeploy whenever you push changes to GitHub.

### Important: Fix React Router on Netlify

Add a `_redirects` file inside the `public/` folder:

```
public/_redirects
```

With this content:
```
/*    /index.html   200
```

This tells Netlify to serve `index.html` for all routes, which is required for React Router's client-side routing to work correctly.

---

## Customization Checklist

- [ ] Replace profile photo placeholder with your actual photo
- [ ] Update email, phone, LinkedIn, and GitHub links throughout
- [ ] Add real GitHub repository URLs to project cards
- [ ] Add live demo links if your projects are deployed
- [ ] Update skill proficiency percentages
- [ ] Add your real project screenshots (replace emoji placeholders)
- [ ] Update the NDT program description with your actual courses/GPA

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#2563EB` | Buttons, links, active states |
| `--secondary` | `#1E293B` | Dark backgrounds (navbar, footer) |
| `--accent` | `#38BDF8` | Gradients, highlights |

---

Built with React · Vite · CSS Custom Properties
HCI Assignment — Institute of Technology, University of Moratuwa
