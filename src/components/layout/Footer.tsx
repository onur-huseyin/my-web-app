"use client";

import { useTranslation } from "@/i18n/useTranslation";
import { interpolate } from "@/i18n/interpolate";

export default function Footer() {
  const { t } = useTranslation();
  const { site, footer } = t;

  return (
    <footer className="border-t border-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 font-mono text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {interpolate(footer.rightsTemplate, {
            year: new Date().getFullYear(),
            name: site.name.toLowerCase(),
          })}
        </p>
        <p>{footer.builtWith}</p>
      </div>
    </footer>
  );
}
