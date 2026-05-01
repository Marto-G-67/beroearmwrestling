import { useState } from "react";
import { Trophy, Medal, Star, Flag, BookOpen, Users, ChevronRight } from "lucide-react";
import CompetitionModal, { CompetitionData } from "./CompetitionModal";
import CompetitorModal, { CompetitorData } from "./CompetitorModal";
import comp2025 from "@/assets/comp-2025-team.jpg";
import comp2025_1 from "@/assets/comp-2025-1.jpg";
import comp2025_2 from "@/assets/comp-2025-2.jpg";
import comp2025_3 from "@/assets/comp-2025-3.jpg";
import comp2025_4 from "@/assets/comp-2025-4.jpg";
import comp2025_5 from "@/assets/comp-2025-5.jpg";
import comp2025_6 from "@/assets/comp-2025-6.jpg";
import antonPodium from "@/assets/comp-2026-anton-podium.jpg";
import antonMatch from "@/assets/comp-2026-anton-match.jpg";
import antonPodium2 from "@/assets/comp-2026-anton-podium-2.jpg";
import shterioPodium from "@/assets/comp-2026-shterio-podium.jpg";
import shterioMatch from "@/assets/comp-2026-shterio-match.jpg";
import davidPodium from "@/assets/comp-2026-david-podium.jpg";
import davidMatch1 from "@/assets/comp-2026-david-match-1.jpg";
import davidMatch2 from "@/assets/comp-2026-david-match-2.jpg";
import malamirPodium from "@/assets/comp-2026-malamir-podium.jpg";
import malamirMatch1 from "@/assets/comp-2026-malamir-match-1.jpg";
import malamirMatch2 from "@/assets/comp-2026-malamir-match-2.jpg";
import milkyPodium from "@/assets/comp-2026-milky-podium.jpg";
import milkyMatch1 from "@/assets/comp-2026-milky-match-1.jpg";
import milkyMatch2 from "@/assets/comp-2026-milky-match-2.jpg";
import cholakovPodium from "@/assets/comp-2026-cholakov-podium.jpg";
import cholakovPodium2 from "@/assets/comp-2026-cholakov-podium-2.jpg";
import cholakovMatch from "@/assets/comp-2026-cholakov-match.jpg";

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
      { src: comp2025_5, alt: 'Подиум на държавното първенство — медалисти от „Берое"' },
      { src: comp2025_6, alt: 'Рефери на маса 3 — държавно първенство по канадска борба' },
    ],
  },
};

