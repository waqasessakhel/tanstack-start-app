import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Award, Briefcase, Heart, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import factory from "@/assets/g-manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ALOWA Enterprises — Sportswear Manufacturer Sialkot" },
      { name: "description", content: "Learn about ALOWA Enterprises, a professional sportswear and apparel manufacturer in Sialkot, Pakistan delivering quality teamwear worldwide." },
      { property: "og:title", content: "About ALOWA Enterprises" },
      { property: "og:description", content: "Professional sportswear & apparel manufacturer based in Sialkot, Pakistan." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To deliver world-class, high-performance products with unwavering reliability, backed by competitive pricing and exceptional customer service—empowering teams, clubs, and businesses worldwide to perform, stand out, and succeed." },
  { icon: Award, title: "Our Quality", desc: "Engineered with premium fabrics, master-level precision stitching, and strict multi-stage quality inspections, every garment is crafted to meet—and exceed—professional performance standards." },
  { icon: Briefcase, title: "Our Experience", desc: "Powered by a highly skilled team of seasoned craftsmen, we bring years of expertise in creating premium sports uniforms, elite teamwear, and fully customized apparel—delivering precision, consistency, and excellence in every piece." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Built for lasting success, we cultivate long-term partnerships through transparent communication, dependable on-time delivery, and unwavering consistency in quality—earning trust with every order." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Crafted in Sialkot, Worn Worldwide." subtitle="A trusted name in sportswear manufacturing — built on quality, integrity and craftsmanship." />

      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <img src={factory} alt="ALOWA manufacturing facility" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Who we are</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-navy">A professional sportswear & apparel manufacturer.</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ALOWA ENTERPRISES isn’t just another manufacturer—we’re a performance-driven sportswear powerhouse based in Sialkot, Pakistan, a city globally recognized for excellence in craftsmanship. We design and produce premium-quality sports uniforms, elite teamwear, high-performance gym wear, and fully customized apparel tailored for teams, clubs, and businesses around the world.
              </p>
              <p>
                With a strong focus on innovation, precision, and durability, every piece we create reflects superior quality and modern style. From concept to completion, we bring your vision to life with unmatched attention to detail, ensuring your brand stands out with confidence and impact.
              </p>
              <p>
                At ALOWA ENTERPRISES, we don’t just make apparel—we build identity, performance, and global presence.
              </p>
            </div>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our mission is simple yet powerful: to deliver uncompromising quality, highly competitive pricing, and service that builds long-term trust. Every product we create is a reflection of precision, performance, and reliability—designed to exceed expectations in every market we serve.
              </p>
              <p>
                From concept and design to production and final dispatch, every stage is managed in-house by our experienced craftsmen and dedicated team. This complete control allows us to maintain strict quality standards, ensure consistency, and deliver on time—every time. We don’t overlook details; we perfect them.
              </p>
              <p>
                At ALOWA ENTERPRISES, we turn ideas into world-class products, combining craftsmanship, innovation, and commitment to help your brand perform at its best.
              </p>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground hover:opacity-90">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our values</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-navy">What drives us</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-7 shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg gold-bg text-gold-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
