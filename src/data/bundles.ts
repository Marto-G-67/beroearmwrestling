import imgClanReroll from "@/assets/p-clan-reroll.jpg";
import imgAura from "@/assets/p-aura-crate.jpg";
import imgCosmic from "@/assets/p-cosmic-crate.jpg";
import imgMythical from "@/assets/p-mythical-chest.jpg";
import img2xDrop from "@/assets/p-2x-drop.jpg";
import img2xLuck from "@/assets/p-2x-luck.jpg";

export type Bundle = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge?: string;
  image: string; // primary image
  images: string[]; // collage
  price: number;
  originalPrice: number;
  contents: { productId: string; tierId: string; label: string }[];
  // Optional limited-time offer; null = always on
  endsAt?: number;
};

const inHours = (h: number) => Date.now() + h * 3_600_000;

export const BUNDLES: Bundle[] = [
  {
    id: "starter",
    slug: "reroll-starter-pack",
    name: "Reroll Starter Pack",
    tagline: "25 Clan Rerolls + permanent 2x Luck. The fastest way to land your dream clan.",
    badge: "Save 20%",
    image: imgClanReroll,
    images: [imgClanReroll, img2xLuck],
    price: 11.99,
    originalPrice: 14.48,
    contents: [
      { productId: "clan-reroll", tierId: "cr-25", label: "25 Clan Rerolls" },
      { productId: "2x-luck", tierId: "2l-1", label: "2x Luck Gamepass (Permanent)" },
    ],
    endsAt: inHours(48),
  },
  {
    id: "farmer",
    slug: "ultimate-farmer-bundle",
    name: "Ultimate Farmer",
    tagline: "Permanent 2x Drop + 2x Luck — double everything, forever.",
    badge: "Best Value",
    image: img2xDrop,
    images: [img2xDrop, img2xLuck],
    price: 16.99,
    originalPrice: 19.98,
    contents: [
      { productId: "2x-drop", tierId: "2d-1", label: "2x Drop Gamepass" },
      { productId: "2x-luck", tierId: "2l-1", label: "2x Luck Gamepass" },
    ],
  },
  {
    id: "crate-king",
    slug: "crate-king-bundle",
    name: "Crate King",
    tagline: "Massive crate haul: 25 Aura + 15 Cosmic + 2x Luck stacked.",
    badge: "Hot",
    image: imgCosmic,
    images: [imgAura, imgCosmic, img2xLuck],
    price: 24.99,
    originalPrice: 30.97,
    contents: [
      { productId: "aura-crate", tierId: "ac-25", label: "25 Aura Crates" },
      { productId: "cosmic-crate", tierId: "cc-15", label: "15 Cosmic Crates" },
      { productId: "2x-luck", tierId: "2l-1", label: "2x Luck Gamepass" },
    ],
    endsAt: inHours(72),
  },
  {
    id: "mythic-hunter",
    slug: "mythic-hunter-bundle",
    name: "Mythic Hunter",
    tagline: "10 Mythical Chests + 2x Luck — chase the rarest gear.",
    badge: "Premium",
    image: imgMythical,
    images: [imgMythical, img2xLuck],
    price: 21.99,
    originalPrice: 24.98,
    contents: [
      { productId: "mythical-chest", tierId: "mc-10", label: "10 Mythical Chests" },
      { productId: "2x-luck", tierId: "2l-1", label: "2x Luck Gamepass" },
    ],
  },
];

export const findBundle = (slug: string) => BUNDLES.find((b) => b.slug === slug);
