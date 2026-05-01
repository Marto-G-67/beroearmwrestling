import { Star } from "lucide-react";

const REVIEWS = [
  { name: "OpKai_RBLX", rating: 5, product: "Clan Rerolls", text: "Got my Yonko clan in 12 rerolls. Super fast and friendly!" },
  { name: "ZenoBlox", rating: 5, product: "2x Drop Gamepass", text: "Activated within 5 minutes. Doubled my farm rate immediately." },
  { name: "PirateKid88", rating: 5, product: "Mythical Chests", text: "10 chests gave me 2 mythicals. Worth every cent." },
  { name: "AceMain", rating: 4, product: "Cosmic Crates", text: "Solid loot pool, smooth delivery. Will buy again." },
  { name: "SailorQueen", rating: 5, product: "Aura Crates", text: "Stacked with 2x Luck and got the rarest aura. Insane." },
  { name: "DragonFist_RB", rating: 5, product: "Secret Chests", text: "Pulled a secret on my 7th chest. Legit shop." },
];

const Reviews = () => {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What players say</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mt-1">Reviews</h1>
        <div className="mt-4 inline-flex items-center gap-2 glass rounded-full px-5 py-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-warning text-warning" />)}
          </div>
          <span className="font-display text-xl font-bold">{avg}</span>
          <span className="text-muted-foreground text-sm">/ 5 · {REVIEWS.length}+ reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <div key={i} className="glass rounded-2xl p-6 card-hover">
            <div className="flex">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-warning text-warning" : "text-muted"}`} />
              ))}
            </div>
            <p className="mt-3 text-sm text-foreground/90">"{r.text}"</p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="font-semibold">{r.name}</span>
              <span className="text-muted-foreground">{r.product}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
