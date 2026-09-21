import { useEffect } from "react";

/**
 * SEO & Canonical URL Helper
 * Guarantees exactly 1 authoritative canonical tag per page targeting https://aurix-gold.vercel.app
 */

export const CANONICAL_SITE_URL = "https://aurix-gold.vercel.app";

export function getSiteUrl(): string {
  return CANONICAL_SITE_URL;
}

export function getCanonicalUrl(pathname: string = "/"): string {
  if (!pathname || pathname === "/" || pathname === "") {
    return `${CANONICAL_SITE_URL}/`;
  }
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${CANONICAL_SITE_URL}${cleanPath.replace(/\/+$/, "")}`;
}

/**
 * Enforces strictly 1 canonical <link> element in document.head.
 * Updates the existing canonical tag's href in-place so that
 * the React reconciler and DOM trees are never disrupted.
 */
export function enforceSingleCanonical(targetHref: string) {
  if (typeof document === "undefined") return;

  const canonicals = document.querySelectorAll('link[rel="canonical"]');
  if (canonicals.length === 0) {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = targetHref;
    document.head.appendChild(link);
  } else {
    // Update the authoritative canonical tag's href in-place
    (canonicals[0] as HTMLLinkElement).href = targetHref;
    // For any stray duplicate links (e.g. injected externally),
    // update their href as well rather than calling .remove(), which avoids
    // disrupting any reconciler references.
    for (let i = 1; i < canonicals.length; i++) {
      (canonicals[i] as HTMLLinkElement).href = targetHref;
    }
  }
}

/**
 * React hook to synchronize and enforce a single canonical URL on route change
 */
export function useCanonical(pathname: string) {
  const canonicalUrl = getCanonicalUrl(pathname);
  useEffect(() => {
    enforceSingleCanonical(canonicalUrl);
  }, [canonicalUrl]);
  return canonicalUrl;
}
