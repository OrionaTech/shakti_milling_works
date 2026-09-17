const beforeImages = [
  {
    src: "/images/before/end-mill-before-1.jpg",
    alt: "Worn tungsten carbide end mill before regrinding",
    title: "Worn Carbide End Mill",
    description:
      "Used tungsten carbide end mill showing wear after machining.",
  },
  {
    src: "/images/before/end-mill-before-2.jpg",
    alt: "Used carbide end mill cutting edges before sharpening",
    title: "Worn Cutting Edges",
    description:
      "Cutting edges showing signs of wear before the regrinding process.",
  },
];

const afterImages = [
  {
    src: "/images/after/end-mill-after-2.jpeg",
    alt: "Reground tungsten carbide end mill after precision sharpening",
    title: "Reground Carbide End Mill",
    description:
      "Tungsten carbide end mill after precision regrinding.",
  },
  {
    src: "/images/after/end-mill-after-1.jpeg",
    alt: "Sharpened carbide end mill ready for machining",
    title: "Restored Cutting Tool",
    description:
      "Finished end mill after regrinding and sharpening.",
  },
];

function ImageCard({
  image,
}: {
  image: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl bg-charcoal h-[280px] md:h-[360px]">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white font-black text-xl">
            {image.title}
          </p>

          <p className="text-white/60 text-sm mt-1">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="max-w-6xl mx-auto px-5 py-20 md:py-28"
    >
      {/* =======================================================
          SECTION INTRO
      ======================================================= */}

      <div className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-spark mb-4">
          Real Tools · Real Regrinding
        </p>

        <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-[0.95]">
          Don&apos;t replace it.
          <br />

          <span className="text-charcoal/40">
            Regrind it.
          </span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-2xl">
          See the difference precision regrinding can make to suitable
          tungsten carbide end mills. From worn cutting edges to
          professionally reground tools.
        </p>
      </div>

      {/* =======================================================
          BEFORE REGRINDING
      ======================================================= */}

      <div className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">
              Before Regrinding
            </p>

            <h3 className="font-black text-3xl md:text-4xl tracking-tight">
              Worn Carbide End Mills
            </h3>
          </div>

          <p className="text-sm text-charcoal/50 max-w-md leading-relaxed">
            Cutting edges can wear during machining. A worn tool does not
            always mean it needs to be replaced immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {beforeImages.map((image) => (
            <ImageCard
              key={image.src}
              image={image}
            />
          ))}
        </div>
      </div>

      {/* =======================================================
          AFTER REGRINDING
      ======================================================= */}

      <div className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-spark mb-2">
              After Regrinding
            </p>

            <h3 className="font-black text-3xl md:text-4xl tracking-tight">
              Restored &amp; Ready
            </h3>
          </div>

          <p className="text-sm text-charcoal/50 max-w-md leading-relaxed">
            Suitable tungsten carbide end mills can be reground to restore
            their cutting geometry and help extend their usable life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {afterImages.map((image) => (
            <ImageCard
              key={image.src}
              image={image}
            />
          ))}
        </div>
      </div>

      {/* =======================================================
          PRECISION PROCESS VIDEO
      ======================================================= */}

      <div className="border-t border-steelgray pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-spark mb-3">
              Precision Behind The Process
            </p>

            <h3 className="font-black text-3xl md:text-5xl tracking-tight leading-tight">
              See how carbide
              <br />
              end mills are reground.
            </h3>
          </div>

          <p className="text-charcoal/60 leading-relaxed max-w-md">
            Take a look at the grinding process behind tungsten carbide
            end mill regrinding. Precision grinding and careful attention
            to tool geometry are essential when restoring a worn cutter.
          </p>
        </div>

        {/* VIDEO */}
        <div className="relative overflow-hidden rounded-xl bg-charcoal shadow-xl">
          <video
            className="w-full aspect-video object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="/images/video-poster.jpg"
          >
            <source
              src="/videos/precision-regrinding.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </div>

        {/* VIDEO INFO */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-5">
          <div>
            <p className="text-sm font-semibold text-charcoal/70">
              Tungsten Carbide End Mill Regrinding
            </p>

            <p className="text-xs text-charcoal/40 mt-1">
              Precision grinding · Cutting edge restoration · Tool
              geometry
            </p>
          </div>

          <a
            href="#contact"
            className="font-bold text-navy hover:text-charcoal transition-colors"
          >
            Have worn end mills? Get a quote →
          </a>
        </div>
      </div>

      {/* =======================================================
          SEO / DISCLAIMER
      ======================================================= */}

      <div className="mt-10">
        <p className="text-xs text-charcoal/40 max-w-3xl leading-relaxed">
          Tungsten carbide end mill regrinding suitability depends on
          tool condition, remaining cutting geometry, dimensions and
          required application. Each end mill should be assessed
          individually before regrinding.
        </p>
      </div>
    </section>
  );
}
