import { Star, Quote } from "lucide-react";

const HIGHLIGHTS = [
  { name: "OpKai_RBLX", rating: 5, text: "Got my Yonko clan in 12 rerolls. Super fast and friendly!" },
  { name: "ZenoBlox", rating: 5, text: "2x Drop activated within 5 minutes. Doubled my farm rate immediately." },
  { name: "PirateKid88", rating: 5, text: "10 Mythical chests gave me 2 mythicals. Worth every cent." },
];

const ReviewsHighlight = () => (
  <section className="container py-12">
    <div className="flex items-end justify-between mb-6">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by players</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mt-1">Real reviews</h2>
      </div>
      <div className="hidden md:flex items-center gap-2 glass rounded-full px-4 py-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-warning text-warning" />)}
        </div>
        <span className="font-display font-bold">4.9</span>
        <span className="text-xs text-muted-foreground">/ 5</span>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-5">
      {HIGHLIGHTS.map((r) => (
        <div key={r.name} className="glass rounded-2xl p-6 card-hover relative">
          <Quote className="h-6 w-6 text-primary/50 absolute top-4 right-4" />
          <div className="flex">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-warning text-warning" : "text-muted"}`} />
            ))}
          </div>
          <p className="mt-3 text-sm text-foreground/90">"{r.text}"</p>
          <div className="mt-4 text-xs font-semibold">{r.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsHighlight;
