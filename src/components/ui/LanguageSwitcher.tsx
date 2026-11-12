"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/i18n/types";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, locales, t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t.common.languageLabel}
      className={`flex items-center gap-2 font-mono text-xs ${className ?? ""}`}
    >
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center gap-2">
          {i > 0 && <span className="text-muted-2">/</span>}
          <button
            type="button"
            onClick={() => setLocale(l.code as Locale)}
            className={locale === l.code ? "text-accent" : "text-muted hover:text-fg"}
          >
            {l.short.toLowerCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
