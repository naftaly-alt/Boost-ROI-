import type { Metadata } from "next";
import Boost from "@/components/Boost";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { WHO_FOR, FLOW, PROOF } from "@/lib/content";
import { PAGE_META } from "@/lib/meta";
import { waManaged } from "@/lib/whatsapp";

export const metadata: Metadata = PAGE_META["/managed"];

export default function ManagedPage() {
  return (
    <div>
      <ScrollReveal
        as="section"
        reveal={false}
        dataBoost="מצב Performance מופעל. נפתלי לוקח את ההגה.|כאן נפתלי עובד. אני רק מעירה הערות מהצד.|זה המסלול לעסקים שכבר מוכרים ורוצים לעשות את זה טוב יותר.|אם אתם עוד לא מוכרים, המסלול השני מתאים לכם יותר."
        dataBoostMood="performance"
        className="relative overflow-hidden py-[clamp(32px,5vw,72px)] pb-[clamp(30px,4vw,52px)]"
      >
        <div className="pointer-events-none absolute -right-[8%] -top-[20%] h-[min(560px,80vw)] w-[min(560px,80vw)] animate-glow rounded-full bg-[radial-gradient(circle,rgba(200,255,77,.2),transparent_62%)] blur-[18px]" />
        <div className="relative mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="font-mono text-[11px] font-medium leading-none tracking-[.24em] text-lime">
            01 / DONE FOR YOU
          </div>
          <h1 className="mt-[clamp(14px,2vw,22px)] max-w-[16em] font-display text-[clamp(36px,8vw,104px)] font-extrabold leading-[.94] tracking-[-.042em]">
            <span className="block animate-rise">אתם מנהלים את העסק.</span>
            <span className="block animate-rise text-lime [animation-delay:.12s]">אני מנהל את ה-Performance.</span>
          </h1>
          <div className="mt-[clamp(20px,3vw,32px)] flex animate-rise flex-wrap items-center gap-5 [animation-delay:.24s]">
            <p className="m-0 max-w-[32em] text-[clamp(16px,1.9vw,19px)] leading-[1.8] text-paper/70">
              אני מנהל את הפרסום של חברות ועסקים שכבר עובדים ומוכרים, ורוצים לגדול בלי לזרוק כסף.
            </p>
            <div className="h-[clamp(72px,10vw,120px)] w-[clamp(72px,10vw,120px)] animate-bfloat">
              <Boost mode="performance" />
            </div>
          </div>
          <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap gap-3">
            <WhatsAppCTA
              href={waManaged}
              route="/managed"
              className="inline-flex min-h-[56px] items-center gap-[10px] rounded-full bg-lime px-7 text-[17px] font-bold text-ink no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:text-ink hover:shadow-[0_12px_30px_rgba(200,255,77,0.3)]"
            >
              <span className="h-2 w-2 rounded-full bg-forest" />
              בואו נדבר
            </WhatsAppCTA>
            <a
              href="#form"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-paper/32 px-[26px] text-[17px] font-semibold text-paper no-underline hover:border-paper hover:text-paper"
            >
              איך זה עובד ↓
            </a>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-paper py-[clamp(44px,6vw,92px)] text-ink">
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <h2 className="m-0 font-display text-[clamp(28px,4.6vw,54px)] font-extrabold leading-[1.04] tracking-[-.032em]">
            זה כנראה בשבילכם אם...
          </h2>
          <div className="mt-[clamp(22px,3vw,36px)] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3">
            {WHO_FOR.map((w) => (
              <div
                key={w.n}
                className={`rounded-[18px] p-[clamp(20px,2.6vw,28px)] transition-transform duration-200 ${
                  w.dark ? "bg-ink text-paper" : "bg-white text-ink"
                }`}
              >
                <div dir="ltr" className={`font-mono text-[10px] font-medium leading-none tracking-[.18em] ${w.dark ? "text-lime" : "text-forest"}`}>
                  {w.n}
                </div>
                <div className="mt-[14px] font-display text-xl font-extrabold leading-[1.2]">{w.title}</div>
                <div className={`mt-[9px] text-[15.5px] leading-[1.65] ${w.dark ? "text-paper/62" : "text-[#4A4E52]"}`}>
                  {w.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        dataBoost="שש שכבות. Ads Manager הוא רק אחת מהן.|רוב הבעיות שאני רואה לא נמצאות בקמפיין. הן נמצאות לפניו או אחריו.|אם המדידה שבורה, כל האופטימיזציה היא תיאטרון.|סקייל זה החלק הקל. להגיע למצב שמותר לעשות סקייל, זה העבודה."
        dataBoostMood="performance"
        className="py-[clamp(48px,7vw,104px)]"
      >
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="font-mono text-[11px] font-medium leading-none tracking-[.22em] text-lime">
            THE FLOW
          </div>
          <h2 className="mt-4 max-w-[20em] font-display text-[clamp(28px,5vw,62px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            אני לא מסתכל רק על Ads Manager.
          </h2>
          <p className="mt-4 max-w-[34em] text-[17px] leading-[1.8] text-paper/66">אני מסתכל על כל הדרך עד שהכסף חוזר לעסק.</p>
          <div className="mt-[clamp(24px,3.4vw,44px)] flex flex-col border-t border-paper/14">
            {FLOW.map((f) => (
              <div
                key={f.n}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-paper/14 py-[clamp(16px,2.2vw,24px)] transition-[padding-inline-start,background] duration-200 hover:bg-paper/4 hover:ps-[14px]"
              >
                <span dir="ltr" className="min-w-[34px] font-mono text-xs font-medium leading-none tracking-[.16em] text-lime">
                  {f.n}
                </span>
                <span className="font-display text-[clamp(21px,3vw,34px)] font-extrabold leading-[1.1] tracking-[-.022em]">
                  {f.title}
                </span>
                <span className="min-w-[220px] flex-1 text-[15.5px] leading-[1.65] text-paper/55">{f.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="bg-paper py-[clamp(44px,6vw,92px)] text-ink">
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-[clamp(26px,4vw,56px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -bottom-[12px] -left-[10px] right-[12px] top-[-10px] rounded-[10px] border border-forest/40" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/naftaly-portrait.jpg"
              alt="נפתלי כהן"
              width={1245}
              height={1245}
              className="relative block h-auto w-full rounded-[10px] bg-[#E6E3DC]"
            />
          </div>
          <div>
            <h2 className="m-0 font-display text-[clamp(26px,4.2vw,46px)] font-extrabold leading-[1.06] tracking-[-.03em]">
              מי שמוכר לכם הוא גם מי שעובד על העסק.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.85] text-[#4A4E52]">
              אין כאן Account Manager שמעביר אתכם ל-Junior. אני עובד ישירות מול בעלי העסק, ההנהלה וצוותי השיווק והמכירות.
            </p>
            <p className="mt-4 text-[17px] leading-[1.85] text-[#4A4E52]">
              אני מעדיף לעבוד עם מספר מוגבל של עסקים ולהכיר אותם לעומק. גם העברתי סדנאות לבעלי עסקים – זה מחדד את היכולת
              להסביר בדיוק מה קורה בחשבון.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        dataBoost="צילומי מסך אמיתיים. אפשר להתקרב ולבדוק.|אף אחד לא ערך את המספרים האלה. הם מכוערים בדיוק כמו המציאות.|תסתכלו על עלות ההמרה. שם מסתתר הסיפור.|יש חשבונות שהתחילו קטן. גם אלה בפנים."
        dataBoostMood="data"
        className="py-[clamp(48px,7vw,104px)]"
      >
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <h2 className="m-0 max-w-[20em] font-display text-[clamp(28px,5vw,62px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            בלי סיפורים. המסכים עצמם.
          </h2>
          <div className="mt-[clamp(22px,3vw,38px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[14px]">
            {PROOF.map((p) => (
              <article
                key={p.src}
                className="relative flex flex-col overflow-hidden rounded-[20px] border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.05),transparent)] transition-[border-color,transform] duration-200"
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
        </div>
      </ScrollReveal>

      <LeadForm origin="managed" />
    </div>
  );
}
