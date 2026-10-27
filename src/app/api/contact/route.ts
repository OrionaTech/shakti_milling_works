import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function invalidRequest(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

export async function POST(req: Request) {
  let payload: unknown;

  try {
    payload = await req.json();
  } catch {
    return invalidRequest("Please submit a valid request.");
  }

  if (!isRecord(payload)) {
    return invalidRequest("Please submit a valid request.");
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const rawFields = [payload.name, payload.phone, payload.email, payload.message];
  if (rawFields.some((value) => value !== undefined && typeof value !== "string")) {
    return invalidRequest("Please check your details and try again.");
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !message) {
    return invalidRequest("Name and message are required.");
  }
  if (name.length > 100) {
    return invalidRequest("Name must be 100 characters or fewer.");
  }
  if (message.length > 3000) {
    return invalidRequest("Message must be 3000 characters or fewer.");
  }
  if (!phone && !email) {
    return invalidRequest("Please provide a phone number or email address.");
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return invalidRequest("Please provide a valid email address.");
  }

  const apiKey = process.env.RESEND_API_KEY_OVERRIDE ?? process.env.RESEND_API_KEY;
  if (!apiKey?.trim()) {
    console.error("Contact form could not send: Resend API key is not configured.");
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry right now. Please try again." },
      { status: 500 },
    );
  }

  const escapedName = escapeHtml(name);
  const escapedPhone = escapeHtml(phone || "Not provided");
  const escapedEmail = escapeHtml(email || "Not provided");
  const escapedMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, "<br />");
  const subjectName = name.replace(/[\r\n]+/g, " ").trim();
  const from = process.env.CONTACT_FROM_EMAIL ?? `${site.name} <${site.contact.emailSender}>`;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.quoteInbox;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `New enquiry from ${subjectName}`,
      text: `Name: ${name}\nPhone: ${phone || "Not provided"}\nEmail: ${email || "Not provided"}\n\nMessage:\n${message}`,
      html: `<h2>New contact enquiry</h2><p><strong>Name:</strong> ${escapedName}</p><p><strong>Phone / WhatsApp:</strong> ${escapedPhone}</p><p><strong>Email:</strong> ${escapedEmail}</p><p><strong>Message:</strong></p><p>${escapedMessage}</p>`,
    });

    if (error) {
      console.error("Resend rejected the contact enquiry.", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your enquiry right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send the contact enquiry.", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry right now. Please try again." },
      { status: 500 },
    );
  }
}
