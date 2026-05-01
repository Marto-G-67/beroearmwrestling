import logo from "@/assets/beroe-logo.png";
import { Facebook, Instagram } from "lucide-react";

const ClubFooter = () => (
  <footer className="border-t border-border mt-10">
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div className="flex items-start gap-3">
        <img
          src={logo}
          alt="Лого на СК Берое"
          className="h-14 w-14 object-contain drop-shadow-[0_0_18px_hsl(145_80%_45%_/_0.5)]"
        />
        <div>
          <div className="font-display text-xl tracking-wider text-foreground">СК БЕРОЕ</div>
          <div className="text-xs text-primary uppercase tracking-[0.2em]">Канадска борба</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Стара Загора. Силата на лъва. Спорт, дисциплина и шампионски дух.
          </p>
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Навигация</div>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            ["#about", "За клуба"],
            ["#president", "Президент"],
            ["#trainers", "Треньори"],
            ["#achievements", "Постижения"],
            ["#join", "Тренирай с нас"],
            ["#contact", "Контакти"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-foreground/80 hover:text-primary transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Последвай ни</div>
        <div className="mt-3 flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} СК Берое — Канадска борба. Всички права запазени.
        </p>
      </div>
    </div>
  </footer>
);

export default ClubFooter;
