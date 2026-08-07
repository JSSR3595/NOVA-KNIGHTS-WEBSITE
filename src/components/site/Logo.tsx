import logoAsset from "@/assets/nova-knights-logo.png.asset.json";

export const LOGO_URL = logoAsset.url;

/** Official Nova Knights team logo (from the team portfolio). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`bg-gradient-brand grid shrink-0 place-items-center overflow-hidden rounded-xl ${className}`}
    >
      <img
        src={LOGO_URL}
        alt=""
        aria-hidden="true"
        className="size-[86%] object-contain"
      />
    </span>
  );
}

export function Wordmark() {
  return (
    <span className="font-display text-[1.0625rem] leading-tight font-bold tracking-tight">
      Nova Knights
      <span className="block text-[0.6875rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        FTC #32326
      </span>
    </span>
  );
}
