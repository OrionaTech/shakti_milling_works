import PricingGuide from "@/components/PricingGuide";
import TrackedLink from "@/components/TrackedLink";
import { site } from "@/lib/site";
import FeedbackPopupButton from "@/components/FeedbackPopupButton";
import ContactForm from "@/components/ContactForm";

const whatsappMessage = encodeURIComponent(
  `Hi Shakti Milling Works,

I would like to enquire about tool regrinding.

Tool Type:
Quantity:
Tool Size:

I can share photos of the tools for assessment and quotation.`
);

const whatsappLink = site.contact.whatsappE164
  ? `https://wa.me/${site.contact.whatsappE164}?text=${whatsappMessage}`
  : "#contact-details";

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
            Don&apos;t worry if you don&apos;t know the exact tool specification.
            Send us clear photos of your end mills, drills or other cutting
            tools on WhatsApp. We&apos;ll review the tools and discuss the
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

            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventParameters={{ placement: "contact_card" }}
              className="inline-flex items-center justify-center mt-8 w-full bg-trust text-white font-bold px-6 py-4 rounded-md hover:bg-charcoal transition-colors"
            >
              WhatsApp Your Tools →
            </TrackedLink>

            <p className="text-xs text-charcoal/40 text-center mt-4">
              We&apos;ll discuss your requirement and quotation on WhatsApp.
            </p>

            <PricingGuide />
          </div>

          {/* LOCATION CARD */}
          <div className="bg-white/10 border border-white/10 rounded-xl overflow-hidden">

            <div className="flex h-[280px] items-center justify-center bg-white/5 p-8 text-center text-white/60">
              <a href={site.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/30 px-5 py-3 font-bold text-white hover:border-spark hover:text-spark transition-colors">
                Get directions to Shakti Milling Works
              </a>
            </div>

            <div className="p-7 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-spark mb-3">
                Visit Us
              </p>

              <h3 className="font-black text-2xl">
                Shakti Milling Works
              </h3>

              <p id="contact-details" className="text-white/60 mt-3 leading-relaxed">{site.address}</p>
              <p className="mt-2 text-sm text-white/60">GSTIN: {site.gstin}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">WhatsApp</p>
                  <p className="mt-1 font-semibold text-white">{site.contact.primaryPhoneDisplay}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">Call</p>
                  <TrackedLink href={`tel:${site.contact.primaryPhoneE164}`} eventName="tel_click" eventParameters={{ placement: "contact_card" }} className="mt-1 inline-block font-semibold text-white hover:text-spark transition-colors">{site.contact.primaryPhoneDisplay}</TrackedLink>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">Opening hours</p>
                  <p className="mt-1 font-semibold text-white">{site.contact.hours}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">Email</p>
                  <a href={`mailto:${site.contact.email}`} className="mt-1 inline-block font-semibold text-white hover:text-spark transition-colors">{site.contact.email}</a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <ContactForm />

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

          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventParameters={{ placement: "contact_bottom_cta" }}
              className="inline-flex items-center justify-center bg-spark text-charcoal font-bold px-6 py-3 rounded-md hover:bg-white transition-colors whitespace-nowrap"
            >
              Get A Quote on WhatsApp →
            </TrackedLink>
            <FeedbackPopupButton />
          </div>
        </div>
      </div>
    </section>
  );
}
