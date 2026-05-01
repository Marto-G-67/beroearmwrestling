import { MessagesSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What players say</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mt-1">Reviews</h1>
      </div>

      <div className="max-w-2xl mx-auto glass rounded-3xl p-10 text-center">
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-muted" />
          ))}
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold mt-4">No reviews yet</h2>
        <p className="text-muted-foreground mt-3">
          We're a brand new shop. Be one of the first customers and share your experience with the community in our Discord server after your order is delivered.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mt-6 px-6 h-12 rounded-xl bg-gradient-primary text-primary-foreground font-semibold tracking-wider btn-glow"
        >
          <MessagesSquare className="h-4 w-4" />
          Browse products
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
