/** Original brand mark: a hexagonal circuit node with an orbiting spark. */
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
        <linearGradient id="nc-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3730A3" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5 27 9v14L16 29.5 5 23V9z"
        fill="url(#nc-logo-grad)"
        rx="2"
      />
      <path
        d="M11 16h4l2-3.5 2 7 2-3.5h2"
        stroke="#FAFAF9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25.5" cy="6.5" r="3" fill="#F59E0B" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="font-display text-[1.0625rem] leading-tight font-bold tracking-tight">
      Nova Circuit
      <span className="block text-[0.6875rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        Robotics
      </span>
    </span>
  );
}
