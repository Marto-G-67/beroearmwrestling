import { Link } from "react-router-dom";
import { Bundle } from "@/data/bundles";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Package } from "lucide-react";

const BundleCard = ({ bundle }: { bundle: Bundle }) => {
  const { add, setOpen } = useCart();
  const savings = bundle.originalPrice - bundle.price;
  const pct = Math.round((savings / bundle.originalPrice) * 100);

  const addAll = () => {
    bundle.contents.forEach((c) => add(c.productId, c.tierId, 1));
    setOpen(true);
    toast.success(`${bundle.name} added — saved $${savings.toFixed(2)}!`);
  };

  return (
    <div className="group glass rounded-2xl overflow-hidden card-hover flex flex-col">
      {bundle.badge && (
        <span className="absolute m-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-primary text-primary-foreground shadow-glow">
          {bundle.badge}
        </span>
      )}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
        <div className="absolute inset-0 grid grid-cols-2 gap-1">
          {bundle.images.slice(0, 2).map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-warning/90 text-[10px] font-bold text-background">
          -{pct}%
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">{bundle.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{bundle.tagline}</p>

        <ul className="mt-3 space-y-1.5 text-xs">
          {bundle.contents.map((c, i) => (
            <li key={i} className="flex items-center gap-2 text-muted-foreground">
              <Package className="h-3 w-3 text-primary" />
              <span className="text-foreground/90">{c.label}</span>
            </li>
          ))}
        </ul>


        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-xs text-muted-foreground line-through">${bundle.originalPrice.toFixed(2)}</div>
            <div className="font-display text-2xl font-bold gradient-text leading-none">${bundle.price.toFixed(2)}</div>
          </div>
          <div className="text-xs text-success font-semibold">Save ${savings.toFixed(2)}</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button asChild variant="outline" className="border-border/80 hover:border-primary">
            <Link to={`/bundles/${bundle.slug}`}>Details</Link>
          </Button>
          <Button onClick={addAll} className="btn-glow bg-gradient-primary text-primary-foreground font-semibold">
            Add bundle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BundleCard;
