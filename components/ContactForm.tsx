"use client";

import { FormEvent, useState } from "react";

/**
 * ContactForm — front-end only for now, same wiring notes as JoinForm.tsx:
 * swap the simulated delay in handleSubmit for a real fetch() to a form
 * backend (e.g. Formspree) once one exists. Field names (name, email,
 * message) are already backend-friendly as-is.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-copper/40 bg-white/[0.03] p-8">
        <p className="font-display text-lg font-semibold text-paper">Message sent.</p>
        <p className="mt-2 font-body text-sm text-paper/60">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name">
          <input id="c-name" name="name" type="text" required className="dark-input" placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="c-email">
          <input id="c-email" name="email" type="email" required className="dark-input" placeholder="you@example.com" />
        </Field>
      </div>

      <Field label="Message" htmlFor="c-message">
        <textarea
          id="c-message"
          name="message"
          required
          rows={6}
          className="dark-input resize-none"
          placeholder="How can we help?"
        />
      </Field>

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <style jsx>{`
        :global(.dark-input) {
          width: 100%;
          border: 1px solid rgba(92, 107, 138, 0.35);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #f5f3ec;
          border-radius: 2px;
        }
        :global(.dark-input::placeholder) {
          color: rgba(245, 243, 236, 0.35);
        }
        :global(.dark-input:focus) {
          outline: 2px solid #c1631b;
          outline-offset: 1px;
          border-color: #c1631b;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-mono text-[11px] uppercase tracking-widest2 text-paper/50">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
