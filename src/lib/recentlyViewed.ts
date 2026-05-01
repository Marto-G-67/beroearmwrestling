import { useEffect } from "react";
import { Product } from "@/data/products";

const KEY = "bcm-recently-viewed-v1";
const MAX = 8;

export const trackRecentlyViewed = (productId: string) => {
  try {
    const raw = localStorage.getItem(KEY);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    const next = [productId, ...arr.filter((id) => id !== productId)].slice(0, MAX);
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
};

export const useTrackView = (productId?: string) => {
  useEffect(() => {
    if (productId) trackRecentlyViewed(productId);
  }, [productId]);
};

export const getRecentlyViewed = (all: Product[], excludeId?: string): Product[] => {
  try {
    const raw = localStorage.getItem(KEY);
    const ids: string[] = raw ? JSON.parse(raw) : [];
    return ids
      .filter((id) => id !== excludeId)
      .map((id) => all.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p));
  } catch {
    return [];
  }
};
