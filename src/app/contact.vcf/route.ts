import { site } from "@/lib/site";

export function GET() {
  const card = ["BEGIN:VCARD", "VERSION:3.0", `FN:${site.name}`, `ORG:${site.name}`, `TEL;TYPE=WORK,VOICE:${site.contact.primaryPhoneE164}`, `TEL;TYPE=CELL:${site.contact.secondaryPhoneE164}`, `ADR;TYPE=WORK:;;${site.address};;;;`, `URL:${site.url}`, "END:VCARD"].join("\r\n");
  return new Response(card, { headers: { "Content-Type": "text/vcard; charset=utf-8", "Content-Disposition": "attachment; filename=shakti-milling-works.vcf" } });
}
