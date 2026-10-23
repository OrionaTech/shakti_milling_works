import Image from "next/image";

const services = [
  {
    name: "End Mill Regrinding",
    keyword: "Carbide End Mill Sharpening",
    desc: "Regrinding of suitable carbide end mills to restore cutting edges and usable geometry.",
    image: "/images/tools/end_mill.jpg",
    imageAlt: "Carbide end mill cutting tool",
  },
  {
    name: "Ball Nose End Mill Regrinding",
    keyword: "Ball Nose Cutter Sharpening",
    desc: "Restore ball nose radius and cutting geometry for contour, profile and precision machining.",
    image: "/images/tools/ball_nose.jpg",
    imageAlt: "Carbide ball nose end mill",
  },
  {
    name: "Drill Bit Regrinding",
    keyword: "Carbide Drill Sharpening",
    desc: "Regrinding suitable drills to restore their cutting geometry and drilling performance.",
    image: "/images/tools/drill_bit.jpg",
    imageAlt: "Carbide drill bit for regrinding",
  },
  {
    name: "Chamfer Tool Regrinding",
    keyword: "Chamfer Cutter Sharpening",
    desc: "Restore chamfer cutter angles and cutting edges for consistent machining results.",
    image: "/images/tools/chamfer_tool.jpg",
    imageAlt: "Carbide chamfer cutter",
  },
  {
    name: "Roughing Cutter Regrinding",
    keyword: "Roughing End Mill Regrinding",
    desc: "Regrinding solutions for roughing mills, corn cutters and other specialized cutters.",
    image: "/images/tools/corn_mill_cutter.jpg",
    imageAlt: "Carbide roughing cutter",
  },
  {
    name: "Radius End Mill Cutter",
    keyword: "Radius End Mill Regrinding",
    desc: "Regrinding of suitable radius end mill cutters to restore their radius and cutting geometry.",
    image: "/images/tools/cornerradius.jpg",
    imageAlt: "Carbide radius end mill",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-steelgray py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
          Our Services
        </p>

        <h2 className="font-black text-3xl md:text-4xl tracking-tight max-w-3xl">
          Precision regrinding for
          <br />
          <span className="text-charcoal/40">the tools you depend on.</span>
        </h2>

        <p className="mt-6 text-lg text-charcoal/60 max-w-2xl leading-relaxed">
          End mill regrinding, carbide tool sharpening, drill regrinding,
          ball nose cutter sharpening and custom cutting tool solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group relative flex gap-5 rounded-xl border border-charcoal/10 bg-white p-4 sm:p-5 transition duration-200 hover:-translate-y-0.5 hover:border-spark/50 hover:shadow-lg"
            >
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-lg bg-charcoal/5 ring-1 ring-charcoal/10">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 640px) 128px, 96px"
                  quality={80}
                  unoptimized={service.image.endsWith(".svg")}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1.5">
                  {service.keyword}
                </p>
                <h3 className="font-black text-lg sm:text-xl leading-snug mb-2">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-charcoal/60 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <span className="absolute right-4 top-3 text-xs font-bold text-charcoal/20">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}