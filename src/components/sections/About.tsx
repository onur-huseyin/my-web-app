"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { t } = useTranslation();
  const { about } = t;

  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

        <div className="mt-6 space-y-3">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted md:text-base">
              {p}
            </p>
          ))}
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 sm:grid-cols-4">
          {about.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] tracking-wide text-muted-2 uppercase">
                {stat.label}
              </dt>
              <dd className="mt-1 font-mono text-sm text-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
