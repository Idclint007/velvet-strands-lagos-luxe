import { Scissors, Sparkles, Palette, Wind, Crown, Leaf, Clock, CalendarCheck } from "lucide-react";

type Tier = { name: string; price: string; duration: string; includes: string };
type Service = {
  icon: typeof Scissors;
  name: string;
  desc: string;
  tiers: Tier[];
  availability: { nextSlot: string; wait: string; status: "open" | "limited" | "waitlist" };
};

const services: Service[] = [
  {
    icon: Scissors,
    name: "Hair Braiding",
    desc: "Knotless braids, cornrows & feed-ins crafted strand by strand.",
    tiers: [
      { name: "Essential", price: "₦35,000", duration: "4–5 hrs", includes: "Medium knotless, shoulder length" },
      { name: "Signature", price: "₦70,000", duration: "5–7 hrs", includes: "Small knotless, mid-back, custom parting" },
      { name: "Couture", price: "₦120,000", duration: "7–8 hrs", includes: "Boho or micro, waist length, premium hair" },
    ],
    availability: { nextSlot: "Thu, May 7 · 10am", wait: "3 days", status: "open" },
  },
  {
    icon: Sparkles,
    name: "Locs & Twists",
    desc: "Faux locs, soft locs and Marley twists styled to perfection.",
    tiers: [
      { name: "Essential", price: "₦45,000", duration: "5–6 hrs", includes: "Marley twists, shoulder length" },
      { name: "Signature", price: "₦95,000", duration: "6–8 hrs", includes: "Soft locs, mid-back" },
      { name: "Couture", price: "₦150,000", duration: "8–9 hrs", includes: "Butterfly faux locs, waist length" },
    ],
    availability: { nextSlot: "Sat, May 9 · 9am", wait: "5 days", status: "limited" },
  },
  {
    icon: Palette,
    name: "Hair Coloring",
    desc: "Custom dimensional color, balayage & honey-toned highlights.",
    tiers: [
      { name: "Essential", price: "₦60,000", duration: "3 hrs", includes: "Single-process root touch-up" },
      { name: "Signature", price: "₦120,000", duration: "4 hrs", includes: "Full balayage or partial highlights" },
      { name: "Couture", price: "₦200,000", duration: "5 hrs", includes: "Dimensional color correction & gloss" },
    ],
    availability: { nextSlot: "Wed, May 6 · 2pm", wait: "2 days", status: "open" },
  },
  {
    icon: Wind,
    name: "Silk Press",
    desc: "Mirror-smooth blowouts that honour the integrity of your strands.",
    tiers: [
      { name: "Essential", price: "₦25,000", duration: "1.5 hrs", includes: "Wash, blow-dry & flat iron" },
      { name: "Signature", price: "₦40,000", duration: "2 hrs", includes: "Deep condition + silk press" },
      { name: "Couture", price: "₦55,000", duration: "2.5 hrs", includes: "Olaplex, trim & mirror finish" },
    ],
    availability: { nextSlot: "Tue, May 5 · 11am", wait: "1 day", status: "open" },
  },
  {
    icon: Crown,
    name: "Wigs & Weaves",
    desc: "Premium installs, custom colorings and seamless lace work.",
    tiers: [
      { name: "Essential", price: "₦40,000", duration: "3 hrs", includes: "Glueless install, client's unit" },
      { name: "Signature", price: "₦100,000", duration: "4–5 hrs", includes: "HD lace install, plucked & styled" },
      { name: "Couture", price: "₦180,000", duration: "5–6 hrs", includes: "Custom colored unit + bleached knots" },
    ],
    availability: { nextSlot: "Mon, May 11 · 10am", wait: "7 days", status: "waitlist" },
  },
  {
    icon: Leaf,
    name: "Scalp Treatment",
    desc: "Restorative rituals with steam therapy and botanical oils.",
    tiers: [
      { name: "Essential", price: "₦18,000", duration: "1 hr", includes: "Cleanse, scalp massage & oil" },
      { name: "Signature", price: "₦28,000", duration: "1.5 hrs", includes: "Steam therapy + deep mask" },
      { name: "Couture", price: "₦40,000", duration: "2 hrs", includes: "Trichology consult & ritual" },
    ],
    availability: { nextSlot: "Tue, May 5 · 3pm", wait: "1 day", status: "open" },
  },
];

const statusStyles: Record<Service["availability"]["status"], { dot: string; label: string }> = {
  open: { dot: "bg-emerald-400", label: "Booking open" },
  limited: { dot: "bg-gold", label: "Limited slots" },
  waitlist: { dot: "bg-rose-400", label: "Waitlist only" },
};

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-plum-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">The Atelier</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream">
            Services <em className="text-gradient-gold">Curated</em> for You
          </h2>
          <p className="mt-6 text-cream/60 max-w-xl mx-auto font-light">
            Three tiers per service — choose the experience that suits your day. Live availability
            updates daily.
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-gold/60" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const status = statusStyles[s.availability.status];
            return (
              <article
                key={s.name}
                className="group relative bg-plum/40 border border-gold/15 p-8 md:p-10 hover:border-gold/50 transition-all duration-500 reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <s.icon className="h-9 w-9 text-gold shrink-0" strokeWidth={1.2} />
                    <div>
                      <h3 className="font-display text-3xl text-cream">{s.name}</h3>
                      <p className="mt-2 text-cream/65 leading-relaxed font-light text-sm max-w-md">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-cream/70 whitespace-nowrap">
                    <span className={`h-1.5 w-1.5 rounded-full ${status.dot} animate-pulse`} />
                    {status.label}
                  </span>
                </div>

                <div className="mt-8 space-y-3">
                  {s.tiers.map((t) => (
                    <div
                      key={t.name}
                      className="grid grid-cols-12 gap-3 items-center py-3 border-t border-gold/10 first:border-t-gold/25"
                    >
                      <div className="col-span-4 sm:col-span-3">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                          {t.name}
                        </div>
                        <div className="font-display text-lg text-cream">{t.price}</div>
                      </div>
                      <p className="col-span-5 sm:col-span-6 text-cream/65 text-xs sm:text-sm font-light leading-snug">
                        {t.includes}
                      </p>
                      <div className="col-span-3 flex items-center justify-end gap-1.5 text-[11px] uppercase tracking-[0.15em] text-cream/55">
                        <Clock className="h-3 w-3 text-gold/70" />
                        {t.duration}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gold/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-cream/70">
                    <CalendarCheck className="h-3.5 w-3.5 text-gold" />
                    <span>
                      Next slot: <span className="text-cream">{s.availability.nextSlot}</span>
                    </span>
                    <span className="text-cream/40">·</span>
                    <span className="text-cream/55">~{s.availability.wait} wait</span>
                  </div>
                  <a
                    href="#contact"
                    className="text-[10px] uppercase tracking-[0.3em] text-gold hover:text-cream transition-colors"
                  >
                    Reserve →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
