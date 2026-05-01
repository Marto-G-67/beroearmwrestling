import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PRODUCTS, ProductTier, Product } from "@/data/products";

export type CartItem = {
  productId: string;
  tierId: string;
  quantity: number;
};

type CartCtx = {
  items: CartItem[];
  add: (productId: string, tierId: string, quantity?: number) => void;
  remove: (productId: string, tierId: string) => void;
  setQty: (productId: string, tierId: string, quantity: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  detailed: Array<{ item: CartItem; product: Product; tier: ProductTier; lineTotal: number }>;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "bcm-cart-v1";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add: CartCtx["add"] = (productId, tierId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId && i.tierId === tierId);
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { productId, tierId, quantity }];
    });
    setOpen(true);
  };

  const remove: CartCtx["remove"] = (productId, tierId) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.tierId === tierId)));
  };

  const setQty: CartCtx["setQty"] = (productId, tierId, quantity) => {
    if (quantity <= 0) return remove(productId, tierId);
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.tierId === tierId ? { ...i, quantity } : i
      )
    );
  };

  const clear = () => setItems([]);

  const detailed = items
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      const tier = product?.tiers.find((t) => t.id === item.tierId);
      if (!product || !tier) return null;
      return { item, product, tier, lineTotal: tier.price * item.quantity };
    })
    .filter(Boolean) as CartCtx["detailed"];

  const count = detailed.reduce((s, d) => s + d.item.quantity, 0);
  const subtotal = detailed.reduce((s, d) => s + d.lineTotal, 0);

  return (
    <Ctx.Provider
      value={{ items, add, remove, setQty, clear, count, subtotal, isOpen, setOpen, detailed }}
    >
      {children}
    </Ctx.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
