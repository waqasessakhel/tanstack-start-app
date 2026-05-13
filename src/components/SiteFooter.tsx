import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground mt-20">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-bold">ALOWA<span className="text-gold">.</span></h3>
          <p className="mt-3 text-sm text-navy-foreground/75">Quality Sportswear Manufacturer based in Sialkot, Pakistan. Serving teams, clubs and businesses worldwide.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-navy-foreground/80 hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="text-navy-foreground/80 hover:text-gold">About Us</Link></li>
            <li><Link to="/products" className="text-navy-foreground/80 hover:text-gold">Products</Link></li>
            <li><Link to="/gallery" className="text-navy-foreground/80 hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="text-navy-foreground/80 hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>Sportswear Manufacturing</li>
            <li>Custom Uniforms</li>
            <li>Sublimation Printing</li>
            <li>Embroidery</li>
            <li>Screen Printing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>Alowa Street 8/332, Street #9, Pura Heraan, Rangpura, Sialkot, Pakistan</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href="tel:+923328414729" className="hover:text-gold">+92-33-28414729</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href="mailto:ALOWAENTERPRISSES@GMAIL.COM" className="hover:text-gold break-all">ALOWAENTERPRISSES@GMAIL.COM</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-navy-foreground/70">
          © ALOWA ENTERPRISES - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
