"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/i18n/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, locales, t } = useTranslation();

  return (
    <Select
      value={locale}
      onValueChange={(value) => setLocale(value as Locale)}
    >
      <SelectTrigger
        aria-label={t.common.languageLabel}
        size="sm"
        data-cursor="hover"
        className={`rounded-full border-line-strong bg-bg/60 px-4 font-mono text-xs text-fg backdrop-blur-sm hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:ring-accent/30 dark:bg-bg/60 dark:hover:bg-bg-elevated ${className ?? ""}`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        align="end"
        position="popper"
        className="z-[80] min-w-[8.5rem] border border-line bg-bg-elevated text-fg shadow-xl ring-0"
      >
        {locales.map((l) => (
          <SelectItem
            key={l.code}
            value={l.code}
            className="font-mono text-xs focus:bg-accent focus:text-accent-foreground"
          >
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
