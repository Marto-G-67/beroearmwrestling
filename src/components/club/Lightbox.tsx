import { useEffect, useRef, useState, useCallback } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, index, onClose, onNavigate }: LightboxProps) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef<{ x: number; y: number } | null>(null);

  const reset = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    reset();
  }, [index, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(s + 0.5, 6));
      if (e.key === "-") setScale((s) => Math.max(s - 0.5, 1));
      if (e.key === "0") reset();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.003;
    setScale((s) => Math.min(6, Math.max(1, s + delta)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    dragging.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setOffset({ x: e.clientX - dragging.current.x, y: e.clientY - dragging.current.y });
  };
  const onPointerUp = () => {
    dragging.current = null;
  };

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-label="Преглед на снимка"
    >
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 md:p-6">
        <span className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
          {index + 1} / {images.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            aria-label="Намали"
            onClick={() => setScale((s) => Math.max(1, s - 0.5))}
            className="h-10 w-10 rounded-full glass border border-border hover:border-primary text-foreground flex items-center justify-center transition-colors"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            aria-label="Увеличи"
            onClick={() => setScale((s) => Math.min(6, s + 0.5))}
            className="h-10 w-10 rounded-full glass border border-border hover:border-primary text-foreground flex items-center justify-center transition-colors"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            aria-label="Възстанови"
            onClick={reset}
            className="h-10 w-10 rounded-full glass border border-border hover:border-primary text-foreground flex items-center justify-center transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            aria-label="Затвори"
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:opacity-90 flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Nav */}
      <button
        aria-label="Предишна"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass border border-border hover:border-primary text-foreground flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Следваща"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass border border-border hover:border-primary text-foreground flex items-center justify-center transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image stage */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden touch-none"
        onClick={onClose}
        onWheel={onWheel}
      >
        <img
          src={current.src}
          alt={current.alt}
          draggable={false}
          onClick={(e) => e.stopPropagation()}
          onDoubleClick={(e) => {
            e.stopPropagation();
            setScale((s) => (s > 1 ? 1 : 2.5));
            setOffset({ x: 0, y: 0 });
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            cursor: scale > 1 ? (dragging.current ? "grabbing" : "grab") : "zoom-in",
            transition: dragging.current ? "none" : "transform 0.25s ease",
          }}
          className="max-h-[88vh] max-w-[94vw] object-contain select-none rounded-lg shadow-elevated"
        />
      </div>

      <div className="absolute bottom-4 inset-x-0 text-center text-xs text-muted-foreground px-4">
        {current.alt}
      </div>
    </div>
  );
};

export default Lightbox;
