import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Gallery from "@/components/Gallery";
import WhyRegrind from "@/components/WhyRegrind";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import TrustStrip from "@/components/TrustStrip";
import ServiceCoverage from "@/components/ServiceCoverage";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Header />

      <main>
        <Hero />

        <TrustStrip />

        <Problem />

        <Solution />

        <Gallery />

        <WhyRegrind />

        <HowItWorks />

        <Industries />

        <ServiceCoverage />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
