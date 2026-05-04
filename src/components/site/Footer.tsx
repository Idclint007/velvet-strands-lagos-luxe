import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-plum-deep border-t border-gold/15 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl tracking-wider text-gradient-gold">Velvet</span>
            <span className="font-display text-3xl tracking-wider text-cream italic">Strands</span>
          </div>
          <p className="mt-4 text-cream/60 text-sm leading-relaxed font-light">
            A Lagos atelier for the woman who wears her crown with intention.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Visit</h4>
          <p className="flex items-start gap-3 text-cream/75 text-sm">
            <MapPin className="h-4 w-4 mt-0.5 text-gold/80 shrink-0" />
            12 Adetokunbo Ademola St,
            <br />
            Victoria Island, Lagos
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Connect</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold/80" />
              <a href="tel:+2348012345678" className="hover:text-gold">+234 801 234 5678</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-gold/80" />
              <a
                href="https://instagram.com/velvetstrands.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @velvetstrands.ng
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/75">
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gold/80" />
              Tue – Sat · 9am – 8pm
            </li>
            <li className="pl-7">Sun · By appointment</li>
            <li className="pl-7">Mon · Closed</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
        <span>© {new Date().getFullYear()} Velvet Strands. Crafted in Lagos.</span>
        <span className="tracking-widest uppercase">Where every strand tells a story</span>
      </div>
    </footer>
  );
}