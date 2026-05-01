import { Trophy, Medal, Star, Flag } from "lucide-react";

const achievements = [
  {
    year: "2025",
    icon: Trophy,
    title: "13 медала и 6 квоти за Световното първенство",
    text: "Пореден исторически успех за Beroe Armwrestling — 13 медала от национално състезание и 6 извоювани квоти за Световното първенство по канадска борба.",
    highlight: true,
  },
  {
    year: "2024",
    icon: Medal,
    title: "Първо място за Христо Димов в Девин",
    text: "17-годишният Христо Димов от „Берое" грабва първо място на международния турнир в Девин — поредно доказателство за силата на следващото поколение.",
  },
  {
    year: "2024",
    icon: Star,
    title: "Ново лице на канадската борба в Стара Загора",
    text: "Клубът продължава да открива и развива нови таланти, които представят града и страната ни на национална сцена.",
  },
  {
    year: "2017",
    icon: Flag,
    title: "Две златни в Селановци",
    text: "Две златни — на лява и на дясна ръка — в категории до 80 и 85 кг от 11-ия международен турнир в Селановци. Без нито една загуба.",
  },
];

const AchievementsTimeline = () => (
  <section
    id="achievements"
    className="relative py-24 md:py-32 overflow-hidden border-y border-border/60"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[120%] bg-warning/10 blur-[120px] rounded-full" />

    <div className="container relative">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.4em] text-warning">Залата на славата</span>
        <h2 className="mt-3 font-display text-4xl md:text-7xl tracking-tight">
          <span className="text-foreground">ПОСТИЖЕНИЯ И</span>
          <br />
          <span className="gold-text">ШАМПИОНСКИ ТИТЛИ</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Години упорит труд, безброй мачове и десетки медали. Ето част от историята,
          която изграждаме заедно — на масата и извън нея.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto relative">
        {/* center line on desktop */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:-translate-x-1/2" />

        <ul className="space-y-10 md:space-y-14">
          {achievements.map((a, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={a.title + a.year}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${
                  right ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`pl-12 md:pl-0 ${right ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div
                    className={`inline-flex items-center gap-2 glass rounded-full px-3 py-1 border ${
                      a.highlight ? "border-warning/60 shadow-gold" : "border-primary/30"
                    }`}
                  >
                    <a.icon
                      className={`h-4 w-4 ${a.highlight ? "text-warning" : "text-primary"}`}
                    />
                    <span className="text-xs uppercase tracking-widest text-foreground">
                      {a.year}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {a.text}
                  </p>
                </div>

                {/* dot */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      a.highlight
                        ? "bg-warning shadow-gold animate-pulse-glow"
                        : "bg-primary shadow-glow"
                    } ring-4 ring-background`}
                  />
                </div>

                <div className="hidden md:block" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

export default AchievementsTimeline;
