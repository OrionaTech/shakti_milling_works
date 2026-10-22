"use client";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: EventParameters) => void;
  }
}

export function trackEvent(eventName: string, parameters: EventParameters = {}) {
  if (!process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || typeof window === "undefined") return;
  window.gtag?.("event", eventName, parameters);
}
