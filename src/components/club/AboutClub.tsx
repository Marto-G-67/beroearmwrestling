import { Shield, Target, Heart, ArrowRight } from "lucide-react";

const articles = [
  {
    icon: Shield,
    tag: "Философия",
    title: "Дисциплина над таланта",
    text: 'В „Берое" вярваме, че характерът се изгражда на масата. Тренировките не са само за мускули — те калят воля, уважение към съперника и постоянство, които остават за цял живот. Всеки състезател преминава през програма, която изгражда не само сила, но и манталитет на шампион.',
  },
  {
    icon: Target,
    tag: "Подготовка",
    title: "Път до световния подиум",
    text: "От първата хватка до международния турнир — подготвяме състезатели стъпка по стъпка. Индивидуални програми по техника, сила и тактика, видео анализ на мачове и системно участие в национални първенства. Резултатът: 13 медала и 6 квоти за Световното първенство през 2025 г.",
  },
  {
    icon: Heart,
    tag: "Общност",
    title: "Семейство, не просто клуб",
    text: 'В залата няма звезди и статисти. Има братя по оръжие — деца, юноши и мъже, които се вдигат един друг. Подкрепяме се в победите и в загубите, празнуваме заедно и тренираме заедно. Това е „Берое" — място, където силата се споделя.',
  },
];

const AboutClub = () => (
  <section id="about" className="container py-20 md:py-28">
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-[0.4em] text-primary">За клуба</span>
      <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
        Сила, родена в <span className="gradient-text">Стара Загора</span>
      </h2>
      <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
        СК „Берое" е спортен клуб по канадска борба (армрестлинг), базиран в сърцето на
        Стара Загора. От години развиваме спорта в региона, изграждаме шампиони и
        представяме България на международна сцена.
      </p>
    </div>

    <div className="mt-14 space-y-6">
      {articles.map((a, i) => (
        <article
          key={a.title}
          className="glass rounded-3xl p-7 md:p-10 card-hover border border-border/60 hover:border-primary/40 transition-colors"
        >
          <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-start">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-primary/30 shrink-0">
                <a.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary font-medium">
                №0{i + 1} · {a.tag}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-4xl tracking-tight text-foreground">
                {a.title}
              </h3>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {a.text}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                <span>Прочети повече</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default AboutClub;
