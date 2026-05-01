import { useEffect, useState } from "react";
import { X, Calendar, MapPin, Trophy, Expand } from "lucide-react";
import Lightbox from "./Lightbox";

export interface CompetitionData {
  year: string;
  title: string;
  location?: string;
  date?: string;
  cover: string;
  intro: string;
  article: string[];
  highlights: { label: string; value: string }[];
  gallery: { src: string; alt: string }[];
}

interface Props {
  data: CompetitionData;
  onClose: () => void;
}

const CompetitionModal = ({ data, onClose }: Props) => {
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
          <img src={data.cover} alt={data.title} className="w-full h-[280px] md:h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <span className="text-xs uppercase tracking-[0.4em] text-warning">{data.year}</span>
            <h2 className="mt-3 font-display text-3xl md:text-6xl tracking-tight gold-text">
              {data.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {data.date && (
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" /> {data.date}
                </span>
              )}
              {data.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> {data.location}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.highlights.map((h) => (
            <div
              key={h.label}
              className="glass rounded-2xl p-5 border border-border/60 text-center"
            >
              <Trophy className="h-5 w-5 text-warning mx-auto" />
              <div className="mt-2 font-display text-3xl text-foreground">{h.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Article */}
        <article className="mt-10 max-w-3xl mx-auto">
          <p className="font-display text-xl md:text-2xl text-foreground leading-snug">
            {data.intro}
          </p>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            {data.article.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        {/* Gallery */}
        {data.gallery.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-2xl md:text-4xl text-foreground">
              Галерия от <span className="gradient-text">състезанието</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Кликни върху снимка, за да я отвориш на цял екран.
            </p>
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

export default CompetitionModal;
