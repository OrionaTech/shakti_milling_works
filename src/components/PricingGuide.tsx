import { formatPricePerPiece, pricing } from "@/lib/site";

export default function PricingGuide() {
  return (
    <div className="mt-4 overflow-hidden rounded-md border border-steelgray text-sm text-charcoal/70">
      <p className="border-b border-steelgray px-4 py-3 font-semibold text-charcoal">Price guide — final pricing depends on tool condition and required work</p>
      <div className="grid grid-cols-3 divide-x divide-steelgray">
        <p className="p-3 font-medium">Diameter</p><p className="p-3 font-medium">Flutes</p><p className="p-3 font-medium">Price</p>
      </div>
      {pricing.ranges.map((range) => <div key={range.label} className="grid grid-cols-3 divide-x divide-steelgray border-t border-steelgray"><p className="p-3">{range.label}</p><p className="p-3">{range.fluteCount}</p><p className="p-3">{formatPricePerPiece(range.priceInr)}</p></div>)}
    </div>
  );
}
