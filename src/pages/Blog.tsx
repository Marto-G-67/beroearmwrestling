const POSTS = [
  { title: "How to use Clan Rerolls efficiently", date: "May 1, 2026", excerpt: "Tips for stacking rerolls with 2x Luck to maximize your odds at top-tier clans." },
  { title: "Sailor Piece update — what's new", date: "Apr 22, 2026", excerpt: "Recap of the latest patch: new mythical drops, balance changes, and what to grind first." },
  { title: "Mythical vs Cosmic Crates: which is better?", date: "Apr 10, 2026", excerpt: "A breakdown of drop tables, value per dollar, and when to pick each." },
];

const Blog = () => (
  <div className="container py-12 max-w-5xl">
    <div className="text-center mb-10">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">News & guides</div>
      <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mt-1">Blog</h1>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {POSTS.map((p) => (
        <article key={p.title} className="glass rounded-2xl p-6 card-hover">
          <div className="text-xs text-muted-foreground uppercase tracking-widest">{p.date}</div>
          <h2 className="font-display text-xl font-semibold mt-2">{p.title}</h2>
          <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
          <button className="mt-4 text-xs uppercase tracking-widest text-primary">Read more →</button>
        </article>
      ))}
    </div>
  </div>
);

export default Blog;
