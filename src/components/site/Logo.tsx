/** Original brand mark: a shield/knight chevron over a circuit trace. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="nk-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7B1E28" />
          <stop offset="100%" stopColor="#5A121B" />
        </linearGradient>
      </defs>
      <path d="M16 2.5 27 6.5v11c0 6.2-4.6 10.6-11 12.5C9.6 28.1 5 23.7 5 17.5v-11z" fill="url(#nk-logo-grad)" />
      <path
        d="M11 17h3.2l1.8-4 2 8 1.8-4H23"
        stroke="#FAFAF9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8" r="2.2" fill="#FFA524" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="font-display text-[1.0625rem] leading-tight font-bold tracking-tight">
      Nova Knights
      <span className="block text-[0.6875rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        Robotics
      </span>
    </span>
  );
}
