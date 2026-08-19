import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedStat from "@/components/AnimatedStat";
import ClientMarquee from "@/components/ClientMarquee";
import { STATS, PROOF } from "@/lib/content";
import { PAGE_META } from "@/lib/meta";

export const metadata: Metadata = PAGE_META["/results"];

export default function ResultsPage() {
  return (
    <div>
      <section className="py-[clamp(32px,5vw,68px)] pb-[clamp(30px,4vw,48px)]">
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="font-mono text-[11px] font-medium leading-none tracking-[.24em] text-lime">
            RESULTS
          </div>
          <h1 className="mt-[clamp(14px,2vw,22px)] max-w-[16em] animate-rise font-display text-[clamp(36px,7.6vw,96px)] font-extrabold leading-[.95] tracking-[-.042em]">
            בלי סיפורים.
            <br />
            <span className="text-lime">המסכים עצמם.</span>
          </h1>
          <p className="mt-5 max-w-[36em] text-[17px] leading-[1.8] text-paper/66">
            כל כרטיס מציג את הצילום המקורי מהחשבון, את המספר שמעניין ומשפט אחד שמסביר על מה להסתכל. בלי לגזור מזה הבטחות.
          </p>
        </div>
      </section>

      <ScrollReveal as="section" id="stats" className="pb-[clamp(30px,4vw,48px)]">
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[clamp(12px,1.6vw,18px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          {STATS.map((s) => (
            <div
              key={s.id}
              className="relative overflow-hidden rounded-[18px] border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.05),transparent)] p-[clamp(20px,2.6vw,30px)]"
            >
              <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.18em] text-paper/45">
                {s.source}
              </div>
              <AnimatedStat stat={s} />
              <div className="mt-3 text-base font-semibold leading-[1.5]">{s.label}</div>
              <div className="mt-[6px] text-sm leading-[1.6] text-paper/50">{s.note}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="py-[clamp(20px,3vw,40px)] pb-[clamp(48px,7vw,96px)]">
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[14px] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          {PROOF.map((p) => (
            <article
              key={p.src}
              className="relative flex flex-col overflow-hidden rounded-[20px] border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.05),transparent)]"
            >
              <div className="flex flex-col gap-[10px] p-[clamp(18px,2.2vw,24px)]">
                <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.2em] text-lime">
                  {p.platform}
                </div>
                <div dir="ltr" className="font-display text-[clamp(26px,3.4vw,40px)] font-extrabold leading-none tracking-[-.03em] text-paper">
                  {p.big}
                </div>
                <div className="text-base font-semibold leading-[1.45]">{p.headline}</div>
                <div className="text-[14.5px] leading-[1.65] text-paper/55">{p.note}</div>
              </div>
              <div className="mt-auto overflow-hidden bg-paper/6 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="block h-auto w-full rounded-lg bg-white transition-transform duration-[400ms] hover:scale-[1.04]"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[clamp(30px,4vw,52px)]">
          <div className="mx-auto mb-[clamp(14px,2vw,20px)] max-w-content px-[clamp(16px,4vw,48px)] text-[15px] text-paper/50 min-[901px]:px-[112px]">
            עסקים שיצא לי לעבוד איתם
          </div>
          <div className="bg-paper py-5">
            <ClientMarquee />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
