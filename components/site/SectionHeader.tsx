type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-terracotta md:text-sm">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold leading-tight text-cocoa md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-cocoa/80 md:text-lg">{description}</p> : null}
    </div>
  );
}
