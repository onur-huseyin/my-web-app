import RevealText from "./RevealText";

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`mb-5 flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </div>
      <RevealText
        key={heading}
        as="h2"
        className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl"
      >
        {heading}
      </RevealText>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
