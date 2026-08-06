"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/ui/StaggerReveal";
import { CheckIcon } from "@/components/ui/icons";

export default function Experience() {
  const { t } = useTranslation();
  const { experience } = t;

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={experience.eyebrow}
          heading={experience.role}
          description={experience.summary}
        />

        <StaggerReveal className="mt-14 grid gap-4 sm:grid-cols-2" stagger={0.05} y={20}>
          {experience.responsibilities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-xl border border-line bg-bg-elevated px-5 py-4 transition-colors hover:border-line-strong"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckIcon />
              </span>
              <span className="text-sm text-fg/90 md:text-base">{item}</span>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
