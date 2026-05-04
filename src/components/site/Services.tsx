import { Scissors, Sparkles, Palette, Wind, Crown, Leaf } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Hair Braiding",
    desc: "Knotless braids, cornrows & feed-ins crafted strand by strand.",
    price: "₦35,000 — ₦120,000",
    duration: "4–8 hrs",
  },
  {
    icon: Sparkles,
    name: "Locs & Twists",
    desc: "Faux locs, soft locs and Marley twists styled to perfection.",
    price: "₦45,000 — ₦150,000",
    duration: "5–9 hrs",
  },
  {
    icon: Palette,
    name: "Hair Coloring",
    desc: "Custom dimensional color, balayage & honey-toned highlights.",
    price: "₦60,000 — ₦200,000",
    duration: "3–5 hrs",
  },
  {
    icon: Wind,
    name: "Silk Press",
    desc: "Mirror-smooth blowouts that honour the integrity of your strands.",
    price: "₦25,000 — ₦55,000",
    duration: "2 hrs",
  },
  {
    icon: Crown,
    name: "Wigs & Weaves",
    desc: "Premium installs, custom colorings and seamless lace work.",
    price: "₦40,000 — ₦180,000",
    duration: "3–6 hrs",
  },
  {
    icon: Leaf,
    name: "Scalp Treatment",
    desc: "Restorative rituals with steam therapy and botanical oils.",
    price: "₦18,000 — ₦40,000",
    duration: "1–2 hrs",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-plum-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">The Atelier</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream">
            Services <em className="text-gradient-gold">Curated</em> for You
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-gold/60" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="group relative bg-plum-deep p-10 transition-all duration-500 hover:bg-plum cursor-pointer reveal"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              <s.icon className="h-10 w-10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.2} />
              <h3 className="mt-6 font-display text-3xl text-cream group-hover:text-gradient-gold transition-all">
                {s.name}
              </h3>
              <p className="mt-3 text-cream/65 leading-relaxed font-light">{s.desc}</p>

              <div className="mt-8 pt-6 border-t border-gold/15 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50 block">From</span>
                  <span className="font-display text-xl text-gold">{s.price}</span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-cream/60">
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}