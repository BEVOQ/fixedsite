import clsx from "clsx";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="text-xs tracking-[0.22em] uppercase text-muted">{eyebrow}</div>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl leading-[1.08] tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">{subtitle}</p>
      ) : null}
      <div className="mt-6 h-px w-24 bg-black/10" />
    </div>
  );
}
