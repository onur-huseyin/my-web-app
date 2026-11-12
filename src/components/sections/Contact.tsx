"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const { t } = useTranslation();
  const { contact, site } = t;

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          description={contact.description}
        />

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a href={`mailto:${site.email}`} className="text-accent hover:underline">
            {site.email}
          </a>
          <a href={`tel:${site.phone}`} className="text-accent hover:underline">
            {site.phone}
          </a>
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent"
            >
              {s.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
