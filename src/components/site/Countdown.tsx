import { useEffect, useState } from "react";

type Props = {
  endsAt: number; // epoch ms
  label?: string;
  className?: string;
};

const pad = (n: number) => n.toString().padStart(2, "0");

const Countdown = ({ endsAt, label = "Ends in", className = "" }: Props) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, endsAt - now);
  if (diff === 0) return null;

  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  return (
    <div className={`inline-flex items-center gap-2 text-xs ${className}`}>
      <span className="text-muted-foreground uppercase tracking-widest">{label}</span>
      <span className="font-display font-bold tabular-nums text-warning">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    </div>
  );
};

export default Countdown;
