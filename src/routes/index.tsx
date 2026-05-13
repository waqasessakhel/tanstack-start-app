import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shirt, Scissors, Printer, Sparkles, Layers, ShieldCheck, Globe2, Award } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pSoccer from "@/assets/p-soccer.jpg";
import pBasketball from "@/assets/p-basketball.jpg";
import pTracksuit from "@/assets/p-tracksuit.jpg";
import pTeamwear from "@/assets/p-teamwear.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALOWA Enterprises — Quality Sportswear Manufacturer in Sialkot" },
      { name: "description", content: "ALOWA Enterprises manufactures premium sportswear, team uniforms and custom apparel in Sialkot, Pakistan. Worldwide shipping." },
      { property: "og:title", content: "ALOWA Enterprises — Quality Sportswear Manufacturer" },
      { property: "og:description", content: "Premium sports uniforms, teamwear and custom apparel manufactured in Sialkot, Pakistan." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Shirt,
    title: "Sportswear Manufacturing",
    desc: (
      <>
        <span className="font-semibold block mb-1">Elite Performance, From Fiber to Field.</span>
        We don’t just make clothes; we engineer professional-grade gear. Our end-to-end production process ensures that every garment meets the rigorous standards of world-class athletes, delivering durability, comfort, and style in every stitch.
      </>
    )
  },
  {
    icon: Layers,
    title: "Custom Uniforms",
    desc: (
      <>
        <span className="font-semibold block mb-1">Wear Your Pride. Define Your Legacy.</span>
        Don't just hit the pitch—make a statement. We create bespoke kits that serve as a second skin for your athletes, meticulously tailored to reflect your team’s unique history, colors, and identity. When you look like a pro, you play like one.
      </>
    )
  },
  {
    icon: Printer,
    title: "Sublimation Printing",
    desc: (
      <>
        <span className="font-semibold block mb-1">Color That Never Quits.</span>
        Bring your boldest visions to life with high-definition, vibrant prints that refuse to fade. Whether it’s intricate patterns or neon gradients, our advanced printing technology offers limitless design freedom—ensuring your team looks as sharp in the final game as they did in the season opener.
      </>
    )
  },
  {
    icon: Sparkles,
    title: "Embroidery",
    desc: (
      <>
        <span className="font-semibold block mb-1">The Gold Standard of Detailing.</span>
        A great kit is defined by its details. We use industrial-grade premium threads to create high-density, precision-stitched logos and badges that demand respect. From 3D embroidery to sleek, reinforced lettering, our finishings provide the texture and durability of elite-level professional gear.
      </>
    )
  },
  {
    icon: Scissors,
    title: "Screen Printing",
    desc: (
      <>
        <span className="font-semibold block mb-1">Graphics Built for the Grind.</span>
        Our high-volume printing isn't just about speed—it’s about stamina. We use industrial-grade inks and bonding techniques to create bold graphics that won't crack, peel, or fade, no matter how many times they hit the wash or the field. Durability comes standard.
      </>
    )
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: (
      <>
        <span className="font-semibold block mb-1">Uncompromising quality:</span>
        Every garment passes through a rigorous multi-stage inspection to ensure perfection before it reaches your doorstep.
      </>
    )
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-bg text-navy-foreground">
        <img src={hero} alt="Athletes in custom team uniforms" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-transparent" />
        <div className="container-page relative py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Made in Sialkot · Pakistan
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Quality Sportswear<br />
              <span className="text-gold">Crafted to Compete.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-foreground/85">
              ALOWA ENTERPRISES manufactures premium sports uniforms, teamwear, gym apparel and custom clothing for clients worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-md gold-bg px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-gold/60 bg-white/5 px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="container-page py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Welcome</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy">Where craftsmanship meets performance.</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-navy">Precision Engineered in the World’s Sportswear Capital.</p>
              <p>
                Based in the heart of Sialkot, ALOWA ENTERPRISES isn’t just a manufacturer—we are your strategic partner in performance. We transform bold concepts into professional-grade reality, combining Pakistan’s legendary craftsmanship with cutting-edge precision.
              </p>
              <div className="pt-2">
                <p className="font-semibold text-navy mb-2">Why Global Brands Choose Us:</p>
                <ul className="space-y-1 list-disc pl-5">
                  <li><span className="font-medium text-navy">Sialkot Heritage:</span> Authentic quality from the global hub of sportswear.</li>
                  <li><span className="font-medium text-navy">Uncompromising Precision:</span> Your designs, executed to the exact stitch.</li>
                  <li><span className="font-medium text-navy">Scalable Solutions:</span> From local clubs to international powerhouses.</li>
                </ul>
              </div>
            </div>
            <div className="mt-7 flex gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground hover:opacity-90">
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, k: "10+", v: "Years experience" },
              { icon: Globe2, k: "20+", v: "Countries served" },
              { icon: ShieldCheck, k: "100%", v: "Quality checked" },
              { icon: Shirt, k: "1M+", v: "Garments produced" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-card p-5 shadow-elegant">
                <s.icon className="h-6 w-6 text-gold" />
                <div className="mt-3 font-display text-3xl font-bold text-navy">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">What we do</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-navy">Our Services</h2>
            <div className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              <p className="font-semibold text-navy">One Roof. Zero Compromise.</p>
              <p>
                From the first sketch to the final stitch, we handle everything in-house. By eliminating middlemen, ALOWA ENTERPRISES ensures total quality control, faster turnaround times, and direct-from-factory pricing. Your vision never leaves our sight until it’s at your door.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg gold-bg text-gold-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Featured</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-navy">Popular Categories</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-navy hover:text-gold inline-flex items-center gap-1">
            All products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: pSoccer, t: "Baseball Kits" },
            { img: pBasketball, t: "Basketball" },
            { img: pTracksuit, t: "Tracksuits" },
            { img: pTeamwear, t: "Teamwear" },
          ].map((p) => (
            <Link key={p.t} to="/products" className="group overflow-hidden rounded-xl border border-border bg-card shadow-elegant">
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-semibold text-navy">{p.t}</span>
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-2xl hero-bg text-navy-foreground p-10 md:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gold-bg opacity-20 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">Ready to outfit your team?</h3>
              <p className="mt-3 text-navy-foreground/85">Get a tailored quote in 24 hours. Low MOQ, worldwide shipping.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gold-bg px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
