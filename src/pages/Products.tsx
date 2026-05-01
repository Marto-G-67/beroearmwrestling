import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/site/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc">("popular");

  const filtered = PRODUCTS.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return Math.min(...a.tiers.map(t => t.price)) - Math.min(...b.tiers.map(t => t.price));
    if (sort === "price-desc") return Math.min(...b.tiers.map(t => t.price)) - Math.min(...a.tiers.map(t => t.price));
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.rating - a.rating;
  });

  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Catalog</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mt-1">Sailor Piece</h1>
        <p className="text-muted-foreground mt-2">All items, gamepasses and boosts.</p>
      </div>

      <div className="glass rounded-2xl p-4 flex flex-col md:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9 bg-background/50"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            { id: "popular", l: "Popular" },
            { id: "price-asc", l: "Price ↑" },
            { id: "price-desc", l: "Price ↓" },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setSort(s.id as typeof sort)}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-medium transition ${
                sort === s.id ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.l}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sorted.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {sorted.length === 0 && <div className="text-center text-muted-foreground py-16">No products found.</div>}
    </div>
  );
};

export default Products;
