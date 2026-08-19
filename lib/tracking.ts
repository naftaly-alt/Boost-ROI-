"use client";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string };
    _fbq?: unknown;
    dataLayer?: Record<string, unknown>[];
  }
}

export { META_PIXEL_ID } from "./meta";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const UTM_STORAGE_KEY = "boostroi_utm";

export function captureUtm(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const utm: UtmParams = {};
  let found = false;
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v) {
      utm[key] = v;
      found = true;
    }
  }
  if (typeof window === "undefined") return utm;
  if (found) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    return utm;
  }
  const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as UtmParams;
    } catch {
      return {};
    }
  }
  return {};
}

// The pixel base script loads via next/script strategy="afterInteractive", which
// runs very early but isn't guaranteed to beat every component's own mount effect.
// Rather than silently dropping a call when window.fbq isn't defined yet, wait
// briefly for it to appear (it's defined synchronously as soon as the base
// script's inline code runs, well before the actual fbevents.js file loads).
function whenFbqReady(fn: () => void) {
  if (typeof window === "undefined") return;
  if (window.fbq) {
    fn();
    return;
  }
  let attempts = 0;
  const id = setInterval(() => {
    attempts += 1;
    if (window.fbq) {
      clearInterval(id);
      fn();
    } else if (attempts > 40) {
      clearInterval(id);
    }
  }, 50);
}

export function trackCustom(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const utm = captureUtm(window.location.search);
  whenFbqReady(() => window.fbq?.("trackCustom", name, { ...params, ...utm }));
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params, ...utm });
}

export function pageView() {
  whenFbqReady(() => window.fbq?.("track", "PageView"));
}

export function trackLead(contentName: string) {
  whenFbqReady(() => window.fbq?.("track", "Lead", { content_name: contentName }));
}
