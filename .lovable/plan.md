# Stripe Integration for BCM's Shop

Enable Lovable Cloud + Lovable's built-in Stripe payments, replace the simulated checkout with a real Stripe Checkout flow, and persist every paid order in the database. Discord claim instructions are only shown after Stripe confirms payment.

## Step 1 — Enable Lovable Cloud
Backend for the database, edge functions, and Stripe webhook. No external account needed.

## Step 2 — Run payment eligibility check, then enable built-in Stripe
- Run `recommend_payment_provider` against the project (digital game services → expected to recommend Stripe).
- Enable Lovable's built-in Stripe payments. Test mode is available immediately; live mode requires you to claim/verify the Stripe account later from the Cloud dashboard.
- Tax handling: option 3 (no tax automation) for now — simplest, since orders go through manual Discord fulfillment. Easy to upgrade later.

## Step 3 — Database schema
One `orders` table (items stored inline as jsonb — products are static in `data/products.ts`, so no need for a separate join table yet).

```text
orders
  id              uuid pk
  order_code      text unique           -- "BCM-XXXXXX" shown to customer
  stripe_session_id text unique
  roblox_username text
  email           text                  -- collected by Stripe Checkout
  items           jsonb                 -- [{productId,tierId,name,qty,unitPrice}]
  subtotal_cents  int
  total_cents     int
  currency        text  default 'usd'
  status          text  default 'pending'  -- pending | paid | fulfilled | cancelled
  created_at      timestamptz default now()
  paid_at         timestamptz
```

RLS: public can `SELECT` a single row by `order_code` (used by the success page). Inserts/updates only via service-role inside edge functions. Admin policies will be added in the next round when we build the dashboard.

## Step 4 — Create Stripe products
Use `batch_create_product` to mirror every tier from `src/data/products.ts` (Clan Rerolls, Aura/Cosmic Crates, Mythical/Secret Chests, 2x Drop / 2x Luck Gamepasses) using existing USD prices. Each Stripe price id gets stored back in a small lookup so checkout can reference them.

## Step 5 — Edge functions

**`create-checkout`** (public, no JWT)
- Input: cart line items + roblox_username
- Validates cart against server-side product list (never trust client prices)
- Generates `order_code` `BCM-XXXXXX`
- Inserts `orders` row with status `pending`
- Creates Stripe Checkout Session (`mode: payment`, customer email collected by Stripe, `success_url=/order/{order_code}`, `cancel_url=/checkout`)
- Stores `stripe_session_id` on the order
- Returns the Stripe checkout URL

**`stripe-webhook`** (public, no JWT, raw-body signature verified)
- Handles `checkout.session.completed`
- Flips order to `paid`, sets `paid_at`, stores `email` from the session

**`get-order`** (public, no JWT)
- Input: `order_code`
- Returns minimal info (status, items, total, roblox_username) for the success page

## Step 6 — Frontend changes
- **`Checkout.tsx`**: replace simulated submit with a "Pay with Stripe" button that calls `create-checkout` and redirects to the returned Stripe URL. Roblox username field stays. Remove client-side `BCM-XXXXXX` generation.
- **`OrderSuccess.tsx`** (new, route `/order/:code`): polls `get-order` until `status === 'paid'`, then shows the Discord claim flow (join → open ticket in `#claim-order` → paste order code + Roblox username + receipt screenshot). Until paid, shows a "Confirming payment…" state.
- **`App.tsx`**: add the new route.
- Cart is cleared only after Stripe redirects back with a paid order.

## Step 7 — Test
Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC. Verify:
1. Checkout redirects to Stripe.
2. After paying, `/order/BCM-XXXXXX` shows the Discord claim instructions.
3. The `orders` row flips from `pending` → `paid` and the email is stored.

## Out of scope (next round)
- Admin login + role-based dashboard to view, search, and mark orders as `fulfilled`.
- Email/Discord webhook notification when a new paid order arrives.
- Going live on Stripe (claim/verify account when you're ready).
