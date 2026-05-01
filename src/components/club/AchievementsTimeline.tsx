import { useState } from "react";
import { Trophy, Medal, Star, Flag, BookOpen } from "lucide-react";
import CompetitionModal, { CompetitionData } from "./CompetitionModal";
import comp2025 from "@/assets/comp-2025-team.jpg";
import comp2025_1 from "@/assets/comp-2025-1.jpg";
import comp2025_2 from "@/assets/comp-2025-2.jpg";
import comp2025_3 from "@/assets/comp-2025-3.jpg";
import comp2025_4 from "@/assets/comp-2025-4.jpg";

const competitions: Record<string, CompetitionData> = {
  "2025-worlds-quotas": {
    year: "2025",
    title: "13 медала и 6 квоти за Световното първенство",
    location: "Държавно първенство, България",
    date: "2025",
    cover: comp2025,
    intro:
      'Пореден исторически успех за СК „Берое" — 13 медала от националното състезание и 6 извоювани квоти за Световното първенство по канадска борба.',
    article: [
      'Отборът на „Берое Армрестлинг" се завърна от държавното първенство с впечатляваща плячка — тринайсет медала в различни категории, разпределени между мъже, жени и юноши. Битките бяха яростни, нивото — най-високото в последните години.',
      "Шестима от състезателите ни извоюваха квоти за Световното първенство по канадска борба — това е най-голямата делегация на клуба за последните години и ясен знак, че работата в залата дава резултат.",
      "Зад всеки медал стоят месеци ставане в 6 сутринта, тренировки преди работа, тренировки след работа, контролирани мачове, борба с травмите и подкрепа на съотборниците. Този успех не е случаен — той е сбор от стотици тихи решения да продължиш още един рунд.",
      'Президентът Георги Чолаков благодари на състезателите, треньорите и семействата им: „Този отбор показа що е дисциплина и характер. Сега работим за Световното — там отиваме не да участваме, а да се борим за подиума."',
    ],
    highlights: [
      { label: "Медала", value: "13" },
      { label: "Квоти за Световно", value: "6" },
      { label: "Категории", value: "8+" },
      { label: "Състезатели", value: "12" },
    ],
    gallery: [
      { src: comp2025, alt: 'Отборът на „Берое" след държавното първенство 2025' },
      { src: comp2025_4, alt: 'Подиум на държавното първенство — шампион от „Берое"' },
      { src: comp2025_1, alt: 'Битка на масата — състезател на „Берое" в действие' },
      { src: comp2025_2, alt: 'Концентрация преди старта — мач от държавното първенство' },
      { src: comp2025_3, alt: 'Тежка категория — мощна схватка под рефера' },
    ],
  },
};

const achievements = [
  {
    year: "2025",
    icon: Trophy,
    title: "13 медала и 6 квоти за Световното първенство",
    text: 'Пореден исторически успех за Beroe Armwrestling — 13 медала от национално състезание и 6 извоювани квоти за Световното първенство по канадска борба.',
    highlight: true,
    competitionId: "2025-worlds-quotas",
    image: comp2025,
  },
  {
    year: "2024",
    icon: Medal,
    title: "Първо място за Христо Димов в Девин",
    text: 'Седемнадесетгодишният Христо Димов от „Берое" грабва първо място на международния турнир в Девин — поредно доказателство за силата на следващото поколение.',
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

const AchievementsTimeline = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:-translate-x-1/2" />

          <ul className="space-y-10 md:space-y-14">
            {achievements.map((a, i) => {
              const right = i % 2 === 1;
              const clickable = !!a.competitionId;
              const Wrapper: any = clickable ? "button" : "div";
              return (
                <li
                  key={a.title + a.year}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${
                    right ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Wrapper
                    {...(clickable
                      ? {
                          type: "button",
                          onClick: () => setOpenId(a.competitionId!),
                          "aria-label": `Виж пълната статия: ${a.title}`,
                        }
                      : {})}
                    className={`pl-12 md:pl-0 ${
                      right ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                    } ${
                      clickable
                        ? "group cursor-pointer text-left rounded-2xl transition-all hover:-translate-y-0.5"
                        : ""
                    }`}
                  >
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
                    <h3
                      className={`mt-3 font-display text-2xl md:text-3xl text-foreground ${
                        clickable ? "group-hover:text-warning transition-colors" : ""
                      }`}
                    >
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {a.text}
                    </p>
                    {clickable && (
                      <span
                        className={`mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-warning ${
                          right ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <BookOpen className="h-4 w-4" />
                        Прочети статията
                      </span>
                    )}
                  </Wrapper>

                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        a.highlight
                          ? "bg-warning shadow-gold animate-pulse-glow"
                          : "bg-primary shadow-glow"
                      } ring-4 ring-background`}
                    />
                  </div>

                  {a.image ? (
                    <button
                      type="button"
                      onClick={() =>
                        a.competitionId && setOpenId(a.competitionId)
                      }
                      aria-label={`Виж пълната статия: ${a.title}`}
                      className="group relative block w-full overflow-hidden rounded-2xl border border-border/60 glass shadow-elevated focus:outline-none focus:ring-2 focus:ring-warning"
                    >
                      <img
                        src={a.image}
                        alt={a.title}
                        loading="lazy"
                        className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-warning">
                        <span className="inline-flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Отвори статията
                        </span>
                        <span className="text-foreground/80">{a.year}</span>
                      </div>
                    </button>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {openId && competitions[openId] && (
        <CompetitionModal data={competitions[openId]} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
};

export default AchievementsTimeline;
