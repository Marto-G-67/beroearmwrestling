import { useEffect, useState } from "react";
import { X, Medal, Weight, Expand } from "lucide-react";
import Lightbox from "./Lightbox";

export interface CompetitorData {
  name: string;
  category: string;
  medals: { hand: string; place: string; color: "gold" | "silver" | "bronze" }[];
  cover: string;
  bio: string[];
  gallery: { src: string; alt: string }[];
}

interface Props {
  data: CompetitorData;
  onClose: () => void;
}

const medalColor = (c: "gold" | "silver" | "bronze") =>
  c === "gold"
    ? "text-warning border-warning/60"
    : c === "silver"
    ? "text-foreground border-foreground/40"
    : "text-orange-400 border-orange-400/40";

const CompetitorModal = ({ data, onClose }: Props) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightbox === null) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, lightbox]);

  return (
    <div
      className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-md overflow-y-auto animate-fade-up"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="min-h-full container max-w-5xl py-10 md:py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Затвори"
          className="sticky top-4 ml-auto flex h-11 w-11 rounded-full bg-primary text-primary-foreground hover:opacity-90 items-center justify-center transition-colors z-10 shadow-elevated"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative rounded-3xl overflow-hidden border border-border/60 glass">
          <img src={data.cover} alt={data.name} className="w-full h-[280px] md:h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl md:text-6xl tracking-tight gold-text">
                {data.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.medals.map((m, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 border text-xs uppercase tracking-widest ${medalColor(m.color)}`}
                  >
                    <Medal className="h-3.5 w-3.5" />
                    {m.place} — {m.hand}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Weight className="h-4 w-4 text-primary" /> Категория {data.category}
            </div>
          </div>
        </div>

        {/* Bio */}
        <article className="mt-10 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl text-foreground">Биография</h3>
          <div className="mt-4 space-y-5 text-muted-foreground leading-relaxed">
            {data.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        {/* Gallery */}
        {data.gallery.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-2xl md:text-4xl text-foreground">
              Галерия на <span className="gradient-text">{data.name}</span>
            </h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3">
              {data.gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-2xl glass card-hover focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="h-4 w-4 text-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={data.gallery}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={(i) => setLightbox(i)}
        />
      )}
    </div>
  );
};

export default CompetitorModal;
