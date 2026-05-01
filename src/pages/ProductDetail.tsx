import { useParams, Link } from "react-router-dom";
import { findProduct, PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, Check, ArrowLeft, Zap, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import ProductCard from "@/components/site/ProductCard";
import RecentlyViewed from "@/components/site/RecentlyViewed";
import StickyAddToCart from "@/components/site/StickyAddToCart";
import { useTrackView } from "@/lib/recentlyViewed";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = slug ? findProduct(slug) : undefined;
  const { add } = useCart();
  const [tierId, setTierId] = useState(product?.tiers[0].id ?? "");
  useTrackView(product?.id);

  if (!product) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <Button asChild className="mt-6"><Link to="/products">Back to shop</Link></Button>
      </div>
    );
  }

  const tier = product.tiers.find((t) => t.id === tierId) ?? product.tiers[0];
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    add(product.id, tier.id, 1);
    toast.success(`${product.name} (${tier.label}) added to cart`);
  };

  return (
    <div className="container py-10 pb-24 lg:pb-10">
      <Link to="/products" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1 mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative glass rounded-3xl overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-primary text-primary-foreground shadow-glow">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary-glow">Sailor Piece</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-warning text-warning" : "text-muted"}`} />
              ))}
            </div>
            <span className="text-muted-foreground">{product.rating} · {product.reviewCount} reviews</span>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

          <ul className="mt-5 space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Choose tier</div>
            <div className="grid grid-cols-2 gap-2">
              {product.tiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTierId(t.id)}
                  className={`relative p-4 rounded-xl text-left transition ${
                    tierId === t.id
                      ? "border-2 border-primary bg-primary/10 shadow-glow"
                      : "border border-border bg-muted/20 hover:border-primary/50"
                  }`}
                >
                  <div className="text-sm font-semibold">{t.label}</div>
                  <div className="font-display text-xl font-bold gradient-text mt-1">${t.price.toFixed(2)}</div>
                  {t.qty > 1 && (
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      ${(t.price / t.qty).toFixed(2)} each
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAdd} size="lg" className="flex-1 btn-glow bg-gradient-primary text-primary-foreground font-semibold tracking-wider h-14">
              Add to Cart — ${tier.price.toFixed(2)}
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-6 border-border/80 hover:border-primary">
              <Link to="/checkout" onClick={handleAdd}>Buy now</Link>
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
            <div className="glass rounded-xl px-3 py-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-secondary-glow" /> Instant
            </div>
            <div className="glass rounded-xl px-3 py-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" /> Safe
            </div>
            <div className="glass rounded-xl px-3 py-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> 24/7
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">You may also like</h2>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <RecentlyViewed excludeId={product.id} />

      <StickyAddToCart tier={tier} productName={product.name} onAdd={handleAdd} />
    </div>
  );
};

export default ProductDetail;
