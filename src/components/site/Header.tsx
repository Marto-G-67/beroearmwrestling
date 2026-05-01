import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/reviews", label: "Reviews" },
  { to: "/status", label: "Status" },
  { to: "/blog", label: "Blog" },
];

const Header = () => {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-primary p-[2px] animate-pulse-glow">
            <div className="h-full w-full rounded-[10px] bg-background flex items-center justify-center">
              <img src={logo} alt="BCM's Shop" className="h-7 w-7 object-contain" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl font-bold gradient-text">BCM's Shop</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Roblox · Sailor Piece</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider transition-all ${
                  isActive
                    ? "text-primary-foreground bg-primary/15 shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="relative border-border/60 hover:border-primary hover:shadow-glow"
            onClick={() => setOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground animate-scale-in">
                {count}
              </span>
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-border/60"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-up">
          <nav className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider ${
                    isActive ? "bg-primary/15 text-foreground" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
