import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { Lock, ShoppingBag, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  robloxUsername: z.string().trim().min(3, "Roblox username is required").max(20),
  notes: z.string().max(500).optional(),
});

const Checkout = () => {
  const { detailed, subtotal, clear } = useCart();
  const [form, setForm] = useState({ email: "", robloxUsername: "", notes: "" });
  const [done, setDone] = useState(false);
  const nav = useNavigate();

  if (detailed.length === 0 && !done) {
    return (
      <div className="container py-24 text-center">
        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground" />
        <h1 className="font-display text-3xl mt-4">Your cart is empty</h1>
        <Button asChild className="mt-6"><Link to="/products">Browse products</Link></Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    // Stripe wiring comes in next phase. For now, simulate the order placement.
    toast.success("Order placed! We'll deliver in-game shortly.");
    clear();
    setDone(true);
  };

  if (done) {
    return (
      <div className="container py-24 text-center max-w-xl">
        <CheckCircle2 className="h-16 w-16 mx-auto text-success" />
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 gradient-text">Order received!</h1>
        <p className="text-muted-foreground mt-3">
          We'll meet you in-game on <span className="text-foreground font-semibold">{form.robloxUsername}</span> and deliver your items shortly.
          A confirmation will be sent to <span className="text-foreground">{form.email}</span>.
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <Button asChild variant="outline"><Link to="/products">Back to shop</Link></Button>
          <Button asChild className="bg-gradient-primary text-primary-foreground"><Link to="/">Home</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-5xl">
      <h1 className="font-display text-3xl md:text-5xl font-bold gradient-text">Checkout</h1>
      <p className="text-muted-foreground mt-1">Secure payment · instant in-game delivery.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold">Your details</h2>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 bg-background/50" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="rblx">Roblox username *</Label>
              <Input id="rblx" required value={form.robloxUsername} maxLength={20}
                onChange={(e) => setForm({ ...form, robloxUsername: e.target.value })}
                className="mt-1.5 bg-background/50" placeholder="YourRobloxName" />
              <p className="text-xs text-muted-foreground mt-1">We'll meet this account in Sailor Piece to deliver your order.</p>
            </div>
            <div>
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea id="notes" maxLength={500} value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="mt-1.5 bg-background/50" placeholder="Anything we should know?" />
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold flex items-center gap-2">
              <Lock className="h-4 w-4 text-success" /> Payment
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Secure Stripe checkout will be enabled in the next step. For now, click below to place your order and we'll
              follow up with a payment link.
            </p>
          </div>
        </div>

        <aside className="glass rounded-2xl p-6 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-semibold mb-4">Order summary</h2>
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {detailed.map((d) => (
              <div key={`${d.product.id}-${d.tier.id}`} className="flex gap-3 text-sm">
                <img src={d.product.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="truncate">{d.product.name}</div>
                  <div className="text-xs text-muted-foreground">{d.tier.label} × {d.item.quantity}</div>
                </div>
                <div className="font-semibold">${d.lineTotal.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-border/40 mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="text-success">Free</span></div>
            <div className="flex justify-between font-display text-xl font-bold pt-2">
              <span>Total</span>
              <span className="gradient-text">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full mt-5 btn-glow bg-gradient-primary text-primary-foreground font-semibold tracking-wider">
            Place order
          </Button>
          <p className="text-[11px] text-muted-foreground text-center mt-3">By placing your order you agree to our terms.</p>
        </aside>
      </form>
    </div>
  );
};

export default Checkout;
