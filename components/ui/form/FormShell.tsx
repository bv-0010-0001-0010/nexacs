"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { buildMailto } from "@/lib/mailto";
import { company } from "@/lib/content/company";

export function FormShell({
  subject,
  submitLabel,
  successHeading,
  successBody,
  privacyNote,
  children,
}: {
  subject: string;
  submitLabel: string;
  successHeading: string;
  successBody: string;
  privacyNote: string;
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const mailtoUrl = buildMailto({ to: company.email, subject, form: event.currentTarget });
    window.setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus("success");
    }, 300);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border border-amber-500/40 bg-amber-500/10 p-8 text-center md:p-12"
      >
        <p className="font-display text-2xl font-medium uppercase text-charcoal-900">{successHeading}</p>
        <p className="mx-auto mt-3 max-w-md text-charcoal-700">{successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children}
      <div className="space-y-4 pt-2">
        <p className="text-sm text-steel-500">{privacyNote}</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring inline-flex items-center gap-2 border border-amber-500 bg-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal-950 uppercase transition-colors hover:bg-amber-400 disabled:opacity-60"
        >
          {status === "submitting" ? "Opening your email app…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
