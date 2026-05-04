import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Adaeze O.",
    role: "Lawyer · VI",
    text: "I've never trusted my hair to anyone the way I trust Velvet Strands. Their knotless braids are art — and somehow my scalp has never felt better.",
  },
  {
    name: "Tomi A.",
    role: "Creative Director",
    text: "An entire vibe. The space feels like a Lagos secret you want to keep but can't help sharing. My silk press lasted three weeks.",
  },
  {
    name: "Nneka M.",
    role: "Doctor · Lekki",
    text: "From the gold-framed mirrors to the way they color-match my honey balayage, every detail is intentional. This is luxury done right.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Voices</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream">
            Words from Our <em className="text-gradient-gold">Women</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative bg-card/40 backdrop-blur-sm border border-gold/15 p-10 hover:border-gold/50 hover:-translate-y-2 transition-all duration-500 reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/20" strokeWidth={1} />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-cream/85 leading-relaxed font-light text-lg">
                "{r.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-gold/15">
                <div className="font-display text-xl text-cream">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mt-1">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}