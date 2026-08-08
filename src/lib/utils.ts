import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the real image path.
 *
 * We intentionally do not generate AVIF/WebP paths here because
 * the public/images folder contains mixed image formats and some
 * generated variants may not exist.
 */
export function getOptimizedImage(src: string) {
  return src;
}