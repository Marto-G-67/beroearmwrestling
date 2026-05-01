import { Link } from "react-router-dom";
import { Shield, Zap, Headphones } from "lucide-react";

const Footer = () => (
  <footer className="mt-24 border-t border-border/60 bg-background/40 backdrop-blur-md">
    <div className="container py-12 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="font-display text-2xl font-bold gradient-text">BCM's Shop</div>
        <p className="mt-3 text-sm text-muted-foreground max-w-md">
          Your trusted source for Sailor Piece items, gamepasses, and boosts. Fast delivery,
          undetected, and friendly support — built by Roblox players for Roblox players.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
            <Shield className="h-3.5 w-3.5 text-primary" /> Secure Payments
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
            <Zap className="h-3.5 w-3.5 text-secondary-glow" /> Instant Delivery
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
            <Headphones className="h-3.5 w-3.5 text-accent" /> 24/7 Support
          </span>
        </div>
      </div>
      <div>
        <div className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-3">Shop</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
          <li><Link to="/products" className="hover:text-primary">Sailor Piece</Link></li>
          <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
        </ul>
      </div>
      <div>
        <div className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-3">Support</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/status" className="hover:text-primary">Service Status</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Guides & Updates</Link></li>
          <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} BCM's Shop. Not affiliated with Roblox Corporation.</span>
        <span>Crafted for the Roblox community.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
