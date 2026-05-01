import { Coins, Trophy } from "lucide-react";
import { useLoyalty, LOYALTY_TIERS } from "@/context/LoyaltyContext";
import { Progress } from "@/components/ui/progress";

const LoyaltyCard = () => {
  const { points, tier, nextTier } = useLoyalty();
  const progress = nextTier
    ? Math.min(100, ((points - tier.min) / (nextTier.min - tier.min)) * 100)
    : 100;

  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Coins className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">BCM Coins</div>
            <div className="font-display text-xl font-bold gradient-text leading-none mt-0.5">{points}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center justify-end gap-1">
            <Trophy className="h-3 w-3" /> Tier
          </div>
          <div className="font-display font-semibold" style={{ color: tier.color }}>{tier.name}</div>
        </div>
      </div>
      <div className="mt-4">
        <Progress value={progress} className="h-1.5" />
        <div className="mt-1.5 text-[11px] text-muted-foreground flex justify-between">
          <span>{tier.name}</span>
          {nextTier ? (
            <span>{nextTier.min - points} coins to {nextTier.name}</span>
          ) : (
            <span>Top tier reached</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
export { LOYALTY_TIERS };
