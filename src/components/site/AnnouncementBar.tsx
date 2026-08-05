import { useEffect, useState } from "react";
import { Megaphone, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

/** Dismissible announcement bar. State is remembered for the session. */
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("nc-announcement-dismissed") === "1") setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-accent text-accent-foreground"
    >
      <div className="container-page flex items-center justify-center gap-3 py-2.5 text-center text-[0.8125rem] font-medium sm:text-sm">
        <Megaphone strokeWidth={1.75} className="hidden size-4 shrink-0 sm:block" aria-hidden="true" />
        <p className="min-w-0">
          Fall build season kickoff is September 14 —{" "}
          <Link to="/apply" className="inline-flex items-center gap-1 underline underline-offset-4">
            reserve a student spot
            <ArrowRight strokeWidth={1.75} className="size-3.5" aria-hidden="true" />
          </Link>
        </p>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            sessionStorage.setItem("nc-announcement-dismissed", "1");
          }}
          aria-label="Dismiss announcement"
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-full transition-colors hover:bg-black/10 sm:size-8"
        >
          <X strokeWidth={2} className="size-4" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
