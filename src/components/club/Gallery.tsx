import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";
import team from "@/assets/team-photo.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";
import g11 from "@/assets/gallery-11.jpg";

const items = [
  { src: team, alt: "Отборът на СК Берое — групова снимка от турнир", className: "md:col-span-2 md:row-span-2" },
  { src: g9, alt: "Държавно първенство — мач под напрежение" },
  { src: g10, alt: "Юношески двубой на държавно първенство" },
  { src: g11, alt: "Тежка категория — захват в тежък мач" },
  { src: g1, alt: 'Млад състезател на „Берое" в схватка на турнир' },
  { src: g2, alt: 'Състезатели на „Берое" с медали по време на мач' },
  { src: g3, alt: "Финален двубой на международен турнир" },
  { src: g4, alt: "Тежка категория — мач под напрежение" },
  { src: g5, alt: "Юношески двубой на държавно първенство" },
  { src: g6, alt: "Концентрация преди стартовия сигнал" },
  { src: g7, alt: "Женски двубой на държавно първенство" },
  { src: g8, alt: "Силова битка на масата" },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="container py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-primary">Галерия</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
            Моменти от <span className="gradient-text">масата</span>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Кликни върху всяка снимка, за да я отвориш на цял екран и да я приближиш.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Отвори: ${it.alt}`}
            className={`group relative overflow-hidden rounded-2xl glass card-hover focus:outline-none focus:ring-2 focus:ring-primary ${it.className ?? ""}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand className="h-4 w-4 text-foreground" />
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <Lightbox
          images={items}
          index={open}
          onClose={() => setOpen(null)}
          onNavigate={(i) => setOpen(i)}
        />
      )}
    </section>
  );
};

export default Gallery;
