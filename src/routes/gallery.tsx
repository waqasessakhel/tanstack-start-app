import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import pSoccer from "@/assets/p-soccer.jpg";
import pCricket from "@/assets/p-cricket.jpg";
import pBasketball from "@/assets/p-basketball.jpg";
import pGym from "@/assets/p-gym.jpg";
import pTracksuit from "@/assets/p-tracksuit.jpg";
import pHoodie from "@/assets/p-hoodie.jpg";
import pTshirt from "@/assets/p-tshirt.jpg";
import pTeamwear from "@/assets/p-teamwear.jpg";
import pUniform from "@/assets/p-uniform.jpg";
import gManufacturing from "@/assets/g-manufacturing.jpg";
import gSublimation from "@/assets/g-sublimation.jpg";
import gEmbroidery from "@/assets/g-embroidery.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sportswear, Teamwear & Production | ALOWA" },
      { name: "description", content: "Browse work samples and production photography from ALOWA Enterprises sportswear manufacturing." },
      { property: "og:title", content: "Gallery — ALOWA Enterprises" },
      { property: "og:description", content: "Sportswear, team uniforms, custom designs and manufacturing." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Sportswear" | "Team Uniforms" | "Custom Designs" | "Manufacturing";
const items: { src: string; alt: string; cat: Exclude<Cat, "All"> }[] = [
  { src: pSoccer, alt: "Soccer kits", cat: "Sportswear" },
  { src: pBasketball, alt: "Basketball jersey", cat: "Sportswear" },
  { src: pGym, alt: "Gym wear", cat: "Sportswear" },
  { src: pCricket, alt: "Cricket uniform", cat: "Team Uniforms" },
  { src: pUniform, alt: "Soccer team jersey", cat: "Team Uniforms" },
  { src: pTeamwear, alt: "Team in matching uniforms", cat: "Team Uniforms" },
  { src: pTracksuit, alt: "Custom tracksuit", cat: "Custom Designs" },
  { src: pHoodie, alt: "Custom hoodie", cat: "Custom Designs" },
  { src: pTshirt, alt: "Custom t-shirts", cat: "Custom Designs" },
  { src: gManufacturing, alt: "Manufacturing floor", cat: "Manufacturing" },
  { src: gSublimation, alt: "Sublimation printing", cat: "Manufacturing" },
  { src: gEmbroidery, alt: "Embroidery process", cat: "Manufacturing" },
];

const tabs: Cat[] = ["All", "Sportswear", "Team Uniforms", "Custom Designs", "Manufacturing"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our work, in detail." subtitle="A look at the products we make and the people who make them." />

      <section className="container-page py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === t ? "border-navy bg-navy text-navy-foreground" : "border-border bg-card text-foreground hover:border-gold hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => (
            <figure key={it.src + it.alt} className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4 text-sm font-medium text-navy-foreground opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-gold text-xs uppercase tracking-wider">{it.cat}</span>
                <div>{it.alt}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
