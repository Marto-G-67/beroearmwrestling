import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Shield, Gamepad2, Zap, ArrowRight, Star } from "lucide-react";

const badges = [
  { icon: Rocket, label: "Instant delivery" },
  { icon: Shield, label: "Undetected" },
  { icon: Gamepad2, label: "Roblox ready" },
  { icon: Zap, label: "Fast support" },
];

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-60" />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[120%] bg-primary/20 blur-[120px] rounded-full" />
    <div className="absolute top-40 -right-20 h-72 w-72 bg-secondary/30 blur-[100px] rounded-full animate-pulse-glow" />
    <div className="absolute top-60 -left-20 h-72 w-72 bg-accent/20 blur-[100px] rounded-full" />

    <div className="container relative pt-16 md:pt-24 pb-20 md:pb-32 text-center">
      <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs md:text-sm animate-fade-up">
        <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
        <span className="text-muted-foreground">BCM's Shop</span>
        <span className="text-foreground/70">•</span>
        <span className="font-medium">Sailor Piece all-in-one shop</span>
      </div>

      <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight neon-text animate-fade-up" style={{ animationDelay: "0.1s" }}>
        BCM's Shop
      </h1>

      <p className="mt-5 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Your place for all of your Roblox needs. Clan rerolls, crates, chests and gamepasses for Sailor Piece — delivered fast.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        {badges.map((b) => (
          <span key={b.label} className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs md:text-sm">
            <b.icon className="h-3.5 w-3.5 text-primary" />
            {b.label}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <Button asChild size="lg" className="btn-glow bg-gradient-primary text-primary-foreground font-semibold tracking-wider px-8 h-14 text-base">
          <Link to="/products">
            Enter Shop <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-border/80 h-14 px-8 hover:border-primary hover:shadow-glow tracking-wider">
          <Link to="/reviews">
            <Star className="mr-2 h-4 w-4 fill-warning text-warning" /> Reviews
          </Link>
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
        {[
          { v: "Secure", l: "Payments" },
          { v: "Fast", l: "Delivery" },
          { v: "High", l: "Quality" },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-4 md:p-5 text-center card-hover">
            <div className="font-display text-2xl md:text-4xl font-bold text-warning">{s.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
