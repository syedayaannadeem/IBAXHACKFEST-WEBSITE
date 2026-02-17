# Hackfest 2026 — Midnight Sons

A cinematic, premium React showcase website for Team Midnight Sons at Hackfest 2026 (IBA Karachi), representing IOBM.

## Project Overview

This is a static frontend portfolio website presenting the **Multi-Agent Narrative System** — a generative AI storytelling architecture with:

- Director Agent orchestration
- Character Personas with independent memory
- Multi-Turn Reasoning (25+ turns)
- Gemini Model Integration
- Non-Verbal Interaction Engine

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Framework & build tool |
| TailwindCSS | Utility styling |
| Framer Motion | All animations |
| Lucide React | Icons |
| Google Fonts | Sora, DM Sans, JetBrains Mono |

## Setup & Installation

```bash
# Clone the repo
git clone https://github.com/your-repo/hackfest-2026.git
cd hackfest-2026

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build first
npm run build

# Drag the /dist folder into Netlify's deploy panel
# Or use the Netlify CLI
```

## Customizing Content

All website text is stored in a single file:

```
src/constants/content.js
```

### Change Team Members

```js
// In src/constants/content.js
export const TEAM = {
  members: [
    {
      name: 'Your Name',
      role: 'Your Role',
      contribution: 'What you built.',
      initials: 'YN',
      gradient: 'from-violet-600 to-indigo-600',
      linkedin: 'https://linkedin.com/in/...',
      github: 'https://github.com/...',
    },
    // ... more members
  ]
}
```

### Change GitHub Demo Link

```js
export const DEMO = {
  githubUrl: 'https://github.com/your-org/your-repo',
}
```

### Change Event Name / Team Info

```js
export const HERO = {
  eyebrow: 'Hackfest 2026 — IBA',
  teamBadge: 'Midnight Sons',
  representing: 'Representing IOBM',
}
```

## Project Structure

```
src/
  components/       # All UI components
    Navbar.jsx
    Hero.jsx
    AboutEvent.jsx
    ProjectSummary.jsx
    Experience.jsx
    Team.jsx
    DemoSection.jsx
    Footer.jsx
    BackgroundEffects.jsx
    ScrollProgress.jsx
    CursorGlow.jsx
    SectionWrapper.jsx
  constants/
    content.js      # All text content
  animations/
    motionVariants.js  # Framer Motion configs
  utils/
    cn.js           # Class merge utility
  App.jsx           # Root component
  main.jsx          # Entry point
  index.css         # Global styles
```

## Features

- Cinematic page loader with progress animation
- Custom AI cursor glow effect (desktop only)
- Scroll progress indicator
- Animated particle background with connection lines
- Floating gradient blob animations
- Glassmorphism cards with 3D tilt on hover
- Sequential stagger animations on scroll
- Active section navbar highlighting
- Responsive across all breakpoints
- Animated architecture diagram
- Smooth scroll navigation
- Mobile hamburger menu

---

**Midnight Sons © 2026 — Built with passion for AI innovation.**
