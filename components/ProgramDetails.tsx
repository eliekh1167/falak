"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Program } from "@/lib/programs";

export function ProgramDetails({ program }: { program: Program }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-copper-light transition-colors hover:text-paper"
      >
        {open ? "Hide details" : "What students do & skills gained"}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ↓
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest2 text-copper-light">
                  What students do
                </p>
                <ul className="mt-3 space-y-2">
                  {program.whatStudentsDo.map((item) => (
                    <li
                      key={item}
                      className="border-l border-line-soft pl-3 font-body text-sm leading-relaxed text-paper/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest2 text-copper-light">
                  Skills gained
                </p>
                <ul className="mt-3 space-y-2">
                  {program.skillsGained.map((item) => (
                    <li
                      key={item}
                      className="border-l border-line-soft pl-3 font-body text-sm leading-relaxed text-paper/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
