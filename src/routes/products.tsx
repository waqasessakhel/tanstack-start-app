import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import pUniform from "@/assets/p-uniform.jpg";
import pSoccer from "@/assets/p-soccer.jpg";
import pCricket from "@/assets/p-cricket.jpg";
import pBasketball from "@/assets/p-basketball.jpg";
import pGym from "@/assets/p-gym.jpg";
import pTracksuit from "@/assets/p-tracksuit.jpg";
import pHoodie from "@/assets/p-hoodie.jpg";
import pTshirt from "@/assets/p-tshirt.jpg";
import pTeamwear from "@/assets/p-teamwear.jpg";
import pPolo from "@/assets/p-polo.jpg";
import pShorts from "@/assets/p-shorts.jpg";
import pCaps from "@/assets/p-caps.jpg";
import pSocks from "@/assets/p-socks.jpg";
import pJacket from "@/assets/p-jacket.jpg";
import pCompression from "@/assets/p-compression.jpg";
import pGoalkeeper from "@/assets/p-goalkeeper.jpg";
import pRugby from "@/assets/p-rugby.jpg";
import pSinglet from "@/assets/p-singlet.jpg";
import pMma from "@/assets/p-mma.jpg";
import pCycling from "@/assets/p-cycling.jpg";
import pBaseball from "@/assets/p-baseball.jpg";
import pHockey from "@/assets/p-hockey.jpg";
import pYoga from "@/assets/p-yoga.jpg";
import pSweatCrew from "@/assets/p-sweat-crew.jpg";
import pSweatPullover from "@/assets/p-sweat-pullover.jpg";
import pSweatZipup from "@/assets/p-sweat-zipup.jpg";
import pSweatOversized from "@/assets/p-sweat-oversized.jpg";
import pSweatCropped from "@/assets/p-sweat-cropped.jpg";
import pSweatVarsity from "@/assets/p-sweat-varsity.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Sportswear, Uniforms & Custom Apparel | ALOWA" },
      { name: "description", content: "Explore football kits, cricket uniforms, basketball jerseys, tracksuits, gym wear, hoodies and custom teamwear by ALOWA Enterprises." },
      { property: "og:title", content: "Products — ALOWA Enterprises" },
      { property: "og:description", content: "Football kits, cricket & basketball uniforms, tracksuits, hoodies, custom teamwear." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { img: pUniform, title: "Sports Uniforms", desc: "Professional-grade uniforms for any sport, fully customizable." },
  { img: pSoccer, title: "Baseball Uniforms", desc: "Lightweight, breathable jerseys, shorts and socks." },
  { img: pCricket, title: "Cricket Uniforms", desc: "Comfortable kits engineered for long match days." },
  { img: pBasketball, title: "Basketball Uniforms", desc: "Mesh jerseys and shorts with vibrant team graphics." },
  { img: pGym, title: "Gym Wear", desc: "Compression shirts, shorts and performance training apparel." },
  { img: pTracksuit, title: "Tracksuits", desc: "Premium training tracksuits in custom colors and trims." },
  { img: pHoodie, title: "Hoodies", desc: "Heavyweight fleece hoodies for teams and brands." },
  { img: pTshirt, title: "T-Shirts", desc: "Soft-touch cotton and performance polyester tees." },
  { img: pTeamwear, title: "Custom Teamwear", desc: "Bespoke teamwear packages designed around your brand." },
  { img: pPolo, title: "Polo Shirts", desc: "Premium pique polos with custom embroidery, ideal for clubs, staff and corporate teamwear." },
  { img: pShorts, title: "Shorts", desc: "Lightweight performance shorts with moisture-wicking fabric, available in training and match styles." },
  { img: pCaps, title: "Caps & Headwear", desc: "Custom snapbacks, fitted caps and beanies finished with embroidery or printing." },
  { img: pSocks, title: "Socks", desc: "Cushioned athletic socks in custom colors and team branding for football, cricket and gym wear." },
  { img: pJacket, title: "Jackets & Windbreakers", desc: "Lightweight, water-resistant jackets engineered for training in any weather." },
  { img: pCompression, title: "American Football Uniforms", desc: "Our American football uniforms are built for maximum protection, durability, and performance in high-impact games.\n standards, they combine comfort, strength, and modern style for professional use." },
  { img: pGoalkeeper, title: "American Flag Football", desc: "Our American flag football wear is lightweight, flexible, and designed for maximum comfort and speed in non-contact play." },
  { img: pRugby, title: "Rugby Uniforms", desc: "Heavy-duty reinforced rugby jerseys and shorts engineered to withstand contact play." },
  { img: pSinglet, title: "Training Singlets", desc: "Lightweight sleeveless singlets and tank tops designed for athletics, running and gym training." },
  { img: pMma, title: "MMA & Boxing Shorts", desc: "Durable fight shorts with reinforced stitching and custom sublimated graphics for combat sports." },
  { img: pCycling, title: "Cycling Jerseys", desc: "Aerodynamic cycling jerseys with rear pockets, full-zip fronts and breathable performance fabric." },
  { img: pBaseball, title: "Baseball Jerseys", desc: "Classic-fit baseball jerseys with custom team names, numbers and twill or printed lettering." },
  { img: pHockey, title: "Hockey Jerseys", desc: "Field and ice hockey jerseys built for durability with full sublimation and team branding." },
  { img: pYoga, title: "Yoga & Activewear", desc: "Soft-stretch leggings, sports bras and crop tops engineered for yoga, pilates and studio training." },
  { img: pHoodie, title: "Sweatshirts & Hooded", desc: "Cozy crew-neck sweatshirts in heavyweight fleece, fully customizable with team logos and prints." },
];

