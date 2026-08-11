"use client";

import { FormEvent, useState } from "react";

/**
 * JoinForm — front-end only for now, per the brief.
 *
 * TO WIRE UP LATER (e.g. Formspree):
 * 1. Create a form at https://formspree.io and get your endpoint,
 *    e.g. https://formspree.io/f/xxxxxxx
 * 2. Replace handleSubmit's simulated delay below with a real fetch:
 *      await fetch(FORMSPREE_ENDPOINT, {
 *        method: "POST",
 *        headers: { Accept: "application/json" },
 *        body: new FormData(e.currentTarget),
 *      });
 * 3. Field names below (name, email, interest, message) already match
 *    what most form backends expect out of the box — no restructuring
 *    needed, just point the submit handler at a real endpoint.
 */

const AREAS = ["UAV Engineering", "CubeSat & Small Satellites", "Research Lab", "Operations & Outreach"];

export function JoinForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submit — replace with a real fetch() to Formspree or similar
    // once a backend endpoint exists. See component note above.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-copper/40 bg-copper/5 p-8">
        <p className="font-display text-lg font-semibold text-ink">
          Application received.
        </p>
        <p className="mt-2 font-body text-sm text-ink/65">
          We&apos;ll be in touch soon to schedule a short conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Area of interest" htmlFor="interest">
        <select id="interest" name="interest" required className="form-input" defaultValue="">
          <option value="" disabled>
            Select a track
          </option>
          {AREAS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input resize-none"
          placeholder="A little about your background and why you'd like to join FALAK."
        />
      </Field>

      <button type="submit" disabled={status === "submitting"} className="btn-secondary-dark w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Submit Application"}
      </button>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border: 1px solid rgba(18, 20, 28, 0.15);
          background: #ffffff;
          padding: 0.7rem 0.9rem;
          font-family: var(--font-body, inherit);
          font-size: 0.9rem;
          color: #12141c;
          border-radius: 2px;
        }
        :global(.form-input:focus) {
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
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] uppercase tracking-widest2 text-ink/55"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
