import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    when: "Скоро",
    title: "Държавно първенство по канадска борба",
    place: "София",
    status: "Предстоящо",
    upcoming: true,
  },
  {
    when: "Скоро",
    title: "Международен турнир — Стара Загора",
    place: 'СК „Берое“, Стара Загора',
    status: "Подготовка",
    upcoming: true,
  },
  {
    when: "2025",
    title: "Национално състезание — 13 медала и 6 квоти за СП",
    place: "България",
    status: "Завършено",
    upcoming: false,
  },
  {
    when: "2024",
    title: "Международен турнир — Девин",
    place: "Девин",
    status: "Завършено",
    upcoming: false,
  },
];

const EventsList = () => (
  <section id="events" className="container py-20 md:py-28">
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-[0.4em] text-primary">Турнири и събития</span>
      <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
        Следваща <span className="gradient-text">битка</span>
      </h2>
    </div>

    <div className="mt-10 grid md:grid-cols-2 gap-4">
      {events.map((e) => (
        <div
          key={e.title}
          className={`glass rounded-2xl p-6 card-hover border ${
            e.upcoming ? "border-primary/40" : "border-border"
          }`}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-widest">
            <span
              className={`flex items-center gap-2 ${
                e.upcoming ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" /> {e.when}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full ${
                e.upcoming
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {e.status}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl text-foreground">{e.title}</h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {e.place}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EventsList;