const sweatshirts = [
  { img: pSweatCrew, title: "Crew-Neck Sweatshirts", desc: "Classic crew-neck pullovers in heavyweight fleece with custom embroidery or prints." },
  { img: pSweatPullover, title: "Pullover Hooded Sweatshirts", desc: "Brushed fleece hooded pullovers with kangaroo pocket and reinforced drawcords." },
  { img: pSweatZipup, title: "Zip-Up Sweatshirts & Hooded", desc: "Full-zip fleece sweatshirts with ribbed cuffs and hem, ideal for layering and team kits." },
  { img: pSweatOversized, title: "Oversized Sweatshirts & Hooded", desc: "Relaxed-fit streetwear sweatshirts in premium cotton-poly blends with drop shoulders." },
  { img: pSweatCropped, title: "Cropped Sweatshirts", desc: "Modern cropped silhouettes for women's activewear and lifestyle collections." },
  { img: pSweatVarsity, title: "Embroidered Varsity Sweatshirts", desc: "College-style sweatshirts with chenille patches, twill lettering and premium embroidery." },
];

const PHONE = "923328414729";

function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Our Products" title="Built for performance, designed to stand out." subtitle="Browse our range of sports apparel — every piece is fully customizable with your colors, logos and team branding." />

      <section className="container-page py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const msg = `Hello, I am interested in ${p.title} from ALOWA ENTERPRISES.`;
            const wa = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
            return (
              <article key={p.title} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-elegant transition-transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                  <div className="mt-5 flex gap-2">
                    <Link to="/contact" className="flex-1 inline-flex items-center justify-center rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground hover:opacity-90">
                      Inquire
                    </Link>
                    <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp inquiry about ${p.title}`} className="inline-flex items-center justify-center rounded-md bg-whatsapp px-3 text-white hover:opacity-90">
                      <MessageCircle className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SWEATSHIRTS CATEGORY */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Category Spotlight</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-navy">Sweatshirts & Hooded</h2>
            <p className="mt-4 text-muted-foreground">
              Premium custom sweatshirts engineered for warmth, comfort and durability. From classic crew-necks to oversized streetwear silhouettes, every piece is fully customizable with your colors, embroidery and prints — built for teams, brands and retail collections worldwide.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {sweatshirts.map((p) => {
              const msg = `Hello, I am interested in ${p.title} from ALOWA ENTERPRISES.`;
              const wa = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
              return (
                <article key={p.title} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-elegant transition-transform hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={p.img} alt={p.title} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-navy">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                    <div className="mt-5 flex gap-2">
                      <Link to="/contact" className="flex-1 inline-flex items-center justify-center rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground hover:opacity-90">
                        Inquire
                      </Link>
                      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp inquiry about ${p.title}`} className="inline-flex items-center justify-center rounded-md bg-whatsapp px-3 text-white hover:opacity-90">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
