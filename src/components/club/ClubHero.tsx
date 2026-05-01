import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Flame } from "lucide-react";
import logo from "@/assets/beroe-logo.png";
import team from "@/assets/team-photo.jpg";

const ClubHero = () => (
  <section id="hero" className="relative overflow-hidden min-h-[100svh] flex items-center">
    {/* Background photo with heavy green/black overlay */}
    <div className="absolute inset-0">
      <img
        src={team}
        alt="Отборът на СК Берое — канадска борба, Стара Загора"
        className="w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="absolute inset-0 smoke-bg" />
      <div className="absolute inset-0 grid-bg opacity-40" />
    </div>

    <div className="container relative z-10 py-24 md:py-32 text-center">
      <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs md:text-sm animate-fade-up">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <span className="text-muted-foreground">Стара Загора</span>
        <span className="text-foreground/60">•</span>
        <span className="font-medium text-foreground">Канадска борба</span>
      </div>

      <img
        src={logo}
        alt="Лого на СК Берое"
        className="mx-auto mt-8 h-32 md:h-44 w-auto object-contain drop-shadow-[0_0_45px_hsl(145_80%_45%_/_0.55)] animate-fade-up animate-float"
        style={{ animationDelay: "0.1s" }}
      />

      <h1
        className="mt-6 font-display text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-foreground neon-text animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        СК БЕРОЕ
      </h1>

      <p
        className="mt-2 font-display text-2xl md:text-4xl tracking-[0.3em] gold-text animate-fade-up"
        style={{ animationDelay: "0.25s" }}
      >
        СИЛАТА НА ЛЪВА
      </p>

      <p
        className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        Спортен клуб по канадска борба от Стара Загора. Шампиони, медалисти и сърца, пълни с воля.
        Тренирай със състезатели, които побеждават на национална и световна сцена.
      </p>

      <div
        className="mt-10 flex flex-col sm:flex-row justify-center gap-3 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        <Button
          asChild
          size="lg"
          className="btn-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold tracking-wider px-8 h-14 text-base"
        >
          <a href="#join">
            <Flame className="mr-2 h-4 w-4" /> Присъедини се
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-border h-14 px-8 hover:border-primary hover:shadow-glow tracking-wider"
        >
          <a href="#achievements">
            <Trophy className="mr-2 h-4 w-4 text-warning" /> Виж постиженията
          </a>
        </Button>
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-xs text-muted-foreground tracking-[0.3em] uppercase animate-pulse">
      Скрол ↓
    </div>
  </section>
);

export default ClubHero;
