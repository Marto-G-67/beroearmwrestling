import { Crown, Medal, Award } from "lucide-react";
import president from "@/assets/president-cholakov.png";

const highlights = [
  { icon: Medal, text: "Двукратен златен медалист от Международния турнир в Селановци" },
  { icon: Award, text: "Абсолютна купа за лява ръка — Републиканско студентско първенство" },
  { icon: Crown, text: "Организатор на национални студентски турнири по канадска борба" },
];

const PresidentSection = () => (
  <section id="president" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 smoke-bg opacity-70" />
    <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

    <div className="container relative grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-5">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-3 bg-gradient-to-br from-primary/40 via-accent/30 to-warning/30 rounded-3xl blur-2xl opacity-60" />
          <div className="relative rounded-3xl overflow-hidden border border-primary/30 shadow-elevated">
            <img
              src={president}
              alt="Георги Чолаков — президент на СК Берое"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Президент</div>
              <div className="font-display text-3xl md:text-4xl text-foreground">Георги Чолаков</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">Лидерът на клуба</span>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
          Двигателят зад <span className="gold-text">успехите</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Георги Чолаков е сърцето и душата на СК „Берое". Многократен медалист от
          международни и национални турнири, той посвещава години на популяризирането на
          канадската борба в Стара Загора и в България. Неговата отдаденост, опит и
          непримирим дух превръщат клуба в кузница за шампиони.
        </p>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Освен състезател, Георги е и наставник, организатор и пример за всеки, който
          стъпва за първи път на масата. Под негово ръководство клубът натрупва медали,
          организира турнири и подготвя следващото поколение шампиони.
        </p>

        <ul className="mt-8 space-y-3">
          {highlights.map((h) => (
            <li
              key={h.text}
              className="flex items-start gap-3 glass rounded-xl px-4 py-3 border-l-2 border-primary"
            >
              <h.icon className="h-5 w-5 mt-0.5 text-warning shrink-0" />
              <span className="text-sm md:text-base text-foreground">{h.text}</span>
            </li>
          ))}
        </ul>

        <blockquote className="mt-8 border-l-4 border-warning pl-5 italic text-muted-foreground">
          „Канадската борба не е само сила. Тя е техника, характер и сърце.
          В „Берое" учим именно на това."
        </blockquote>
      </div>
    </div>
  </section>
);

export default PresidentSection;
