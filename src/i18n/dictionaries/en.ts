import type { Dictionary } from "../types";

export const en: Dictionary = {
  common: {
    letsTalk: "Let's Talk",
    toggleMenu: "Toggle menu",
    scroll: "Scroll",
    languageLabel: "Select language",
  },
  site: {
    name: "Hüseyin Onur",
    initials: "HO",
    role: "Senior Full Stack Developer",
    email: "hello@huseyinonur.dev",
    location: "Remote / Worldwide",
    socials: [
      { label: "GitHub", href: "https://github.com/onur-huseyin" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/onur-huseyin/" },
    ],
  },
  nav: [
    { label: "About", href: "#about", num: "01" },
    { label: "Work", href: "#work", num: "02" },
    { label: "Skills", href: "#skills", num: "03" },
    { label: "Experience", href: "#experience", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ],
  hero: {
    badge: "Available for New Opportunities",
    heading: "Senior Full Stack Developer",
    subtitle:
      "Building scalable backend systems, modern web applications, and high-performance APIs.",
    description:
      "I am a Full Stack Developer with over 6 years of experience designing and building scalable software solutions. I specialize in .NET, Node.js, React, and cloud technologies, delivering reliable, high-performance applications with a strong focus on clean architecture and user experience.",
    primaryCta: { label: "View My Work", href: "#work" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
  },
  about: {
    eyebrow: "About Me",
    heading: "Engineering software\nthat scales.",
    paragraphs: [
      "Hello, I'm Hüseyin Onur, a Full Stack Developer with over six years of professional experience building enterprise-grade software solutions.",
      "Throughout my career, I have developed reservation platforms, payment systems, tourism applications, and large-scale business software. I enjoy solving complex technical challenges by designing scalable architectures and writing clean, maintainable code.",
      "My expertise spans backend development with .NET, ASP.NET Core, Node.js, and RESTful APIs, as well as frontend development using React, Next.js, and React Native. I also have hands-on experience with Redis, RabbitMQ, PostgreSQL, SQL Server, Docker, and cloud-based deployments.",
      "I am passionate about building software that is reliable, performant, and easy to maintain.",
    ],
    stats: [
      { value: "6+", label: "Years of Experience" },
      { value: "4", label: "Enterprise Platforms Shipped" },
      { value: "20+", label: "Technologies & Tools" },
      { value: ".NET / Node", label: "Core Backend Stacks" },
    ],
    whatIDoEyebrow: "What I Do",
  },
  whatIDo: [
    {
      title: "Backend Development",
      description:
        "Designing scalable APIs, microservices, background workers, and enterprise backend solutions using modern technologies.",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, fast, and intuitive web applications with React, Next.js, and TypeScript.",
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with React Native while maintaining native-like performance.",
    },
    {
      title: "Database Engineering",
      description:
        "Designing efficient database architectures, optimizing queries, and managing high-volume transactional systems.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying and maintaining applications using Docker, CI/CD pipelines, and cloud infrastructure.",
    },
  ],
  experience: {
    eyebrow: "Experience",
    role: "Senior Full Stack Developer",
    summary:
      "Developed and maintained enterprise-level reservation, tourism, and payment platforms serving thousands of users.",
    responsibilities: [
      "Designed scalable REST APIs",
      "Built microservice architectures",
      "Developed background worker services",
      "Integrated third-party APIs",
      "Optimized SQL queries and database performance",
      "Implemented Redis caching strategies",
      "Built API Gateway services",
      "Managed asynchronous messaging with RabbitMQ",
      "Designed scalable database architectures",
      "Improved application performance and reliability",
    ],
  },
  projectsIntro: {
    eyebrow: "Featured Projects",
    heading: "Selected Work &\nLive Products",
    description:
      "A selection of live products and platforms I've designed and built — from travel-tech booking systems to fintech and proptech platforms. Click through to explore each one.",
  },
  projects: [
    {
      title: "Turasistan",
      tag: "Travel & Tourism",
      href: "https://turasistan.net/",
      description:
        "A B2B/B2C travel platform for Hajj, Umrah, and domestic & international tour bookings — real-time availability, campaign-based pricing, and multi-channel payment integrations for travel agencies.",
      tech: ["Next.js", "React", "REST API", "PostgreSQL"],
    },
    {
      title: "Turasistan API",
      tag: "B2B Integration",
      href: "https://docs.turasistan.com/",
      description:
        "Public REST API powering the Turasistan platform for partner agencies — tour catalog, reservations, and accounting endpoints secured with API key & JWT authentication.",
      tech: [".NET Core", "REST API", "Microservices", "Docker"],
    },
    {
      title: "Fizbot",
      tag: "Real Estate CRM",
      href: "https://fizbot.net/",
      description:
        "A sales management platform built for real estate agencies — lead pipelines, automated lead enrichment and valuation, and multi-channel notifications to boost agent performance.",
      tech: ["React", "Node.js", "REST API", "MongoDB"],
    },
    {
      title: "Finbosoft",
      tag: "FinTech",
      href: "https://finbosoft.com/",
      description:
        "An investment analysis platform that scores and values publicly traded companies (F-Score, M-Score, Z-Score and more), helping investors make faster, data-driven decisions.",
      tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    },
    {
      title: "Ruuf",
      tag: "PropTech",
      href: "https://www.ruuf.com.tr/",
      description:
        "A rent-to-own home ownership platform — users move into their dream home immediately and build equity over time with zero down payment, paying like they would rent.",
      tech: ["React", ".NET Core", "PostgreSQL", "Docker"],
    },
  ],
  skills: {
    eyebrow: "Technical Skills",
    heading: "Tools I use to\nship reliable software",
    categories: [
      { title: "Backend", items: [".NET", "ASP.NET Core", "Node.js", "Express.js", "REST APIs", "Microservices"] },
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
      { title: "Databases", items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"] },
      { title: "Messaging & Search", items: ["RabbitMQ", "Elasticsearch"] },
      { title: "DevOps", items: ["Docker", "Git", "CI/CD"] },
      { title: "Tools", items: ["Visual Studio", "VS Code", "Postman", "Swagger", "GitHub"] },
    ],
  },
  whyWorkWithMe: {
    eyebrow: "Why Work With Me?",
    heading: "What sets me\napart",
    items: [
      "6+ years of professional experience",
      "Strong background in enterprise software development",
      "Clean, maintainable, and scalable code",
      "Performance-oriented mindset",
      "Fast learner with excellent problem-solving skills",
      "Effective communicator and collaborative team player",
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's Build Something\nGreat Together",
    description:
      "I'm always interested in challenging projects, innovative ideas, and exciting opportunities. Whether you're looking for a Full Stack Developer or a Backend Engineer, I'd love to hear from you.",
    closing: "Let's connect and create something impactful.",
  },
  footer: {
    builtWith: "",
    rightsTemplate: "{year} {name}. All rights reserved.",
  },
};
