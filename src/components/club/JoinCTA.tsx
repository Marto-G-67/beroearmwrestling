import { Button } from "@/components/ui/button";
import { CheckCircle2, Flame, ArrowRight } from "lucide-react";

const benefits = [
  "Тренировки с опитни треньори и активни състезатели",
  "Индивидуален подход — от начинаещ до републикански шампион",
  "Подготовка за национални, европейски и световни турнири",
  "Сила, техника, кондиция и контрол на захвата",
  "Отборен дух и приятелство за цял живот",
];

const JoinCTA = () => (
  <section id="join" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[120%] bg-primary/15 blur-[120px] rounded-full" />

    <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-xs uppercase tracking-[0.4em] text-warning">Тренирай с нас</span>
        <h2 className="mt-3 font-display text-5xl md:text-7xl tracking-tight text-foreground">
          Стани част от
          <br />
          <span className="gold-text">отбора на лъва</span>
        </h2>
        <p className="mt-5 text-muted-foreground md:text-lg max-w-xl leading-relaxed">
          Без значение дали си начинаещ или напреднал — в „Берое" ще намериш мястото си.
          Записванията са отворени целогодишно. Първата тренировка е безплатна.
        </p>

        <ul className="mt-8 space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            size="lg"
            className="btn-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold tracking-wider px-8 h-14"
          >
            <a href="#contact">
              <Flame className="mr-2 h-4 w-4" /> Запиши се
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border h-14 px-8 hover:border-primary tracking-wider"
          >
            <a href="#achievements">Виж постиженията</a>
          </Button>
        </div>
      </div>

      <div className="glass rounded-3xl p-8 md:p-10 border border-primary/30 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 bg-primary/30 rounded-full blur-3xl" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Разписание</div>
          <h3 className="mt-2 font-display text-3xl text-foreground">Тренировки</h3>
          <ul className="mt-6 divide-y divide-border">
            {[
              { d: "Понеделник", t: "18:00 – 20:00" },
              { d: "Сряда", t: "18:00 – 20:00" },
              { d: "Петък", t: "18:00 – 20:00" },
              { d: "Събота", t: "10:00 – 12:00 (отборна)" },
            ].map((r) => (
              <li
                key={r.d}
                className="flex items-center justify-between py-3 text-sm md:text-base"
              >
                <span className="text-foreground">{r.d}</span>
                <span className="text-muted-foreground tracking-wider">{r.t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            * Часовете на тренировки могат да бъдат коригирани. Свържи се с нас за актуална информация.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default JoinCTA;
