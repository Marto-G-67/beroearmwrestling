import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/beroe-logo.png";

const links = [
  { href: "#about", label: "За клуба" },
  { href: "#president", label: "Президент" },
  { href: "#trainers", label: "Треньори" },
  { href: "#achievements", label: "Постижения" },
  { href: "#gallery", label: "Галерия" },
  { href: "#events", label: "Турнири" },
  { href: "#contact", label: "Контакти" },
];

const ClubHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Лого на СК Берое — канадска борба"
            className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-[0_0_18px_hsl(145_80%_45%_/_0.5)] group-hover:scale-105 transition-transform"
          />
          <div className="leading-tight">
            <div className="font-display text-xl md:text-2xl tracking-wider text-foreground">
              СК БЕРОЕ
            </div>
            <div className="text-[10px] md:text-xs text-primary uppercase tracking-[0.2em]">
              Канадска борба
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            asChild
            size="sm"
            className="btn-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold tracking-wider"
          >
            <a href="#join">Тренирай с нас</a>
          </Button>
        </div>

        <button
          aria-label="Меню"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border">
          <nav className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary py-2"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="btn-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold tracking-wider mt-2"
            >
              <a href="#join" onClick={() => setOpen(false)}>Тренирай с нас</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ClubHeader;
