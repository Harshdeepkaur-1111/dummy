/**
 * SEO & Canonical URL Helper
 * Ensures self-referential canonical URLs matching the current active domain and pathname.
 * Prevents "Not Indexable - Canonicalised" issues across preview and production environments.
 */

export function getSiteUrl(): string {
  if (typeof window !== "undefined" && window.location && window.location.origin) {
    return window.location.origin;
  }
  return (import.meta.env.VITE_SITE_URL as string) || "https://aurix-gold.vercel.app";
}

export function getCanonicalUrl(pathname: string = "/"): string {
  const base = getSiteUrl().replace(/\/+$/, "");
  if (!pathname || pathname === "/") {
    return `${base}/`;
  }
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${cleanPath.replace(/\/+$/, "")}`;
}
