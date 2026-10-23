import type { Metadata } from "next";
import BasicPage from "@/components/BasicPage";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export function generateMetadata(): Metadata { return pageMetadata({ title: "Bulk Regrinding Accounts | Shakti Milling Works", description: "Monthly regrinding terms for CNC and VMC job shops.", path: "/bulk-accounts" }); }
export default function BulkAccounts() { return <BasicPage title="Bulk Regrinding Accounts" path="/bulk-accounts"><p>For CNC and VMC job shops with recurring carbide-tool requirements. Our usual minimum quantity is {site.bulkAccounts.minimumQuantity}.</p><p>Collection is {site.bulkAccounts.localCollectionSchedule.toLowerCase()}. It is {site.bulkAccounts.weeklyCollectionSchedule.toLowerCase()}.</p><p>For bulk-account enquiries, call <a className="underline" href={`tel:${site.contact.primaryPhoneE164}`}>{site.contact.primaryPhoneDisplay}</a>. Share tool type, quantity and required timing for an assessment and quote.</p></BasicPage>; }
