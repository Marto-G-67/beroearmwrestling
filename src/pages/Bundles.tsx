import { BUNDLES } from "@/data/bundles";
import BundleCard from "@/components/site/BundleCard";
import { Sparkles } from "lucide-react";

const Bundles = () => (
  <div className="container py-12">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-primary" /> Limited deals
      </div>
      <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mt-1">Bundle Deals</h1>
      <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
        Pre-built combos at a discount. One click and we deliver the entire pack to your Roblox account.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {BUNDLES.map((b) => <BundleCard key={b.id} bundle={b} />)}
    </div>
  </div>
);

export default Bundles;
