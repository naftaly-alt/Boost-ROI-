import type { Metadata } from "next";
import Boost from "@/components/Boost";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import TrackedCTA from "@/components/TrackedCTA";
import { STILL_NEED, LEARN_ITEMS, HOW_IT_WORKS } from "@/lib/content";
import { PAGE_META } from "@/lib/meta";

export const metadata: Metadata = PAGE_META["/self"];

export default function SelfPage() {
  return (
    <div>
      <ScrollReveal
        as="section"
        reveal={false}
        dataBoost="מצב לימוד. אני סבלנית. בערך.|המטרה היא שלא תצטרכו אותנו. מודל עסקי מדהים, אני יודעת.|אתם תעשו את הקליקים. נפתלי יגיד לכם על מה להסתכל.|החלק הכי חשוב שתלמדו הוא מתי לא לגעת."
        dataBoostMood="learning"
        className="relative overflow-hidden py-[clamp(32px,5vw,72px)] pb-[clamp(30px,4vw,52px)]"
      >
        <div className="pointer-events-none absolute -left-[8%] -top-[18%] h-[min(540px,80vw)] w-[min(540px,80vw)] animate-glow rounded-full bg-[radial-gradient(circle,rgba(200,255,77,.18),transparent_62%)] blur-[18px] [animation-duration:7.6s]" />
        <div className="relative mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="font-mono text-[11px] font-medium leading-none tracking-[.24em] text-lime">
            02 / DO IT YOURSELF
          </div>
          <h1 className="mt-[clamp(14px,2vw,22px)] max-w-[15em] font-display text-[clamp(38px,8.4vw,110px)] font-extrabold leading-[.94] tracking-[-.042em]">
            <span className="block animate-rise">הגיע הזמן להיות</span>
            <span className="block animate-rise text-lime [animation-delay:.12s]">הקמפיינרים של עצמכם.</span>
          </h1>
          <div className="mt-[clamp(20px,3vw,32px)] flex animate-rise flex-wrap items-center gap-5 [animation-delay:.24s]">
            <p className="m-0 max-w-[32em] text-[clamp(16px,1.9vw,19px)] leading-[1.8] text-paper/70">
              אני מלמד בעלי עסקים לנהל את הפרסום שלהם בעצמם. לא כדי שתהפכו לאנשי פרסום, אלא כדי שתדעו מה קורה עם הכסף שלכם.
            </p>
            <div className="h-[clamp(72px,10vw,120px)] w-[clamp(72px,10vw,120px)] animate-bfloat">
              <Boost mode="learning" />
            </div>
          </div>
          <a
            href="#form"
            className="mt-[clamp(22px,3vw,32px)] inline-flex min-h-[56px] items-center justify-center rounded-full bg-lime px-[30px] text-[17px] font-bold text-ink no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:text-ink hover:shadow-[0_12px_30px_rgba(200,255,77,0.3)]"
          >
            ספרו לי על העסק שלכם
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-paper py-[clamp(44px,6vw,92px)] text-ink">
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-start gap-[clamp(26px,4vw,52px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div>
            <h2 className="m-0 max-w-[17em] font-display text-[clamp(28px,4.6vw,54px)] font-extrabold leading-[1.04] tracking-[-.032em]">
              פעם הייתם חייבים איש מקצוע לכמעט הכול. היום כבר לא.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.85] text-[#4A4E52]">
              AI, אוטומציות והפלטפורמות עצמן עושות היום חלק גדול מהעבודה. הביצוע נעשה זול. השאלות הן אלה שנעשו יקרות.
            </p>
          </div>
          <div>
            <div className="mb-[10px] text-base font-bold">אבל עדיין צריך לדעת:</div>
            <div className="border-t border-ink/14">
              {STILL_NEED.map((n) => (
                <div
                  key={n}
                  className="border-b border-ink/14 py-[14px] text-[17px] font-semibold transition-[padding-inline-start] duration-200 hover:ps-[10px]"
                >
                  {n}
                </div>
              ))}
            </div>
            <p className="mt-[18px] font-display text-[22px] font-extrabold tracking-[-.02em]">את זה אני מלמד.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="py-[clamp(48px,7vw,104px)]">
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <h2 className="m-0 font-display text-[clamp(28px,5vw,62px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            מה נלמד יחד
          </h2>
          <div className="mt-[clamp(22px,3vw,36px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            {LEARN_ITEMS.map((text, i) => {
              const last = i === LEARN_ITEMS.length - 1;
              return (
                <div
                  key={text}
                  className={`rounded-[18px] p-[clamp(20px,2.4vw,26px)] transition-[transform,border-color] duration-200 ${
                    last ? "bg-lime text-ink border border-lime" : "border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.06),transparent)] text-paper"
                  }`}
                >
                  <span
                    dir="ltr"
                    className={`font-mono text-[10px] font-medium leading-none tracking-[.16em] ${
                      last ? "text-ink/55" : "text-lime"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 block text-[17.5px] font-bold leading-[1.4]">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="py-[clamp(48px,7vw,104px)]">
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <h2 className="m-0 font-display text-[clamp(28px,4.6vw,54px)] font-extrabold leading-[1.04] tracking-[-.032em]">
            אתם עושים. אני לידכם.
          </h2>
          <div className="mt-[clamp(22px,3vw,36px)] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
            {HOW_IT_WORKS.map((s, i) => (
              <div key={s.n} className={`border-t-2 pt-4 ${i === 0 ? "border-forest" : "border-paper/20"}`}>
                <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.16em] text-forest">
                  {s.n}
                </div>
                <div className="mt-3 text-[17.5px] font-bold leading-[1.4]">{s.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-[clamp(24px,3vw,36px)] max-w-[44em] rounded-[18px] bg-ink p-[24px_26px] text-paper">
            <div className="text-[15.5px] leading-[1.7] text-paper/60">המטרה היא לא ליצור תלות בי. המטרה הפוכה:</div>
            <div className="mt-[10px] font-display text-[clamp(22px,3vw,32px)] font-extrabold leading-[1.15] tracking-[-.025em] text-lime">
              שתהיה לכם שליטה.
            </div>
          </div>
          <p className="mt-[clamp(20px,2.6vw,30px)] max-w-[42em] text-[17px] leading-[1.85] text-[#4A4E52]">
            כבר לימדתי בעלי עסקים לעשות את זה – העברתי סדנאות בנושאי שיווק דיגיטלי, קמפיינים וחשיבה שיווקית, מתוך מטרה להפוך
            דברים שנראים מסובכים למשהו שאפשר להבין ולעשות.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="py-[clamp(48px,7vw,104px)]">
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[14px] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div className="rounded-[20px] border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.05),transparent)] p-[clamp(22px,2.8vw,32px)]">
            <h3 className="m-0 font-display text-2xl font-extrabold">מתאים ל:</h3>
            <ul className="m-0 mt-[18px] flex list-none flex-col gap-[11px] p-0">
              {["עצמאים ונותני שירות", "עסקים קטנים", "בעלי יכולת טכנית בסיסית", "מי שרוצה להבין מה קורה בחשבון שלו", "מי שרוצה לחסוך תלות בספק חיצוני"].map(
                (t) => (
                  <li key={t} className="flex gap-[10px] text-[16.5px] leading-[1.6] text-paper/70">
                    <span className="font-bold text-lime">•</span>
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex flex-col rounded-[20px] bg-paper p-[clamp(22px,2.8vw,32px)] text-ink">
            <h3 className="m-0 font-display text-2xl font-extrabold">פחות מתאים ל:</h3>
            <ul className="m-0 mt-[18px] flex list-none flex-col gap-[11px] p-0">
              {["מי שלא רוצה לגעת בכלל בשיווק", "חברות שצריכות Outsourcing מלא"].map((t) => (
                <li key={t} className="flex gap-[10px] text-[16.5px] leading-[1.6] text-[#4A4E52]">
                  <span className="font-bold text-forest">•</span>
                  {t}
                </li>
              ))}
            </ul>
            <TrackedCTA
              href="/managed"
              event="homepage_managed_click"
              className="mt-auto pt-6 text-[17px] font-bold text-forest"
            >
              אני רוצה שינהלו עבורי ←
            </TrackedCTA>
          </div>
        </div>
      </ScrollReveal>

      <LeadForm origin="self" />
    </div>
  );
}
