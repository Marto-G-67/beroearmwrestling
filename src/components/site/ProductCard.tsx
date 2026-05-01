import { Link } from "react-router-dom";
import { Star, Zap } from "lucide-react";
import { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const cheapest = Math.min(...product.tiers.map((t) => t.price));
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative glass rounded-2xl overflow-hidden card-hover flex flex-col"
    >
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-primary text-primary-foreground shadow-glow">
          {product.badge}
        </span>
      )}
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 flex-1">{product.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" />
            <span className="font-medium text-foreground">{product.rating}</span>
            <span>({product.reviewCount})</span>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">From</div>
            <div className="font-display text-lg font-bold gradient-text">${cheapest.toFixed(2)}</div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-secondary-glow">
          <Zap className="h-3 w-3" /> Instant delivery
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
