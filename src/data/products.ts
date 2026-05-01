import sailorBanner from "@/assets/cat-sailor-piece.jpg";
import imgClanReroll from "@/assets/p-clan-reroll.jpg";
import imgAura from "@/assets/p-aura-crate.jpg";
import imgCosmic from "@/assets/p-cosmic-crate.jpg";
import imgSecret from "@/assets/p-secret-chest.jpg";
import imgMythical from "@/assets/p-mythical-chest.jpg";
import img2xDrop from "@/assets/p-2x-drop.jpg";
import img2xLuck from "@/assets/p-2x-luck.jpg";

export type ProductTier = {
  id: string;
  label: string;
  qty: number;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  short: string;
  description: string;
  image: string;
  badge?: string;
  popular?: boolean;
  rating: number;
  reviewCount: number;
  tiers: ProductTier[];
  features: string[];
};

export const CATEGORIES = [
  {
    id: "sailor-piece",
    name: "Sailor Piece",
    tagline: "All items, gamepasses & boosts",
    image: sailorBanner,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "clan-reroll",
    slug: "clan-rerolls",
    name: "Clan Rerolls",
    category: "sailor-piece",
    short: "Reroll your clan until you get the one you want.",
    description:
      "Spin the clan banner as many times as you need. We deliver rerolls quickly and safely so you land the clan that fits your build — Yonko, Ace, Strawhat and more.",
    image: imgClanReroll,
    badge: "Best Seller",
    popular: true,
    rating: 4.9,
    reviewCount: 312,
    tiers: [
      { id: "cr-10", label: "10 Rerolls", qty: 10, price: 1.99 },
      { id: "cr-25", label: "25 Rerolls", qty: 25, price: 4.49 },
      { id: "cr-50", label: "50 Rerolls", qty: 50, price: 7.99 },
      { id: "cr-100", label: "100 Rerolls", qty: 100, price: 13.99 },
    ],
    features: ["Instant in-game delivery", "Undetected & safe", "Any clan available"],
  },
  {
    id: "aura-crate",
    slug: "aura-crates",
    name: "Aura Crates",
    category: "sailor-piece",
    short: "Pop crates and chase the rarest auras in the game.",
    description:
      "Aura Crates contain a chance at every aura — common to mythical. Stock up and open in bulk for the best odds at top-tier rolls.",
    image: imgAura,
    rating: 4.8,
    reviewCount: 184,
    tiers: [
      { id: "ac-10", label: "10 Crates", qty: 10, price: 2.49 },
      { id: "ac-25", label: "25 Crates", qty: 25, price: 5.49 },
      { id: "ac-50", label: "50 Crates", qty: 50, price: 9.99 },
      { id: "ac-100", label: "100 Crates", qty: 100, price: 17.99 },
    ],
    features: ["All aura tiers possible", "Stack with 2x Luck", "Fast delivery"],
  },
  {
    id: "cosmic-crate",
    slug: "cosmic-crates",
    name: "Cosmic Crates",
    category: "sailor-piece",
    short: "Galaxy-tier loot. The endgame crate.",
    description:
      "Cosmic Crates roll on the highest loot table in Sailor Piece — exclusive cosmic items, top-shelf gear, and exotic drops.",
    image: imgCosmic,
    badge: "Hot",
    popular: true,
    rating: 4.9,
    reviewCount: 156,
    tiers: [
      { id: "cc-5", label: "5 Crates", qty: 5, price: 3.99 },
      { id: "cc-15", label: "15 Crates", qty: 15, price: 9.99 },
      { id: "cc-30", label: "30 Crates", qty: 30, price: 17.99 },
      { id: "cc-60", label: "60 Crates", qty: 60, price: 32.99 },
    ],
    features: ["Endgame loot pool", "Cosmic-exclusive drops", "Best-in-slot odds"],
  },
  {
    id: "secret-chest",
    slug: "secret-chests",
    name: "Secret Chests",
    category: "sailor-piece",
    short: "Locked chests packed with secret-tier items.",
    description:
      "Secret Chests have a chance at every secret item in Sailor Piece. Limited-time pulls and rare cosmetics included.",
    image: imgSecret,
    rating: 4.7,
    reviewCount: 98,
    tiers: [
      { id: "sc-5", label: "5 Chests", qty: 5, price: 2.99 },
      { id: "sc-15", label: "15 Chests", qty: 15, price: 7.49 },
      { id: "sc-30", label: "30 Chests", qty: 30, price: 13.49 },
    ],
    features: ["Secret-tier rolls", "Limited cosmetics", "Stack with luck boosts"],
  },
  {
    id: "mythical-chest",
    slug: "mythical-chests",
    name: "Mythical Chests",
    category: "sailor-piece",
    short: "Gilded chests with the highest mythical pull rates.",
    description:
      "Mythical Chests hold the rarest weapons, fruits, and accessories in Sailor Piece. Open in batches for guaranteed mythical rolls.",
    image: imgMythical,
    badge: "Premium",
    rating: 5.0,
    reviewCount: 71,
    tiers: [
      { id: "mc-3", label: "3 Chests", qty: 3, price: 4.99 },
      { id: "mc-10", label: "10 Chests", qty: 10, price: 14.99 },
      { id: "mc-25", label: "25 Chests", qty: 25, price: 32.99 },
    ],
    features: ["Mythical-tier loot", "Highest rarity gear", "Bulk discount built-in"],
  },
  {
    id: "2x-drop",
    slug: "2x-drop-gamepass",
    name: "2x Drop Gamepass",
    category: "sailor-piece",
    short: "Permanent gamepass — double every drop, forever.",
    description:
      "Permanent 2x Drop Rate gamepass tied directly to your Roblox account. Doubles every loot drop in the game from the moment we deliver.",
    image: img2xDrop,
    popular: true,
    rating: 4.9,
    reviewCount: 244,
    tiers: [{ id: "2d-1", label: "Permanent Gamepass", qty: 1, price: 9.99 }],
    features: ["Permanent — never expires", "Stacks with 2x Luck", "Instant activation"],
  },
  {
    id: "2x-luck",
    slug: "2x-luck-gamepass",
    name: "2x Luck Gamepass",
    category: "sailor-piece",
    short: "Permanent gamepass — double luck on every roll.",
    description:
      "Permanent 2x Luck gamepass. Doubles your odds on crates, chests and clan rerolls — pairs perfectly with our crate bundles.",
    image: img2xLuck,
    popular: true,
    rating: 4.9,
    reviewCount: 218,
    tiers: [{ id: "2l-1", label: "Permanent Gamepass", qty: 1, price: 9.99 }],
    features: ["Permanent — never expires", "Boosts every crate & chest", "Instant activation"],
  },
];

export const findProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
