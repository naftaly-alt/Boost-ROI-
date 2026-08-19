"use client";

import Link from "next/link";
import { waGeneral } from "@/lib/whatsapp";
import { trackCustom } from "@/lib/tracking";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/12 py-8 min-[901px]:py-[clamp(40px,6vw,72px)]">
      <div className="mx-auto grid max-w-content grid-cols-2 items-start gap-x-5 gap-y-7 px-[clamp(16px,4vw,48px)] min-[901px]:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] min-[901px]:gap-[clamp(24px,4vw,44px)] min-[901px]:px-[112px]">
        <div className="col-span-2 min-[901px]:col-span-1">
          <div className="flex items-center gap-[10px]">
            <span className="h-[10px] w-[10px] rounded-[3px] bg-lime shadow-[0_0_16px_rgba(200,255,77,0.5)]" />
            <span className="font-display text-xl font-extrabold">נפתלי כהן</span>
          </div>
          <div dir="ltr" className="mt-[10px] font-mono text-[10px] font-normal leading-[1.6] tracking-[.22em] text-paper/45">
            BOOST ROI · PERFORMANCE MARKETING
          </div>
        </div>

        <nav className="flex flex-col gap-[9px] min-[901px]:gap-[11px]">
          <span dir="ltr" className="mb-1 font-mono text-[10px] font-medium tracking-[.18em] text-paper/40">
            האתר
          </span>
          <Link href="/managed" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]">
            ניהול לחברות
          </Link>
          <Link href="/self" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]">
            ליווי לעצמאים
          </Link>
          <Link href="/results" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]">
            תוצאות
          </Link>
          <Link href="/about" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]">
            עליי
          </Link>
        </nav>

        <nav className="flex flex-col gap-[9px] min-[901px]:gap-[11px]">
          <span dir="ltr" className="mb-1 font-mono text-[10px] font-medium tracking-[.18em] text-paper/40">
            יצירת קשר
          </span>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener"
            onClick={() => trackCustom("whatsapp_click", { route: "footer" })}
            className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]"
          >
            WhatsApp
          </a>
          <a href="https://www.instagram.com/naftalycohen/" target="_blank" rel="noopener" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]">
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563066875491&locale=he_IL"
            target="_blank"
            rel="noopener"
            className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15.5px]"
          >
            Facebook
          </a>
        </nav>

        <div className="flex flex-col gap-3">
          <span dir="ltr" className="font-mono text-[10px] font-medium tracking-[.18em] text-paper/40">
            בואו נדבר
          </span>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] w-fit items-center justify-center rounded-full bg-lime px-6 text-sm font-bold text-ink no-underline hover:text-ink min-[901px]:min-h-[52px] min-[901px]:text-base"
          >
            יצירת קשר
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-content flex-wrap justify-between gap-x-[18px] gap-y-2 border-t border-paper/12 px-[clamp(16px,4vw,48px)] pt-5 font-mono text-xs text-paper/40 min-[901px]:mt-[clamp(30px,4vw,48px)] min-[901px]:px-[112px]">
        <span>נפתלי כהן | Boost ROI</span>
        <span dir="ltr">© {new Date().getFullYear()} · All rights reserved</span>
      </div>
    </footer>
  );
}
