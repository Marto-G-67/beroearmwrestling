import { User } from "lucide-react";

const trainers = [
  {
    name: "Старши треньор",
    role: "Главен треньор",
    bio: "Многогодишен опит в подготовката на състезатели за национални и международни първенства.",
  },
  {
    name: "Треньор по техника",
    role: "Техника и тактика",
    bio: "Специалист по техника на ръката, контрол на захвата и ситуационна борба на масата.",
  },
  {
    name: "Треньор по сила",
    role: "Сила и кондиция",
    bio: "Изгражда силова база, превенция на травми и индивидуални програми за всеки спортист.",
  },
];

const TrainersGrid = () => (
  <section id="trainers" className="container py-20 md:py-28">
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-[0.4em] text-primary">Треньорски екип</span>
      <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
        Хората, които те <span className="gradient-text">правят шампион</span>
      </h2>
      <p className="mt-5 text-muted-foreground">
        Опитни треньори с дългогодишен състезателски и педагогически стаж. Индивидуален
        подход към всеки спортист — от първата тренировка до подиума.
      </p>
    </div>

    <div className="mt-12 grid md:grid-cols-3 gap-5">
      {trainers.map((t) => (
        <div key={t.name} className="glass rounded-2xl p-6 card-hover text-center">
          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center">
            <User className="h-10 w-10 text-primary" />
          </div>
          <h3 className="mt-5 font-display text-2xl text-foreground">{t.name}</h3>
          <div className="text-xs uppercase tracking-widest text-primary mt-1">{t.role}</div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TrainersGrid;
