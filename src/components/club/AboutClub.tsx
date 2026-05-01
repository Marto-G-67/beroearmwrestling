import { Shield, Target, Heart } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Дисциплина",
    text: "Изграждаме характер чрез труд, постоянство и уважение към съперника и спорта.",
  },
  {
    icon: Target,
    title: "Шампионски дух",
    text: "Подготвяме състезатели за национални, европейски и световни първенства.",
  },
  {
    icon: Heart,
    title: "Семейство",
    text: "Не сме просто клуб — ние сме отбор, в който всеки получава подкрепа и внимание.",
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
        доказваме, че силата не е само във физиката — тя е в характера. Тренираме деца,
        юноши и мъже, организираме турнири и представяме България на международна сцена.
      </p>
    </div>

    <div className="mt-12 grid md:grid-cols-3 gap-5">
      {pillars.map((p) => (
        <div key={p.title} className="glass rounded-2xl p-7 card-hover">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-primary/30">
            <p.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-5 font-display text-2xl tracking-wide text-foreground">{p.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutClub;
