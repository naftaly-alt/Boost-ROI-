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

export function trackCustom(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const utm = captureUtm(window.location.search);
  if (window.fbq) window.fbq("trackCustom", name, { ...params, ...utm });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params, ...utm });
}

export function pageView() {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "PageView");
}

export function trackLead(contentName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", { content_name: contentName });
  }
}
