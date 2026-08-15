"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AREAS = ["UAV Engineering", "CubeSat & Small Satellites", "Research Lab", "Operations & Outreach"];
const STEPS = ["Your info", "Area of interest", "Message"];

export function JoinForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    setStatus("submitting");
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
      <div className="flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i <= step ? "bg-copper" : "bg-ink/10"
            }`}
          />
        ))}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/45">
        Step {step + 1} of {STEPS.length} — {STEPS[step]}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <input id="name" name="name" type="text" required className="form-input" placeholder="Your name" />
              </Field>
              <Field label="Email" htmlFor="email">
                <input id="email" name="email" type="email" required className="form-input" placeholder="you@example.com" />
              </Field>
            </div>
          )}

          {step === 1 && (
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
          )}

          {step === 2 && (
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
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-4">
        {step > 0 && (
          <button type="button" onClick={goBack} className="btn-secondary-dark">
            Back
          </button>
        )}
        <button type="submit" disabled={status === "submitting"} className="btn-secondary-dark">
          {step < STEPS.length - 1 ? "Next" : status === "submitting" ? "Sending…" : "Submit Application"}
        </button>
      </div>

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
          outline: 2px solid #7c3aed;
          outline-offset: 1px;
          border-color: #7c3aed;
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
      <label htmlFor={htmlFor} className="font-mono text-[11px] uppercase tracking-widest2 text-ink/55">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
