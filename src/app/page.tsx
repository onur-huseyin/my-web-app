"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import Contact from "@/components/sections/Contact";
import { useLocale } from "@/i18n/useTranslation";

export default function Home() {
  const locale = useLocale();

  return (
    <>
      <Hero key={`hero-${locale}`} />
      <About key={`about-${locale}`} />
      <Projects key={`projects-${locale}`} />
      <Skills key={`skills-${locale}`} />
      <Experience key={`experience-${locale}`} />
      <WhyWorkWithMe key={`why-${locale}`} />
      <Contact key={`contact-${locale}`} />
    </>
  );
}
