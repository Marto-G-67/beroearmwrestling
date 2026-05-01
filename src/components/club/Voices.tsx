import { Quote } from "lucide-react";

const quotes = [
  {
    t: "Ставам в 6, тренирам в 7. Така започна първият ми европейски медал.",
    a: "— състезател от „Берое"",
  },
  {
    t: "Не дойдох заради медалите. Останах заради хората.",
    a: "— юноша, втора година",
  },
  {
    t: "Силата не е в ръката. Силата е в волята да продължиш още един рунд.",
    a: "— Георги Чолаков, президент",
  },
];

const Voices = () => (
  <section id="voices" className="container py-20 md:py-28">
    <div className="text-center max-w-2xl mx-auto">
      <span className="text-xs uppercase tracking-[0.4em] text-primary">Гласове от залата</span>
      <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
        Думи, които <span className="gradient-text">тежат</span>
      </h2>
    </div>

    <div className="mt-14 grid md:grid-cols-3 gap-5">
      {quotes.map((q, i) => (
        <figure
          key={i}
          className="glass rounded-3xl p-8 border border-border/60 hover:border-primary/50 card-hover relative"
        >
          <Quote className="h-8 w-8 text-primary/40" />
          <blockquote className="mt-4 font-display text-xl md:text-2xl tracking-wide text-foreground leading-snug">
            „{q.t}"
          </blockquote>
          <figcaption className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {q.a}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Voices;
