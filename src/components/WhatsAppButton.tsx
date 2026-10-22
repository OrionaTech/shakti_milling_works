import TrackedLink from "@/components/TrackedLink";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I would like a quote for end mill/tool regrinding."
  );

  const href = site.contact.whatsappE164
    ? `https://wa.me/${site.contact.whatsappE164}?text=${message}`
    : "#contact-details";

  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      eventName="whatsapp_click"
      eventParameters={{ placement: "floating_button" }}
      aria-label="Contact Shakti Milling Works on WhatsApp"
      className="fixed bottom-5 right-5 bg-trust text-white rounded-full px-5 py-3 shadow-xl z-50 font-bold hover:scale-105 transition-transform"
    >
      WhatsApp Us
    </TrackedLink>
  );
}
