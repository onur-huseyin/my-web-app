import type { Dictionary } from "../types";

export const tr: Dictionary = {
  common: {
    letsTalk: "Hadi Konuşalım",
    toggleMenu: "Menüyü aç/kapat",
    scroll: "Kaydır",
    languageLabel: "Dil seçin",
  },
  site: {
    name: "Hüseyin Onur",
    initials: "HO",
    role: "Kıdemli Full Stack Geliştirici",
    email: "onur.huseyin05@gmail.com",
    location: "Uzaktan / Dünya Çapında",
    socials: [
      { label: "GitHub", href: "https://github.com/onur-huseyin" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/onur-huseyin/" },
    ],
  },
  nav: [
    { label: "Hakkımda", href: "#about", num: "01" },
    { label: "Projeler", href: "#work", num: "02" },
    { label: "Yetenekler", href: "#skills", num: "03" },
    { label: "Deneyim", href: "#experience", num: "04" },
    { label: "İletişim", href: "#contact", num: "05" },
  ],
  hero: {
    badge: "Yeni Fırsatlara Açığım",
    heading: "Kıdemli Full Stack Geliştirici",
    subtitle:
      "Ölçeklenebilir arka uç sistemleri, modern web uygulamaları ve yüksek performanslı API'ler geliştiriyorum.",
    description:
      "6 yılı aşan tecrübemle ölçeklenebilir yazılım çözümleri tasarlayan ve geliştiren bir Full Stack Developer'ım. .NET, Node.js, React ve bulut teknolojilerinde uzmanlaşarak; temiz mimariye ve kullanıcı deneyimine odaklanan, güvenilir ve yüksek performanslı uygulamalar sunuyorum.",
    primaryCta: { label: "Projelerimi Gör", href: "#work" },
    secondaryCta: { label: "İletişime Geç", href: "#contact" },
  },
  about: {
    eyebrow: "Hakkımda",
    heading: "Ölçeklenebilir yazılımlar\ngeliştiriyorum.",
    paragraphs: [
      "Merhaba, ben Hüseyin Onur — kurumsal düzeyde yazılım çözümleri geliştirmede altı yılı aşan profesyonel deneyime sahip bir Full Stack Developer'ım.",
      "Kariyerim boyunca rezervasyon platformları, ödeme sistemleri, turizm uygulamaları ve büyük ölçekli iş yazılımları geliştirdim. Ölçeklenebilir mimariler tasarlayıp temiz, sürdürülebilir kod yazarak karmaşık teknik sorunları çözmekten keyif alıyorum.",
      "Uzmanlığım; .NET, ASP.NET Core, Node.js ve RESTful API'lerle backend geliştirmenin yanı sıra React, Next.js ve React Native ile frontend geliştirmeyi de kapsıyor. Ayrıca Redis, RabbitMQ, PostgreSQL, SQL Server, Docker ve bulut tabanlı dağıtımlarda da uygulamalı deneyime sahibim.",
      "Güvenilir, performanslı ve bakımı kolay yazılımlar geliştirmeye tutkuyla bağlıyım.",
    ],
    stats: [
      { value: "6+", label: "Yıllık Tecrübe" },
      { value: "4", label: "Yayınlanan Kurumsal Platform" },
      { value: "20+", label: "Teknoloji & Araç" },
      { value: ".NET / Node", label: "Temel Backend Teknolojileri" },
    ],
    whatIDoEyebrow: "Neler Yapıyorum",
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
    eyebrow: "Deneyim",
    role: "Kıdemli Full Stack Geliştirici",
    summary:
      "Binlerce kullanıcıya hizmet veren kurumsal düzeyde rezervasyon, turizm ve ödeme platformları geliştirdim ve yönettim.",
    responsibilities: [
      "Ölçeklenebilir REST API'ler tasarladım",
      "Mikroservis mimarileri kurdum",
      "Arka plan (background worker) servisleri geliştirdim",
      "Üçüncü parti API entegrasyonları gerçekleştirdim",
      "SQL sorgularını ve veritabanı performansını optimize ettim",
      "Redis önbellekleme stratejileri uyguladım",
      "API Gateway servisleri geliştirdim",
      "RabbitMQ ile asenkron mesajlaşmayı yönettim",
      "Ölçeklenebilir veritabanı mimarileri tasarladım",
      "Uygulama performansını ve güvenilirliğini artırdım",
    ],
  },
  projectsIntro: {
    eyebrow: "Öne Çıkan Projeler",
    heading: "Seçilmiş Çalışmalar &\nCanlı Projeler",
    description:
      "Tasarladığım ve geliştirdiğim canlı ürün ve platformlardan bir seçki — seyahat teknolojisi rezervasyon sistemlerinden fintech ve proptech platformlarına. Keşfetmek için üzerlerine tıklayabilirsiniz.",
  },
  projects: [
    {
      title: "Turasistan",
      tag: "Seyahat & Turizm",
      href: "https://turasistan.net/",
      description:
        "Hac, Umre ve yurt içi/yurt dışı tur rezervasyonları için bir B2B/B2C seyahat platformu — gerçek zamanlı uygunluk, kampanya bazlı fiyatlandırma ve seyahat acenteleri için çok kanallı ödeme entegrasyonları.",
      tech: ["Next.js", "React", "REST API", "PostgreSQL"],
    },
    {
      title: "Turasistan API",
      tag: "B2B Entegrasyon",
      href: "https://docs.turasistan.com/",
      description:
        "Turasistan platformunu partner acenteler için güçlendiren herkese açık REST API — API anahtarı ve JWT kimlik doğrulamasıyla güvence altına alınmış tur kataloğu, rezervasyon ve muhasebe uç noktaları.",
      tech: [".NET Core", "REST API", "Microservices", "Docker"],
    },
    {
      title: "Fizbot",
      tag: "Emlak CRM",
      href: "https://fizbot.net/",
      description:
        "Emlak ofisleri için geliştirilmiş bir satış yönetim platformu — potansiyel müşteri akışları, otomatik lead zenginleştirme ve değerleme, danışman performansını artıran çok kanallı bildirimler.",
      tech: ["React", "Node.js", "REST API", "MongoDB"],
    },
    {
      title: "Finbosoft",
      tag: "FinTech",
      href: "https://finbosoft.com/",
      description:
        "Halka açık şirketleri yapay zekâ destekli modellerle (F-Skoru, M-Skoru, Z-Skoru ve daha fazlası) puanlayıp değerleyen, yatırımcıların daha hızlı ve veriye dayalı kararlar almasını sağlayan bir yatırım analiz platformu.",
      tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    },
    {
      title: "Ruuf",
      tag: "PropTech",
      href: "https://www.ruuf.com.tr/",
      description:
        "Kira öder gibi, peşinatsız ev sahibi olma platformu — kullanıcılar hayallerindeki eve hemen taşınır ve zaman içinde ödedikleri tutarla eve sahip olurlar.",
      tech: ["React", ".NET Core", "PostgreSQL", "Docker"],
    },
  ],
  skills: {
    eyebrow: "Teknik Yetenekler",
    heading: "Güvenilir yazılımlar için\nkullandığım araçlar",
    categories: [
      { title: "Backend", items: [".NET", "ASP.NET Core", "Node.js", "Express.js", "REST APIs", "Microservices"] },
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
      { title: "Veritabanları", items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"] },
      { title: "Mesajlaşma & Arama", items: ["RabbitMQ", "Elasticsearch"] },
      { title: "DevOps", items: ["Docker", "Git", "CI/CD"] },
      { title: "Araçlar", items: ["Visual Studio", "VS Code", "Postman", "Swagger", "GitHub"] },
    ],
  },
  whyWorkWithMe: {
    eyebrow: "Neden Benimle Çalışmalısınız?",
    heading: "Beni farklı\nkılan neler",
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
    eyebrow: "İletişim",
    heading: "Birlikte Harika Bir Şey\nİnşa Edelim",
    description:
      "Zorlu projelere, yenilikçi fikirlere ve heyecan verici fırsatlara her zaman açığım. Bir Full Stack Developer veya Backend Engineer arıyorsanız, sizden haber almak isterim.",
  },
  footer: {
    builtWith: "",
    rightsTemplate: "{year} {name}. Tüm hakları saklıdır.",
  },
};
