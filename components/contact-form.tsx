"use client";

import { useState, useTransition } from "react";
import { submitContact } from "@/app/actions";
import { motion } from "framer-motion";

export function ContactForm() {
  const [state, setState] = useState<{ status: "idle" | "success" | "error"; message?: string }>({
    status: "idle"
  });
  const [isPending, startTransition] = useTransition();

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
  action={(formData: FormData) => {
        startTransition(async () => {
          const result = await submitContact(formData);
          setState(result.success ? { status: "success", message: result.message } : { status: "error", message: result.error });
        });
      }}
      className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Name</span>
          <input
            name="name"
            required
            placeholder="Tell me who I'm speaking with"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">How can I help?</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Share the challenge you're exploring and the outcomes you want."
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send message"}
        </button>
        {state.status !== "idle" ? (
          <p
            className={state.status === "success" ? "text-sm text-brand-600" : "text-sm text-red-500"}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </motion.form>
  );
}
