import { useEffect, useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";

const NAMES = [
  "OpKai_RBLX", "ZenoBlox", "PirateKid88", "AceMain", "SailorQueen",
  "DragonFist_RB", "NeonSamurai", "LuffyFan21", "VoidWalker", "ShadowStrike",
  "MythicHunter", "KaitoX", "BlazePhantom", "RavenScar", "EmberKing",
];
const ITEMS = [
  "10 Clan Rerolls", "25 Clan Rerolls", "50 Clan Rerolls",
  "15 Aura Crates", "25 Cosmic Crates", "10 Mythical Chests",
  "15 Secret Chests", "2x Drop Gamepass", "2x Luck Gamepass",
];
const TIMES = ["just now", "1 min ago", "2 min ago", "4 min ago", "6 min ago", "9 min ago"];

const rand = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const ActivityTicker = () => {
  const [tick, setTick] = useState(0);

  // Rebuild a fresh feed every cycle so it feels live
  const feed = useMemo(() => {
    const seen = new Set<string>();
    const out: { id: string; name: string; item: string; time: string }[] = [];
    while (out.length < 12) {
      const name = rand(NAMES);
      if (seen.has(name)) continue;
      seen.add(name);
      out.push({ id: `${name}-${tick}-${out.length}`, name, item: rand(ITEMS), time: rand(TIMES) });
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 12000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full overflow-hidden border-y border-border/40 bg-background/40 backdrop-blur-md">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex gap-8 py-3 animate-marquee whitespace-nowrap">
        {[...feed, ...feed].map((f, i) => (
          <div key={`${f.id}-${i}`} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground shrink-0">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <ShoppingBag className="h-3.5 w-3.5 text-primary" />
            <span className="text-foreground font-medium">{f.name}</span>
            <span>just bought</span>
            <span className="text-primary-glow font-semibold">{f.item}</span>
            <span className="text-muted-foreground/60">· {f.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTicker;
