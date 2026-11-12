"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  const { t } = useTranslation();
  const { skills } = t;

  return (
    <section id="skills" className="scroll-mt-24 border-t border-line px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />

        <ul className="mt-8 space-y-4">
          {skills.categories.map((category) => (
            <li key={category.title} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-4">
              <span className="font-mono text-xs text-accent">{category.title}</span>
              <span className="font-mono text-sm text-fg/90">{category.items.join("  ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
