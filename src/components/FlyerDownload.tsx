export default function FlyerDownload() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl rounded-xl bg-charcoal px-6 py-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-white">
          Download our services flyer
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          All our regrinding services, sizes and contact details in one PDF.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/downloads/shakti-milling-works.pdf"
            download
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Download PDF
          </a>
          <a
            href="/downloads/shakti-milling-works.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            View online
          </a>
        </div>
      </div>
    </section>
  );
}