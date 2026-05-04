import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal">
          <div className="absolute -inset-4 border border-gold/30" />
          <img
            src={aboutImg}
            alt="Velvet Strands salon interior with gold mirrors and plum velvet chairs"
            className="relative w-full h-[600px] object-cover shadow-luxe"
            loading="lazy"
            width={1200}
            height={1400}
          />
          <div className="absolute -bottom-8 -right-8 bg-gold text-plum p-6 max-w-[200px] hidden md:block">
            <span className="font-display text-5xl block leading-none">7+</span>
            <span className="text-xs uppercase tracking-[0.25em] mt-2 block">
              Years crafting crowns
            </span>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Our Story</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream leading-tight">
            A House Built on <em className="text-gradient-gold">Heritage</em>, Hands & Heart.
          </h2>

          <p className="mt-8 text-cream/75 text-lg leading-relaxed font-light">
            Velvet Strands began as a quiet dream in a Lagos apartment — a space where
            a Nigerian woman could sit, exhale, and trust her hair to hands that knew it
            intimately. Today we are an atelier; tomorrow we hope to be a love letter.
          </p>

          <p className="mt-6 text-cream/65 leading-relaxed font-light">
            Every chair tells a story. Every braid, twist and curl is woven with
            intention by stylists who treat your crown like the heirloom it is. We
            don't just style hair — we honour the woman wearing it.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "5K+", l: "Clients styled" },
              { n: "12", l: "Master stylists" },
              { n: "100%", l: "Made with love" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/40 pl-4">
                <div className="font-display text-3xl text-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-cream/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}