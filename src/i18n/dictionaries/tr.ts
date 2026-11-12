import type { Dictionary } from "../types";

export const tr: Dictionary = {
  common: {
    letsTalk: "mail",
    toggleMenu: "Menüyü aç/kapat",
    scroll: "Kaydır",
    languageLabel: "Dil seçin",
  },
  site: {
    name: "Hüseyin Onur",
    initials: "HO",
    role: "fullstack · backend ağırlıklı",
    email: "onur.huseyin05@gmail.com",
    phone: "+905433717431",
    location: "remote",
    socials: [
      { label: "GitHub", href: "https://github.com/onur-huseyin" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/onur-huseyin/" },
    ],
  },
  nav: [
    { label: "kim", href: "#about", num: "01" },
    { label: "iş", href: "#work", num: "02" },
    { label: "stack", href: "#skills", num: "03" },
    { label: "log", href: "#experience", num: "04" },
    { label: "mail", href: "#contact", num: "05" },
  ],
  hero: {
    badge: "status: müsait",
    heading: "hüseyin onur",
    subtitle: "fullstack geliştirici. asıl işim backend.",
    description:
      "api, kuyruk, cache ve panel yazıyorum. .net, node, java, python, react. süs yok — canlıda duran kod var.",
    primaryCta: { label: "işler", href: "#work" },
    secondaryCta: { label: "github", href: "https://github.com/onur-huseyin" },
  },
  about: {
    eyebrow: "// kim",
    heading: "ürünü ayağa kaldırırım.",
    paragraphs: [
      "6 yıldır fullstack. günün çoğu api, worker ve veritabanında geçiyor.",
      "react / next ile arayüz de yazıyorum. turizm, emlak ve finans tarafında canlıda duran işler var.",
    ],
    stats: [
      { value: "6+", label: "yıl" },
      { value: "15+", label: "canlı ürün" },
      { value: ".net / node", label: "backend" },
      { value: "react / next", label: "frontend" },
    ],
    whatIDoEyebrow: "// ne",
  },
  whatIDo: [
    {
      title: "Backend Geliştirme",
      description:
        "Modern teknolojiler kullanarak ölçeklenebilir API'ler, mikroservisler, arka plan servisleri ve kurumsal backend çözümleri tasarlıyorum.",
    },
    {
      title: "Frontend Geliştirme",
      description:
        "React, Next.js ve TypeScript ile duyarlı, hızlı ve kullanıcı dostu web uygulamaları geliştiriyorum.",
    },
    {
      title: "Mobil Geliştirme",
      description:
        "React Native ile yerel uygulama performansını koruyarak platformlar arası mobil uygulamalar geliştiriyorum.",
    },
    {
      title: "Veritabanı Mühendisliği",
      description:
        "Verimli veritabanı mimarileri tasarlıyor, sorguları optimize ediyor ve yüksek hacimli işlem sistemlerini yönetiyorum.",
    },
    {
      title: "Bulut & DevOps",
      description:
        "Docker, CI/CD süreçleri ve bulut altyapısı kullanarak uygulamaları dağıtıyor ve yönetiyorum.",
    },
  ],
  experience: {
    eyebrow: "// log",
    role: "ne yaptım",
    summary: "rezervasyon, ödeme ve turizm sistemleri. binlerce kullanıcı, gerçek trafik.",
    responsibilities: [
      "rest api ve mikroservis",
      "background worker",
      "üçüncü parti api entegrasyonu",
      "sql + redis",
      "rabbitmq ile kuyruk",
      "docker ile deploy",
    ],
  },
  projectsIntro: {
    eyebrow: "// iş",
    heading: "canlıda duranlar",
    description: "tıkladığın yer gerçek ürün. demo değil.",
  },
  projects: [
    {
      title: "Turasistan",
      tag: "travel",
      href: "https://turasistan.net/",
      description: "hac, umre ve tur rezervasyonu. acente paneli, fiyat ve ödeme.",
      tech: ["Next.js", "React", "REST API", "PostgreSQL"],
    },
    {
      title: "Turasistan API",
      tag: "api",
      href: "https://docs.turasistan.com/",
      description: "partner acenteler için public rest api. api key + jwt.",
      tech: [".NET Core", "REST API", "Microservices", "Docker"],
    },
    {
      title: "Fizbot",
      tag: "crm",
      href: "https://fizbot.net/",
      description: "emlak ofisi satış paneli. lead, değerleme, bildirim.",
      tech: ["React", "Node.js", "REST API", "MongoDB"],
    },
    {
      title: "Finbosoft",
      tag: "fintech",
      href: "https://finbosoft.com/",
      description: "halka açık şirket skorlama. f / m / z skoru.",
      tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    },
  ],
  skills: {
    eyebrow: "// stack",
    heading: "günlük kullandıklarım",
    categories: [
      { title: "backend", items: [".net", "asp.net", "node", "express", "rest", "microservices"] },
      { title: "frontend", items: ["react", "next.js", "typescript", "tailwind"] },
      { title: "data", items: ["postgres", "sql server", "mongo", "redis"] },
      { title: "infra", items: ["rabbitmq", "elasticsearch", "docker", "git"] },
    ],
  },
  whyWorkWithMe: {
    eyebrow: "// not",
    heading: "kısa not",
    items: [
      "6+ yıllık profesyonel tecrübe",
      "Kurumsal yazılım geliştirmede güçlü altyapı",
      "Temiz, sürdürülebilir ve ölçeklenebilir kod",
      "Performans odaklı bir yaklaşım",
      "Hızlı öğrenen, güçlü problem çözme becerisi",
      "Etkili iletişim kuran, işbirliğine açık takım oyuncusu",
    ],
  },
  contact: {
    eyebrow: "// ping",
    heading: "yaz, konuşalım.",
    description: "iş, proje ya da sadece merhaba. mail.",
  },
  footer: {
    builtWith: "Docker + Kubernetes + CI/CD",
    rightsTemplate: "{year} {name}",
  },
};
