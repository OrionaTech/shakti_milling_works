import type { Metadata } from "next";
import BasicPage from "@/components/BasicPage";
import { pageMetadata } from "@/lib/metadata";
export function generateMetadata(): Metadata { return pageMetadata({ title: "Send Tools by Courier | Shakti Milling Works", description: "How to pack and send carbide tools for pan-India regrinding.", path: "/send-by-courier" }); }
export default function Courier() { return <BasicPage title="Send Tools by Courier"><p>Pack tools so cutting edges cannot touch, label the quantity and include contact details. Send photos before dispatch to confirm assessment and courier handling.</p><p>Courier orders are typically ready 24 hours after courier acceptance, subject to assessment. TODO: confirm packing and return-courier instructions.</p></BasicPage>; }
