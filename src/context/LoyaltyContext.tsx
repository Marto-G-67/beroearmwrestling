import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type LoyaltyCtx = {
  points: number;
  tier: { name: string; min: number; perks: string[]; color: string };
  nextTier: { name: string; min: number } | null;
  addPoints: (n: number) => void;
  redeem: (n: number) => boolean;
};

const TIERS = [
  { name: "Sailor", min: 0, perks: ["Earn 1 BCM coin per $1 spent"], color: "hsl(220 30% 70%)" },
  { name: "Captain", min: 100, perks: ["+10% bonus coins", "Priority delivery queue"], color: "hsl(265 89% 66%)" },
  { name: "Yonko", min: 500, perks: ["+25% bonus coins", "VIP support", "Exclusive bundles"], color: "hsl(40 95% 60%)" },
] as const;

const KEY = "bcm-loyalty-v1";
const Ctx = createContext<LoyaltyCtx | null>(null);

export const LoyaltyProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw).points ?? 0 : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify({ points }));
  }, [points]);

  const addPoints = (n: number) => setPoints((p) => Math.max(0, p + Math.round(n)));
  const redeem = (n: number) => {
    if (points < n) return false;
    setPoints((p) => p - n);
    return true;
  };

  const tier = [...TIERS].reverse().find((t) => points >= t.min) ?? TIERS[0];
  const next = TIERS.find((t) => t.min > points) ?? null;

  return (
    <Ctx.Provider value={{ points, tier, nextTier: next, addPoints, redeem }}>
      {children}
    </Ctx.Provider>
  );
};

export const useLoyalty = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLoyalty must be used inside LoyaltyProvider");
  return ctx;
};

export const LOYALTY_TIERS = TIERS;
