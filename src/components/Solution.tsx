const services = [
  {
    name: "End Mill Regrinding",
    keyword: "Carbide End Mill Sharpening",
    desc: "Regrinding of suitable carbide end mills to restore cutting edges and usable geometry.",
  },
  {
    name: "Ball Nose End Mill Regrinding",
    keyword: "Ball Nose Cutter Sharpening",
    desc: "Restore ball nose radius and cutting geometry for contour, profile and precision machining.",
  },
  {
    name: "Drill Bit Regrinding",
    keyword: "Carbide Drill Sharpening",
    desc: "Regrinding suitable drills to restore their cutting geometry and drilling performance.",
  },
  {
    name: "Chamfer Tool Regrinding",
    keyword: "Chamfer Cutter Sharpening",
    desc: "Restore chamfer cutter angles and cutting edges for consistent machining results.",
  },
  {
    name: "Roughing Cutter Regrinding",
    keyword: "Roughing End Mill Regrinding",
    desc: "Regrinding solutions for roughing mills, corn cutters and other specialized cutters.",
  },
  {
    name: "Radius End Mill Cutter",
    keyword: "Radius End Mill Regrinding",
    desc: "Regrinding of suitable radius end mill cutters to restore their radius and cutting geometry.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-steelgray py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
          Our Services
        </p>

        <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-3xl">
          Precision regrinding for
          <br />
          <span className="text-charcoal/40">
            the tools you depend on.
          </span>
        </h2>

        <p className="mt-6 text-lg text-charcoal/60 max-w-2xl leading-relaxed">
          End mill regrinding, carbide tool sharpening, drill regrinding,
          ball nose cutter sharpening and custom cutting tool solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-12">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="border-t border-charcoal/10 pt-6"
            >
              <div className="flex justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    {service.keyword}
                  </p>

                  <h3 className="font-black text-xl mb-3">
                    {service.name}
                  </h3>

                  <p className="text-charcoal/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <span className="text-xs font-bold text-charcoal/30">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
