"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/ui/StaggerReveal";

export default function WhyWorkWithMe() {
  const { t } = useTranslation();
  const { whyWorkWithMe } = t;

  return (
    <section id="why" className="scroll-mt-24 border-t border-line px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={whyWorkWithMe.eyebrow} heading={whyWorkWithMe.heading} />

        <StaggerReveal
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
          y={20}
        >
          {whyWorkWithMe.items.map((item, i) => (
            <div key={item} className="bg-bg-elevated p-8">
              <span className="font-display text-3xl font-semibold text-muted-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base leading-relaxed text-fg/90">{item}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
