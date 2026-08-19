import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import TrackedCTA from "@/components/TrackedCTA";
import { TIMELINE } from "@/lib/content";
import { PAGE_META } from "@/lib/meta";

export const metadata: Metadata = PAGE_META["/about"];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-[clamp(32px,5vw,72px)] pb-[clamp(40px,6vw,80px)]">
        <div className="pointer-events-none absolute -right-[6%] -top-[14%] h-[min(520px,80vw)] w-[min(520px,80vw)] animate-glow rounded-full bg-[radial-gradient(circle,rgba(200,255,77,.16),transparent_62%)] blur-[18px] [animation-duration:8s]" />
        <div className="relative mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-center gap-[clamp(26px,4vw,56px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -bottom-[14px] -left-[12px] right-[14px] top-[-12px] rounded-[10px] border border-lime/40" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/naftaly-portrait.jpg"
              alt="נפתלי כהן"
              width={1245}
              height={1245}
              className="relative block h-auto w-full rounded-[10px] bg-[#22262A]"
            />
          </div>
          <div>
            <h1 className="m-0 font-display text-[clamp(38px,7.6vw,96px)] font-extrabold leading-[.94] tracking-[-.042em]">
              <span className="block animate-rise">נעים מאוד.</span>
              <span className="block animate-rise text-lime [animation-delay:.12s]">אני נפתלי.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-[1.85] text-paper/70">
              אני חי שיווק כבר שנים. ניהלתי קמפיינים, בניתי מערכי שיווק, עבדתי עם עסקים קטנים ועם חברות, ליוויתי בעלי עסקים
              והעברתי סדנאות.
            </p>
            <p className="mt-4 text-[17px] leading-[1.85] text-paper/70">בדרך גם ראיתי איך התחום משתנה. והוא משתנה מהר.</p>
            <p className="mt-[18px] font-display text-[clamp(20px,2.6vw,28px)] font-extrabold leading-[1.35] tracking-[-.022em]">
              היום אני פחות מאמין ב&quot;למכור שירותי דיגיטל&quot;. אני מאמין בלמצוא את הדרך הנכונה עבור העסק להביא לקוחות – ולעשות
              אותה פשוטה ככל האפשר.
            </p>
          </div>
        </div>
      </section>

      <ScrollReveal as="section" className="bg-paper py-[clamp(44px,6vw,92px)] text-ink">
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="mb-5 font-mono text-[11px] font-medium leading-none tracking-[.22em] text-forest">
            TIMELINE
          </div>
          <div className="flex flex-col border-t border-ink/14">
            {TIMELINE.map((t, i, arr) => {
              const last = i === arr.length - 1;
              return (
                <div
                  key={t}
                  className={`flex flex-wrap items-baseline gap-x-[22px] gap-y-[10px] border-b border-ink/14 py-[clamp(14px,2vw,20px)] transition-[padding-inline-start] duration-200 ${
                    last ? "text-forest" : ""
                  }`}
                >
                  <span dir="ltr" className="min-w-[34px] font-mono text-[11px] font-medium leading-none tracking-[.16em] text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(20px,3vw,32px)] font-extrabold leading-[1.15] tracking-[-.022em]">
                    {t}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap gap-3">
            <TrackedCTA
              href="/managed"
              event="homepage_managed_click"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-ink px-7 text-[17px] font-bold text-paper no-underline hover:bg-forest hover:text-paper"
            >
              תנהלו בשבילי
            </TrackedCTA>
            <TrackedCTA
              href="/self"
              event="homepage_self_click"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-ink/24 px-7 text-[17px] font-bold text-ink no-underline hover:border-ink hover:text-ink"
            >
              תלמדו אותי
            </TrackedCTA>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
