"use client";

import { useState } from "react";
import { Wordmark } from "./Logo";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why GEO" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] bg-white/80 backdrop-blur-md">
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#top" aria-label="GetReferenced.co home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Get a free audit
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/[0.06] bg-white md:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-mist"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a free audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
