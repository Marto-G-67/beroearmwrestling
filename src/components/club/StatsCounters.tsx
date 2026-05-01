import { useEffect, useRef, useState } from "react";
import { Trophy, Medal, Users, Globe2 } from "lucide-react";

const stats = [
  { icon: Medal, value: 50, suffix: "+", label: "Спечелени медала" },
  { icon: Trophy, value: 6, suffix: "", label: "Квоти за СП 2025" },
  { icon: Users, value: 30, suffix: "+", label: "Активни състезатели" },
  { icon: Globe2, value: 10, suffix: "+", label: "Международни турнира" },
];

const useCount = (target: number, run: boolean, duration = 1400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
};

const StatCard = ({ stat, run }: { stat: typeof stats[number]; run: boolean }) => {
  const v = useCount(stat.value, run);
  const Icon = stat.icon;
  return (
    <div className="glass rounded-xl p-6 md:p-8 text-center card-hover">
      <Icon className="h-7 w-7 md:h-8 md:w-8 mx-auto text-primary" />
      <div className="mt-3 font-display text-4xl md:text-6xl gold-text">
        {v}
        {stat.suffix}
      </div>
      <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
        {stat.label}
      </div>
    </div>
  );
};

const StatsCounters = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s) => (
          <StatCard key={s.label} stat={s} run={run} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounters;
