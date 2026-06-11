import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-white">
      <div className="container-px py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Get Referenced is a Generative Engine Optimization studio that gets
              your brand cited and recommended by the AI engines your customers
              now ask first.
            </p>
            <p className="mt-4 text-sm font-medium text-brand-deep">
              Win the AI Search Era.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a href="/#how" className="text-ink-soft hover:text-ink">How it works</a></li>
                <li><a href="/#services" className="text-ink-soft hover:text-ink">Services</a></li>
                <li><a href="/#pricing" className="text-ink-soft hover:text-ink">Pricing</a></li>
                <li><a href="/blog" className="text-ink-soft hover:text-ink">Blog</a></li>
                <li><a href="/#faq" className="text-ink-soft hover:text-ink">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Get started
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a href="/#contact" className="text-ink-soft hover:text-ink">Free audit</a></li>
                <li><a href="mailto:hello@getreferenced.co" className="text-ink-soft hover:text-ink">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Contact
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a href="mailto:hello@getreferenced.co" className="text-ink-soft hover:text-ink">hello@getreferenced.co</a></li>
                <li><a href="https://getreferenced.co" className="text-ink-soft hover:text-ink">getreferenced.co</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} GetReferenced.co. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Generative Engine Optimization · GEO · AI Search Visibility
          </p>
        </div>
      </div>
    </footer>
  );
}
