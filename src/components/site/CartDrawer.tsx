import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { isOpen, setOpen, detailed, setQty, remove, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background border-l-border/60">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl gradient-text">Your Cart</SheetTitle>
          <p className="text-sm text-muted-foreground">
            {count === 0 ? "Empty for now." : `${count} item${count > 1 ? "s" : ""} ready to go.`}
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3">
          {detailed.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <div className="h-16 w-16 rounded-full bg-muted/40 flex items-center justify-center">
                <ShoppingBag className="h-7 w-7 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Add some items to get started.</p>
              <Button onClick={() => setOpen(false)} asChild variant="outline">
                <Link to="/products">Browse products</Link>
              </Button>
            </div>
          ) : (
            detailed.map((d) => (
              <div key={`${d.product.id}-${d.tier.id}`} className="glass rounded-xl p-3 flex gap-3">
                <img src={d.product.image} alt={d.product.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">{d.product.name}</div>
                      <div className="text-xs text-muted-foreground">{d.tier.label}</div>
                    </div>
                    <button
                      onClick={() => remove(d.product.id, d.tier.id)}
                      className="text-muted-foreground hover:text-destructive transition"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 border border-border rounded-lg">
                      <button
                        className="p-1.5 hover:bg-muted/40 rounded-l-lg"
                        onClick={() => setQty(d.product.id, d.tier.id, d.item.quantity - 1)}
                        aria-label="Decrease"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{d.item.quantity}</span>
                      <button
                        className="p-1.5 hover:bg-muted/40 rounded-r-lg"
                        onClick={() => setQty(d.product.id, d.tier.id, d.item.quantity + 1)}
                        aria-label="Increase"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="text-sm font-semibold gradient-text">${d.lineTotal.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {detailed.length > 0 && (
          <div className="border-t border-border/60 pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-display text-2xl font-bold gradient-text">${subtotal.toFixed(2)}</span>
            </div>
            <Button asChild size="lg" className="w-full btn-glow bg-gradient-primary text-primary-foreground font-semibold">
              <Link to="/checkout" onClick={() => setOpen(false)}>Checkout</Link>
            </Button>
            <p className="text-[11px] text-center text-muted-foreground">
              Delivery starts within minutes after we receive your Roblox username.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
