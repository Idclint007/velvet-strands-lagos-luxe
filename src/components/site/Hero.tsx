import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Editorial portrait of a Black woman with luxury braids"
          className="h-full w-full object-cover object-center"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-plum via-plum/85 to-plum/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-transparent to-plum/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl reveal">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">
              Lagos · Est. 2018
            </span>
          </div>

          <h1 className="font-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Where Every <br />
            <em className="text-gradient-gold not-italic font-light">Strand</em>{" "}
            <span className="italic font-light">Tells a</span>{" "}
            <em className="text-gradient-gold not-italic">Story.</em>
          </h1>

          <p className="mt-8 text-cream/75 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            A sanctuary in Victoria Island where heritage meets high fashion. Bespoke
            hair artistry crafted for the woman who wears her crown with intention.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold text-plum px-8 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:bg-cream transition-all duration-500 glow-gold"
            >
              Book Appointment
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 border border-cream/30 text-cream px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-all duration-500"
            >
              Discover Services
            </a>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-12 right-12 flex-col items-center gap-3 text-cream/60">
          <span className="text-[10px] uppercase tracking-[0.4em] [writing-mode:vertical-rl]">
            Scroll to explore
          </span>
          <span className="h-16 w-px bg-gold/40" />
        </div>
      </div>
    </section>
  );
}