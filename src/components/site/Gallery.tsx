import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, label: "Knotless Braids", h: "h-[420px]" },
  { src: g3, label: "Faux Locs", h: "h-[520px]" },
  { src: g2, label: "Silk Press", h: "h-[360px]" },
  { src: g4, label: "Curly Wig", h: "h-[480px]" },
  { src: g6, label: "Bantu Updo", h: "h-[400px]" },
  { src: g5, label: "The Atelier", h: "h-[440px]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-plum-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Portfolio</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-cream">
              The <em className="text-gradient-gold">Gallery</em>
            </h2>
          </div>
          <p className="text-cream/65 max-w-md font-light">
            A living archive of the women, the styles, and the stories that walk through
            our doors.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it) => (
            <figure
              key={it.label}
              className="group relative mb-6 break-inside-avoid overflow-hidden cursor-pointer reveal"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className={`w-full ${it.h} object-cover transition-transform duration-[1500ms] group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum-deep/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold block">
                  Velvet Strands
                </span>
                <span className="font-display text-2xl text-cream block mt-1">
                  {it.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}