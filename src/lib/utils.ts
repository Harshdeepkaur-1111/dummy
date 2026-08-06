import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Return a local optimized image path based on original URL or path.
// Only rewrite local /images paths and preserve external URLs.
export function getOptimizedImage(src: string) {
  if (!src) return src;
  const localImageMatch = src.match(/^\/images\/(.+)\.(jpe?g|png|webp|avif)$/i);
  if (!localImageMatch) {
    return src;
  }

  const [, base, extension] = localImageMatch;
  const ext = extension.toLowerCase();

  if (ext === 'avif' || ext === 'webp') {
    return src;
  }

  return `/images/${base}.avif`;
}
