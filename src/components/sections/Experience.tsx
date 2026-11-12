"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  const { t } = useTranslation();
  const { experience } = t;

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={experience.eyebrow}
          heading={experience.role}
          description={experience.summary}
        />

        <ul className="mt-6 space-y-2 font-mono text-sm text-fg/90">
          {experience.responsibilities.map((item) => (
            <li key={item}>
              <span className="text-accent">› </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
