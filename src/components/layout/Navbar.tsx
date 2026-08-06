"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useTranslation } from "@/i18n/useTranslation";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";


export default function Navbar() {
  const { t } = useTranslation();
  const { nav, site } = t;
  const barRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 40,
      onEnter: () => barRef.current?.classList.add("nav-scrolled"),
      onLeaveBack: () => barRef.current?.classList.remove("nav-scrolled"),
    });
  }, []);

  useGSAP(
    () => {
      if (!menuRef.current) return;
      const links = menuRef.current.querySelectorAll("[data-mobile-link]");
      if (open) {
        gsap.set(menuRef.current, { display: "flex" });
        gsap.fromTo(
          menuRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.3, ease: "power2.out" },
        );
        gsap.fromTo(
          links,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out", delay: 0.08 },
        );
      } else {
        gsap.to(menuRef.current, {
          autoAlpha: 0,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => gsap.set(menuRef.current, { display: "none" }),
        });
      }
    },
    { dependencies: [open] },
  );

  return (
    <>
      <header
        ref={barRef}
        className="nav-bar fixed top-0 z-50 w-full border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-300"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <a href="#top" data-cursor="hover" className="font-display text-lg font-semibold tracking-tight">
            {site.initials}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-cursor="hover"
                  className="group flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-fg"
                >
                  <span className="text-[10px] text-muted-2 group-hover:text-accent">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              data-cursor="hover"
              className="hidden rounded-full border border-line-strong px-5 py-2 font-mono text-xs transition-colors hover:border-accent hover:text-accent md:inline-flex"
            >
              {t.common.letsTalk}
            </a>
            <button
              aria-label={t.common.toggleMenu}
              data-cursor="hover"
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`block h-px w-5 bg-fg transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-fg transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-40 hidden flex-col justify-center gap-6 bg-bg px-10 md:hidden"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            data-mobile-link
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl font-medium text-fg"
          >
            <span className="mr-3 font-mono text-sm text-accent">{item.num}</span>
            {item.label}
          </a>
        ))}
        <a
          data-mobile-link
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 inline-flex w-fit rounded-full border border-line-strong px-6 py-3 font-mono text-sm"
        >
          {t.common.letsTalk}
        </a>
      </div>
    </>
  );
}
