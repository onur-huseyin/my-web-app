import type { Dictionary } from "../types";

export const en: Dictionary = {
  common: {
    letsTalk: "mail",
    toggleMenu: "Toggle menu",
    scroll: "Scroll",
    languageLabel: "Select language",
  },
  site: {
    name: "Hüseyin Onur",
    initials: "HO",
    role: "fullstack · backend first",
    email: "onur.huseyin05@gmail.com",
    phone: "+905433717431",
    location: "remote",
    socials: [
      { label: "GitHub", href: "https://github.com/onur-huseyin" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/onur-huseyin/" },
    ],
  },
  nav: [
    { label: "who", href: "#about", num: "01" },
    { label: "work", href: "#work", num: "02" },
    { label: "stack", href: "#skills", num: "03" },
    { label: "log", href: "#experience", num: "04" },
    { label: "mail", href: "#contact", num: "05" },
  ],
  hero: {
    badge: "status: available",
    heading: "hüseyin onur",
    subtitle: "fullstack developer. backend first.",
    description:
      "apis, queues, cache, and dashboards. .net, node, java, python, react. no pitch deck — code that is already in production.",
    primaryCta: { label: "work", href: "#work" },
    secondaryCta: { label: "github", href: "https://github.com/onur-huseyin" },
  },
  about: {
    eyebrow: "// who",
    heading: "i ship the product.",
    paragraphs: [
      "6 years fullstack. most of the day is apis, workers, and the database.",
      "i also write the ui in react / next. live products in travel, real estate, and finance.",
    ],
    stats: [
      { value: "6+", label: "years" },
      { value: "5", label: "live products" },
      { value: ".net / node", label: "backend" },
      { value: "react / next", label: "frontend" },
    ],
    whatIDoEyebrow: "// what",
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
    eyebrow: "// log",
    role: "what i actually did",
    summary: "booking, payments, and tourism systems. thousands of users, real traffic.",
    responsibilities: [
      "rest apis and microservices",
      "background workers",
      "third-party api integrations",
      "sql + redis",
      "queues with rabbitmq",
      "deploys with docker",
    ],
  },
  projectsIntro: {
    eyebrow: "// work",
    heading: "stuff in production",
    description: "click through. these are live, not case studies.",
  },
  projects: [
    {
      title: "Turasistan",
      tag: "travel",
      href: "https://turasistan.net/",
      description: "hajj, umrah, and tour booking. agency panel, pricing, payments.",
      tech: ["Next.js", "React", "REST API", "PostgreSQL"],
    },
    {
      title: "Turasistan API",
      tag: "api",
      href: "https://docs.turasistan.com/",
      description: "public rest api for partner agencies. api key + jwt.",
      tech: [".NET Core", "REST API", "Microservices", "Docker"],
    },
    {
      title: "Fizbot",
      tag: "crm",
      href: "https://fizbot.net/",
      description: "sales panel for real estate offices. leads, valuation, notifications.",
      tech: ["React", "Node.js", "REST API", "MongoDB"],
    },
    {
      title: "Finbosoft",
      tag: "fintech",
      href: "https://finbosoft.com/",
      description: "public-company scoring. f / m / z scores.",
      tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    },
  ],
  skills: {
    eyebrow: "// stack",
    heading: "what i use day to day",
    categories: [
      { title: "backend", items: [".net", "asp.net", "node", "express", "rest", "microservices"] },
      { title: "frontend", items: ["react", "next.js", "typescript", "tailwind"] },
      { title: "data", items: ["postgres", "sql server", "mongo", "redis"] },
      { title: "infra", items: ["rabbitmq", "elasticsearch", "docker", "git"] },
    ],
  },
  whyWorkWithMe: {
    eyebrow: "// note",
    heading: "short note",
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
    eyebrow: "// ping",
    heading: "say hi.",
    description: "a job, a project, or just hello. email is enough.",
  },
  footer: {
    builtWith: "Docker + Kubernetes + CI/CD",
    rightsTemplate: "{year} {name}",
  },
};
