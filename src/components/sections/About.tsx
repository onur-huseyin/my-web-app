"use client";

import { useTranslation } from "@/i18n/useTranslation";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerReveal from "@/components/ui/StaggerReveal";
import TiltCard from "@/components/ui/TiltCard";
import { ServerIcon, BrowserIcon, DeviceIcon, DatabaseIcon, CloudIcon } from "@/components/ui/icons";

const icons = [ServerIcon, BrowserIcon, DeviceIcon, DatabaseIcon, CloudIcon];

export default function About() {
  const { t } = useTranslation();
  const { about, whatIDo } = t;

  return (
    <section id="about" className="scroll-mt-24 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

        <div className="mt-14 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <StaggerReveal className="space-y-5" stagger={0.12} y={24}>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-fg md:text-xl"
                    : "text-base leading-relaxed text-muted md:text-lg"
                }
              >
                {p}
              </p>
            ))}
          </StaggerReveal>

          <TiltCard className="rounded-3xl border border-line bg-bg-elevated p-8">
            <div className="grid grid-cols-2 gap-8">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-accent md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-muted md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        <div className="mt-28">
          <div className="mb-10 flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase">
            <span className="h-px w-8 bg-accent" />
            {about.whatIDoEyebrow}
          </div>

          <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {whatIDo.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated p-7 transition-colors hover:border-line-strong"
                >
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/10" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong text-accent">
                    <Icon />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold text-fg">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
