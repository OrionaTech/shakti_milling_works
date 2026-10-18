import Image from "next/image";
import Link from "next/link";

const beforeImages = [
  {
    src: "/images/before/endmill-1-old.jpg",
    alt: "Worn tungsten carbide end mill before regrinding",
    title: "Worn Carbide End Mill",
    description:
      "Used tungsten carbide end mill showing wear after machining.",
  },
  {
    src: "/images/before/endmill-2-old.jpg",
    alt: "Used carbide end mill cutting edges before sharpening",
    title: "Worn Cutting Edges",
    description:
      "Cutting edges showing signs of wear before the regrinding process.",
  },
  {
    src: "/images/before/endmill-3-old.jpg",
    alt: "Damaged carbide end mill before precision regrinding",
    title: "Damaged Cutting Edge",
    description: "A used cutter with visible edge damage before regrinding.",
  },
  {
    src: "/images/before/endmill-4-old.png",
    alt: "Close-up of a worn carbide cutter before regrinding",
    title: "Worn Cutter Tip",
    description: "Close-up showing wear on a carbide cutting edge.",
  },
  {
    src: "/images/before/wornendmill.jpg",
    alt: "Worn end mill held before regrinding",
    title: "Used End Mill",
    description: "A worn end mill ready for assessment.",
  },
  {
    src: "/images/before/wornendmill2.jpg",
    alt: "Worn carbide end mill before restoration",
    title: "Worn Carbide Tool",
    description: "Another example of a used carbide tool.",
  },
];

const afterImages = [
  {
    src: "/images/after/endmill-1-new.jpg",
    alt: "Reground tungsten carbide end mill after precision sharpening",
    title: "Reground Carbide End Mill",
    description:
      "Tungsten carbide end mill after precision regrinding.",
  },
  {
    src: "/images/after/endmill-2-new.jpg",
    alt: "Sharpened carbide end mill ready for machining",
    title: "Restored Cutting Tool",
    description:
      "Finished end mill after regrinding and sharpening.",
  },
  {
    src: "/images/after/endmill-2.1-new.jpg",
    alt: "Reground end mill held after sharpening",
    title: "Sharpened End Mill",
    description: "A restored cutting edge ready for machining.",
  },
  {
    src: "/images/after/endmill-3-new.jpg",
    alt: "Carbide end mill after regrinding",
    title: "Precision Regrinding",
    description: "A carbide cutter after its cutting geometry is restored.",
  },
  {
    src: "/images/after/endmill-3-new.png",
    alt: "Close-up of a reground carbide end mill edge",
    title: "Restored Edge",
    description: "A close view of the sharpened cutting edge.",
  },
  {
    src: "/images/after/endmill-5-new.png",
    alt: "Carbide end mill after cutting-edge restoration",
    title: "Reground Cutter",
    description: "Finished tool after precision regrinding.",
  },
  {
    src: "/images/after/endmill-6-new.png",
    alt: "Sharpened carbide cutter after regrinding",
    title: "Ready for Machining",
    description: "A restored carbide cutter with a clean cutting edge.",
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
    <div className="group w-[200px] shrink-0 snap-start">
      <div className="relative h-[400px] w-[200px] overflow-hidden rounded-md bg-charcoal">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="200px"
          unoptimized={image.src.endsWith(".svg")}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
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

        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          role="region"
          aria-label="Worn carbide end mill photos"
          tabIndex={0}
        >
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

        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          role="region"
          aria-label="Restored carbide end mill photos"
          tabIndex={0}
        >
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
            preload="metadata"
            poster="/images/after/end-mill-after-1.jpeg"
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
        <Link
          href="/videos/precision-regrinding"
          className="mt-4 inline-block text-sm font-semibold text-navy underline underline-offset-4 hover:text-charcoal"
        >
          Watch the regrinding video on its own page →
        </Link>
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
