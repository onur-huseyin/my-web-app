"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/ui/StaggerReveal";
import TiltCard from "@/components/ui/TiltCard";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export default function Projects() {
  const { t } = useTranslation();
  const { projectsIntro, projects } = t;

  return (
    <section id="work" className="scroll-mt-24 border-t border-line px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={projectsIntro.eyebrow}
          heading={projectsIntro.heading}
          description={projectsIntro.description}
        />

        <StaggerReveal className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1} y={30}>
          {projects.map((project, i) => {
            const isLastOdd = i === projects.length - 1 && projects.length % 2 !== 0;
            return (
              <TiltCard
                key={project.title}
                max={4}
                className={`group ${isLastOdd ? "md:col-span-2" : ""}`}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="relative block h-full overflow-hidden rounded-3xl border border-line bg-bg-elevated p-8 transition-colors hover:border-line-strong"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(120% 100% at 0% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-accent">
                      {project.tag}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent group-hover:text-accent">
                      <ArrowUpRightIcon />
                    </span>
                  </div>

                  <h3 className="font-display relative mt-8 text-2xl font-semibold text-fg md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </TiltCard>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
