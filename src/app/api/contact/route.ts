import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, phone, toolType, message } = await req.json();

  await resend.emails.send({
    from: "Shakti Milling Works <onboarding@orionatech.in>", // TODO: swap once your domain is verified in Resend
    to: "developer.balram@gmail.com", // TODO: your real inbox
    subject: `New quote request from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}\nTool: ${toolType}\nMessage: ${message}`,
  });

  return NextResponse.json({ ok: true });
}
