import { CheckCircle2 } from "lucide-react";

const Status = () => {
  const services = [
    { name: "Sailor Piece — Clan Rerolls", status: "Operational" },
    { name: "Sailor Piece — Aura Crates", status: "Operational" },
    { name: "Sailor Piece — Cosmic Crates", status: "Operational" },
    { name: "Sailor Piece — Secret Chests", status: "Operational" },
    { name: "Sailor Piece — Mythical Chests", status: "Operational" },
    { name: "Sailor Piece — Gamepasses (2x Drop / 2x Luck)", status: "Operational" },
    { name: "Customer Support", status: "Operational" },
  ];

  return (
    <div className="container py-12 max-w-4xl">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Live</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mt-1">Service status</h1>
      </div>

      <div className="glass rounded-2xl p-6 mb-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-success" />
        </div>
        <div>
          <div className="font-display text-xl font-semibold">All systems operational</div>
          <div className="text-sm text-muted-foreground">Average delivery time: under 5 minutes.</div>
        </div>
      </div>

      <div className="glass rounded-2xl divide-y divide-border/40">
        {services.map((s) => (
          <div key={s.name} className="flex items-center justify-between p-4">
            <span className="text-sm">{s.name}</span>
            <span className="flex items-center gap-2 text-xs text-success">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" /> {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
