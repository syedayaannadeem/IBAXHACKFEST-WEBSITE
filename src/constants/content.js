// ============================================================
// CONTENT MANAGEMENT — Edit all website text here
// ============================================================

export const NAV = {
  brand: 'Midnight Sons',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Project', href: '#project' },
    { label: 'Experience', href: '#experience' },
    { label: 'Team', href: '#team' },
    { label: 'Demo', href: '#demo' },
  ],
}

export const HERO = {
  eyebrow: 'Hackfest 2026 — IBA',
  title: 'Where Intelligence',
  titleAccent: 'Writes the Story',
  representing: 'Representing IOBM',
  teamBadge: 'Midnight Sons',
  description:
    'Building an intelligent multi-agent storytelling system powered by generative AI reasoning and memory-driven character interactions — where every narrative evolves through autonomous collaboration.',
  ctaPrimary: 'Explore the Narrative System',
  ctaSecondary: 'View Demo on GitHub',
  githubUrl: 'https://github.com',
  stats: [
    { value: '25+', label: 'Turn Simulation' },
    { value: '6', label: 'Agent Types' },
    { value: '4hr', label: 'Build Window' },
    { value: '1st', label: 'Hackathon' },
  ],
}

export const ABOUT = {
  eyebrow: 'The Event',
  title: 'Hackfest 2026',
  titleAccent: 'at IBA Karachi',
  paragraphs: [
    'Hackfest 2026 is one of Pakistan\'s most competitive AI-focused hackathons, hosted at the Institute of Business Administration (IBA), Karachi. Teams from across the country converge to push the boundaries of what\'s possible with modern AI systems — in just a few hours.',
    'Representing IOBM (Institute of Business Management), Team Midnight Sons brought a vision rooted in multi-agent AI systems, large language model orchestration, and generative narrative design. Our mission: build something that feels genuinely intelligent.',
    'The challenge demanded not just technical execution, but creative systems thinking — architecting agents that reason, remember, and respond like characters with real depth.',
  ],
  cards: [
    {
      icon: 'Zap',
      title: 'Fast-Paced',
      description: 'A 4-hour intensive build window demands precision architecture and rapid execution.',
    },
    {
      icon: 'Brain',
      title: 'AI-Focused',
      description: 'Advanced AI systems, LLM integration, and intelligent agent design at the frontier.',
    },
    {
      icon: 'Trophy',
      title: 'Competitive',
      description: 'Teams from Pakistan\'s top institutions competing on innovation and technical depth.',
    },
    {
      icon: 'Users',
      title: 'Collaborative',
      description: 'Cross-disciplinary teams — engineers, researchers, and designers working as one.',
    },
  ],
}

export const PROJECT = {
  eyebrow: 'The System',
  title: 'Multi-Agent',
  titleAccent: 'Narrative Engine',
  description:
    'A generative AI architecture where autonomous agents collaborate in real-time to produce coherent, evolving story worlds. Each agent holds independent memory, personality, and reasoning — orchestrated by a central Director.',
  features: [
    {
      icon: 'Crown',
      title: 'Director Agent',
      description: 'The orchestration layer that controls narrative flow, pacing, and story arc continuity across all turns.',
      tag: 'Core System',
    },
    {
      icon: 'Fingerprint',
      title: 'Character Personas',
      description: 'Independent AI characters with unique personalities, backstories, and behavioral constraints that evolve dynamically.',
      tag: 'Character Engine',
    },
    {
      icon: 'Database',
      title: 'Memory Buffers',
      description: 'Persistent context windows that allow agents to remember past interactions, enabling coherent long-form narratives.',
      tag: 'Memory Layer',
    },
    {
      icon: 'Cpu',
      title: 'Action Engine',
      description: 'Structured action parsing system converting LLM output into discrete narrative events and state changes.',
      tag: 'Execution',
    },
    {
      icon: 'GitBranch',
      title: 'Multi-Turn Reasoning',
      description: 'Supports up to 25+ consecutive turns with maintained context and narrative coherence across extended sessions.',
      tag: 'Reasoning',
    },
    {
      icon: 'MessageSquare',
      title: 'Non-Verbal Interactions',
      description: 'Characters express emotion, intent, and action beyond dialogue — body language, internal monologue, environmental cues.',
      tag: 'Expression',
    },
    {
      icon: 'Sparkles',
      title: 'Gemini Integration',
      description: 'Powered by Google\'s Gemini model family for state-of-the-art language understanding and generation quality.',
      tag: 'AI Model',
    },
    {
      icon: 'Activity',
      title: '25-Turn Simulation',
      description: 'Validated story simulations running 25+ turns with emergent narrative patterns and character development arcs.',
      tag: 'Performance',
    },
  ],
}

