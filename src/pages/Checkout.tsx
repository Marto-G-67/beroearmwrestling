import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { Lock, ShoppingBag, CheckCircle2, MessageCircle, Copy, Ticket, Receipt } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import RobloxUsernameField from "@/components/site/RobloxUsernameField";

// TODO: replace with the real BCM's Shop Discord invite
const DISCORD_INVITE = "https://discord.gg/your-invite";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  robloxUsername: z.string().trim().min(3, "Roblox username is required").max(20),
  notes: z.string().max(500).optional(),
});

const Checkout = () => {
  const { detailed, subtotal, clear } = useCart();
  const [form, setForm] = useState({ email: "", robloxUsername: "", notes: "" });
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState("");
  const nav = useNavigate();

  const total = subtotal;

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
    const id = "BCM-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    toast.success("Order placed! Join our Discord to claim your items.");
    clear();
    setDone(true);
  };

  if (done) {
    return (
      <div className="container py-16 max-w-2xl">
        <div className="text-center">
          <CheckCircle2 className="h-16 w-16 mx-auto text-success" />
          <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 gradient-text">Order received!</h1>
          <p className="text-muted-foreground mt-3">
            Order <span className="text-foreground font-mono font-semibold">{orderId}</span> · confirmation sent to{" "}
            <span className="text-foreground">{form.email}</span>
          </p>
        </div>

        <div className="glass rounded-2xl p-6 mt-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold">Claim your items on Discord</h2>
              <p className="text-xs text-muted-foreground">Delivery is handled in our private server.</p>
            </div>
          </div>

          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary grid place-items-center font-semibold text-xs">1</span>
              <span>Join the BCM's Shop Discord using the link below.</span>
            </li>
            <li className="flex gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary grid place-items-center font-semibold text-xs">2</span>
              <span>Open a <span className="inline-flex items-center gap-1 font-semibold"><Ticket className="h-3.5 w-3.5" />ticket</span> in the <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-muted">#claim-order</span> channel.</span>
            </li>
            <li className="flex gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary grid place-items-center font-semibold text-xs">3</span>
              <span className="flex-1">
                Send a <span className="inline-flex items-center gap-1 font-semibold"><Receipt className="h-3.5 w-3.5" />picture of your receipt</span>, your order ID,
                and your Roblox username (<span className="text-foreground font-semibold">{form.robloxUsername}</span>).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary grid place-items-center font-semibold text-xs">4</span>
              <span>A staff member verifies your order and delivers your items in-game. Usually within minutes.</span>
            </li>
          </ol>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              asChild
              size="lg"
              className="flex-1 bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold"
            >
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" /> Join Discord & open ticket
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                navigator.clipboard.writeText(orderId);
                toast.success("Order ID copied");
              }}
            >
              <Copy className="h-4 w-4 mr-2" /> Copy order ID
            </Button>
          </div>
        </div>

        <div className="mt-6 flex gap-3 justify-center">
          <Button asChild variant="outline"><Link to="/products">Back to shop</Link></Button>
          <Button asChild className="bg-gradient-primary text-primary-foreground"><Link to="/">Home</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-5xl">
      <h1 className="font-display text-3xl md:text-5xl font-bold gradient-text">Checkout</h1>
      <p className="text-muted-foreground mt-1">Secure payment · delivery via Discord ticket.</p>

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
              <div className="mt-1.5">
                <RobloxUsernameField
                  value={form.robloxUsername}
                  onChange={(v) => setForm({ ...form, robloxUsername: v })}
                />
              </div>
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
              <MessageCircle className="h-4 w-4 text-primary" /> How delivery works
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              After placing your order, you'll get a link to our private Discord. Open a ticket, send a picture of your receipt,
              and a staff member will verify and deliver your items in-game.
            </p>
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
              <span className="gradient-text">${total.toFixed(2)}</span>
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
