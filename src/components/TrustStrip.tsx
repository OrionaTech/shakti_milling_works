import { pricing } from "@/lib/site";

const trustPoints = [
  { label: "Premises", value: "Yamunanagar, Haryana" },
  { label: "Service", value: "Carbide tool regrinding" },
  { label: "Courier support", value: "Pan-India" },
  { label: "Public pricing", value: pricing.startingAt },
  { label: "Google Maps", value: "5.0 ★ · 5 reviews" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-steelgray" aria-label="Service highlights">
      <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustPoints.map((point) => (
          <div key={point.label}>
            <p className="text-[11px] uppercase tracking-widest text-charcoal/45">
              {point.label}
            </p>
            <p className="mt-1 font-bold text-charcoal">{point.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
