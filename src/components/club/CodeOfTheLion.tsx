import { Swords, Crown, Mountain, Eye, Anchor, Sparkles } from "lucide-react";

const codes = [
  { icon: Crown, t: "Сърце на лъв", d: "Не отстъпвай. Срещу по-силен — ставаш по-силен. Срещу по-слаб — оставаш смирен." },
  { icon: Swords, t: "Уважение към масата", d: "Масата е свещена. Съперникът — брат. Победата — без надменност, загубата — без оправдание." },
  { icon: Mountain, t: "Постоянство над таланта", d: "Талантът отваря вратата. Постоянството те държи в стаята. Идваш на тренировка дори когато не ти се идва." },
  { icon: Eye, t: "Фокус през болката", d: "Болката е сигнал, не край. Дишай, контролирай, изпълни техниката докрай." },
  { icon: Anchor, t: "Без преки пътища", d: "Никакви скрити трикове, никакви химии. Само работа, време и истинска сила." },
  { icon: Sparkles, t: "Носи името", d: "Когато излезеш на масата — носиш Берое, Стара Загора и България. Бий се, сякаш всеки те гледа." },
];

const CodeOfTheLion = () => (
  <section id="code" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-primary/10 blur-[140px] rounded-full" />

    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.4em] text-warning">Кодекс</span>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
          Кодексът на <span className="gold-text">лъва</span>
        </h2>
        <p className="mt-5 text-muted-foreground md:text-lg leading-relaxed">
          Шест принципа, които пишем на стената на залата и в сърцата на състезателите.
          Те ни правят отбор — и шампиони.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {codes.map((c, i) => (
          <article
            key={c.t}
            className="relative glass rounded-2xl p-7 card-hover border border-border/60 hover:border-primary/50 group overflow-hidden"
          >
            <div className="absolute top-3 right-4 font-display text-6xl text-primary/10 group-hover:text-primary/20 transition-colors leading-none">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CodeOfTheLion;
