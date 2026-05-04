const PHONE = "2348012345678";
const MSG = encodeURIComponent("Hi Velvet Strands! I'd like to book an appointment.");

export function BookingCTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/20 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center reveal">
        <span className="text-xs uppercase tracking-[0.4em] text-gold">Reserve Your Chair</span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl text-cream leading-[1.05]">
          Your <em className="text-gradient-gold">Crown</em> is Waiting.
        </h2>
        <p className="mt-8 text-cream/75 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Slide into our DMs, send a WhatsApp, or simply walk in. Our concierge will help
          you choose the perfect service and stylist.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${PHONE}?text=${MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold text-plum px-10 py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-cream transition-all duration-500 glow-gold"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
            Book on WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+2348012345678"
            className="inline-flex items-center gap-3 border border-cream/30 text-cream px-10 py-5 text-xs uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-all duration-500"
          >
            Call the Atelier
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-cream/60 text-sm">
          <span>Tue – Sat · 9am – 8pm</span>
          <span className="hidden md:inline">·</span>
          <span>Sundays by appointment</span>
        </div>
      </div>
    </section>
  );
}