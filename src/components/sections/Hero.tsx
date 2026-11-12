"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();
  const { hero, site } = t;
  const external = hero.secondaryCta.href.startsWith("http");

  return (
    <section id="top" className="px-6 pt-28 pb-16 md:px-10 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-accent">{hero.badge}</p>

        <h1 className="mt-4 font-mono text-4xl leading-tight text-fg sm:text-5xl">
          <span className="text-muted">$ </span>
          {hero.heading}
        </h1>

        <p className="mt-4 font-mono text-base text-fg/90 md:text-lg">{hero.subtitle}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm">
          <a
            href={hero.primaryCta.href}
            className="rounded-md bg-accent px-4 py-2 text-on-accent hover:opacity-90"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="rounded-md border border-line-strong px-4 py-2 text-fg hover:border-accent hover:text-accent"
          >
            {hero.secondaryCta.label}
          </a>
          <a href={`mailto:${site.email}`} className="px-2 text-muted hover:text-accent">
            {site.email}
          </a>
          <a href={`tel:${site.phone}`} className="px-2 text-muted hover:text-accent">
            {site.phone}
          </a>
        </div>

        <pre className="mt-10 overflow-x-auto rounded-md border border-line bg-bg-elevated p-4 font-mono text-xs leading-6 text-muted md:text-sm">
          <code>{`const onur = {
  role: "${site.role}",
  stack: [".net", "node", "react", "next"],
  location: "${site.location}",
  phone: "${site.phone}",
};`}</code>
        </pre>
      </div>
    </section>
  );
}
