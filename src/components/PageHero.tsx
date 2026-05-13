type Props = { eyebrow?: string; title: string; subtitle?: string };
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="hero-bg text-navy-foreground">
      <div className="container-page py-20 md:py-28 text-center">
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</div>}
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-navy-foreground/80">{subtitle}</p>}
      </div>
    </section>
  );
}
