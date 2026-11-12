"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const { t } = useTranslation();
  const { projectsIntro, projects } = t;

  return (
    <section id="work" className="scroll-mt-24 border-t border-line px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={projectsIntro.eyebrow}
          heading={projectsIntro.heading}
          description={projectsIntro.description}
        />

        <ul className="mt-8 divide-y divide-line border-y border-line">
          {projects.map((project, i) => (
            <li key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-base text-fg group-hover:text-accent">
                    <span className="mr-3 text-muted-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted">{project.tag}</span>
                </div>
                <p className="mt-2 pl-8 text-sm leading-relaxed text-muted">{project.description}</p>
                <p className="mt-2 pl-8 font-mono text-xs text-muted-2">
                  {project.tech.join(" · ")}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
