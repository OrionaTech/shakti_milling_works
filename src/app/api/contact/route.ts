import { Resend } from "resend";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY_OVERRIDE ?? process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, phone, toolType, message } = await req.json();

  await resend.emails.send({
    from: `${site.name} <${site.contact.emailSender}>`,
    to: site.contact.quoteInbox,
    subject: `New quote request from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}\nTool: ${toolType}\nMessage: ${message}`,
  });

  return NextResponse.json({ ok: true });
}
