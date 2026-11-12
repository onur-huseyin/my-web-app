export default function SectionHeading({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div>
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-mono text-xl text-fg md:text-2xl">{heading}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{description}</p>
      )}
    </div>
  );
}