const competitors2026: CompetitorData[] = [
  {
    name: "Антон Петров",
    category: "90+ кг",
    medals: [
      { hand: "лява ръка", place: "2 място", color: "silver" },
      { hand: "дясна ръка", place: "3 място", color: "bronze" },
    ],
    cover: antonPodium,
    bio: [
      'Антон Петров е един от стълбовете на младежкия състав на „Берое Армрестлинг". На Републиканското първенство по канадска борба 2026 г. той се изправи срещу най-силните състезатели в категория 90+ кг и се завърна с два медала — сребърен на лява ръка и бронзов на дясна.',
      "Антон тренира упорито през цялата година, съчетавайки силова работа в залата с техническа подготовка на масата. Стилът му е базиран на експлозивна сила и агресивен старт, но през последния сезон работи активно и върху техника на куката и контрола в края на мача.",
      "Този двоен подиум е поредно доказателство, че следващото поколение на клуба е готово да поеме щафетата и да представлява Стара Загора на най-високо ниво.",
    ],
    gallery: [
      { src: antonPodium, alt: "Антон Петров на подиума — Републиканско първенство 2026" },
      { src: antonMatch, alt: "Антон Петров в схватка на масата — Републиканско първенство 2026" },
      { src: antonPodium2, alt: "Антон Петров на подиума в категория 90+ кг — Републиканско първенство 2026" },
    ],
  },
  {
    name: "Щерьо Щерев",
    category: "80 кг",
    medals: [
      { hand: "лява ръка", place: "2 място", color: "silver" },
      { hand: "дясна ръка", place: "3 място", color: "bronze" },
    ],
    cover: shterioPodium,
    bio: [
      'Щерьо Щерев е един от най-обещаващите млади състезатели на „Берое Армрестлинг". На Републиканското първенство по канадска борба 2026 г. в категория 80 кг той се качи на подиума и с двете ръце — сребро на лява и бронз на дясна.',
      "Щерьо съчетава техника, скорост и хладнокръвие на масата. Тренира целогодишно в залата на клуба, където работи както върху силовата база, така и върху специфичните движения за канадска борба — натиск, кука и страничен контрол.",
      'Двата медала в Панагюрище са важна крачка в кариерата му и категоричен знак, че следващото поколение на „Берое" е готово да се бори за върха на националната сцена.',
    ],
    gallery: [
      { src: shterioPodium, alt: "Щерьо Щерев на подиума — Републиканско първенство 2026" },
      { src: shterioMatch, alt: "Щерьо Щерев в схватка на масата — Републиканско първенство 2026" },
    ],
  },
  {
    name: "Давид Каневски",
    medals: [
      { hand: "лява ръка", place: "2 място", color: "silver" },
      { hand: "дясна ръка", place: "2 място", color: "silver" },
    ],
    cover: davidPodium,
    bio: [
      'Давид Каневски е един от младите състезатели на „Берое Армрестлинг", който се изкачва уверено по подиумите на националната сцена. На Републиканското първенство по канадска борба 2026 г. в Панагюрище той се качи на второто стъпало и с двете ръце — два сребърни медала, извоювани с характер и техника.',
      "Давид тренира целогодишно в залата на клуба и съчетава силова работа с активна работа върху техника на масата. Стилът му е базиран на бърз старт, контрол на китката и хладнокръвие в ключовите моменти на мача.",
      'Двата сребърни медала са поредно доказателство, че следващото поколение на „Берое" има характер, дисциплина и амбиция да се бори за върха.',
    ],
    gallery: [
      { src: davidPodium, alt: "Давид Каневски на подиума — Републиканско първенство 2026" },
      { src: davidMatch1, alt: "Давид Каневски в схватка на масата — Републиканско първенство 2026" },
      { src: davidMatch2, alt: "Давид Каневски срещу съперник — Републиканско първенство 2026" },
    ],
  },
  {
    name: "Маламир Михалев",
    category: "90 кг",
    medals: [
      { hand: "лява ръка", place: "2 място", color: "silver" },
      { hand: "дясна ръка", place: "5 място", color: "bronze" },
    ],
    cover: malamirPodium,
    bio: [
      'Маламир Михалев е един от младите състезатели на „Берое Армрестлинг", който продължава да трупа опит и медали на националната сцена. На Републиканското първенство по канадска борба 2026 г. в категория 90 кг той извоюва сребърен медал на лява ръка и завърши на пето място на дясна.',
      "Маламир тренира целогодишно в залата на клуба, като съчетава силова подготовка с техническа работа на масата. Стилът му се отличава с упорство, добра база на лява ръка и желание за развитие във всеки един аспект на спорта.",
      'Среброто на лява ръка е важна стъпка в кариерата му и потвърждение, че следващото поколение на „Берое" има характера да се бори за върха.',
    ],
    gallery: [
      { src: malamirPodium, alt: "Маламир Михалев на подиума — Републиканско първенство 2026" },
      { src: malamirMatch1, alt: "Маламир Михалев в схватка на масата — Републиканско първенство 2026" },
      { src: malamirMatch2, alt: "Маламир Михалев срещу съперник — Републиканско първенство 2026" },
    ],
  },
  {
    name: "Милкияс (Milky)",
    category: "65+ кг",
    medals: [
      { hand: "лява ръка", place: "1 място", color: "gold" },
      { hand: "дясна ръка", place: "1 място", color: "gold" },
    ],
    cover: milkyPodium,
    bio: [
      'Милкияс, познат на всички в залата като Milky, е един от най-ярките млади таланти на „Берое Армрестлинг". На Републиканското първенство по канадска борба 2026 г. в Панагюрище той се качи на най-високото стъпало на подиума и с двете ръце — два златни медала в категория 65+ кг.',
      "Milky съчетава експлозивна сила, отлична техника и хладнокръвие на масата. Тренира упорито целогодишно в залата на клуба, работейки както върху силовата база, така и върху специфичните елементи на спорта — натиск, кука и контрол в крайната фаза на мача.",
      'Двойната титла на Републиканското първенство го утвърждава като един от лидерите на новото поколение на „Берое" и категоричен фаворит за бъдещите международни старти.',
    ],
    gallery: [
      { src: milkyPodium, alt: "Милкияс на първото стъпало на подиума — Републиканско първенство 2026" },
      { src: milkyMatch1, alt: "Милкияс в схватка на масата — Републиканско първенство 2026" },
      { src: milkyMatch2, alt: "Милкияс срещу съперник — Републиканско първенство 2026" },
    ],
  },
  {
    name: "Георги Чолаков",
    category: "110+ кг",
    medals: [
      { hand: "лява ръка", place: "3 място", color: "bronze" },
    ],
    cover: cholakovPodium,
    bio: [
      'Георги Чолаков — президентът и душата на „Берое Армрестлинг" — отново се качи на подиума като състезател. На Републиканското първенство по канадска борба 2026 г. в Панагюрище в категория 110+ кг той извоюва бронзов медал на лява ръка, доказвайки, че години след години остава една от знаковите фигури на българския арм.',
      'Като президент на клуба той организира тренировките, води младите състезатели и продължава да дава личен пример на масата. Опитът, силата и характерът му са фундаментът, върху който се изгражда новото поколение на „Берое".',
      'Бронзът в най-тежката категория е поредно доказателство, че Чолаков не е само лидер извън масата, но и боец, който все още може да премери сили с най-добрите в страната.',
    ],
    gallery: [
      { src: cholakovPodium, alt: "Георги Чолаков на подиума в категория 110+ кг — Републиканско първенство 2026" },
      { src: cholakovPodium2, alt: "Георги Чолаков с трофей на подиума — Републиканско първенство 2026" },
      { src: cholakovMatch, alt: "Георги Чолаков в схватка на масата — Републиканско първенство 2026" },
    ],
  },
];

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
    year: "2026",
    icon: Medal,
    title: "Републиканско първенство по канадска борба 2026г.",
    text: 'Силно представяне на „Берое" на Републиканското първенство — нови медали и нови имена, които се изкачват по подиума за родния клуб.',
    highlight: true,
    competitorsId: "2026-republic",
    image: antonPodium,
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
  const [openCompetitorsId, setOpenCompetitorsId] = useState<string | null>(null);
  const [openCompetitor, setOpenCompetitor] = useState<CompetitorData | null>(null);

  const medalChip = (color: "gold" | "silver" | "bronze") =>
    color === "gold"
      ? "text-warning border-warning/60"
      : color === "silver"
      ? "text-foreground border-foreground/40"
      : "text-orange-400 border-orange-400/40";

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
              const clickable = !!a.competitionId || !!a.competitorsId;
              const handleClick = () => {
                if (a.competitionId) setOpenId(a.competitionId);
                else if (a.competitorsId) setOpenCompetitorsId(a.competitorsId);
              };
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
                          onClick: handleClick,
                          "aria-label": `Виж повече: ${a.title}`,
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
                        {a.competitorsId ? (
                          <>
                            <Users className="h-4 w-4" />
                            Виж състезателите
                          </>
                        ) : (
                          <>
                            <BookOpen className="h-4 w-4" />
                            Прочети статията
                          </>
                        )}
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
                      onClick={handleClick}
                      aria-label={`Виж повече: ${a.title}`}
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
                          {a.competitorsId ? <Users className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                          {a.competitorsId ? "Виж състезателите" : "Отвори статията"}
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

      {openCompetitorsId === "2026-republic" && (
        <div
          className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-md overflow-y-auto animate-fade-up"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenCompetitorsId(null)}
        >
          <div
            className="min-h-full container max-w-5xl py-10 md:py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenCompetitorsId(null)}
              aria-label="Затвори"
              className="sticky top-4 ml-auto flex h-11 w-11 rounded-full bg-primary text-primary-foreground hover:opacity-90 items-center justify-center transition-colors z-10 shadow-elevated"
            >
              ✕
            </button>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.4em] text-warning">2026</span>
              <h2 className="mt-3 font-display text-3xl md:text-6xl tracking-tight gold-text">
                Републиканско първенство 2026
              </h2>
              <p className="mt-4 text-muted-foreground">
                Кликни върху състезател, за да видиш биография, медали и галерия.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {competitors2026.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setOpenCompetitor(c)}
                  className="group relative text-left overflow-hidden rounded-2xl border border-border/60 glass shadow-elevated card-hover focus:outline-none focus:ring-2 focus:ring-warning"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={c.cover}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-2xl text-foreground group-hover:text-warning transition-colors">
                        {c.name}
                      </h3>
                      {c.medals.map((m, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 border text-[10px] uppercase tracking-widest ${medalChip(m.color)}`}
                        >
                          <Medal className="h-3 w-3" />
                          {m.place} {m.hand === "лява ръка" ? "лява" : "дясна"}
                        </span>
                      ))}
                    </div>
                    {c.category && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        Категория {c.category}
                      </p>
                    )}
                    <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-warning">
                      Отвори профил <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {openCompetitor && (
        <CompetitorModal data={openCompetitor} onClose={() => setOpenCompetitor(null)} />
      )}
    </section>
  );
};

export default AchievementsTimeline;
