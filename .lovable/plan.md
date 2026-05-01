# BCM's Shop — Premium Roblox Storefront

A refined, advanced take on the reference design: deep space dark theme with purple/blue neon, glassmorphism, animated particle hero, smooth micro-interactions, and a full e-commerce backend.

## Brand & Visual System

- **Name:** BCM's Shop · *Your place for all of your Roblox needs*
- **Palette:** near-black background `#0A0613`, deep violet surfaces, neon purple `#8B5CF6` + electric blue `#3B82F6` accents, soft cyan glow highlights
- **Typography:** Space Grotesk (display, glowing) + Inter (body) — clean, modern, readable
- **Effects:** glassmorphism cards, animated gradient borders, particle starfield in hero, glow-on-hover, subtle parallax, smooth fade/slide-in on scroll
- **Tone:** premium gaming brand — feels trustworthy, fast, and high-end (not cheap or noisy)

## Site Structure

**Public pages**

- **Home** — particle hero with neon "BCM's Shop" wordmark, trust badges (Instant delivery · Undetected · Roblox ready · Fast support), animated CTAs, Shop categories grid, featured products carousel, live stats counter (orders delivered, happy customers, avg delivery time), testimonials, FAQ
- **Products** — filterable catalog (by game, price, popularity), search, product cards with glow hover, quick-add to cart
- **Product detail** — gallery, variants/tiers, stock indicator, related items, recent reviews
- **Cart & Checkout** — slide-in cart, Stripe checkout, order summary
- **Order confirmation** — collects Roblox username + delivery preferences, shows fulfillment status
- **Reviews** — aggregate page with star breakdown + filters
- **Status** — live indicator (operational / delays / down) per game category, recent incidents
- **Blog** — articles, guides, update posts
- **My Account** — profile, order history with live fulfillment status, saved Roblox username

**Admin dashboard** (role-gated)

- Orders queue (pending → in-progress → delivered) with customer Roblox username, product details, mark-delivered action
- Product CRUD (image, name, description, tiers, stock, category, featured flag)
- Status updates (set per-category status + post incidents)
- Blog editor (create/edit posts, markdown)
- Reviews moderation (approve/hide)
- Basic analytics (revenue, top products, order volume)

## Catalogs (seeded at launch)

Blox Fruits · Anime Vanguards · Tower Defense Simulator · Robux & gift cards / other games — each as a category with sample products you can later edit in the admin.

## Delivery Flow (manual fulfillment)

1. Customer checks out via Stripe
2. Post-payment screen asks for Roblox username + notes
3. Order lands in admin queue as "Pending"
4. You deliver in-game, click "Mark delivered"
5. Customer sees status update in My Account + email notification

## Tech Section *(for reference)*

- **Stack:** existing React + Vite + Tailwind + shadcn, with `framer-motion` for animations and `tsparticles` for the hero
- **Backend:** Lovable Cloud (auth, database, edge functions, storage for product images)
- **Payments:** Lovable's built-in Stripe payments (no account needed to start; test mode immediately)
- **Auth:** email/password + Google sign-in; `profiles` table + separate `user_roles` table (admin role gates the dashboard via a `has_role` security-definer function)
- **Tables:** `profiles`, `user_roles`, `categories`, `products`, `product_tiers`, `orders`, `order_items`, `reviews`, `status_updates`, `blog_posts`
- **Edge functions:** `create-checkout`, `stripe-webhook`, `verify-payment`
- **Security:** RLS on every table; admin actions gated server-side by `has_role`; input validation with zod

## Build Order

1. Design system + global theme (colors, fonts, glass/glow utilities, particle hero component)
2. Home page with all sections + Products listing + Product detail
3. Lovable Cloud + auth (email + Google) + profiles/roles
4. Cart + Stripe checkout + order confirmation with Roblox username capture
5. My Account (order history + status)
6. Reviews, Status, Blog public pages
7. Admin dashboard (orders queue first, then products, then content)
8. Seed catalogs and polish animations

## Out of Scope (for v1)

- Automatic in-game delivery bots
- Multi-currency switching beyond USD display
- Affiliate/referral system
- Live chat (use a "Fast support" contact form instead)

Approve this plan and I'll start building. We can layer extras (referral, multi-currency, live chat) once the core is live.  
and guidement on how to buy the product 