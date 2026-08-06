"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  y = 40,
  start = "top 85%",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = Array.from(ref.current.children);

      gsap.from(items, {
        autoAlpha: 0,
        y,
        duration: 0.9,
        stagger,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
