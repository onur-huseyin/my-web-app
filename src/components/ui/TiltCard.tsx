"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const el = ref.current;
      if (!el || !contextSafe) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      gsap.set(el, { transformPerspective: 800, transformStyle: "preserve-3d" });

      const rotateXTo = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
      const rotateYTo = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
      const liftTo = gsap.quickTo(el, "z", { duration: 0.5, ease: "power3.out" });

      const onMove = contextSafe((e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateYTo(px * max);
        rotateXTo(-py * max);
        liftTo(20);
      });

      const onLeave = contextSafe(() => {
        rotateXTo(0);
        rotateYTo(0);
        liftTo(0);
      });

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
