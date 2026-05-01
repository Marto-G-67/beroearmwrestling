import team from "@/assets/team-photo.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: team, alt: "Отборът на СК Берое — групова снимка от турнир", className: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: 'Млад състезател на „Берое" в схватка на турнир' },
  { src: g2, alt: 'Състезатели на „Берое" с медали по време на мач' },
  { src: g3, alt: "Финален двубой на международен турнир" },
  { src: g4, alt: "Тежка категория — мач под напрежение" },
];

const Gallery = () => (
  <section id="gallery" className="container py-20 md:py-28">
    <div className="flex items-end justify-between flex-wrap gap-4">
      <div>
        <span className="text-xs uppercase tracking-[0.4em] text-primary">Галерия</span>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
          Моменти от <span className="gradient-text">масата</span>
        </h2>
      </div>
      <p className="text-sm text-muted-foreground max-w-md">
        Тренировки, турнири и победи. Изпрати ни още снимки, за да попълним албума.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
      {items.map((it, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-2xl glass card-hover ${it.className ?? ""}`}
        >
          <img
            src={it.src}
            alt={it.alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
