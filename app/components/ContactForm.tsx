"use client";

import { useState } from "react";

// Web3Forms access keys are public by design (they live in client-side HTML).
// Create a free key at https://web3forms.com (enter hello@getreferenced.co —
// the key is emailed to you instantly), then paste it below or set
// NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your Vercel project env.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New free AI visibility audit request — GetReferenced.co",
          from_name: "GetReferenced.co website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or email hello@getreferenced.co.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks! We&rsquo;ll review your site and get back to you with your free
          AI visibility audit shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-deep hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 text-left shadow-card sm:p-8"
    >
      {/* Honeypot — bots fill this; humans never see it */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="mt-4">
        <Field
          label="Website"
          name="website"
          type="url"
          placeholder="https://yourbrand.com"
          required
        />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink-soft">
          What would you like us to look at?{" "}
          <span className="text-ink-muted">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Industry, main competitors, the questions your buyers ask AI…"
          className="w-full rounded-xl border border-ink/10 bg-mist/40 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-brand-teal focus:bg-white focus:ring-2 focus:ring-brand-teal/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Request my free audit"}
        {status !== "loading" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">{error}</p>
      )}

      <p className="mt-3 text-center text-xs text-ink-muted">
        We&rsquo;ll only use your details to send your audit. No spam.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label} {required && <span className="text-brand-teal">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-ink/10 bg-mist/40 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-brand-teal focus:bg-white focus:ring-2 focus:ring-brand-teal/20"
      />
    </div>
  );
}
