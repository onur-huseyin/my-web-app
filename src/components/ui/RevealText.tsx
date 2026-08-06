"use client";

import { Fragment, useRef, type RefObject } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

type RevealTextProps = {
  children: string;
  as?: Tag;
  className?: string;
  split?: "lines" | "words" | "chars";
  stagger?: number;
  delay?: number;
  start?: string;
};

export default function RevealText({
  children,
  as = "h2",
  className,
  split = "lines",
  stagger = 0.08,
  delay = 0,
  start = "top 85%",
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as;
  const parts = children.split("\n");

  useGSAP(
    () => {
      if (!ref.current) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, { opacity: 1 });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const st = SplitText.create(ref.current!, {
          type: split,
          mask: split,
          linesClass: "reveal-line",
        });
        const targets = split === "lines" ? st.lines : split === "words" ? st.words : st.chars;

        gsap.from(targets, {
          yPercent: 110,
          duration: 1.1,
          stagger,
          delay,
          ease: "power4.out",
          scrollTrigger: { trigger: ref.current, start },
        });

        return () => st.revert();
      });

      return () => mm.revert();
    },
    {
      scope: ref as RefObject<HTMLElement>,
      dependencies: [children, split, stagger, delay, start],
      revertOnUpdate: true,
    },
  );

  return (
    <Tag ref={ref as never} className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}
