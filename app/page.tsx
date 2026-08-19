import type { Metadata } from "next";
import Link from "next/link";
import Boost from "@/components/Boost";
import ScrollReveal from "@/components/ScrollReveal";
import PathSelector from "@/components/PathSelector";
import Ticker from "@/components/Ticker";
import AnimatedStat from "@/components/AnimatedStat";
import ClientMarquee from "@/components/ClientMarquee";
import TrackedCTA from "@/components/TrackedCTA";
import { STATS } from "@/lib/content";
import { PAGE_META } from "@/lib/meta";

export const metadata: Metadata = PAGE_META["/"];

export default function HomePage() {
  return (
    <div>
      <ScrollReveal
        as="section"
        reveal={false}
        dataBoost="היי, אני Boost. אני נשארת איתכם לאורך כל הגלילה, אל תדאגו.|שתי אפשרויות. אין תשובה נכונה, יש תשובה שמתאימה לכם.|תכל׳ס? רוב האנשים יודעים אחרי חמש שניות לאיזה צד הם שייכים.|אני לא אלחץ. טוב, אולי קצת."
        dataBoostMood="hello"
        className="relative overflow-hidden py-[clamp(30px,5vw,64px)] pb-[clamp(20px,3vw,36px)]"
      >
        <div className="pointer-events-none absolute -right-[6%] -top-[16%] h-[min(620px,80vw)] w-[min(620px,80vw)] animate-glow rounded-full bg-[radial-gradient(circle,rgba(200,255,77,.22),transparent_62%)] blur-[18px]" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(244,242,237,.045)_0_1px,transparent_1px_96px)]" />
        <div className="relative mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="animate-fade font-mono text-[11px] font-medium leading-none tracking-[.24em] text-lime">
            PERFORMANCE · STRATEGY · GROWTH
          </div>
          <h1 className="m-0 mt-[clamp(16px,2.4vw,26px)] font-display text-[clamp(44px,11.5vw,168px)] font-extrabold leading-[.9] tracking-[-.045em]">
            <span className="block animate-rise">AI שינה את השיווק.</span>
            <span className="block animate-rise text-lime [animation-delay:.12s]">הדרך לעבוד</span>
            <span className="flex flex-wrap items-center gap-[clamp(10px,2vw,26px)] animate-rise [animation-delay:.22s]">
              <span>איתו השתנתה גם.</span>
              <span className="h-[clamp(52px,9vw,120px)] w-[clamp(52px,9vw,120px)] flex-none animate-bfloat">
                <Boost mode="hello" />
              </span>
            </span>
          </h1>
          <div className="mt-[clamp(20px,3vw,34px)] flex animate-rise flex-wrap items-end justify-between gap-5 pb-[clamp(96px,12vh,130px)] [animation-delay:.34s]">
            <p className="m-0 max-w-[30em] text-[clamp(16px,2vw,20px)] leading-[1.7] text-paper/70">
              אני נפתלי כהן. אני עוזר לעסקים לייצר לקוחות דרך הרשתות החברתיות.{" "}
              <span className="font-semibold text-paper">או שאני עושה את זה בשבילכם, או שאני מלמד אתכם איך לעשות את זה.</span>
            </p>
            <div className="flex items-center gap-3 rounded-full border border-paper/16 px-[18px] py-3 text-[15px] text-paper/66">
              <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_#C8FF4D]" />
              פנוי לשיחה השבוע
            </div>
          </div>
        </div>
      </ScrollReveal>

      <PathSelector />

      <section className="mt-[clamp(34px,5vw,72px)] overflow-hidden border-y border-paper/10 py-[clamp(14px,2vw,20px)]">
        <Ticker />
      </section>

      <ScrollReveal
        as="section"
        dataBoost="AI כותב לכם 40 מודעות בדקה. עכשיו רק צריך לדעת איזו מהן שווה כסף.|אני עצמי AI, אז תאמינו לי: אני נהדרת בביצוע וגרועה בהחלטות.|AI לא יגיד לכם כמה ליד שווה לכם. זה עוד עליכם.|כולם משתמשים באותם כלים. ההבדל הוא מה אתם שואלים אותם."
        dataBoostMood="thinking"
        className="py-[clamp(48px,7vw,104px)]"
      >
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div dir="ltr" className="font-mono text-[11px] font-medium leading-none tracking-[.22em] text-lime">
            THE AI ERA
          </div>
          <h2 className="mt-4 max-w-[19em] font-display text-[clamp(28px,5vw,62px)] font-extrabold leading-[1.02] tracking-[-.035em]">
            AI לא הפך את השיווק לקל.
            <br />
            הוא רק הפך את הביצוע לזול.
          </h2>
          <p className="mt-5 max-w-[34em] text-[17px] leading-[1.8] text-paper/66">
            היום כל אחד יכול לייצר מודעה, סרטון ודף נחיתה בכמה דקות. בדיוק בגלל זה, מה שמבדיל בין עסק שמרוויח לעסק ששורף
            תקציב זה כבר לא הביצוע – אלא ההחלטות.
          </p>
          <div className="mt-[clamp(24px,3.4vw,42px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(12px,1.6vw,18px)]">
            {[
              { n: "01", title: "הביצוע נגיש לכולם", body: "אפשר לייצר חמישים מודעות ביום. זה כבר לא היתרון שלכם." },
              {
                n: "02",
                title: "השאלות התייקרו",
                body: "מה להגיד, למי, וכמה שווה לכם ליד – את זה AI לא יחליט במקומכם.",
              },
              { n: "03", title: "רק הדאטה מכריעה", body: "AI מייצר אפשרויות. המספרים אומרים איזו מהן באמת מביאה לקוחות." },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-[18px] border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.05),transparent)] p-[clamp(20px,2.6vw,30px)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-lime/50"
              >
                <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.18em] text-lime">
                  {c.n}
                </div>
                <div className="mt-[14px] font-display text-[21px] font-extrabold leading-[1.2]">{c.title}</div>
                <div className="mt-[10px] text-[15.5px] leading-[1.7] text-paper/60">{c.body}</div>
              </div>
            ))}
            <div className="rounded-[18px] bg-lime p-[clamp(20px,2.6vw,30px)] text-ink">
              <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.18em] text-ink/55">
                MY TAKE
              </div>
              <div className="mt-[14px] font-display text-[21px] font-extrabold leading-[1.25]">אני עובד עם AI כל יום.</div>
              <div className="mt-[10px] text-[15.5px] leading-[1.7] text-ink/72">
                בקריאייטיב, בניתוח נתונים ובאוטומציות. אבל הוא כלי – לא אסטרטגיה.
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        id="stats"
        dataBoost="מספרים אמיתיים מחשבונות אמיתיים. לא סקרינשוט מפינטרסט.|כל מספר כאן מגיע מחשבון אמיתי. אפשר להתקרב ולבדוק.|אני אוהבת את החלק הזה. כאן נגמרות המילים היפות.|שימו לב לעלות ולא לאימפרשנים. אימפרשנים לא משלמים משכורות."
        dataBoostMood="data"
        className="py-[clamp(48px,7vw,104px)]"
      >
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 max-w-[18em] font-display text-[clamp(28px,5vw,62px)] font-extrabold leading-[1.02] tracking-[-.035em]">
              מספרים מחשבונות אמיתיים.
            </h2>
            <TrackedCTA href="/results" event="case_study_click" className="text-base font-bold text-lime">
              לראות את הצילומים →
            </TrackedCTA>
          </div>
          <div className="mt-[clamp(24px,3.4vw,44px)] grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[clamp(12px,1.6vw,18px)]">
            {STATS.map((s) => (
              <div
                key={s.id}
                className="relative overflow-hidden rounded-[18px] border border-paper/14 bg-[linear-gradient(180deg,rgba(244,242,237,.05),transparent)] p-[clamp(20px,2.6vw,30px)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-lime/50"
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
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        dataBoost="כן, כולם באמת עבדו איתו. שאלו אותם.|פיננסים, נדל״ן, ספורט, אופנה. הלוגיקה דומה, המסרים שונים.|אני יודעת, פס לוגואים זה קלישאה. אבל אלה לוגואים אמיתיים.|אם העסק שלכם לא כאן, זה בסדר. עוד לא."
        dataBoostMood="pointing"
        className="bg-paper py-[clamp(40px,6vw,84px)] text-ink"
      >
        <div className="mx-auto mb-[clamp(16px,2vw,24px)] flex max-w-content flex-wrap items-baseline gap-x-4 gap-y-[10px] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <h2 className="m-0 font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-.02em]">
            עסקים שיצא לי לעבוד איתם
          </h2>
          <span className="text-[15px] text-[#4A4E52]">מפיננסים ונדל״ן ועד ספורט, אופנה ושירותים</span>
        </div>
        <ClientMarquee />
      </ScrollReveal>

      <ScrollReveal
        as="section"
        dataBoost="זה נפתלי. אני רק העוזרת החכמה שלו, והוא זה שעונה לוואטסאפ.|האדם שאתם רואים הוא גם האדם שיעבוד על החשבון שלכם. נדיר, אני יודעת.|הוא מעדיף מעט לקוחות ולהכיר אותם טוב. אני אמרתי לו שזה לא סקיילבילי. הוא לא הקשיב.|אני עושה את הבדיחות. הוא עושה את העבודה."
        dataBoostMood="hello"
        className="bg-paper py-[clamp(48px,7vw,104px)] text-ink"
      >
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(26px,4vw,60px)] px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -bottom-[14px] -left-[10px] right-[14px] top-[-10px] rounded-[10px] border border-forest/40" />
            <div
              dir="ltr"
              className="absolute -top-[14px] right-[-14px] z-[2] rounded-full bg-lime px-[13px] py-[9px] font-mono text-[10px] font-medium leading-none tracking-[.16em] text-ink"
            >
              NAFTALY COHEN
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/naftaly-portrait.jpg"
              alt="נפתלי כהן"
              width={1245}
              height={1245}
              className="relative block h-auto w-full rounded-[10px] bg-[#E6E3DC] [filter:contrast(1.04)]"
            />
          </div>
          <div>
            <div dir="ltr" className="font-mono text-[11px] font-medium leading-none tracking-[.22em] text-forest">
              ABOUT
            </div>
            <h2 className="mt-4 font-display text-[clamp(30px,5vw,58px)] font-extrabold leading-[1.02] tracking-[-.035em]">
              נעים מאוד,
              <br />
              נפתלי.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.85] text-[#4A4E52]">
              אני עובד בעולמות השיווק וה-Performance כבר שנים. ניהלתי קמפיינים לעסקים ממגוון תחומים, בניתי תהליכי שיווק,
              עבדתי לצד בעלי עסקים וצוותי מכירות – וגם העברתי סדנאות לבעלי עסקים שרצו להבין איך לעשות את הדברים בעצמם.
            </p>
            <p className="mt-[18px] font-display text-[clamp(19px,2.4vw,26px)] font-extrabold leading-[1.35] tracking-[-.02em]">
              לא כל עסק צריך קמפיינר. ולא כל עסק צריך לעשות את השיווק לבד.
            </p>
            <Link
              className="mt-6 inline-flex min-h-[52px] items-center gap-[9px] rounded-full border border-ink/24 px-6 text-base font-bold text-ink no-underline transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
              href="/about"
            >
              עוד קצת עליי ←
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="py-[clamp(48px,7vw,104px)]">
        <div className="mx-auto max-w-content px-[clamp(16px,4vw,48px)] min-[901px]:px-[112px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 max-w-[20em] font-display text-[clamp(28px,5vw,62px)] font-extrabold leading-[1.02] tracking-[-.035em]">
              הכלים שאני עובד איתם.
            </h2>
            <p className="m-0 max-w-[22em] text-base leading-[1.7] text-paper/60">
              איפה קונים תשומת לב – ואיפה מודדים אם זה עבד.
            </p>
          </div>
          <div className="mt-[clamp(22px,3vw,36px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[14px]">
            <div className="rounded-[20px] border border-transparent bg-paper p-[clamp(20px,2.6vw,30px)] text-ink">
              <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.2em] text-ink/50">
                MEDIA · WHERE ATTENTION IS BOUGHT
              </div>
              <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
                {[
                  { src: "/assets/platforms/k-meta.png", alt: "Meta" },
                  { src: "/assets/platforms/k-google-ads.png", alt: "Google Ads" },
                  { src: "/assets/platforms/k-tiktok.png", alt: "TikTok Ads" },
                  { src: "/assets/platforms/k-linkedin.png", alt: "LinkedIn Ads" },
                  { src: "/assets/platforms/k-youtube.png", alt: "YouTube Advertising" },
                  { src: "/assets/platforms/k-taboola-outbrain.png", alt: "Taboola · Outbrain" },
                ].map((p) => (
                  <div
                    key={p.alt}
                    className="flex h-[clamp(78px,8.4vw,98px)] items-center justify-center p-2 transition-transform duration-200 hover:-translate-y-[2px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-contain opacity-[.96]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded-[20px] border-2 border-lime bg-paper p-[clamp(20px,2.6vw,30px)] text-ink">
              <div dir="ltr" className="font-mono text-[10px] font-medium leading-none tracking-[.2em] text-forest">
                MEASUREMENT · WHERE TRUTH LIVES
              </div>
              <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
                {[
                  { src: "/assets/platforms/k-gtm.png", alt: "Google Tag Manager" },
                  { src: "/assets/platforms/k-ga.png", alt: "Google Analytics" },
                ].map((p) => (
                  <div
                    key={p.alt}
                    className="flex h-[clamp(78px,8.4vw,98px)] items-center justify-center p-2 transition-transform duration-200 hover:-translate-y-[2px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-contain opacity-[.96]" />
                  </div>
                ))}
              </div>
              <p className="mt-[18px] text-base leading-[1.75] text-[#4A4E52]">
                בלי מדידה נכונה כל השאר הוא ניחוש. כאן נקבע אם קמפיין &quot;עובד&quot; או רק נראה טוב.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        dataBoost="נו? גללתם עד לפה. אחד מהשניים כבר קורא לכם.|בחירה לא נכונה עדיפה על אף בחירה. תמיד אפשר לעבור צד.|אני מהמרת על ניהול. אבל אני AI, אני מהמרת על הכול.|זה הרגע שבו או שסוגרים את הטאב או שכותבים לנפתלי."
        dataBoostMood="pointing"
        className="relative overflow-hidden border-t border-paper/10 py-[clamp(56px,8vw,120px)]"
      >
        <div className="pointer-events-none absolute -left-[10%] -bottom-[30%] h-[min(560px,80vw)] w-[min(560px,80vw)] animate-glow rounded-full bg-[radial-gradient(circle,rgba(200,255,77,.18),transparent_62%)] blur-[20px]" />
        <div className="relative mx-auto flex max-w-content flex-col items-center gap-[18px] px-[clamp(16px,4vw,48px)] text-center min-[901px]:px-[112px]">
          <div className="h-[66px] w-[66px] animate-bfloat">
            <Boost mode="pointing" />
          </div>
          <h2 className="m-0 max-w-[18em] font-display text-[clamp(30px,6vw,74px)] font-extrabold leading-none tracking-[-.04em]">
            נשאר רק לבחור.
          </h2>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/managed"
              event="homepage_managed_click"
              className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-lime px-8 text-[17.5px] font-bold text-ink no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:text-ink hover:shadow-[0_12px_32px_rgba(200,255,77,0.3)]"
            >
              תנהלו בשבילי
            </TrackedCTA>
            <TrackedCTA
              href="/self"
              event="homepage_self_click"
              className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-paper/35 px-8 text-[17.5px] font-bold text-paper no-underline transition-[border-color,background] duration-200 hover:border-paper hover:bg-paper/6 hover:text-paper"
            >
              תלמדו אותי
            </TrackedCTA>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
