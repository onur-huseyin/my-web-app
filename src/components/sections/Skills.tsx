"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/ui/StaggerReveal";

export default function Skills() {
  const { t } = useTranslation();
  const { skills } = t;

  return (
    <section id="skills" className="scroll-mt-24 border-t border-line px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />

        <StaggerReveal
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
          y={24}
        >
          {skills.categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-line bg-bg-elevated p-7 transition-colors hover:border-line-strong"
            >
              <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-fg/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
