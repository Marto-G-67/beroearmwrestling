import Hero from "@/components/site/Hero";
import ProductCard from "@/components/site/ProductCard";
import BundleCard from "@/components/site/BundleCard";
import RecentlyViewed from "@/components/site/RecentlyViewed";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { BUNDLES } from "@/data/bundles";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, ShieldCheck, MessagesSquare, Package } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const featured = PRODUCTS.filter((p) => p.popular);
  const featuredBundles = BUNDLES.slice(0, 2);

  return (
    <>
      <Hero />

      {/* Bundles teaser */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <Package className="h-3.5 w-3.5 text-primary" /> Limited bundles
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mt-1">Bundle deals</h2>
            <p className="text-sm text-muted-foreground mt-1">Save up to 25% with pre-built combos.</p>
          </div>
          <Link to="/bundles" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            View all bundles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredBundles.map((b) => <BundleCard key={b.id} bundle={b} />)}
        </div>
      </section>

      {/* Shop by category */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Shop</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mt-1">Categories</h2>
          </div>
          <Link to="/products" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group relative overflow-hidden rounded-3xl glass card-hover h-64 md:h-80 block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-end max-w-xl">
                <div className="text-xs uppercase tracking-[0.3em] text-primary-glow">Main category</div>
                <h3 className="font-display text-3xl md:text-5xl font-bold mt-2 neon-text">{cat.name}</h3>
                <p className="text-muted-foreground mt-2">{cat.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  Browse {PRODUCTS.length} products <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Most popular
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mt-1">Featured items</h2>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <RecentlyViewed />

      {/* Stats */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Clock, v: "<5 min", l: "Avg delivery time" },
            { icon: ShieldCheck, v: "100%", l: "Safe & undetected" },
            { icon: MessagesSquare, v: "24/7", l: "Discord support" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6 text-center card-hover">
              <s.icon className="h-7 w-7 mx-auto text-primary" />
              <div className="font-display text-3xl font-bold mt-2 gradient-text">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">How it works</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mt-1">Three steps to delivery</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Pick your items", d: "Browse Sailor Piece products and add tiers to your cart." },
            { n: "02", t: "Secure checkout", d: "Pay safely and enter your Roblox username at confirmation." },
            { n: "03", t: "We deliver in-game", d: "We meet you in-game and hand over your items within minutes." },
          ].map((s) => (
            <div key={s.n} className="relative glass rounded-2xl p-6 card-hover">
              <div className="font-display text-6xl font-bold gradient-text opacity-30">{s.n}</div>
              <h3 className="font-display text-xl font-semibold mt-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">FAQ</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mt-1">Common questions</h2>
        </div>
        <div className="max-w-3xl mx-auto glass rounded-2xl px-6 py-2">
          <Accordion type="single" collapsible>
            {[
              { q: "Is this safe for my Roblox account?", a: "Yes. Everything is delivered via legitimate in-game trades or gamepass purchases. We never need your Roblox password." },
              { q: "How fast is delivery?", a: "Most orders are delivered within 5–15 minutes. Larger crate bundles may take a bit longer during peak hours." },
              { q: "What do you need from me?", a: "Just your Roblox username at checkout. We coordinate the in-game meet-up from there." },
              { q: "Do gamepasses last forever?", a: "Yes — 2x Drop and 2x Luck are permanent gamepasses tied to your Roblox account." },
              { q: "What if something goes wrong?", a: "We have 24/7 support. Reach out and we'll fix it or refund you — no questions asked." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-border/40">
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Big CTA */}
      <section className="container py-16">
        <div className="relative overflow-hidden rounded-3xl gradient-border p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[80%] bg-primary/30 blur-[100px] rounded-full" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold neon-text">Ready to power up?</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Join thousands of Sailor Piece players who trust BCM's Shop for fast, safe, and friendly service.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-6 px-8 h-14 rounded-xl bg-gradient-primary text-primary-foreground font-semibold tracking-wider btn-glow"
            >
              Shop now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
