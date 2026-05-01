import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";
import { getRecentlyViewed } from "@/lib/recentlyViewed";

const RecentlyViewed = ({ excludeId }: { excludeId?: string }) => {
  const [items, setItems] = useState(() => getRecentlyViewed(PRODUCTS, excludeId));

  // Re-read on mount so navigations refresh the list
  useEffect(() => {
    setItems(getRecentlyViewed(PRODUCTS, excludeId));
  }, [excludeId]);

  if (items.length < 2) return null;

  return (
    <section className="container py-12">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">For you</div>
      <h2 className="font-display text-2xl md:text-3xl font-bold mt-1 mb-6">Recently viewed</h2>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
