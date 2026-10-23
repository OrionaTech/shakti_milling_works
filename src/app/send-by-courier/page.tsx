import type { Metadata } from "next";
import BasicPage from "@/components/BasicPage";
import { pageMetadata } from "@/lib/metadata";
export function generateMetadata(): Metadata { return pageMetadata({ title: "Send Tools by Courier | Shakti Milling Works", description: "How to pack and send carbide tools for pan-India regrinding.", path: "/send-by-courier" }); }
export default function Courier() { return <BasicPage title="Send Tools by Courier"><p>Pack tools so cutting edges cannot touch, label the quantity and include contact details. Send photos before dispatch to confirm assessment and courier handling.</p><p>Courier the tools to our Yamunanagar location. After regrinding, we normally courier them back within 24–48 hours, subject to assessment and courier handling.</p></BasicPage>; }
