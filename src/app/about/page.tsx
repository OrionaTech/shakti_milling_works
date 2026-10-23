import type { Metadata } from "next";
import BasicPage from "@/components/BasicPage";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export function generateMetadata(): Metadata { return pageMetadata({ title: "About Shakti Milling Works", description: "Carbide tool regrinding from Yamunanagar, Haryana.", path: "/about" }); }
export default function About() { return <BasicPage title="About Shakti Milling Works"><p>Shakti Milling Works is a Yamunanagar-based carbide tool regrinding service with pan-India courier support.</p><p>Owner: {site.ownerName}. Suitable tools are assessed individually before work is confirmed. Customers can share photographs, quantities and dimensions to discuss regrinding, local collection or courier handling.</p></BasicPage>; }
