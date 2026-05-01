import { Button } from "@/components/ui/button";
import { ProductTier } from "@/data/products";

type Props = {
  tier: ProductTier;
  productName: string;
  onAdd: () => void;
};

const StickyAddToCart = ({ tier, productName, onAdd }: Props) => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-background/90 backdrop-blur-xl border-t border-border/60 px-4 py-3 animate-fade-up">
    <div className="flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground truncate">{productName}</div>
        <div className="font-display text-lg font-bold gradient-text leading-none">${tier.price.toFixed(2)}</div>
      </div>
      <Button onClick={onAdd} className="btn-glow bg-gradient-primary text-primary-foreground font-semibold px-6 h-11">
        Add to cart
      </Button>
    </div>
  </div>
);

export default StickyAddToCart;
