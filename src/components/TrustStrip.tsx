const trustPoints = [
  { label: "Operating since", value: "2020" },
  { label: "Carbide end mills", value: "4mm–20mm" },
  { label: "Typical turnaround", value: "24 hours" },
  { label: "Regrinding from", value: "₹70 / piece" },
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
