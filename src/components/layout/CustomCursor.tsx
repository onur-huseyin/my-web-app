"use client";

import { useRef, useSyncExternalStore } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const pointerQuery = window.matchMedia("(pointer: fine)");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  pointerQuery.addEventListener("change", callback);
  motionQuery.addEventListener("change", callback);
  return () => {
    pointerQuery.removeEventListener("change", callback);
    motionQuery.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return fine && !reduced;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useGSAP(
    () => {
      if (!enabled || !dotRef.current || !ringRef.current) return;

      const dotTo = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3.out" });
      const dotToY = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3.out" });
      const ringTo = gsap.quickTo(ringRef.current, "x", { duration: 0.4, ease: "power3.out" });
      const ringToY = gsap.quickTo(ringRef.current, "y", { duration: 0.4, ease: "power3.out" });

      const move = (e: MouseEvent) => {
        dotTo(e.clientX);
        dotToY(e.clientY);
        ringTo(e.clientX);
        ringToY(e.clientY);
      };

      const onOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const interactive = target.closest("a, button, [data-cursor='hover']");
        gsap.to(ringRef.current, {
          scale: interactive ? 2.2 : 1,
          opacity: interactive ? 0.5 : 1,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", move);
      document.addEventListener("mouseover", onOver);

      gsap.set([dotRef.current, ringRef.current], { xPercent: -50, yPercent: -50 });

      return () => {
        window.removeEventListener("mousemove", move);
        document.removeEventListener("mouseover", onOver);
      };
    },
    { dependencies: [enabled] },
  );

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70]">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 h-8 w-8 rounded-full border border-accent/60"
      />
      <div ref={dotRef} className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-accent" />
    </div>
  );
}
