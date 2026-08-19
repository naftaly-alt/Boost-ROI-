"use client";

import Link from "next/link";
import { waGeneral } from "@/lib/whatsapp";
import { trackCustom } from "@/lib/tracking";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/12 py-8 min-[901px]:py-[clamp(32px,5vw,56px)]">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-[clamp(16px,4vw,48px)] text-center min-[901px]:flex-row min-[901px]:justify-between min-[901px]:px-[112px] min-[901px]:text-right">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 min-[901px]:justify-start">
          <Link href="/managed" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]">
            ניהול לחברות
          </Link>
          <Link href="/self" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]">
            ליווי לעצמאים
          </Link>
          <Link href="/results" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]">
            תוצאות
          </Link>
          <Link href="/about" className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]">
            עליי
          </Link>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener"
            onClick={() => trackCustom("whatsapp_click", { route: "footer" })}
            className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]"
          >
            וואטסאפ
          </a>
          <a
            href="https://www.instagram.com/naftalycohen/"
            target="_blank"
            rel="noopener"
            className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]"
          >
            אינסטגרם
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563066875491&locale=he_IL"
            target="_blank"
            rel="noopener"
            className="text-sm text-paper/70 hover:text-lime min-[901px]:text-[15px]"
          >
            פייסבוק
          </a>
        </nav>

        <Link
          href="/contact"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-lime px-6 text-sm font-bold text-ink no-underline hover:text-ink min-[901px]:min-h-[48px]"
        >
          יצירת קשר
        </Link>
      </div>
    </footer>
  );
}
