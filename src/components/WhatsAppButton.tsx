const phone = "918572068977";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I would like a quote for end mill/tool regrinding."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Shakti Milling Works on WhatsApp"
      className="fixed bottom-5 right-5 bg-trust text-white rounded-full px-5 py-3 shadow-xl z-50 font-bold hover:scale-105 transition-transform"
    >
      WhatsApp Us
    </a>
  );
}