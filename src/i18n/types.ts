export type Locale = "en" | "tr";

export type LocaleMeta = { code: Locale; label: string; short: string };

export type NavItem = { label: string; href: string; num: string };
export type SocialLink = { label: string; href: string };
export type Stat = { value: string; label: string };
export type ServiceItem = { title: string; description: string };
export type SkillCategory = { title: string; items: string[] };

export type ProjectItem = {
  title: string;
  tag: string;
  href: string;
  description: string;
  tech: string[];
};

export type Dictionary = {
  common: {
    letsTalk: string;
    toggleMenu: string;
    scroll: string;
    languageLabel: string;
  };
  site: {
    name: string;
    initials: string;
    role: string;
    email: string;
    location: string;
    socials: SocialLink[];
  };
  nav: NavItem[];
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: Stat[];
    whatIDoEyebrow: string;
  };
  whatIDo: ServiceItem[];
  experience: {
    eyebrow: string;
    role: string;
    summary: string;
    responsibilities: string[];
  };
  projectsIntro: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  projects: ProjectItem[];
  skills: {
    eyebrow: string;
    heading: string;
    categories: SkillCategory[];
  };
  whyWorkWithMe: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  footer: {
    builtWith: string;
    rightsTemplate: string;
  };
};
