import { useParams, Link } from "react-router-dom";
import { findBundle } from "@/data/bundles";
import { findProduct } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { ArrowLeft, Check, Package } from "lucide-react";
import Countdown from "@/components/site/Countdown";

const BundleDetail = () => {
  const { slug } = useParams();
  const bundle = slug ? findBundle(slug) : undefined;
  const { add, setOpen } = useCart();

  if (!bundle) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-3xl">Bundle not found</h1>
        <Button asChild className="mt-6"><Link to="/bundles">Back to bundles</Link></Button>
      </div>
    );
  }

  const savings = bundle.originalPrice - bundle.price;

  const addAll = () => {
    bundle.contents.forEach((c) => add(c.productId, c.tierId, 1));
    setOpen(true);
    toast.success(`${bundle.name} added — saved $${savings.toFixed(2)}!`);
  };

  return (
    <div className="container py-10">
      <Link to="/bundles" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1 mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to bundles
      </Link>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="glass rounded-3xl overflow-hidden p-3">
          <div className="grid grid-cols-2 gap-2">
            {bundle.images.map((img, i) => (
              <img key={i} src={img} alt="" className="aspect-square w-full object-cover rounded-2xl" />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary-glow">Sailor Piece · Bundle</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">{bundle.name}</h1>
          <p className="mt-3 text-muted-foreground">{bundle.tagline}</p>

          {bundle.endsAt && (
            <div className="mt-4">
              <Countdown endsAt={bundle.endsAt} label="Limited offer ends in" />
            </div>
          )}

          <div className="mt-6 glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">What's inside</div>
            <ul className="space-y-2">
              {bundle.contents.map((c, i) => {
                const p = findProduct(
                  // products store doesn't expose by id; this is fine — label is enough
                  ""
                );
                void p;
                return (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Package className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span className="font-medium">{c.label}</span>
                    <Check className="h-4 w-4 text-success ml-auto" />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-6 flex items-end gap-4">
            <div>
              <div className="text-sm text-muted-foreground line-through">${bundle.originalPrice.toFixed(2)}</div>
              <div className="font-display text-4xl font-bold gradient-text">${bundle.price.toFixed(2)}</div>
            </div>
            <div className="text-sm text-success font-semibold mb-2">You save ${savings.toFixed(2)}</div>
          </div>

          <Button onClick={addAll} size="lg" className="mt-5 w-full btn-glow bg-gradient-primary text-primary-foreground font-semibold tracking-wider h-14">
            Add bundle to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BundleDetail;
