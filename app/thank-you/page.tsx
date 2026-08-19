import type { Metadata } from "next";
import Boost from "@/components/Boost";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ThankYouTracker from "@/components/ThankYouTracker";
import Link from "next/link";
import { PAGE_META } from "@/lib/meta";
import { waForOrigin, type Origin } from "@/lib/whatsapp";

export const metadata: Metadata = PAGE_META["/thank-you"];

export default function ThankYouPage({ searchParams }: { searchParams: { from?: string } }) {
  const origin = (["managed", "self", "contact"].includes(searchParams.from || "")
    ? searchParams.from
    : "site") as Origin | "site";
  const waLink = waForOrigin(origin === "site" ? null : origin);

  return (
    <section
      data-boost="קיבלנו! נפתלי כבר עובר על הפרטים שלכם.|זה החלק שבו אני שותקת ונפתלי מתקשר.|אם זה דחוף, וואטסאפ מהיר יותר ממני.|תודה. באמת. אני AI אבל אני מתכוונת לזה."
      data-boost-mood="success"
      className="relative overflow-hidden py-[clamp(50px,9vw,120px)] pb-[clamp(60px,10vw,140px)]"
    >
      <ThankYouTracker origin={origin} />
      <div className="pointer-events-none absolute -top-[10%] left-1/2 h-[min(700px,90vw)] w-[min(700px,90vw)] -translate-x-1/2 animate-glow rounded-full bg-[radial-gradient(circle,rgba(200,255,77,.2),transparent_62%)] blur-[20px]" />
      <div className="relative mx-auto flex max-w-[800px] flex-col items-center gap-[18px] px-[clamp(16px,4vw,48px)] text-center">
        <div className="h-[104px] w-[104px] animate-bfloat">
          <Boost mode="success" />
        </div>
        <div dir="ltr" className="animate-fade font-mono text-[11px] font-medium leading-none tracking-[.24em] text-lime">
          THANK YOU
        </div>
        <h1 className="m-0 animate-rise font-display text-[clamp(34px,6.6vw,80px)] font-extrabold leading-[.98] tracking-[-.04em]">
          קיבלתי.
          <br />
          נפתלי יחזור אליכם.
        </h1>
        <p className="m-0 max-w-[32em] text-[17.5px] leading-[1.8] text-paper/66">
          אני קורא כל פנייה בעצמי ואחזור אליכם באופן אישי. אם זה דחוף – פשוט תכתבו לי בוואטסאפ ונדבר עוד היום.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <WhatsAppCTA
            href={waLink}
            route="/thank-you"
            className="inline-flex min-h-[56px] items-center gap-[10px] rounded-full bg-lime px-7 text-[17px] font-bold text-ink no-underline hover:text-ink"
          >
            לכתוב לי בוואטסאפ
          </WhatsAppCTA>
          <Link
            href="/"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-paper/32 px-[26px] text-[17px] font-semibold text-paper no-underline hover:border-paper hover:text-paper"
          >
            חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </section>
  );
}
