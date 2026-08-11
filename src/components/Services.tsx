const services = [
  { name: "End Mill Resharpening", desc: "Precision-restored cutting edges, close to factory sharpness." },
  { name: "Ball Mill Regrinding", desc: "Accurate radius regrinding for consistent contour finishing." },
  { name: "Drill Bit Regrinding", desc: "Point angle and clearance restored for clean, fast drilling." },
  { name: "Chamfer Tool Regrinding", desc: "Edge geometry restored for clean, burr-free chamfers." },
  { name: "Custom-Made Cutting Tools", desc: "Tools built to your spec when off-the-shelf won't cut it." },
  { name: "Center Drill & Corn Mill Cutters", desc: "Sharpening for center drills and corn/rougher mill cutters." },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-5 py-20 md:py-28 border-t border-steelgray">
      <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
        What We Do
      </p>
      <h2 className="font-black text-4xl md:text-5xl tracking-tight mb-14 max-w-xl">
        Regrinding &amp; custom tooling, done right.
      </h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {services.map((s) => (
          <div key={s.name} className="border-t border-steelgray pt-5">
            <h3 className="font-bold text-xl mb-2">{s.name}</h3>
            <p className="text-charcoal/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
