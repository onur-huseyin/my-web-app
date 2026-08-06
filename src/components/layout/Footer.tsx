"use client";

import { useTranslation } from "@/i18n/useTranslation";
import { interpolate } from "@/i18n/interpolate";

export default function Footer() {
  const { t } = useTranslation();
  const { site, nav, footer, common } = t;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-elevated px-6 pt-16 pb-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <a
          href="#contact"
          data-cursor="hover"
          className="font-display block text-[13vw] leading-[0.85] font-semibold tracking-tighter text-fg transition-colors hover:text-accent md:text-[8vw]"
        >
          {common.letsTalk}
        </a>

        <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-sm text-muted">{site.role}</p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 text-xs text-muted-2 md:flex-row md:items-center">
          <p>
            &copy;{" "}
            {interpolate(footer.rightsTemplate, { year: new Date().getFullYear(), name: site.name })}
          </p>
          <p className="font-mono">{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
