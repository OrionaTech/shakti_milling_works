"use client";

import Script from "next/script";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

declare global {
  interface Window {
    Tally?: { openPopup: (formId: string, options?: { layout?: "default" | "modal"; width?: number; hideTitle?: boolean; overlay?: boolean }) => void };
  }
}

export default function FeedbackPopupButton() {
  const openFeedback = () => {
    trackEvent("feedback_popup_open", { placement: "testimonials" });
    if (window.Tally) {
      window.Tally.openPopup(site.feedbackFormId, { layout: "modal", width: 700, hideTitle: true, overlay: true });
      return;
    }
    window.open(site.feedbackUrl, "_blank", "noopener,noreferrer");
  };

  return <><Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" /><button type="button" onClick={openFeedback} className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 font-bold text-white hover:bg-charcoal">Share feedback</button></>;
}
