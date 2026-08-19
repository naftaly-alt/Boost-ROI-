"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/managed", label: "ניהול לחברות" },
  { href: "/self", label: "ליווי לעצמאים" },
  { href: "/results", label: "תוצאות" },
  { href: "/about", label: "עליי" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[80] border-b border-paper/10 bg-ink/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[clamp(62px,8vw,76px)] max-w-content items-center justify-between gap-4 px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
        <Link href="/" className="flex items-center gap-[11px] text-paper no-underline" onClick={() => setMenuOpen(false)}>
          <span className="relative h-[11px] w-[11px] rounded-[3px] bg-lime shadow-[0_0_18px_rgba(200,255,77,0.6)]" />
          <span className="flex flex-col gap-[3px]">
            <span className="font-display text-[clamp(15px,2.2vw,17px)] font-extrabold leading-none tracking-[-.01em]">
              נפתלי כהן
            </span>
            <span dir="ltr" className="font-mono text-[9px] font-normal leading-none tracking-[.24em] text-paper/50">
              BOOST ROI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-[clamp(10px,1.8vw,22px)] min-[901px]:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b py-2 text-[15px] font-medium no-underline transition-colors duration-150 hover:text-paper hover:border-lime ${
                pathname === l.href ? "border-lime text-paper" : "border-transparent text-paper/72"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-lime px-[22px] py-3 text-[15px] font-bold text-ink no-underline transition-transform duration-150 hover:-translate-y-px hover:text-ink hover:shadow-[0_8px_24px_rgba(200,255,77,0.28)]"
          >
            בואו נדבר
          </Link>
        </nav>

        <div className="flex items-center gap-[10px] min-[901px]:hidden">
          <Link href="/contact" className="rounded-full bg-lime px-4 py-[10px] text-sm font-bold text-ink no-underline">
            בואו נדבר
          </Link>
          <button
            type="button"
            aria-label="תפריט"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-paper/22 bg-transparent"
          >
            <span className="block h-[1.5px] w-[18px] bg-paper" />
            <span className="block h-[1.5px] w-[18px] bg-lime" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex animate-fade flex-col border-t border-paper/10 px-[clamp(16px,4vw,48px)] pb-[22px] pt-[10px] min-[901px]:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-paper/8 py-[15px] text-xl font-bold text-paper no-underline last:border-b-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
