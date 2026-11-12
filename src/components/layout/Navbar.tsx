"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const { t } = useTranslation();
  const { nav, site } = t;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-bg/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3 md:px-10">
        <a href="#top" className="font-mono text-sm text-fg">
          <span className="text-accent">~/</span>
          {site.initials.toLowerCase()}
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-mono text-xs text-muted hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
          <LanguageSwitcher />
          <button
            aria-label={t.common.toggleMenu}
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-xs text-muted md:hidden"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
