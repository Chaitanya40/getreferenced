export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="logo-grad"
          x1="8"
          y1="6"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BC08C" />
          <stop offset="0.55" stopColor="#1E8E94" />
          <stop offset="1" stopColor="#155A6B" />
        </linearGradient>
      </defs>
      <path
        d="M32 8C45.255 8 56 17.402 56 29c0 11.598-10.745 21-24 21a27.6 27.6 0 0 1-6.6-.79L14 54l2.2-9.2C11.13 41.06 8 35.4 8 29 8 17.402 18.745 8 32 8Z"
        fill="none"
        stroke="url(#logo-grad)"
        strokeWidth="3.4"
      />
      <rect x="20" y="24" width="18" height="3.6" rx="1.8" fill="#0E2A33" />
      <rect x="20" y="31" width="22" height="3.6" rx="1.8" fill="#1E7488" />
      <rect x="20" y="38" width="13" height="3.6" rx="1.8" fill="#0E2A33" />
      <path
        d="M47 16.5l1.6 4.3 4.3 1.6-4.3 1.6L47 28.3l-1.6-4.3-4.3-1.6 4.3-1.6L47 16.5Z"
        fill="url(#logo-grad)"
      />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-8 w-8" />
      <span className="text-lg font-bold tracking-tight text-ink">
        Get<span className="text-gradient">Referenced</span>
        <span className="text-ink-muted">.co</span>
      </span>
    </span>
  );
}
