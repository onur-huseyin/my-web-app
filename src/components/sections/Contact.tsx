"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export default function Contact() {
  const { t } = useTranslation();
  const { contact, site } = t;

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/15 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionHeading
          align="center"
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          description={contact.description}
        />

        <div className="mt-12 flex justify-center">
          <Magnetic strength={0.3}>
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-sm font-medium text-bg"
            >
              {site.email}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </div>

        <p className="mt-8 font-display text-lg text-muted italic">{contact.closing}</p>
      </div>
    </section>
  );
}
