import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ALOWA Enterprises — Sportswear Manufacturer Sialkot" },
      { name: "description", content: "Contact ALOWA Enterprises in Sialkot, Pakistan. Phone +92-33-28414729, email ALOWAENTERPRISSES@GMAIL.COM. Get a quote today." },
      { property: "og:title", content: "Contact ALOWA Enterprises" },
      { property: "og:description", content: "Reach out for sportswear & uniform inquiries — Sialkot, Pakistan." },
    ],
  }),
  component: ContactPage,
});

const PHONE = "923328414729";
const PHONE_DISPLAY = "+92-33-28414729";
const EMAIL = "ALOWAENTERPRISSES@GMAIL.COM";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Inquiry from ALOWA website")}&body=${body}`;
    setSubmitted(true);
  };

  const wa = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello, I am interested in your products from ALOWA ENTERPRISES.")}`;

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's build something great together." subtitle="Reach out for quotes, custom designs, or any questions about our manufacturing capabilities." />

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg gold-bg text-gold-foreground"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Address</div>
                  <p className="mt-1 text-sm font-medium text-navy">Alowa Street 8/332, Street # 9<br />Pura Heraan, Rangpura<br />Sialkot, Pakistan</p>
                </div>
              </div>
            </div>
            <a href={`tel:+${PHONE}`} className="block rounded-xl border border-border bg-card p-6 shadow-elegant hover:border-gold transition-colors">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg gold-bg text-gold-foreground"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call us</div>
                  <p className="mt-1 text-sm font-semibold text-navy">{PHONE_DISPLAY}</p>
                </div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="block rounded-xl border border-border bg-card p-6 shadow-elegant hover:border-gold transition-colors">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg gold-bg text-gold-foreground"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                  <p className="mt-1 text-sm font-semibold text-navy break-all">{EMAIL}</p>
                </div>
              </div>
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-whatsapp p-6 text-white shadow-elegant hover:opacity-95">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/20"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/80">WhatsApp</div>
                  <p className="mt-1 text-sm font-semibold">Chat with us instantly</p>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
              <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We typically respond within 24 hours.</p>

              {submitted ? (
                <div className="mt-6 rounded-md border border-gold/40 bg-gold/10 p-4 text-sm text-navy">
                  Thanks! Your email client should have opened. If not, please email us directly at <a className="font-semibold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="text-sm">
                    <span className="block font-medium text-navy">Full name</span>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </label>
                  <label className="text-sm">
                    <span className="block font-medium text-navy">Email</span>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </label>
                  <label className="text-sm sm:col-span-2">
                    <span className="block font-medium text-navy">Phone (optional)</span>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </label>
                  <label className="text-sm sm:col-span-2">
                    <span className="block font-medium text-navy">Message</span>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </label>
                  <div className="sm:col-span-2">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:opacity-90">
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-elegant">
              <iframe
                title="ALOWA Enterprises location"
                src="https://www.google.com/maps?q=Rangpura,+Sialkot,+Pakistan&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
