import { pricing } from "@/lib/site";
import { about } from "@/lib/about";
import { site } from "@/lib/site";

const trustPoints = [
  { label: "Premises", value: "Yamunanagar, Haryana" },
  { label: "Service", value: "Carbide tool regrinding" },
  { label: "Pickup & delivery", value: "By our own team" },
  { label: "Public pricing", value: pricing.startingAt },
  {
    label: "Google Maps",
    value: `${site.googleRating.value.toFixed(1)} ★ · ${site.googleRating.reviewCount} reviews`,
    href: about.mapsUrl,
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-steelgray" aria-label="Service highlights">
      <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-2 md:grid-cols-5 gap-6">
        {trustPoints.map((point) => (
          <div key={point.label}>
            <p className="text-[11px] uppercase tracking-widest text-charcoal/45">
              {point.label}
            </p>
            <p className="mt-1 font-bold text-charcoal">
              {point.href ? (
                <a
                  href={point.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-navy"
                >
                  {point.value}
                </a>
              ) : (
                point.value
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}