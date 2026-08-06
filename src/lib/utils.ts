import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Return a local optimized image path (prefer .avif then .webp) based on original URL or path
export function getOptimizedImage(src: string) {
  if (!src) return src;
  try {
    const u = new URL(src, 'http://localhost');
    const name = u.pathname.split('/').pop() || '';
    const base = name.split('?')[0].split('.').slice(0, -1).join('.');
    // Prefer avif then webp
    return `/images/${base}.avif`;
  } catch (e) {
    return src;
  }
}
