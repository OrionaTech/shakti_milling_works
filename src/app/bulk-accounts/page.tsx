import type { Metadata } from "next";
import BasicPage from "@/components/BasicPage";
import { pageMetadata } from "@/lib/metadata";
export function generateMetadata(): Metadata { return pageMetadata({ title: "Bulk Regrinding Accounts | Shakti Milling Works", description: "Monthly regrinding terms for CNC and VMC job shops.", path: "/bulk-accounts" }); }
export default function BulkAccounts() { return <BasicPage title="Bulk Regrinding Accounts"><p>For CNC and VMC job shops with recurring carbide-tool requirements. TODO: confirm monthly terms, minimum quantities, collection schedule and account contact.</p><p>Share tool type, quantity and required timing for an assessment and quote.</p></BasicPage>; }
