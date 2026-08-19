"use client";

import Link from "next/link";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" strokeWidth="1.7" />
      <path
        d="M13.6 9.2h1.4V7h-1.7c-1.6 0-2.7 1.1-2.7 2.7v1.2H9.3v2.2h1.3V17h2.2v-3.9h1.5l.3-2.2h-1.8v-1c0-.5.3-.7.8-.7z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/12 py-8 min-[901px]:py-[clamp(32px,5vw,56px)]">
      <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-[clamp(16px,4vw,48px)] text-center min-[901px]:px-[112px]">
        <div className="flex w-full flex-col items-center gap-5 min-[901px]:flex-row min-[901px]:justify-between min-[901px]:text-right">
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
          </nav>

          <Link
            href="/contact"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-lime px-6 text-sm font-bold text-ink no-underline hover:text-ink min-[901px]:min-h-[48px]"
          >
            יצירת קשר
          </Link>
        </div>

        <div className="flex items-center gap-4 border-t border-paper/10 pt-5">
          <a
            href="https://www.instagram.com/naftalycohen/"
            target="_blank"
            rel="noopener"
            aria-label="אינסטגרם"
            title="אינסטגרם"
            className="text-paper/60 transition-colors duration-150 hover:text-lime"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563066875491&locale=he_IL"
            target="_blank"
            rel="noopener"
            aria-label="פייסבוק"
            title="פייסבוק"
            className="text-paper/60 transition-colors duration-150 hover:text-lime"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
