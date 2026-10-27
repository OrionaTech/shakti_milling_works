"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

function isResponsePayload(value: unknown): value is { ok?: unknown; error?: unknown } {
  return typeof value === "object" && value !== null;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });
      const result: unknown = await response.json();

      if (!response.ok || !isResponsePayload(result) || result.ok !== true) {
        setStatus("error");
        setErrorMessage(
          isResponsePayload(result) && typeof result.error === "string"
            ? result.error
            : "We couldn't send your enquiry right now. Please try again.",
        );
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't send your enquiry right now. Please try again.");
    }
  }

  return (
    <div className="mt-6 rounded-xl bg-white p-7 text-charcoal md:p-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-trust">
          Send an enquiry
        </p>
        <h3 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
          Prefer to write to us?
        </h3>
        <p className="mt-3 leading-relaxed text-charcoal/60">
          Share your contact details and what you need reground. We&apos;ll get back to you.
        </p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-bold">
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
                className="min-h-12 w-full rounded-md border border-charcoal/20 px-4 py-3 text-base outline-none transition focus:border-trust focus:ring-2 focus:ring-trust/20"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold">
                Phone / WhatsApp
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="min-h-12 w-full rounded-md border border-charcoal/20 px-4 py-3 text-base outline-none transition focus:border-trust focus:ring-2 focus:ring-trust/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-bold">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className="min-h-12 w-full rounded-md border border-charcoal/20 px-4 py-3 text-base outline-none transition focus:border-trust focus:ring-2 focus:ring-trust/20"
            />
            <p className="mt-2 text-sm text-charcoal/50">
              Provide a phone number or email address so we can reply.
            </p>
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-bold">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              maxLength={3000}
              required
              className="w-full rounded-md border border-charcoal/20 px-4 py-3 text-base outline-none transition focus:border-trust focus:ring-2 focus:ring-trust/20"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-label="Leave this field empty"
            />
          </div>

          <div aria-live="polite" className="min-h-28">
            {status === "sent" && (
              <p className="rounded-md bg-trust/10 px-4 py-3 font-semibold text-trust">
                Thanks, your enquiry has been sent. We&apos;ll be in touch.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="rounded-md bg-red-50 px-4 py-3 font-semibold text-red-700">
                {errorMessage}
              </p>
            )}
            {status === "sending" && (
              <p className="px-1 py-3 text-sm text-charcoal/60">Sending your enquiry…</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-trust px-6 py-3 font-bold text-white transition-colors hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? "Sending…" : "Send enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
