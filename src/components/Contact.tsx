const phone = "918572068977"; // Replace with your Indian WhatsApp number

const whatsappMessage = encodeURIComponent(
  `Hi Shakti Milling Works,

I would like to enquire about tool regrinding.

Tool Type:
Quantity:
Tool Size:

I can share photos of the tools for assessment and quotation.`
);

const whatsappLink = `https://wa.me/${phone}?text=${whatsappMessage}`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-navy text-white py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* HEADER */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-spark mb-5">
            Get A Regrinding Quote
          </p>

          <h2 className="font-black text-3xl md:text-4xl leading-tight tracking-tight">
            Have worn cutters?
            <br />
            <span className="text-spark">
              Send us a photo.
            </span>
          </h2>

          <p className="mt-7 text-white/60 text-lg leading-relaxed max-w-2xl">
            Don't worry if you don't know the exact tool specification.
            Send us clear photos of your end mills, drills or other cutting
            tools on WhatsApp. We'll review the tools and discuss the
            regrinding possibilities with you.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* WHATSAPP CARD */}
          <div className="bg-white text-charcoal rounded-xl p-7 md:p-10">
            <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center mb-6">
              <span className="text-trust text-xl">W</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-3">
              Fastest Way To Get A Quote
            </p>

            <h3 className="font-black text-3xl tracking-tight">
              WhatsApp Your Tools
            </h3>

            <p className="text-charcoal/60 leading-relaxed mt-4 max-w-lg">
              Take a few photos of your worn cutters and send them to us.
              Include the quantity and any dimensions you know.
            </p>

            <div className="mt-7 space-y-3 text-sm text-charcoal/60">
              <p>✓ Photos of the worn tool</p>
              <p>✓ Tool diameter or size if known</p>
              <p>✓ Quantity of tools</p>
              <p>✓ Your regrinding requirement</p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 w-full bg-trust text-white font-bold px-6 py-4 rounded-md hover:bg-charcoal transition-colors"
            >
              WhatsApp Your Tools →
            </a>

            <p className="text-xs text-charcoal/40 text-center mt-4">
              We'll discuss your requirement and quotation on WhatsApp.
            </p>

            <p className="text-sm font-semibold text-charcoal/70 text-center mt-3">
              4mm–20mm range · 24-hour turnaround · <span className="text-spark">From ₹70/piece</span>
            </p>
          </div>

          {/* LOCATION CARD */}
          <div className="bg-white/10 border border-white/10 rounded-xl overflow-hidden">

            {/* GOOGLE MAP */}
            <div className="w-full h-[280px] bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6701240419247!2d77.22839737534731!3d30.103632474893907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef942dbc03141%3A0xc9e820f8a58b7917!2sSHAKTI%20MILLING%20WORKS!5e0!3m2!1sen!2sin!4v1786432908069!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Shakti Milling Works location"
              />
            </div>

            <div className="p-7 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-spark mb-3">
                Visit Us
              </p>

              <h3 className="font-black text-2xl">
                Shakti Milling Works
              </h3>

              <p className="text-white/60 mt-3 leading-relaxed">
                Haryana, India
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">
                    WhatsApp
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 font-semibold text-white hover:text-spark transition-colors"
                  >
                    +91 8572068977
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="font-bold text-lg">
              Before buying another cutter, check if yours can be reground.
            </p>

            <p className="text-sm text-white/40 mt-1">
              Send us a photo and let us take a look.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-spark text-charcoal font-bold px-6 py-3 rounded-md hover:bg-white transition-colors whitespace-nowrap"
          >
            Get A Quote on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