export const EXPERIENCE = {
  eyebrow: 'The Journey',
  title: 'Four Hours.',
  titleAccent: 'One System.',
  chapters: [
    {
      time: '00:00',
      title: 'The Architecture Decision',
      content:
        'The room was alive with the hum of energy. We had four hours, a blank canvas, and a shared obsession with multi-agent systems. The first thirty minutes were pure architecture — whiteboarding agent relationships, memory structures, and the Director-Character contract that would hold the whole system together.',
    },
    {
      time: '01:30',
      title: 'Building the Backbone',
      content:
        'With the Director Agent scaffold in place, we split — one member handling the character persona engine, another implementing memory buffers, and a third designing the Gemini prompt architecture. The code was fast, intentional, and surprisingly clean for a hackathon.',
    },
    {
      time: '02:45',
      title: 'The Debug Spiral',
      content:
        'Context windows disagreed. Characters "forgot" their backstories mid-scene. The Director sent conflicting instructions. This was the real hackathon — not building, but untangling. Each fix revealed a deeper architectural truth about how memory and identity need to be scoped separately.',
    },
    {
      time: '03:30',
      title: 'First Living Story',
      content:
        'At 3:30, something clicked. A character remembered a grievance from turn seven. The Director smoothly redirected the narrative arc. Non-verbal actions painted the scene. We sat back and watched our system generate a genuinely compelling story — not a script, but an emergence.',
    },
  ],
}

export const TEAM = {
  eyebrow: 'The Builders',
  title: 'Midnight Sons',
  description: 'Three engineers. One shared vision. Built with precision at Hackfest 2026.',
  members: [
    {
      name: 'Talha Ahmad',
      role: 'AI Engineer',
      contribution:
        'Designed the Director Agent orchestration layer and multi-turn reasoning pipeline. Led the overall system architecture and Gemini integration strategy.',
      initials: 'TA',
      gradient: 'from-violet-600 to-indigo-600',
      linkedin: 'https://www.linkedin.com/in/talha-ahmad9?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      github: 'https://github.com/Talhaahmad9',
    },
    {
      name: 'Moiz Ali Siddiqui',
      role: 'Team Leader/AI Systems Architect & LLM Engineer',
      contribution:
        'Engineered the Character Persona system and Memory Buffer architecture. Crafted the prompt engineering framework that gives characters authentic personality.',
      initials: 'MAS',
      gradient: 'from-pink-500 to-violet-600',
      linkedin: 'https://www.linkedin.com/in/moizalisiddiqui?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      github: 'https://github.com/moizalisiddiqui',
    },
    {
      name: 'Syed Ayaan Nadeem',
      role: 'AI Optimizer',
      contribution:
        'Built the Action Engine and simulation output layer. Developed the demonstration interface and validation suite for the 25-turn story simulations.',
      initials: 'SAN',
      gradient: 'from-indigo-600 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/syed-ayaan-nadeem-a57195359?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      github: 'https://github.com/syedayaannadeem',
    },
  ],
}

export const DEMO = {
  eyebrow: 'See It Live',
  title: 'Project',
  titleAccent: 'Demonstration',
  description:
    'The full system implementation, architecture documentation, and simulation outputs are available in our GitHub repository. Explore the codebase, run the 25-turn simulations, and witness emergent AI storytelling firsthand.',
  githubUrl: 'https://github.com',
  btnLabel: 'View Demo on GitHub',
  features: [
    'Full source code & architecture docs',
    'Live 25-turn simulation examples',
    'Agent prompt templates included',
    'Gemini API integration guide',
  ],
}

export const FOOTER = {
  brand: 'Midnight Sons',
  tagline: 'Built with passion for AI innovation.',
  year: '2026',
  event: 'Hackfest 2026 — IBA Karachi',
  representing: 'Representing IOBM',
}
