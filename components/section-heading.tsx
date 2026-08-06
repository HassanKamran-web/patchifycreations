import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
