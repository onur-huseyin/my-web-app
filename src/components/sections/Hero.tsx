"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useTranslation } from "@/i18n/useTranslation";
import Badge from "@/components/ui/Badge";
import Magnetic from "@/components/ui/Magnetic";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  const { t, locale } = useTranslation();
  const hero = t.hero;
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(headingRef.current!, {
          type: "words, chars",
          mask: "chars",
        });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(badgeRef.current, { autoAlpha: 0, y: 12, duration: 0.7 })
          .from(split.chars, { yPercent: 130, duration: 1, stagger: 0.02 }, "-=0.35")
          .from(subtitleRef.current, { autoAlpha: 0, y: 16, duration: 0.8 }, "-=0.55")
          .from(descRef.current, { autoAlpha: 0, y: 16, duration: 0.8 }, "-=0.65")
          .from(
            ctaRef.current ? Array.from(ctaRef.current.children) : [],
            { autoAlpha: 0, y: 16, duration: 0.7, stagger: 0.1 },
            "-=0.6",
          )
          .from(scrollCueRef.current, { autoAlpha: 0, duration: 0.6 }, "-=0.3");

        gsap.to(scrollCueRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 1.1,
          ease: "sine.inOut",
        });

        gsap.to(blobARef.current, {
          y: -120,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(blobBRef.current, {
          y: 100,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        });

        return () => split.revert();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([badgeRef.current, subtitleRef.current, descRef.current, ctaRef.current], {
          autoAlpha: 1,
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [locale, hero.heading], revertOnUpdate: true },
  );

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen flex-col overflow-hidden pt-32 pb-10"
    >
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-40" />
      <div
        ref={blobARef}
        className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        ref={blobBRef}
        className="pointer-events-none absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full bg-accent-2/25 blur-[130px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 md:px-10">
        <div ref={badgeRef} className="mb-8 w-fit">
          <Badge>{hero.badge}</Badge>
        </div>

        <h1
          ref={headingRef}
          className="font-display max-w-4xl text-5xl leading-[0.98] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.heading}
        </h1>

        <p ref={subtitleRef} className="mt-8 max-w-2xl text-xl font-medium text-fg/90 md:text-2xl">
          {hero.subtitle}
        </p>

        <p ref={descRef} className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {hero.description}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={hero.primaryCta.href}
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-bg"
            >
              {hero.primaryCta.label}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={hero.secondaryCta.href}
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </a>
          </Magnetic>
        </div>
      </div>

      <div
        ref={scrollCueRef}
        className="relative z-10 mx-auto hidden flex-col items-center gap-2 py-6 md:flex"
      >
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
          {t.common.scroll}
        </span>
        <span className="h-6 w-px bg-line-strong" />
      </div>

      <div className="relative z-10 border-t border-line py-8 md:py-10">
        <Marquee />
      </div>
    </section>
  );
}
