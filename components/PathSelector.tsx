"use client";

import { useState } from "react";
import Link from "next/link";
import Boost, { BoostMode } from "./Boost";
import { trackCustom } from "@/lib/tracking";

type Hover = "managed" | "self" | null;

export default function PathSelector() {
  const [hover, setHover] = useState<Hover>(null);

  const boostMode: BoostMode = hover === "managed" ? "performance" : hover === "self" ? "learning" : "hello";
  const boostLine =
    hover === "managed"
      ? "מעולה. בואו נראה אם אנחנו מתאימים לעבוד יחד."
      : hover === "self"
      ? "יאללה. הגיע הזמן להבין לאן תקציב הפרסום שלכם הולך."
      : "היי, אני Boost. אז... איך אתם רוצים לעבוד?";

  return (
    <section className="pt-[clamp(18px,2.4vw,30px)]">
      <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(14px,1.8vw,20px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
        <Link
          href="/managed"
          onMouseEnter={() => setHover("managed")}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover("managed")}
          onClick={() => trackCustom("homepage_managed_click", {})}
          className="relative flex min-h-[clamp(300px,32vw,420px)] cursor-pointer flex-col overflow-hidden rounded-[24px] p-[clamp(22px,3vw,40px)] text-paper no-underline transition-[transform,border-color,opacity] duration-300"
          style={{
            background: "linear-gradient(180deg,rgba(244,242,237,.06),rgba(244,242,237,.02))",
            border: `1px solid ${hover === "managed" ? "#C8FF4D" : "rgba(244,242,237,.16)"}`,
            transform: hover === "managed" ? "translateY(-6px) scale(1.012)" : "none",
            opacity: hover === "self" ? 0.55 : 1,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg,rgba(200,255,77,.16),transparent 58%)",
              opacity: hover === "managed" ? 1 : 0,
            }}
          />
          <div className="relative flex items-center justify-between gap-3">
            <span dir="ltr" className="font-mono text-[10.5px] font-medium leading-none tracking-[.2em] text-lime">
              01 / DONE FOR YOU
            </span>
            <span className="h-[46px] w-[46px]">
              <Boost mode="performance" size={46} />
            </span>
          </div>
          <div className="relative mt-[clamp(20px,3vw,34px)] font-display text-[clamp(28px,4.4vw,50px)] font-extrabold leading-[1.02] tracking-[-.03em]">
            תעשו את זה
            <br />
            בשבילי.
          </div>
          <p className="relative mt-[14px] text-[16.5px] leading-[1.7] text-paper/66">
            יש לכם עסק פעיל, צוות ותקציב – ואתם רוצים מישהו שייקח אחריות על ה‑Performance.
          </p>
          <span className="relative mt-auto flex items-center gap-[10px] pt-[26px] text-[17px] font-bold text-lime">
            ניהול השיווק שלי{" "}
            <span
              className="inline-block transition-transform duration-200"
              style={{ transform: hover === "managed" ? "translateX(-8px)" : "none" }}
            >
              ←
            </span>
          </span>
        </Link>

        <Link
          href="/self"
          onMouseEnter={() => setHover("self")}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover("self")}
          onClick={() => trackCustom("homepage_self_click", {})}
          className="relative flex min-h-[clamp(300px,32vw,420px)] cursor-pointer flex-col overflow-hidden rounded-[24px] bg-paper p-[clamp(22px,3vw,40px)] text-ink no-underline transition-[transform,border-color,opacity] duration-300"
          style={{
            border: `1px solid ${hover === "self" ? "#0E1112" : "transparent"}`,
            transform: hover === "self" ? "translateY(-6px) scale(1.012)" : "none",
            opacity: hover === "managed" ? 0.55 : 1,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg,rgba(14,17,18,.08),transparent 58%)",
              opacity: hover === "self" ? 1 : 0,
            }}
          />
          <div className="relative flex items-center justify-between gap-3">
            <span dir="ltr" className="font-mono text-[10.5px] font-medium leading-none tracking-[.2em] text-forest">
              02 / DO IT YOURSELF
            </span>
            <span className="h-[46px] w-[46px]">
              <Boost mode="learning" size={46} />
            </span>
          </div>
          <div className="relative mt-[clamp(20px,3vw,34px)] font-display text-[clamp(28px,4.4vw,50px)] font-extrabold leading-[1.02] tracking-[-.03em]">
            אני רוצה ללמוד
            <br />
            לעשות לבד.
          </div>
          <p className="relative mt-[14px] text-[16.5px] leading-[1.7] text-[#4A4E52]">
            אתם עצמאים ורוצים להבין איך להביא לקוחות בלי להיות תלויים בקמפיינר.
          </p>
          <span className="relative mt-auto flex items-center gap-[10px] pt-[26px] text-[17px] font-bold text-forest">
            תהפכו אותי לקמפיינר של עצמי{" "}
            <span
              className="inline-block transition-transform duration-200"
              style={{ transform: hover === "self" ? "translateX(-8px)" : "none" }}
            >
              ←
            </span>
          </span>
        </Link>
      </div>

      <div className="mt-[clamp(18px,2.4vw,26px)] flex items-center justify-center gap-3 text-[15px] text-paper/50">
        <span className="h-[38px] w-[38px] flex-none">
          <Boost mode={boostMode} />
        </span>
        {boostLine}
      </div>
    </section>
  );
}
