"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { techStack } from "@/data/tech";
import { TechIcon } from "@/components/ui/TechIcons";

export default function Marquee({
  duration = 28,
  className,
}: {
  duration?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...techStack, ...techStack];

  useGSAP(
    (_context, contextSafe) => {
      if (!trackRef.current || !contextSafe) return;

      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        duration,
        ease: "none",
        repeat: -1,
      });

      const onEnter = contextSafe(() => tween.timeScale(0.25));
      const onLeave = contextSafe(() => tween.timeScale(1));

      trackRef.current.addEventListener("mouseenter", onEnter);
      trackRef.current.addEventListener("mouseleave", onLeave);

      return () => {
        trackRef.current?.removeEventListener("mouseenter", onEnter);
        trackRef.current?.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: trackRef },
  );

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="flex w-max items-center gap-4 will-change-transform md:gap-6">
        {doubled.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="flex items-center gap-4 rounded-2xl border border-line bg-bg-elevated/50 px-5 py-3.5 md:gap-5 md:px-7 md:py-4"
          >
            <span className="text-accent">
              <TechIcon id={item.id} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-fg whitespace-nowrap md:text-2xl">
              {item.label}
            </span>
            <span className="ml-1 font-mono text-xl text-muted-2 md:text-2xl" aria-hidden="true">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
